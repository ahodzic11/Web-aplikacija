const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

const db = require('./models/db.js');
const { kebabCase } = require('lodash');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))
app.use(express.static('public/html'))
app.use(express.static('public/js'))
app.use(express.static('public/css'))
app.use(express.static('public/images'))
app.use(express.text());

app.post('/student', function(req, res){
    var reqGrupa = req.body.grupa
    db.student.findOne({where: {index: req.body.index}}).then(function(nadjeniStudent){
            if(nadjeniStudent)
                res.status(200).json({status: "Student sa indexom " + nadjeniStudent.index + " već postoji!"})

            else{
                db.grupa.findOne({where: {ime: reqGrupa}}).then(function(nadjenaGrupa){
                    var noviStudent = {
                        ime: req.body.ime,
                        prezime: req.body.prezime,
                        index: req.body.index
                    }
                    if(!nadjenaGrupa)
                    {
                        var novaGrupa = {naziv: reqGrupa}
                        db.grupa.create({ime: novaGrupa.naziv}).then(function(k){
                            noviStudent.grupaId = k.id
                            db.student.create(noviStudent)
                        });
                    }else{
                        noviStudent.grupaId = nadjenaGrupa['id'];
                        db.student.create(noviStudent)
                    }
                })
                res.status(200).json({ status: "Kreiran student!" });
            }
        })
})

app.put('/student/:index', function(req, res){
    db.student.findOne({where: {index: req.params.index}}).then(function(pronadjenStudent){
        if(pronadjenStudent){
            db.grupa.findOne({where: {ime: req.body.grupa}}).then(function(pronadjenaGrupa){
                if(pronadjenaGrupa){
                    pronadjenStudent.setGrupa(pronadjenaGrupa)
                    res.status(200).json({ status: "Promjenjena grupa studentu " + req.params.index });
                }
                else{
                        db.grupa.create({ime: req.body.grupa}).then(function(novaGrupa){
                            pronadjenStudent.setGrupa(novaGrupa)
                    });
                }
            })
        }else
            res.status(200).json({ status: 'Student sa indexom ' + req.params.index + ' ne postoji!' });
    })
})


app.post('/batch/student', function(req, res){
    let studenti = req.body.toString().split('\n');
    let zaDodati = []
    let vecPostoje = []
    let finalniDodati = []
    let finalniPostoje = []
    let nizPromisa = []
    let sviIndeksi = []

    nizPromisa.push(db.student.findAll().then((nizStudenata) => {

        for(let i = 0; i < studenti.length; i++){
            let elementi = studenti[i].split(',')
            var student = {ime: elementi[0], prezime: elementi[1], index: elementi[2].toString(), grupa: elementi[3]}
            
            var postoji = false

            if(!sviIndeksi.includes(elementi[2].toString()))
                sviIndeksi.push(elementi[2].toString())
            else 
                finalniPostoje.push(student)


            for(let j = 0; j < nizStudenata.length; j++){
                if(elementi[2].toString() == nizStudenata[j].index)
                    postoji = true
            }

            if(postoji && !vecPostoje.includes(elementi[2].toString())) {vecPostoje.push(elementi[2].toString())
            finalniPostoje.push(student)}

            if(!postoji && !zaDodati.includes(elementi[2].toString())){ zaDodati.push(elementi[2].toString())
            finalniDodati.push(student)}
        }
        return new Promise(function(resolve,reject){resolve(nizStudenata)})
    }))


    Promise.all(nizPromisa).then(function(promis){  
        let nizPromisaGrupa = []
        for(let i = 0; i < finalniDodati.length; i++){
            nizPromisaGrupa.push(
                db.grupa.findOrCreate({where: {ime: finalniDodati[i].grupa}, defaults: {ime: finalniDodati[i].grupa}}).then(function(grupa){
                        finalniDodati[i].grupaId = grupa[0].id
                })
            )
        }

        Promise.all(nizPromisaGrupa).then(function(b){             //dodaje studenta
            let nizPromisaStudenata = []
            for(let i = 0; i < finalniDodati.length; i++){
                
                nizPromisaStudenata.push(
                    db.student.create(finalniDodati[i]).then(function(st){
                        return new Promise(function(resolve,reject){resolve(st)})
                    })
                )
            }

                Promise.all(nizPromisaStudenata).then(function(promis){     // vraca res

                    if(finalniPostoje.length == 0)
                        res.status(200).json({ status: "Dodano " + finalniDodati.length + " studenata!" });
                    else {
                        var postojeciIndexi = ""
                        for(let i = 0; i < finalniPostoje.length; i++){
                            if(i==finalniPostoje.length-1)
                            postojeciIndexi += finalniPostoje[i].index
                            else
                            postojeciIndexi += finalniPostoje[i].index + ","
                        }
                        res.status(200).json({status: "Dodano " + finalniDodati.length + " studenata, a studenti " + postojeciIndexi + " već postoje!"});
                    }
                })
            }).then(function(nizProm){

            }).catch(function(err){console.log("Grupe " + err);});
    })
})


app.get('/vjezbe/', function(req, res){
    db.vjezba.findAll().then(function(vjezbe){
        db.zadatak.findAll().then(function(zadaci){

            let brojZadataka = [];

            for(let i=0; i<vjezbe.length; i++){
                var brojZadatakaUVjezbi = 0;

                for(let j=0; j<zadaci.length; j++){

                    if(zadaci[j].vjezbaId == vjezbe[i].id){
                        brojZadatakaUVjezbi++;
                    }
                }
                brojZadataka.push(brojZadatakaUVjezbi);
            }
            res.json({ brojVjezbi: vjezbe.length, brojZadataka: brojZadataka });
        })
    })
});

app.post('/vjezbe',function(req,res){
    var brojVjezbi = req.body.brojVjezbi
    var brojZadataka = req.body.brojZadataka
    var x = ""
    var greska = false
    var zarez = false
    var brojVjezbiBool = false
    if(brojVjezbi<0 || brojVjezbi>15){
        x = "brojVjezbi"
        zarez = true
        greska = true
        brojVjezbiBool = true
    }
    
    for(let i=0; i<brojZadataka.length; i++)
        if(brojZadataka[i]<0 || brojZadataka[i]>10){
            if(zarez){
                x += ",z" + (i)
                greska = true
            }
            else{
                x += "z" + (i)
                zarez = true
                greska = true
            }
        }
    
        if(brojVjezbi != brojZadataka.length){
                if(zarez)
                    x += ",brojZadataka"
            else
                x += "brojZadataka"
                greska = true
                zarez = true
            }
                
        
    if(greska){
        res.send({status: "error", data: "Pogrešan parametar " + x})
        return
    }

    for(let i=0; i<brojVjezbi; i++){
        var vjezbaZaKreiranje = {imeVjezbe: "vjezba"+(i+1).toString()}
        db.vjezba.create(vjezbaZaKreiranje).then((vjezba)=>{
            for(let j=0; j<brojZadataka[i]; j++){
                var zadatak = {nazivZadatka: "zadatak"+(j+1).toString()}
                zadatak.vjezbaId = vjezba.dataValues.id;
                db.zadatak.create(zadatak);
            }
        })
    }
        res.send({brojVjezbi: brojVjezbi, brojZadataka: brojZadataka})
        return;
});


db.sequelize.sync().then((req) => {
    app.listen(3000, () => {
        console.log("Paljenje servera");
    });
});

module.exports = app
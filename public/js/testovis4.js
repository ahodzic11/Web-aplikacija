let chai = require('chai')
let assert=require('chai').assert
let server = require('../../index')
let http = require('http')
let chaiHttp = require('chai-http')
chai.use(chaiHttp)
let should = require('chai').should()
const db = require('../../models/db.js');


function resetTables(done) {
    db.grupa.destroy({
      truncate: true,
    });
    db.student.destroy({
      truncate: true,
    });
    done();
  }

describe('Testiranje rute POST/student', function(){
    before(resetTables)

    it('Test dodavanja studenta koji ne postoji u bazi', function(done){
        chai.request(server)
        .post('/student')
        .set('content-type', 'application/json')
        .send({
            ime: "Adnan",
            prezime: "Hodžić",
            index: "18716",
            grupa: "RI3-3"
        })
        .end(function(err, res){
            assert.isNull(err)
            res.should.have.status(200)
            res.body.status.should.be.eql("Kreiran student!")
            done()
        })
    })

    it('Test dodavanja studenta koji postoji u bazi', function(done){
        chai.request(server)
        .post('/student')
        .set('content-type', 'application/json')
        .send({
            ime: "Adnan",
            prezime: "Hodžić",
            index: "18716",
            grupa: "RI3-3"
        })
        .end(function(err, res){
            assert.isNull(err)
            res.should.have.status(200)
            res.body.status.should.be.eql("Student sa indexom 18716 već postoji!")
            done()
        })
    })

    it('Test pretraživanja studenata po indexu', function(done){
        chai.request(server)
        .post('/student')
        .set('content-type', 'application/json')
        .send({
            ime: "Keno",
            prezime: "Kenić",
            index: "18716",
            grupa: "RI2-3"
        })
        .end(function(err, res){
            assert.isNull(err)
            res.should.have.status(200)
            res.body.status.should.be.eql("Student sa indexom 18716 već postoji!")
            done()
        })
    })
})


describe('Testiranje rute PUT/student/:index', function(){

    it('Test promjene grupe postojećeg studenta u bazi - 1', function(done){
        chai.request(server)
        .put('/student/18716')
        .set('content-type', 'application/json')
        .send({
            grupa: "12345"
        })
        .end(function(err, res){
            assert.isNull(err)
            res.should.have.status(200)
            res.body.status.should.be.eql("Promjenjena grupa studentu 18716")
            done()
        })
    })

    it('Test promjene grupe postojećeg studenta u bazi - 2', function(done){
        chai.request(server)
        .put('/student/18716')
        .set('content-type', 'application/json')
        .send({
            grupa: "16853"
        })
        .end(function(err, res){
            assert.isNull(err)
            res.should.have.status(200)
            res.body.status.should.be.eql("Promjenjena grupa studentu 18716")
            done()
        })
    })
})

describe('Testiranje rute POST/batch/student', function(){
    before(resetTables)
    it('Test dodavanja studenata sa različitim indeksima', function(done){
        chai.request(server)
        .post('/batch/student')
        .set('content-type', 'text/plain')
        .send("Adnan,Hodžić,18716,RI1-1\nKeno,Kenić,18652,RI2-2\nMujo,Mujić,13531,RI3-2"
        )
        .end(function(err, res){
            assert.isNull(err)
            res.should.have.status(200)
            res.body.status.should.be.eql("Dodano 3 studenata!")
            done()
        })
    })

    it('Test dodavanja studenata sa istim indeksima', function(done){
        chai.request(server)
        .post('/batch/student')
        .set('content-type', 'text/plain')
        .send("Adnan,Hodžić,18716,RI1-1\nKeno,Kenić,18652,RI2-2\nMujo,Mujić,13531,RI3-2"
        )
        .end(function(err, res){
            assert.isNull(err)
            res.should.have.status(200)
            res.body.status.should.be.eql("Dodano 0 studenata, a studenti 18716,18652,13531 već postoje!")
            done()
        })
    })

    it('Test dodavanja različitih studenataočuvanja reda unosa studenata u CSV', function(done){
        chai.request(server)
        .post('/batch/student')
        .set('content-type', 'text/plain')
        .send("Ahmo,Ahmić,18111,RI1-1\nSelim,Selmić,18222,RI2-2\nMujo,Mujić,18333,RI1-2\nSanin,Saninović,18444,RI2-2\nMustafa,Mustafić,18555,RI4-3"
        )
        .end(function(err, res){
            assert.isNull(err)
            res.should.have.status(200)
            res.body.status.should.be.eql("Dodano 5 studenata!")
            done()
        })
    })

    it('Test dodavanja različitih studenata uz očuvanja reda unosa studenata u CSV', function(done){
        chai.request(server)
        .post('/batch/student')
        .set('content-type', 'text/plain')
        .send("Ahmo,Ahmić,18111,RI1-1\nSelim,Selmić,18222,RI2-2\nMujo,Mujić,18333,RI1-2\nSanin,Saninović,18444,RI2-2\nMustafa,Mustafić,18555,RI4-3"
        )
        .end(function(err, res){
            assert.isNull(err)
            res.should.have.status(200)
            res.body.status.should.be.eql("Dodano 0 studenata, a studenti 18111,18222,18333,18444,18555 već postoje!")
            done()
        })
    })

    it('Test unosa studenata duplikata', function(done){
        chai.request(server)
        .post('/batch/student')
        .set('content-type', 'text/plain')
        .send("Ahmo,Ahmić,13111,RI1-1\nSelim,Selmić,13111,RI2-2\nMujo,Mujić,13333,RI1-2\nSanin,Saninović,13333"
        )
        .end(function(err, res){
            assert.isNull(err)
            res.should.have.status(200)
            res.body.status.should.be.eql("Dodano 2 studenata, a studenti 13111,13333 već postoje!")
            done()
        })
    })

    it('Test dodavanja više istih indeksa različitog redoslijeda uz neke dobre unose', function(done){
        chai.request(server)
        .post('/batch/student')
        .set('content-type', 'text/plain')
        .send("Ahmo,Ahmić,17111,RI1-1\nSelim,Selmić,17111,RI2-2\nMujo,Mujić,17333,RI1-2\nSanin,Saninović,17444,RI2-2\nMustafa,Mustafić,17333,RI4-3\Avdo,Avdić,17222,RI3-3\nMeliha,Melihić,17666,RI2-3"
        )
        .end(function(err, res){
            assert.isNull(err)
            res.should.have.status(200)
            res.body.status.should.be.eql("Dodano 4 studenata, a studenti 17111,17333 već postoje!")
            done()
        })
    })
})
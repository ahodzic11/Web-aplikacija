var VjezbeAjax = (function (){
    var dodajInputPolja = function (DOMelementDIVauFormi, brojVjezbi){
        for(let i = 0; i < brojVjezbi; i++){
            var forma = document.createElement("novaForma");
            var labela = document.createElement("labela");
            var input = document.createElement("input");
            input.setAttribute("name", "z" +i);
            input.setAttribute("id", "z"+i);
            input.setAttribute("type", "number");
            input.setAttribute("value", 4);
            

            labela.innerHTML = "Unesite broj zadataka vjezbe" + (i+1).toString();
            
            forma.appendChild(labela);
            forma.appendChild(input);
            DOMelementDIVauFormi.appendChild(forma);
        }
    }

    var posaljiPodatke = function (vjezbeObjekat, callbackFja){
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200){
                callbackFja(null, ajax.response);
            }
            else if (ajax.readyState == 4)
            callbackFja(error,null);
        }
        ajax.open("POST","http://localhost:3000/vjezbe",true);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify(vjezbeObjekat));
     
    }

    var dohvatiPodatke = function (callbackFja) {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                callbackFja(null, ajax.response)
            }
            else if (ajax.readyState == 4) {
                callbackFja(ajax.status, null)
            }
        }
        ajax.open("GET", "http://localhost:3000/vjezbe/", true);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send();
    }

    var iscrtajVjezbe = function(divDOMelement, objekat){

        if(objekat.brojVjezbi<0 || objekat>15) return

        for (let i = 0; i < objekat.brojVjezbi; i++) { 


            let divVjezbeListaElement = document.createElement("div");
            divVjezbeListaElement.classList.add("vjezbe-lista", "vjezba"+(i+1));
            
            let divElement = document.createElement("p");
            divElement.classList.add("vjezba");
            divElement.innerHTML = "Vježba " + (i+1);

            divVjezbeListaElement.appendChild(divElement);
            divDOMelement.appendChild(divVjezbeListaElement);
        }
    }

    var iscrtajZadatke = function(vjezbaDOMelement,brojZadataka) {
        if(brojZadataka < 0 || brojZadataka > 10) return

        let glavniDiv = document.createElement("div");
        glavniDiv.classList.add("zadaci")
        console.log(brojZadataka)
        if(brojZadataka == 0){
            let zadatak = document.createElement("div");
            zadatak.classList.add("probni")
            glavniDiv.appendChild(zadatak)
        }
        for(let i=0; i<brojZadataka; i++) {
            let zadatak = document.createElement("div");
            zadatak.classList.add("zadatak" + (i+1), "zadatak")
            let tekstZadatka = document.createElement("p")
            tekstZadatka.innerHTML = "Zadatak " + (i+1)
            zadatak.appendChild(tekstZadatka)
            glavniDiv.appendChild(zadatak)
        }
        vjezbaDOMelement.appendChild(glavniDiv)
    }

    return{dodajInputPolja : dodajInputPolja,
           posaljiPodatke: posaljiPodatke,
        dohvatiPodatke: dohvatiPodatke,
        iscrtajVjezbe: iscrtajVjezbe,
        iscrtajZadatke: iscrtajZadatke
    }
}());
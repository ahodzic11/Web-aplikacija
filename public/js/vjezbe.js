
window.onload = function(){
    VjezbeAjax.dohvatiPodatke(vratiVjezbeObjekat)
    
}

function vratiVjezbeObjekat(error, data){
    if(error) return error.responseText

    VjezbeAjax.iscrtajVjezbe(document.getElementById("odabirVjezbe"), JSON.parse(data))


    let divOdabirVjezbe = document.getElementById("odabirVjezbe")
    
    let vjezbelista = divOdabirVjezbe.getElementsByClassName("vjezbe-lista")
    let divVjezbeListaElement = document.getElementsByClassName("vjezbe-lista")
    for(let i = 0; i < vjezbelista.length; i++){
        vjezbelista[i].addEventListener("click", function(){
            if(document.getElementsByClassName("vjezbe-lista")[i].getElementsByClassName("zadaci").length == 0)
                     VjezbeAjax.iscrtajZadatke(divVjezbeListaElement[i], JSON.parse(data).brojZadataka[i])
                else 
                    document.getElementsByClassName("vjezbe-lista")[i].getElementsByClassName("zadaci")[0].style = ""
            console.log(vjezbelista.length)
            for(let j = 0; j<vjezbelista.length; j++){
                if(j==i) continue
                for(let k = 0; k < document.getElementsByClassName("vjezbe-lista")[j].getElementsByClassName("zadaci").length; k++){
                    document.getElementsByClassName("vjezbe-lista")[j].getElementsByClassName("zadaci")[k].style.display = "none"
                }
            }
        })
    }
}
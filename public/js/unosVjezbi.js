var unos = document.getElementById("button-primary")

unos.addEventListener("click", function(){
    if(document.getElementById("ulazniBroj").value < 1 || document.getElementById("ulazniBroj").value > 15) return

    VjezbeAjax.dodajInputPolja(document.getElementById("dodaneforme"), document.getElementById("ulazniBroj").value)
    document.getElementById("button-primary").disabled = true
});

var posalji = document.getElementById("buttonPosalji")

posalji.addEventListener("click",function(){
    if(document.getElementById("button-primary").disabled == true){
        var brojVjezbi = parseInt(document.getElementById("ulazniBroj").value)
        var niz = []
        for(let i=0; i< document.getElementById("ulazniBroj").value; i++){
            var brojZadataka = document.getElementById("z"+i).value;
            niz.push(brojZadataka)
        }
        VjezbeAjax.posaljiPodatke({brojVjezbi: brojVjezbi, brojZadataka: niz}, function(error, data){})
    }
})
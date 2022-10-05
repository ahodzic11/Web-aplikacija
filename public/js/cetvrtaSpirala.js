window.onload = function(){

var unosStudenta = document.getElementById("buttonproba")
    if(unosStudenta != null){
        unosStudenta.addEventListener("click", function(){   
            StudentAjax.dodajStudenta({
                ime: document.getElementById("ime").value,
                prezime: document.getElementById("prezime").value,
                index: document.getElementById("index").value,
                grupa: document.getElementById("grupa").value
            }, function(error, data){
                if(error) throw error
                var status = document.getElementById("ajaxstatus")
                status.innerHTML = JSON.parse(data).status 
            })
    
        });
    }

    var promjenaStudenta = document.getElementById("button-grupa")

    if(promjenaStudenta != null){


    promjenaStudenta.addEventListener("click", function(){

        var index = document.getElementById("index").value
        var grupa = document.getElementById("grupa").value

        console.log(index)
        console.log(grupa)

        StudentAjax.postaviGrupu(index, grupa, function(error, data){
            if(error) throw error
                var status = document.getElementById("ajaxstatus")
                status.innerHTML = JSON.parse(data).status 
        })
    });
}

    var dodajBatch = document.getElementById("button-batch")
    if(dodajBatch!=null){
        dodajBatch.addEventListener("click", function(){
    
            var csv = document.getElementById("csv").value
    
            StudentAjax.dodajBatch(csv, function(error, data){
                if(error) throw error
                var status = document.getElementById("ajaxstatus")
                status.innerHTML = JSON.parse(data).status 
            })
        });
    }
    
}



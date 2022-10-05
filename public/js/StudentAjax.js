var StudentAjax = (function (){

    var dodajStudenta = function(student, fnCallBack){
        console.log("uslo u dodajStudenta ajax")
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200){
                fnCallBack(null, ajax.response);
            }
            else if (ajax.readyState == 4)
                fnCallBack(error,null);
        }
        ajax.open("POST","http://localhost:3000/student",true);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify(student));
    }

    var postaviGrupu = function (index, grupa, fnCallback) {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                fnCallback(null, ajax.response)
            }
            else if (ajax.readyState == 4) {
                fnCallback(ajax.status, null)
            }
        }
        ajax.open("PUT", `/student/${index}`, true);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify({grupa: grupa}));
    }

    var dodajBatch = function(csvStudenti, fnCallBack){
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200){
                fnCallBack(null, ajax.response);
            }
            else if (ajax.readyState == 4)
            fnCallBack(error,null);
        }
        ajax.open("POST","http://localhost:3000/batch/student",true);
        ajax.setRequestHeader("Content-Type", "text/plain");
        ajax.send(csvStudenti);
    }

    return{
        dodajStudenta : dodajStudenta,
        postaviGrupu: postaviGrupu,
        dodajBatch: dodajBatch
    }
}());
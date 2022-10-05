var TestoviParser = (function () {
    var dajTacnost = function (jsonString) {
        var rezultat = {
            "tacnost": "100%",
            "greske": []
        }

        try {
            var objekat = JSON.parse(jsonString)
        } catch (error) {
            rezultat.tacnost = "0%";
            rezultat.greske.push("Testovi se ne mogu izvršiti");
            return rezultat;
        }

        if (objekat.stats.failures == 0 || objekat.failures.length == 0) return rezultat;
        for (var i = 0; i < objekat.failures.length; i++) {
            rezultat.greske.push(objekat.failures[i].fullTitle)
        }
        rezultat.tacnost = Math.round((objekat.stats.passes / objekat.stats.tests) * 100 * 10)/10 + '%'
        return rezultat
    }

    var porediRezultate = function (rezultat1, rezultat2) {
        var rezultat = {
            "promjena": "x%",
            "greske": []
        }
        try {
            var objekat1 = JSON.parse(rezultat1)
            var objekat2 = JSON.parse(rezultat2)
        } catch (error) {
            rezultat.promjena = "0%";
            rezultat.greske.push("Testovi se ne mogu izvršiti");
            return rezultat;
        }
        
        var identicni = true
        //provjera da li su testovi identicni
        for (var i = 0; i < objekat1.tests.length; i++) {
            var postoji = false
            for (var j = 0; j < objekat2.tests.length; j++) {
                if (objekat1.tests[i].fullTitle == objekat2.tests[j].fullTitle)
                    postoji = true
            }
            if (!postoji) identicni = false
        }
        //provjera da li su testovi identicni
        for (var i = 0; i < objekat2.tests.length; i++) {
            var postoji = false
            for (var j = 0; j < objekat1.tests.length; j++) {
                if (objekat2.tests[i].fullTitle == objekat1.tests[j].fullTitle)
                    postoji = true
            }
            if (!postoji) identicni = false
        }
        if (identicni) {
            rezultat.promjena = Math.round(parseFloat(dajTacnost(JSON.stringify(objekat2)).tacnost) * 10)/10 + '%'
            rezultat.greske = dajTacnost(JSON.stringify(objekat2)).greske.sort()
        } else {
            var brojTestova = 0
            //broj testova koji padaju u rezultatu 1 a ne pojavljuju se u rezultatu2 
            for (var i = 0; i < objekat1.tests.length; i++) {
                postoji = false
                for (var j = 0; j < objekat2.tests.length; j++) {
                    if (objekat1.tests[i].fullTitle == objekat2.tests[j].fullTitle)
                        postoji = true
                }
                if (!postoji && !objekat2.failures.includes(objekat1.tests[i]))
                    brojTestova++
            }
            //dodan broj testova koji padaju a u rezultatu2 su
            var brojnik = brojTestova + objekat2.stats.failures

            //dodan broj testova koji su u rezultatu2 
            var nazivnik = brojTestova + objekat2.stats.tests
            if(brojnik/nazivnik != 0)
            rezultat.promjena = Math.round((brojnik / nazivnik) * 100 * 10)/10 + '%'

            var noveGreske = []
            for (var i = 0; i < objekat1.failures.length; i++) {
                postoji = false
                for (var j = 0; j < objekat2.failures.length; j++) {
                    if (objekat1.failures[i].fullTitle == objekat2.failures[j].fullTitle)
                        postoji = true
                }
                if (!postoji && !objekat2.failures.includes(objekat1.failures[i]))
                    noveGreske.push(objekat1.failures[i])
            }
            noveGreske.sort()
            var niz = dajTacnost(JSON.stringify(objekat2)).greske
            niz.sort()
            noveGreske.push(niz)
            rezultat.greske = niz
        }
        return rezultat
    }

    return {
        dajTacnost: dajTacnost,
        porediRezultate: porediRezultate
    }
}());
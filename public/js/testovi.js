let assert = chai.assert;

describe('VjezbeAjax testovi', function() {
    it('Test slanja podataka - pogrešni podaci 1', function (done) {
        let rezultat = {
          "brojVjezbi": 1,
          "brojZadataka" : [4,5,6,7]
        }
        let ocekivaniRezultat = JSON.stringify({
            "status": "error",
            "data" : "Pogrešan parametar brojZadataka"
        });
        VjezbeAjax.posaljiPodatke(rezultat, (err,data) =>{
            assert.deepEqual(ocekivaniRezultat,data);
            done();
        })
      });

      it('Test slanja podataka - pogrešni podaci 2', function (done) {
        let rezultat = {
          "brojVjezbi": -1,
          "brojZadataka" : [4,5,6,7]
        }
        let ocekivaniRezultat = JSON.stringify({
            "status": "error",
            "data" : "Pogrešan parametar brojVjezbi,brojZadataka"
        });
        VjezbeAjax.posaljiPodatke(rezultat, (err,data) =>{
            assert.deepEqual(ocekivaniRezultat,data);
            done();
        })
      });

      it('Test slanja podataka - pogrešni podaci 3', function (done) {
        let rezultat = {
          "brojVjezbi": 3,
          "brojZadataka" : [4,5,66]
        }
        let ocekivaniRezultat = JSON.stringify({
            "status": "error",
            "data" : "Pogrešan parametar z2"
        });
        VjezbeAjax.posaljiPodatke(rezultat, (err,data) =>{
            assert.deepEqual(ocekivaniRezultat,data);
            done();
        })
      });

      it('Test slanja podataka - pogrešni podaci 4', function (done) {
        let rezultat = {
          "brojVjezbi": 16,
          "brojZadataka" : [4,22,6]
        }
        let ocekivaniRezultat = JSON.stringify({
            "status": "error",
            "data" : "Pogrešan parametar brojVjezbi,z1,brojZadataka"
        });
        VjezbeAjax.posaljiPodatke(rezultat, (err,data) =>{
            assert.deepEqual(ocekivaniRezultat,data);
            done();
        })
      });

      it('Test slanja podataka - pogrešni podaci 5', function (done) {
        let rezultat = {
          "brojVjezbi": 3,
          "brojZadataka" : [14,2,6]
        }
        let ocekivaniRezultat = JSON.stringify({
            "status": "error",
            "data" : "Pogrešan parametar z0"
        });
        VjezbeAjax.posaljiPodatke(rezultat, (err,data) =>{
            assert.deepEqual(ocekivaniRezultat,data);
            done();
        })
      });


      it('Test slanja podataka - ispravni podaci', function(done) {

        let rezultat = {
            "brojVjezbi": 3,
            "brojZadataka" : [1,2,3]
          }
          let ocekivaniRezultat = JSON.stringify({
              brojVjezbi: 3,
              brojZadataka: [1,2,3] 
          });
          VjezbeAjax.posaljiPodatke(rezultat, (err,data) =>{
              assert.deepEqual(ocekivaniRezultat,data);
              done();
          })
      });

      it('Test dohvatanja podataka - ispravni podaci', function(done) {
          let ocekivaniRezultat = JSON.stringify({
              brojVjezbi: 3,
              brojZadataka: [1,2,3] 
          });
          VjezbeAjax.dohvatiPodatke((err,data) =>{
              assert.deepEqual(ocekivaniRezultat,data);
              done();
          })
      });

      it('Test IscrtajVjezbe', function(done){
        let primjer = JSON.stringify({
            brojVjezbi: 3,
            brojZadataka: [3,4,5]
        })
    
        let testniDiv = document.getElementById("testniDiv");
    
        VjezbeAjax.dohvatiPodatke((err, data) => {
            VjezbeAjax.iscrtajVjezbe(testniDiv, JSON.parse(data))
            let provjeraBroja = testniDiv.getElementsByClassName('vjezbe-lista')
            assert.equal(3, provjeraBroja.length)
            testniDiv.style.display = "none"
            done()
        })
    });


    it('Test dodajInputPolja', function () {
        let div = document.createElement("div");
        div.className="probniDiv";
        VjezbeAjax.dodajInputPolja(div, 5);
        assert.equal(div.getElementsByClassName('inputDiv').length, 0)
    });
});




let assert = chai.assert;
describe('Testoviparser', function(){
    it('Svi testovi prolaze pri provjeri funkcije dajTacnost()', function(){
        var report = {
            "stats": {
              "suites": 4,
              "tests": 4,
              "passes": 4,
              "pending": 0,
              "failures": 0,
              "start": "2021-11-16T15:00:26.343Z",
              "end": "2021-11-16T15:00:26.352Z",
              "duration": 23
            },
            "tests": [
              {
                "title": "should draw 3 rows when parameter are 2,3",
                "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "should draw 2 columns in row 2 when parameter are 2,3",
                "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "should draw 5 rows when parameter are 5,4",
                "fullTitle": "Tabela crtaj() should draw 5 rows when parameter are 5,4",
                "file": null,
                "duration": 3,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "should draw 4 columns in row 5 when parameter are 5,4",
                "fullTitle": "Tabela crtaj() should draw 4 columns in row 5 when parameter are 5,4",
                "file": null,
                "duration": 2,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
          ],
          "pending": [],
          "failures": [],
          "passes": [
            {
              "title": "should draw 3 rows when parameter are 2,3",
              "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
              "file": null,
              "duration": 1,
              "currentRetry": 0,
              "speed": "fast",
              "err": {}
            },
            {
              "title": "should draw 2 columns in row 2 when parameter are 2,3",
              "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
              "file": null,
              "duration": 0,
              "currentRetry": 0,
              "speed": "fast",
              "err": {}
            },
            {
                "title": "should draw 5 rows when parameter are 5,4",
                "fullTitle": "Tabela crtaj() should draw 5 rows when parameter are 5,4",
                "file": null,
                "duration": 3,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "should draw 4 columns in row 5 when parameter are 5,4",
                "fullTitle": "Tabela crtaj() should draw 4 columns in row 5 when parameter are 5,4",
                "file": null,
                "duration": 2,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
          ]
        }
        var rezultat = {"tacnost":"100%","greske":[]}

        assert.deepEqual(TestoviParser.dajTacnost(JSON.stringify(report)), rezultat);
    });

    it('Svi testovi padaju pri provjeri funkcije dajTacnost()', function(){
        var report = {
            "stats": {
              "suites": 4,
              "tests": 4,
              "passes": 0,
              "pending": 0,
              "failures": 4,
              "start": "2021-11-16T15:00:26.343Z",
              "end": "2021-11-16T15:00:26.352Z",
              "duration": 23
            },
            "tests": [
              {
                "title": "should draw 3 rows when parameter are 2,3",
                "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "should draw 2 columns in row 2 when parameter are 2,3",
                "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "should draw 5 rows when parameter are 5,4",
                "fullTitle": "Tabela crtaj() should draw 5 rows when parameter are 5,4",
                "file": null,
                "duration": 3,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "should draw 4 columns in row 5 when parameter are 5,4",
                "fullTitle": "Tabela crtaj() should draw 4 columns in row 5 when parameter are 5,4",
                "file": null,
                "duration": 2,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
          ],
          "pending": [],
          "failures": [
            {
                "title": "should draw 3 rows when parameter are 2,3",
                "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "should draw 2 columns in row 2 when parameter are 2,3",
                "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                  "title": "should draw 5 rows when parameter are 5,4",
                  "fullTitle": "Tabela crtaj() should draw 5 rows when parameter are 5,4",
                  "file": null,
                  "duration": 3,
                  "currentRetry": 0,
                  "speed": "fast",
                  "err": {}
                },
                {
                  "title": "should draw 4 columns in row 5 when parameter are 5,4",
                  "fullTitle": "Tabela crtaj() should draw 4 columns in row 5 when parameter are 5,4",
                  "file": null,
                  "duration": 2,
                  "currentRetry": 0,
                  "speed": "fast",
                  "err": {}
              }
          ],
          "passes": [
            
          ]
        }
        var rezultat = {"tacnost":"0%","greske":[
            "Tabela crtaj() should draw 3 rows when parameter are 2,3",
            "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
            "Tabela crtaj() should draw 5 rows when parameter are 5,4",
            "Tabela crtaj() should draw 4 columns in row 5 when parameter are 5,4"
        ]}

        assert.deepEqual(TestoviParser.dajTacnost(JSON.stringify(report)), rezultat);
    });

    it('Prolazi samo jedan test pri provjeri funkcije dajTacnost()', function(){
        var report = {
            "stats": {
              "suites": 4,
              "tests": 4,
              "passes": 1,
              "pending": 0,
              "failures": 3,
              "start": "2021-11-16T15:00:26.343Z",
              "end": "2021-11-16T15:00:26.352Z",
              "duration": 23
            },
            "tests": [
              {
                "title": "should draw 3 rows when parameter are 2,3",
                "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "should draw 2 columns in row 2 when parameter are 2,3",
                "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "should draw 5 rows when parameter are 5,4",
                "fullTitle": "Tabela crtaj() should draw 5 rows when parameter are 5,4",
                "file": null,
                "duration": 3,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "should draw 4 columns in row 5 when parameter are 5,4",
                "fullTitle": "Tabela crtaj() should draw 4 columns in row 5 when parameter are 5,4",
                "file": null,
                "duration": 2,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
          ],
          "pending": [],
          "failures": [
            {
                "title": "should draw 3 rows when parameter are 2,3",
                "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "should draw 2 columns in row 2 when parameter are 2,3",
                "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
                {
                  "title": "should draw 4 columns in row 5 when parameter are 5,4",
                  "fullTitle": "Tabela crtaj() should draw 4 columns in row 5 when parameter are 5,4",
                  "file": null,
                  "duration": 2,
                  "currentRetry": 0,
                  "speed": "fast",
                  "err": {}
              }
          ],
          "passes": [
            {
                "title": "should draw 2 columns in row 2 when parameter are 2,3",
                "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
          ]
        }
        var rezultat = {"tacnost":"25%","greske":[
            "Tabela crtaj() should draw 3 rows when parameter are 2,3",
            "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
            "Tabela crtaj() should draw 4 columns in row 5 when parameter are 5,4"
        ]}

        assert.deepEqual(TestoviParser.dajTacnost(JSON.stringify(report)), rezultat);
    });

    it('Pada samo jedan test pri provjeri funkcije dajTacnost()', function(){
        var report = {
            "stats": {
              "suites": 4,
              "tests": 4,
              "passes": 3,
              "pending": 0,
              "failures": 1,
              "start": "2021-11-16T15:00:26.343Z",
              "end": "2021-11-16T15:00:26.352Z",
              "duration": 23
            },
            "tests": [
              {
                "title": "should draw 3 rows when parameter are 2,3",
                "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "should draw 2 columns in row 2 when parameter are 2,3",
                "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "should draw 5 rows when parameter are 5,4",
                "fullTitle": "Tabela crtaj() should draw 5 rows when parameter are 5,4",
                "file": null,
                "duration": 3,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "should draw 4 columns in row 5 when parameter are 5,4",
                "fullTitle": "Tabela crtaj() should draw 4 columns in row 5 when parameter are 5,4",
                "file": null,
                "duration": 2,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
          ],
          "pending": [],
          "failures": [
              {
                "title": "should draw 4 columns in row 5 when parameter are 5,4",
                "fullTitle": "Tabela crtaj() should draw 4 columns in row 5 when parameter are 5,4",
                "file": null,
                "duration": 2,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
          ],
          "passes": [
            {
                "title": "should draw 3 rows when parameter are 2,3",
                "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "should draw 2 columns in row 2 when parameter are 2,3",
                "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "should draw 5 rows when parameter are 5,4",
                "fullTitle": "Tabela crtaj() should draw 5 rows when parameter are 5,4",
                "file": null,
                "duration": 3,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              }
          ]
        }
        var rezultat = {"tacnost":"75%","greske":[
            "Tabela crtaj() should draw 4 columns in row 5 when parameter are 5,4"
        ]}

        assert.deepEqual(TestoviParser.dajTacnost(JSON.stringify(report)), rezultat);
    }),

    it('Testovi se ne mogu izvršiti - prazan string', function(){
        var report = ""
        var rezultat = {"tacnost":"0%","greske":[
            "Testovi se ne mogu izvršiti"
        ]}

        assert.deepEqual(TestoviParser.dajTacnost(report), rezultat);
    }),

    it('Testovi se ne mogu izvršiti', function(){
        var report = "asdasdasd asd asdas"
        var rezultat = {"tacnost":"0%","greske":[
            "Testovi se ne mogu izvršiti"
        ]}

        assert.deepEqual(TestoviParser.dajTacnost(report), rezultat);
    })
});
let assert = chai.assert;
describe('PorediRezultate', function () {
  it('Nazivi testova su identični, tacnost prvog je 100% drugog je 100%', function () {
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
    var report2 = {
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
    var rezultat = {
      "promjena": "100%",
      "greske": [
      ]
    }

    assert.deepEqual(TestoviParser.porediRezultate(JSON.stringify(report), JSON.stringify(report2)), rezultat);
  }),

    it('Nazivi testova su identični, tacnost prvog je 100% a drugog je 50%', function () {
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
      var report2 = {
        "stats": {
          "suites": 4,
          "tests": 4,
          "passes": 2,
          "pending": 0,
          "failures": 2,
          "start": "2021-11-16T15:00:26.343Z",
          "end": "2021-11-16T15:00:26.352Z",
          "duration": 23
        },
        "tests": [
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
          },
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
          }
        ],
        "pending": [],
        "failures": [
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
          }
        ]
      }
      var rezultat = {
        "promjena": "50%", "greske": [
          "Tabela crtaj() should draw 4 columns in row 5 when parameter are 5,4",
          "Tabela crtaj() should draw 5 rows when parameter are 5,4"
        ]
      }

      assert.deepEqual(TestoviParser.porediRezultate(JSON.stringify(report), JSON.stringify(report2)), rezultat);
    }),

    it('Nazivi testova su identični, tacnost prvog je 25% a drugog 100%', function () {
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
          {
            "title": "should draw 3 rows when parameter are 2,3",
            "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
        ]
      }
      var report2 = {
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
      var rezultat = { "promjena": "100%", "greske": [] }

      assert.deepEqual(TestoviParser.porediRezultate(JSON.stringify(report), JSON.stringify(report2)), rezultat);
    }),

    it('Nazivi testova nisu identični, tacnost prvog je 100% a drugog 100%', function () {
      var report = {
        "stats": {
          "suites": 3,
          "tests": 3,
          "passes": 3,
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
          }
        ]
      }
      var report2 = {
        "stats": {
          "suites": 4,
          "tests": 4,
          "passes": 2,
          "pending": 0,
          "failures": 2,
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
          }
        ]
      }
      var rezultat = {
        "promjena": "50%", "greske": [
          "Tabela crtaj() should draw 4 columns in row 5 when parameter are 5,4",
          "Tabela crtaj() should draw 5 rows when parameter are 5,4"
        ]
      }

      assert.deepEqual(TestoviParser.porediRezultate(JSON.stringify(report), JSON.stringify(report2)), rezultat);
    }),

    it('Nazivi testova nisu identični, tacnost prvog je 25% a drugog 75%', function () {
      var report = {
        "stats": {
          "suites": 3,
          "tests": 3,
          "passes": 3,
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
          }
        ],
        "pending": [],
        "failures": [
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
          }
        ]
      }
      var report2 = {
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
      var rezultat = {
        "promjena": "25%",
        "greske": ["Tabela crtaj() should draw 4 columns in row 5 when parameter are 5,4"
        ]
      }

      assert.deepEqual(TestoviParser.porediRezultate(JSON.stringify(report), JSON.stringify(report2)), rezultat)
    }),

    it('Testovi se ne mogu izvršiti - prvi report nije okej', function () {
      var report = "asdasdasd asd asdas"
      var report2 = {
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
      var rezultat = {
        "promjena": "0%", "greske": [
          "Testovi se ne mogu izvršiti"
        ]
      }

      assert.deepEqual(TestoviParser.porediRezultate(report, report2), rezultat)
    }),

    it('Testovi se ne mogu izvršiti - drugi report nije okej', function () {
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
      var report2 = "pasdlaps"
      var rezultat = {
        "promjena": "0%", "greske": [
          "Testovi se ne mogu izvršiti"
        ]
      }

      assert.deepEqual(TestoviParser.porediRezultate(report, report2), rezultat)
    }),

    it('Testovi se ne mogu izvršiti - oba reporta nisu okej', function () {
      var report = "asdasdasd asd asdas"
      var report2 = "pasdlaps"
      var rezultat = {
        "promjena": "0%", "greske": [
          "Testovi se ne mogu izvršiti"
        ]
      }

      assert.deepEqual(TestoviParser.porediRezultate(report, report2), rezultat)
    });

});
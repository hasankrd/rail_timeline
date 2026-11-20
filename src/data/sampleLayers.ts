import { KmlLayerItem } from '../types';

export const INITIAL_SAMPLE_LAYERS: KmlLayerItem[] = [
  {
    "id": "rail-f2-karakoy-beyoglu-1875-01",
    "name": "F2: Karaköy - Beyoğlu Tarihi Tünel (Opening: 01-1875)",
    "date": {
      "year": 1875,
      "month": 1
    },
    "fileName": "f2-karakoy-beyoglu-1875-01.kml",
    "color": "#7A745A",
    "visible": true,
    "isSample": true,
    "category": "F2 Funicular Line",
    "description": "F2 Tarihi Tünel Füniküler Hattı: 17 Ocak 1875'te hizmete açılan, Londra Metrosu'ndan sonra dünyanın en eski 2. yeraltı toplu taşıma sistemi ve Kıta Avrupası'nın ilk metrosu. Karaköy ile Beyoğlu (Tünel Meydanı) arasındaki dik yokuşu 573 metrelik tünelle 90 saniyede birbirine bağlar.",
    "placemarksCount": 3,
    "bounds": [
      [
        41.022,
        28.973
      ],
      [
        41.029,
        28.975
      ]
    ],
    "uploadedAt": "1875-01-17T08:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "F2 Karaköy - Beyoğlu Tarihi Tünel Ray Güzergahı",
            "description": "F2 Tarihi Tünel Füniküler Hattı yeraltı ray güzergahı (Açılış: 17 Ocak 1875). Hat uzunluğu: 573 m, Eğim: %15.",
            "style": {
              "color": "#7A745A",
              "strokeColor": "#7A745A",
              "strokeWidth": 4
            }
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.974039,
                41.022864
              ],
              [
                28.974033,
                41.023973
              ],
              [
                28.97403,
                41.024393
              ],
              [
                28.974023,
                41.025226
              ],
              [
                28.974059,
                41.025493
              ],
              [
                28.974059,
                41.026202
              ],
              [
                28.974008,
                41.026472
              ],
              [
                28.973989,
                41.028345
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Karaköy Station (F2)",
            "description": "F2 Tarihi Tünel Alt İstasyonu (Karaköy). Açılış: 17 Ocak 1875. Tersane Caddesi ve Karaköy Meydanı çıkışı, T1 tramvay ve vapur iskeleleri aktarması.",
            "style": {
              "color": "#7A745A"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.974039,
              41.022864
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Beyoğlu Station (F2)",
            "description": "F2 Tarihi Tünel Üst İstasyonu (Beyoğlu). Açılış: 17 Ocak 1875. Tünel Meydanı, İstiklal Caddesi başlangıcı, T2 nostaljik tramvay ve M2 Şişhane metro aktarması.",
            "style": {
              "color": "#7A745A"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.973989,
              41.028345
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m1-emniyet-kocatepe-1989-03",
    "name": "M1: Emniyet - Kocatepe Section (Opening: 03-1989)",
    "date": {
      "year": 1989,
      "month": 3
    },
    "fileName": "m1_emniyet_kocatepe_1989.kml",
    "color": "#EE2229",
    "visible": true,
    "isSample": true,
    "category": "M1 Metro Line",
    "description": "Inaugural section of Istanbul M1 Metro line opened in March 1989 (11 March 1989), serving between Emniyet-Fatih and Kocatepe along its authentic railway alignment.",
    "placemarksCount": 6,
    "bounds": [
      [
        41.015,
        28.893
      ],
      [
        41.05,
        28.942
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M1 Railway Line (Emniyet-Fatih ↔ Kocatepe)",
            "description": "Exact real-world railway track route of the inaugural M1 metro section, opened in March 1989.",
            "style": {
              "color": "#EE2229",
              "width": 5
            }
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.939592,
                41.017405
              ],
              [
                28.931439,
                41.023254
              ],
              [
                28.931368,
                41.023304
              ],
              [
                28.930583,
                41.023854
              ],
              [
                28.929445,
                41.024652
              ],
              [
                28.928956,
                41.025041
              ],
              [
                28.928556,
                41.025366
              ],
              [
                28.928267,
                41.025639
              ],
              [
                28.927962,
                41.025988
              ],
              [
                28.927772,
                41.026294
              ],
              [
                28.927586,
                41.026568
              ],
              [
                28.927431,
                41.026809
              ],
              [
                28.926285,
                41.028949
              ],
              [
                28.925974,
                41.02943
              ],
              [
                28.925523,
                41.02991
              ],
              [
                28.925142,
                41.030246
              ],
              [
                28.924613,
                41.030579
              ],
              [
                28.924142,
                41.030831
              ],
              [
                28.923506,
                41.031114
              ],
              [
                28.922414,
                41.0316
              ],
              [
                28.92212,
                41.031758
              ],
              [
                28.921788,
                41.031964
              ],
              [
                28.921517,
                41.032165
              ],
              [
                28.921313,
                41.032355
              ],
              [
                28.921124,
                41.03256
              ],
              [
                28.920954,
                41.032779
              ],
              [
                28.920801,
                41.033013
              ],
              [
                28.920686,
                41.033255
              ],
              [
                28.920614,
                41.033424
              ],
              [
                28.920539,
                41.033578
              ],
              [
                28.920324,
                41.034116
              ],
              [
                28.920027,
                41.034863
              ],
              [
                28.91963,
                41.035672
              ],
              [
                28.91942,
                41.036132
              ],
              [
                28.919236,
                41.036412
              ],
              [
                28.919017,
                41.036674
              ],
              [
                28.91882,
                41.036894
              ],
              [
                28.918579,
                41.037125
              ],
              [
                28.918333,
                41.037313
              ],
              [
                28.917831,
                41.037679
              ],
              [
                28.917584,
                41.037828
              ],
              [
                28.917333,
                41.03798
              ],
              [
                28.916218,
                41.038656
              ],
              [
                28.915595,
                41.03902
              ],
              [
                28.915128,
                41.039284
              ],
              [
                28.914798,
                41.03943
              ],
              [
                28.914465,
                41.039571
              ],
              [
                28.914063,
                41.039723
              ],
              [
                28.913645,
                41.039855
              ],
              [
                28.913156,
                41.039987
              ],
              [
                28.912599,
                41.040119
              ],
              [
                28.912149,
                41.040219
              ],
              [
                28.911635,
                41.040326
              ],
              [
                28.91118,
                41.040409
              ],
              [
                28.910729,
                41.040475
              ],
              [
                28.910349,
                41.040527
              ],
              [
                28.909328,
                41.040651
              ],
              [
                28.909067,
                41.040683
              ],
              [
                28.908114,
                41.040797
              ],
              [
                28.907226,
                41.040912
              ],
              [
                28.906513,
                41.040972
              ],
              [
                28.905235,
                41.041069
              ],
              [
                28.904812,
                41.041111
              ],
              [
                28.904493,
                41.04115
              ],
              [
                28.904131,
                41.041214
              ],
              [
                28.903425,
                41.041357
              ],
              [
                28.902647,
                41.041509
              ],
              [
                28.902148,
                41.041642
              ],
              [
                28.901652,
                41.041803
              ],
              [
                28.901441,
                41.041912
              ],
              [
                28.901216,
                41.042056
              ],
              [
                28.900928,
                41.042308
              ],
              [
                28.90068,
                41.04259
              ],
              [
                28.900461,
                41.042864
              ],
              [
                28.900316,
                41.043104
              ],
              [
                28.900207,
                41.043383
              ],
              [
                28.900135,
                41.043652
              ],
              [
                28.90011,
                41.043876
              ],
              [
                28.900118,
                41.044143
              ],
              [
                28.900172,
                41.044417
              ],
              [
                28.900257,
                41.044696
              ],
              [
                28.900502,
                41.045507
              ],
              [
                28.900566,
                41.045889
              ],
              [
                28.900547,
                41.04616
              ],
              [
                28.900486,
                41.046429
              ],
              [
                28.900402,
                41.04669
              ],
              [
                28.900306,
                41.046909
              ],
              [
                28.900149,
                41.047165
              ],
              [
                28.899965,
                41.047406
              ],
              [
                28.899676,
                41.047696
              ],
              [
                28.899343,
                41.047948
              ],
              [
                28.898989,
                41.048158
              ],
              [
                28.898661,
                41.048313
              ],
              [
                28.898324,
                41.048441
              ],
              [
                28.898015,
                41.048534
              ],
              [
                28.897581,
                41.048628
              ],
              [
                28.897192,
                41.048662
              ],
              [
                28.896773,
                41.048662
              ],
              [
                28.896267,
                41.048624
              ],
              [
                28.895857,
                41.048575
              ],
              [
                28.895458,
                41.048511
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Emniyet - Fatih Station",
            "description": "M1 Metro Station opened in March 1989. Located along Adnan Menderes (Vatan) Boulevard in Fatih, serving Istanbul Police HQ.",
            "style": {
              "color": "#EE2229"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.939592,
              41.017405
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Topkapı - Ulubatlı Station",
            "description": "M1 Metro Station opened in March 1989. Located next to the historic Ulubatlı gate of the Theodosian city walls.",
            "style": {
              "color": "#EE2229"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.930583,
              41.023854
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bayrampaşa - Maltepe Station",
            "description": "M1 Metro Station opened in March 1989. At-grade station serving Bayrampaşa and Maltepe quarters.",
            "style": {
              "color": "#EE2229"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.920324,
              41.034116
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Sağmalcılar Station",
            "description": "M1 Metro Station opened in March 1989. Located along Çimen Street in Bayrampaşa.",
            "style": {
              "color": "#EE2229"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.907226,
              41.040912
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kocatepe Station",
            "description": "M1 Metro Station opened in March 1989. Inaugural western terminus (originally named Kartaltepe).",
            "style": {
              "color": "#EE2229"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.895458,
              41.048511
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m1-aksaray-extension-1989-09",
    "name": "M1: Aksaray Extension (Opening: 09-1989)",
    "date": {
      "year": 1989,
      "month": 9
    },
    "fileName": "m1_aksaray_extension_1989.kml",
    "color": "#EE2229",
    "visible": true,
    "isSample": true,
    "category": "M1 Metro Line",
    "description": "Eastern extension of Istanbul M1 Metro line opened on 3 September 1989 (09-1989), connecting Emniyet-Fatih to Aksaray Station along Adnan Menderes (Vatan) Boulevard.",
    "placemarksCount": 2,
    "bounds": [
      [
        41.011,
        28.938
      ],
      [
        41.019,
        28.949
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M1 Railway Line (Aksaray ↔ Emniyet-Fatih)",
            "description": "Authentic railway track alignment of the M1 Aksaray extension opened in September 1989 along Adnan Menderes Boulevard.",
            "style": {
              "color": "#EE2229",
              "width": 5
            }
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.948169,
                41.012039
              ],
              [
                28.94723,
                41.012473
              ],
              [
                28.946627,
                41.01283
              ],
              [
                28.946436,
                41.012944
              ],
              [
                28.940387,
                41.016824
              ],
              [
                28.939592,
                41.017405
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Aksaray Station",
            "description": "M1 Metro Station opened on 3 September 1989 (09-1989) at 41°00'43.34\"N 28°56'53.41\"E. Located at the foot of Adnan Menderes Boulevard in Aksaray, serving as the eastern terminus.",
            "style": {
              "color": "#EE2229"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.948169,
              41.012039
            ]
          }
        }
      ]
    }
  },
  {
      "id": "rail-t2-taksim-tunel-1990-12",
      "name": "T2: Taksim - Tünel Nostalgic Tramway (Opening: 12-1990)",
      "date": {
          "year": 1990,
          "month": 12
      },
      "fileName": "t2-taksim-tunel-1990-12.kml",
      "color": "#90ABA0",
      "visible": true,
      "isSample": true,
      "category": "T2 Tram Line",
      "description": "T2 (Taksim – Tünel) Nostaljik Tramvay Hattı: İstiklal Caddesi'nin yayalaştırılması projesi kapsamında Taksim Meydanı ile Tünel Meydanı arasında tarihi tramvayın yeniden açılışı (29 Aralık 1990). 1.64 km'lik hat boyunca Taksim, Hüseyin Ağa Camii, Galatasaray, Odakule ve Tünel durakları hizmet verir.",
      "placemarksCount": 6,
      "bounds": [
          [
              41.028,
              28.974
          ],
          [
              41.037,
              28.986
          ]
      ],
      "uploadedAt": "1990-12-29T09:00:00.000Z",
      "geoJson": {
          "type": "FeatureCollection",
          "features": [
              {
                  "type": "Feature",
                  "properties": {
                      "name": "T2 Taksim - Tünel Nostaljik Tramvay Hattı Güzergahı",
                      "description": "T2 Taksim – Tünel Nostaljik Tramvay Hattı ray güzergahı (29 Aralık 1990).",
                      "style": {
                          "color": "#90ABA0",
                          "width": 4.5,
                          "fill": "#90ABA0"
                      },
                      "lineCode": "T2"
                  },
                  "geometry": {
                      "type": "LineString",
                      "coordinates": [
                          [
                              28.984826,
                              41.036531
                          ],
                          [
                              28.984867,
                              41.036585
                          ],
                          [
                              28.984893,
                              41.036633
                          ],
                          [
                              28.984904,
                              41.036692
                          ],
                          [
                              28.9849,
                              41.036721
                          ],
                          [
                              28.984875,
                              41.036767
                          ],
                          [
                              28.984841,
                              41.036813
                          ],
                          [
                              28.984796,
                              41.036876
                          ],
                          [
                              28.984765,
                              41.036941
                          ],
                          [
                              28.984761,
                              41.037009
                          ],
                          [
                              28.984776,
                              41.037069
                          ],
                          [
                              28.984783,
                              41.037081
                          ],
                          [
                              28.984829,
                              41.037137
                          ],
                          [
                              28.984896,
                              41.037192
                          ],
                          [
                              28.984973,
                              41.037231
                          ],
                          [
                              28.985073,
                              41.03725
                          ],
                          [
                              28.985162,
                              41.037252
                          ],
                          [
                              28.985207,
                              41.037245
                          ],
                          [
                              28.98526,
                              41.037228
                          ],
                          [
                              28.985339,
                              41.037191
                          ],
                          [
                              28.985401,
                              41.03714
                          ],
                          [
                              28.985445,
                              41.037081
                          ],
                          [
                              28.985471,
                              41.037016
                          ],
                          [
                              28.985475,
                              41.036949
                          ],
                          [
                              28.985461,
                              41.036902
                          ],
                          [
                              28.985455,
                              41.036883
                          ],
                          [
                              28.985414,
                              41.036823
                          ],
                          [
                              28.985349,
                              41.036782
                          ],
                          [
                              28.985277,
                              41.036747
                          ],
                          [
                              28.98516,
                              41.036718
                          ],
                          [
                              28.985052,
                              41.036687
                          ],
                          [
                              28.985036,
                              41.036679
                          ],
                          [
                              28.984946,
                              41.036635
                          ],
                          [
                              28.984895,
                              41.036589
                          ],
                          [
                              28.984826,
                              41.036531
                          ],
                          [
                              28.984765,
                              41.036481
                          ],
                          [
                              28.984712,
                              41.036441
                          ],
                          [
                              28.984569,
                              41.036331
                          ],
                          [
                              28.984553,
                              41.036319
                          ],
                          [
                              28.98451,
                              41.03629
                          ],
                          [
                              28.984458,
                              41.036263
                          ],
                          [
                              28.984397,
                              41.036232
                          ],
                          [
                              28.983245,
                              41.035912
                          ],
                          [
                              28.982513,
                              41.035621
                          ],
                          [
                              28.981945,
                              41.035394
                          ],
                          [
                              28.981403,
                              41.035179
                          ],
                          [
                              28.980941,
                              41.03499
                          ],
                          [
                              28.98065,
                              41.034872
                          ],
                          [
                              28.980582,
                              41.034845
                          ],
                          [
                              28.979957,
                              41.0346
                          ],
                          [
                              28.978773,
                              41.034109
                          ],
                          [
                              28.978617,
                              41.034048
                          ],
                          [
                              28.978238,
                              41.033913
                          ],
                          [
                              28.977934,
                              41.033792
                          ],
                          [
                              28.977918,
                              41.033786
                          ],
                          [
                              28.977588,
                              41.033661
                          ],
                          [
                              28.977294,
                              41.033553
                          ],
                          [
                              28.977251,
                              41.033537
                          ],
                          [
                              28.977099,
                              41.033471
                          ],
                          [
                              28.97691,
                              41.033373
                          ],
                          [
                              28.976828,
                              41.033313
                          ],
                          [
                              28.976719,
                              41.033181
                          ],
                          [
                              28.976583,
                              41.032879
                          ],
                          [
                              28.976549,
                              41.032811
                          ],
                          [
                              28.976485,
                              41.03268
                          ],
                          [
                              28.976415,
                              41.032556
                          ],
                          [
                              28.976284,
                              41.032285
                          ],
                          [
                              28.976262,
                              41.032232
                          ],
                          [
                              28.976148,
                              41.031993
                          ],
                          [
                              28.976105,
                              41.031874
                          ],
                          [
                              28.976039,
                              41.031643
                          ],
                          [
                              28.975883,
                              41.031258
                          ],
                          [
                              28.975661,
                              41.030626
                          ],
                          [
                              28.975578,
                              41.030394
                          ],
                          [
                              28.975419,
                              41.029954
                          ],
                          [
                              28.975283,
                              41.029564
                          ],
                          [
                              28.975202,
                              41.029375
                          ],
                          [
                              28.975086,
                              41.029199
                          ],
                          [
                              28.975004,
                              41.029091
                          ],
                          [
                              28.974878,
                              41.028944
                          ],
                          [
                              28.974774,
                              41.028836
                          ],
                          [
                              28.974555,
                              41.028585
                          ],
                          [
                              28.974514,
                              41.028539
                          ],
                          [
                              28.974492,
                              41.028514
                          ],
                          [
                              28.974484,
                              41.02851
                          ],
                          [
                              28.974468,
                              41.028503
                          ],
                          [
                              28.974423,
                              41.028489
                          ],
                          [
                              28.974382,
                              41.028484
                          ],
                          [
                              28.974338,
                              41.028481
                          ],
                          [
                              28.974291,
                              41.028481
                          ]
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Taksim Station (T2)",
                      "description": "T2 Nostalgic Tramway northern terminus opened on 29 December 1990 (12-1990) around Republic Monument in Taksim Square. Connecting with future M2 metro and F1 funicular.",
                      "style": {
                          "color": "#90ABA0",
                          "width": 3,
                          "fill": "#90ABA0"
                      },
                      "lineCode": "T2"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.984765,
                          41.036481
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Hüseyin Ağa Camii Station",
                      "description": "T2 Nostalgic Tramway stop opened on 29 December 1990 (12-1990). Located on İstiklal Avenue in front of the historic Hüseyin Ağa Mosque (1596).",
                      "style": {
                          "color": "#90ABA0",
                          "width": 3,
                          "fill": "#90ABA0"
                      },
                      "lineCode": "T2"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.98065,
                          41.034872
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Galatasaray Lisesi Station",
                      "description": "T2 Nostalgic Tramway passing switch stop opened on 29 December 1990 (12-1990). Central meeting hub in Galatasaray Square in front of historic Galatasaray High School and Flower Passage.",
                      "style": {
                          "color": "#90ABA0",
                          "width": 3,
                          "fill": "#90ABA0"
                      },
                      "lineCode": "T2"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.977588,
                          41.033661
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Odakule Station",
                      "description": "T2 Nostalgic Tramway stop opened on 29 December 1990 (12-1990). Located on İstiklal Avenue next to Odakule passageway, Pera Museum, and Asmalımescit.",
                      "style": {
                          "color": "#90ABA0",
                          "width": 3,
                          "fill": "#90ABA0"
                      },
                      "lineCode": "T2"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.976039,
                          41.031643
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Tünel Station (T2)",
                      "description": "T2 Nostalgic Tramway southern terminus opened on 29 December 1990 (12-1990) in Tünel Square. Direct pedestrian connection to historic 1875 F2 Tünel funicular to Karaköy and future M2 Şişhane metro.",
                      "style": {
                          "color": "#90ABA0",
                          "width": 3,
                          "fill": "#90ABA0"
                      },
                      "lineCode": "T2"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.974774,
                          41.028836
                      ]
                  }
              }
          ]
      }
  },
  {
    "id": "rail-t1-yusufpasa-beyazit-1992-06",
    "name": "T1: Yusufpaşa - Beyazıt Section (Opening: 06-1992)",
    "date": {
      "year": 1992,
      "month": 6
    },
    "fileName": "t1_yusufpasa_beyazit_1992.kml",
    "color": "#004B86",
    "visible": true,
    "isSample": true,
    "category": "T1 Tram Line",
    "description": "Inaugural section of Istanbul T1 Tramway line opened on 13 June 1992 (06-1992) between Yusufpaşa and Beyazıt along Ordu Street.",
    "placemarksCount": 5,
    "bounds": [
      [
        41.008,
        28.945
      ],
      [
        41.012,
        28.968
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "T1 Tram Line (Yusufpaşa ↔ Beyazıt)",
            "description": "Authentic tram track alignment opened in June 1992 along Millet and Ordu Streets in the historic peninsula.",
            "style": {
              "color": "#004B86",
              "width": 5
            }
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.946636,
                41.010066
              ],
              [
                28.947072,
                41.009972
              ],
              [
                28.947416,
                41.009894
              ],
              [
                28.948036,
                41.009764
              ],
              [
                28.948719,
                41.009695
              ],
              [
                28.949047,
                41.009669
              ],
              [
                28.949698,
                41.009658
              ],
              [
                28.950293,
                41.009647
              ],
              [
                28.95165,
                41.009574
              ],
              [
                28.952307,
                41.009538
              ],
              [
                28.95293,
                41.009565
              ],
              [
                28.95301,
                41.00957
              ],
              [
                28.953055,
                41.009571
              ],
              [
                28.953342,
                41.009579
              ],
              [
                28.953534,
                41.009584
              ],
              [
                28.95388,
                41.009592
              ],
              [
                28.954697,
                41.009601
              ],
              [
                28.955418,
                41.009572
              ],
              [
                28.955618,
                41.009566
              ],
              [
                28.957348,
                41.009556
              ],
              [
                28.958455,
                41.009593
              ],
              [
                28.958879,
                41.009602
              ],
              [
                28.959295,
                41.009599
              ],
              [
                28.959355,
                41.009598
              ],
              [
                28.959387,
                41.009598
              ],
              [
                28.959713,
                41.009596
              ],
              [
                28.960259,
                41.009586
              ],
              [
                28.961459,
                41.009584
              ],
              [
                28.962037,
                41.009573
              ],
              [
                28.962381,
                41.009547
              ],
              [
                28.962696,
                41.009511
              ],
              [
                28.962972,
                41.009465
              ],
              [
                28.963235,
                41.009426
              ],
              [
                28.963525,
                41.009394
              ],
              [
                28.965037,
                41.009295
              ],
              [
                28.965502,
                41.009231
              ],
              [
                28.965527,
                41.009226
              ],
              [
                28.965856,
                41.009158
              ],
              [
                28.966304,
                41.009061
              ],
              [
                28.966619,
                41.009008
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yusufpaşa Station",
            "description": "T1 Tram Station opened on 13 June 1992. Inaugural western terminus offering transfer to M1 Aksaray station.",
            "style": {
              "color": "#004B86"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.946636,
              41.010066
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Aksaray Station (T1)",
            "description": "T1 Tram Station opened on 13 June 1992 at Aksaray Square / Valide Sultan Mosque.",
            "style": {
              "color": "#004B86"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.95388,
              41.009592
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Laleli - İstanbul Üniversitesi Station",
            "description": "T1 Tram Station opened on 13 June 1992, serving Laleli and Istanbul University Laleli campus.",
            "style": {
              "color": "#004B86"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.959715,
              41.009596
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Beyazıt - Kapalıçarşı Station",
            "description": "T1 Tram Station opened on 13 June 1992 at Beyazıt Square next to the Grand Bazaar (Kapalıçarşı) and Istanbul University main campus.",
            "style": {
              "color": "#004B86"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.966619,
              41.009008
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-t1-beyazit-sirkeci-1992-07",
    "name": "T1: Beyazıt - Sirkeci Section (Opening: 07-1992)",
    "date": {
      "year": 1992,
      "month": 7
    },
    "fileName": "t1_beyazit_sirkeci_1992.kml",
    "color": "#004B86",
    "visible": true,
    "isSample": true,
    "category": "T1 Tram Line",
    "description": "Eastern extension of Istanbul T1 Tramway line opened on 10 July 1992 (07-1992), extending the line from Beyazıt through Sultanahmet and Gülhane to Sirkeci Railway Terminal.",
    "placemarksCount": 5,
    "bounds": [
      [
        41.007,
        28.965
      ],
      [
        41.016,
        28.98
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "T1 Tram Line (Beyazıt ↔ Sirkeci)",
            "description": "Authentic tram track alignment through Divan Yolu, Sultanahmet, and Alemdar Caddesi to Sirkeci, opened in July 1992.",
            "style": {
              "color": "#004B86",
              "width": 5
            }
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.966619,
                41.009008
              ],
              [
                28.966926,
                41.008956
              ],
              [
                28.967091,
                41.008929
              ],
              [
                28.967415,
                41.008876
              ],
              [
                28.967485,
                41.008862
              ],
              [
                28.968057,
                41.008792
              ],
              [
                28.968297,
                41.008737
              ],
              [
                28.968924,
                41.008602
              ],
              [
                28.969406,
                41.008565
              ],
              [
                28.970741,
                41.008456
              ],
              [
                28.971145,
                41.008427
              ],
              [
                28.971521,
                41.0084
              ],
              [
                28.971539,
                41.008399
              ],
              [
                28.971573,
                41.008396
              ],
              [
                28.972323,
                41.008338
              ],
              [
                28.972364,
                41.008334
              ],
              [
                28.972396,
                41.008332
              ],
              [
                28.973411,
                41.008246
              ],
              [
                28.973441,
                41.008243
              ],
              [
                28.973914,
                41.008215
              ],
              [
                28.974379,
                41.008182
              ],
              [
                28.97499,
                41.008145
              ],
              [
                28.975121,
                41.008134
              ],
              [
                28.975514,
                41.008097
              ],
              [
                28.975889,
                41.008058
              ],
              [
                28.976141,
                41.00803
              ],
              [
                28.976406,
                41.007991
              ],
              [
                28.977492,
                41.007841
              ],
              [
                28.977568,
                41.007833
              ],
              [
                28.97765,
                41.007832
              ],
              [
                28.977739,
                41.007834
              ],
              [
                28.977853,
                41.007847
              ],
              [
                28.977942,
                41.007866
              ],
              [
                28.978018,
                41.007892
              ],
              [
                28.978094,
                41.007923
              ],
              [
                28.978192,
                41.007978
              ],
              [
                28.978285,
                41.008033
              ],
              [
                28.978342,
                41.008083
              ],
              [
                28.978381,
                41.008133
              ],
              [
                28.978413,
                41.008177
              ],
              [
                28.978439,
                41.008228
              ],
              [
                28.97848,
                41.008308
              ],
              [
                28.978516,
                41.008379
              ],
              [
                28.978556,
                41.008479
              ],
              [
                28.978569,
                41.008525
              ],
              [
                28.978772,
                41.010427
              ],
              [
                28.97877,
                41.010456
              ],
              [
                28.978763,
                41.010477
              ],
              [
                28.978742,
                41.010511
              ],
              [
                28.978711,
                41.010544
              ],
              [
                28.978662,
                41.010575
              ],
              [
                28.978212,
                41.010858
              ],
              [
                28.978164,
                41.010907
              ],
              [
                28.978136,
                41.010959
              ],
              [
                28.97813,
                41.011022
              ],
              [
                28.978132,
                41.011062
              ],
              [
                28.978356,
                41.011844
              ],
              [
                28.978446,
                41.012155
              ],
              [
                28.978518,
                41.012382
              ],
              [
                28.978514,
                41.012419
              ],
              [
                28.978489,
                41.012474
              ],
              [
                28.978468,
                41.012505
              ],
              [
                28.978445,
                41.012529
              ],
              [
                28.977824,
                41.01299
              ],
              [
                28.977328,
                41.01351
              ],
              [
                28.976674,
                41.014206
              ],
              [
                28.97663,
                41.01425
              ],
              [
                28.975929,
                41.014591
              ],
              [
                28.975802,
                41.014677
              ],
              [
                28.97574,
                41.014742
              ],
              [
                28.975726,
                41.014794
              ],
              [
                28.975728,
                41.014868
              ],
              [
                28.975761,
                41.014921
              ],
              [
                28.975767,
                41.01493
              ],
              [
                28.975906,
                41.015144
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Çemberlitaş Station",
            "description": "T1 Tram Station opened on 10 July 1992 at the Column of Constantine (Çemberlitaş).",
            "style": {
              "color": "#004B86"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.971145,
              41.008427
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Sultanahmet Station",
            "description": "T1 Tram Station opened on 10 July 1992 in the historic heart of Istanbul, serving the Blue Mosque and Hagia Sophia.",
            "style": {
              "color": "#004B86"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.975514,
              41.008097
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Gülhane Station",
            "description": "T1 Tram Station opened on 10 July 1992 at the gate of historic Gülhane Park and Topkapı Palace.",
            "style": {
              "color": "#004B86"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.978446,
              41.012155
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Sirkeci Station",
            "description": "T1 Tram Station opened on 10 July 1992 at the historic Sirkeci Railway Terminal (terminus of the Orient Express).",
            "style": {
              "color": "#004B86"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.975906,
              41.015144
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-t1-yusufpasa-topkapi-1992-12",
    "name": "T1: Yusufpaşa - Topkapı Section (Opening: 12-1992)",
    "date": {
      "year": 1992,
      "month": 12
    },
    "fileName": "t1_yusufpasa_topkapi_1992.kml",
    "color": "#004B86",
    "visible": true,
    "isSample": true,
    "category": "T1 Tram Line",
    "description": "Western extension of Istanbul T1 Tramway line opened on 29 December 1992 (12-1992), extending the line from Yusufpaşa along Turgut Özal (Millet) Avenue to Topkapı.",
    "placemarksCount": 6,
    "bounds": [
      [
        41.009,
        28.918
      ],
      [
        41.021,
        28.948
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "T1 Tram Line (Topkapı ↔ Yusufpaşa)",
            "description": "Authentic tram track alignment along Turgut Özal (Millet) Avenue between Topkapı and Yusufpaşa, opened in December 1992.",
            "style": {
              "color": "#004B86",
              "width": 5
            }
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.919881,
                41.019275
              ],
              [
                28.920471,
                41.019385
              ],
              [
                28.920791,
                41.019425
              ],
              [
                28.92124,
                41.019438
              ],
              [
                28.921761,
                41.019472
              ],
              [
                28.923151,
                41.019633
              ],
              [
                28.923437,
                41.019661
              ],
              [
                28.923602,
                41.01967
              ],
              [
                28.923803,
                41.01966
              ],
              [
                28.923976,
                41.019642
              ],
              [
                28.924159,
                41.019612
              ],
              [
                28.924535,
                41.019488
              ],
              [
                28.925155,
                41.019194
              ],
              [
                28.927163,
                41.018212
              ],
              [
                28.927477,
                41.01806
              ],
              [
                28.927727,
                41.017939
              ],
              [
                28.927792,
                41.017907
              ],
              [
                28.930265,
                41.016717
              ],
              [
                28.930821,
                41.016436
              ],
              [
                28.930935,
                41.016379
              ],
              [
                28.931065,
                41.016312
              ],
              [
                28.932825,
                41.015453
              ],
              [
                28.932949,
                41.015391
              ],
              [
                28.933304,
                41.015218
              ],
              [
                28.933669,
                41.015034
              ],
              [
                28.93628,
                41.013769
              ],
              [
                28.937589,
                41.013133
              ],
              [
                28.93817,
                41.012768
              ],
              [
                28.938503,
                41.012568
              ],
              [
                28.938639,
                41.012502
              ],
              [
                28.939642,
                41.012108
              ],
              [
                28.939787,
                41.012046
              ],
              [
                28.939968,
                41.011964
              ],
              [
                28.940412,
                41.011772
              ],
              [
                28.940756,
                41.011626
              ],
              [
                28.94094,
                41.011545
              ],
              [
                28.941144,
                41.011485
              ],
              [
                28.943056,
                41.010975
              ],
              [
                28.94349,
                41.010861
              ],
              [
                28.945142,
                41.010438
              ],
              [
                28.945191,
                41.010425
              ],
              [
                28.945327,
                41.010386
              ],
              [
                28.946636,
                41.010066
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Haseki Station",
            "description": "T1 Tram Station opened on 29 December 1992, serving Haseki Training and Research Hospital.",
            "style": {
              "color": "#004B86"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.943056,
              41.010975
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Fındıkzade Station",
            "description": "T1 Tram Station opened on 29 December 1992 at Fındıkzade junction on Millet Avenue.",
            "style": {
              "color": "#004B86"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.940412,
              41.011772
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Çapa - Şehremini Station",
            "description": "T1 Tram Station opened on 29 December 1992, serving Istanbul University Çapa Faculty of Medicine.",
            "style": {
              "color": "#004B86"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.933304,
              41.015218
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Pazartekke Station",
            "description": "T1 Tram Station opened on 29 December 1992 on Millet Avenue.",
            "style": {
              "color": "#004B86"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.927163,
              41.018212
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Topkapı Station (T1)",
            "description": "T1 Tram Station opened on 29 December 1992 outside Topkapı Gate of the Theodosian Walls, creating a transfer hub with M1 and suburban transit.",
            "style": {
              "color": "#004B86"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.919881,
              41.019275
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m1-kocatepe-zeytinburnu-1994-01",
    "name": "M1: Kocatepe - Zeytinburnu Section (Opening: 01-1994)",
    "date": {
      "year": 1994,
      "month": 1
    },
    "fileName": "m1_kocatepe_zeytinburnu_1994.kml",
    "color": "#EE2229",
    "visible": true,
    "isSample": true,
    "category": "M1 Metro Line",
    "description": "Southern extension of Istanbul M1 Metro line opened on 31 January 1994 (01-1994), extending service from Kocatepe through Esenler Otogarı, Terazidere, Davutpaşa, and Merter down to Zeytinburnu multimodal hub.",
    "placemarksCount": 6,
    "bounds": [
      [
        41.0017,
        28.8895
      ],
      [
        41.0486,
        28.9004
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M1 Railway Line (Kocatepe ↔ Zeytinburnu)",
            "description": "Real-world rapid transit track alignment of the M1 extension from Kocatepe to Zeytinburnu, opened on 31 January 1994.",
            "style": {
              "color": "#EE2229",
              "width": 5
            }
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.895458,
                41.048511
              ],
              [
                28.89483,
                41.048338
              ],
              [
                28.894402,
                41.048194
              ],
              [
                28.894197,
                41.048095
              ],
              [
                28.893965,
                41.047974
              ],
              [
                28.893732,
                41.047819
              ],
              [
                28.893571,
                41.047711
              ],
              [
                28.89344,
                41.047602
              ],
              [
                28.893205,
                41.047414
              ],
              [
                28.893007,
                41.047213
              ],
              [
                28.892924,
                41.047114
              ],
              [
                28.892859,
                41.047026
              ],
              [
                28.892779,
                41.046915
              ],
              [
                28.89266,
                41.046708
              ],
              [
                28.892584,
                41.046541
              ],
              [
                28.892508,
                41.046324
              ],
              [
                28.892476,
                41.046163
              ],
              [
                28.892463,
                41.046063
              ],
              [
                28.892445,
                41.045888
              ],
              [
                28.892446,
                41.045581
              ],
              [
                28.892471,
                41.045294
              ],
              [
                28.892509,
                41.045011
              ],
              [
                28.892607,
                41.044609
              ],
              [
                28.892746,
                41.044227
              ],
              [
                28.892924,
                41.043888
              ],
              [
                28.893213,
                41.043457
              ],
              [
                28.893637,
                41.043007
              ],
              [
                28.893809,
                41.042827
              ],
              [
                28.894073,
                41.04258
              ],
              [
                28.894095,
                41.042544
              ],
              [
                28.894338,
                41.042196
              ],
              [
                28.894531,
                41.041856
              ],
              [
                28.89464,
                41.041652
              ],
              [
                28.894731,
                41.041373
              ],
              [
                28.894758,
                41.041151
              ],
              [
                28.894751,
                41.040905
              ],
              [
                28.894616,
                41.040108
              ],
              [
                28.894499,
                41.039418
              ],
              [
                28.894474,
                41.03931
              ],
              [
                28.894426,
                41.039105
              ],
              [
                28.894253,
                41.038658
              ],
              [
                28.894201,
                41.038505
              ],
              [
                28.893999,
                41.037926
              ],
              [
                28.893959,
                41.037601
              ],
              [
                28.89393,
                41.037245
              ],
              [
                28.893934,
                41.037074
              ],
              [
                28.89402,
                41.036625
              ],
              [
                28.894129,
                41.036276
              ],
              [
                28.894238,
                41.036015
              ],
              [
                28.894314,
                41.035873
              ],
              [
                28.894414,
                41.035727
              ],
              [
                28.894603,
                41.035495
              ],
              [
                28.895674,
                41.034348
              ],
              [
                28.895843,
                41.034125
              ],
              [
                28.895972,
                41.03395
              ],
              [
                28.896127,
                41.033718
              ],
              [
                28.896312,
                41.033433
              ],
              [
                28.896482,
                41.033145
              ],
              [
                28.896684,
                41.03276
              ],
              [
                28.897114,
                41.031636
              ],
              [
                28.897235,
                41.031377
              ],
              [
                28.897443,
                41.03103
              ],
              [
                28.897936,
                41.030361
              ],
              [
                28.898437,
                41.029682
              ],
              [
                28.898557,
                41.029483
              ],
              [
                28.898659,
                41.029261
              ],
              [
                28.898722,
                41.029055
              ],
              [
                28.898784,
                41.028861
              ],
              [
                28.898825,
                41.028633
              ],
              [
                28.89886,
                41.028366
              ],
              [
                28.899012,
                41.024698
              ],
              [
                28.899049,
                41.024285
              ],
              [
                28.899072,
                41.024087
              ],
              [
                28.899111,
                41.023864
              ],
              [
                28.899202,
                41.023495
              ],
              [
                28.899262,
                41.023299
              ],
              [
                28.899336,
                41.023091
              ],
              [
                28.899436,
                41.022808
              ],
              [
                28.899756,
                41.021901
              ],
              [
                28.899912,
                41.021458
              ],
              [
                28.900245,
                41.020527
              ],
              [
                28.900537,
                41.019713
              ],
              [
                28.90063,
                41.019443
              ],
              [
                28.900652,
                41.019352
              ],
              [
                28.900724,
                41.018986
              ],
              [
                28.900765,
                41.018658
              ],
              [
                28.900753,
                41.018361
              ],
              [
                28.900725,
                41.018064
              ],
              [
                28.900637,
                41.017684
              ],
              [
                28.900556,
                41.01744
              ],
              [
                28.900484,
                41.017223
              ],
              [
                28.900399,
                41.016965
              ],
              [
                28.900228,
                41.016343
              ],
              [
                28.900143,
                41.01598
              ],
              [
                28.90004,
                41.015287
              ],
              [
                28.899943,
                41.014196
              ],
              [
                28.899908,
                41.013866
              ],
              [
                28.899853,
                41.01355
              ],
              [
                28.899799,
                41.013299
              ],
              [
                28.899688,
                41.012995
              ],
              [
                28.899542,
                41.012697
              ],
              [
                28.899284,
                41.012308
              ],
              [
                28.898503,
                41.011337
              ],
              [
                28.897276,
                41.009847
              ],
              [
                28.897024,
                41.009537
              ],
              [
                28.896885,
                41.009337
              ],
              [
                28.896752,
                41.009118
              ],
              [
                28.896597,
                41.008815
              ],
              [
                28.896474,
                41.008563
              ],
              [
                28.896356,
                41.008287
              ],
              [
                28.896293,
                41.008088
              ],
              [
                28.896161,
                41.007618
              ],
              [
                28.895876,
                41.006528
              ],
              [
                28.895735,
                41.006144
              ],
              [
                28.89561,
                41.00589
              ],
              [
                28.895448,
                41.005598
              ],
              [
                28.895242,
                41.005313
              ],
              [
                28.893662,
                41.003506
              ],
              [
                28.893371,
                41.003179
              ],
              [
                28.89311,
                41.002908
              ],
              [
                28.892965,
                41.00278
              ],
              [
                28.892785,
                41.00264
              ],
              [
                28.8925,
                41.002452
              ],
              [
                28.892235,
                41.002288
              ],
              [
                28.891956,
                41.00215
              ],
              [
                28.891759,
                41.002075
              ],
              [
                28.891497,
                41.001988
              ],
              [
                28.891149,
                41.001891
              ],
              [
                28.890875,
                41.001833
              ],
              [
                28.890687,
                41.001801
              ],
              [
                28.890485,
                41.001782
              ],
              [
                28.889575,
                41.00171
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Otogar Station",
            "description": "M1 Metro Station opened on 31 January 1994, directly serving the Greater Istanbul Intercity Bus Terminal (Esenler Otogarı).",
            "style": {
              "color": "#EE2229"
            },
            "lineCode": "M1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.894634,
              41.040216
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Terazidere Station",
            "description": "M1 Metro Station opened on 31 January 1994, located between Bayrampaşa and Güngören districts.",
            "style": {
              "color": "#EE2229"
            },
            "lineCode": "M1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.897865,
              41.030458
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Davutpaşa - YTÜ Station",
            "description": "M1 Metro Station opened on 31 January 1994, serving the historic Davutpaşa Barracks and Yıldız Technical University (YTÜ) Campus.",
            "style": {
              "color": "#EE2229"
            },
            "lineCode": "M1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.900358,
              41.020212
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Merter Station",
            "description": "M1 Metro Station opened on 31 January 1994, serving the Merter commercial and textile trade center along the D.100 corridor.",
            "style": {
              "color": "#EE2229"
            },
            "lineCode": "M1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.896163,
              41.007624
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Zeytinburnu Station (M1)",
            "description": "M1 Metro Station opened on 31 January 1994. Major western interchange station connecting with the T1 Tram line.",
            "style": {
              "color": "#EE2229"
            },
            "lineCode": "M1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.889973,
              41.001741
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-t1-topkapi-zeytinburnu-1994-03",
    "name": "T1: Topkapı - Zeytinburnu Section (Opening: 03-1994)",
    "date": {
      "year": 1994,
      "month": 3
    },
    "fileName": "t1_topkapi_zeytinburnu_1994.kml",
    "color": "#004B86",
    "visible": true,
    "isSample": true,
    "category": "T1 Tram Line",
    "description": "Western extension of Istanbul T1 Tramway line opened on 10 March 1994 (03-1994), extending the line from Topkapı to Zeytinburnu via Cevizlibağ, Merkezefendi, Seyitnizam, and Mithatpaşa, creating a multimodal transfer hub with the M1 Metro.",
    "placemarksCount": 6,
    "bounds": [
      [
        41.001402,
        28.888909
      ],
      [
        41.019275,
        28.919881
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "T1 Tram Line (Topkapı ↔ Zeytinburnu)",
            "description": "Authentic tram track alignment along D.100 and Seyitnizam corridor between Topkapı and Zeytinburnu, opened on 10 March 1994.",
            "style": {
              "color": "#004B86",
              "width": 5
            }
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.919881,
                41.019275
              ],
              [
                28.919466,
                41.019206
              ],
              [
                28.919041,
                41.019134
              ],
              [
                28.918793,
                41.019083
              ],
              [
                28.91854,
                41.019048
              ],
              [
                28.917778,
                41.0189
              ],
              [
                28.91746,
                41.018829
              ],
              [
                28.917294,
                41.018786
              ],
              [
                28.917161,
                41.018741
              ],
              [
                28.916593,
                41.018478
              ],
              [
                28.916128,
                41.018245
              ],
              [
                28.915653,
                41.018113
              ],
              [
                28.915436,
                41.018058
              ],
              [
                28.915286,
                41.018009
              ],
              [
                28.915192,
                41.017964
              ],
              [
                28.915122,
                41.017921
              ],
              [
                28.915007,
                41.017848
              ],
              [
                28.914835,
                41.01772
              ],
              [
                28.914642,
                41.017548
              ],
              [
                28.914246,
                41.017173
              ],
              [
                28.91404,
                41.017047
              ],
              [
                28.913852,
                41.016944
              ],
              [
                28.912761,
                41.016432
              ],
              [
                28.911664,
                41.01594
              ],
              [
                28.91124,
                41.015757
              ],
              [
                28.911203,
                41.015738
              ],
              [
                28.911051,
                41.015658
              ],
              [
                28.911034,
                41.015644
              ],
              [
                28.910987,
                41.0156
              ],
              [
                28.910921,
                41.015507
              ],
              [
                28.909923,
                41.013137
              ],
              [
                28.909858,
                41.012982
              ],
              [
                28.909819,
                41.012803
              ],
              [
                28.90978,
                41.012534
              ],
              [
                28.909733,
                41.011887
              ],
              [
                28.90971,
                41.011713
              ],
              [
                28.909542,
                41.010705
              ],
              [
                28.909507,
                41.010455
              ],
              [
                28.909472,
                41.010054
              ],
              [
                28.909465,
                41.009968
              ],
              [
                28.909464,
                41.00991
              ],
              [
                28.909464,
                41.009838
              ],
              [
                28.90948,
                41.009765
              ],
              [
                28.90952,
                41.009654
              ],
              [
                28.909578,
                41.009555
              ],
              [
                28.909762,
                41.009294
              ],
              [
                28.909792,
                41.009246
              ],
              [
                28.90981,
                41.009208
              ],
              [
                28.909821,
                41.009138
              ],
              [
                28.909833,
                41.009071
              ],
              [
                28.909833,
                41.009015
              ],
              [
                28.90982,
                41.008923
              ],
              [
                28.909804,
                41.008877
              ],
              [
                28.909123,
                41.007361
              ],
              [
                28.908966,
                41.006701
              ],
              [
                28.908959,
                41.006627
              ],
              [
                28.908957,
                41.006554
              ],
              [
                28.908969,
                41.00648
              ],
              [
                28.908979,
                41.006443
              ],
              [
                28.90933,
                41.005488
              ],
              [
                28.9094,
                41.005319
              ],
              [
                28.909456,
                41.005233
              ],
              [
                28.909507,
                41.005178
              ],
              [
                28.909588,
                41.005111
              ],
              [
                28.90971,
                41.004974
              ],
              [
                28.909765,
                41.004857
              ],
              [
                28.909765,
                41.004801
              ],
              [
                28.909754,
                41.004728
              ],
              [
                28.909742,
                41.00468
              ],
              [
                28.90972,
                41.004649
              ],
              [
                28.909676,
                41.004592
              ],
              [
                28.909638,
                41.00456
              ],
              [
                28.909593,
                41.004526
              ],
              [
                28.909519,
                41.004489
              ],
              [
                28.909432,
                41.004452
              ],
              [
                28.909317,
                41.004434
              ],
              [
                28.90774,
                41.004247
              ],
              [
                28.907364,
                41.004203
              ],
              [
                28.906941,
                41.004157
              ],
              [
                28.906048,
                41.004071
              ],
              [
                28.905073,
                41.004012
              ],
              [
                28.904618,
                41.003946
              ],
              [
                28.904396,
                41.003907
              ],
              [
                28.902818,
                41.003625
              ],
              [
                28.902496,
                41.003565
              ],
              [
                28.902211,
                41.003518
              ],
              [
                28.902165,
                41.003512
              ],
              [
                28.901781,
                41.003487
              ],
              [
                28.900913,
                41.003438
              ],
              [
                28.900268,
                41.003394
              ],
              [
                28.899888,
                41.003356
              ],
              [
                28.89961,
                41.003318
              ],
              [
                28.898508,
                41.003031
              ],
              [
                28.897988,
                41.002853
              ],
              [
                28.897875,
                41.002805
              ],
              [
                28.896572,
                41.002103
              ],
              [
                28.896321,
                41.002014
              ],
              [
                28.895998,
                41.001945
              ],
              [
                28.894853,
                41.001785
              ],
              [
                28.894417,
                41.001735
              ],
              [
                28.894305,
                41.001722
              ],
              [
                28.893665,
                41.001666
              ],
              [
                28.893188,
                41.001617
              ],
              [
                28.892962,
                41.001584
              ],
              [
                28.892646,
                41.001542
              ],
              [
                28.892134,
                41.001458
              ],
              [
                28.891912,
                41.001421
              ],
              [
                28.891711,
                41.001402
              ],
              [
                28.891534,
                41.001405
              ],
              [
                28.891221,
                41.001419
              ],
              [
                28.890784,
                41.001438
              ],
              [
                28.890648,
                41.001443
              ],
              [
                28.890193,
                41.001456
              ],
              [
                28.889998,
                41.001469
              ],
              [
                28.889809,
                41.00149
              ],
              [
                28.889798,
                41.001492
              ],
              [
                28.889521,
                41.001525
              ],
              [
                28.889181,
                41.001534
              ],
              [
                28.888909,
                41.001527
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Cevizlibağ – A.Ö.Y. Station",
            "description": "T1 Tram Station opened on 10 March 1994 (03-1994). Major transfer station serving Cevizlibağ, Atatürk Öğrenci Yurdu campus, and D.100 transit corridor.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.911664,
              41.01594
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Merkezefendi Station",
            "description": "T1 Tram Station opened on 10 March 1994 (03-1994), serving the historic Merkezefendi quarter and social facilities.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.909507,
              41.010455
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Seyitnizam – Akşemsettin Station",
            "description": "T1 Tram Station opened on 10 March 1994 (03-1994) along Seyitnizam Avenue.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.907365,
              41.004203
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Mithatpaşa Station",
            "description": "T1 Tram Station opened on 10 March 1994 (03-1994) in Çırpıcı quarter.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.89989,
              41.003356
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Zeytinburnu Station (T1)",
            "description": "T1 Tram Station opened on 10 March 1994 (03-1994). Terminus hub providing cross-platform transfer to the Istanbul M1 Metro line.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.890193,
              41.001456
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m1-zeytinburnu-incirli-1994-03",
    "name": "M1: Zeytinburnu - Bakırköy/İncirli Section (Opening: 03-1994)",
    "date": {
      "year": 1994,
      "month": 3
    },
    "fileName": "m1_zeytinburnu_incirli_1994.kml",
    "color": "#EE2229",
    "visible": true,
    "isSample": true,
    "category": "M1 Metro Line",
    "description": "Western extension of Istanbul M1 Metro line opened on 7 March 1994 (03-1994), continuing from Zeytinburnu to Bakırköy-İncirli along the D.100 highway corridor.",
    "placemarksCount": 2,
    "bounds": [
      [
        40.9966,
        28.8753
      ],
      [
        41.0018,
        28.8896
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M1 Railway Line (Zeytinburnu ↔ Bakırköy-İncirli)",
            "description": "Rapid transit track alignment from Zeytinburnu interchange to Bakırköy - İncirli, opened on 7 March 1994.",
            "style": {
              "color": "#EE2229",
              "width": 5
            }
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.889575,
                41.00171
              ],
              [
                28.888782,
                41.001647
              ],
              [
                28.888284,
                41.001609
              ],
              [
                28.887524,
                41.001549
              ],
              [
                28.887185,
                41.001504
              ],
              [
                28.886901,
                41.001455
              ],
              [
                28.886616,
                41.0014
              ],
              [
                28.886367,
                41.001347
              ],
              [
                28.885715,
                41.001141
              ],
              [
                28.885532,
                41.001075
              ],
              [
                28.885331,
                41.000992
              ],
              [
                28.885032,
                41.000856
              ],
              [
                28.884763,
                41.000719
              ],
              [
                28.884433,
                41.000552
              ],
              [
                28.881981,
                40.99927
              ],
              [
                28.881576,
                40.999049
              ],
              [
                28.881219,
                40.998836
              ],
              [
                28.8788,
                40.997372
              ],
              [
                28.878494,
                40.997201
              ],
              [
                28.878156,
                40.997047
              ],
              [
                28.877847,
                40.996927
              ],
              [
                28.877494,
                40.996827
              ],
              [
                28.877164,
                40.996764
              ],
              [
                28.876922,
                40.996727
              ],
              [
                28.876614,
                40.99669
              ],
              [
                28.876048,
                40.996662
              ],
              [
                28.875391,
                40.996639
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bakırköy - İncirli Station",
            "description": "M1 Metro Station opened on 7 March 1994 (03-1994). Key gateway station serving Bakırköy, İncirli Avenue, and Sadi Konuk Hospital.",
            "style": {
              "color": "#EE2229"
            },
            "lineCode": "M1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.875391,
              40.996639
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m1-incirli-yenibosna-1995-08",
    "name": "M1: Bakırköy/İncirli - Yenibosna Section (Opening: 08-1995)",
    "date": {
      "year": 1995,
      "month": 8
    },
    "fileName": "m1_incirli_yenibosna_1995.kml",
    "color": "#EE2229",
    "visible": true,
    "isSample": true,
    "category": "M1 Metro Line",
    "description": "Western extension of Istanbul M1 Metro line opened on 25 August 1995 (08-1995), continuing from Bakırköy-İncirli through Ataköy-Şirinevler to Yenibosna along the D.100 corridor.",
    "placemarksCount": 3,
    "bounds": [
      [
        40.985,
        28.825
      ],
      [
        41.002,
        28.88
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M1 Railway Line (Bakırköy/İncirli ↔ Yenibosna)",
            "description": "Authentic rapid transit railway track alignment of the M1 extension from Bakırköy-İncirli to Yenibosna along D.100 corridor, opened on 25 August 1995.",
            "style": {
              "color": "#EE2229",
              "width": 4
            },
            "lineCode": "M1"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.875394,
                40.996603
              ],
              [
                28.870569,
                40.996465
              ],
              [
                28.869863,
                40.996429
              ],
              [
                28.868118,
                40.99626
              ],
              [
                28.866165,
                40.996018
              ],
              [
                28.865059,
                40.995849
              ],
              [
                28.863897,
                40.995617
              ],
              [
                28.863322,
                40.995462
              ],
              [
                28.862658,
                40.995283
              ],
              [
                28.862284,
                40.995156
              ],
              [
                28.862089,
                40.995079
              ],
              [
                28.861892,
                40.995003
              ],
              [
                28.861449,
                40.994812
              ],
              [
                28.86083,
                40.994541
              ],
              [
                28.86003,
                40.994159
              ],
              [
                28.857336,
                40.99275
              ],
              [
                28.856865,
                40.992511
              ],
              [
                28.856379,
                40.992292
              ],
              [
                28.855615,
                40.991988
              ],
              [
                28.852954,
                40.99113
              ],
              [
                28.852545,
                40.991014
              ],
              [
                28.852358,
                40.990976
              ],
              [
                28.852175,
                40.990938
              ],
              [
                28.852046,
                40.990912
              ],
              [
                28.851651,
                40.990875
              ],
              [
                28.851196,
                40.990843
              ],
              [
                28.850533,
                40.990857
              ],
              [
                28.850107,
                40.990894
              ],
              [
                28.849661,
                40.990947
              ],
              [
                28.848774,
                40.991076
              ],
              [
                28.848073,
                40.991172
              ],
              [
                28.847556,
                40.991228
              ],
              [
                28.846857,
                40.991285
              ],
              [
                28.84601,
                40.991341
              ],
              [
                28.84413,
                40.991491
              ],
              [
                28.842435,
                40.991606
              ],
              [
                28.842036,
                40.991629
              ],
              [
                28.841795,
                40.991629
              ],
              [
                28.84153,
                40.991619
              ],
              [
                28.841342,
                40.991599
              ],
              [
                28.841132,
                40.991571
              ],
              [
                28.84076,
                40.991494
              ],
              [
                28.840403,
                40.9914
              ],
              [
                28.84001,
                40.991257
              ],
              [
                28.839658,
                40.991082
              ],
              [
                28.839083,
                40.990733
              ],
              [
                28.83832,
                40.990268
              ],
              [
                28.837605,
                40.989804
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ataköy - Şirinevler Station",
            "description": "M1 Metro Station opened on 25 August 1995 (08-1995) over the D.100 highway connecting Ataköy and Şirinevler square.",
            "style": {
              "color": "#EE2229"
            },
            "lineCode": "M1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.84601,
              40.991341
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yenibosna Station",
            "description": "M1 Metro Station opened on 25 August 1995 (08-1995). Major multimodal transit interchange serving Ataköy, Yenibosna, and connecting to M9 metro line.",
            "style": {
              "color": "#EE2229"
            },
            "lineCode": "M1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.837605,
              40.989804
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-t1-sirkeci-eminonu-1996-04",
    "name": "T1: Sirkeci - Eminönü Section (Opening: 04-1996)",
    "date": {
      "year": 1996,
      "month": 4
    },
    "fileName": "t1_sirkeci_eminonu_1996.kml",
    "color": "#004B86",
    "visible": true,
    "isSample": true,
    "category": "T1 Tram Line",
    "description": "Northern extension of Istanbul T1 Tramway line opened on 20 April 1996 (04-1996), connecting Sirkeci to the bustling Eminönü waterfront hub and ferry terminals.",
    "placemarksCount": 2,
    "bounds": [
      [
        41.014,
        28.97
      ],
      [
        41.019,
        28.978
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "T1 Tram Line (Sirkeci ↔ Eminönü)",
            "description": "Authentic tram track alignment curving along Reşadiye Caddesi from Sirkeci Garı to Eminönü Square, opened on 20 April 1996.",
            "style": {
              "color": "#004B86",
              "width": 4
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.975906,
                41.015144
              ],
              [
                28.976135,
                41.015504
              ],
              [
                28.976176,
                41.015581
              ],
              [
                28.976471,
                41.016128
              ],
              [
                28.976484,
                41.016164
              ],
              [
                28.976494,
                41.016207
              ],
              [
                28.976491,
                41.016272
              ],
              [
                28.976482,
                41.016334
              ],
              [
                28.976437,
                41.016404
              ],
              [
                28.976368,
                41.016467
              ],
              [
                28.976291,
                41.016508
              ],
              [
                28.97437,
                41.017339
              ],
              [
                28.974233,
                41.017379
              ],
              [
                28.974092,
                41.017409
              ],
              [
                28.97395,
                41.017425
              ],
              [
                28.973882,
                41.01743
              ],
              [
                28.973215,
                41.01745
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Eminönü Station",
            "description": "T1 Tram Station opened on 20 April 1996 (04-1996) at Eminönü Square in front of the Spice Bazaar and Galata Bridge.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.973215,
              41.01745
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m1-bahcelievler-1999-01",
    "name": "M1: Bahçelievler Station Opening (01-1999)",
    "date": {
      "year": 1999,
      "month": 1
    },
    "fileName": "m1_bahcelievler_1999.kml",
    "color": "#EE2229",
    "visible": true,
    "isSample": true,
    "category": "M1 Metro Line",
    "description": "In-fill subway station Bahçelievler on the M1 line opened on 15 January 1999 (01-1999) along the D.100 corridor next to Metroport AVM.",
    "placemarksCount": 1,
    "bounds": [
      [
        40.994,
        28.861
      ],
      [
        40.998,
        28.866
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Bahçelievler Station",
            "description": "M1 Metro Station opened on 15 January 1999 (01-1999) at D.100 corridor in Bahçelievler next to Metroport AVM.",
            "style": {
              "color": "#EE2229"
            },
            "lineCode": "M1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.863589,
              40.995654
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m2-taksim-levent-2000-09",
    "name": "M2: Taksim - Levent Section (Opening: 09-2000)",
    "date": {
      "year": 2000,
      "month": 9
    },
    "fileName": "m2_taksim_levent_2000.kml",
    "color": "#059A4D",
    "visible": true,
    "isSample": true,
    "category": "M2 Metro Line",
    "description": "Inaugural opening of the Istanbul M2 Metro line on 16 September 2000 (09-2000), connecting Taksim to Osmanbey, Şişli-Mecidiyeköy, Gayrettepe, and Levent along the central transit corridor.",
    "placemarksCount": 6,
    "bounds": [
      [
        41.035,
        28.985
      ],
      [
        41.08,
        29.015
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M2 Railway Line (Taksim ↔ Levent)",
            "description": "Authentic heavy metro deep-tunnel railway alignment of the M2 line between Taksim and Levent along the Büyükdere Avenue spine, opened on 16 September 2000.",
            "style": {
              "color": "#059A4D",
              "width": 4
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.985361,
                41.038089
              ],
              [
                28.985624,
                41.038998
              ],
              [
                28.986318,
                41.041055
              ],
              [
                28.986424,
                41.041519
              ],
              [
                28.986454,
                41.042001
              ],
              [
                28.98641,
                41.043903
              ],
              [
                28.986377,
                41.044497
              ],
              [
                28.986379,
                41.044906
              ],
              [
                28.986424,
                41.045355
              ],
              [
                28.986561,
                41.04609
              ],
              [
                28.987192,
                41.047975
              ],
              [
                28.987352,
                41.048691
              ],
              [
                28.987444,
                41.04942
              ],
              [
                28.987488,
                41.050259
              ],
              [
                28.987477,
                41.051006
              ],
              [
                28.987393,
                41.051829
              ],
              [
                28.987243,
                41.052756
              ],
              [
                28.987006,
                41.054183
              ],
              [
                28.98649,
                41.058378
              ],
              [
                28.986434,
                41.058791
              ],
              [
                28.986437,
                41.059159
              ],
              [
                28.98648,
                41.059516
              ],
              [
                28.986605,
                41.059917
              ],
              [
                28.986817,
                41.060394
              ],
              [
                28.987087,
                41.060799
              ],
              [
                28.987333,
                41.061097
              ],
              [
                28.987567,
                41.061359
              ],
              [
                28.987944,
                41.061728
              ],
              [
                28.990806,
                41.063434
              ],
              [
                28.991751,
                41.064015
              ],
              [
                28.992642,
                41.064606
              ],
              [
                28.995503,
                41.0665
              ],
              [
                28.996122,
                41.066801
              ],
              [
                28.996811,
                41.067018
              ],
              [
                28.997673,
                41.067159
              ],
              [
                29.005121,
                41.06768
              ],
              [
                29.006582,
                41.0679
              ],
              [
                29.008309,
                41.068271
              ],
              [
                29.010197,
                41.06884
              ],
              [
                29.011048,
                41.069132
              ],
              [
                29.012175,
                41.06952
              ],
              [
                29.013531,
                41.070053
              ],
              [
                29.014352,
                41.070462
              ],
              [
                29.014632,
                41.070632
              ],
              [
                29.014798,
                41.070795
              ],
              [
                29.014997,
                41.071021
              ],
              [
                29.015171,
                41.071261
              ],
              [
                29.015351,
                41.071551
              ],
              [
                29.015449,
                41.071868
              ],
              [
                29.015505,
                41.072116
              ],
              [
                29.015542,
                41.072377
              ],
              [
                29.015549,
                41.072575
              ],
              [
                29.015529,
                41.072829
              ],
              [
                29.015487,
                41.073115
              ],
              [
                29.015402,
                41.073371
              ],
              [
                29.014592,
                41.075271
              ],
              [
                29.014283,
                41.075881
              ],
              [
                29.013573,
                41.076986
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Taksim Station",
            "description": "M2 Metro Station opened on 16 September 2000 (09-2000). Major central terminus at Taksim Square with transfers to F1 funicular and T2 tram.",
            "style": {
              "color": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.985361,
              41.038089
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Osmanbey Station",
            "description": "M2 Metro Station opened on 16 September 2000 (09-2000) under Halaskargazi Avenue serving Osmanbey, Pangaltı, and Nişantaşı.",
            "style": {
              "color": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.987243,
              41.052756
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Şişli - Mecidiyeköy Station",
            "description": "M2 Metro Station opened on 16 September 2000 (09-2000) at Mecidiyeköy Square and Cevahir AVM. Transfer hub with M7 line.",
            "style": {
              "color": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.992642,
              41.064606
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Gayrettepe Station",
            "description": "M2 Metro Station opened on 16 September 2000 (09-2000) at Zincirlikuyu and Zorlu Center. Transfer hub with M11 Airport Express line.",
            "style": {
              "color": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.011048,
              41.069132
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Levent Station",
            "description": "M2 Metro Station opened on 16 September 2000 (09-2000) in the heart of Istanbul's financial district. Direct transfer to M6 line.",
            "style": {
              "color": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.013573,
              41.076986
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m2-levent-4levent-2000-10",
    "name": "M2: 4. Levent Extension (Opening: 10-2000)",
    "date": {
      "year": 2000,
      "month": 10
    },
    "fileName": "m2_4levent_2000.kml",
    "color": "#059A4D",
    "visible": true,
    "isSample": true,
    "category": "M2 Metro Line",
    "description": "Northern extension of the Istanbul M2 Metro line from Levent to 4. Levent opened on 31 October 2000 (10-2000), serving the 4. Levent, Çeliktepe, and Sapphire district.",
    "placemarksCount": 2,
    "bounds": [
      [
        41.075,
        29.005
      ],
      [
        41.088,
        29.015
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M2 Railway Line (Levent ↔ 4. Levent)",
            "description": "Deep-tunnel rapid transit extension of M2 connecting Levent station to 4. Levent, opened on 31 October 2000.",
            "style": {
              "color": "#059A4D",
              "width": 4
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.013573,
                41.076986
              ],
              [
                29.013007,
                41.077868
              ],
              [
                29.011867,
                41.079492
              ],
              [
                29.011145,
                41.080427
              ],
              [
                29.010192,
                41.081481
              ],
              [
                29.009695,
                41.082047
              ],
              [
                29.008617,
                41.083239
              ],
              [
                29.008236,
                41.083706
              ],
              [
                29.008009,
                41.084082
              ],
              [
                29.007357,
                41.085325
              ],
              [
                29.006972,
                41.086047
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "4. Levent Station",
            "description": "M2 Metro Station opened on 31 October 2000 (10-2000) next to Istanbul Sapphire tower, serving 4. Levent, Çeliktepe, and Emniyet Evleri.",
            "style": {
              "color": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.006972,
              41.086047
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m1-yenibosna-havalimani-2002-12",
    "name": "M1: Yenibosna - Atatürk Havalimanı Section (Opening: 12-2002)",
    "date": {
      "year": 2002,
      "month": 12
    },
    "fileName": "m1_yenibosna_havalimani_2002.kml",
    "color": "#EE2229",
    "visible": true,
    "isSample": true,
    "category": "M1 Metro Line",
    "description": "Airport extension of the Istanbul M1A Metro line opened on 20 December 2002 (12-2002), connecting Yenibosna to DTM-İstanbul Fuar Merkezi and Atatürk International Airport terminal.",
    "placemarksCount": 3,
    "bounds": [
      [
        40.975,
        28.818
      ],
      [
        40.99,
        28.835
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M1 Railway Line (Yenibosna ↔ Atatürk Havalimanı)",
            "description": "Authentic rapid transit railway track alignment of the M1A airport extension from Yenibosna to Atatürk Airport, opened on 20 December 2002.",
            "style": {
              "color": "#EE2229",
              "width": 4
            },
            "lineCode": "M1"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.837605,
                40.989804
              ],
              [
                28.837343,
                40.989618
              ],
              [
                28.836875,
                40.989333
              ],
              [
                28.836177,
                40.988937
              ],
              [
                28.835716,
                40.988708
              ],
              [
                28.835304,
                40.988504
              ],
              [
                28.835034,
                40.988389
              ],
              [
                28.834798,
                40.988303
              ],
              [
                28.834459,
                40.988202
              ],
              [
                28.834219,
                40.98815
              ],
              [
                28.833914,
                40.988092
              ],
              [
                28.832497,
                40.987928
              ],
              [
                28.832191,
                40.987887
              ],
              [
                28.83184,
                40.987826
              ],
              [
                28.831314,
                40.98769
              ],
              [
                28.830824,
                40.987521
              ],
              [
                28.830303,
                40.987315
              ],
              [
                28.828506,
                40.986553
              ],
              [
                28.82706,
                40.985963
              ],
              [
                28.826545,
                40.985799
              ],
              [
                28.826066,
                40.985677
              ],
              [
                28.824442,
                40.985247
              ],
              [
                28.823615,
                40.985015
              ],
              [
                28.823172,
                40.984873
              ],
              [
                28.822779,
                40.984737
              ],
              [
                28.822484,
                40.984599
              ],
              [
                28.822253,
                40.98447
              ],
              [
                28.821904,
                40.984271
              ],
              [
                28.821662,
                40.984074
              ],
              [
                28.821353,
                40.983757
              ],
              [
                28.821076,
                40.983321
              ],
              [
                28.820949,
                40.983013
              ],
              [
                28.820872,
                40.982691
              ],
              [
                28.820849,
                40.98215
              ],
              [
                28.820872,
                40.981674
              ],
              [
                28.820933,
                40.980966
              ],
              [
                28.820989,
                40.980619
              ],
              [
                28.821048,
                40.980371
              ],
              [
                28.821079,
                40.980269
              ],
              [
                28.821216,
                40.97976
              ],
              [
                28.821354,
                40.979248
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "DTM - İstanbul Fuar Merkezi Station",
            "description": "M1 Metro Station opened on 20 December 2002 (12-2002) serving Istanbul World Trade Center (İDTM) and CNR Expo exhibition center.",
            "style": {
              "color": "#EE2229"
            },
            "lineCode": "M1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.828506,
              40.986553
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Atatürk Havalimanı Station",
            "description": "M1 Metro Station opened on 20 December 2002 (12-2002). Turkey's first airport metro terminal connecting Atatürk International Airport directly to Istanbul city center.",
            "style": {
              "color": "#EE2229"
            },
            "lineCode": "M1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.821354,
              40.979248
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-t3-kadikoy-moda-2003-11",
    "name": "T3: Kadıköy - Moda Nostalgic Tramway (Opening: 11-2003)",
    "date": {
      "year": 2003,
      "month": 11
    },
    "fileName": "t3_kadikoy_moda_2003.kml",
    "color": "#99562F",
    "visible": true,
    "isSample": true,
    "category": "T3 Tram Line",
    "description": "Inaugural opening of the historic T3 Kadıköy - Moda Nostalgic Tramway circular ring line on 1 November 2003 (11-2003), connecting Kadıköy Port to Bahariye and Moda peninsula.",
    "placemarksCount": 12,
    "bounds": [
      [
        40.98,
        29.02
      ],
      [
        40.993,
        29.034
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "T3 Tram Line (Kadıköy ↔ Moda Ring)",
            "description": "Historic 2.6 km circular single-track streetcar alignment looping through Kadıköy center, Altıyol, Bahariye Avenue, and Moda peninsula, opened on 1 November 2003.",
            "style": {
              "color": "#99562F",
              "width": 4
            },
            "lineCode": "T3"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.022443,
                40.990139
              ],
              [
                29.023058,
                40.990564
              ],
              [
                29.023131,
                40.990617
              ],
              [
                29.023179,
                40.990653
              ],
              [
                29.023281,
                40.990735
              ],
              [
                29.023307,
                40.990755
              ],
              [
                29.023334,
                40.990778
              ],
              [
                29.023364,
                40.990805
              ],
              [
                29.023394,
                40.990834
              ],
              [
                29.023422,
                40.990864
              ],
              [
                29.02344,
                40.990886
              ],
              [
                29.023456,
                40.990907
              ],
              [
                29.023474,
                40.99093
              ],
              [
                29.023489,
                40.990947
              ],
              [
                29.023508,
                40.990971
              ],
              [
                29.023647,
                40.991132
              ],
              [
                29.023761,
                40.991267
              ],
              [
                29.023773,
                40.991281
              ],
              [
                29.02379,
                40.991299
              ],
              [
                29.0238,
                40.991308
              ],
              [
                29.023817,
                40.991321
              ],
              [
                29.023831,
                40.991332
              ],
              [
                29.023851,
                40.991345
              ],
              [
                29.023867,
                40.991353
              ],
              [
                29.023885,
                40.991362
              ],
              [
                29.023904,
                40.991369
              ],
              [
                29.023923,
                40.991374
              ],
              [
                29.023948,
                40.991379
              ],
              [
                29.02397,
                40.991382
              ],
              [
                29.023999,
                40.991383
              ],
              [
                29.024038,
                40.991384
              ],
              [
                29.02408,
                40.991383
              ],
              [
                29.024127,
                40.99138
              ],
              [
                29.024161,
                40.991378
              ],
              [
                29.024199,
                40.991373
              ],
              [
                29.024226,
                40.99137
              ],
              [
                29.024256,
                40.991365
              ],
              [
                29.024886,
                40.991259
              ],
              [
                29.024985,
                40.991241
              ],
              [
                29.025524,
                40.991151
              ],
              [
                29.026062,
                40.991061
              ],
              [
                29.02612,
                40.991051
              ],
              [
                29.026463,
                40.990994
              ],
              [
                29.027123,
                40.99089
              ],
              [
                29.028376,
                40.99067
              ],
              [
                29.028686,
                40.990608
              ],
              [
                29.028728,
                40.990599
              ],
              [
                29.028764,
                40.990589
              ],
              [
                29.028809,
                40.990576
              ],
              [
                29.028845,
                40.990563
              ],
              [
                29.028879,
                40.990551
              ],
              [
                29.028915,
                40.990535
              ],
              [
                29.028955,
                40.990517
              ],
              [
                29.028994,
                40.990497
              ],
              [
                29.029025,
                40.99048
              ],
              [
                29.029047,
                40.990468
              ],
              [
                29.029069,
                40.990455
              ],
              [
                29.029083,
                40.990446
              ],
              [
                29.029095,
                40.990438
              ],
              [
                29.029104,
                40.990431
              ],
              [
                29.029114,
                40.990423
              ],
              [
                29.029117,
                40.99042
              ],
              [
                29.029121,
                40.990416
              ],
              [
                29.029128,
                40.990409
              ],
              [
                29.029134,
                40.990401
              ],
              [
                29.029139,
                40.990394
              ],
              [
                29.029142,
                40.990386
              ],
              [
                29.029145,
                40.990375
              ],
              [
                29.029147,
                40.990365
              ],
              [
                29.029149,
                40.990354
              ],
              [
                29.029151,
                40.990341
              ],
              [
                29.029152,
                40.990328
              ],
              [
                29.029152,
                40.990315
              ],
              [
                29.029151,
                40.990302
              ],
              [
                29.02915,
                40.990285
              ],
              [
                29.029148,
                40.990269
              ],
              [
                29.029145,
                40.990251
              ],
              [
                29.029141,
                40.990235
              ],
              [
                29.029127,
                40.990194
              ],
              [
                29.029087,
                40.990081
              ],
              [
                29.028934,
                40.989656
              ],
              [
                29.028844,
                40.989384
              ],
              [
                29.028839,
                40.989367
              ],
              [
                29.028824,
                40.989296
              ],
              [
                29.028804,
                40.989174
              ],
              [
                29.028684,
                40.988375
              ],
              [
                29.028656,
                40.988228
              ],
              [
                29.028621,
                40.988042
              ],
              [
                29.028613,
                40.987997
              ],
              [
                29.028591,
                40.987884
              ],
              [
                29.028552,
                40.987668
              ],
              [
                29.028537,
                40.987578
              ],
              [
                29.028427,
                40.987172
              ],
              [
                29.028379,
                40.987041
              ],
              [
                29.028336,
                40.986933
              ],
              [
                29.028259,
                40.986757
              ],
              [
                29.028237,
                40.986708
              ],
              [
                29.028025,
                40.986216
              ],
              [
                29.027918,
                40.985985
              ],
              [
                29.027854,
                40.985848
              ],
              [
                29.027844,
                40.985828
              ],
              [
                29.027836,
                40.98581
              ],
              [
                29.027715,
                40.985517
              ],
              [
                29.027692,
                40.985382
              ],
              [
                29.027668,
                40.98459
              ],
              [
                29.027659,
                40.984557
              ],
              [
                29.027651,
                40.984537
              ],
              [
                29.027607,
                40.984449
              ],
              [
                29.02758,
                40.984418
              ],
              [
                29.027428,
                40.984347
              ],
              [
                29.027356,
                40.984329
              ],
              [
                29.027282,
                40.984327
              ],
              [
                29.027233,
                40.984334
              ],
              [
                29.027182,
                40.984347
              ],
              [
                29.027105,
                40.984377
              ],
              [
                29.027061,
                40.984386
              ],
              [
                29.026999,
                40.984386
              ],
              [
                29.026947,
                40.984368
              ],
              [
                29.026904,
                40.984343
              ],
              [
                29.026695,
                40.984094
              ],
              [
                29.026631,
                40.984005
              ],
              [
                29.026355,
                40.983574
              ],
              [
                29.02635,
                40.983569
              ],
              [
                29.026345,
                40.983564
              ],
              [
                29.026339,
                40.98356
              ],
              [
                29.026331,
                40.983555
              ],
              [
                29.026316,
                40.983548
              ],
              [
                29.026305,
                40.983545
              ],
              [
                29.026295,
                40.983542
              ],
              [
                29.026286,
                40.98354
              ],
              [
                29.026279,
                40.983539
              ],
              [
                29.026269,
                40.983538
              ],
              [
                29.026262,
                40.983538
              ],
              [
                29.026252,
                40.983538
              ],
              [
                29.026243,
                40.983539
              ],
              [
                29.026234,
                40.983541
              ],
              [
                29.02518,
                40.983842
              ],
              [
                29.025021,
                40.983887
              ],
              [
                29.024665,
                40.983987
              ],
              [
                29.024379,
                40.984063
              ],
              [
                29.024202,
                40.984112
              ],
              [
                29.024145,
                40.984131
              ],
              [
                29.02347,
                40.984387
              ],
              [
                29.022819,
                40.984632
              ],
              [
                29.022721,
                40.984673
              ],
              [
                29.022198,
                40.984892
              ],
              [
                29.021908,
                40.985007
              ],
              [
                29.021552,
                40.985145
              ],
              [
                29.021078,
                40.985337
              ],
              [
                29.021066,
                40.985352
              ],
              [
                29.02106,
                40.985372
              ],
              [
                29.02111,
                40.985489
              ],
              [
                29.021289,
                40.985845
              ],
              [
                29.021317,
                40.985906
              ],
              [
                29.021437,
                40.986219
              ],
              [
                29.02151,
                40.986427
              ],
              [
                29.021524,
                40.986482
              ],
              [
                29.021587,
                40.986871
              ],
              [
                29.021589,
                40.986946
              ],
              [
                29.021575,
                40.987007
              ],
              [
                29.021477,
                40.987227
              ],
              [
                29.021473,
                40.987235
              ],
              [
                29.021355,
                40.987465
              ],
              [
                29.021116,
                40.987861
              ],
              [
                29.021028,
                40.988005
              ],
              [
                29.02072,
                40.988493
              ],
              [
                29.020569,
                40.988757
              ],
              [
                29.020563,
                40.988788
              ],
              [
                29.02056,
                40.988809
              ],
              [
                29.020561,
                40.988851
              ],
              [
                29.020573,
                40.988938
              ],
              [
                29.020584,
                40.988975
              ],
              [
                29.020599,
                40.989008
              ],
              [
                29.020619,
                40.989041
              ],
              [
                29.020642,
                40.989067
              ],
              [
                29.020666,
                40.989091
              ],
              [
                29.021348,
                40.989589
              ],
              [
                29.021569,
                40.989757
              ],
              [
                29.021601,
                40.98978
              ],
              [
                29.021629,
                40.989798
              ],
              [
                29.021656,
                40.989813
              ],
              [
                29.021684,
                40.989825
              ],
              [
                29.021717,
                40.98984
              ],
              [
                29.021764,
                40.989858
              ],
              [
                29.0218,
                40.989871
              ],
              [
                29.021841,
                40.989886
              ],
              [
                29.021868,
                40.989896
              ],
              [
                29.022123,
                40.989981
              ],
              [
                29.022159,
                40.989994
              ],
              [
                29.022212,
                40.990013
              ],
              [
                29.022256,
                40.990029
              ],
              [
                29.022281,
                40.99004
              ],
              [
                29.022301,
                40.990049
              ],
              [
                29.022321,
                40.990059
              ],
              [
                29.022342,
                40.990071
              ],
              [
                29.022369,
                40.990089
              ],
              [
                29.022401,
                40.99011
              ],
              [
                29.022443,
                40.990139
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İskele Station",
            "description": "T3 Tram Stop opened on 1 November 2003 (11-2003) at Kadıköy Ferry Terminal with transfers to M4 Metro and ferry docks.",
            "style": {
              "color": "#99562F"
            },
            "lineCode": "T3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.022123,
              40.989981
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İskele Camii Station",
            "description": "T3 Tram Stop opened on 1 November 2003 (11-2003) in front of historic Sultan Mustafa III Mosque.",
            "style": {
              "color": "#99562F"
            },
            "lineCode": "T3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.023179,
              40.990653
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Çarşı Station",
            "description": "T3 Tram Stop opened on 1 November 2003 (11-2003) in the heart of Kadıköy Historic Market and Fish Bazaar.",
            "style": {
              "color": "#99562F"
            },
            "lineCode": "T3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.025524,
              40.991151
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Altıyol Station",
            "description": "T3 Tram Stop opened on 1 November 2003 (11-2003) at Altıyol Square next to the famous Kadıköy Bull Statue.",
            "style": {
              "color": "#99562F"
            },
            "lineCode": "T3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.028844,
              40.989384
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bahariye Station",
            "description": "T3 Tram Stop opened on 1 November 2003 (11-2003) on pedestrianized Bahariye Avenue right in front of historic Süreyya Opera House.",
            "style": {
              "color": "#99562F"
            },
            "lineCode": "T3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.028552,
              40.987668
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kilise Station",
            "description": "T3 Tram Stop opened on 1 November 2003 (11-2003) in the historic churches quarter of Caferağa.",
            "style": {
              "color": "#99562F"
            },
            "lineCode": "T3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.027918,
              40.985985
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Moda İlkokulu Station",
            "description": "T3 Tram Stop opened on 1 November 2003 (11-2003) near historic Moda Primary School and Barış Manço Museum.",
            "style": {
              "color": "#99562F"
            },
            "lineCode": "T3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.026695,
              40.984094
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Moda Caddesi Station",
            "description": "T3 Tram Stop opened on 1 November 2003 (11-2003) at Moda Caddesi leading to historic Moda Pier and coastal park.",
            "style": {
              "color": "#99562F"
            },
            "lineCode": "T3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.024379,
              40.984063
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Rıza Paşa Station",
            "description": "T3 Tram Stop opened on 1 November 2003 (11-2003) on picturesque Rıza Paşa Street lined with historic mansions.",
            "style": {
              "color": "#99562F"
            },
            "lineCode": "T3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.022721,
              40.984673
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Mühürdar Station",
            "description": "T3 Tram Stop opened on 1 November 2003 (11-2003) along Mühürdar Avenue descending back towards Kadıköy Port.",
            "style": {
              "color": "#99562F"
            },
            "lineCode": "T3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.02111,
              40.985489
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Damga Sokak Station",
            "description": "T3 Tram Stop opened on 1 November 2003 (11-2003) on Damga Street next to İSKİ Kadıköy Branch and historic tram maintenance depot.",
            "style": {
              "color": "#99562F"
            },
            "lineCode": "T3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.020561,
              40.988851
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-t1-eminonu-findikli-2005-01",
    "name": "T1: Eminönü - Fındıklı Section (Opening: 01-2005)",
    "date": {
      "year": 2005,
      "month": 1
    },
    "fileName": "t1_eminonu_findikli_2005.kml",
    "color": "#004B86",
    "visible": true,
    "isSample": true,
    "category": "T1 Tram Line",
    "description": "Iconic extension of the T1 Tram line crossing the Galata Bridge over the Golden Horn opened on 30 January 2005 (01-2005), connecting Eminönü to Karaköy, Tophane, and Fındıklı (Mimar Sinan University).",
    "placemarksCount": 4,
    "bounds": [
      [
        41.016,
        28.97
      ],
      [
        41.033,
        28.99
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "T1 Tram Line (Eminönü ↔ Galata Bridge ↔ Fındıklı)",
            "description": "Historic surface tramway alignment traversing the iconic Galata Bridge across the Golden Horn and continuing along the Bosphorus waterfront to Fındıklı, opened on 30 January 2005.",
            "style": {
              "color": "#004B86",
              "width": 4
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.973207,
                41.017488
              ],
              [
                28.972556,
                41.017547
              ],
              [
                28.972356,
                41.017575
              ],
              [
                28.972215,
                41.017601
              ],
              [
                28.972099,
                41.017649
              ],
              [
                28.972001,
                41.017714
              ],
              [
                28.971942,
                41.017778
              ],
              [
                28.971884,
                41.017895
              ],
              [
                28.97186,
                41.01798
              ],
              [
                28.971866,
                41.018078
              ],
              [
                28.971898,
                41.018208
              ],
              [
                28.971928,
                41.018258
              ],
              [
                28.974518,
                41.021852
              ],
              [
                28.974793,
                41.022212
              ],
              [
                28.974887,
                41.022346
              ],
              [
                28.974986,
                41.022484
              ],
              [
                28.97506,
                41.022626
              ],
              [
                28.975076,
                41.022691
              ],
              [
                28.975121,
                41.023241
              ],
              [
                28.975165,
                41.023368
              ],
              [
                28.975209,
                41.023449
              ],
              [
                28.975273,
                41.023535
              ],
              [
                28.975409,
                41.023661
              ],
              [
                28.976357,
                41.024427
              ],
              [
                28.976396,
                41.024456
              ],
              [
                28.976417,
                41.024471
              ],
              [
                28.977429,
                41.025218
              ],
              [
                28.978326,
                41.025823
              ],
              [
                28.979644,
                41.02645
              ],
              [
                28.979781,
                41.02651
              ],
              [
                28.980333,
                41.026761
              ],
              [
                28.980621,
                41.026894
              ],
              [
                28.980679,
                41.026921
              ],
              [
                28.980761,
                41.026959
              ],
              [
                28.981096,
                41.027094
              ],
              [
                28.982136,
                41.027451
              ],
              [
                28.98228,
                41.027496
              ],
              [
                28.984232,
                41.028102
              ],
              [
                28.984268,
                41.028112
              ],
              [
                28.984315,
                41.028127
              ],
              [
                28.984362,
                41.028141
              ],
              [
                28.984501,
                41.028182
              ],
              [
                28.986401,
                41.028752
              ],
              [
                28.986752,
                41.028861
              ],
              [
                28.986936,
                41.028922
              ],
              [
                28.987044,
                41.028961
              ],
              [
                28.987271,
                41.029058
              ],
              [
                28.987505,
                41.029175
              ],
              [
                28.987713,
                41.029304
              ],
              [
                28.987821,
                41.029377
              ],
              [
                28.988169,
                41.029672
              ],
              [
                28.988191,
                41.029697
              ],
              [
                28.988295,
                41.029815
              ],
              [
                28.988496,
                41.030072
              ],
              [
                28.988577,
                41.030192
              ],
              [
                28.988675,
                41.030348
              ],
              [
                28.988778,
                41.030514
              ],
              [
                28.989007,
                41.030887
              ],
              [
                28.989153,
                41.031065
              ],
              [
                28.989194,
                41.031115
              ],
              [
                28.989533,
                41.0315
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Karaköy Station",
            "description": "T1 Tram Station opened on 30 January 2005 (01-2005) at the northern foot of Galata Bridge with direct access to F2 Historical Tünel funicular and ferries.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.974793,
              41.022212
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Tophane Station",
            "description": "T1 Tram Station opened on 30 January 2005 (01-2005) serving Galataport Istanbul, Istanbul Modern Art Museum, and historic Kılıç Ali Paşa Complex.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.980341,
              41.026793
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Fındıklı - Mimar Sinan Üniversitesi Station",
            "description": "T1 Tram Station opened on 30 January 2005 (01-2005) at Fındıklı Park in front of Mimar Sinan Fine Arts University, serving as northern terminus until 2006.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.989533,
              41.0315
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-f1-taksim-kabatas-2006-06",
    "name": "F1: Taksim - Kabataş Funicular (Opening: 06-2006)",
    "date": {
      "year": 2006,
      "month": 6
    },
    "fileName": "f1_taksim_kabatas_2006.kml",
    "color": "#7A745A",
    "visible": true,
    "isSample": true,
    "category": "F1 Funicular Line",
    "description": "Inaugural opening of the F1 Taksim – Kabataş Funicular on 29 June 2006 (06-2006), connecting Taksim Square and the M2 Metro to Kabataş waterfront, T1 Tramway, and Bosphorus ferries in 2.5 minutes via a 594-meter subterranean funicular railway.",
    "placemarksCount": 3,
    "bounds": [
      [
        41.033,
        28.986
      ],
      [
        41.037,
        28.993
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "F1 Funicular Line (Taksim ↔ Kabataş)",
            "description": "Subterranean cable-drawn funicular railway tunnel alignment climbing 73 meters elevation from Kabataş waterfront to Taksim Square, opened on 29 June 2006.",
            "style": {
              "color": "#7A745A",
              "width": 5
            },
            "lineCode": "F1"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.986525,
                41.036851
              ],
              [
                28.986666,
                41.03678
              ],
              [
                28.98898,
                41.035605
              ],
              [
                28.989294,
                41.03547
              ],
              [
                28.98986,
                41.035183
              ],
              [
                28.990161,
                41.035006
              ],
              [
                28.992281,
                41.033931
              ],
              [
                28.992421,
                41.033859
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Taksim Station (F1)",
            "description": "F1 Funicular Station opened on 29 June 2006 (06-2006) beneath Taksim Square with direct subterranean concourse to M2 Metro.",
            "style": {
              "color": "#7A745A"
            },
            "lineCode": "F1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.986525,
              41.036851
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kabataş Station (F1)",
            "description": "F1 Funicular Station opened on 29 June 2006 (06-2006) on the Bosphorus waterfront at Kabataş, connecting directly to T1 Tram and Bosphorus ferries.",
            "style": {
              "color": "#7A745A"
            },
            "lineCode": "F1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.992281,
              41.033931
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-t1-findikli-kabatas-2006-06",
    "name": "T1: Fındıklı - Kabataş Section (Opening: 06-2006)",
    "date": {
      "year": 2006,
      "month": 6
    },
    "fileName": "t1_findikli_kabatas_2006.kml",
    "color": "#004B86",
    "visible": true,
    "isSample": true,
    "category": "T1 Tram Line",
    "description": "Final Bosphorus coastal extension of the T1 Tramway line opened on 29 June 2006 (06-2006), connecting Fındıklı to the new Kabataş terminal, integrating with the simultaneously opened F1 Taksim Funicular and Bosphorus maritime ferry network.",
    "placemarksCount": 2,
    "bounds": [
      [
        41.031,
        28.989
      ],
      [
        41.035,
        28.993
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "T1 Tram Line (Fındıklı ↔ Kabataş)",
            "description": "Authentic tram track alignment along Meclis-i Mebusan Caddesi extending from Fındıklı Park to Kabataş terminus, opened on 29 June 2006.",
            "style": {
              "color": "#004B86",
              "width": 4
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.989533,
                41.0315
              ],
              [
                28.989678,
                41.031767
              ],
              [
                28.989699,
                41.03179
              ],
              [
                28.989748,
                41.031841
              ],
              [
                28.989792,
                41.031888
              ],
              [
                28.989868,
                41.031966
              ],
              [
                28.990106,
                41.032184
              ],
              [
                28.990886,
                41.032777
              ],
              [
                28.991252,
                41.033086
              ],
              [
                28.991529,
                41.03336
              ],
              [
                28.991995,
                41.033816
              ],
              [
                28.992182,
                41.033979
              ],
              [
                28.992671,
                41.034477
              ],
              [
                28.992942,
                41.034754
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kabataş Station (T1)",
            "description": "T1 Tram Station opened on 29 June 2006 (06-2006) as the northern terminus of the line at Kabataş, creating an integrated hub with F1 Funicular and Bosphorus ferries.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.992671,
              41.034477
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-t2-zeytinburnu-bagcilar-2006-09",
    "name": "T2: Zeytinburnu - Bağcılar Tramway (Opening: 09-2006)",
    "date": {
      "year": 2006,
      "month": 9
    },
    "fileName": "t2_zeytinburnu_bagcilar_2006.kml",
    "color": "#90ABA0",
    "visible": true,
    "isSample": true,
    "category": "T2 Tram Line",
    "description": "Opening of the separate T2 Zeytinburnu – Bağcılar Tramway on 14 September 2006 (09-2006), operating with high-floor rolling stock until February 2011 (02-2011) when stations were transformed and merged into T1.",
    "placemarksCount": 10,
    "bounds": [
      [
        41.001,
        28.86
      ],
      [
        41.034,
        28.89
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "T2 Tram Line (Zeytinburnu ↔ Bağcılar)",
            "description": "Dedicated surface tramway corridor running between Zeytinburnu transfer station and Bağcılar terminus, opened on 14 September 2006.",
            "style": {
              "color": "#90ABA0",
              "width": 4
            },
            "lineCode": "T2"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.888917,
                41.00156
              ],
              [
                28.888644,
                41.001543
              ],
              [
                28.887876,
                41.00147
              ],
              [
                28.887646,
                41.001448
              ],
              [
                28.887434,
                41.001416
              ],
              [
                28.887186,
                41.001368
              ],
              [
                28.886621,
                41.001232
              ],
              [
                28.886377,
                41.001197
              ],
              [
                28.886261,
                41.001194
              ],
              [
                28.886106,
                41.001196
              ],
              [
                28.885926,
                41.001212
              ],
              [
                28.885788,
                41.001241
              ],
              [
                28.885641,
                41.00128
              ],
              [
                28.885489,
                41.001335
              ],
              [
                28.885301,
                41.001425
              ],
              [
                28.88432,
                41.001967
              ],
              [
                28.884073,
                41.002137
              ],
              [
                28.883957,
                41.002243
              ],
              [
                28.883683,
                41.002498
              ],
              [
                28.883421,
                41.002815
              ],
              [
                28.882872,
                41.00377
              ],
              [
                28.882019,
                41.005284
              ],
              [
                28.881903,
                41.005497
              ],
              [
                28.881693,
                41.005836
              ],
              [
                28.881514,
                41.006098
              ],
              [
                28.881484,
                41.006152
              ],
              [
                28.8814,
                41.006331
              ],
              [
                28.881365,
                41.006469
              ],
              [
                28.881127,
                41.008077
              ],
              [
                28.881124,
                41.008113
              ],
              [
                28.880922,
                41.010448
              ],
              [
                28.880896,
                41.010921
              ],
              [
                28.880863,
                41.011223
              ],
              [
                28.880785,
                41.011573
              ],
              [
                28.880673,
                41.012062
              ],
              [
                28.88055,
                41.012424
              ],
              [
                28.880229,
                41.01372
              ],
              [
                28.880197,
                41.013858
              ],
              [
                28.880148,
                41.013975
              ],
              [
                28.880099,
                41.014058
              ],
              [
                28.880023,
                41.014142
              ],
              [
                28.87985,
                41.014275
              ],
              [
                28.879753,
                41.014315
              ],
              [
                28.879659,
                41.014348
              ],
              [
                28.878706,
                41.014621
              ],
              [
                28.878342,
                41.014725
              ],
              [
                28.878176,
                41.014795
              ],
              [
                28.877827,
                41.015023
              ],
              [
                28.877486,
                41.015263
              ],
              [
                28.877239,
                41.015436
              ],
              [
                28.877167,
                41.015516
              ],
              [
                28.876939,
                41.015771
              ],
              [
                28.876874,
                41.0158
              ],
              [
                28.876823,
                41.015817
              ],
              [
                28.876762,
                41.015832
              ],
              [
                28.876668,
                41.01583
              ],
              [
                28.876556,
                41.015812
              ],
              [
                28.875499,
                41.015524
              ],
              [
                28.875426,
                41.015517
              ],
              [
                28.87531,
                41.015515
              ],
              [
                28.875187,
                41.015534
              ],
              [
                28.873893,
                41.016032
              ],
              [
                28.872055,
                41.016759
              ],
              [
                28.871856,
                41.016886
              ],
              [
                28.87147,
                41.01714
              ],
              [
                28.87117,
                41.017342
              ],
              [
                28.870964,
                41.017458
              ],
              [
                28.870153,
                41.018026
              ],
              [
                28.869894,
                41.018271
              ],
              [
                28.869791,
                41.018376
              ],
              [
                28.869438,
                41.018809
              ],
              [
                28.868549,
                41.019854
              ],
              [
                28.86848,
                41.019921
              ],
              [
                28.868157,
                41.020178
              ],
              [
                28.867929,
                41.020359
              ],
              [
                28.867617,
                41.020592
              ],
              [
                28.867282,
                41.020845
              ],
              [
                28.866837,
                41.021206
              ],
              [
                28.8665,
                41.02154
              ],
              [
                28.866066,
                41.022008
              ],
              [
                28.865706,
                41.022424
              ],
              [
                28.865586,
                41.022568
              ],
              [
                28.865452,
                41.022689
              ],
              [
                28.864573,
                41.02319
              ],
              [
                28.864405,
                41.023317
              ],
              [
                28.864072,
                41.023548
              ],
              [
                28.863701,
                41.023816
              ],
              [
                28.863432,
                41.024006
              ],
              [
                28.8633,
                41.02416
              ],
              [
                28.863211,
                41.024305
              ],
              [
                28.863078,
                41.024645
              ],
              [
                28.862826,
                41.025015
              ],
              [
                28.86199,
                41.025913
              ],
              [
                28.861746,
                41.026283
              ],
              [
                28.861586,
                41.026606
              ],
              [
                28.861553,
                41.026703
              ],
              [
                28.861371,
                41.027225
              ],
              [
                28.861269,
                41.02758
              ],
              [
                28.861165,
                41.028459
              ],
              [
                28.86114,
                41.028652
              ],
              [
                28.861021,
                41.028958
              ],
              [
                28.860886,
                41.029324
              ],
              [
                28.860837,
                41.029424
              ],
              [
                28.860624,
                41.029934
              ],
              [
                28.860357,
                41.030465
              ],
              [
                28.860341,
                41.030561
              ],
              [
                28.860338,
                41.030663
              ],
              [
                28.860346,
                41.030774
              ],
              [
                28.860425,
                41.031118
              ],
              [
                28.860526,
                41.031557
              ],
              [
                28.860541,
                41.031657
              ],
              [
                28.860619,
                41.032209
              ],
              [
                28.860663,
                41.032512
              ],
              [
                28.860686,
                41.032722
              ],
              [
                28.860739,
                41.033117
              ],
              [
                28.860777,
                41.033358
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Zeytinburnu Station (T2)",
            "description": "T2 Tram Station opened on 14 September 2006 (09-2006) as southern terminal, connecting to M1A Metro and T1 Tramway.",
            "style": {
              "color": "#90ABA0"
            },
            "lineCode": "T2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.888917,
              41.00156
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Mehmet Akif Station",
            "description": "T2 Tram Station opened on 14 September 2006 (09-2006) on Mehmet Akif Ersoy Caddesi.",
            "style": {
              "color": "#90ABA0"
            },
            "lineCode": "T2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.88167,
              41.005803
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Merter Tekstil Merkezi Station",
            "description": "T2 Tram Station opened on 14 September 2006 (09-2006) serving the Merter textile manufacturing and export trade hub.",
            "style": {
              "color": "#90ABA0"
            },
            "lineCode": "T2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.880785,
              41.011573
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Güngören Station",
            "description": "T2 Tram Station opened on 14 September 2006 (09-2006) serving Güngören municipal and commercial center.",
            "style": {
              "color": "#90ABA0"
            },
            "lineCode": "T2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.877486,
              41.015263
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Akıncılar Station",
            "description": "T2 Tram Station opened on 14 September 2006 (09-2006) in Akıncılar neighborhood.",
            "style": {
              "color": "#90ABA0"
            },
            "lineCode": "T2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.87147,
              41.01714
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Soğanlı Station",
            "description": "T2 Tram Station opened on 14 September 2006 (09-2006) on the Güngören - Bahçelievler border.",
            "style": {
              "color": "#90ABA0"
            },
            "lineCode": "T2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.867577,
              41.020569
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yavuz Selim Station",
            "description": "T2 Tram Station opened on 14 September 2006 (09-2006) in Bağcılar Yavuz Selim neighborhood.",
            "style": {
              "color": "#90ABA0"
            },
            "lineCode": "T2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.86402,
              41.023512
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Güneştepe Station",
            "description": "T2 Tram Station opened on 14 September 2006 (09-2006) serving Güneştepe residential district.",
            "style": {
              "color": "#90ABA0"
            },
            "lineCode": "T2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.860981,
              41.028968
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bağcılar Station (T2)",
            "description": "T2 Tram Station opened on 14 September 2006 (09-2006) as northern terminus at Bağcılar Square.",
            "style": {
              "color": "#90ABA0"
            },
            "lineCode": "T2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.860738,
              41.033134
            ]
          }
        }
      ]
    },
    "endDate": {
      "year": 2011,
      "month": 1
    }
  },
  {
    "id": "rail-t4-sehitlik-mescid-2007-09",
    "name": "T4: Şehitlik - Mescid-i Selam (Opening: 09-2007)",
    "date": {
      "year": 2007,
      "month": 9
    },
    "fileName": "t4_sehitlik_mescid_2007.kml",
    "color": "#FF7E42",
    "visible": true,
    "isSample": true,
    "category": "T4 Tram Line",
    "description": "Inaugural phase of the T4 Tramway Line opened on 17 September 2007 (09-2007), connecting Edirnekapı Şehitlik interchange to Mescid-i Selam in Sultangazi across 18 stations, providing rapid transit along the high-density Eski Edirne Asfaltı corridor.",
    "placemarksCount": 19,
    "bounds": [
      [
        41.034,
        28.851
      ],
      [
        41.117,
        28.929
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "T4 Tram Line (Şehitlik ↔ Mescid-i Selam)",
            "description": "Dedicated light rail / high-capacity tramway corridor from Edirnekapı Şehitlik to Mescid-i Selam in Sultangazi, opened on 17 September 2007.",
            "style": {
              "color": "#FF7E42",
              "width": 4
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.928329,
                41.034178
              ],
              [
                28.926132,
                41.034904
              ],
              [
                28.925583,
                41.035086
              ],
              [
                28.925339,
                41.035182
              ],
              [
                28.925056,
                41.035311
              ],
              [
                28.924847,
                41.03542
              ],
              [
                28.924758,
                41.03547
              ],
              [
                28.924572,
                41.035597
              ],
              [
                28.924392,
                41.035738
              ],
              [
                28.924184,
                41.035933
              ],
              [
                28.924089,
                41.036035
              ],
              [
                28.923897,
                41.036265
              ],
              [
                28.923662,
                41.036614
              ],
              [
                28.92342,
                41.036994
              ],
              [
                28.923118,
                41.037458
              ],
              [
                28.922959,
                41.037688
              ],
              [
                28.922394,
                41.038577
              ],
              [
                28.922293,
                41.038729
              ],
              [
                28.922062,
                41.039037
              ],
              [
                28.921653,
                41.039571
              ],
              [
                28.921364,
                41.040027
              ],
              [
                28.921122,
                41.040322
              ],
              [
                28.920935,
                41.040516
              ],
              [
                28.920527,
                41.040909
              ],
              [
                28.920314,
                41.041079
              ],
              [
                28.920047,
                41.041285
              ],
              [
                28.91956,
                41.041637
              ],
              [
                28.919155,
                41.041929
              ],
              [
                28.918978,
                41.042041
              ],
              [
                28.918348,
                41.042496
              ],
              [
                28.918301,
                41.042538
              ],
              [
                28.9175,
                41.043401
              ],
              [
                28.917217,
                41.043761
              ],
              [
                28.917166,
                41.043848
              ],
              [
                28.91609,
                41.045799
              ],
              [
                28.915908,
                41.046138
              ],
              [
                28.915611,
                41.046596
              ],
              [
                28.915367,
                41.04696
              ],
              [
                28.914998,
                41.047449
              ],
              [
                28.914812,
                41.0477
              ],
              [
                28.914656,
                41.047858
              ],
              [
                28.914554,
                41.047949
              ],
              [
                28.914424,
                41.048037
              ],
              [
                28.9131,
                41.048856
              ],
              [
                28.912947,
                41.048961
              ],
              [
                28.912818,
                41.049067
              ],
              [
                28.912642,
                41.049256
              ],
              [
                28.912503,
                41.049411
              ],
              [
                28.91118,
                41.051386
              ],
              [
                28.91096,
                41.051796
              ],
              [
                28.910881,
                41.052025
              ],
              [
                28.910807,
                41.052293
              ],
              [
                28.910604,
                41.053344
              ],
              [
                28.910591,
                41.053395
              ],
              [
                28.91051,
                41.05365
              ],
              [
                28.91029,
                41.054131
              ],
              [
                28.910124,
                41.054508
              ],
              [
                28.910016,
                41.054686
              ],
              [
                28.909883,
                41.05495
              ],
              [
                28.909686,
                41.055253
              ],
              [
                28.90952,
                41.055419
              ],
              [
                28.909138,
                41.055705
              ],
              [
                28.907729,
                41.056726
              ],
              [
                28.907372,
                41.056995
              ],
              [
                28.906806,
                41.057392
              ],
              [
                28.906505,
                41.057609
              ],
              [
                28.90433,
                41.059125
              ],
              [
                28.903758,
                41.059527
              ],
              [
                28.903441,
                41.059756
              ],
              [
                28.903192,
                41.059967
              ],
              [
                28.903026,
                41.060135
              ],
              [
                28.902877,
                41.060317
              ],
              [
                28.902749,
                41.060526
              ],
              [
                28.902625,
                41.060784
              ],
              [
                28.902319,
                41.061424
              ],
              [
                28.902146,
                41.061816
              ],
              [
                28.902107,
                41.061895
              ],
              [
                28.901864,
                41.062332
              ],
              [
                28.90182,
                41.062415
              ],
              [
                28.901601,
                41.06286
              ],
              [
                28.901234,
                41.063573
              ],
              [
                28.900838,
                41.064346
              ],
              [
                28.90055,
                41.064857
              ],
              [
                28.900485,
                41.064968
              ],
              [
                28.900357,
                41.065102
              ],
              [
                28.898056,
                41.066668
              ],
              [
                28.89639,
                41.067909
              ],
              [
                28.896066,
                41.068188
              ],
              [
                28.895665,
                41.068491
              ],
              [
                28.895214,
                41.068831
              ],
              [
                28.894805,
                41.069084
              ],
              [
                28.894014,
                41.069643
              ],
              [
                28.893761,
                41.069794
              ],
              [
                28.893459,
                41.069938
              ],
              [
                28.889153,
                41.071784
              ],
              [
                28.888539,
                41.072092
              ],
              [
                28.88818,
                41.072321
              ],
              [
                28.887741,
                41.072612
              ],
              [
                28.887327,
                41.072891
              ],
              [
                28.886903,
                41.073171
              ],
              [
                28.886415,
                41.073522
              ],
              [
                28.886068,
                41.073745
              ],
              [
                28.885762,
                41.073921
              ],
              [
                28.885547,
                41.074041
              ],
              [
                28.885344,
                41.074137
              ],
              [
                28.884776,
                41.074363
              ],
              [
                28.883357,
                41.074862
              ],
              [
                28.883005,
                41.075034
              ],
              [
                28.882616,
                41.075191
              ],
              [
                28.882493,
                41.075233
              ],
              [
                28.881937,
                41.075444
              ],
              [
                28.881447,
                41.075618
              ],
              [
                28.880914,
                41.075839
              ],
              [
                28.880605,
                41.075981
              ],
              [
                28.88031,
                41.076167
              ],
              [
                28.880074,
                41.076316
              ],
              [
                28.879784,
                41.076531
              ],
              [
                28.879229,
                41.076976
              ],
              [
                28.877205,
                41.078601
              ],
              [
                28.876994,
                41.078799
              ],
              [
                28.876775,
                41.079004
              ],
              [
                28.875844,
                41.080035
              ],
              [
                28.875586,
                41.080302
              ],
              [
                28.875359,
                41.08054
              ],
              [
                28.87496,
                41.08099
              ],
              [
                28.874692,
                41.081281
              ],
              [
                28.874654,
                41.081322
              ],
              [
                28.873991,
                41.082055
              ],
              [
                28.873742,
                41.08229
              ],
              [
                28.872713,
                41.083417
              ],
              [
                28.87243,
                41.083732
              ],
              [
                28.871617,
                41.084587
              ],
              [
                28.871015,
                41.085236
              ],
              [
                28.870722,
                41.085522
              ],
              [
                28.870397,
                41.085813
              ],
              [
                28.87017,
                41.085986
              ],
              [
                28.869956,
                41.086136
              ],
              [
                28.869619,
                41.086349
              ],
              [
                28.869159,
                41.086605
              ],
              [
                28.86886,
                41.086772
              ],
              [
                28.868691,
                41.086865
              ],
              [
                28.866952,
                41.087827
              ],
              [
                28.86658,
                41.088033
              ],
              [
                28.866363,
                41.088162
              ],
              [
                28.866028,
                41.08839
              ],
              [
                28.865844,
                41.088543
              ],
              [
                28.865693,
                41.088659
              ],
              [
                28.865538,
                41.088794
              ],
              [
                28.864953,
                41.0894
              ],
              [
                28.864832,
                41.089563
              ],
              [
                28.864713,
                41.089763
              ],
              [
                28.864626,
                41.089952
              ],
              [
                28.864576,
                41.090145
              ],
              [
                28.864209,
                41.091917
              ],
              [
                28.864129,
                41.09231
              ],
              [
                28.864027,
                41.092816
              ],
              [
                28.864022,
                41.092841
              ],
              [
                28.864016,
                41.092867
              ],
              [
                28.86383,
                41.093777
              ],
              [
                28.863447,
                41.095734
              ],
              [
                28.863222,
                41.096884
              ],
              [
                28.863174,
                41.097233
              ],
              [
                28.863125,
                41.097908
              ],
              [
                28.86312,
                41.097977
              ],
              [
                28.863118,
                41.098044
              ],
              [
                28.863112,
                41.098081
              ],
              [
                28.863063,
                41.098878
              ],
              [
                28.863017,
                41.099324
              ],
              [
                28.862981,
                41.099784
              ],
              [
                28.862934,
                41.100715
              ],
              [
                28.862907,
                41.101121
              ],
              [
                28.862889,
                41.101227
              ],
              [
                28.862849,
                41.101384
              ],
              [
                28.862778,
                41.101563
              ],
              [
                28.862275,
                41.102623
              ],
              [
                28.861624,
                41.104017
              ],
              [
                28.86127,
                41.104813
              ],
              [
                28.860978,
                41.105441
              ],
              [
                28.860822,
                41.105767
              ],
              [
                28.860535,
                41.106358
              ],
              [
                28.860098,
                41.107272
              ],
              [
                28.860058,
                41.107355
              ],
              [
                28.860029,
                41.107414
              ],
              [
                28.859242,
                41.109022
              ],
              [
                28.858268,
                41.111005
              ],
              [
                28.858,
                41.111554
              ],
              [
                28.857836,
                41.11189
              ],
              [
                28.857393,
                41.112813
              ],
              [
                28.85735,
                41.112907
              ],
              [
                28.857071,
                41.113416
              ],
              [
                28.856975,
                41.113569
              ],
              [
                28.856821,
                41.113751
              ],
              [
                28.856692,
                41.113881
              ],
              [
                28.856535,
                41.114021
              ],
              [
                28.856374,
                41.11414
              ],
              [
                28.856203,
                41.114248
              ],
              [
                28.856021,
                41.114355
              ],
              [
                28.855795,
                41.114457
              ],
              [
                28.855541,
                41.114556
              ],
              [
                28.855262,
                41.11465
              ],
              [
                28.853594,
                41.115144
              ],
              [
                28.853355,
                41.115211
              ],
              [
                28.852826,
                41.11536
              ],
              [
                28.852611,
                41.115422
              ],
              [
                28.852373,
                41.115505
              ],
              [
                28.85222,
                41.115568
              ],
              [
                28.852111,
                41.115625
              ],
              [
                28.852006,
                41.115689
              ],
              [
                28.851805,
                41.115821
              ],
              [
                28.85169,
                41.115908
              ],
              [
                28.851185,
                41.116287
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Şehitlik Station",
            "description": "T4 Tram Station opened on 17 September 2007 (09-2007) as southern terminus, with direct connection to Metrobüs.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.928329,
              41.034178
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Demirkapı Station",
            "description": "T4 Tram Station opened on 17 September 2007 (09-2007) on Rami Kışla Caddesi.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.92342,
              41.036994
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Topçular Station",
            "description": "T4 Underground Tram Station opened on 17 September 2007 (09-2007) serving Topçular industrial district.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.91956,
              41.041637
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Rami Station",
            "description": "T4 Underground Tram Station opened on 17 September 2007 (09-2007) next to historic Rami Barracks.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.915611,
              41.046596
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Uluyol - Bereç Station",
            "description": "T4 Underground Tram Station opened on 17 September 2007 (09-2007) serving Gaziosmanpaşa Square and Bereç.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.91029,
              41.054131
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Sağmalcılar Station (T4)",
            "description": "T4 Tram Station opened on 17 September 2007 (09-2007) on the Bayrampaşa - Gaziosmanpaşa border.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.906806,
              41.057392
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bosna - Çukurçeşme Station",
            "description": "T4 Underground Tram Station opened on 17 September 2007 (09-2007) in Çukurçeşme.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.902146,
              41.061816
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ali Fuat Başgil Station",
            "description": "T4 Underground Tram Station opened on 17 September 2007 (09-2007) under Ali Fuat Başgil Caddesi.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.895665,
              41.068491
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Taşköprü Station",
            "description": "T4 Tram Station opened on 17 September 2007 (09-2007) on Eski Edirne Asfaltı.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.887741,
              41.072612
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Karadeniz Station",
            "description": "T4 Tram Station opened on 17 September 2007 (09-2007) in Karadeniz neighborhood.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.882493,
              41.075233
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "KİPTAŞ - Venezia Station",
            "description": "T4 Underground Tram Station opened on 17 September 2007 (09-2007) at Metris interchange, connecting to M7 Metro.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.874654,
              41.081322
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Cumhuriyet Mahallesi Station",
            "description": "T4 Underground Tram Station opened on 17 September 2007 (09-2007) serving Hamza Yerlikaya Sports Complex.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.87243,
              41.083732
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "50. Yıl - Baştabya Station",
            "description": "T4 Tram Station opened on 17 September 2007 (09-2007) on Eski Edirne Asfaltı.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.866952,
              41.087827
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Hacı Şükrü Station",
            "description": "T4 Tram Station opened on 17 September 2007 (09-2007) serving Bezmialem University campus.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.864129,
              41.09231
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yenimahalle Station (T4)",
            "description": "T4 Tram Station opened on 17 September 2007 (09-2007) in Sultangazi Yenimahalle.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.863017,
              41.099324
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Sultançiftliği Station",
            "description": "T4 Tram Station opened on 17 September 2007 (09-2007) serving Sultangazi town center and hospital.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.860822,
              41.105767
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Cebeci Station",
            "description": "T4 Tram Station opened on 17 September 2007 (09-2007) in Cebeci neighborhood.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.858,
              41.111554
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Mescid-i Selam Station",
            "description": "T4 Tram Station opened on 17 September 2007 (09-2007) as northern terminus, hub for Northern Istanbul bus lines.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.851185,
              41.116287
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m2-taksim-sishane-2009-01",
    "name": "M2: Taksim - Şişhane Extension (Opening: 01-2009)",
    "date": {
      "year": 2009,
      "month": 1
    },
    "fileName": "m2_taksim_sishane_2009.kml",
    "color": "#059A4D",
    "visible": true,
    "isSample": true,
    "category": "M2 Metro Line",
    "description": "Southern extension of the M2 Metro Line opened on 30 January 2009 (01-2009), continuing from Taksim Square southwards beneath İstiklal Caddesi to Şişhane Station near Tünel and Galata.",
    "placemarksCount": 2,
    "bounds": [
      [
        41.028,
        28.972
      ],
      [
        41.039,
        28.986
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M2 Metro Line (Taksim ↔ Şişhane)",
            "description": "Deep bored subway tunnel alignment extending M2 from Taksim southwards to Şişhane under Beyoğlu, opened on 30 January 2009.",
            "style": {
              "color": "#059A4D",
              "width": 5
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.985361,
                41.038089
              ],
              [
                28.985125,
                41.037302
              ],
              [
                28.984863,
                41.036366
              ],
              [
                28.984728,
                41.03603
              ],
              [
                28.984486,
                41.035719
              ],
              [
                28.984078,
                41.035371
              ],
              [
                28.976884,
                41.030712
              ],
              [
                28.975986,
                41.030142
              ],
              [
                28.974713,
                41.029455
              ],
              [
                28.973476,
                41.028853
              ],
              [
                28.972588,
                41.02841
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Şişhane Station",
            "description": "M2 Metro Station opened on 30 January 2009 (01-2009) at Şişhane Square near Tünel, connecting to F2 Funicular and T2 Nostalgic Tram.",
            "style": {
              "color": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.972588,
              41.02841
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m2-levent4-ataturk-oto-2009-01",
    "name": "M2: 4. Levent - Atatürk Oto Sanayi Extension (Opening: 01-2009)",
    "date": {
      "year": 2009,
      "month": 1
    },
    "fileName": "m2_levent4_ataturk_oto_2009.kml",
    "color": "#059A4D",
    "visible": true,
    "isSample": true,
    "category": "M2 Metro Line",
    "description": "Northern extension of the M2 Metro Line opened on 30 January 2009 (01-2009), extending from 4. Levent to Atatürk Oto Sanayi across Sanayi Mahallesi and İTÜ-Ayazağa, serving the Maslak business towers and university campus.",
    "placemarksCount": 4,
    "bounds": [
      [
        41.086,
        29.004
      ],
      [
        41.119,
        29.025
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M2 Metro Line (4. Levent ↔ Atatürk Oto Sanayi)",
            "description": "Subway tunnel alignment extending M2 northwards along Büyükdere Caddesi from 4. Levent to Atatürk Oto Sanayi, opened on 30 January 2009.",
            "style": {
              "color": "#059A4D",
              "width": 5
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.006972,
                41.086047
              ],
              [
                29.006582,
                41.086801
              ],
              [
                29.006308,
                41.087431
              ],
              [
                29.00595,
                41.088273
              ],
              [
                29.004749,
                41.091701
              ],
              [
                29.00464,
                41.092059
              ],
              [
                29.004601,
                41.092401
              ],
              [
                29.004616,
                41.092855
              ],
              [
                29.004763,
                41.093455
              ],
              [
                29.004985,
                41.094245
              ],
              [
                29.005207,
                41.095027
              ],
              [
                29.005448,
                41.095897
              ],
              [
                29.006505,
                41.100233
              ],
              [
                29.006681,
                41.100673
              ],
              [
                29.006956,
                41.101202
              ],
              [
                29.007745,
                41.102105
              ],
              [
                29.009369,
                41.103509
              ],
              [
                29.012632,
                41.105802
              ],
              [
                29.013245,
                41.106184
              ],
              [
                29.013981,
                41.106602
              ],
              [
                29.014691,
                41.106932
              ],
              [
                29.015375,
                41.107219
              ],
              [
                29.016167,
                41.107474
              ],
              [
                29.016867,
                41.107664
              ],
              [
                29.017707,
                41.107822
              ],
              [
                29.019877,
                41.108082
              ],
              [
                29.02092,
                41.108205
              ],
              [
                29.021982,
                41.108337
              ],
              [
                29.022723,
                41.108455
              ],
              [
                29.023417,
                41.108626
              ],
              [
                29.023828,
                41.108772
              ],
              [
                29.024109,
                41.108922
              ],
              [
                29.024492,
                41.109162
              ],
              [
                29.024882,
                41.10951
              ],
              [
                29.025059,
                41.109742
              ],
              [
                29.025142,
                41.109916
              ],
              [
                29.025242,
                41.110277
              ],
              [
                29.025191,
                41.11073
              ],
              [
                29.024469,
                41.113528
              ],
              [
                29.024352,
                41.114051
              ],
              [
                29.024096,
                41.116384
              ],
              [
                29.024023,
                41.117241
              ],
              [
                29.023961,
                41.118195
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Sanayi Mahallesi Station",
            "description": "M2 Metro Station opened on 30 January 2009 (01-2009) under Büyükdere Caddesi, transfer hub for Seyrantepe branch.",
            "style": {
              "color": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.004985,
              41.094245
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İTÜ - Ayazağa Station",
            "description": "M2 Metro Station opened on 30 January 2009 (01-2009) serving Istanbul Technical University Ayazağa Campus and Maslak corporate plaza district.",
            "style": {
              "color": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.02092,
              41.108205
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Atatürk Oto Sanayi Station",
            "description": "M2 Metro Station opened on 30 January 2009 (01-2009) as northern terminus at Maslak Atatürk Auto Industry Center.",
            "style": {
              "color": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.023961,
              41.118195
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-t4-sehitlik-topkapi-2009-03",
    "name": "T4: Şehitlik - Topkapı Extension (Opening: 03-2009)",
    "date": {
      "year": 2009,
      "month": 3
    },
    "fileName": "t4_sehitlik_topkapi_2009.kml",
    "color": "#FF7E42",
    "visible": true,
    "isSample": true,
    "category": "T4 Tram Line",
    "description": "Southern extension of the T4 Tramway Line opened on 18 March 2009 (03-2009), connecting Şehitlik to Topkapı multimodal hub across Edirnekapı, Vatan, and Fetihkapı, linking T4 directly to the T1 Tramway and M1 Metro.",
    "placemarksCount": 5,
    "bounds": [
      [
        41.019,
        28.92
      ],
      [
        41.035,
        28.935
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "T4 Tram Line (Şehitlik ↔ Topkapı)",
            "description": "Dedicated light rail / high-capacity tramway alignment running between Edirnekapı Şehitlik and Topkapı interchange, opened on 18 March 2009.",
            "style": {
              "color": "#FF7E42",
              "width": 4
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.928329,
                41.034178
              ],
              [
                28.928821,
                41.034016
              ],
              [
                28.929527,
                41.033781
              ],
              [
                28.930339,
                41.033516
              ],
              [
                28.931824,
                41.033046
              ],
              [
                28.93212,
                41.032949
              ],
              [
                28.932396,
                41.032853
              ],
              [
                28.932828,
                41.032677
              ],
              [
                28.933144,
                41.032539
              ],
              [
                28.933322,
                41.03243
              ],
              [
                28.933407,
                41.032353
              ],
              [
                28.933463,
                41.032283
              ],
              [
                28.933524,
                41.032171
              ],
              [
                28.933685,
                41.031855
              ],
              [
                28.933723,
                41.031794
              ],
              [
                28.934083,
                41.031326
              ],
              [
                28.934357,
                41.030968
              ],
              [
                28.934439,
                41.030857
              ],
              [
                28.934462,
                41.030723
              ],
              [
                28.934462,
                41.030613
              ],
              [
                28.934396,
                41.030448
              ],
              [
                28.934288,
                41.030328
              ],
              [
                28.932217,
                41.028287
              ],
              [
                28.931967,
                41.028045
              ],
              [
                28.931665,
                41.027752
              ],
              [
                28.930916,
                41.027043
              ],
              [
                28.930554,
                41.026716
              ],
              [
                28.930202,
                41.02645
              ],
              [
                28.930069,
                41.026351
              ],
              [
                28.92998,
                41.026274
              ],
              [
                28.929854,
                41.026163
              ],
              [
                28.929672,
                41.025981
              ],
              [
                28.929272,
                41.025552
              ],
              [
                28.928459,
                41.024694
              ],
              [
                28.927329,
                41.023592
              ],
              [
                28.925565,
                41.021953
              ],
              [
                28.9253,
                41.021714
              ],
              [
                28.92502,
                41.021493
              ],
              [
                28.924407,
                41.021032
              ],
              [
                28.924093,
                41.020802
              ],
              [
                28.923838,
                41.020638
              ],
              [
                28.923518,
                41.020472
              ],
              [
                28.923378,
                41.020413
              ],
              [
                28.922781,
                41.020162
              ],
              [
                28.922448,
                41.020023
              ],
              [
                28.922286,
                41.019962
              ],
              [
                28.922041,
                41.019902
              ],
              [
                28.92171,
                41.019827
              ],
              [
                28.92136,
                41.019779
              ],
              [
                28.920578,
                41.01969
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Edirnekapı Station",
            "description": "T4 Underground Tram Station opened on 18 March 2009 (03-2009) next to Mihrimah Sultan Mosque and Edirnekapı City Walls.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.934083,
              41.031326
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Vatan Station",
            "description": "T4 Tram Station opened on 18 March 2009 (03-2009) crossing Vatan Boulevard with direct underground transfer to M1A/M1B Ulubatlı Metro.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.929272,
              41.025552
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Fetihkapı Station",
            "description": "T4 Tram Station opened on 18 March 2009 (03-2009) at the historic Byzantine walls and Panorama 1453 History Museum.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.92502,
              41.021493
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Topkapı Station (T4)",
            "description": "T4 Tram Station opened on 18 March 2009 (03-2009) as southern terminus, connecting to T1 Tram and Metrobüs.",
            "style": {
              "color": "#FF7E42"
            },
            "lineCode": "T4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.920578,
              41.01969
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m2-oto-darussafaka-2010-09",
    "name": "M2: Atatürk Oto Sanayi - Darüşşafaka Extension (Opening: 09-2010)",
    "date": {
      "year": 2010,
      "month": 9
    },
    "fileName": "m2_oto_darussafaka_2010.kml",
    "color": "#059A4D",
    "visible": true,
    "isSample": true,
    "category": "M2 Metro Line",
    "description": "Northern extension of the M2 Metro Line opened on 2 September 2010 (09-2010), extending the line from Atatürk Oto Sanayi to Darüşşafaka Station in Sarıyer.",
    "placemarksCount": 2,
    "bounds": [
      [
        41.118,
        29.023
      ],
      [
        41.13,
        29.026
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M2 Metro Line (Atatürk Oto Sanayi ↔ Darüşşafaka)",
            "description": "Deep bored subway tunnel alignment from Atatürk Oto Sanayi to Darüşşafaka beneath Büyükdere Caddesi, opened on 2 September 2010.",
            "style": {
              "color": "#059A4D",
              "width": 5
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.023961,
                41.118195
              ],
              [
                29.023923,
                41.118847
              ],
              [
                29.023732,
                41.120683
              ],
              [
                29.023695,
                41.12107
              ],
              [
                29.023687,
                41.12144
              ],
              [
                29.023706,
                41.121837
              ],
              [
                29.02374,
                41.122155
              ],
              [
                29.023796,
                41.122439
              ],
              [
                29.02393,
                41.122815
              ],
              [
                29.024052,
                41.123133
              ],
              [
                29.0248,
                41.124874
              ],
              [
                29.024883,
                41.125071
              ],
              [
                29.025254,
                41.126055
              ],
              [
                29.025346,
                41.126552
              ],
              [
                29.025248,
                41.127058
              ],
              [
                29.024981,
                41.128476
              ],
              [
                29.024868,
                41.129287
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Darüşşafaka Station",
            "description": "M2 Metro Station opened on 2 September 2010 (09-2010) as northern terminus at Darüşşafaka in Sarıyer.",
            "style": {
              "color": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.024868,
              41.129287
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m2-sanayi-seyrantepe-2010-11",
    "name": "M2: Sanayi Mahallesi - Seyrantepe Shuttle Service (Opening: 11-2010)",
    "date": {
      "year": 2010,
      "month": 11
    },
    "fileName": "m2_sanayi_seyrantepe_2010.kml",
    "color": "#059A4D",
    "visible": true,
    "isSample": true,
    "category": "M2 Metro Line",
    "description": "Opening of the dedicated M2 Sanayi Mahallesi – Seyrantepe Metro Shuttle Branch Line in November 2010 (11-2010), connecting the main M2 line to Seyrantepe Station, serving Ali Sami Yen Sports Complex (Rams Park) and the M2 Metro Central Maintenance Depot.",
    "placemarksCount": 2,
    "bounds": [
      [
        41.093,
        28.995
      ],
      [
        41.102,
        29.006
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M2 Metro Shuttle Line (Sanayi Mahallesi ↔ Seyrantepe)",
            "description": "Subterranean branch tunnel alignment connecting Sanayi Mahallesi 3rd track to Seyrantepe stadium terminal, opened in November 2010.",
            "style": {
              "color": "#059A4D",
              "width": 5
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.005572,
                41.094157
              ],
              [
                29.005807,
                41.094927
              ],
              [
                29.006112,
                41.095852
              ],
              [
                29.006342,
                41.096439
              ],
              [
                29.006405,
                41.096688
              ],
              [
                29.006404,
                41.096901
              ],
              [
                29.00639,
                41.097179
              ],
              [
                29.006343,
                41.097408
              ],
              [
                29.006243,
                41.097809
              ],
              [
                29.006175,
                41.098017
              ],
              [
                29.006087,
                41.098213
              ],
              [
                29.005926,
                41.098465
              ],
              [
                29.005679,
                41.098763
              ],
              [
                29.005238,
                41.099202
              ],
              [
                29.00479,
                41.099601
              ],
              [
                29.004469,
                41.099838
              ],
              [
                29.003977,
                41.100125
              ],
              [
                29.00367,
                41.100276
              ],
              [
                29.003303,
                41.100432
              ],
              [
                29.002885,
                41.100593
              ],
              [
                29.002134,
                41.100795
              ],
              [
                29.00039,
                41.101097
              ],
              [
                28.99969,
                41.101185
              ],
              [
                28.998992,
                41.101224
              ],
              [
                28.99779,
                41.101208
              ],
              [
                28.997323,
                41.101225
              ],
              [
                28.995744,
                41.101289
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Seyrantepe Station",
            "description": "M2 Metro Station opened in November 2010 (11-2010) as stadium and depot branch terminal at Seyrantepe.",
            "style": {
              "color": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.995744,
              41.101289
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-t1-unification-bagcilar-2011-02",
    "name": "T1: Zeytinburnu - Bağcılar Unification & Platform Transformation (02-2011)",
    "date": {
      "year": 2011,
      "month": 2
    },
    "fileName": "t1_unification_bagcilar_2011.kml",
    "color": "#004B86",
    "visible": true,
    "isSample": true,
    "category": "T1 Tram Line",
    "description": "In February 2011 (03 February 2011 / 02-2011), the separate T2 Zeytinburnu–Bağcılar line was officially merged into T1. All 9 stations along the corridor were transformed—platforms were lowered and reconstructed to fit the 100% low-floor Bombardier Flexity Swift and Alstom Citadis trams used across T1, inaugurating the seamless, unified 19.3 km Kabataş – Bağcılar T1 service.",
    "placemarksCount": 9,
    "bounds": [
      [
        41.001,
        28.86
      ],
      [
        41.034,
        28.89
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "T1 Tram Line (Zeytinburnu ↔ Bağcılar Unified)",
            "description": "Unified T1 low-floor tramway corridor connecting Zeytinburnu to Bağcılar following station platform transformation in February 2011.",
            "style": {
              "color": "#004B86",
              "width": 4
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.888917,
                41.00156
              ],
              [
                28.888644,
                41.001543
              ],
              [
                28.887876,
                41.00147
              ],
              [
                28.887646,
                41.001448
              ],
              [
                28.887434,
                41.001416
              ],
              [
                28.887186,
                41.001368
              ],
              [
                28.886621,
                41.001232
              ],
              [
                28.886377,
                41.001197
              ],
              [
                28.886261,
                41.001194
              ],
              [
                28.886106,
                41.001196
              ],
              [
                28.885926,
                41.001212
              ],
              [
                28.885788,
                41.001241
              ],
              [
                28.885641,
                41.00128
              ],
              [
                28.885489,
                41.001335
              ],
              [
                28.885301,
                41.001425
              ],
              [
                28.88432,
                41.001967
              ],
              [
                28.884073,
                41.002137
              ],
              [
                28.883957,
                41.002243
              ],
              [
                28.883683,
                41.002498
              ],
              [
                28.883421,
                41.002815
              ],
              [
                28.882872,
                41.00377
              ],
              [
                28.882019,
                41.005284
              ],
              [
                28.881903,
                41.005497
              ],
              [
                28.881693,
                41.005836
              ],
              [
                28.881514,
                41.006098
              ],
              [
                28.881484,
                41.006152
              ],
              [
                28.8814,
                41.006331
              ],
              [
                28.881365,
                41.006469
              ],
              [
                28.881127,
                41.008077
              ],
              [
                28.881124,
                41.008113
              ],
              [
                28.880922,
                41.010448
              ],
              [
                28.880896,
                41.010921
              ],
              [
                28.880863,
                41.011223
              ],
              [
                28.880785,
                41.011573
              ],
              [
                28.880673,
                41.012062
              ],
              [
                28.88055,
                41.012424
              ],
              [
                28.880229,
                41.01372
              ],
              [
                28.880197,
                41.013858
              ],
              [
                28.880148,
                41.013975
              ],
              [
                28.880099,
                41.014058
              ],
              [
                28.880023,
                41.014142
              ],
              [
                28.87985,
                41.014275
              ],
              [
                28.879753,
                41.014315
              ],
              [
                28.879659,
                41.014348
              ],
              [
                28.878706,
                41.014621
              ],
              [
                28.878342,
                41.014725
              ],
              [
                28.878176,
                41.014795
              ],
              [
                28.877827,
                41.015023
              ],
              [
                28.877486,
                41.015263
              ],
              [
                28.877239,
                41.015436
              ],
              [
                28.877167,
                41.015516
              ],
              [
                28.876939,
                41.015771
              ],
              [
                28.876874,
                41.0158
              ],
              [
                28.876823,
                41.015817
              ],
              [
                28.876762,
                41.015832
              ],
              [
                28.876668,
                41.01583
              ],
              [
                28.876556,
                41.015812
              ],
              [
                28.875499,
                41.015524
              ],
              [
                28.875426,
                41.015517
              ],
              [
                28.87531,
                41.015515
              ],
              [
                28.875187,
                41.015534
              ],
              [
                28.873893,
                41.016032
              ],
              [
                28.872055,
                41.016759
              ],
              [
                28.871856,
                41.016886
              ],
              [
                28.87147,
                41.01714
              ],
              [
                28.87117,
                41.017342
              ],
              [
                28.870964,
                41.017458
              ],
              [
                28.870153,
                41.018026
              ],
              [
                28.869894,
                41.018271
              ],
              [
                28.869791,
                41.018376
              ],
              [
                28.869438,
                41.018809
              ],
              [
                28.868549,
                41.019854
              ],
              [
                28.86848,
                41.019921
              ],
              [
                28.868157,
                41.020178
              ],
              [
                28.867929,
                41.020359
              ],
              [
                28.867617,
                41.020592
              ],
              [
                28.867282,
                41.020845
              ],
              [
                28.866837,
                41.021206
              ],
              [
                28.8665,
                41.02154
              ],
              [
                28.866066,
                41.022008
              ],
              [
                28.865706,
                41.022424
              ],
              [
                28.865586,
                41.022568
              ],
              [
                28.865452,
                41.022689
              ],
              [
                28.864573,
                41.02319
              ],
              [
                28.864405,
                41.023317
              ],
              [
                28.864072,
                41.023548
              ],
              [
                28.863701,
                41.023816
              ],
              [
                28.863432,
                41.024006
              ],
              [
                28.8633,
                41.02416
              ],
              [
                28.863211,
                41.024305
              ],
              [
                28.863078,
                41.024645
              ],
              [
                28.862826,
                41.025015
              ],
              [
                28.86199,
                41.025913
              ],
              [
                28.861746,
                41.026283
              ],
              [
                28.861586,
                41.026606
              ],
              [
                28.861553,
                41.026703
              ],
              [
                28.861371,
                41.027225
              ],
              [
                28.861269,
                41.02758
              ],
              [
                28.861165,
                41.028459
              ],
              [
                28.86114,
                41.028652
              ],
              [
                28.861021,
                41.028958
              ],
              [
                28.860886,
                41.029324
              ],
              [
                28.860837,
                41.029424
              ],
              [
                28.860624,
                41.029934
              ],
              [
                28.860357,
                41.030465
              ],
              [
                28.860341,
                41.030561
              ],
              [
                28.860338,
                41.030663
              ],
              [
                28.860346,
                41.030774
              ],
              [
                28.860425,
                41.031118
              ],
              [
                28.860526,
                41.031557
              ],
              [
                28.860541,
                41.031657
              ],
              [
                28.860619,
                41.032209
              ],
              [
                28.860663,
                41.032512
              ],
              [
                28.860686,
                41.032722
              ],
              [
                28.860739,
                41.033117
              ],
              [
                28.860777,
                41.033358
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Mehmet Akif Station",
            "description": "Mehmet Akif Station transformed in February 2011 (02-2011) with lowered platforms to accommodate 100% low-floor T1 trams, fully unifying the Kabataş – Bağcılar T1 line.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.88167,
              41.005803
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Merter Tekstil Merkezi Station",
            "description": "Merter Tekstil Merkezi Station transformed in February 2011 (02-2011) with lowered platforms to accommodate 100% low-floor T1 trams, fully unifying the Kabataş – Bağcılar T1 line.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.880785,
              41.011573
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Güngören Station",
            "description": "Güngören Station transformed in February 2011 (02-2011) with lowered platforms to accommodate 100% low-floor T1 trams, fully unifying the Kabataş – Bağcılar T1 line.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.877486,
              41.015263
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Akıncılar Station",
            "description": "Akıncılar Station transformed in February 2011 (02-2011) with lowered platforms to accommodate 100% low-floor T1 trams, fully unifying the Kabataş – Bağcılar T1 line.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.87147,
              41.01714
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Soğanlı Station",
            "description": "Soğanlı Station transformed in February 2011 (02-2011) with lowered platforms to accommodate 100% low-floor T1 trams, fully unifying the Kabataş – Bağcılar T1 line.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.867577,
              41.020569
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yavuz Selim Station",
            "description": "Yavuz Selim Station transformed in February 2011 (02-2011) with lowered platforms to accommodate 100% low-floor T1 trams, fully unifying the Kabataş – Bağcılar T1 line.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.86402,
              41.023512
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Güneştepe Station",
            "description": "Güneştepe Station transformed in February 2011 (02-2011) with lowered platforms to accommodate 100% low-floor T1 trams, fully unifying the Kabataş – Bağcılar T1 line.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.860981,
              41.028968
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bağcılar Station",
            "description": "Bağcılar Station transformed in February 2011 (02-2011) with lowered platforms to accommodate 100% low-floor T1 trams, fully unifying the Kabataş – Bağcılar T1 line.",
            "style": {
              "color": "#004B86"
            },
            "lineCode": "T1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.860738,
              41.033134
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m2-darussafaka-haciosman-2011-07",
    "name": "M2: Darüşşafaka - Hacıosman Extension (Opening: 07-2011)",
    "date": {
      "year": 2011,
      "month": 7
    },
    "fileName": "m2_darussafaka_haciosman_2011.kml",
    "color": "#059A4D",
    "visible": true,
    "isSample": true,
    "category": "M2 Metro Line",
    "description": "Final northern extension of the M2 Metro Line opened in July 2011 (07-2011), extending the line from Darüşşafaka to Hacıosman Station, creating the northern terminus with large Park and Ride facilities and regional bus hub for Northern Bosphorus and Black Sea districts.",
    "placemarksCount": 2,
    "bounds": [
      [
        41.129,
        29.024
      ],
      [
        41.14,
        29.031
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M2 Metro Line (Darüşşafaka ↔ Hacıosman)",
            "description": "Deep bored subway tunnel alignment from Darüşşafaka to Hacıosman northern terminus, opened in July 2011.",
            "style": {
              "color": "#059A4D",
              "width": 5
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.024868,
                41.129287
              ],
              [
                29.024703,
                41.130823
              ],
              [
                29.024737,
                41.131358
              ],
              [
                29.024846,
                41.131737
              ],
              [
                29.025933,
                41.135707
              ],
              [
                29.02602,
                41.136053
              ],
              [
                29.026177,
                41.136627
              ],
              [
                29.026274,
                41.13695
              ],
              [
                29.02645,
                41.13738
              ],
              [
                29.026574,
                41.137571
              ],
              [
                29.026737,
                41.137733
              ],
              [
                29.027625,
                41.138337
              ],
              [
                29.030346,
                41.139877
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Hacıosman Station",
            "description": "M2 Metro Station opened in July 2011 (07-2011) as northern terminus at Hacıosman in Sarıyer, with regional bus hub and Park and Ride.",
            "style": {
              "color": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.030346,
              41.139877
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m1b-otogar-esenler-2012-02",
    "name": "M1B: Otogar - Esenler Extension (Opening: 02-2012)",
    "date": {
      "year": 2012,
      "month": 2
    },
    "fileName": "m1b_otogar_esenler_2012.kml",
    "color": "#EE2229",
    "visible": true,
    "isSample": true,
    "category": "M1B Metro Line",
    "description": "Reconstruction and opening of the modern dual-track M1B Otogar – Esenler branch section in February 2012 (02-2012), inaugurating the initial operational phase of the M1B Kirazlı extension.",
    "placemarksCount": 2,
    "bounds": [
      [
        41.036,
        28.887
      ],
      [
        41.042,
        28.896
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M1B Metro Line (Otogar ↔ Esenler)",
            "description": "Dual-track subway and viaduct alignment connecting Otogar junction to Esenler station, opened in February 2012.",
            "style": {
              "color": "#EE2229",
              "width": 5
            },
            "lineCode": "M1B"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.894748,
                41.040094
              ],
              [
                28.894632,
                41.039405
              ],
              [
                28.894501,
                41.03909
              ],
              [
                28.894395,
                41.038834
              ],
              [
                28.894318,
                41.038648
              ],
              [
                28.894283,
                41.038498
              ],
              [
                28.89415,
                41.037805
              ],
              [
                28.894113,
                41.037672
              ],
              [
                28.894045,
                41.037536
              ],
              [
                28.893997,
                41.037477
              ],
              [
                28.893969,
                41.037449
              ],
              [
                28.893917,
                41.037397
              ],
              [
                28.893849,
                41.037341
              ],
              [
                28.893749,
                41.037276
              ],
              [
                28.893669,
                41.037229
              ],
              [
                28.893558,
                41.03719
              ],
              [
                28.893392,
                41.037141
              ],
              [
                28.891841,
                41.036758
              ],
              [
                28.891402,
                41.036655
              ],
              [
                28.891106,
                41.03662
              ],
              [
                28.890739,
                41.036608
              ],
              [
                28.890382,
                41.036632
              ],
              [
                28.889985,
                41.03671
              ],
              [
                28.889679,
                41.036794
              ],
              [
                28.889384,
                41.036905
              ],
              [
                28.889215,
                41.03698
              ],
              [
                28.888923,
                41.037129
              ],
              [
                28.888767,
                41.037243
              ],
              [
                28.888453,
                41.037488
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Esenler Station",
            "description": "M1B Metro Station opened in February 2012 (02-2012) as dual-track elevated viaduct station at Esenler center.",
            "style": {
              "color": "#EE2229"
            },
            "lineCode": "M1B"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.888453,
              41.037488
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m4-kadikoy-kartal-2012-08",
    "name": "M4: Kadıköy - Kartal Metro Line (Opening: 08-2012)",
    "date": {
      "year": 2012,
      "month": 8
    },
    "fileName": "m4_kadikoy_kartal_2012.kml",
    "color": "#E81E77",
    "visible": true,
    "isSample": true,
    "category": "M4 Metro Line",
    "description": "17 Ağustos 2012 tarihinde hizmete giren M4 Kadıköy – Kartal metro hattı (15 istasyon; Ayrılık Çeşmesi istasyonu hariç, 29 Ekim 2013’te açılmıştır).",
    "placemarksCount": 16,
    "bounds": [
      [
        40.906,
        29.022
      ],
      [
        41.003,
        29.212
      ]
    ],
    "uploadedAt": "2026-09-24T00:00:00Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M4 Metro Line (Kadıköy ↔ Kartal)",
            "description": "Deep bored twin-tube subway alignment running from Kadıköy Bosphorus shoreline to Kartal, opened on 17 August 2012.",
            "style": {
              "color": "#E81E77",
              "width": 5
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.022218,
                40.99049
              ],
              [
                29.024325,
                40.991939
              ],
              [
                29.02548,
                40.992508
              ],
              [
                29.027349,
                40.993714
              ],
              [
                29.02789,
                40.994191
              ],
              [
                29.028374,
                40.994781
              ],
              [
                29.028795,
                40.995577
              ],
              [
                29.029981,
                40.998416
              ],
              [
                29.030335,
                40.999454
              ],
              [
                29.030582,
                41.00018
              ],
              [
                29.031017,
                41.00142
              ],
              [
                29.031144,
                41.001786
              ],
              [
                29.031232,
                41.002016
              ],
              [
                29.031529,
                41.002415
              ],
              [
                29.031749,
                41.002641
              ],
              [
                29.032006,
                41.00285
              ],
              [
                29.032293,
                41.003033
              ],
              [
                29.032609,
                41.003176
              ],
              [
                29.032916,
                41.003314
              ],
              [
                29.033198,
                41.003423
              ],
              [
                29.033471,
                41.003516
              ],
              [
                29.033822,
                41.003613
              ],
              [
                29.034147,
                41.003667
              ],
              [
                29.034524,
                41.00369
              ],
              [
                29.035559,
                41.003669
              ],
              [
                29.036934,
                41.003518
              ],
              [
                29.038362,
                41.003274
              ],
              [
                29.040883,
                41.002846
              ],
              [
                29.043332,
                41.002394
              ],
              [
                29.044323,
                41.002183
              ],
              [
                29.045487,
                41.001936
              ],
              [
                29.052581,
                41.000634
              ],
              [
                29.053966,
                41.000234
              ],
              [
                29.055052,
                40.999903
              ],
              [
                29.059044,
                40.998314
              ],
              [
                29.059949,
                40.997949
              ],
              [
                29.060976,
                40.997528
              ],
              [
                29.063138,
                40.996742
              ],
              [
                29.069426,
                40.994422
              ],
              [
                29.070541,
                40.993973
              ],
              [
                29.071462,
                40.993604
              ],
              [
                29.075903,
                40.991521
              ],
              [
                29.085008,
                40.987976
              ],
              [
                29.085965,
                40.987512
              ],
              [
                29.086894,
                40.986976
              ],
              [
                29.087523,
                40.986497
              ],
              [
                29.088857,
                40.985434
              ],
              [
                29.09026,
                40.984485
              ],
              [
                29.091652,
                40.983519
              ],
              [
                29.093868,
                40.982241
              ],
              [
                29.096129,
                40.980565
              ],
              [
                29.096915,
                40.980018
              ],
              [
                29.097369,
                40.979681
              ],
              [
                29.097624,
                40.979423
              ],
              [
                29.097894,
                40.97913
              ],
              [
                29.098078,
                40.978814
              ],
              [
                29.098355,
                40.978215
              ],
              [
                29.098519,
                40.977749
              ],
              [
                29.099128,
                40.976019
              ],
              [
                29.099433,
                40.975295
              ],
              [
                29.099764,
                40.974486
              ],
              [
                29.099905,
                40.974113
              ],
              [
                29.099958,
                40.973947
              ],
              [
                29.100005,
                40.97379
              ],
              [
                29.100071,
                40.973563
              ],
              [
                29.100119,
                40.973409
              ],
              [
                29.100167,
                40.973267
              ],
              [
                29.100411,
                40.972585
              ],
              [
                29.100486,
                40.972388
              ],
              [
                29.10057,
                40.972182
              ],
              [
                29.10067,
                40.971968
              ],
              [
                29.103053,
                40.967435
              ],
              [
                29.103444,
                40.966859
              ],
              [
                29.104478,
                40.965265
              ],
              [
                29.105097,
                40.964554
              ],
              [
                29.10569,
                40.96385
              ],
              [
                29.107888,
                40.961697
              ],
              [
                29.121171,
                40.949433
              ],
              [
                29.121882,
                40.948872
              ],
              [
                29.122638,
                40.948275
              ],
              [
                29.125249,
                40.946475
              ],
              [
                29.12806,
                40.944467
              ],
              [
                29.13543,
                40.938865
              ],
              [
                29.135692,
                40.938649
              ],
              [
                29.138634,
                40.936324
              ],
              [
                29.139347,
                40.935751
              ],
              [
                29.145941,
                40.930482
              ],
              [
                29.146623,
                40.929887
              ],
              [
                29.14733,
                40.92927
              ],
              [
                29.148768,
                40.928104
              ],
              [
                29.149207,
                40.927682
              ],
              [
                29.149731,
                40.92711
              ],
              [
                29.150344,
                40.926337
              ],
              [
                29.150962,
                40.925542
              ],
              [
                29.151456,
                40.925051
              ],
              [
                29.15187,
                40.92474
              ],
              [
                29.152333,
                40.924475
              ],
              [
                29.153641,
                40.924031
              ],
              [
                29.154616,
                40.923715
              ],
              [
                29.155743,
                40.923358
              ],
              [
                29.157044,
                40.923041
              ],
              [
                29.1572,
                40.923005
              ],
              [
                29.164227,
                40.92139
              ],
              [
                29.165384,
                40.92101
              ],
              [
                29.166307,
                40.920721
              ],
              [
                29.167433,
                40.920367
              ],
              [
                29.169604,
                40.919685
              ],
              [
                29.170689,
                40.919269
              ],
              [
                29.17331,
                40.918051
              ],
              [
                29.173965,
                40.917701
              ],
              [
                29.174671,
                40.917407
              ],
              [
                29.175454,
                40.917136
              ],
              [
                29.17717,
                40.916566
              ],
              [
                29.178165,
                40.916255
              ],
              [
                29.179138,
                40.915957
              ],
              [
                29.181404,
                40.915337
              ],
              [
                29.182074,
                40.91519
              ],
              [
                29.182638,
                40.915069
              ],
              [
                29.18323,
                40.91496
              ],
              [
                29.183838,
                40.914875
              ],
              [
                29.188614,
                40.914265
              ],
              [
                29.189229,
                40.914129
              ],
              [
                29.189628,
                40.914017
              ],
              [
                29.18999,
                40.913905
              ],
              [
                29.19139,
                40.913428
              ],
              [
                29.192363,
                40.913103
              ],
              [
                29.193408,
                40.912743
              ],
              [
                29.199301,
                40.910645
              ],
              [
                29.201646,
                40.909942
              ],
              [
                29.204923,
                40.908941
              ],
              [
                29.205245,
                40.908842
              ],
              [
                29.208765,
                40.907638
              ],
              [
                29.209496,
                40.907326
              ],
              [
                29.210354,
                40.906912
              ],
              [
                29.211193,
                40.906471
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kadıköy Station",
            "description": "M4 Metro Station opened on 17 August 2012 (08-2012) as western terminus at Kadıköy ferry square, transfer to T3 and ferries.",
            "style": {
              "color": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.022218,
              40.99049
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Acıbadem Station",
            "description": "M4 Metro Station opened on 17 August 2012 (08-2012) beneath D.100 highway at Acıbadem.",
            "style": {
              "color": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.044323,
              41.002183
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ünalan Station",
            "description": "M4 Metro Station opened on 17 August 2012 (08-2012) at Uzunçayır, direct underground moving-walkway link to Metrobüs.",
            "style": {
              "color": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.059949,
              40.997949
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Göztepe Station (M4)",
            "description": "M4 Metro Station opened on 17 August 2012 (08-2012) serving Istanbul Medeniyet University.",
            "style": {
              "color": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.070541,
              40.993973
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yenisahra Station",
            "description": "M4 Metro Station opened on 17 August 2012 (08-2012) serving Palladium and Optimum shopping centers.",
            "style": {
              "color": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.09026,
              40.984485
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kozyatağı Station",
            "description": "M4 Metro Station opened on 17 August 2012 (08-2012) serving Kozyatağı business towers and City's mall, future M8 transfer.",
            "style": {
              "color": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.099433,
              40.975295
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bostancı Station (M4)",
            "description": "M4 Metro Station opened on 17 August 2012 (08-2012) at Bostancı D.100 junction and auto industrial site.",
            "style": {
              "color": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.105097,
              40.964554
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Küçükyalı Station",
            "description": "M4 Metro Station opened on 17 August 2012 (08-2012) serving Küçükyalı and Hilltown.",
            "style": {
              "color": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.121882,
              40.948872
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Maltepe Station",
            "description": "M4 Metro Station opened on 17 August 2012 (08-2012) at Maltepe town entrance and Zümrütevler.",
            "style": {
              "color": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.139347,
              40.935751
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Huzurevi Station",
            "description": "M4 Metro Station opened on 17 August 2012 (08-2012) serving Maltepe Nursing and Rehabilitation Center.",
            "style": {
              "color": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.146623,
              40.929887
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Gülsuyu Station",
            "description": "M4 Metro Station opened on 17 August 2012 (08-2012) serving Gülsuyu and Gülensu hills.",
            "style": {
              "color": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.154616,
              40.923715
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Esenkent Station (M4)",
            "description": "M4 Metro Station opened on 17 August 2012 (08-2012) at Esenkent-Cevizli.",
            "style": {
              "color": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.166307,
              40.920721
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Hastane - Adliye Station",
            "description": "M4 Metro Station opened on 17 August 2012 (08-2012) serving Istanbul Anatolian Palace of Justice and Lütfi Kırdar City Hospital.",
            "style": {
              "color": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.178165,
              40.916255
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Soğanlık Station",
            "description": "M4 Metro Station opened on 17 August 2012 (08-2012) in Kartal Soğanlık district.",
            "style": {
              "color": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.192363,
              40.913103
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kartal Station (M4)",
            "description": "M4 Metro Station opened on 17 August 2012 (08-2012) as eastern terminus of the Anatolian side's inaugural subway line.",
            "style": {
              "color": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.211193,
              40.906471
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m1b-esenler-kirazli-2013-06",
    "name": "M1B: Otogar - Kirazlı Extension (Opening: 06-2013)",
    "date": {
      "year": 2013,
      "month": 6
    },
    "fileName": "m1b-otogar-kirazli-2013-06.kml",
    "color": "#EE2229",
    "visible": true,
    "category": "M1 Metro Line",
    "description": "14 Haziran 2013 tarihinde hizmete açılan M1B Esenler – Kirazlı uzatması ile Otogar - Kirazlı hattı tamamlanmış, Menderes, Üçyüzlü, Bağcılar Meydan ve Kirazlı istasyonları işletmeye alınmıştır. Kirazlı’da aynı gün açılan M3 Başakşehir-Metrokent metrosuyla ve Bağcılar Meydan’da T1 tramvayıyla doğrudan aktarma kurulmuştur.",
    "placemarksCount": 5,
    "bounds": [
      [
        41.031052,
        28.84217
      ],
      [
        41.043664,
        28.888767
      ]
    ],
    "uploadedAt": "2013-06-14T00:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M1B Esenler - Kirazlı Metro Hattı Ray Güzergahı",
            "description": "M1B Esenler - Kirazlı arası çift hat tünel ray geometrisi (14 Haziran 2013)",
            "style": {
              "color": "#EE2229",
              "width": 5,
              "fill": "#EE2229"
            },
            "lineCode": "M1B"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.888453,
                41.037488
              ],
              [
                28.888767,
                41.037243
              ],
              [
                28.888453,
                41.037488
              ],
              [
                28.88818,
                41.037743
              ],
              [
                28.88797,
                41.037989
              ],
              [
                28.8878,
                41.038245
              ],
              [
                28.887414,
                41.038818
              ],
              [
                28.887155,
                41.039203
              ],
              [
                28.886711,
                41.03986
              ],
              [
                28.886576,
                41.040061
              ],
              [
                28.885758,
                41.041275
              ],
              [
                28.885581,
                41.041465
              ],
              [
                28.885286,
                41.041813
              ],
              [
                28.884945,
                41.042191
              ],
              [
                28.884634,
                41.042523
              ],
              [
                28.884183,
                41.042928
              ],
              [
                28.883786,
                41.043166
              ],
              [
                28.883244,
                41.043393
              ],
              [
                28.882762,
                41.043514
              ],
              [
                28.882123,
                41.043619
              ],
              [
                28.881528,
                41.043664
              ],
              [
                28.881048,
                41.043646
              ],
              [
                28.880629,
                41.043587
              ],
              [
                28.880137,
                41.043472
              ],
              [
                28.879819,
                41.04334
              ],
              [
                28.879179,
                41.04303
              ],
              [
                28.878578,
                41.042715
              ],
              [
                28.877349,
                41.04207
              ],
              [
                28.87678,
                41.041758
              ],
              [
                28.876501,
                41.041572
              ],
              [
                28.876222,
                41.041346
              ],
              [
                28.875729,
                41.040876
              ],
              [
                28.874441,
                41.039634
              ],
              [
                28.874181,
                41.039383
              ],
              [
                28.871193,
                41.036993
              ],
              [
                28.870748,
                41.036666
              ],
              [
                28.870273,
                41.036307
              ],
              [
                28.868583,
                41.035078
              ],
              [
                28.868063,
                41.034734
              ],
              [
                28.867685,
                41.03453
              ],
              [
                28.867148,
                41.034319
              ],
              [
                28.866561,
                41.034176
              ],
              [
                28.865306,
                41.033973
              ],
              [
                28.864233,
                41.033913
              ],
              [
                28.863552,
                41.033937
              ],
              [
                28.857378,
                41.034541
              ],
              [
                28.856619,
                41.034616
              ],
              [
                28.855883,
                41.034687
              ],
              [
                28.854699,
                41.034809
              ],
              [
                28.853608,
                41.03496
              ],
              [
                28.852602,
                41.035148
              ],
              [
                28.851471,
                41.035438
              ],
              [
                28.848155,
                41.036756
              ],
              [
                28.847842,
                41.036826
              ],
              [
                28.847509,
                41.036874
              ],
              [
                28.847223,
                41.036887
              ],
              [
                28.846724,
                41.036869
              ],
              [
                28.846278,
                41.0368
              ],
              [
                28.845601,
                41.036669
              ],
              [
                28.845082,
                41.036458
              ],
              [
                28.844604,
                41.036217
              ],
              [
                28.844047,
                41.035759
              ],
              [
                28.843666,
                41.03528
              ],
              [
                28.843303,
                41.034646
              ],
              [
                28.842718,
                41.033076
              ],
              [
                28.84255,
                41.032458
              ],
              [
                28.842377,
                41.031818
              ],
              [
                28.84217,
                41.031052
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Menderes Station",
            "description": "Esenler Dörtyol Meydanı ve Menderes Mahallesi aksında yer alan yeraltı metro istasyonu.",
            "style": {
              "color": "#EE2229",
              "width": 3,
              "fill": "#EE2229"
            },
            "lineCode": "M1B"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.878447,
              41.042804
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Üçyüzlü Station",
            "description": "Bağcılar, Güngören ve Esenler ilçelerinin kesişiminde Üçyüzlü Meydanı altındaki derin metro istasyonu.",
            "style": {
              "color": "#EE2229",
              "width": 3,
              "fill": "#EE2229"
            },
            "lineCode": "M1B"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.870621,
              41.036756
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bağcılar Meydan Station",
            "description": "Bağcılar ilçe merkezinde yer alan metro durağı; T1 Bağcılar–Kabataş tramvay hattına meydan üzerinden doğrudan yaya aktarması.",
            "style": {
              "color": "#EE2229",
              "width": 3,
              "fill": "#EE2229"
            },
            "lineCode": "M1B"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.856619,
              41.034616
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kirazlı Station (M1B)",
            "description": "M1B hattının batı nihai terminali; M3 Başakşehir–Metrokent metrosuna aynı istasyon yapısı içinde doğrudan çapraz peron aktarması.",
            "style": {
              "color": "#EE2229",
              "width": 3,
              "fill": "#EE2229"
            },
            "lineCode": "M1B"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.842377,
              41.031818
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m3-kirazli-metrokent-2013-06",
    "name": "M3: Kirazlı - Başakşehir/Metrokent (Opening: 06-2013)",
    "date": {
      "year": 2013,
      "month": 6
    },
    "fileName": "m3-kirazli-metrokent-2013-06.kml",
    "color": "#0CA6DF",
    "visible": true,
    "category": "M3 Metro Line",
    "description": "M3 Kirazlı – Başakşehir/Metrokent metro hattı 14 Haziran 2013 tarihinde hizmete girmiştir. Kirazlı’da M1B hattı ile peron entegrasyonu sağlamakta, İkitelli Organize Sanayi Bölgesi ve Başakşehir toplu konut alanlarını kente bağlamaktadır.",
    "placemarksCount": 10,
    "bounds": [
      [
        41.031134,
        28.79085
      ],
      [
        41.109088,
        28.843603
      ]
    ],
    "uploadedAt": "2013-06-14T00:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M3 Kirazlı - Başakşehir/Metrokent Metro Hattı Ray Güzergahı",
            "description": "M3 Kirazlı - Metrokent arası çift hat tünel ray geometrisi (14 Haziran 2013)",
            "style": {
              "color": "#0CA6DF",
              "width": 5,
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.843603,
                41.031134
              ],
              [
                28.84308,
                41.032052
              ],
              [
                28.842564,
                41.032913
              ],
              [
                28.842233,
                41.033504
              ],
              [
                28.842233,
                41.033504
              ],
              [
                28.841731,
                41.03435
              ],
              [
                28.841308,
                41.03503
              ],
              [
                28.840908,
                41.035465
              ],
              [
                28.840406,
                41.035846
              ],
              [
                28.839645,
                41.036376
              ],
              [
                28.837666,
                41.037373
              ],
              [
                28.83706,
                41.037866
              ],
              [
                28.836708,
                41.038378
              ],
              [
                28.836504,
                41.038937
              ],
              [
                28.836302,
                41.039642
              ],
              [
                28.836122,
                41.040431
              ],
              [
                28.835938,
                41.041212
              ],
              [
                28.835437,
                41.042816
              ],
              [
                28.834138,
                41.046003
              ],
              [
                28.830892,
                41.05169
              ],
              [
                28.830567,
                41.052273
              ],
              [
                28.830418,
                41.052595
              ],
              [
                28.830338,
                41.052885
              ],
              [
                28.830307,
                41.05317
              ],
              [
                28.830325,
                41.053455
              ],
              [
                28.830382,
                41.05376
              ],
              [
                28.830613,
                41.05489
              ],
              [
                28.83089,
                41.056184
              ],
              [
                28.830998,
                41.05665
              ],
              [
                28.831056,
                41.057159
              ],
              [
                28.831023,
                41.057742
              ],
              [
                28.830882,
                41.058467
              ],
              [
                28.830611,
                41.059275
              ],
              [
                28.830031,
                41.060363
              ],
              [
                28.828158,
                41.063085
              ],
              [
                28.826763,
                41.064476
              ],
              [
                28.826085,
                41.065077
              ],
              [
                28.825393,
                41.065678
              ],
              [
                28.824307,
                41.066551
              ],
              [
                28.822138,
                41.067852
              ],
              [
                28.820844,
                41.068354
              ],
              [
                28.819285,
                41.06873
              ],
              [
                28.817867,
                41.06893
              ],
              [
                28.807297,
                41.069344
              ],
              [
                28.806375,
                41.069511
              ],
              [
                28.805753,
                41.069738
              ],
              [
                28.805253,
                41.070082
              ],
              [
                28.803822,
                41.071396
              ],
              [
                28.803041,
                41.072094
              ],
              [
                28.80247,
                41.072607
              ],
              [
                28.801998,
                41.073029
              ],
              [
                28.800592,
                41.074269
              ],
              [
                28.79951,
                41.075246
              ],
              [
                28.797884,
                41.077519
              ],
              [
                28.797545,
                41.078054
              ],
              [
                28.797391,
                41.078532
              ],
              [
                28.797311,
                41.079243
              ],
              [
                28.797322,
                41.079903
              ],
              [
                28.797394,
                41.080321
              ],
              [
                28.797631,
                41.081159
              ],
              [
                28.797831,
                41.08185
              ],
              [
                28.797937,
                41.082225
              ],
              [
                28.798112,
                41.083349
              ],
              [
                28.798099,
                41.084473
              ],
              [
                28.797773,
                41.085968
              ],
              [
                28.797051,
                41.087529
              ],
              [
                28.796654,
                41.088279
              ],
              [
                28.796277,
                41.088985
              ],
              [
                28.795876,
                41.08969
              ],
              [
                28.795467,
                41.090296
              ],
              [
                28.794758,
                41.090913
              ],
              [
                28.791919,
                41.093227
              ],
              [
                28.791352,
                41.09378
              ],
              [
                28.790976,
                41.094449
              ],
              [
                28.790853,
                41.095122
              ],
              [
                28.79085,
                41.095822
              ],
              [
                28.791148,
                41.096895
              ],
              [
                28.791456,
                41.09778
              ],
              [
                28.791695,
                41.098453
              ],
              [
                28.792082,
                41.099074
              ],
              [
                28.792601,
                41.099731
              ],
              [
                28.793198,
                41.10017
              ],
              [
                28.793749,
                41.100513
              ],
              [
                28.800866,
                41.103439
              ],
              [
                28.801113,
                41.103592
              ],
              [
                28.801291,
                41.10376
              ],
              [
                28.801375,
                41.103892
              ],
              [
                28.80145,
                41.104108
              ],
              [
                28.801507,
                41.104343
              ],
              [
                28.801581,
                41.106141
              ],
              [
                28.801604,
                41.107409
              ],
              [
                28.801621,
                41.108204
              ],
              [
                28.801642,
                41.109088
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kirazlı Station (M3)",
            "description": "M3 hattının güney başlangıç terminali; M1B Yenikapı–Kirazlı metrosuna doğrudan ortak yeraltı bilet holü ve karşı peron aktarması.",
            "style": {
              "color": "#0CA6DF",
              "width": 3,
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.84308,
              41.032052
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yenimahalle Station",
            "description": "Bağcılar Yenimahalle mevkii; İETT otobüs aktarma peronları ve yoğun yerleşim alanı bağlantısı.",
            "style": {
              "color": "#0CA6DF",
              "width": 3,
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.835861,
              41.040385
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Mahmutbey Station",
            "description": "Mahmutbey kavşağı ve Basın Ekspres Yolu girişi; gelecekte açılacak M7 Mecidiyeköy–Mahmutbey metrosuyla ana kavşak aktarması.",
            "style": {
              "color": "#0CA6DF",
              "width": 3,
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.830613,
              41.05489
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İSTOÇ Station",
            "description": "İstanbul Toptancılar Çarşısı (İSTOÇ) ticaret kompleksi içine doğrudan giriş sunan yeraltı metro istasyonu.",
            "style": {
              "color": "#0CA6DF",
              "width": 3,
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.826085,
              41.065077
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İkitelli Sanayi Station",
            "description": "İkitelli Organize Sanayi Bölgesi kalbinde; M3 ana hattı ile Olimpiyat Şube (Mekik) Hattı’nın 4 hatlı kavşak ve aktarma istasyonu.",
            "style": {
              "color": "#0CA6DF",
              "width": 3,
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.803822,
              41.071396
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Turgut Özal Station",
            "description": "Turgut Özal Sanayi Sitesi ve Süleyman Demirel Bulvarı aksına hizmet veren yeraltı istasyonu.",
            "style": {
              "color": "#0CA6DF",
              "width": 3,
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.797397,
              41.081212
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Siteler Station",
            "description": "Atatürk Oto Sanatkarları ve Metal-İş Sanayi Siteleri bağlantılı metro durağı.",
            "style": {
              "color": "#0CA6DF",
              "width": 3,
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.796439,
              41.088212
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Başak Konutları Station",
            "description": "Başakşehir 1. ve 2. etap konut alanları ile Hürriyet Bulvarı ana yaya erişim noktası.",
            "style": {
              "color": "#0CA6DF",
              "width": 3,
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.791205,
              41.097831
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Metrokent Station",
            "description": "M3 metrosunun 2013 yılı kuzey terminali; Başakşehir Kent Meydanı ve İETT aktarma merkezi entegrasyonu.",
            "style": {
              "color": "#0CA6DF",
              "width": 3,
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.801621,
              41.108204
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m3-ikitelli-olimpiyat-2013-06",
    "name": "M3: İkitelli Sanayi - Olimpiyat Shuttle (Opening: 06-2013)",
    "date": {
      "year": 2013,
      "month": 6
    },
    "fileName": "m3-ikitelli-olimpiyat-shuttle-2013-06.kml",
    "color": "#0CA6DF",
    "visible": true,
    "category": "M3 Metro Line",
    "description": "14 Haziran 2013 tarihinde M3 ana hattı ile birlikte açılan İkitelli Sanayi – Atatürk Olimpiyat Stadyumu mekik işletme şubesidir. İkitelli Sanayi peronlarından aktarma yapılarak Ziya Gökalp Mahallesi ve Olimpiyat Stadyumu’na erişim sağlamıştır.",
    "placemarksCount": 4,
    "bounds": [
      [
        41.071152,
        28.767077
      ],
      [
        41.079814,
        28.803822
      ]
    ],
    "uploadedAt": "2013-06-14T00:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M3 İkitelli Sanayi - Olimpiyat Mekik Hattı Ray Güzergahı",
            "description": "İkitelli Sanayi makaslarından ayrılıp Atatürk Olimpiyat Stadyumu’na uzanan tünel ve viyadük ray hattı (14 Haziran 2013)",
            "style": {
              "color": "#0CA6DF",
              "width": 5,
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.803628,
                41.071152
              ],
              [
                28.802743,
                41.071923
              ],
              [
                28.801603,
                41.072963
              ],
              [
                28.801153,
                41.073365
              ],
              [
                28.800029,
                41.074377
              ],
              [
                28.799747,
                41.074605
              ],
              [
                28.799406,
                41.074769
              ],
              [
                28.798942,
                41.074857
              ],
              [
                28.79842,
                41.07491
              ],
              [
                28.797854,
                41.074906
              ],
              [
                28.792166,
                41.074408
              ],
              [
                28.79034,
                41.074409
              ],
              [
                28.787458,
                41.074592
              ],
              [
                28.786412,
                41.074689
              ],
              [
                28.785372,
                41.07478
              ],
              [
                28.780952,
                41.075262
              ],
              [
                28.779789,
                41.075457
              ],
              [
                28.778988,
                41.075654
              ],
              [
                28.778466,
                41.075868
              ],
              [
                28.772832,
                41.078665
              ],
              [
                28.772648,
                41.078763
              ],
              [
                28.772056,
                41.07904
              ],
              [
                28.771692,
                41.079164
              ],
              [
                28.771376,
                41.079234
              ],
              [
                28.769917,
                41.079482
              ],
              [
                28.767077,
                41.079643
              ],
              [
                28.768836,
                41.079471
              ],
              [
                28.76709,
                41.079814
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İkitelli Sanayi Station",
            "description": "M3 ana hattı ile Olimpiyat Şube (Mekik) Hattı aktarma istasyonu; karşı perondan mekik trenlerine geçiş.",
            "style": {
              "color": "#0CA6DF",
              "width": 3,
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.803822,
              41.071396
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ziya Gökalp Mahallesi Station",
            "description": "M3 Olimpiyat şube hattı ara durağı; Ziya Gökalp Mahallesi ve Hürriyet Bulvarı bağlantısı.",
            "style": {
              "color": "#0CA6DF",
              "width": 3,
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.786412,
              41.074689
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Olimpiyat Station",
            "description": "Atatürk Olimpiyat Stadyumu ve Metro Depo/Bakım Atölyesi bağlantılı 4 hatlı devasa tahliye terminali.",
            "style": {
              "color": "#0CA6DF",
              "width": 3,
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.76709,
              41.079814
            ]
          }
        }
      ]
    },
    "endDate": {
      "year": 2021,
      "month": 4
    }
  },
  {
    "id": "rail-m4-ayrilik-cesmesi-2013-10",
    "name": "M4: Ayrılık Çeşmesi Station Opening (10-2013)",
    "date": {
      "year": 2013,
      "month": 10
    },
    "fileName": "m4-ayrilik-cesmesi-2013-10.kml",
    "color": "#E81E77",
    "visible": true,
    "category": "M4 Metro Line",
    "description": "M4 Kadıköy - Kartal metrosunun Ayrılık Çeşmesi istasyonu, Marmaray entegre istasyon yapısının tamamlanmasıyla 29 Ekim 2013 (10-2013) tarihinde hizmete açılmıştır.",
    "placemarksCount": 1,
    "bounds": [
      [
        40.99818,
        29.028582
      ],
      [
        41.00218,
        29.032582
      ]
    ],
    "uploadedAt": "2013-10-29T00:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Ayrılık Çeşmesi Station",
            "description": "M4 Ayrılık Çeşmesi Metro İstasyonu 29 Ekim 2013 (10-2013) tarihinde Marmaray entegre istasyon yapısıyla birlikte hizmete açılmıştır.",
            "style": {
              "color": "#E81E77",
              "width": 3,
              "fill": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.030582,
              41.00018
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-marmaray-kazlicesme-ayrilik-cesmesi-2013-10",
    "name": "Marmaray: Kazlıçeşme - Ayrılık Çeşmesi Bosphorus Crossing (Opening: 10-2013)",
    "date": {
      "year": 2013,
      "month": 10
    },
    "fileName": "marmaray-kazlicesme-ayrilik-cesmesi-2013-10.kml",
    "color": "#65656A",
    "visible": true,
    "isSample": true,
    "category": "Marmaray Commuter Line",
    "description": "Marmaray Boğaz Tüp Geçişi 1. Etabı: Kazlıçeşme'den Yenikapı, Sirkeci, Boğaz Batırma Tüp Tüneli ve Üsküdar üzerinden Ayrılık Çeşmesi'ne uzanan 13.6 km'lik kıtalararası banliyö demiryolu hattı (29 Ekim 2013).",
    "placemarksCount": 6,
    "bounds": [
      [
        40.99,
        28.915
      ],
      [
        41.03,
        29.035
      ]
    ],
    "uploadedAt": "2013-10-29T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
                "type": "Feature",
                "properties": {
                        "name": "Marmaray Kazlıçeşme - Ayrılık Çeşmesi Ray Güzergahı",
                        "description": "Marmaray kıtalararası çift hat elektrifikasyonlu banliyö demiryolu hattı ve Boğaz batırma tüp tüneli (29 Ekim 2013).",
                        "style": {
                                "color": "#65656A",
                                "width": 5,
                                "fill": "#65656A"
                        },
                        "lineCode": "B1"
                },
                "geometry": {
                        "type": "LineString",
                        "coordinates": [
                                [
                                        28.916968,
                                        40.992745
                                ],
                                [
                                        28.918195,
                                        40.992528
                                ],
                                [
                                        28.91947,
                                        40.992258
                                ],
                                [
                                        28.919771,
                                        40.992185
                                ],
                                [
                                        28.920687,
                                        40.991952
                                ],
                                [
                                        28.920929,
                                        40.991889
                                ],
                                [
                                        28.921132,
                                        40.991853
                                ],
                                [
                                        28.921354,
                                        40.991823
                                ],
                                [
                                        28.921794,
                                        40.99178
                                ],
                                [
                                        28.922075,
                                        40.991776
                                ],
                                [
                                        28.922386,
                                        40.991791
                                ],
                                [
                                        28.922636,
                                        40.991821
                                ],
                                [
                                        28.92286,
                                        40.991862
                                ],
                                [
                                        28.923208,
                                        40.991953
                                ],
                                [
                                        28.923651,
                                        40.992101
                                ],
                                [
                                        28.924015,
                                        40.992257
                                ],
                                [
                                        28.925545,
                                        40.993149
                                ],
                                [
                                        28.930599,
                                        40.995587
                                ],
                                [
                                        28.930996,
                                        40.995849
                                ],
                                [
                                        28.931357,
                                        40.996133
                                ],
                                [
                                        28.931576,
                                        40.996359
                                ],
                                [
                                        28.93178,
                                        40.996602
                                ],
                                [
                                        28.932033,
                                        40.997041
                                ],
                                [
                                        28.932894,
                                        40.999054
                                ],
                                [
                                        28.933398,
                                        40.999778
                                ],
                                [
                                        28.933967,
                                        41.00039
                                ],
                                [
                                        28.934517,
                                        41.000782
                                ],
                                [
                                        28.935713,
                                        41.001409
                                ],
                                [
                                        28.936975,
                                        41.001971
                                ],
                                [
                                        28.938816,
                                        41.002616
                                ],
                                [
                                        28.940449,
                                        41.003044
                                ],
                                [
                                        28.945659,
                                        41.004132
                                ],
                                [
                                        28.949971,
                                        41.00497
                                ],
                                [
                                        28.951559,
                                        41.005277
                                ],
                                [
                                        28.957805,
                                        41.006528
                                ],
                                [
                                        28.958747,
                                        41.006777
                                ],
                                [
                                        28.959909,
                                        41.00721
                                ],
                                [
                                        28.960635,
                                        41.00766
                                ],
                                [
                                        28.961212,
                                        41.008061
                                ],
                                [
                                        28.965771,
                                        41.011315
                                ],
                                [
                                        28.96615,
                                        41.011536
                                ],
                                [
                                        28.967397,
                                        41.012028
                                ],
                                [
                                        28.968716,
                                        41.012421
                                ],
                                [
                                        28.969759,
                                        41.012687
                                ],
                                [
                                        28.971213,
                                        41.012996
                                ],
                                [
                                        28.974274,
                                        41.013419
                                ],
                                [
                                        28.977298,
                                        41.013818
                                ],
                                [
                                        28.979042,
                                        41.014048
                                ],
                                [
                                        28.980087,
                                        41.014279
                                ],
                                [
                                        28.981114,
                                        41.01459
                                ],
                                [
                                        28.9817,
                                        41.01483
                                ],
                                [
                                        28.982258,
                                        41.015103
                                ],
                                [
                                        28.985367,
                                        41.016913
                                ],
                                [
                                        28.985729,
                                        41.017097
                                ],
                                [
                                        28.986994,
                                        41.017529
                                ],
                                [
                                        29.006935,
                                        41.024211
                                ],
                                [
                                        29.008636,
                                        41.024748
                                ],
                                [
                                        29.010943,
                                        41.02542
                                ],
                                [
                                        29.011735,
                                        41.025582
                                ],
                                [
                                        29.013264,
                                        41.02584
                                ],
                                [
                                        29.015178,
                                        41.026174
                                ],
                                [
                                        29.015945,
                                        41.026263
                                ],
                                [
                                        29.016539,
                                        41.026278
                                ],
                                [
                                        29.018573,
                                        41.026218
                                ],
                                [
                                        29.018645,
                                        41.026214
                                ],
                                [
                                        29.020465,
                                        41.02615
                                ],
                                [
                                        29.021462,
                                        41.026116
                                ],
                                [
                                        29.02282,
                                        41.025942
                                ],
                                [
                                        29.023423,
                                        41.025808
                                ],
                                [
                                        29.024806,
                                        41.025327
                                ],
                                [
                                        29.025351,
                                        41.025042
                                ],
                                [
                                        29.025868,
                                        41.024675
                                ],
                                [
                                        29.026665,
                                        41.024005
                                ],
                                [
                                        29.027059,
                                        41.023626
                                ],
                                [
                                        29.027356,
                                        41.023262
                                ],
                                [
                                        29.027761,
                                        41.022671
                                ],
                                [
                                        29.027958,
                                        41.022156
                                ],
                                [
                                        29.028233,
                                        41.02112
                                ],
                                [
                                        29.028332,
                                        41.020564
                                ],
                                [
                                        29.028447,
                                        41.019728
                                ],
                                [
                                        29.028823,
                                        41.016545
                                ],
                                [
                                        29.028883,
                                        41.016043
                                ],
                                [
                                        29.029293,
                                        41.013148
                                ],
                                [
                                        29.03066,
                                        41.007458
                                ],
                                [
                                        29.031334,
                                        41.005104
                                ],
                                [
                                        29.031453,
                                        41.004389
                                ],
                                [
                                        29.031479,
                                        41.00392
                                ],
                                [
                                        29.031113,
                                        41.002656
                                ],
                                [
                                        29.030544,
                                        41.001077
                                ],
                                [
                                        29.030266,
                                        41.000277
                                ]
                        ]
                }
        },
        {
                "type": "Feature",
                "properties": {
                        "name": "Kazlıçeşme Station",
                        "description": "Marmaray European side initial terminus opened on 29 October 2013 (10-2013). Serving Kazlıçeşme coastal boulevard and Zeytinburnu.",
                        "style": {
                                "color": "#65656A",
                                "fill": "#65656A"
                        },
                        "lineCode": "B1"
                },
                "geometry": {
                        "type": "Point",
                        "coordinates": [
                                28.916968,
                                40.992745
                        ]
                }
        },
        {
                "type": "Feature",
                "properties": {
                        "name": "Yenikapı Station (Marmaray)",
                        "description": "Marmaray underground station opened on 29 October 2013 (10-2013). Major multimodal transfer hub connecting to M1 and M2 metro lines and İDO ferries.",
                        "style": {
                                "color": "#65656A",
                                "fill": "#65656A"
                        },
                        "lineCode": "B1"
                },
                "geometry": {
                        "type": "Point",
                        "coordinates": [
                                28.951559,
                                41.005277
                        ]
                }
        },
        {
                "type": "Feature",
                "properties": {
                        "name": "Sirkeci Station (Marmaray)",
                        "description": "Deepest underground station on the Historic Peninsula at -61m depth, connecting to T1 tramway and Bosphorus ferries.",
                        "style": {
                                "color": "#65656A",
                                "fill": "#65656A"
                        },
                        "lineCode": "B1"
                },
                "geometry": {
                        "type": "Point",
                        "coordinates": [
                                28.977298,
                                41.013818
                        ]
                }
        },
        {
                "type": "Feature",
                "properties": {
                        "name": "Üsküdar Station (Marmaray)",
                        "description": "Marmaray Asian side Bosphorus underground station opened on 29 October 2013 (10-2013). Connecting to M5 metro line and ferries.",
                        "style": {
                                "color": "#65656A",
                                "fill": "#65656A"
                        },
                        "lineCode": "B1"
                },
                "geometry": {
                        "type": "Point",
                        "coordinates": [
                                29.013264,
                                41.02584
                        ]
                }
        },
        {
                "type": "Feature",
                "properties": {
                        "name": "Ayrılık Çeşmesi Station (Marmaray)",
                        "description": "Marmaray Asian side terminus opened on 29 October 2013 (10-2013). Direct underground concourse transfer to M4 Kadıköy - Kartal metro.",
                        "style": {
                                "color": "#65656A",
                                "fill": "#65656A"
                        },
                        "lineCode": "B1"
                },
                "geometry": {
                        "type": "Point",
                        "coordinates": [
                                29.030266,
                                41.000277
                        ]
                }
        }
]
    }
  },
  {
    "id": "rail-m2-sishane-yenikapi-2014-02",
    "name": "M2: Şişhane - Yenikapı Extension (Opening: 02-2014)",
    "date": {
      "year": 2014,
      "month": 2
    },
    "fileName": "m2-sishane-yenikapi-2014-02.kml",
    "color": "#059A4D",
    "visible": true,
    "category": "M2 Metro Line",
    "description": "15 Şubat 2014 tarihinde hizmete açılan M2 Şişhane – Yenikapı uzatması ile Haliç Metro Geçiş Köprüsü ve Yenikapı terminali işletmeye alınmış, M2 metrosu Tarihi Yarımada’ya bağlanmıştır (Vezneciler istasyonu Mart 2014’te açılmıştır).",
    "placemarksCount": 3,
    "bounds": [
      [
        41.004644,
        28.945673
      ],
      [
        41.029455,
        28.974713
      ]
    ],
    "uploadedAt": "2014-02-15T00:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M2 Şişhane - Yenikapı Metro Hattı Ray Güzergahı",
            "description": "Şişhane’den Haliç Metro Köprüsü üzerinden Yenikapı’ya uzanan metro hattı (15 Şubat 2014)",
            "style": {
              "color": "#059A4D",
              "width": 5,
              "fill": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.972588,
                41.02841
              ],
              [
                28.974713,
                41.029455
              ],
              [
                28.973476,
                41.028853
              ],
              [
                28.972588,
                41.02841
              ],
              [
                28.971683,
                41.02794
              ],
              [
                28.971466,
                41.02778
              ],
              [
                28.971213,
                41.027532
              ],
              [
                28.970795,
                41.027072
              ],
              [
                28.969856,
                41.026032
              ],
              [
                28.969645,
                41.025814
              ],
              [
                28.966595,
                41.022651
              ],
              [
                28.963667,
                41.019613
              ],
              [
                28.963417,
                41.019354
              ],
              [
                28.963295,
                41.019226
              ],
              [
                28.961682,
                41.017555
              ],
              [
                28.961042,
                41.016928
              ],
              [
                28.960545,
                41.016376
              ],
              [
                28.960126,
                41.015762
              ],
              [
                28.959969,
                41.015398
              ],
              [
                28.959847,
                41.015054
              ],
              [
                28.959728,
                41.014564
              ],
              [
                28.959652,
                41.013983
              ],
              [
                28.959612,
                41.013509
              ],
              [
                28.959514,
                41.012258
              ],
              [
                28.9594,
                41.010506
              ],
              [
                28.959304,
                41.009231
              ],
              [
                28.9592,
                41.008727
              ],
              [
                28.959059,
                41.008293
              ],
              [
                28.958895,
                41.007951
              ],
              [
                28.958722,
                41.007708
              ],
              [
                28.958494,
                41.007511
              ],
              [
                28.958288,
                41.007377
              ],
              [
                28.957894,
                41.007188
              ],
              [
                28.957481,
                41.007034
              ],
              [
                28.956904,
                41.006884
              ],
              [
                28.954449,
                41.006378
              ],
              [
                28.952531,
                41.005996
              ],
              [
                28.95145,
                41.005782
              ],
              [
                28.948176,
                41.005123
              ],
              [
                28.945673,
                41.004644
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Haliç Station",
            "description": "Haliç Metro Geçiş Köprüsü üzerinde yer alan, panoramik manzaralı açık metro istasyonu (15 Şubat 2014).",
            "style": {
              "color": "#059A4D",
              "width": 3,
              "fill": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.966643,
              41.022621
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yenikapı Station (M2)",
            "description": "M2 Yenikapı–Hacıosman hattının güney başlangıç ve bitiş terminali; İstanbul’un mega aktarma merkezi (15 Şubat 2014).",
            "style": {
              "color": "#059A4D",
              "width": 3,
              "fill": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.951522,
              41.005626
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m2-vezneciler-2014-03",
    "name": "M2: Vezneciler Station Opening (03-2014)",
    "date": {
      "year": 2014,
      "month": 3
    },
    "fileName": "m2-vezneciler-2014-03.kml",
    "color": "#059A4D",
    "visible": true,
    "category": "M2 Metro Line",
    "description": "M2 Yenikapı - Hacıosman metro hattının Haliç ile Yenikapı istasyonları arasında yer alan Vezneciler - İstanbul Üniversitesi istasyonu, 16 Mart 2014 (03-2014) tarihinde hizmete açılmıştır.",
    "placemarksCount": 1,
    "bounds": [
      [
        41.010253,
        28.957701
      ],
      [
        41.014253,
        28.961701
      ]
    ],
    "uploadedAt": "2014-03-16T00:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Vezneciler - İstanbul Üniversitesi Station",
            "description": "M2 Vezneciler - İstanbul Üniversitesi Metro İstasyonu 16 Mart 2014 (03-2014) tarihinde hizmete açılmıştır.",
            "style": {
              "color": "#059A4D",
              "width": 3,
              "fill": "#059A4D"
            },
            "lineCode": "M2"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.959701,
              41.012253
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m1-aksaray-yenikapi-2014-11",
    "name": "M1: Aksaray - Yenikapı Extension (Opening: 11-2014)",
    "date": {
      "year": 2014,
      "month": 11
    },
    "fileName": "m1-aksaray-yenikapi-2014-11.kml",
    "color": "#EE2229",
    "visible": true,
    "category": "M1 Metro Line",
    "description": "9 Kasım 2014 tarihinde hizmete giren Aksaray – Yenikapı tünel uzatması ile M1A ve M1B hatları 25 yıl sonra Aksaray’dan Yenikapı Transfer Merkezi’ne uzatılmış, M2 metrosuna doğrudan yeraltı peron entegrasyonu sağlanmıştır.",
    "placemarksCount": 2,
    "bounds": [
      [
        41.005171,
        28.948169
      ],
      [
        41.012039,
        28.950609
      ]
    ],
    "uploadedAt": "2014-11-09T00:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M1 Aksaray - Yenikapı Metro Tüneli Ray Güzergahı",
            "description": "Aksaray’dan Yenikapı’ya uzanan 700 metrelik M1 tünel hattı (9 Kasım 2014)",
            "style": {
              "color": "#EE2229",
              "width": 5,
              "fill": "#EE2229"
            },
            "lineCode": "M1"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.948169,
                41.012039
              ],
              [
                28.948876,
                41.011397
              ],
              [
                28.949258,
                41.011138
              ],
              [
                28.949533,
                41.010827
              ],
              [
                28.94972,
                41.010515
              ],
              [
                28.949911,
                41.010073
              ],
              [
                28.950136,
                41.009023
              ],
              [
                28.950349,
                41.007132
              ],
              [
                28.950415,
                41.006495
              ],
              [
                28.950506,
                41.006503
              ],
              [
                28.950566,
                41.005728
              ],
              [
                28.950609,
                41.005171
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yenikapı Station (M1)",
            "description": "M1A (Havalimanı) ve M1B (Kirazlı) hatlarının doğu terminali; Yenikapı Transfer Merkezi yeraltı bağlantısı (9 Kasım 2014).",
            "style": {
              "color": "#EE2229",
              "width": 3,
              "fill": "#EE2229"
            },
            "lineCode": "M1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.950518,
              41.005779
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m6-levent-hisarustu-2015-04",
    "name": "M6: Levent - Boğaziçi Üniversitesi/Hisarüstü (Opening: 04-2015)",
    "date": {
      "year": 2015,
      "month": 4
    },
    "fileName": "m6_levent_hisarustu_2015_04.geojson",
    "color": "#C9AA79",
    "visible": true,
    "isSample": true,
    "category": "M6 Metro Line",
    "description": "M6 Levent - Boğaziçi Üniversitesi/Hisarüstü Metro Hattı (19 Nisan 2015). 3,3 km uzunluğunda 4 istasyonlu mini metro hattı.",
    "placemarksCount": 5,
    "bounds": [
      [
        41.075682,
        29.013906
      ],
      [
        41.085375,
        29.046345
      ]
    ],
    "uploadedAt": "2015-04-19T06:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M6 Levent - Boğaziçi Üniversitesi/Hisarüstü Metro Hattı Ray Güzergahı",
            "description": "M6 Levent - Boğaziçi Üniversitesi/Hisarüstü arası tünel ray geometrisi (19 Nisan 2015)",
            "style": {
              "color": "#C9AA79",
              "width": 5,
              "fill": "#C9AA79"
            },
            "lineCode": "M6"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.013906,
                41.075682
              ],
              [
                29.01444,
                41.075857
              ],
              [
                29.014974,
                41.076031
              ],
              [
                29.015607,
                41.076212
              ],
              [
                29.016099,
                41.076339
              ],
              [
                29.017082,
                41.07651
              ],
              [
                29.018905,
                41.076733
              ],
              [
                29.022755,
                41.077253
              ],
              [
                29.023437,
                41.077311
              ],
              [
                29.024001,
                41.077352
              ],
              [
                29.024551,
                41.077392
              ],
              [
                29.025417,
                41.077448
              ],
              [
                29.028014,
                41.077662
              ],
              [
                29.028534,
                41.077764
              ],
              [
                29.029087,
                41.078018
              ],
              [
                29.036269,
                41.081512
              ],
              [
                29.036587,
                41.0817
              ],
              [
                29.037219,
                41.082111
              ],
              [
                29.037641,
                41.082443
              ],
              [
                29.037997,
                41.082724
              ],
              [
                29.038446,
                41.083175
              ],
              [
                29.039196,
                41.083749
              ],
              [
                29.039999,
                41.084285
              ],
              [
                29.041071,
                41.084651
              ],
              [
                29.043819,
                41.085108
              ],
              [
                29.044345,
                41.085173
              ],
              [
                29.044888,
                41.085225
              ],
              [
                29.045637,
                41.085298
              ],
              [
                29.046345,
                41.085375
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Levent Station (M6)",
            "description": "M6 mini metro hattının batı başlangıç terminali; M2 Yenikapı - Hacıosman metro hattına doğrudan yer altı ortak bilet holü aktarması.",
            "style": {
              "color": "#C9AA79",
              "width": 3,
              "fill": "#C9AA79"
            },
            "lineCode": "M6"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.01444,
              41.075857
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Nispetiye Station",
            "description": "M6 Metro İstasyonu (19 Nisan 2015). Nispetiye Caddesi ve Akmerkez AVM erişimi.",
            "style": {
              "color": "#C9AA79",
              "width": 3,
              "fill": "#C9AA79"
            },
            "lineCode": "M6"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.024001,
              41.077352
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Etiler Station",
            "description": "M6 Metro İstasyonu (19 Nisan 2015). Etiler merkez yerleşimi ve Nispetiye Caddesi bağlantısı.",
            "style": {
              "color": "#C9AA79",
              "width": 3,
              "fill": "#C9AA79"
            },
            "lineCode": "M6"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.037641,
              41.082443
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Boğaziçi Üniversitesi/Hisarüstü Station",
            "description": "M6 mini metro hattının doğu nihai terminali; Boğaziçi Üniversitesi Güney ve Kuzey kampüslerine doğrudan erişim (19 Nisan 2015).",
            "style": {
              "color": "#C9AA79",
              "width": 3,
              "fill": "#C9AA79"
            },
            "lineCode": "M6"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.045637,
              41.085298
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m4-kartal-tavsantepe-2016-10",
    "name": "M4: Kartal - Tavşantepe Extension (Opening: 10-2016)",
    "date": {
      "year": 2016,
      "month": 10
    },
    "fileName": "m4_kartal_tavsantepe_2016_10.geojson",
    "color": "#E81E77",
    "visible": true,
    "isSample": true,
    "category": "M4 Metro Line",
    "description": "M4 Kartal - Tavşantepe Metro Uzatması (10 Ekim 2016). Yakacık - Adnan Kahveci, Pendik ve Tavşantepe istasyonlarıyla M4 hattı 4,4 km daha uzatıldı.",
    "placemarksCount": 4,
    "bounds": [
      [
        40.880998,
        29.211193
      ],
      [
        40.906471,
        29.25189
      ]
    ],
    "uploadedAt": "2016-10-10T06:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M4 Kartal - Tavşantepe Metro Hattı Ray Güzergahı",
            "description": "M4 Kartal - Tavşantepe arası çift hat delme tünel ray geometrisi (10 Ekim 2016)",
            "style": {
              "color": "#E81E77",
              "width": 5,
              "fill": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.211193,
                40.906471
              ],
              [
                29.212111,
                40.905988
              ],
              [
                29.214174,
                40.904728
              ],
              [
                29.222652,
                40.899332
              ],
              [
                29.224013,
                40.898508
              ],
              [
                29.224561,
                40.898182
              ],
              [
                29.225679,
                40.897375
              ],
              [
                29.226994,
                40.896508
              ],
              [
                29.227826,
                40.895955
              ],
              [
                29.230225,
                40.894352
              ],
              [
                29.237745,
                40.889005
              ],
              [
                29.238456,
                40.888554
              ],
              [
                29.240168,
                40.887404
              ],
              [
                29.2436,
                40.884991
              ],
              [
                29.244614,
                40.884371
              ],
              [
                29.245542,
                40.883785
              ],
              [
                29.24671,
                40.883011
              ],
              [
                29.247287,
                40.882671
              ],
              [
                29.247729,
                40.882456
              ],
              [
                29.248717,
                40.882035
              ],
              [
                29.249688,
                40.881614
              ],
              [
                29.250416,
                40.881332
              ],
              [
                29.251305,
                40.881079
              ],
              [
                29.25189,
                40.880998
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yakacık - Adnan Kahveci Station",
            "description": "M4 Metro İstasyonu (10 Ekim 2016). D.100 üzerinde Kartal ve Pendik sınırında yer alır.",
            "style": {
              "color": "#E81E77",
              "width": 3,
              "fill": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.226994,
              40.896508
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Pendik Station (M4)",
            "description": "M4 Metro İstasyonu (10 Ekim 2016). Pendik Köprüsü mevkii ve D.100 karayolu altgeçit bağlantıları.",
            "style": {
              "color": "#E81E77",
              "width": 3,
              "fill": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.238456,
              40.888554
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Tavşantepe Station",
            "description": "M4 Metro İstasyonu (10 Ekim 2016). 2016-2022 arası M4 doğu nihai terminali; Tersane kavşağı ve Pendik/Tuzla erişimi.",
            "style": {
              "color": "#E81E77",
              "width": 3,
              "fill": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.248717,
              40.882035
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-f3-seyrantepe-vadistanbul-2017-10",
    "name": "F3: Seyrantepe - Vadistanbul Funicular Line (Opening: 10-2017)",
    "date": {
      "year": 2017,
      "month": 10
    },
    "fileName": "f3-seyrantepe-vadistanbul-2017-10.kml",
    "color": "#7A745A",
    "visible": true,
    "isSample": true,
    "category": "F3 Funicular Line",
    "description": "F3 Seyrantepe - Vadistanbul Füniküler (Havaray) Hattı: 29 Ekim 2017 Cumhuriyet Bayramı'nda açılan 750 metrelik viyadük füniküleri. M2 Seyrantepe şubesini Cendere Vadisi'ndeki Vadistanbul Yaşam Merkezi'ne 2.6 dakikada bağlar.",
    "placemarksCount": 3,
    "bounds": [
      [
        41.103,
        28.988
      ],
      [
        41.108,
        28.995
      ]
    ],
    "uploadedAt": "2017-10-29T10:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "F3 Seyrantepe - Vadistanbul Füniküler Güzergahı",
            "description": "F3 Seyrantepe – Vadistanbul viyadük füniküler (Havaray) hat güzergahı (Açılış: 29 Ekim 2017). Hat uzunluğu: 750 m, Doppelmayr Cable Liner.",
            "style": {
              "color": "#7A745A",
              "strokeColor": "#7A745A",
              "strokeWidth": 4
            }
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.99462,
                41.10313
              ],
              [
                28.994289,
                41.103319
              ],
              [
                28.994045,
                41.10347
              ],
              [
                28.993765,
                41.103653
              ],
              [
                28.993496,
                41.10383
              ],
              [
                28.992769,
                41.104303
              ],
              [
                28.992595,
                41.104414
              ],
              [
                28.992433,
                41.104514
              ],
              [
                28.992287,
                41.104597
              ],
              [
                28.992142,
                41.104668
              ],
              [
                28.991962,
                41.104742
              ],
              [
                28.991732,
                41.104822
              ],
              [
                28.991564,
                41.104883
              ],
              [
                28.991367,
                41.104944
              ],
              [
                28.990557,
                41.105134
              ],
              [
                28.99029,
                41.105193
              ],
              [
                28.990068,
                41.105246
              ],
              [
                28.98991,
                41.105313
              ],
              [
                28.989809,
                41.105357
              ],
              [
                28.989714,
                41.105411
              ],
              [
                28.989592,
                41.105497
              ],
              [
                28.989508,
                41.105576
              ],
              [
                28.989452,
                41.105638
              ],
              [
                28.989402,
                41.10571
              ],
              [
                28.989356,
                41.105788
              ],
              [
                28.989329,
                41.105864
              ],
              [
                28.989309,
                41.105932
              ],
              [
                28.9893,
                41.105991
              ],
              [
                28.989297,
                41.106076
              ],
              [
                28.989299,
                41.10616
              ],
              [
                28.989309,
                41.106499
              ],
              [
                28.989312,
                41.10664
              ],
              [
                28.989303,
                41.106734
              ],
              [
                28.989285,
                41.106818
              ],
              [
                28.989244,
                41.106909
              ],
              [
                28.989193,
                41.107012
              ],
              [
                28.989124,
                41.107104
              ],
              [
                28.989048,
                41.107185
              ],
              [
                28.988971,
                41.10725
              ],
              [
                28.988884,
                41.107309
              ],
              [
                28.988804,
                41.107353
              ],
              [
                28.988747,
                41.107379
              ],
              [
                28.988677,
                41.107406
              ],
              [
                28.988597,
                41.107435
              ],
              [
                28.988241,
                41.107559
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Seyrantepe Station (F3)",
            "description": "F3 Seyrantepe Füniküler İstasyonu. Açılış: 29 Ekim 2017. M2 Yenikapı - Hacıosman metro hattı ve Rams Park stadyumu doğrudan kapalı aktarma köprüsü.",
            "style": {
              "color": "#7A745A"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.99462,
              41.10313
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Vadistanbul Station (F3)",
            "description": "F3 Vadistanbul Füniküler İstasyonu. Açılış: 29 Ekim 2017. Vadistanbul AVM teras katı entegre viyadük terminali.",
            "style": {
              "color": "#7A745A"
            }
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.988431,
              41.107556
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m5-uskudar-yamanevler-2017-12",
    "name": "M5: Üsküdar - Yamanevler Section (Opening: 12-2017)",
    "date": {
      "year": 2017,
      "month": 12
    },
    "fileName": "m5_uskudar_yamanevler_2017_12.geojson",
    "color": "#683166",
    "visible": true,
    "isSample": true,
    "category": "M5 Metro Line",
    "description": "M5 Üsküdar - Yamanevler Metro Hattı (15 Aralık 2017). Türkiye’nin ilk tam otomatik sürücüsüz metrosu; 10,5 km uzunluğunda 9 istasyon.",
    "placemarksCount": 10,
    "bounds": [
      [
        41.016166,
        29.01278
      ],
      [
        41.02805,
        29.108681
      ]
    ],
    "uploadedAt": "2017-12-15T06:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M5 Üsküdar - Yamanevler Metro Hattı Ray Güzergahı",
            "description": "M5 Üsküdar - Yamanevler arası çift hat delme tünel ray geometrisi (15 Aralık 2017)",
            "style": {
              "color": "#683166",
              "width": 5,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.01278,
                41.025266
              ],
              [
                29.013882,
                41.025451
              ],
              [
                29.016568,
                41.025884
              ],
              [
                29.016949,
                41.025979
              ],
              [
                29.017222,
                41.026073
              ],
              [
                29.017477,
                41.026214
              ],
              [
                29.017889,
                41.026433
              ],
              [
                29.018108,
                41.026578
              ],
              [
                29.019246,
                41.02737
              ],
              [
                29.01947,
                41.027509
              ],
              [
                29.019722,
                41.027638
              ],
              [
                29.019973,
                41.027744
              ],
              [
                29.020383,
                41.027893
              ],
              [
                29.020915,
                41.028005
              ],
              [
                29.021691,
                41.028062
              ],
              [
                29.023643,
                41.028006
              ],
              [
                29.025677,
                41.027948
              ],
              [
                29.027718,
                41.027998
              ],
              [
                29.028594,
                41.02805
              ],
              [
                29.029448,
                41.028085
              ],
              [
                29.031468,
                41.028177
              ],
              [
                29.031874,
                41.028147
              ],
              [
                29.032123,
                41.028096
              ],
              [
                29.03238,
                41.02803
              ],
              [
                29.032767,
                41.027884
              ],
              [
                29.033292,
                41.027601
              ],
              [
                29.033541,
                41.027438
              ],
              [
                29.033924,
                41.027128
              ],
              [
                29.034175,
                41.026768
              ],
              [
                29.03436,
                41.02624
              ],
              [
                29.034645,
                41.024186
              ],
              [
                29.034819,
                41.023579
              ],
              [
                29.035348,
                41.022807
              ],
              [
                29.03632,
                41.021762
              ],
              [
                29.036999,
                41.021031
              ],
              [
                29.037345,
                41.020699
              ],
              [
                29.037624,
                41.020434
              ],
              [
                29.037846,
                41.020248
              ],
              [
                29.038218,
                41.019968
              ],
              [
                29.038581,
                41.01978
              ],
              [
                29.039029,
                41.019609
              ],
              [
                29.039966,
                41.019343
              ],
              [
                29.040924,
                41.019246
              ],
              [
                29.041735,
                41.019286
              ],
              [
                29.042375,
                41.019378
              ],
              [
                29.043213,
                41.019662
              ],
              [
                29.046055,
                41.021151
              ],
              [
                29.046885,
                41.021445
              ],
              [
                29.048436,
                41.021774
              ],
              [
                29.049906,
                41.022089
              ],
              [
                29.051846,
                41.022508
              ],
              [
                29.056692,
                41.02367
              ],
              [
                29.057509,
                41.023799
              ],
              [
                29.058063,
                41.023805
              ],
              [
                29.058637,
                41.023746
              ],
              [
                29.059026,
                41.023675
              ],
              [
                29.059342,
                41.023593
              ],
              [
                29.059741,
                41.023456
              ],
              [
                29.060175,
                41.023257
              ],
              [
                29.060865,
                41.022821
              ],
              [
                29.061928,
                41.022087
              ],
              [
                29.064275,
                41.020505
              ],
              [
                29.068278,
                41.016694
              ],
              [
                29.069333,
                41.015936
              ],
              [
                29.07002,
                41.015593
              ],
              [
                29.070763,
                41.015367
              ],
              [
                29.071518,
                41.01524
              ],
              [
                29.072255,
                41.015165
              ],
              [
                29.072995,
                41.015183
              ],
              [
                29.07373,
                41.015317
              ],
              [
                29.07449,
                41.0155
              ],
              [
                29.07513,
                41.015709
              ],
              [
                29.076417,
                41.016166
              ],
              [
                29.078106,
                41.016774
              ],
              [
                29.078579,
                41.016996
              ],
              [
                29.079024,
                41.017259
              ],
              [
                29.079499,
                41.017743
              ],
              [
                29.07977,
                41.018143
              ],
              [
                29.080008,
                41.018592
              ],
              [
                29.080084,
                41.019039
              ],
              [
                29.079906,
                41.021013
              ],
              [
                29.080024,
                41.021573
              ],
              [
                29.080129,
                41.021989
              ],
              [
                29.080283,
                41.022335
              ],
              [
                29.080512,
                41.022715
              ],
              [
                29.080784,
                41.023066
              ],
              [
                29.081067,
                41.023361
              ],
              [
                29.08145,
                41.023616
              ],
              [
                29.082017,
                41.023873
              ],
              [
                29.082575,
                41.024075
              ],
              [
                29.08338,
                41.024233
              ],
              [
                29.08472,
                41.024449
              ],
              [
                29.087759,
                41.024941
              ],
              [
                29.089492,
                41.025204
              ],
              [
                29.090654,
                41.025398
              ],
              [
                29.093558,
                41.026111
              ],
              [
                29.093983,
                41.026192
              ],
              [
                29.094418,
                41.0262
              ],
              [
                29.094834,
                41.026165
              ],
              [
                29.096498,
                41.025927
              ],
              [
                29.097359,
                41.025798
              ],
              [
                29.098751,
                41.02558
              ],
              [
                29.105954,
                41.024484
              ],
              [
                29.108681,
                41.024079
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Üsküdar Station (M5)",
            "description": "M5 sürücüsüz metro hattının batı başlangıç terminali; Marmaray ve vapur hatlarına doğrudan yer altı ortak bilet holü aktarması.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.01278,
              41.025266
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Fıstıkağacı Station",
            "description": "M5 Metro İstasyonu (15 Aralık 2017). Cumhuriyet Caddesi ve İcadiye erişimi.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.028594,
              41.02805
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bağlarbaşı Station",
            "description": "M5 Metro İstasyonu (15 Aralık 2017). Bağlarbaşı Kültür Merkezi ve Nuhkuyusu Caddesi bağlantısı.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.03632,
              41.021762
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Altunizade Station",
            "description": "M5 Metro İstasyonu (15 Aralık 2017). Metrobüs hattına yeraltı tüneliyle doğrudan yoğun aktarma merkezi.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.048436,
              41.021774
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kısıklı Station",
            "description": "M5 Metro İstasyonu (15 Aralık 2017). Çamlıca Tepesi etekleri ve Büyük Çamlıca Camii erişimi.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.061928,
              41.022087
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bulgurlu Station",
            "description": "M5 Metro İstasyonu (15 Aralık 2017). Bulgurlu Mahallesi ve Libadiye Kavşağı bağlantısı.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.076417,
              41.016166
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ümraniye Station",
            "description": "M5 Metro İstasyonu (15 Aralık 2017). Ümraniye Santral Meydanı ve Alemdağ Caddesi çarşı merkezi.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.08472,
              41.024449
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Çarşı Station",
            "description": "M5 Metro İstasyonu (15 Aralık 2017). Ümraniye Çarşı ve gelecekteki M12 aktarması.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.097359,
              41.025798
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yamanevler Station",
            "description": "M5 hattının 1. aşama doğu nihai terminali (15 Aralık 2017). Alemdağ Caddesi ve Canpark AVM mevkii.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.108681,
              41.024079
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m5-yamanevler-cekmekoy-2018-10",
    "name": "M5: Yamanevler - Çekmeköy Section (Opening: 10-2018)",
    "date": {
      "year": 2018,
      "month": 10
    },
    "fileName": "m5_yamanevler_cekmekoy_2018_10.geojson",
    "color": "#683166",
    "visible": true,
    "isSample": true,
    "category": "M5 Metro Line",
    "description": "M5 Yamanevler - Çekmeköy Metro Uzatması (21 Ekim 2018). Çakmak, Ihlamurkuyu, Altınşehir, İmam Hatip Lisesi, Dudullu, Necip Fazıl ve Çekmeköy istasyonlarıyla M5 hattı 9,5 km daha uzatılarak 20 km uzunluğa ulaştı.",
    "placemarksCount": 8,
    "bounds": [
      [
        41.014462,
        29.108681
      ],
      [
        41.024079,
        29.189499
      ]
    ],
    "uploadedAt": "2018-10-21T06:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M5 Yamanevler - Çekmeköy Metro Hattı Ray Güzergahı",
            "description": "M5 Yamanevler - Çekmeköy arası çift hat delme tünel ray geometrisi (21 Ekim 2018)",
            "style": {
              "color": "#683166",
              "width": 5,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.108681,
                41.024079
              ],
              [
                29.110234,
                41.023832
              ],
              [
                29.111037,
                41.023645
              ],
              [
                29.11176,
                41.023447
              ],
              [
                29.114808,
                41.022569
              ],
              [
                29.116851,
                41.021938
              ],
              [
                29.118237,
                41.021495
              ],
              [
                29.119073,
                41.021248
              ],
              [
                29.120649,
                41.020822
              ],
              [
                29.121306,
                41.020672
              ],
              [
                29.122037,
                41.020608
              ],
              [
                29.122608,
                41.020629
              ],
              [
                29.12574,
                41.021092
              ],
              [
                29.126399,
                41.021114
              ],
              [
                29.127256,
                41.021032
              ],
              [
                29.127787,
                41.020924
              ],
              [
                29.128303,
                41.020762
              ],
              [
                29.129088,
                41.020427
              ],
              [
                29.130482,
                41.019691
              ],
              [
                29.134522,
                41.017417
              ],
              [
                29.135248,
                41.017133
              ],
              [
                29.136101,
                41.016847
              ],
              [
                29.13712,
                41.016656
              ],
              [
                29.140599,
                41.016485
              ],
              [
                29.143248,
                41.016329
              ],
              [
                29.150863,
                41.01594
              ],
              [
                29.151801,
                41.0159
              ],
              [
                29.152734,
                41.01585
              ],
              [
                29.159551,
                41.015403
              ],
              [
                29.161478,
                41.015272
              ],
              [
                29.161907,
                41.015242
              ],
              [
                29.162873,
                41.015206
              ],
              [
                29.163575,
                41.015181
              ],
              [
                29.165202,
                41.015143
              ],
              [
                29.165875,
                41.015189
              ],
              [
                29.17505,
                41.016662
              ],
              [
                29.175542,
                41.016753
              ],
              [
                29.176036,
                41.016753
              ],
              [
                29.176421,
                41.016733
              ],
              [
                29.176795,
                41.016709
              ],
              [
                29.177304,
                41.016642
              ],
              [
                29.177712,
                41.016539
              ],
              [
                29.179346,
                41.015983
              ],
              [
                29.180585,
                41.015548
              ],
              [
                29.1813,
                41.015359
              ],
              [
                29.181892,
                41.015256
              ],
              [
                29.182434,
                41.015191
              ],
              [
                29.183882,
                41.015042
              ],
              [
                29.184799,
                41.014968
              ],
              [
                29.186873,
                41.014733
              ],
              [
                29.188289,
                41.014586
              ],
              [
                29.189499,
                41.014462
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Çakmak Station",
            "description": "M5 Metro İstasyonu (21 Ekim 2018). Alemdağ Caddesi ve Çakmak Mahallesi mevkii.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.118237,
              41.021495
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ihlamurkuyu Station",
            "description": "M5 Metro İstasyonu (21 Ekim 2018). Ihlamurkuyu ve Tepeüstü yerleşimleri erişimi.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.130482,
              41.019691
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Altınşehir Station",
            "description": "M5 Metro İstasyonu (21 Ekim 2018). Altınşehir Mahallesi ve Alemdağ Caddesi bağlantısı.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.140599,
              41.016485
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İmam Hatip Lisesi Station",
            "description": "M5 Metro İstasyonu (21 Ekim 2018). Ümraniye Anadolu İmam Hatip Lisesi eğitim kampüsü erişimi.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.151801,
              41.0159
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Dudullu Station",
            "description": "M5 Metro İstasyonu (21 Ekim 2018). Dudullu Meydanı ve gelecekteki M8 Bostancı aktarması.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.162873,
              41.015206
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Necip Fazıl Station",
            "description": "M5 Metro İstasyonu (21 Ekim 2018). Metrogarden AVM ve Necip Fazıl Mahallesi bağlantısı.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.179346,
              41.015983
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Çekmeköy Station",
            "description": "M5 hattının 2. aşama doğu nihai terminali (21 Ekim 2018). Madenler Meydanı ve Şile Otoyolu otobüs aktarma merkezi.",
            "style": {
              "color": "#683166",
              "width": 3,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.189499,
              41.014462
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-marmaray-halkali-kazlicesme-2019-03",
    "name": "Marmaray: Halkalı - Kazlıçeşme Extension (Opening: 03-2019)",
    "date": {
      "year": 2019,
      "month": 3
    },
    "fileName": "marmaray-halkali-kazlicesme-2019-03.kml",
    "color": "#65656A",
    "visible": true,
    "isSample": true,
    "category": "Marmaray Commuter Line",
    "description": "Marmaray Avrupa Yakası Banliyö Etabı: Kazlıçeşme'den Zeytinburnu-Fişekhane, Bakırköy, Ataköy, Yeşilköy ve Küçükçekmece üzerinden Halkalı terminaline uzanan 19.4 km'lik banliyö demiryolu modernizasyonu (12 Mart 2019).",
    "placemarksCount": 12,
    "bounds": [
      [
        40.962,
        28.765
      ],
      [
        41.02,
        28.918
      ]
    ],
    "uploadedAt": "2019-03-12T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Marmaray Halkalı - Kazlıçeşme Ray Güzergahı",
            "description": "Marmaray Avrupa Yakası yüzey banliyö demiryolu hattı (12 Mart 2019).",
            "style": {
              "color": "#65656A",
              "width": 5,
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.916968,
                40.992745
              ],
              [
                28.915585,
                40.992931
              ],
              [
                28.915358,
                40.99296
              ],
              [
                28.91511,
                40.992984
              ],
              [
                28.914711,
                40.992998
              ],
              [
                28.914362,
                40.992985
              ],
              [
                28.914079,
                40.992964
              ],
              [
                28.913653,
                40.992906
              ],
              [
                28.913374,
                40.992848
              ],
              [
                28.913063,
                40.99276
              ],
              [
                28.912689,
                40.992629
              ],
              [
                28.912254,
                40.992439
              ],
              [
                28.911877,
                40.992227
              ],
              [
                28.911465,
                40.991971
              ],
              [
                28.91107,
                40.991637
              ],
              [
                28.910845,
                40.991436
              ],
              [
                28.910552,
                40.991136
              ],
              [
                28.909949,
                40.990436
              ],
              [
                28.909786,
                40.990243
              ],
              [
                28.909225,
                40.989573
              ],
              [
                28.908935,
                40.989208
              ],
              [
                28.908511,
                40.988695
              ],
              [
                28.908396,
                40.98856
              ],
              [
                28.908343,
                40.988503
              ],
              [
                28.907957,
                40.988044
              ],
              [
                28.9077,
                40.987773
              ],
              [
                28.907482,
                40.987581
              ],
              [
                28.906519,
                40.986877
              ],
              [
                28.905378,
                40.985936
              ],
              [
                28.904482,
                40.985203
              ],
              [
                28.904169,
                40.984928
              ],
              [
                28.903742,
                40.984566
              ],
              [
                28.903386,
                40.984279
              ],
              [
                28.902975,
                40.983976
              ],
              [
                28.90262,
                40.983742
              ],
              [
                28.902288,
                40.983559
              ],
              [
                28.90204,
                40.983434
              ],
              [
                28.901449,
                40.983186
              ],
              [
                28.901177,
                40.983093
              ],
              [
                28.9008,
                40.98298
              ],
              [
                28.900315,
                40.982849
              ],
              [
                28.899823,
                40.98272
              ],
              [
                28.89923,
                40.982556
              ],
              [
                28.899013,
                40.98251
              ],
              [
                28.89876,
                40.982457
              ],
              [
                28.898424,
                40.982411
              ],
              [
                28.898122,
                40.982414
              ],
              [
                28.897256,
                40.982443
              ],
              [
                28.895872,
                40.982472
              ],
              [
                28.89516,
                40.982483
              ],
              [
                28.893379,
                40.982455
              ],
              [
                28.893003,
                40.982457
              ],
              [
                28.8908,
                40.982508
              ],
              [
                28.890189,
                40.982499
              ],
              [
                28.88967,
                40.982491
              ],
              [
                28.885727,
                40.982442
              ],
              [
                28.885218,
                40.982433
              ],
              [
                28.884853,
                40.982409
              ],
              [
                28.884318,
                40.982343
              ],
              [
                28.883884,
                40.982262
              ],
              [
                28.883678,
                40.982209
              ],
              [
                28.883159,
                40.98212
              ],
              [
                28.882585,
                40.98204
              ],
              [
                28.881022,
                40.981803
              ],
              [
                28.879536,
                40.981547
              ],
              [
                28.878745,
                40.981416
              ],
              [
                28.875612,
                40.980892
              ],
              [
                28.875141,
                40.980818
              ],
              [
                28.873897,
                40.980678
              ],
              [
                28.872403,
                40.980441
              ],
              [
                28.870776,
                40.980184
              ],
              [
                28.870205,
                40.980085
              ],
              [
                28.869507,
                40.979986
              ],
              [
                28.868813,
                40.97988
              ],
              [
                28.868168,
                40.979835
              ],
              [
                28.863558,
                40.979972
              ],
              [
                28.863051,
                40.979993
              ],
              [
                28.860791,
                40.980081
              ],
              [
                28.8586,
                40.980178
              ],
              [
                28.858306,
                40.980187
              ],
              [
                28.857806,
                40.98021
              ],
              [
                28.856226,
                40.980295
              ],
              [
                28.85502,
                40.980327
              ],
              [
                28.854671,
                40.980327
              ],
              [
                28.854486,
                40.98033
              ],
              [
                28.853955,
                40.980343
              ],
              [
                28.853492,
                40.980342
              ],
              [
                28.853029,
                40.980333
              ],
              [
                28.85248,
                40.980298
              ],
              [
                28.851629,
                40.980212
              ],
              [
                28.850791,
                40.980072
              ],
              [
                28.850251,
                40.97995
              ],
              [
                28.849748,
                40.979796
              ],
              [
                28.848958,
                40.979542
              ],
              [
                28.848298,
                40.979295
              ],
              [
                28.847804,
                40.979084
              ],
              [
                28.847241,
                40.97883
              ],
              [
                28.84681,
                40.978608
              ],
              [
                28.846235,
                40.978283
              ],
              [
                28.845892,
                40.978063
              ],
              [
                28.845548,
                40.977846
              ],
              [
                28.84529,
                40.977663
              ],
              [
                28.844933,
                40.977378
              ],
              [
                28.84451,
                40.977011
              ],
              [
                28.843954,
                40.976545
              ],
              [
                28.843755,
                40.976321
              ],
              [
                28.843309,
                40.975813
              ],
              [
                28.842961,
                40.975338
              ],
              [
                28.842665,
                40.974903
              ],
              [
                28.842351,
                40.974354
              ],
              [
                28.840231,
                40.969885
              ],
              [
                28.840068,
                40.969532
              ],
              [
                28.839296,
                40.967752
              ],
              [
                28.839017,
                40.967282
              ],
              [
                28.838685,
                40.966853
              ],
              [
                28.83854,
                40.966656
              ],
              [
                28.838011,
                40.966208
              ],
              [
                28.837684,
                40.965933
              ],
              [
                28.83724,
                40.965549
              ],
              [
                28.836483,
                40.964886
              ],
              [
                28.835917,
                40.964374
              ],
              [
                28.835563,
                40.964165
              ],
              [
                28.835191,
                40.963969
              ],
              [
                28.834551,
                40.963664
              ],
              [
                28.833796,
                40.963361
              ],
              [
                28.833012,
                40.963094
              ],
              [
                28.832169,
                40.962841
              ],
              [
                28.831446,
                40.962671
              ],
              [
                28.830537,
                40.96252
              ],
              [
                28.830008,
                40.962455
              ],
              [
                28.829169,
                40.962396
              ],
              [
                28.828357,
                40.962394
              ],
              [
                28.827365,
                40.962485
              ],
              [
                28.827049,
                40.962517
              ],
              [
                28.82488,
                40.962733
              ],
              [
                28.823319,
                40.962861
              ],
              [
                28.822156,
                40.962895
              ],
              [
                28.821112,
                40.962969
              ],
              [
                28.819025,
                40.963143
              ],
              [
                28.818765,
                40.963168
              ],
              [
                28.817651,
                40.963274
              ],
              [
                28.817351,
                40.963301
              ],
              [
                28.809926,
                40.963959
              ],
              [
                28.806185,
                40.964279
              ],
              [
                28.803909,
                40.964473
              ],
              [
                28.80362,
                40.964498
              ],
              [
                28.802401,
                40.964594
              ],
              [
                28.802016,
                40.964636
              ],
              [
                28.801348,
                40.96476
              ],
              [
                28.800872,
                40.964892
              ],
              [
                28.800432,
                40.965041
              ],
              [
                28.799966,
                40.965245
              ],
              [
                28.799466,
                40.965515
              ],
              [
                28.79908,
                40.965765
              ],
              [
                28.798736,
                40.966073
              ],
              [
                28.797955,
                40.966924
              ],
              [
                28.797075,
                40.967869
              ],
              [
                28.796376,
                40.968604
              ],
              [
                28.795482,
                40.969498
              ],
              [
                28.795075,
                40.969823
              ],
              [
                28.794603,
                40.970163
              ],
              [
                28.794189,
                40.97045
              ],
              [
                28.793765,
                40.97071
              ],
              [
                28.793118,
                40.970996
              ],
              [
                28.792651,
                40.97116
              ],
              [
                28.792181,
                40.97132
              ],
              [
                28.791141,
                40.971673
              ],
              [
                28.790578,
                40.97189
              ],
              [
                28.789489,
                40.972347
              ],
              [
                28.789309,
                40.972416
              ],
              [
                28.787646,
                40.97297
              ],
              [
                28.786029,
                40.973502
              ],
              [
                28.78347,
                40.974252
              ],
              [
                28.780562,
                40.975175
              ],
              [
                28.778426,
                40.975839
              ],
              [
                28.778115,
                40.975949
              ],
              [
                28.777797,
                40.976065
              ],
              [
                28.777502,
                40.976202
              ],
              [
                28.777207,
                40.976356
              ],
              [
                28.776934,
                40.97651
              ],
              [
                28.776629,
                40.976732
              ],
              [
                28.776387,
                40.97693
              ],
              [
                28.77613,
                40.977174
              ],
              [
                28.775948,
                40.977377
              ],
              [
                28.775785,
                40.97761
              ],
              [
                28.77559,
                40.977955
              ],
              [
                28.775448,
                40.978275
              ],
              [
                28.775351,
                40.97859
              ],
              [
                28.775303,
                40.978955
              ],
              [
                28.775307,
                40.979329
              ],
              [
                28.775379,
                40.979829
              ],
              [
                28.77554,
                40.980298
              ],
              [
                28.776008,
                40.981259
              ],
              [
                28.776149,
                40.981621
              ],
              [
                28.776246,
                40.981988
              ],
              [
                28.776273,
                40.982547
              ],
              [
                28.776212,
                40.983008
              ],
              [
                28.776083,
                40.983374
              ],
              [
                28.775821,
                40.983876
              ],
              [
                28.775531,
                40.984265
              ],
              [
                28.774076,
                40.985805
              ],
              [
                28.773732,
                40.986212
              ],
              [
                28.773502,
                40.986624
              ],
              [
                28.773361,
                40.987003
              ],
              [
                28.77331,
                40.987183
              ],
              [
                28.773253,
                40.987531
              ],
              [
                28.773056,
                40.988549
              ],
              [
                28.772781,
                40.98953
              ],
              [
                28.772614,
                40.99005
              ],
              [
                28.772485,
                40.990349
              ],
              [
                28.77231,
                40.990676
              ],
              [
                28.772021,
                40.991141
              ],
              [
                28.771786,
                40.991447
              ],
              [
                28.771579,
                40.991684
              ],
              [
                28.771326,
                40.991929
              ],
              [
                28.769568,
                40.993491
              ],
              [
                28.769075,
                40.994036
              ],
              [
                28.768669,
                40.99456
              ],
              [
                28.76832,
                40.995123
              ],
              [
                28.76807,
                40.995601
              ],
              [
                28.76778,
                40.996498
              ],
              [
                28.767628,
                40.997127
              ],
              [
                28.767587,
                40.997684
              ],
              [
                28.767593,
                40.998305
              ],
              [
                28.767664,
                40.998891
              ],
              [
                28.767799,
                40.999451
              ],
              [
                28.76799,
                41.00003
              ],
              [
                28.76821,
                41.000462
              ],
              [
                28.76846,
                41.000938
              ],
              [
                28.768821,
                41.00142
              ],
              [
                28.769322,
                41.002016
              ],
              [
                28.769848,
                41.002497
              ],
              [
                28.770368,
                41.002934
              ],
              [
                28.771457,
                41.003645
              ],
              [
                28.77236,
                41.004234
              ],
              [
                28.772826,
                41.004597
              ],
              [
                28.773127,
                41.00487
              ],
              [
                28.773323,
                41.005099
              ],
              [
                28.773459,
                41.005298
              ],
              [
                28.773723,
                41.005696
              ],
              [
                28.773978,
                41.006139
              ],
              [
                28.774251,
                41.006673
              ],
              [
                28.774486,
                41.007181
              ],
              [
                28.774596,
                41.007463
              ],
              [
                28.774693,
                41.007786
              ],
              [
                28.774724,
                41.008185
              ],
              [
                28.77467,
                41.008671
              ],
              [
                28.774585,
                41.008983
              ],
              [
                28.774443,
                41.009307
              ],
              [
                28.774267,
                41.009624
              ],
              [
                28.774021,
                41.009947
              ],
              [
                28.773795,
                41.0102
              ],
              [
                28.773545,
                41.01043
              ],
              [
                28.773271,
                41.010644
              ],
              [
                28.773005,
                41.010811
              ],
              [
                28.772684,
                41.011013
              ],
              [
                28.77242,
                41.01113
              ],
              [
                28.772099,
                41.011263
              ],
              [
                28.771712,
                41.011399
              ],
              [
                28.771245,
                41.011507
              ],
              [
                28.770295,
                41.011681
              ],
              [
                28.769998,
                41.011733
              ],
              [
                28.769701,
                41.011795
              ],
              [
                28.769433,
                41.011863
              ],
              [
                28.769148,
                41.011956
              ],
              [
                28.768881,
                41.012065
              ],
              [
                28.768608,
                41.012198
              ],
              [
                28.768375,
                41.012331
              ],
              [
                28.76814,
                41.012478
              ],
              [
                28.767917,
                41.012641
              ],
              [
                28.767742,
                41.012787
              ],
              [
                28.767634,
                41.012886
              ],
              [
                28.767542,
                41.012976
              ],
              [
                28.767433,
                41.01309
              ],
              [
                28.767347,
                41.0132
              ],
              [
                28.767246,
                41.013337
              ],
              [
                28.7671,
                41.013578
              ],
              [
                28.766977,
                41.013828
              ],
              [
                28.766876,
                41.014095
              ],
              [
                28.766801,
                41.014364
              ],
              [
                28.766752,
                41.014647
              ],
              [
                28.766732,
                41.014868
              ],
              [
                28.766732,
                41.015388
              ],
              [
                28.766735,
                41.015915
              ],
              [
                28.766737,
                41.016005
              ],
              [
                28.766741,
                41.016403
              ],
              [
                28.766757,
                41.01658
              ],
              [
                28.766782,
                41.016714
              ],
              [
                28.766824,
                41.017013
              ],
              [
                28.766843,
                41.017202
              ],
              [
                28.766844,
                41.017371
              ],
              [
                28.766852,
                41.018438
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Zeytinburnu-Fişekhane Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving historic Fişekhane cultural center and Zeytinburnu coast.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.905378,
              40.985936
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yenimahalle Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Bakırköy Yenimahalle residential area.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.881022,
              40.981803
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bakırköy Station",
            "description": "Major Marmaray express and commuter station opened on 12 March 2019 (03-2019). Transfer to M3 Bakırköy Sahil metro line, YHT high-speed trains, and IDO ferries.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.872403,
              40.980441
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ataköy Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Transfer to M9 Ataköy - Olimpiyat metro line and Ataköy residential neighborhood.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.856226,
              40.980295
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yeşilyurt Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving historic Yeşilyurt neighborhood and coastal park.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.83724,
              40.965549
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yeşilköy Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving historic Yeşilköy center and marina.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.82488,
              40.962733
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Florya Akvaryum Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Istanbul Aquarium and Aqua Florya Mall.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.797075,
              40.967869
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Florya Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving historic Atatürk Marine Mansion and Florya Forest.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.787646,
              40.97297
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Küçükçekmece Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Transfer to Metrobüs at Küçükçekmece lake shore.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.773056,
              40.988549
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Mustafa Kemal Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Küçükçekmece Mehmet Akif Ersoy Hospital and Mustafa Kemal neighborhood.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.773978,
              41.006139
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Halkalı Station",
            "description": "Western terminus of Marmaray opened on 12 March 2019 (03-2019). Major multimodal interchange connecting with YHT high-speed trains, regional rail, and international services.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.766852,
              41.018438
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-marmaray-ayrilik-cesmesi-gebze-2019-03",
    "name": "Marmaray: Ayrılık Çeşmesi - Gebze Extension (Opening: 03-2019)",
    "date": {
      "year": 2019,
      "month": 3
    },
    "fileName": "marmaray-ayrilik-cesmesi-gebze-2019-03.kml",
    "color": "#65656A",
    "visible": true,
    "isSample": true,
    "category": "Marmaray Commuter Line",
    "description": "Marmaray Anadolu Yakası Banliyö Etabı: Ayrılık Çeşmesi'nden Söğütlüçeşme, Bostancı, Maltepe, Kartal, Pendik ve Tuzla üzerinden Gebze'ye uzanan 43.6 km'lik 3 hatlı banliyö demiryolu modernizasyonu (12 Mart 2019).",
    "placemarksCount": 28,
    "bounds": [
      [
        40.78,
        29.028
      ],
      [
        41.002,
        29.412
      ]
    ],
    "uploadedAt": "2019-03-12T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Marmaray Ayrılık Çeşmesi - Gebze Ray Güzergahı",
            "description": "Marmaray Anadolu Yakası elektrifikasyonlu 3 hatlı banliyö ve YHT demiryolu hattı (12 Mart 2019).",
            "style": {
              "color": "#65656A",
              "width": 5,
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.030266,
                41.000277
              ],
              [
                29.030001,
                40.999513
              ],
              [
                29.029951,
                40.999339
              ],
              [
                29.029886,
                40.998956
              ],
              [
                29.029867,
                40.998646
              ],
              [
                29.029874,
                40.998473
              ],
              [
                29.029883,
                40.998386
              ],
              [
                29.029893,
                40.99832
              ],
              [
                29.029898,
                40.998288
              ],
              [
                29.029911,
                40.998211
              ],
              [
                29.029922,
                40.998159
              ],
              [
                29.029933,
                40.998106
              ],
              [
                29.029944,
                40.998064
              ],
              [
                29.029955,
                40.998023
              ],
              [
                29.029971,
                40.997973
              ],
              [
                29.029986,
                40.99793
              ],
              [
                29.029999,
                40.997892
              ],
              [
                29.030025,
                40.997826
              ],
              [
                29.030048,
                40.997762
              ],
              [
                29.030079,
                40.997687
              ],
              [
                29.03012,
                40.997602
              ],
              [
                29.03015,
                40.997544
              ],
              [
                29.030176,
                40.997497
              ],
              [
                29.030199,
                40.997456
              ],
              [
                29.030244,
                40.99738
              ],
              [
                29.03029,
                40.997307
              ],
              [
                29.030346,
                40.997219
              ],
              [
                29.030393,
                40.997149
              ],
              [
                29.030442,
                40.99708
              ],
              [
                29.030865,
                40.996505
              ],
              [
                29.031206,
                40.996044
              ],
              [
                29.031371,
                40.99582
              ],
              [
                29.031807,
                40.995219
              ],
              [
                29.031991,
                40.994958
              ],
              [
                29.032123,
                40.99478
              ],
              [
                29.032177,
                40.99471
              ],
              [
                29.032236,
                40.994639
              ],
              [
                29.032289,
                40.99458
              ],
              [
                29.032345,
                40.994521
              ],
              [
                29.032419,
                40.994447
              ],
              [
                29.032488,
                40.994379
              ],
              [
                29.03253,
                40.994341
              ],
              [
                29.03259,
                40.994288
              ],
              [
                29.03266,
                40.994231
              ],
              [
                29.032736,
                40.994172
              ],
              [
                29.032787,
                40.994136
              ],
              [
                29.032839,
                40.994101
              ],
              [
                29.032891,
                40.994067
              ],
              [
                29.032945,
                40.994033
              ],
              [
                29.032992,
                40.994005
              ],
              [
                29.033051,
                40.99397
              ],
              [
                29.033113,
                40.993934
              ],
              [
                29.033157,
                40.993909
              ],
              [
                29.033192,
                40.99389
              ],
              [
                29.03369,
                40.993626
              ],
              [
                29.033868,
                40.993534
              ],
              [
                29.03396,
                40.993486
              ],
              [
                29.034041,
                40.993441
              ],
              [
                29.034167,
                40.993371
              ],
              [
                29.034248,
                40.993325
              ],
              [
                29.034343,
                40.993273
              ],
              [
                29.034528,
                40.993173
              ],
              [
                29.034647,
                40.993109
              ],
              [
                29.034752,
                40.993053
              ],
              [
                29.034841,
                40.993007
              ],
              [
                29.034909,
                40.992973
              ],
              [
                29.03499,
                40.992935
              ],
              [
                29.035037,
                40.992914
              ],
              [
                29.035089,
                40.992891
              ],
              [
                29.035144,
                40.992868
              ],
              [
                29.035218,
                40.992841
              ],
              [
                29.035306,
                40.992808
              ],
              [
                29.035403,
                40.992772
              ],
              [
                29.035487,
                40.992739
              ],
              [
                29.035567,
                40.992706
              ],
              [
                29.035657,
                40.992667
              ],
              [
                29.03575,
                40.992626
              ],
              [
                29.035866,
                40.992573
              ],
              [
                29.035959,
                40.992527
              ],
              [
                29.036061,
                40.992474
              ],
              [
                29.036175,
                40.992412
              ],
              [
                29.036289,
                40.992346
              ],
              [
                29.036405,
                40.992275
              ],
              [
                29.036531,
                40.992193
              ],
              [
                29.036627,
                40.992128
              ],
              [
                29.036744,
                40.992046
              ],
              [
                29.036868,
                40.991953
              ],
              [
                29.037004,
                40.991847
              ],
              [
                29.037098,
                40.991768
              ],
              [
                29.037175,
                40.991697
              ],
              [
                29.037271,
                40.991609
              ],
              [
                29.037371,
                40.991517
              ],
              [
                29.037481,
                40.991409
              ],
              [
                29.037596,
                40.991292
              ],
              [
                29.03769,
                40.991193
              ],
              [
                29.037784,
                40.991092
              ],
              [
                29.037875,
                40.99099
              ],
              [
                29.037982,
                40.990867
              ],
              [
                29.038083,
                40.990749
              ],
              [
                29.038194,
                40.990616
              ],
              [
                29.038328,
                40.990453
              ],
              [
                29.038733,
                40.989967
              ],
              [
                29.038782,
                40.989908
              ],
              [
                29.038828,
                40.989851
              ],
              [
                29.038899,
                40.989761
              ],
              [
                29.038951,
                40.989695
              ],
              [
                29.038994,
                40.989637
              ],
              [
                29.03903,
                40.989589
              ],
              [
                29.039094,
                40.989503
              ],
              [
                29.039151,
                40.989422
              ],
              [
                29.039189,
                40.989369
              ],
              [
                29.039287,
                40.989234
              ],
              [
                29.039399,
                40.989081
              ],
              [
                29.039467,
                40.988991
              ],
              [
                29.039583,
                40.988838
              ],
              [
                29.039676,
                40.98872
              ],
              [
                29.039847,
                40.9885
              ],
              [
                29.040011,
                40.988291
              ],
              [
                29.04026,
                40.987978
              ],
              [
                29.040414,
                40.987788
              ],
              [
                29.041118,
                40.986937
              ],
              [
                29.041221,
                40.986813
              ],
              [
                29.041359,
                40.986643
              ],
              [
                29.041419,
                40.986565
              ],
              [
                29.041532,
                40.986413
              ],
              [
                29.041593,
                40.986322
              ],
              [
                29.041652,
                40.986234
              ],
              [
                29.041722,
                40.986122
              ],
              [
                29.041778,
                40.986027
              ],
              [
                29.041835,
                40.985926
              ],
              [
                29.041866,
                40.985865
              ],
              [
                29.041912,
                40.985765
              ],
              [
                29.041951,
                40.985676
              ],
              [
                29.041983,
                40.985597
              ],
              [
                29.042014,
                40.985518
              ],
              [
                29.042048,
                40.985426
              ],
              [
                29.04211,
                40.985251
              ],
              [
                29.042571,
                40.983952
              ],
              [
                29.04261,
                40.98384
              ],
              [
                29.042875,
                40.983092
              ],
              [
                29.043155,
                40.982287
              ],
              [
                29.043178,
                40.982224
              ],
              [
                29.043198,
                40.982171
              ],
              [
                29.043237,
                40.982084
              ],
              [
                29.043267,
                40.982022
              ],
              [
                29.043312,
                40.981936
              ],
              [
                29.043355,
                40.981859
              ],
              [
                29.043395,
                40.981791
              ],
              [
                29.043431,
                40.981735
              ],
              [
                29.043482,
                40.981666
              ],
              [
                29.043529,
                40.981603
              ],
              [
                29.043584,
                40.981533
              ],
              [
                29.043633,
                40.981476
              ],
              [
                29.043679,
                40.981423
              ],
              [
                29.043716,
                40.981385
              ],
              [
                29.043769,
                40.981331
              ],
              [
                29.043819,
                40.981281
              ],
              [
                29.043876,
                40.981231
              ],
              [
                29.043951,
                40.981168
              ],
              [
                29.044012,
                40.981117
              ],
              [
                29.044071,
                40.981071
              ],
              [
                29.044134,
                40.981023
              ],
              [
                29.044197,
                40.980978
              ],
              [
                29.044311,
                40.980903
              ],
              [
                29.044387,
                40.980856
              ],
              [
                29.044492,
                40.980795
              ],
              [
                29.044566,
                40.980755
              ],
              [
                29.044681,
                40.980697
              ],
              [
                29.044763,
                40.980659
              ],
              [
                29.044851,
                40.980618
              ],
              [
                29.045202,
                40.980462
              ],
              [
                29.045375,
                40.980386
              ],
              [
                29.046738,
                40.979771
              ],
              [
                29.046926,
                40.979688
              ],
              [
                29.047102,
                40.97961
              ],
              [
                29.047245,
                40.979549
              ],
              [
                29.047413,
                40.979478
              ],
              [
                29.047739,
                40.97934
              ],
              [
                29.048212,
                40.97914
              ],
              [
                29.048598,
                40.978977
              ],
              [
                29.048773,
                40.9789
              ],
              [
                29.048891,
                40.978848
              ],
              [
                29.049072,
                40.978766
              ],
              [
                29.049207,
                40.978704
              ],
              [
                29.049422,
                40.978606
              ],
              [
                29.049903,
                40.978379
              ],
              [
                29.050113,
                40.97828
              ],
              [
                29.050267,
                40.978209
              ],
              [
                29.050372,
                40.978163
              ],
              [
                29.05042,
                40.978143
              ],
              [
                29.050477,
                40.978119
              ],
              [
                29.050548,
                40.978091
              ],
              [
                29.05063,
                40.97806
              ],
              [
                29.05071,
                40.978032
              ],
              [
                29.050775,
                40.978009
              ],
              [
                29.050843,
                40.977987
              ],
              [
                29.050916,
                40.977965
              ],
              [
                29.050985,
                40.977946
              ],
              [
                29.051093,
                40.977918
              ],
              [
                29.051197,
                40.977893
              ],
              [
                29.051299,
                40.977871
              ],
              [
                29.051418,
                40.977848
              ],
              [
                29.051523,
                40.977831
              ],
              [
                29.051672,
                40.977812
              ],
              [
                29.051781,
                40.977799
              ],
              [
                29.051885,
                40.977791
              ],
              [
                29.052004,
                40.977783
              ],
              [
                29.052124,
                40.977776
              ],
              [
                29.052291,
                40.977768
              ],
              [
                29.052452,
                40.97776
              ],
              [
                29.05261,
                40.977753
              ],
              [
                29.052771,
                40.977748
              ],
              [
                29.052945,
                40.977747
              ],
              [
                29.053067,
                40.977749
              ],
              [
                29.053191,
                40.977754
              ],
              [
                29.053307,
                40.977763
              ],
              [
                29.053425,
                40.977775
              ],
              [
                29.053542,
                40.977789
              ],
              [
                29.053662,
                40.977804
              ],
              [
                29.053801,
                40.977824
              ],
              [
                29.060095,
                40.978811
              ],
              [
                29.060238,
                40.978834
              ],
              [
                29.06037,
                40.978858
              ],
              [
                29.060497,
                40.97888
              ],
              [
                29.061039,
                40.978982
              ],
              [
                29.061394,
                40.979049
              ],
              [
                29.06218,
                40.979196
              ],
              [
                29.062276,
                40.979214
              ],
              [
                29.062364,
                40.979229
              ],
              [
                29.062604,
                40.979269
              ],
              [
                29.062849,
                40.979306
              ],
              [
                29.063127,
                40.979346
              ],
              [
                29.063364,
                40.979379
              ],
              [
                29.063628,
                40.979416
              ],
              [
                29.063907,
                40.979455
              ],
              [
                29.06405,
                40.979473
              ],
              [
                29.064175,
                40.979488
              ],
              [
                29.064299,
                40.979501
              ],
              [
                29.06441,
                40.979509
              ],
              [
                29.064488,
                40.979513
              ],
              [
                29.064566,
                40.979516
              ],
              [
                29.064686,
                40.979518
              ],
              [
                29.064802,
                40.979517
              ],
              [
                29.064936,
                40.979512
              ],
              [
                29.065038,
                40.979507
              ],
              [
                29.065152,
                40.979498
              ],
              [
                29.065331,
                40.979479
              ],
              [
                29.065433,
                40.979466
              ],
              [
                29.065542,
                40.97945
              ],
              [
                29.065656,
                40.979432
              ],
              [
                29.065791,
                40.979407
              ],
              [
                29.065903,
                40.979384
              ],
              [
                29.066017,
                40.979358
              ],
              [
                29.066139,
                40.979327
              ],
              [
                29.066258,
                40.979295
              ],
              [
                29.066373,
                40.979262
              ],
              [
                29.066473,
                40.979232
              ],
              [
                29.066601,
                40.979192
              ],
              [
                29.066728,
                40.97915
              ],
              [
                29.066794,
                40.979127
              ],
              [
                29.066878,
                40.979095
              ],
              [
                29.066982,
                40.979051
              ],
              [
                29.067072,
                40.979011
              ],
              [
                29.067204,
                40.97895
              ],
              [
                29.06732,
                40.978894
              ],
              [
                29.067406,
                40.97885
              ],
              [
                29.067472,
                40.978815
              ],
              [
                29.067544,
                40.978774
              ],
              [
                29.067635,
                40.978722
              ],
              [
                29.067792,
                40.978628
              ],
              [
                29.06794,
                40.978537
              ],
              [
                29.068092,
                40.97844
              ],
              [
                29.068226,
                40.978347
              ],
              [
                29.068746,
                40.977989
              ],
              [
                29.06973,
                40.977303
              ],
              [
                29.06998,
                40.97713
              ],
              [
                29.070406,
                40.976845
              ],
              [
                29.070996,
                40.97645
              ],
              [
                29.071179,
                40.976327
              ],
              [
                29.071518,
                40.976095
              ],
              [
                29.072051,
                40.975718
              ],
              [
                29.07231,
                40.975538
              ],
              [
                29.074621,
                40.973966
              ],
              [
                29.074755,
                40.973873
              ],
              [
                29.075,
                40.973704
              ],
              [
                29.075094,
                40.973638
              ],
              [
                29.075182,
                40.973574
              ],
              [
                29.075288,
                40.973493
              ],
              [
                29.075354,
                40.973438
              ],
              [
                29.075447,
                40.973354
              ],
              [
                29.075525,
                40.97328
              ],
              [
                29.075601,
                40.973202
              ],
              [
                29.075671,
                40.973121
              ],
              [
                29.075746,
                40.97303
              ],
              [
                29.075832,
                40.972913
              ],
              [
                29.075874,
                40.972851
              ],
              [
                29.075913,
                40.972792
              ],
              [
                29.075958,
                40.972719
              ],
              [
                29.076003,
                40.972637
              ],
              [
                29.076067,
                40.97252
              ],
              [
                29.076198,
                40.972256
              ],
              [
                29.076299,
                40.972049
              ],
              [
                29.076334,
                40.971975
              ],
              [
                29.076373,
                40.971887
              ],
              [
                29.076417,
                40.971793
              ],
              [
                29.07646,
                40.971687
              ],
              [
                29.076621,
                40.971293
              ],
              [
                29.076808,
                40.970826
              ],
              [
                29.0769,
                40.970585
              ],
              [
                29.076991,
                40.970345
              ],
              [
                29.077187,
                40.969828
              ],
              [
                29.077258,
                40.969636
              ],
              [
                29.077306,
                40.969514
              ],
              [
                29.077345,
                40.969417
              ],
              [
                29.077388,
                40.969316
              ],
              [
                29.077455,
                40.96917
              ],
              [
                29.077476,
                40.969125
              ],
              [
                29.077499,
                40.969079
              ],
              [
                29.077524,
                40.969031
              ],
              [
                29.07756,
                40.968965
              ],
              [
                29.077616,
                40.968868
              ],
              [
                29.077688,
                40.968748
              ],
              [
                29.077754,
                40.968642
              ],
              [
                29.077808,
                40.968557
              ],
              [
                29.07786,
                40.968478
              ],
              [
                29.077944,
                40.968363
              ],
              [
                29.078206,
                40.967995
              ],
              [
                29.078517,
                40.967557
              ],
              [
                29.078659,
                40.967354
              ],
              [
                29.078726,
                40.967253
              ],
              [
                29.078788,
                40.967151
              ],
              [
                29.078836,
                40.967068
              ],
              [
                29.078866,
                40.96701
              ],
              [
                29.0789,
                40.966945
              ],
              [
                29.078925,
                40.966894
              ],
              [
                29.07896,
                40.966818
              ],
              [
                29.078992,
                40.966738
              ],
              [
                29.079013,
                40.966677
              ],
              [
                29.079037,
                40.966597
              ],
              [
                29.079054,
                40.966531
              ],
              [
                29.079071,
                40.966459
              ],
              [
                29.079086,
                40.966384
              ],
              [
                29.079097,
                40.9663
              ],
              [
                29.079105,
                40.966223
              ],
              [
                29.079109,
                40.966143
              ],
              [
                29.079113,
                40.96604
              ],
              [
                29.079111,
                40.965953
              ],
              [
                29.079106,
                40.965868
              ],
              [
                29.079097,
                40.965776
              ],
              [
                29.079089,
                40.965705
              ],
              [
                29.07908,
                40.965648
              ],
              [
                29.079068,
                40.965589
              ],
              [
                29.079052,
                40.965516
              ],
              [
                29.079034,
                40.965439
              ],
              [
                29.079012,
                40.965356
              ],
              [
                29.078945,
                40.965085
              ],
              [
                29.078924,
                40.965007
              ],
              [
                29.078885,
                40.964857
              ],
              [
                29.078844,
                40.964712
              ],
              [
                29.078797,
                40.96455
              ],
              [
                29.078742,
                40.964339
              ],
              [
                29.078701,
                40.964174
              ],
              [
                29.078685,
                40.964108
              ],
              [
                29.078668,
                40.964038
              ],
              [
                29.078657,
                40.963981
              ],
              [
                29.078647,
                40.96392
              ],
              [
                29.078641,
                40.963872
              ],
              [
                29.078634,
                40.963785
              ],
              [
                29.078632,
                40.963683
              ],
              [
                29.078633,
                40.963581
              ],
              [
                29.078639,
                40.963483
              ],
              [
                29.07865,
                40.963391
              ],
              [
                29.07867,
                40.96327
              ],
              [
                29.078714,
                40.963083
              ],
              [
                29.078743,
                40.96299
              ],
              [
                29.078778,
                40.962892
              ],
              [
                29.078826,
                40.962776
              ],
              [
                29.078876,
                40.962672
              ],
              [
                29.078913,
                40.962604
              ],
              [
                29.078987,
                40.962482
              ],
              [
                29.079058,
                40.962376
              ],
              [
                29.079086,
                40.962337
              ],
              [
                29.079128,
                40.962282
              ],
              [
                29.079186,
                40.962212
              ],
              [
                29.079241,
                40.962149
              ],
              [
                29.079292,
                40.962095
              ],
              [
                29.079325,
                40.96206
              ],
              [
                29.079376,
                40.962009
              ],
              [
                29.079432,
                40.961957
              ],
              [
                29.079493,
                40.961902
              ],
              [
                29.079574,
                40.961834
              ],
              [
                29.079669,
                40.961759
              ],
              [
                29.07973,
                40.961711
              ],
              [
                29.079813,
                40.961653
              ],
              [
                29.079915,
                40.961585
              ],
              [
                29.079982,
                40.961544
              ],
              [
                29.080074,
                40.96149
              ],
              [
                29.080159,
                40.961445
              ],
              [
                29.080254,
                40.961396
              ],
              [
                29.080334,
                40.961358
              ],
              [
                29.08042,
                40.96132
              ],
              [
                29.08055,
                40.961265
              ],
              [
                29.080658,
                40.961224
              ],
              [
                29.080773,
                40.961184
              ],
              [
                29.08088,
                40.96115
              ],
              [
                29.080944,
                40.961131
              ],
              [
                29.081026,
                40.961108
              ],
              [
                29.081105,
                40.961087
              ],
              [
                29.081194,
                40.961066
              ],
              [
                29.081304,
                40.961043
              ],
              [
                29.081394,
                40.961025
              ],
              [
                29.081529,
                40.961002
              ],
              [
                29.082149,
                40.960898
              ],
              [
                29.082847,
                40.96079
              ],
              [
                29.08365,
                40.96067
              ],
              [
                29.08401,
                40.960613
              ],
              [
                29.084246,
                40.960575
              ],
              [
                29.084445,
                40.960541
              ],
              [
                29.084618,
                40.96051
              ],
              [
                29.084839,
                40.96047
              ],
              [
                29.085045,
                40.960431
              ],
              [
                29.085293,
                40.960384
              ],
              [
                29.085482,
                40.960346
              ],
              [
                29.086039,
                40.960235
              ],
              [
                29.086287,
                40.960189
              ],
              [
                29.086549,
                40.960142
              ],
              [
                29.08717,
                40.960034
              ],
              [
                29.087528,
                40.959972
              ],
              [
                29.087701,
                40.959943
              ],
              [
                29.087866,
                40.959913
              ],
              [
                29.087964,
                40.959893
              ],
              [
                29.0881,
                40.959862
              ],
              [
                29.088232,
                40.959828
              ],
              [
                29.088317,
                40.959805
              ],
              [
                29.088417,
                40.959775
              ],
              [
                29.088497,
                40.959749
              ],
              [
                29.08859,
                40.959716
              ],
              [
                29.08869,
                40.959679
              ],
              [
                29.088777,
                40.959643
              ],
              [
                29.088863,
                40.959606
              ],
              [
                29.088966,
                40.959559
              ],
              [
                29.089019,
                40.959533
              ],
              [
                29.089104,
                40.959488
              ],
              [
                29.089225,
                40.959421
              ],
              [
                29.089296,
                40.959378
              ],
              [
                29.089362,
                40.959337
              ],
              [
                29.089439,
                40.959286
              ],
              [
                29.089509,
                40.959237
              ],
              [
                29.089584,
                40.959182
              ],
              [
                29.089651,
                40.959131
              ],
              [
                29.089738,
                40.95906
              ],
              [
                29.089837,
                40.958973
              ],
              [
                29.089925,
                40.958887
              ],
              [
                29.089969,
                40.958843
              ],
              [
                29.09001,
                40.958799
              ],
              [
                29.090066,
                40.958737
              ],
              [
                29.090116,
                40.958678
              ],
              [
                29.090194,
                40.95858
              ],
              [
                29.090243,
                40.958512
              ],
              [
                29.0903,
                40.958425
              ],
              [
                29.090357,
                40.958335
              ],
              [
                29.090394,
                40.958272
              ],
              [
                29.090417,
                40.958228
              ],
              [
                29.090464,
                40.958133
              ],
              [
                29.090496,
                40.958057
              ],
              [
                29.090532,
                40.957963
              ],
              [
                29.09057,
                40.957854
              ],
              [
                29.09061,
                40.957726
              ],
              [
                29.090648,
                40.957598
              ],
              [
                29.090942,
                40.956551
              ],
              [
                29.090962,
                40.95648
              ],
              [
                29.090988,
                40.956402
              ],
              [
                29.091014,
                40.956331
              ],
              [
                29.09104,
                40.956267
              ],
              [
                29.091072,
                40.956194
              ],
              [
                29.091105,
                40.95613
              ],
              [
                29.091138,
                40.956063
              ],
              [
                29.091175,
                40.955998
              ],
              [
                29.09122,
                40.955921
              ],
              [
                29.091262,
                40.955856
              ],
              [
                29.0913,
                40.9558
              ],
              [
                29.09134,
                40.955746
              ],
              [
                29.091386,
                40.955686
              ],
              [
                29.091439,
                40.955622
              ],
              [
                29.091493,
                40.95556
              ],
              [
                29.09154,
                40.95551
              ],
              [
                29.091609,
                40.95544
              ],
              [
                29.091693,
                40.955361
              ],
              [
                29.09176,
                40.955303
              ],
              [
                29.091836,
                40.95524
              ],
              [
                29.091927,
                40.955169
              ],
              [
                29.092003,
                40.955112
              ],
              [
                29.092081,
                40.955057
              ],
              [
                29.092164,
                40.955003
              ],
              [
                29.092236,
                40.954958
              ],
              [
                29.092303,
                40.95492
              ],
              [
                29.092385,
                40.954874
              ],
              [
                29.092469,
                40.954831
              ],
              [
                29.092553,
                40.954789
              ],
              [
                29.092643,
                40.954748
              ],
              [
                29.092719,
                40.954714
              ],
              [
                29.092808,
                40.954677
              ],
              [
                29.092878,
                40.95465
              ],
              [
                29.092935,
                40.954628
              ],
              [
                29.092992,
                40.954608
              ],
              [
                29.09307,
                40.954582
              ],
              [
                29.093253,
                40.954521
              ],
              [
                29.093337,
                40.954493
              ],
              [
                29.094922,
                40.953987
              ],
              [
                29.096058,
                40.953631
              ],
              [
                29.096111,
                40.953614
              ],
              [
                29.096182,
                40.95359
              ],
              [
                29.096274,
                40.953558
              ],
              [
                29.09639,
                40.953515
              ],
              [
                29.096486,
                40.953478
              ],
              [
                29.096557,
                40.953449
              ],
              [
                29.096627,
                40.953418
              ],
              [
                29.096722,
                40.953374
              ],
              [
                29.09682,
                40.953326
              ],
              [
                29.096886,
                40.953291
              ],
              [
                29.096949,
                40.953257
              ],
              [
                29.097014,
                40.953221
              ],
              [
                29.097076,
                40.953185
              ],
              [
                29.097138,
                40.953147
              ],
              [
                29.09721,
                40.953102
              ],
              [
                29.09731,
                40.953036
              ],
              [
                29.097427,
                40.952951
              ],
              [
                29.097524,
                40.952876
              ],
              [
                29.097605,
                40.952808
              ],
              [
                29.097714,
                40.952711
              ],
              [
                29.097801,
                40.952627
              ],
              [
                29.097885,
                40.952538
              ],
              [
                29.097959,
                40.952454
              ],
              [
                29.09804,
                40.952362
              ],
              [
                29.098115,
                40.95227
              ],
              [
                29.098315,
                40.952018
              ],
              [
                29.098442,
                40.951858
              ],
              [
                29.098713,
                40.951522
              ],
              [
                29.10086,
                40.948825
              ],
              [
                29.100923,
                40.948748
              ],
              [
                29.100984,
                40.948676
              ],
              [
                29.101046,
                40.948605
              ],
              [
                29.101179,
                40.948459
              ],
              [
                29.101228,
                40.948407
              ],
              [
                29.10128,
                40.948354
              ],
              [
                29.101333,
                40.948301
              ],
              [
                29.101611,
                40.948035
              ],
              [
                29.102391,
                40.947285
              ],
              [
                29.102812,
                40.946929
              ],
              [
                29.103325,
                40.946657
              ],
              [
                29.10389,
                40.946445
              ],
              [
                29.104467,
                40.946317
              ],
              [
                29.104773,
                40.94628
              ],
              [
                29.105076,
                40.946274
              ],
              [
                29.105366,
                40.946273
              ],
              [
                29.107162,
                40.946319
              ],
              [
                29.108239,
                40.946349
              ],
              [
                29.10871,
                40.946327
              ],
              [
                29.109009,
                40.946298
              ],
              [
                29.109328,
                40.946251
              ],
              [
                29.109644,
                40.946191
              ],
              [
                29.110247,
                40.945998
              ],
              [
                29.110793,
                40.945724
              ],
              [
                29.111255,
                40.945387
              ],
              [
                29.111657,
                40.945004
              ],
              [
                29.111959,
                40.94456
              ],
              [
                29.112107,
                40.944199
              ],
              [
                29.11219,
                40.943835
              ],
              [
                29.112215,
                40.943358
              ],
              [
                29.112054,
                40.941887
              ],
              [
                29.112027,
                40.941409
              ],
              [
                29.112056,
                40.941144
              ],
              [
                29.112185,
                40.940675
              ],
              [
                29.11241,
                40.94021
              ],
              [
                29.112719,
                40.939775
              ],
              [
                29.112981,
                40.939451
              ],
              [
                29.113545,
                40.938808
              ],
              [
                29.114319,
                40.937876
              ],
              [
                29.115111,
                40.936861
              ],
              [
                29.115526,
                40.936312
              ],
              [
                29.117645,
                40.933671
              ],
              [
                29.1184,
                40.932769
              ],
              [
                29.119205,
                40.93188
              ],
              [
                29.12268,
                40.928422
              ],
              [
                29.123349,
                40.927778
              ],
              [
                29.124341,
                40.926831
              ],
              [
                29.125199,
                40.925924
              ],
              [
                29.125885,
                40.925199
              ],
              [
                29.126479,
                40.924618
              ],
              [
                29.127277,
                40.923822
              ],
              [
                29.127379,
                40.923725
              ],
              [
                29.127699,
                40.923441
              ],
              [
                29.127976,
                40.923224
              ],
              [
                29.128303,
                40.92302
              ],
              [
                29.128629,
                40.922826
              ],
              [
                29.128946,
                40.922667
              ],
              [
                29.129278,
                40.922521
              ],
              [
                29.130298,
                40.922088
              ],
              [
                29.130997,
                40.921792
              ],
              [
                29.131495,
                40.92158
              ],
              [
                29.132254,
                40.921289
              ],
              [
                29.133337,
                40.920884
              ],
              [
                29.135089,
                40.920167
              ],
              [
                29.138032,
                40.918875
              ],
              [
                29.139888,
                40.918041
              ],
              [
                29.141879,
                40.917186
              ],
              [
                29.148807,
                40.914259
              ],
              [
                29.148988,
                40.914181
              ],
              [
                29.152211,
                40.912816
              ],
              [
                29.153101,
                40.912408
              ],
              [
                29.15359,
                40.912196
              ],
              [
                29.154112,
                40.911935
              ],
              [
                29.154594,
                40.911626
              ],
              [
                29.155071,
                40.911258
              ],
              [
                29.155448,
                40.910937
              ],
              [
                29.15568,
                40.910674
              ],
              [
                29.156175,
                40.910029
              ],
              [
                29.156903,
                40.908972
              ],
              [
                29.157289,
                40.908471
              ],
              [
                29.157585,
                40.908208
              ],
              [
                29.157881,
                40.907995
              ],
              [
                29.162515,
                40.904934
              ],
              [
                29.162975,
                40.90459
              ],
              [
                29.163711,
                40.903939
              ],
              [
                29.164439,
                40.90328
              ],
              [
                29.165692,
                40.902138
              ],
              [
                29.166542,
                40.901307
              ],
              [
                29.166774,
                40.901059
              ],
              [
                29.16782,
                40.900027
              ],
              [
                29.168119,
                40.899769
              ],
              [
                29.168395,
                40.89956
              ],
              [
                29.169274,
                40.898841
              ],
              [
                29.169835,
                40.89839
              ],
              [
                29.170888,
                40.897453
              ],
              [
                29.171363,
                40.897103
              ],
              [
                29.1727,
                40.896248
              ],
              [
                29.173185,
                40.895914
              ],
              [
                29.173677,
                40.895515
              ],
              [
                29.173991,
                40.895221
              ],
              [
                29.174409,
                40.894831
              ],
              [
                29.174764,
                40.894458
              ],
              [
                29.175326,
                40.893888
              ],
              [
                29.175505,
                40.893678
              ],
              [
                29.175776,
                40.89333
              ],
              [
                29.176196,
                40.892628
              ],
              [
                29.176775,
                40.891652
              ],
              [
                29.177588,
                40.890368
              ],
              [
                29.17803,
                40.889506
              ],
              [
                29.178214,
                40.889151
              ],
              [
                29.178464,
                40.888807
              ],
              [
                29.178647,
                40.888615
              ],
              [
                29.178827,
                40.888444
              ],
              [
                29.179025,
                40.888276
              ],
              [
                29.179249,
                40.888126
              ],
              [
                29.179505,
                40.887997
              ],
              [
                29.179742,
                40.887885
              ],
              [
                29.180005,
                40.887788
              ],
              [
                29.180277,
                40.887702
              ],
              [
                29.18055,
                40.887636
              ],
              [
                29.180828,
                40.887582
              ],
              [
                29.181112,
                40.887555
              ],
              [
                29.181404,
                40.887538
              ],
              [
                29.181693,
                40.887535
              ],
              [
                29.18199,
                40.887551
              ],
              [
                29.182271,
                40.88758
              ],
              [
                29.182561,
                40.887625
              ],
              [
                29.182845,
                40.887688
              ],
              [
                29.183125,
                40.887764
              ],
              [
                29.183396,
                40.887853
              ],
              [
                29.183657,
                40.887957
              ],
              [
                29.183903,
                40.888075
              ],
              [
                29.184139,
                40.888217
              ],
              [
                29.184991,
                40.888765
              ],
              [
                29.185325,
                40.888961
              ],
              [
                29.185666,
                40.889165
              ],
              [
                29.186084,
                40.889379
              ],
              [
                29.186339,
                40.889487
              ],
              [
                29.186628,
                40.889591
              ],
              [
                29.186909,
                40.889668
              ],
              [
                29.187172,
                40.889721
              ],
              [
                29.187471,
                40.889762
              ],
              [
                29.187777,
                40.889787
              ],
              [
                29.188079,
                40.889793
              ],
              [
                29.18854,
                40.889769
              ],
              [
                29.18889,
                40.88972
              ],
              [
                29.189263,
                40.889632
              ],
              [
                29.189664,
                40.889517
              ],
              [
                29.189858,
                40.889434
              ],
              [
                29.190037,
                40.889352
              ],
              [
                29.190647,
                40.889041
              ],
              [
                29.191144,
                40.888755
              ],
              [
                29.191605,
                40.888458
              ],
              [
                29.192483,
                40.887882
              ],
              [
                29.192778,
                40.887702
              ],
              [
                29.193141,
                40.887532
              ],
              [
                29.193695,
                40.887378
              ],
              [
                29.194265,
                40.887294
              ],
              [
                29.196317,
                40.887139
              ],
              [
                29.19688,
                40.88704
              ],
              [
                29.197349,
                40.886898
              ],
              [
                29.19769,
                40.886754
              ],
              [
                29.199062,
                40.886104
              ],
              [
                29.199759,
                40.885841
              ],
              [
                29.200865,
                40.885538
              ],
              [
                29.202164,
                40.885182
              ],
              [
                29.202594,
                40.885081
              ],
              [
                29.203032,
                40.885042
              ],
              [
                29.203386,
                40.885034
              ],
              [
                29.203846,
                40.885058
              ],
              [
                29.204303,
                40.885108
              ],
              [
                29.204586,
                40.88518
              ],
              [
                29.205946,
                40.885534
              ],
              [
                29.206407,
                40.88565
              ],
              [
                29.206914,
                40.885697
              ],
              [
                29.20742,
                40.885691
              ],
              [
                29.207868,
                40.885656
              ],
              [
                29.20815,
                40.885611
              ],
              [
                29.208442,
                40.885542
              ],
              [
                29.208742,
                40.885457
              ],
              [
                29.209011,
                40.885353
              ],
              [
                29.209319,
                40.885208
              ],
              [
                29.210478,
                40.884605
              ],
              [
                29.211855,
                40.883834
              ],
              [
                29.212532,
                40.883468
              ],
              [
                29.213178,
                40.883214
              ],
              [
                29.213912,
                40.882922
              ],
              [
                29.215221,
                40.882423
              ],
              [
                29.216196,
                40.882118
              ],
              [
                29.217242,
                40.881892
              ],
              [
                29.225762,
                40.880116
              ],
              [
                29.226275,
                40.880009
              ],
              [
                29.226625,
                40.879951
              ],
              [
                29.227457,
                40.879893
              ],
              [
                29.227963,
                40.87992
              ],
              [
                29.228309,
                40.879958
              ],
              [
                29.228647,
                40.880009
              ],
              [
                29.22991,
                40.880221
              ],
              [
                29.230686,
                40.880326
              ],
              [
                29.2317,
                40.880417
              ],
              [
                29.232342,
                40.88046
              ],
              [
                29.233383,
                40.880496
              ],
              [
                29.233599,
                40.880498
              ],
              [
                29.234097,
                40.880502
              ],
              [
                29.236065,
                40.880533
              ],
              [
                29.23641,
                40.880533
              ],
              [
                29.236762,
                40.880518
              ],
              [
                29.237092,
                40.880489
              ],
              [
                29.237452,
                40.880438
              ],
              [
                29.237739,
                40.880384
              ],
              [
                29.238066,
                40.880291
              ],
              [
                29.238295,
                40.880209
              ],
              [
                29.23873,
                40.880025
              ],
              [
                29.239269,
                40.879733
              ],
              [
                29.239795,
                40.879376
              ],
              [
                29.241764,
                40.877948
              ],
              [
                29.243398,
                40.876762
              ],
              [
                29.243949,
                40.876397
              ],
              [
                29.24433,
                40.876164
              ],
              [
                29.244724,
                40.87597
              ],
              [
                29.245119,
                40.875771
              ],
              [
                29.245532,
                40.875603
              ],
              [
                29.24596,
                40.875447
              ],
              [
                29.250979,
                40.87385
              ],
              [
                29.251968,
                40.873528
              ],
              [
                29.252728,
                40.873242
              ],
              [
                29.253283,
                40.872979
              ],
              [
                29.254003,
                40.872584
              ],
              [
                29.25486,
                40.872081
              ],
              [
                29.256027,
                40.871418
              ],
              [
                29.257327,
                40.870601
              ],
              [
                29.258032,
                40.870123
              ],
              [
                29.259705,
                40.869109
              ],
              [
                29.260068,
                40.868889
              ],
              [
                29.262631,
                40.867299
              ],
              [
                29.263385,
                40.866864
              ],
              [
                29.264215,
                40.866434
              ],
              [
                29.265107,
                40.866075
              ],
              [
                29.269436,
                40.864543
              ],
              [
                29.269783,
                40.864407
              ],
              [
                29.270094,
                40.86426
              ],
              [
                29.270421,
                40.864071
              ],
              [
                29.270995,
                40.863692
              ],
              [
                29.271314,
                40.863453
              ],
              [
                29.271534,
                40.863278
              ],
              [
                29.271918,
                40.862961
              ],
              [
                29.272197,
                40.862708
              ],
              [
                29.272458,
                40.862439
              ],
              [
                29.272654,
                40.862192
              ],
              [
                29.272751,
                40.862069
              ],
              [
                29.273375,
                40.861172
              ],
              [
                29.274125,
                40.859948
              ],
              [
                29.274193,
                40.859831
              ],
              [
                29.274467,
                40.859479
              ],
              [
                29.274866,
                40.85913
              ],
              [
                29.275196,
                40.858861
              ],
              [
                29.275818,
                40.858372
              ],
              [
                29.276484,
                40.857934
              ],
              [
                29.277218,
                40.857591
              ],
              [
                29.277792,
                40.85738
              ],
              [
                29.278426,
                40.857192
              ],
              [
                29.279699,
                40.85691
              ],
              [
                29.280036,
                40.856859
              ],
              [
                29.280349,
                40.85682
              ],
              [
                29.281029,
                40.856789
              ],
              [
                29.282042,
                40.856841
              ],
              [
                29.283599,
                40.856957
              ],
              [
                29.285121,
                40.856965
              ],
              [
                29.285918,
                40.856938
              ],
              [
                29.286448,
                40.856887
              ],
              [
                29.287095,
                40.856762
              ],
              [
                29.288002,
                40.856501
              ],
              [
                29.288522,
                40.856319
              ],
              [
                29.288772,
                40.85622
              ],
              [
                29.289269,
                40.855987
              ],
              [
                29.289657,
                40.855777
              ],
              [
                29.290397,
                40.855316
              ],
              [
                29.291035,
                40.854789
              ],
              [
                29.291558,
                40.854257
              ],
              [
                29.29184,
                40.853945
              ],
              [
                29.292421,
                40.853311
              ],
              [
                29.29325,
                40.852358
              ],
              [
                29.294077,
                40.851307
              ],
              [
                29.29429,
                40.851021
              ],
              [
                29.294418,
                40.850821
              ],
              [
                29.294828,
                40.850328
              ],
              [
                29.295408,
                40.849607
              ],
              [
                29.295918,
                40.848972
              ],
              [
                29.296238,
                40.848613
              ],
              [
                29.296629,
                40.84824
              ],
              [
                29.296972,
                40.847945
              ],
              [
                29.297384,
                40.847636
              ],
              [
                29.298064,
                40.847186
              ],
              [
                29.298558,
                40.84685
              ],
              [
                29.299173,
                40.84644
              ],
              [
                29.300107,
                40.845745
              ],
              [
                29.301079,
                40.844945
              ],
              [
                29.301715,
                40.844379
              ],
              [
                29.302706,
                40.843536
              ],
              [
                29.303175,
                40.843181
              ],
              [
                29.303567,
                40.842928
              ],
              [
                29.303895,
                40.842729
              ],
              [
                29.307078,
                40.840945
              ],
              [
                29.307547,
                40.840649
              ],
              [
                29.307955,
                40.840368
              ],
              [
                29.311126,
                40.837943
              ],
              [
                29.313952,
                40.835782
              ],
              [
                29.315042,
                40.83496
              ],
              [
                29.315535,
                40.83459
              ],
              [
                29.316102,
                40.834193
              ],
              [
                29.317286,
                40.833411
              ],
              [
                29.320237,
                40.831466
              ],
              [
                29.321446,
                40.830673
              ],
              [
                29.322314,
                40.830104
              ],
              [
                29.322673,
                40.829836
              ],
              [
                29.322962,
                40.829631
              ],
              [
                29.32341,
                40.829277
              ],
              [
                29.324195,
                40.828652
              ],
              [
                29.325832,
                40.827338
              ],
              [
                29.326497,
                40.826804
              ],
              [
                29.326909,
                40.826389
              ],
              [
                29.327339,
                40.825905
              ],
              [
                29.327677,
                40.825365
              ],
              [
                29.327908,
                40.82494
              ],
              [
                29.328086,
                40.824536
              ],
              [
                29.328211,
                40.824131
              ],
              [
                29.328486,
                40.823012
              ],
              [
                29.32874,
                40.822262
              ],
              [
                29.329166,
                40.821375
              ],
              [
                29.329544,
                40.820837
              ],
              [
                29.329852,
                40.820452
              ],
              [
                29.330161,
                40.820101
              ],
              [
                29.330627,
                40.819687
              ],
              [
                29.338866,
                40.813276
              ],
              [
                29.339324,
                40.812944
              ],
              [
                29.339768,
                40.812665
              ],
              [
                29.34026,
                40.812397
              ],
              [
                29.340687,
                40.812197
              ],
              [
                29.341419,
                40.811922
              ],
              [
                29.342012,
                40.811728
              ],
              [
                29.344243,
                40.811029
              ],
              [
                29.344869,
                40.81088
              ],
              [
                29.345381,
                40.810802
              ],
              [
                29.346111,
                40.810708
              ],
              [
                29.347386,
                40.810583
              ],
              [
                29.348794,
                40.810456
              ],
              [
                29.349579,
                40.810345
              ],
              [
                29.350428,
                40.810214
              ],
              [
                29.35107,
                40.810096
              ],
              [
                29.359416,
                40.808495
              ],
              [
                29.359713,
                40.808434
              ],
              [
                29.362692,
                40.8079
              ],
              [
                29.363797,
                40.807716
              ],
              [
                29.364835,
                40.807504
              ],
              [
                29.365333,
                40.807392
              ],
              [
                29.366153,
                40.807193
              ],
              [
                29.366715,
                40.807053
              ],
              [
                29.367822,
                40.806725
              ],
              [
                29.368791,
                40.806372
              ],
              [
                29.36982,
                40.805909
              ],
              [
                29.370794,
                40.805384
              ],
              [
                29.371296,
                40.805059
              ],
              [
                29.372619,
                40.804201
              ],
              [
                29.376991,
                40.801297
              ],
              [
                29.378048,
                40.800658
              ],
              [
                29.378956,
                40.800101
              ],
              [
                29.379382,
                40.799819
              ],
              [
                29.380171,
                40.799297
              ],
              [
                29.38129,
                40.798554
              ],
              [
                29.381703,
                40.798258
              ],
              [
                29.382079,
                40.797975
              ],
              [
                29.382637,
                40.797557
              ],
              [
                29.389394,
                40.793031
              ],
              [
                29.390268,
                40.792471
              ],
              [
                29.390874,
                40.792129
              ],
              [
                29.391386,
                40.791834
              ],
              [
                29.391977,
                40.79147
              ],
              [
                29.392226,
                40.791304
              ],
              [
                29.392829,
                40.790862
              ],
              [
                29.393516,
                40.790346
              ],
              [
                29.393999,
                40.789983
              ],
              [
                29.394388,
                40.789717
              ],
              [
                29.395275,
                40.789145
              ],
              [
                29.396123,
                40.78869
              ],
              [
                29.39703,
                40.7883
              ],
              [
                29.398094,
                40.787947
              ],
              [
                29.400915,
                40.787056
              ],
              [
                29.406298,
                40.785325
              ],
              [
                29.406944,
                40.785118
              ],
              [
                29.407275,
                40.785016
              ],
              [
                29.407838,
                40.784859
              ],
              [
                29.408281,
                40.78474
              ],
              [
                29.408897,
                40.784574
              ],
              [
                29.409399,
                40.784425
              ],
              [
                29.4099,
                40.784271
              ],
              [
                29.410789,
                40.783992
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Söğütlüçeşme Station",
            "description": "Major Marmaray express and commuter hub opened on 12 March 2019 (03-2019). Western terminus of Metrobüs and major TCDD YHT high-speed rail terminal.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.038083,
              40.990749
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Feneryolu Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Kadıköy Feneryolu residential quarter.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.048891,
              40.978848
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Göztepe Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving historic Göztepe 60. Yıl Park and Bağdat Avenue.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.062604,
              40.979269
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Erenköy Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Erenköy residential and commercial center on Bağdat Avenue.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.07646,
              40.971687
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Suadiye Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Suadiye seaside and Bağdat Avenue shopping district.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.084445,
              40.960541
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bostancı Station",
            "description": "Major Marmaray multimodal transit hub opened on 12 March 2019 (03-2019). Direct interchange to M8 Bostancı - Dudullu - Parseller metro, YHT high-speed trains, and IDO ferries.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.094922,
              40.953987
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Küçükyalı Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Maltepe Küçükyalı coastal avenue.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.107162,
              40.946319
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İdealtepe Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Maltepe İdealtepe neighborhood and 50. Yıl Park.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.114319,
              40.937876
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Süreyya Plajı Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving historic Süreyya Beach park and Maltepe coast.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.124341,
              40.926831
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Maltepe Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving historic Maltepe town square and coastal recreational parks.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.133337,
              40.920884
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Cevizli Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Kartal Cevizli and Istanbul Anatolian Courthouse.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.156175,
              40.910029
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Atalar Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Kartal Atalar residential quarter.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.169274,
              40.898841
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Başak Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Kartal Başak neighborhood and coastal park.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.177588,
              40.890368
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kartal Station",
            "description": "Major Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Kartal district center, market square, and IDO pier.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.191144,
              40.888755
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yunus Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving historic Yunus cement factory area and coastal sports fields.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.210478,
              40.884605
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Pendik Station",
            "description": "Major Marmaray express and YHT hub opened on 12 March 2019 (03-2019). Major eastern terminus for high-speed trains with transfers to M4 Tavşantepe/SAW metro.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.2317,
              40.880417
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kaynarca Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Pendik Kaynarca district and E-5 highway junctions.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.256027,
              40.871418
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Tersane Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving historic Istanbul Naval Shipyard (Tersane-i Amire) and maritime facilities.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.273375,
              40.861172
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Güzelyalı Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Pendik Güzelyalı seaside neighborhood.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.283599,
              40.856957
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Aydıntepe Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Tuzla Aydıntepe residential quarter.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.29325,
              40.852358
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İçmeler Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Tuzla Municipality, State Hospital, and historic thermal springs.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.300107,
              40.845745
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Tuzla Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving historic Tuzla town center, yacht marina, and coastal parks.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.322673,
              40.829836
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Çayırova Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Located on Istanbul - Kocaeli border serving Çayırova industrial district.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.347386,
              40.810583
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Fatih Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Gebze Technical University (GTÜ) campus.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.363797,
              40.807716
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Osmangazi Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Darıca Osmangazi residential and commercial area.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.380171,
              40.799297
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Darıca Station",
            "description": "Marmaray commuter station opened on 12 March 2019 (03-2019). Serving Darıca coastal town and Faruk Yalçın Zoo.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.391977,
              40.79147
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Gebze Station",
            "description": "Eastern terminus of Marmaray opened on 12 March 2019 (03-2019). Major multimodal terminal connecting Marmaray with TCDD YHT high-speed trains and Kocaeli regional transit.",
            "style": {
              "color": "#65656A",
              "fill": "#65656A"
            },
            "lineCode": "B1"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.410789,
              40.783992
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m7-mecidiyekoy-mahmutbey-2020-10",
    "name": "M7: Mecidiyeköy - Mahmutbey Section (Opening: 10-2020)",
    "date": {
      "year": 2020,
      "month": 10
    },
    "fileName": "m7_mecidiyekoy_mahmutbey_2020_10.geojson",
    "color": "#F490B3",
    "visible": true,
    "isSample": true,
    "category": "M7 Metro Line",
    "description": "M7 Mecidiyeköy - Mahmutbey Metro Hattı (28 Ekim 2020). Avrupa Yakası’nın ilk tam otomatik sürücüsüz metrosu; 18 km uzunluğunda 15 istasyon.",
    "placemarksCount": 16,
    "bounds": [
      [
        41.055151,
        28.829506
      ],
      [
        41.085461,
        28.995561
      ]
    ],
    "uploadedAt": "2020-10-28T06:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M7 Mecidiyeköy - Mahmutbey Metro Hattı Ray Güzergahı",
            "description": "M7 Mecidiyeköy - Mahmutbey arası çift hat tünel ve viyadük ray geometrisi (28 Ekim 2020)",
            "style": {
              "color": "#F490B3",
              "width": 5,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.995561,
                41.065314
              ],
              [
                28.994458,
                41.065525
              ],
              [
                28.993125,
                41.065789
              ],
              [
                28.992688,
                41.06588
              ],
              [
                28.991792,
                41.066068
              ],
              [
                28.991185,
                41.066208
              ],
              [
                28.990105,
                41.066525
              ],
              [
                28.989382,
                41.066743
              ],
              [
                28.988274,
                41.067076
              ],
              [
                28.985274,
                41.067829
              ],
              [
                28.984823,
                41.067977
              ],
              [
                28.984053,
                41.068266
              ],
              [
                28.983492,
                41.068521
              ],
              [
                28.983083,
                41.068774
              ],
              [
                28.982671,
                41.069068
              ],
              [
                28.982288,
                41.069386
              ],
              [
                28.981341,
                41.070164
              ],
              [
                28.980628,
                41.070799
              ],
              [
                28.979863,
                41.071484
              ],
              [
                28.979132,
                41.072193
              ],
              [
                28.978828,
                41.072557
              ],
              [
                28.978514,
                41.072974
              ],
              [
                28.978328,
                41.073233
              ],
              [
                28.978064,
                41.073685
              ],
              [
                28.97788,
                41.074216
              ],
              [
                28.977111,
                41.076773
              ],
              [
                28.976878,
                41.07731
              ],
              [
                28.976736,
                41.077533
              ],
              [
                28.976565,
                41.0778
              ],
              [
                28.976407,
                41.077991
              ],
              [
                28.976141,
                41.078259
              ],
              [
                28.975832,
                41.078506
              ],
              [
                28.975696,
                41.078611
              ],
              [
                28.97541,
                41.078794
              ],
              [
                28.975101,
                41.078951
              ],
              [
                28.974722,
                41.079112
              ],
              [
                28.973157,
                41.079665
              ],
              [
                28.971745,
                41.080164
              ],
              [
                28.969876,
                41.080791
              ],
              [
                28.969617,
                41.08087
              ],
              [
                28.969129,
                41.081001
              ],
              [
                28.968619,
                41.081104
              ],
              [
                28.96818,
                41.081142
              ],
              [
                28.967682,
                41.08116
              ],
              [
                28.967058,
                41.081123
              ],
              [
                28.966391,
                41.081043
              ],
              [
                28.965792,
                41.080897
              ],
              [
                28.965207,
                41.080719
              ],
              [
                28.964496,
                41.080459
              ],
              [
                28.963282,
                41.07996
              ],
              [
                28.96227,
                41.079539
              ],
              [
                28.960604,
                41.078938
              ],
              [
                28.960154,
                41.078833
              ],
              [
                28.959643,
                41.078771
              ],
              [
                28.958994,
                41.078755
              ],
              [
                28.955985,
                41.078826
              ],
              [
                28.953339,
                41.078921
              ],
              [
                28.952676,
                41.078961
              ],
              [
                28.952202,
                41.078987
              ],
              [
                28.950831,
                41.079078
              ],
              [
                28.949588,
                41.079165
              ],
              [
                28.948525,
                41.07924
              ],
              [
                28.947789,
                41.079297
              ],
              [
                28.946995,
                41.079377
              ],
              [
                28.940249,
                41.080318
              ],
              [
                28.939331,
                41.080397
              ],
              [
                28.938337,
                41.080424
              ],
              [
                28.937438,
                41.080384
              ],
              [
                28.936193,
                41.080284
              ],
              [
                28.934916,
                41.080186
              ],
              [
                28.930991,
                41.079755
              ],
              [
                28.93024,
                41.079723
              ],
              [
                28.929248,
                41.079733
              ],
              [
                28.928176,
                41.079757
              ],
              [
                28.926909,
                41.079791
              ],
              [
                28.926001,
                41.079844
              ],
              [
                28.925552,
                41.079918
              ],
              [
                28.925081,
                41.080061
              ],
              [
                28.924637,
                41.080255
              ],
              [
                28.922903,
                41.081398
              ],
              [
                28.922494,
                41.081623
              ],
              [
                28.921975,
                41.081787
              ],
              [
                28.921458,
                41.081893
              ],
              [
                28.920511,
                41.082051
              ],
              [
                28.919608,
                41.082207
              ],
              [
                28.91834,
                41.082415
              ],
              [
                28.917465,
                41.082546
              ],
              [
                28.915851,
                41.08282
              ],
              [
                28.915154,
                41.083009
              ],
              [
                28.914525,
                41.083227
              ],
              [
                28.913987,
                41.083486
              ],
              [
                28.912555,
                41.084411
              ],
              [
                28.912157,
                41.084606
              ],
              [
                28.911618,
                41.084806
              ],
              [
                28.910959,
                41.084996
              ],
              [
                28.908546,
                41.085461
              ],
              [
                28.906713,
                41.085797
              ],
              [
                28.906037,
                41.085872
              ],
              [
                28.905451,
                41.085872
              ],
              [
                28.904813,
                41.085807
              ],
              [
                28.904322,
                41.085724
              ],
              [
                28.903793,
                41.0856
              ],
              [
                28.903253,
                41.085413
              ],
              [
                28.902871,
                41.085221
              ],
              [
                28.902544,
                41.085033
              ],
              [
                28.900436,
                41.08355
              ],
              [
                28.899931,
                41.083233
              ],
              [
                28.899562,
                41.083056
              ],
              [
                28.899178,
                41.082908
              ],
              [
                28.898584,
                41.082744
              ],
              [
                28.898004,
                41.082652
              ],
              [
                28.897534,
                41.082622
              ],
              [
                28.897076,
                41.082642
              ],
              [
                28.896572,
                41.082732
              ],
              [
                28.896137,
                41.082847
              ],
              [
                28.895619,
                41.08301
              ],
              [
                28.894766,
                41.083296
              ],
              [
                28.892812,
                41.083972
              ],
              [
                28.891773,
                41.084318
              ],
              [
                28.887978,
                41.085584
              ],
              [
                28.887182,
                41.08579
              ],
              [
                28.885855,
                41.086009
              ],
              [
                28.884537,
                41.086069
              ],
              [
                28.883431,
                41.08607
              ],
              [
                28.882229,
                41.086024
              ],
              [
                28.881462,
                41.085935
              ],
              [
                28.880782,
                41.085833
              ],
              [
                28.879935,
                41.085623
              ],
              [
                28.879077,
                41.085275
              ],
              [
                28.878522,
                41.084951
              ],
              [
                28.877924,
                41.084486
              ],
              [
                28.875688,
                41.082173
              ],
              [
                28.87493,
                41.081339
              ],
              [
                28.874283,
                41.080614
              ],
              [
                28.873645,
                41.079731
              ],
              [
                28.87313,
                41.078673
              ],
              [
                28.870853,
                41.074913
              ],
              [
                28.870552,
                41.074546
              ],
              [
                28.870313,
                41.074295
              ],
              [
                28.869974,
                41.073987
              ],
              [
                28.868961,
                41.073184
              ],
              [
                28.868633,
                41.072906
              ],
              [
                28.866723,
                41.071379
              ],
              [
                28.865121,
                41.07009
              ],
              [
                28.864864,
                41.069905
              ],
              [
                28.864066,
                41.06933
              ],
              [
                28.863591,
                41.069055
              ],
              [
                28.863012,
                41.068757
              ],
              [
                28.858075,
                41.066672
              ],
              [
                28.857682,
                41.066455
              ],
              [
                28.857374,
                41.066256
              ],
              [
                28.857015,
                41.065972
              ],
              [
                28.856704,
                41.065652
              ],
              [
                28.856399,
                41.065305
              ],
              [
                28.856133,
                41.064871
              ],
              [
                28.855868,
                41.064341
              ],
              [
                28.855591,
                41.063706
              ],
              [
                28.855279,
                41.062896
              ],
              [
                28.854941,
                41.06206
              ],
              [
                28.853791,
                41.058957
              ],
              [
                28.853659,
                41.058714
              ],
              [
                28.853511,
                41.058501
              ],
              [
                28.853289,
                41.058302
              ],
              [
                28.852905,
                41.058109
              ],
              [
                28.852339,
                41.057899
              ],
              [
                28.851676,
                41.057712
              ],
              [
                28.850909,
                41.057537
              ],
              [
                28.84903,
                41.057185
              ],
              [
                28.847952,
                41.057015
              ],
              [
                28.84685,
                41.056843
              ],
              [
                28.845598,
                41.056612
              ],
              [
                28.844146,
                41.0562
              ],
              [
                28.843056,
                41.055859
              ],
              [
                28.838258,
                41.054444
              ],
              [
                28.837499,
                41.054307
              ],
              [
                28.836886,
                41.054262
              ],
              [
                28.836277,
                41.054271
              ],
              [
                28.835493,
                41.05434
              ],
              [
                28.833371,
                41.054704
              ],
              [
                28.832061,
                41.054954
              ],
              [
                28.831071,
                41.055151
              ],
              [
                28.829506,
                41.055464
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Mecidiyeköy Station (M7)",
            "description": "M7 sürücüsüz metro hattının doğu başlangıç terminali; M2 Yenikapı - Hacıosman metrosu ve Metrobüs hattına doğrudan ortak yer altı bilet holü aktarması.",
            "style": {
              "color": "#F490B3",
              "width": 3,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.995561,
              41.065314
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Çağlayan Station",
            "description": "M7 Metro İstasyonu (28 Ekim 2020). İstanbul Adalet Sarayı ve Florence Nightingale Hastanesi erişimi.",
            "style": {
              "color": "#F490B3",
              "width": 3,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.980628,
              41.070799
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kâğıthane Station (M7)",
            "description": "M7 Metro İstasyonu (28 Ekim 2020). Cendere Vadisi viyadüğü ve gelecekteki M11 İstanbul Havalimanı metrosu aktarması.",
            "style": {
              "color": "#F490B3",
              "width": 3,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.973157,
              41.079665
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Nurtepe Station",
            "description": "M7 Metro İstasyonu (28 Ekim 2020). Nurtepe ve Güzeltepe mahalleleri erişimi.",
            "style": {
              "color": "#F490B3",
              "width": 3,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.963282,
              41.07996
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Alibeyköy Station (M7)",
            "description": "M7 Metro İstasyonu (28 Ekim 2020). Alibeyköy Deresi viyadüğü ve T5 tramvay hattına doğrudan alt meydan aktarması.",
            "style": {
              "color": "#F490B3",
              "width": 3,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.949588,
              41.079165
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Çırçır Station",
            "description": "M7 Metro İstasyonu (28 Ekim 2020). Çırçır Mahallesi ve Alibeyköy İmar Blokları erişimi.",
            "style": {
              "color": "#F490B3",
              "width": 3,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.936193,
              41.080284
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Veysel Karani - Akşemsettin Station",
            "description": "M7 Metro İstasyonu (28 Ekim 2020). Atatürk Bulvarı, Akşemsettin ve Vialand Tema Parkı bölgesi erişimi.",
            "style": {
              "color": "#F490B3",
              "width": 3,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.928176,
              41.079757
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yeşilpınar Station",
            "description": "M7 Metro İstasyonu (28 Ekim 2020). Yeşilpınar Mahallesi ve İBB Sosyal Tesisleri bağlantısı.",
            "style": {
              "color": "#F490B3",
              "width": 3,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.91834,
              41.082415
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kâzım Karabekir Station",
            "description": "M7 Metro İstasyonu (28 Ekim 2020). Gaziosmanpaşa Kâzım Karabekir Mahallesi ve Hekimsuyu Caddesi mevkii.",
            "style": {
              "color": "#F490B3",
              "width": 3,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.908546,
              41.085461
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yenimahalle Station (M7)",
            "description": "M7 Metro İstasyonu (28 Ekim 2020). Gaziosmanpaşa Yenimahalle ve Cebeci Caddesi bağlantısı.",
            "style": {
              "color": "#F490B3",
              "width": 3,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.892812,
              41.083972
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Karadeniz Mahallesi Station (M7)",
            "description": "M7 Metro İstasyonu (28 Ekim 2020). T4 KİPTAŞ-Venezia tramvay durağı ve Venezia Mega Outlet AVM doğrudan yer altı aktarması.",
            "style": {
              "color": "#F490B3",
              "width": 3,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.87493,
              41.081339
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Tekstilkent - Giyimkent Station",
            "description": "M7 Metro İstasyonu (28 Ekim 2020). Tekstilkent ve Giyimkent ticaret siteleri ve M7 ana tren depo sahası.",
            "style": {
              "color": "#F490B3",
              "width": 3,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.866723,
              41.071379
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Oruç Reis Station",
            "description": "M7 Metro İstasyonu (28 Ekim 2020). Bağcılar Yüzyıl ve Esenler Oruçreis mahalleleri mevkii.",
            "style": {
              "color": "#F490B3",
              "width": 3,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.855279,
              41.062896
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Göztepe Mahallesi Station",
            "description": "M7 Metro İstasyonu (28 Ekim 2020). Bağcılar Göztepe Mahallesi ve Medipol Mega Hastanesi bölgesi erişimi.",
            "style": {
              "color": "#F490B3",
              "width": 3,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.847952,
              41.057015
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Mahmutbey Station (M7)",
            "description": "M7 hattının batı nihai terminali (28 Ekim 2020). M3 Kirazlı - Başakşehir/Metrokent metrosuna doğrudan yer altı turnike içi ortak aktarma.",
            "style": {
              "color": "#F490B3",
              "width": 3,
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.831071,
              41.055151
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-t5-cibali-alibeykoy-2021-01",
    "name": "T5: Cibali - Alibeyköy Cep Otogarı Section (Opening: 01-2021)",
    "date": {
      "year": 2021,
      "month": 1
    },
    "fileName": "t5_cibali_alibeykoy_2021_01.geojson",
    "color": "#7B72B2",
    "visible": true,
    "isSample": true,
    "category": "T5 Tram Line",
    "description": "T5 Cibali - Alibeyköy Cep Otogarı Tramvay Hattı (1 Ocak 2021). Haliç kıyısı boyunca katenersiz alttan beslemeli (APS) modern tramvay hattı; 8,8 km uzunluğunda 12 istasyon.",
    "placemarksCount": 13,
    "bounds": [
      [
        41.023316,
        28.935136
      ],
      [
        41.086928,
        28.961299
      ]
    ],
    "uploadedAt": "2021-01-01T06:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "T5 Cibali - Alibeyköy Cep Otogarı Tramvay Hattı Ray Güzergahı",
            "description": "T5 Cibali - Alibeyköy Cep Otogarı arası Haliç sahili katenersiz alttan beslemeli (APS) ray geometrisi (1 Ocak 2021)",
            "style": {
              "color": "#7B72B2",
              "width": 5,
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.961299,
                41.023316
              ],
              [
                28.960856,
                41.023648
              ],
              [
                28.960623,
                41.023894
              ],
              [
                28.960604,
                41.023917
              ],
              [
                28.960316,
                41.024253
              ],
              [
                28.960031,
                41.024574
              ],
              [
                28.95993,
                41.024699
              ],
              [
                28.959849,
                41.024799
              ],
              [
                28.959783,
                41.024895
              ],
              [
                28.959723,
                41.024983
              ],
              [
                28.959659,
                41.025091
              ],
              [
                28.959613,
                41.025176
              ],
              [
                28.959569,
                41.025278
              ],
              [
                28.959357,
                41.025777
              ],
              [
                28.959198,
                41.026171
              ],
              [
                28.95915,
                41.02629
              ],
              [
                28.959107,
                41.026388
              ],
              [
                28.959052,
                41.026482
              ],
              [
                28.95898,
                41.026567
              ],
              [
                28.958918,
                41.026632
              ],
              [
                28.958806,
                41.026727
              ],
              [
                28.958719,
                41.026784
              ],
              [
                28.958594,
                41.026845
              ],
              [
                28.957815,
                41.027177
              ],
              [
                28.957728,
                41.027222
              ],
              [
                28.957624,
                41.027292
              ],
              [
                28.9569,
                41.027977
              ],
              [
                28.956716,
                41.028152
              ],
              [
                28.956622,
                41.028227
              ],
              [
                28.956524,
                41.028283
              ],
              [
                28.956434,
                41.028317
              ],
              [
                28.95633,
                41.028353
              ],
              [
                28.956247,
                41.028376
              ],
              [
                28.956113,
                41.028401
              ],
              [
                28.95541,
                41.028439
              ],
              [
                28.955247,
                41.02846
              ],
              [
                28.954946,
                41.028529
              ],
              [
                28.95447,
                41.02864
              ],
              [
                28.953955,
                41.02876
              ],
              [
                28.953404,
                41.028894
              ],
              [
                28.953297,
                41.028929
              ],
              [
                28.953194,
                41.02897
              ],
              [
                28.953084,
                41.029023
              ],
              [
                28.953004,
                41.029067
              ],
              [
                28.952899,
                41.029129
              ],
              [
                28.95284,
                41.029169
              ],
              [
                28.952742,
                41.029242
              ],
              [
                28.951936,
                41.030059
              ],
              [
                28.951918,
                41.030079
              ],
              [
                28.951368,
                41.03072
              ],
              [
                28.951054,
                41.031126
              ],
              [
                28.950843,
                41.031416
              ],
              [
                28.95071,
                41.031587
              ],
              [
                28.95063,
                41.031678
              ],
              [
                28.950557,
                41.031753
              ],
              [
                28.950293,
                41.032009
              ],
              [
                28.950174,
                41.032113
              ],
              [
                28.949786,
                41.032426
              ],
              [
                28.949206,
                41.032933
              ],
              [
                28.948777,
                41.033333
              ],
              [
                28.948362,
                41.033752
              ],
              [
                28.948069,
                41.03404
              ],
              [
                28.947726,
                41.034385
              ],
              [
                28.947374,
                41.034736
              ],
              [
                28.946967,
                41.035183
              ],
              [
                28.946783,
                41.03541
              ],
              [
                28.94669,
                41.035532
              ],
              [
                28.946617,
                41.035651
              ],
              [
                28.945655,
                41.037208
              ],
              [
                28.945635,
                41.037242
              ],
              [
                28.945357,
                41.037723
              ],
              [
                28.945136,
                41.038106
              ],
              [
                28.944991,
                41.038394
              ],
              [
                28.944942,
                41.038505
              ],
              [
                28.944785,
                41.038871
              ],
              [
                28.944748,
                41.038963
              ],
              [
                28.944696,
                41.039058
              ],
              [
                28.944656,
                41.03912
              ],
              [
                28.944619,
                41.039163
              ],
              [
                28.944569,
                41.039216
              ],
              [
                28.944511,
                41.039263
              ],
              [
                28.944371,
                41.039351
              ],
              [
                28.943965,
                41.039574
              ],
              [
                28.943535,
                41.039811
              ],
              [
                28.943067,
                41.040062
              ],
              [
                28.942925,
                41.040134
              ],
              [
                28.942721,
                41.040216
              ],
              [
                28.942565,
                41.040273
              ],
              [
                28.942387,
                41.040329
              ],
              [
                28.94182,
                41.04049
              ],
              [
                28.941733,
                41.040516
              ],
              [
                28.941514,
                41.040592
              ],
              [
                28.941433,
                41.040627
              ],
              [
                28.941302,
                41.040687
              ],
              [
                28.941188,
                41.040739
              ],
              [
                28.940993,
                41.040864
              ],
              [
                28.940757,
                41.041039
              ],
              [
                28.940522,
                41.041231
              ],
              [
                28.940386,
                41.041343
              ],
              [
                28.940259,
                41.041463
              ],
              [
                28.940047,
                41.04169
              ],
              [
                28.939989,
                41.041761
              ],
              [
                28.939842,
                41.041955
              ],
              [
                28.939342,
                41.042743
              ],
              [
                28.938654,
                41.043818
              ],
              [
                28.93859,
                41.043923
              ],
              [
                28.938534,
                41.044018
              ],
              [
                28.938436,
                41.044227
              ],
              [
                28.93832,
                41.044486
              ],
              [
                28.938226,
                41.044699
              ],
              [
                28.938195,
                41.044782
              ],
              [
                28.938167,
                41.044876
              ],
              [
                28.938127,
                41.045072
              ],
              [
                28.938018,
                41.045553
              ],
              [
                28.937952,
                41.045843
              ],
              [
                28.937939,
                41.04593
              ],
              [
                28.93765,
                41.04701
              ],
              [
                28.937612,
                41.047111
              ],
              [
                28.937556,
                41.047233
              ],
              [
                28.937513,
                41.047316
              ],
              [
                28.937455,
                41.047406
              ],
              [
                28.93742,
                41.047461
              ],
              [
                28.937313,
                41.04759
              ],
              [
                28.935266,
                41.049711
              ],
              [
                28.935218,
                41.049772
              ],
              [
                28.935181,
                41.049829
              ],
              [
                28.935154,
                41.049888
              ],
              [
                28.935138,
                41.049957
              ],
              [
                28.935132,
                41.050017
              ],
              [
                28.935136,
                41.050115
              ],
              [
                28.93521,
                41.050565
              ],
              [
                28.935266,
                41.050907
              ],
              [
                28.935399,
                41.051797
              ],
              [
                28.935428,
                41.051952
              ],
              [
                28.935474,
                41.052072
              ],
              [
                28.93554,
                41.052195
              ],
              [
                28.935631,
                41.052311
              ],
              [
                28.935836,
                41.052535
              ],
              [
                28.936139,
                41.052884
              ],
              [
                28.936261,
                41.053044
              ],
              [
                28.936332,
                41.053157
              ],
              [
                28.936408,
                41.053322
              ],
              [
                28.936449,
                41.053465
              ],
              [
                28.936489,
                41.053808
              ],
              [
                28.936514,
                41.053978
              ],
              [
                28.936528,
                41.054044
              ],
              [
                28.936579,
                41.054193
              ],
              [
                28.936628,
                41.0543
              ],
              [
                28.936721,
                41.054444
              ],
              [
                28.937414,
                41.055166
              ],
              [
                28.937575,
                41.05532
              ],
              [
                28.937698,
                41.055418
              ],
              [
                28.938548,
                41.055951
              ],
              [
                28.938731,
                41.056057
              ],
              [
                28.938985,
                41.056171
              ],
              [
                28.939187,
                41.056248
              ],
              [
                28.939422,
                41.056322
              ],
              [
                28.940345,
                41.056542
              ],
              [
                28.940616,
                41.056608
              ],
              [
                28.941142,
                41.056733
              ],
              [
                28.941619,
                41.056846
              ],
              [
                28.942312,
                41.057007
              ],
              [
                28.94261,
                41.057083
              ],
              [
                28.942873,
                41.057169
              ],
              [
                28.943115,
                41.057265
              ],
              [
                28.943377,
                41.057385
              ],
              [
                28.943735,
                41.057609
              ],
              [
                28.944032,
                41.057827
              ],
              [
                28.944688,
                41.058315
              ],
              [
                28.944801,
                41.058427
              ],
              [
                28.944883,
                41.058527
              ],
              [
                28.945034,
                41.05871
              ],
              [
                28.945233,
                41.058968
              ],
              [
                28.945343,
                41.059123
              ],
              [
                28.945411,
                41.059279
              ],
              [
                28.945446,
                41.059383
              ],
              [
                28.945457,
                41.059566
              ],
              [
                28.945443,
                41.059691
              ],
              [
                28.945399,
                41.059826
              ],
              [
                28.945351,
                41.05993
              ],
              [
                28.945265,
                41.060056
              ],
              [
                28.944481,
                41.061196
              ],
              [
                28.94446,
                41.061225
              ],
              [
                28.944069,
                41.061793
              ],
              [
                28.943921,
                41.061953
              ],
              [
                28.943758,
                41.062103
              ],
              [
                28.943092,
                41.062529
              ],
              [
                28.942948,
                41.062646
              ],
              [
                28.942822,
                41.062784
              ],
              [
                28.942741,
                41.062911
              ],
              [
                28.942529,
                41.063413
              ],
              [
                28.942468,
                41.063601
              ],
              [
                28.942452,
                41.063761
              ],
              [
                28.94247,
                41.063927
              ],
              [
                28.942515,
                41.064092
              ],
              [
                28.942601,
                41.064262
              ],
              [
                28.942693,
                41.064398
              ],
              [
                28.94297,
                41.064846
              ],
              [
                28.943141,
                41.065121
              ],
              [
                28.943774,
                41.066127
              ],
              [
                28.943894,
                41.066341
              ],
              [
                28.943979,
                41.066564
              ],
              [
                28.944015,
                41.066739
              ],
              [
                28.94401,
                41.067124
              ],
              [
                28.943973,
                41.067327
              ],
              [
                28.943933,
                41.067476
              ],
              [
                28.943841,
                41.067639
              ],
              [
                28.9437,
                41.067849
              ],
              [
                28.943217,
                41.068387
              ],
              [
                28.943105,
                41.068606
              ],
              [
                28.943042,
                41.068768
              ],
              [
                28.942947,
                41.06937
              ],
              [
                28.942876,
                41.069902
              ],
              [
                28.942837,
                41.070199
              ],
              [
                28.942727,
                41.070972
              ],
              [
                28.942765,
                41.071146
              ],
              [
                28.942908,
                41.071405
              ],
              [
                28.943258,
                41.071888
              ],
              [
                28.943461,
                41.072061
              ],
              [
                28.943677,
                41.072199
              ],
              [
                28.944768,
                41.07271
              ],
              [
                28.944958,
                41.072812
              ],
              [
                28.945163,
                41.072936
              ],
              [
                28.945232,
                41.072977
              ],
              [
                28.945731,
                41.073438
              ],
              [
                28.946,
                41.073691
              ],
              [
                28.946408,
                41.074076
              ],
              [
                28.946779,
                41.074415
              ],
              [
                28.946885,
                41.07449
              ],
              [
                28.947026,
                41.074545
              ],
              [
                28.947182,
                41.074598
              ],
              [
                28.947341,
                41.074611
              ],
              [
                28.947768,
                41.074609
              ],
              [
                28.94792,
                41.07461
              ],
              [
                28.948002,
                41.074612
              ],
              [
                28.948138,
                41.074639
              ],
              [
                28.948213,
                41.07467
              ],
              [
                28.948325,
                41.074739
              ],
              [
                28.948404,
                41.074804
              ],
              [
                28.948877,
                41.075336
              ],
              [
                28.949084,
                41.075568
              ],
              [
                28.949216,
                41.07572
              ],
              [
                28.94926,
                41.075779
              ],
              [
                28.949328,
                41.075878
              ],
              [
                28.949366,
                41.075966
              ],
              [
                28.949419,
                41.076111
              ],
              [
                28.949432,
                41.076251
              ],
              [
                28.949479,
                41.076829
              ],
              [
                28.949483,
                41.07689
              ],
              [
                28.949486,
                41.076944
              ],
              [
                28.949532,
                41.077575
              ],
              [
                28.949541,
                41.077773
              ],
              [
                28.949521,
                41.078044
              ],
              [
                28.949488,
                41.078433
              ],
              [
                28.949444,
                41.07895
              ],
              [
                28.949333,
                41.080142
              ],
              [
                28.949303,
                41.080367
              ],
              [
                28.949042,
                41.081627
              ],
              [
                28.94898,
                41.081838
              ],
              [
                28.948759,
                41.082478
              ],
              [
                28.948717,
                41.082623
              ],
              [
                28.948683,
                41.082762
              ],
              [
                28.948626,
                41.083129
              ],
              [
                28.94862,
                41.083161
              ],
              [
                28.948497,
                41.083847
              ],
              [
                28.948491,
                41.083923
              ],
              [
                28.948501,
                41.08399
              ],
              [
                28.948525,
                41.084116
              ],
              [
                28.948557,
                41.084227
              ],
              [
                28.948775,
                41.084655
              ],
              [
                28.948806,
                41.084778
              ],
              [
                28.948805,
                41.084881
              ],
              [
                28.94878,
                41.085197
              ],
              [
                28.948753,
                41.085317
              ],
              [
                28.948693,
                41.085451
              ],
              [
                28.948583,
                41.085609
              ],
              [
                28.948365,
                41.085794
              ],
              [
                28.948222,
                41.085872
              ],
              [
                28.948056,
                41.085947
              ],
              [
                28.947289,
                41.086247
              ],
              [
                28.946079,
                41.086719
              ],
              [
                28.945921,
                41.086764
              ],
              [
                28.945756,
                41.086801
              ],
              [
                28.94553,
                41.086822
              ],
              [
                28.945297,
                41.086835
              ],
              [
                28.94496,
                41.086852
              ],
              [
                28.944645,
                41.086867
              ],
              [
                28.944599,
                41.086869
              ],
              [
                28.943928,
                41.086902
              ],
              [
                28.943394,
                41.086928
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Cibali Tramvay İstasyonu",
            "description": "T5 hattının 2021-2023 arası güney başlangıç terminali; Kadir Has Üniversitesi ve Cibali Kapısı mevkii.",
            "style": {
              "color": "#7B72B2",
              "width": 3,
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.960316,
              41.024253
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Fener Tramvay İstasyonu",
            "description": "T5 Tramvay İstasyonu (1 Ocak 2021). Fener Rum Patrikhanesi ve Fener Vapur İskelesi karşısı.",
            "style": {
              "color": "#7B72B2",
              "width": 3,
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.95447,
              41.02864
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Balat Tramvay İstasyonu",
            "description": "T5 Tramvay İstasyonu (1 Ocak 2021). Tarihi Balat sokakları, renkli evler ve Balat İskelesi erişimi.",
            "style": {
              "color": "#7B72B2",
              "width": 3,
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.948069,
              41.03404
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ayvansaray Tramvay İstasyonu",
            "description": "T5 Tramvay İstasyonu (1 Ocak 2021). Haliç Köprüsü altı ve Tarihi İstanbul Kara Surları başlangıcı.",
            "style": {
              "color": "#7B72B2",
              "width": 3,
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.943965,
              41.039574
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Feshane Tramvay İstasyonu",
            "description": "T5 Tramvay İstasyonu (1 Ocak 2021). Artİstanbul Feshane Sanat ve Kültür Merkezi önü.",
            "style": {
              "color": "#7B72B2",
              "width": 3,
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.938018,
              41.045554
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Eyüpsultan Teleferik Tramvay İstasyonu",
            "description": "T5 Tramvay İstasyonu (1 Ocak 2021). Eyüp Sultan Camii Meydanı ve TF2 Piyer Loti Teleferik aktarması.",
            "style": {
              "color": "#7B72B2",
              "width": 3,
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.93521,
              41.050565
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Eyüpsultan Devlet Hastanesi Tramvay İstasyonu",
            "description": "T5 Tramvay İstasyonu (1 Ocak 2021). Eyüpsultan Devlet Hastanesi poliklinik ve acil servis girişi.",
            "style": {
              "color": "#7B72B2",
              "width": 3,
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.941142,
              41.056733
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Silahtarağa Mahallesi Tramvay İstasyonu",
            "description": "T5 Tramvay İstasyonu (1 Ocak 2021). Silahtarağa Mahallesi ve Haliç sahil parkı erişimi.",
            "style": {
              "color": "#7B72B2",
              "width": 3,
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.94297,
              41.064846
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Üniversite Tramvay İstasyonu",
            "description": "T5 Tramvay İstasyonu (1 Ocak 2021). Bezmiâlem Vakıf Üniversitesi ve santralistanbul kampüsü karşısı.",
            "style": {
              "color": "#7B72B2",
              "width": 3,
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.942876,
              41.069902
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Alibeyköy Merkez Tramvay İstasyonu",
            "description": "T5 Tramvay İstasyonu (1 Ocak 2021). Alibeyköy Tarihi Çarşısı ve Mısır Meydanı.",
            "style": {
              "color": "#7B72B2",
              "width": 3,
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.946,
              41.073691
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Alibeyköy Metro Tramvay İstasyonu",
            "description": "T5 Tramvay İstasyonu (1 Ocak 2021). M7 Mecidiyeköy - Mahmutbey metrosuna doğrudan viyadük altı aktarma meydanı.",
            "style": {
              "color": "#7B72B2",
              "width": 3,
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.949488,
              41.078433
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Alibeyköy Cep Otogarı Tramvay İstasyonu",
            "description": "T5 hattının kuzey nihai terminali (1 Ocak 2021). İBB Şehirlerarası Alibeyköy Cep Otogarı önü.",
            "style": {
              "color": "#7B72B2",
              "width": 3,
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.943928,
              41.086902
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m9-bahariye-olimpiyat-2021-05",
    "name": "M9: Bahariye - Olimpiyat Section (Opening: 05-2021)",
    "date": {
      "year": 2021,
      "month": 5
    },
    "fileName": "m9-bahariye-olimpiyat-2021-05.kml",
    "color": "#FCD10D",
    "visible": true,
    "isSample": true,
    "category": "M9 Metro",
    "description": "M9 Ataköy - Olimpiyat metro hattının ilk etabı: Bahariye – İkitelli Sanayi yeni tünel kesimi açılarak mevcut İkitelli Sanayi – Ziya Gökalp – Olimpiyat mekik hattı ile birleştirilmiştir (29 Mayıs 2021).",
    "placemarksCount": 6,
    "bounds": [
      [
        41.058505,
        28.767077
      ],
      [
        41.079814,
        28.80715
      ]
    ],
    "uploadedAt": "2021-05-29T10:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M9 Bahariye - Olimpiyat Metro Hattı Ray Güzergahı",
            "description": "M9 Ataköy - Olimpiyat Metro Hattı 1. Etabı (Bahariye - Olimpiyat). Açılış: 29 Mayıs 2021 (05-2021), uzunluk ~6 km, 5 istasyon.",
            "style": {
              "color": "#FCD10D",
              "width": 4.5,
              "opacity": 0.95
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.799491,
                41.058505
              ],
              [
                28.799459,
                41.059247
              ],
              [
                28.799459,
                41.05981
              ],
              [
                28.799644,
                41.060591
              ],
              [
                28.799868,
                41.061104
              ],
              [
                28.800241,
                41.061655
              ],
              [
                28.800644,
                41.062084
              ],
              [
                28.801362,
                41.062558
              ],
              [
                28.804275,
                41.063989
              ],
              [
                28.805404,
                41.064537
              ],
              [
                28.806237,
                41.065147
              ],
              [
                28.806697,
                41.065581
              ],
              [
                28.806996,
                41.065963
              ],
              [
                28.807114,
                41.066218
              ],
              [
                28.80715,
                41.066416
              ],
              [
                28.807128,
                41.066946
              ],
              [
                28.807038,
                41.067247
              ],
              [
                28.806906,
                41.067521
              ],
              [
                28.8066,
                41.068087
              ],
              [
                28.806247,
                41.068644
              ],
              [
                28.805852,
                41.069108
              ],
              [
                28.804351,
                41.07049
              ],
              [
                28.803628,
                41.071152
              ],
              [
                28.802743,
                41.071923
              ],
              [
                28.801603,
                41.072963
              ],
              [
                28.801153,
                41.073365
              ],
              [
                28.800029,
                41.074377
              ],
              [
                28.799747,
                41.074605
              ],
              [
                28.799406,
                41.074769
              ],
              [
                28.798942,
                41.074857
              ],
              [
                28.79842,
                41.07491
              ],
              [
                28.797854,
                41.074906
              ],
              [
                28.792166,
                41.074408
              ],
              [
                28.79034,
                41.074409
              ],
              [
                28.787458,
                41.074592
              ],
              [
                28.786412,
                41.074689
              ],
              [
                28.785372,
                41.07478
              ],
              [
                28.780952,
                41.075262
              ],
              [
                28.779789,
                41.075457
              ],
              [
                28.778988,
                41.075654
              ],
              [
                28.778466,
                41.075868
              ],
              [
                28.772832,
                41.078665
              ],
              [
                28.772648,
                41.078763
              ],
              [
                28.772056,
                41.07904
              ],
              [
                28.771692,
                41.079164
              ],
              [
                28.771376,
                41.079234
              ],
              [
                28.769917,
                41.079482
              ],
              [
                28.767077,
                41.079643
              ],
              [
                28.768836,
                41.079471
              ],
              [
                28.76709,
                41.079814
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bahariye Station",
            "description": "M9 Metro Station opened on 29 May 2021 (05-2021). Southern terminus of the initial M9 phase in Küçükçekmece Atatürk neighborhood.",
            "style": {
              "color": "#FCD10D",
              "fill": "#FCD10D"
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.799491,
              41.058505
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "MASKO Station",
            "description": "M9 Metro Station opened on 29 May 2021 (05-2021). Serving the world-famous MASKO Furniture City and Mall of Istanbul southern district.",
            "style": {
              "color": "#FCD10D",
              "fill": "#FCD10D"
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.804275,
              41.063989
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İkitelli Sanayi Station",
            "description": "Major underground cross-platform interchange station connecting M9 with M3 Kirazlı - Kayaşehir metro line at İkitelli Organized Industrial Zone.",
            "style": {
              "color": "#FCD10D",
              "fill": "#FCD10D"
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.803822,
              41.071396
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ziya Gökalp Mahallesi Station",
            "description": "Underground station integrated into M9 on 29 May 2021 (05-2021), serving residential areas in Başakşehir and Ayazma.",
            "style": {
              "color": "#FCD10D",
              "fill": "#FCD10D"
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.786412,
              41.074689
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Olimpiyat Station",
            "description": "Northern terminus of M9 opened on 29 May 2021 (05-2021), directly serving the Atatürk Olympic Stadium and Metro Istanbul rolling stock depot.",
            "style": {
              "color": "#FCD10D",
              "fill": "#FCD10D"
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.76709,
              41.079814
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m4-tavsantepe-saw-2022-10",
    "name": "M4: Tavşantepe - Sabiha Gökçen Havalimanı Extension (Opening: 10-2022)",
    "date": {
      "year": 2022,
      "month": 10
    },
    "fileName": "m4-tavsantepe-saw-2022-10.kml",
    "color": "#E81E77",
    "visible": true,
    "isSample": true,
    "category": "M4 Metro",
    "description": "M4 hattının Tavşantepe’den Sabiha Gökçen Uluslararası Havalimanı’na uzatılması (7,4 km, 4 istasyon: Fevzi Çakmak-Hastane, Yayalar-Şeyhli, Kurtköy, Sabiha Gökçen Havalimanı). Açılış: 2 Ekim 2022.",
    "placemarksCount": 5,
    "bounds": [
      [
        40.880867,
        29.25189
      ],
      [
        40.910536,
        29.311478
      ]
    ],
    "uploadedAt": "2022-10-02T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M4 Tavşantepe - Sabiha Gökçen Havalimanı Uzatması Ray Güzergahı",
            "description": "M4 Kadıköy - Sabiha Gökçen Havalimanı Metrosu 3. Etabı. Açılış: 2 Ekim 2022 (10-2022), uzunluk ~7,4 km, 4 yeni istasyon.",
            "style": {
              "color": "#E81E77",
              "width": 4.5,
              "opacity": 0.95
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.25189,
                40.880998
              ],
              [
                29.253816,
                40.880867
              ],
              [
                29.254808,
                40.880899
              ],
              [
                29.256049,
                40.881178
              ],
              [
                29.256936,
                40.881398
              ],
              [
                29.258294,
                40.881823
              ],
              [
                29.259059,
                40.882181
              ],
              [
                29.259974,
                40.882681
              ],
              [
                29.26073,
                40.883484
              ],
              [
                29.261335,
                40.884455
              ],
              [
                29.262037,
                40.88605
              ],
              [
                29.262455,
                40.887521
              ],
              [
                29.262649,
                40.888829
              ],
              [
                29.262841,
                40.88992
              ],
              [
                29.263123,
                40.89143
              ],
              [
                29.264825,
                40.896034
              ],
              [
                29.265293,
                40.896846
              ],
              [
                29.265813,
                40.897528
              ],
              [
                29.267378,
                40.898921
              ],
              [
                29.268717,
                40.899883
              ],
              [
                29.26942,
                40.900468
              ],
              [
                29.270346,
                40.901258
              ],
              [
                29.270956,
                40.901676
              ],
              [
                29.271524,
                40.902023
              ],
              [
                29.272092,
                40.902338
              ],
              [
                29.272933,
                40.902733
              ],
              [
                29.273764,
                40.903082
              ],
              [
                29.275118,
                40.903626
              ],
              [
                29.277351,
                40.904524
              ],
              [
                29.290396,
                40.910134
              ],
              [
                29.290977,
                40.910339
              ],
              [
                29.291617,
                40.910491
              ],
              [
                29.292283,
                40.910536
              ],
              [
                29.293022,
                40.910456
              ],
              [
                29.294892,
                40.910101
              ],
              [
                29.296102,
                40.909854
              ],
              [
                29.298465,
                40.909374
              ],
              [
                29.299014,
                40.909195
              ],
              [
                29.299674,
                40.908863
              ],
              [
                29.300192,
                40.908362
              ],
              [
                29.30198,
                40.905258
              ],
              [
                29.302471,
                40.904714
              ],
              [
                29.302988,
                40.904345
              ],
              [
                29.303685,
                40.903968
              ],
              [
                29.304136,
                40.903838
              ],
              [
                29.304846,
                40.903768
              ],
              [
                29.305696,
                40.903754
              ],
              [
                29.30631,
                40.903789
              ],
              [
                29.307036,
                40.903904
              ],
              [
                29.307598,
                40.904095
              ],
              [
                29.308204,
                40.904401
              ],
              [
                29.308569,
                40.904632
              ],
              [
                29.309105,
                40.904954
              ],
              [
                29.310565,
                40.90588
              ],
              [
                29.311478,
                40.906442
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Fevzi Çakmak - Hastane Station",
            "description": "M4 Metro Station opened on 2 October 2022 (10-2022). Directly connected to Marmara University Pendik Training & Research Hospital with underground link.",
            "style": {
              "color": "#E81E77",
              "fill": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.262649,
              40.888829
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yayalar - Şeyhli Station",
            "description": "M4 Metro Station opened on 2 October 2022 (10-2022). Located on Ankara Avenue, serving dense residential districts in Yayalar and Şeyhli.",
            "style": {
              "color": "#E81E77",
              "fill": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.275118,
              40.903626
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kurtköy Station",
            "description": "M4 Metro Station opened on 2 October 2022 (10-2022). Serving Kurtköy town center, commercial hubs, and residential zones under Ankara Avenue.",
            "style": {
              "color": "#E81E77",
              "fill": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.296102,
              40.909854
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Sabiha Gökçen Havalimanı Station",
            "description": "Major underground airport terminus opened on 2 October 2022 (10-2022). Connected via passenger moving walkways directly into Sabiha Gökçen International Airport (SAW) passenger terminal.",
            "style": {
              "color": "#E81E77",
              "fill": "#E81E77"
            },
            "lineCode": "M4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.311478,
              40.906442
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-f4-bogazici-asiyan-2022-10",
    "name": "F4: Boğaziçi Üniversitesi/Hisarüstü - Aşiyan Funicular (Opening: 10-2022)",
    "date": {
      "year": 2022,
      "month": 10
    },
    "fileName": "f4-bogazici-asiyan-2022-10.kml",
    "color": "#7A745A",
    "visible": true,
    "isSample": true,
    "category": "F4 Füniküler",
    "description": "F4 Boğaziçi Üniversitesi/Hisarüstü – Aşiyan füniküler hattı (800 m, 2 istasyon). Hisarüstü tepesinden Boğaz kıyısındaki Aşiyan Vapur İskelesi’ne 2,5 dakikada bağlantı sağlar. Açılış: 28 Ekim 2022.",
    "placemarksCount": 3,
    "bounds": [
      [
        41.081463,
        29.045905
      ],
      [
        41.085079,
        29.054147
      ]
    ],
    "uploadedAt": "2022-10-28T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "F4 Boğaziçi Üniversitesi/Hisarüstü - Aşiyan Füniküler Hattı Güzergahı",
            "description": "F4 Boğaziçi Üniversitesi/Hisarüstü – Aşiyan Füniküler Hattı. Açılış: 28 Ekim 2022 (10-2022), uzunluk 800 metre, eğim %13, seyahat süresi 2,5 dakika.",
            "style": {
              "color": "#7A745A",
              "width": 4.5,
              "opacity": 0.95
            },
            "lineCode": "F4"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.045905,
                41.085079
              ],
              [
                29.046085,
                41.085001
              ],
              [
                29.049515,
                41.08351
              ],
              [
                29.049707,
                41.083405
              ],
              [
                29.050537,
                41.083057
              ],
              [
                29.050775,
                41.082985
              ],
              [
                29.053974,
                41.081541
              ],
              [
                29.054147,
                41.081463
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Boğaziçi Üniversitesi/Hisarüstü Station (F4)",
            "description": "F4 Funicular upper terminus station opened on 28 October 2022 (10-2022). Directly connected via pedestrian tunnel to M6 Levent-Hisarüstü metro line.",
            "style": {
              "color": "#7A745A",
              "fill": "#7A745A"
            },
            "lineCode": "F4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.045905,
              41.085079
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Aşiyan Station",
            "description": "F4 Funicular lower terminus on the Bosphorus shoreline opened on 28 October 2022 (10-2022). Directly across from Aşiyan Ferry Pier with connections to Üsküdar and Anadolu Hisarı.",
            "style": {
              "color": "#7A745A",
              "fill": "#7A745A"
            },
            "lineCode": "F4"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.054147,
              41.081463
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m7-fulya-yildiz-2023-01",
    "name": "M7: Fulya - Yıldız Extension (Opening: 01-2023)",
    "date": {
      "year": 2023,
      "month": 1
    },
    "fileName": "m7-fulya-yildiz-2023-01.kml",
    "color": "#F490B3",
    "visible": true,
    "isSample": true,
    "category": "M7 Metro",
    "description": "M7 Yıldız – Mahmutbey metrosunun Mecidiyeköy’den Fulya ve Yıldız’a (Beşiktaş) 2. etap uzatması. Açılış: 2 Ocak 2023. İstanbul’un 71 metre ile en derin istasyonu Yıldız bu etapta hizmete girmiştir.",
    "placemarksCount": 3,
    "bounds": [
      [
        41.054006,
        28.995561
      ],
      [
        41.065314,
        29.010777
      ]
    ],
    "uploadedAt": "2023-01-02T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M7 Mecidiyeköy - Fulya - Yıldız Uzatması Ray Güzergahı",
            "description": "M7 Kabataş - Mahmutbey Metro Hattı 2. Etabı (Mecidiyeköy - Fulya - Yıldız). Açılış: 2 Ocak 2023 (01-2023), uzunluk ~2 km, 2 istasyon.",
            "style": {
              "color": "#F490B3",
              "width": 4.5,
              "opacity": 0.95
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.995561,
                41.065314
              ],
              [
                28.99893,
                41.064648
              ],
              [
                28.999936,
                41.064471
              ],
              [
                29.001196,
                41.064323
              ],
              [
                29.002199,
                41.064262
              ],
              [
                29.002931,
                41.064132
              ],
              [
                29.003778,
                41.063911
              ],
              [
                29.004646,
                41.063573
              ],
              [
                29.006495,
                41.062719
              ],
              [
                29.007826,
                41.062079
              ],
              [
                29.008384,
                41.061808
              ],
              [
                29.00932,
                41.061334
              ],
              [
                29.009737,
                41.061092
              ],
              [
                29.009994,
                41.060901
              ],
              [
                29.010227,
                41.060709
              ],
              [
                29.01045,
                41.060451
              ],
              [
                29.010564,
                41.060266
              ],
              [
                29.010672,
                41.060062
              ],
              [
                29.010754,
                41.059753
              ],
              [
                29.010777,
                41.059464
              ],
              [
                29.010751,
                41.059151
              ],
              [
                29.009844,
                41.054006
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Fulya Station",
            "description": "M7 Metro Station opened on 2 January 2023 (01-2023). Located in Fulya valley near Mevlüt Pehlivan Street, serving Dikilitaş and Fulya residential and hospital complexes.",
            "style": {
              "color": "#F490B3",
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.007826,
              41.062079
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yıldız Station",
            "description": "Deepest metro station in Istanbul (71m deep) opened on 2 January 2023 (01-2023). Situated under Barbaros Boulevard next to Yıldız Technical University and Yıldız Palace.",
            "style": {
              "color": "#F490B3",
              "fill": "#F490B3"
            },
            "lineCode": "M7"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.009844,
              41.054006
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m8-bostanci-parseller-2023-01",
    "name": "M8: Bostancı - Dudullu - Parseller (Opening: 01-2023)",
    "date": {
      "year": 2023,
      "month": 1
    },
    "fileName": "m8-bostanci-parseller-2023-01.kml",
    "color": "#487ABF",
    "visible": true,
    "isSample": true,
    "category": "M8 Metro",
    "description": "M8 Bostancı – Dudullu – Parseller Sürücüsüz Metro Hattı (14,27 km, 13 istasyon). Marmaray (Bostancı), M4 (Kozyatağı) ve M5 (Dudullu) hatlarını birbirine bağlayan Anadolu Yakası kuzey-güney ana omurgası. Açılış: 6 Ocak 2023.",
    "placemarksCount": 14,
    "bounds": [
      [
        40.951769,
        29.086157
      ],
      [
        41.031252,
        29.164769
      ]
    ],
    "uploadedAt": "2023-01-06T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M8 Bostancı - Dudullu - Parseller Metro Hattı Ray Güzergahı",
            "description": "M8 Bostancı – Dudullu – Parseller Sürücüsüz Metro Hattı. Açılış: 6 Ocak 2023 (01-2023), hat uzunluğu 14,27 km, 13 istasyon. Anadolu Yakası’nın kuzey-güney kesintisiz metro koridoru.",
            "style": {
              "color": "#487ABF",
              "width": 4.5,
              "opacity": 0.95
            },
            "lineCode": "M8"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.096867,
                40.951769
              ],
              [
                29.09641,
                40.952097
              ],
              [
                29.096251,
                40.952219
              ],
              [
                29.095801,
                40.952561
              ],
              [
                29.095451,
                40.952836
              ],
              [
                29.095139,
                40.953104
              ],
              [
                29.094973,
                40.95328
              ],
              [
                29.094814,
                40.953466
              ],
              [
                29.09468,
                40.953641
              ],
              [
                29.094567,
                40.953816
              ],
              [
                29.094463,
                40.954071
              ],
              [
                29.094413,
                40.954248
              ],
              [
                29.094388,
                40.954441
              ],
              [
                29.09438,
                40.954657
              ],
              [
                29.094388,
                40.95507
              ],
              [
                29.094421,
                40.955354
              ],
              [
                29.095218,
                40.958161
              ],
              [
                29.095253,
                40.958422
              ],
              [
                29.095264,
                40.958596
              ],
              [
                29.095268,
                40.958893
              ],
              [
                29.095226,
                40.959139
              ],
              [
                29.095144,
                40.95937
              ],
              [
                29.095012,
                40.959601
              ],
              [
                29.094909,
                40.959754
              ],
              [
                29.094698,
                40.959977
              ],
              [
                29.0943,
                40.960351
              ],
              [
                29.093757,
                40.960853
              ],
              [
                29.093138,
                40.961419
              ],
              [
                29.092389,
                40.961899
              ],
              [
                29.089551,
                40.963712
              ],
              [
                29.089225,
                40.964002
              ],
              [
                29.088825,
                40.964404
              ],
              [
                29.087673,
                40.965897
              ],
              [
                29.087323,
                40.966434
              ],
              [
                29.087068,
                40.966822
              ],
              [
                29.086758,
                40.967285
              ],
              [
                29.086514,
                40.967717
              ],
              [
                29.086413,
                40.967919
              ],
              [
                29.086264,
                40.968299
              ],
              [
                29.086181,
                40.968656
              ],
              [
                29.086157,
                40.968937
              ],
              [
                29.086188,
                40.96924
              ],
              [
                29.086225,
                40.969461
              ],
              [
                29.086346,
                40.969851
              ],
              [
                29.086492,
                40.970117
              ],
              [
                29.086887,
                40.970623
              ],
              [
                29.087412,
                40.971249
              ],
              [
                29.087977,
                40.971943
              ],
              [
                29.088452,
                40.972525
              ],
              [
                29.089166,
                40.973306
              ],
              [
                29.089734,
                40.97387
              ],
              [
                29.090239,
                40.974317
              ],
              [
                29.0908,
                40.974702
              ],
              [
                29.091047,
                40.974837
              ],
              [
                29.091295,
                40.974972
              ],
              [
                29.0915,
                40.975066
              ],
              [
                29.091767,
                40.975179
              ],
              [
                29.092102,
                40.975322
              ],
              [
                29.092499,
                40.975456
              ],
              [
                29.092877,
                40.975554
              ],
              [
                29.099282,
                40.977183
              ],
              [
                29.099958,
                40.977363
              ],
              [
                29.100614,
                40.977538
              ],
              [
                29.103136,
                40.978189
              ],
              [
                29.104215,
                40.978391
              ],
              [
                29.105235,
                40.978541
              ],
              [
                29.106092,
                40.978639
              ],
              [
                29.107381,
                40.978762
              ],
              [
                29.109192,
                40.9789
              ],
              [
                29.111183,
                40.978761
              ],
              [
                29.111742,
                40.978724
              ],
              [
                29.112441,
                40.978675
              ],
              [
                29.116237,
                40.978599
              ],
              [
                29.117507,
                40.978557
              ],
              [
                29.118814,
                40.978514
              ],
              [
                29.121822,
                40.97835
              ],
              [
                29.122672,
                40.978298
              ],
              [
                29.123522,
                40.978322
              ],
              [
                29.124189,
                40.978387
              ],
              [
                29.125633,
                40.978603
              ],
              [
                29.126299,
                40.978733
              ],
              [
                29.126762,
                40.978783
              ],
              [
                29.130802,
                40.979659
              ],
              [
                29.131299,
                40.979778
              ],
              [
                29.131741,
                40.979926
              ],
              [
                29.132271,
                40.980138
              ],
              [
                29.132566,
                40.980282
              ],
              [
                29.132812,
                40.980427
              ],
              [
                29.13316,
                40.98064
              ],
              [
                29.133875,
                40.98118
              ],
              [
                29.134367,
                40.981605
              ],
              [
                29.13699,
                40.983944
              ],
              [
                29.137813,
                40.984655
              ],
              [
                29.138647,
                40.985376
              ],
              [
                29.139374,
                40.985963
              ],
              [
                29.139651,
                40.986123
              ],
              [
                29.139997,
                40.986299
              ],
              [
                29.140904,
                40.986696
              ],
              [
                29.146213,
                40.988845
              ],
              [
                29.150728,
                40.990934
              ],
              [
                29.151691,
                40.991294
              ],
              [
                29.15282,
                40.991752
              ],
              [
                29.153478,
                40.992044
              ],
              [
                29.154103,
                40.992329
              ],
              [
                29.155514,
                40.993046
              ],
              [
                29.15576,
                40.993238
              ],
              [
                29.155934,
                40.993407
              ],
              [
                29.156036,
                40.99357
              ],
              [
                29.15611,
                40.993762
              ],
              [
                29.15615,
                40.993999
              ],
              [
                29.156163,
                40.994228
              ],
              [
                29.156115,
                40.994565
              ],
              [
                29.155349,
                40.996668
              ],
              [
                29.155285,
                40.99688
              ],
              [
                29.155238,
                40.997115
              ],
              [
                29.155234,
                40.997262
              ],
              [
                29.155245,
                40.997541
              ],
              [
                29.155286,
                40.997767
              ],
              [
                29.155376,
                40.998025
              ],
              [
                29.15552,
                40.998346
              ],
              [
                29.155674,
                40.998649
              ],
              [
                29.15623,
                40.999647
              ],
              [
                29.156482,
                41.000082
              ],
              [
                29.1567,
                41.000458
              ],
              [
                29.157276,
                41.001474
              ],
              [
                29.157838,
                41.002359
              ],
              [
                29.159312,
                41.004048
              ],
              [
                29.15993,
                41.004708
              ],
              [
                29.16075,
                41.005515
              ],
              [
                29.161191,
                41.005952
              ],
              [
                29.161883,
                41.006801
              ],
              [
                29.162199,
                41.007204
              ],
              [
                29.162466,
                41.007547
              ],
              [
                29.164314,
                41.01009
              ],
              [
                29.164597,
                41.010578
              ],
              [
                29.164753,
                41.011022
              ],
              [
                29.164769,
                41.011391
              ],
              [
                29.164682,
                41.012005
              ],
              [
                29.164506,
                41.0127
              ],
              [
                29.164359,
                41.013213
              ],
              [
                29.164115,
                41.013872
              ],
              [
                29.163822,
                41.014609
              ],
              [
                29.163551,
                41.015238
              ],
              [
                29.163322,
                41.0158
              ],
              [
                29.162661,
                41.017277
              ],
              [
                29.162318,
                41.018004
              ],
              [
                29.162142,
                41.018357
              ],
              [
                29.16194,
                41.018711
              ],
              [
                29.160258,
                41.021364
              ],
              [
                29.159838,
                41.022187
              ],
              [
                29.159634,
                41.022634
              ],
              [
                29.159459,
                41.023037
              ],
              [
                29.159123,
                41.023802
              ],
              [
                29.158977,
                41.024079
              ],
              [
                29.158807,
                41.024356
              ],
              [
                29.158642,
                41.024596
              ],
              [
                29.158449,
                41.024822
              ],
              [
                29.15834,
                41.024925
              ],
              [
                29.158214,
                41.025031
              ],
              [
                29.157836,
                41.025314
              ],
              [
                29.156985,
                41.025913
              ],
              [
                29.156108,
                41.026639
              ],
              [
                29.155785,
                41.026908
              ],
              [
                29.155548,
                41.027178
              ],
              [
                29.155052,
                41.027844
              ],
              [
                29.153107,
                41.030617
              ],
              [
                29.152956,
                41.030833
              ],
              [
                29.152679,
                41.031252
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bostancı Station (M8)",
            "description": "Southern coastal terminus of M8 opened on 6 January 2023 (01-2023). Multimodal transit hub connecting to Marmaray, TCDD YHT high-speed trains, and IDO/City Lines ferries.",
            "style": {
              "color": "#487ABF",
              "fill": "#487ABF"
            },
            "lineCode": "M8"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.096867,
              40.95177
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Emin Ali Paşa Station",
            "description": "M8 Metro Station opened on 6 January 2023 (01-2023). Located under Emin Ali Paşa Street between Suadiye and Bostancı.",
            "style": {
              "color": "#487ABF",
              "fill": "#487ABF"
            },
            "lineCode": "M8"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.093757,
              40.960853
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ayşekadın Station",
            "description": "M8 Metro Station opened on 6 January 2023 (01-2023). Serving 19 Mayıs and Ayşekadın districts near Şemsettin Günaltay Avenue.",
            "style": {
              "color": "#487ABF",
              "fill": "#487ABF"
            },
            "lineCode": "M8"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.087068,
              40.966822
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kozyatağı Station (M8)",
            "description": "Major underground interchange hub opened on 6 January 2023 (01-2023). Seamless pedestrian connection with M4 Kadıköy - Sabiha Gökçen Havalimanı metro line and City's Mall.",
            "style": {
              "color": "#487ABF",
              "fill": "#487ABF"
            },
            "lineCode": "M8"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.099958,
              40.977363
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Küçükbakkalköy Station",
            "description": "M8 Metro Station opened on 6 January 2023 (01-2023). Serving Küçükbakkalköy residential center and Acıbadem University.",
            "style": {
              "color": "#487ABF",
              "fill": "#487ABF"
            },
            "lineCode": "M8"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.111742,
              40.978724
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İçerenköy Station",
            "description": "M8 Metro Station opened on 6 January 2023 (01-2023). Serving İçerenköy neighborhood, health complexes, and local residential estates.",
            "style": {
              "color": "#487ABF",
              "fill": "#487ABF"
            },
            "lineCode": "M8"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.126299,
              40.978733
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kayışdağı Station",
            "description": "M8 Metro Station opened on 6 January 2023 (01-2023). Located on Kayışdağı Avenue, gateway to Yeditepe University campus.",
            "style": {
              "color": "#487ABF",
              "fill": "#487ABF"
            },
            "lineCode": "M8"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.137813,
              40.984655
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Mevlana Station",
            "description": "M8 Metro Station opened on 6 January 2023 (01-2023). Located under Necip Fazıl Boulevard serving Mevlana and Yeni Çamlıca neighborhoods.",
            "style": {
              "color": "#487ABF",
              "fill": "#487ABF"
            },
            "lineCode": "M8"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.153478,
              40.992044
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İMES Station",
            "description": "M8 Metro Station opened on 6 January 2023 (01-2023). Serving the heart of Istanbul Industrial Estate (İMES) and DES industrial cluster.",
            "style": {
              "color": "#487ABF",
              "fill": "#487ABF"
            },
            "lineCode": "M8"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.156482,
              41.000082
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "MODOKO - KEYAP Station",
            "description": "M8 Metro Station opened on 6 January 2023 (01-2023). Direct access to MODOKO Furniture City and KEYAP Commercial Center.",
            "style": {
              "color": "#487ABF",
              "fill": "#487ABF"
            },
            "lineCode": "M8"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.162199,
              41.007204
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Dudullu Station (M8)",
            "description": "Major underground interchange hub opened on 6 January 2023 (01-2023). Seamless underground transfer with M5 Üsküdar - Çekmeköy line at Dudullu Square.",
            "style": {
              "color": "#487ABF",
              "fill": "#487ABF"
            },
            "lineCode": "M8"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.163551,
              41.015238
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Huzur Station",
            "description": "M8 Metro Station opened on 6 January 2023 (01-2023). Serving Huzur and Adem Yavuz neighborhoods near Şile Motorway.",
            "style": {
              "color": "#487ABF",
              "fill": "#487ABF"
            },
            "lineCode": "M8"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.159634,
              41.022634
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Parseller Station",
            "description": "Northern terminus and rolling stock maintenance depot connection of M8 opened on 6 January 2023 (01-2023) in Ümraniye Parseller.",
            "style": {
              "color": "#487ABF",
              "fill": "#487ABF"
            },
            "lineCode": "M8"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.152679,
              41.031252
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m11-kagithane-kargo-terminali-2023-01",
    "name": "M11: Kağıthane - Kargo Terminali Section (Opening: 01-2023)",
    "date": {
      "year": 2023,
      "month": 1
    },
    "fileName": "m11-kagithane-kargo-terminali-2023-01.kml",
    "color": "#A1609B",
    "visible": true,
    "isSample": true,
    "category": "M11 Metro Line",
    "description": "M11 İstanbul Havalimanı Metrosu 1. Etabı: Kağıthane'den Üniversite-Hasdal, Kemerburgaz, Göktürk ve İhsaniye üzerinden İstanbul Havalimanı ve Kargo Terminali'ne uzanan 34 km'lik yüksek hızlı (120 km/s) metro hattı (22 Ocak 2023).",
    "placemarksCount": 8,
    "bounds": [
      [
        41.075,
        28.705
      ],
      [
        41.265,
        28.985
      ]
    ],
    "uploadedAt": "2023-01-22T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M11 Kağıthane - Kargo Terminali Ray Güzergahı",
            "description": "M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı Kağıthane – Kargo Terminali hızlı metro tünel güzergahı (22 Ocak 2023).",
            "style": {
              "color": "#A1609B",
              "width": 5,
              "fill": "#A1609B"
            },
            "lineCode": "M11"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.976622,
                41.080186
              ],
              [
                28.974913,
                41.0811
              ],
              [
                28.97369,
                41.081662
              ],
              [
                28.973002,
                41.082054
              ],
              [
                28.972505,
                41.082324
              ],
              [
                28.957675,
                41.091088
              ],
              [
                28.957402,
                41.091309
              ],
              [
                28.95711,
                41.091605
              ],
              [
                28.95686,
                41.09193
              ],
              [
                28.956636,
                41.0923
              ],
              [
                28.956327,
                41.092936
              ],
              [
                28.955253,
                41.096633
              ],
              [
                28.954993,
                41.097423
              ],
              [
                28.95465,
                41.098265
              ],
              [
                28.95437,
                41.098865
              ],
              [
                28.954218,
                41.099237
              ],
              [
                28.954004,
                41.099893
              ],
              [
                28.953329,
                41.103225
              ],
              [
                28.953182,
                41.103772
              ],
              [
                28.952972,
                41.10442
              ],
              [
                28.9527,
                41.105078
              ],
              [
                28.952358,
                41.105883
              ],
              [
                28.949159,
                41.111841
              ],
              [
                28.948873,
                41.112488
              ],
              [
                28.948679,
                41.113105
              ],
              [
                28.947177,
                41.12034
              ],
              [
                28.946977,
                41.121253
              ],
              [
                28.946316,
                41.124205
              ],
              [
                28.94598,
                41.125599
              ],
              [
                28.945331,
                41.128579
              ],
              [
                28.945187,
                41.129039
              ],
              [
                28.945058,
                41.129309
              ],
              [
                28.944821,
                41.129603
              ],
              [
                28.944493,
                41.129914
              ],
              [
                28.944045,
                41.130251
              ],
              [
                28.94342,
                41.130595
              ],
              [
                28.928497,
                41.137494
              ],
              [
                28.927504,
                41.138075
              ],
              [
                28.926978,
                41.138486
              ],
              [
                28.926528,
                41.138989
              ],
              [
                28.926183,
                41.139534
              ],
              [
                28.924517,
                41.145131
              ],
              [
                28.92421,
                41.145849
              ],
              [
                28.923926,
                41.14634
              ],
              [
                28.923642,
                41.146763
              ],
              [
                28.922979,
                41.147447
              ],
              [
                28.922331,
                41.147994
              ],
              [
                28.921075,
                41.148899
              ],
              [
                28.912881,
                41.153169
              ],
              [
                28.91238,
                41.15347
              ],
              [
                28.911988,
                41.15381
              ],
              [
                28.911711,
                41.154202
              ],
              [
                28.911563,
                41.154648
              ],
              [
                28.910588,
                41.158134
              ],
              [
                28.910364,
                41.159128
              ],
              [
                28.910146,
                41.160092
              ],
              [
                28.909781,
                41.161855
              ],
              [
                28.909557,
                41.162463
              ],
              [
                28.909333,
                41.162875
              ],
              [
                28.909064,
                41.163269
              ],
              [
                28.908679,
                41.163733
              ],
              [
                28.908375,
                41.164006
              ],
              [
                28.908271,
                41.164084
              ],
              [
                28.907995,
                41.164291
              ],
              [
                28.907401,
                41.164611
              ],
              [
                28.906528,
                41.164947
              ],
              [
                28.905502,
                41.165272
              ],
              [
                28.895725,
                41.168495
              ],
              [
                28.893985,
                41.169179
              ],
              [
                28.893094,
                41.169585
              ],
              [
                28.892261,
                41.170009
              ],
              [
                28.891292,
                41.170601
              ],
              [
                28.887646,
                41.173489
              ],
              [
                28.884581,
                41.176289
              ],
              [
                28.883834,
                41.176974
              ],
              [
                28.874805,
                41.185696
              ],
              [
                28.87373,
                41.186938
              ],
              [
                28.873023,
                41.187892
              ],
              [
                28.87224,
                41.188996
              ],
              [
                28.871812,
                41.189665
              ],
              [
                28.871522,
                41.190317
              ],
              [
                28.869949,
                41.195165
              ],
              [
                28.869727,
                41.19568
              ],
              [
                28.869471,
                41.196183
              ],
              [
                28.869107,
                41.19672
              ],
              [
                28.868537,
                41.19733
              ],
              [
                28.86789,
                41.197877
              ],
              [
                28.867098,
                41.198469
              ],
              [
                28.866313,
                41.198986
              ],
              [
                28.854694,
                41.205052
              ],
              [
                28.853411,
                41.205681
              ],
              [
                28.852236,
                41.206235
              ],
              [
                28.850938,
                41.206823
              ],
              [
                28.848333,
                41.207899
              ],
              [
                28.846668,
                41.208631
              ],
              [
                28.84557,
                41.209202
              ],
              [
                28.844904,
                41.209641
              ],
              [
                28.84413,
                41.210219
              ],
              [
                28.843683,
                41.210613
              ],
              [
                28.843351,
                41.210921
              ],
              [
                28.843018,
                41.21128
              ],
              [
                28.842686,
                41.211732
              ],
              [
                28.83752,
                41.221814
              ],
              [
                28.836979,
                41.222683
              ],
              [
                28.836438,
                41.223401
              ],
              [
                28.82863,
                41.23171
              ],
              [
                28.828255,
                41.232002
              ],
              [
                28.827697,
                41.232328
              ],
              [
                28.82723,
                41.232563
              ],
              [
                28.826625,
                41.232797
              ],
              [
                28.821571,
                41.234727
              ],
              [
                28.819626,
                41.235616
              ],
              [
                28.818654,
                41.236102
              ],
              [
                28.817591,
                41.236691
              ],
              [
                28.816398,
                41.237473
              ],
              [
                28.812476,
                41.240274
              ],
              [
                28.811146,
                41.241257
              ],
              [
                28.809826,
                41.242314
              ],
              [
                28.809023,
                41.242986
              ],
              [
                28.808183,
                41.243687
              ],
              [
                28.806871,
                41.244784
              ],
              [
                28.806633,
                41.244983
              ],
              [
                28.806113,
                41.245309
              ],
              [
                28.805399,
                41.245701
              ],
              [
                28.804836,
                41.245945
              ],
              [
                28.804285,
                41.246116
              ],
              [
                28.794843,
                41.248134
              ],
              [
                28.793612,
                41.248497
              ],
              [
                28.79265,
                41.248831
              ],
              [
                28.791615,
                41.249275
              ],
              [
                28.789591,
                41.250306
              ],
              [
                28.788214,
                41.251082
              ],
              [
                28.78759,
                41.251516
              ],
              [
                28.784977,
                41.253534
              ],
              [
                28.784284,
                41.253955
              ],
              [
                28.783435,
                41.254387
              ],
              [
                28.779242,
                41.255956
              ],
              [
                28.77837,
                41.256207
              ],
              [
                28.777132,
                41.256409
              ],
              [
                28.776032,
                41.256519
              ],
              [
                28.772039,
                41.256557
              ],
              [
                28.769657,
                41.256538
              ],
              [
                28.768398,
                41.256528
              ],
              [
                28.754846,
                41.256352
              ],
              [
                28.747909,
                41.256102
              ],
              [
                28.745529,
                41.256049
              ],
              [
                28.743873,
                41.256037
              ],
              [
                28.742603,
                41.256033
              ],
              [
                28.726574,
                41.255774
              ],
              [
                28.724491,
                41.255724
              ],
              [
                28.722112,
                41.25565
              ],
              [
                28.719858,
                41.255647
              ],
              [
                28.713816,
                41.255541
              ],
              [
                28.712728,
                41.255531
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kağıthane Station (M11)",
            "description": "M11 Metro Station opened on 22 January 2023 (01-2023). Major transfer hub connecting with M7 Yıldız – Mahmutbey metro line and Cendere Valley.",
            "style": {
              "color": "#A1609B",
              "fill": "#A1609B"
            },
            "lineCode": "M11"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.976622,
              41.080186
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Üniversite - Hasdal Station",
            "description": "M11 Metro Station opened on 22 January 2023 (01-2023). Serving Istanbul University Hasdal Campus, Hasdal Barracks, and TEM highway junction.",
            "style": {
              "color": "#A1609B",
              "fill": "#A1609B"
            },
            "lineCode": "M11"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.946977,
              41.121253
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kemerburgaz Station",
            "description": "M11 Metro Station opened on 22 January 2023 (01-2023). Serving historic Kemerburgaz town and Belgrad Forest eastern gateway.",
            "style": {
              "color": "#A1609B",
              "fill": "#A1609B"
            },
            "lineCode": "M11"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.910364,
              41.159128
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Göktürk Station",
            "description": "M11 Metro Station opened on 22 January 2023 (01-2023). Serving Göktürk residential district center along Istanbul Avenue.",
            "style": {
              "color": "#A1609B",
              "fill": "#A1609B"
            },
            "lineCode": "M11"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.883834,
              41.176974
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İhsaniye Station",
            "description": "M11 Metro Station opened on 22 January 2023 (01-2023). Serving Northern Marmara Motorway Ihsaniye interchange and Işıklar village.",
            "style": {
              "color": "#A1609B",
              "fill": "#A1609B"
            },
            "lineCode": "M11"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.809023,
              41.242986
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İstanbul Havalimanı Station",
            "description": "M11 Metro Station opened on 22 January 2023 (01-2023). Major airport terminal hub directly facing Istanbul Airport (IST) main departures and arrivals concourses with moving walkways.",
            "style": {
              "color": "#A1609B",
              "fill": "#A1609B"
            },
            "lineCode": "M11"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.742603,
              41.256033
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kargo Terminali Station",
            "description": "M11 Metro Station opened on 22 January 2023 (01-2023). Initial northwest terminus serving Istanbul Airport Cargo City, Turkish Cargo hub, and customs complex.",
            "style": {
              "color": "#A1609B",
              "fill": "#A1609B"
            },
            "lineCode": "M11"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.712728,
              41.255531
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m3-metrokent-kayasehir-2023-04",
    "name": "M3: Metrokent - Kayaşehir Merkez Extension (Opening: 04-2023)",
    "date": {
      "year": 2023,
      "month": 4
    },
    "fileName": "m3-metrokent-kayasehir-2023-04.kml",
    "color": "#0CA6DF",
    "visible": true,
    "isSample": true,
    "category": "M3 Metro",
    "description": "M3 hattının Başakşehir/Metrokent’ten Kayaşehir Merkez’e 6,2 km’lik uzatması (4 yeni istasyon: Onurkent, Şehir Hastanesi, Toplu Konutlar, Kayaşehir Merkez). Başakşehir Çam ve Sakura Şehir Hastanesi’ne doğrudan metro bağlantısı sağlanmıştır. Açılış: 8 Nisan 2023.",
    "placemarksCount": 5,
    "bounds": [
      [
        41.102849,
        28.766351
      ],
      [
        41.119027,
        28.801643
      ]
    ],
    "uploadedAt": "2023-04-08T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M3 Metrokent - Kayaşehir Merkez Uzatması Ray Güzergahı",
            "description": "M3 Başakşehir/Metrokent – Kayaşehir Merkez Uzatması. Açılış: 8 Nisan 2023 (04-2023), hat uzunluğu 6,2 km, 4 yeni istasyon.",
            "style": {
              "color": "#0CA6DF",
              "width": 4.5,
              "opacity": 0.95
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.801642,
                41.109088
              ],
              [
                28.801643,
                41.110188
              ],
              [
                28.801431,
                41.112926
              ],
              [
                28.801368,
                41.113167
              ],
              [
                28.801253,
                41.113453
              ],
              [
                28.801091,
                41.113784
              ],
              [
                28.800866,
                41.114094
              ],
              [
                28.800597,
                41.114342
              ],
              [
                28.800237,
                41.114574
              ],
              [
                28.799924,
                41.11473
              ],
              [
                28.799441,
                41.114918
              ],
              [
                28.798996,
                41.115039
              ],
              [
                28.798631,
                41.115115
              ],
              [
                28.798074,
                41.115204
              ],
              [
                28.797771,
                41.115229
              ],
              [
                28.79743,
                41.115234
              ],
              [
                28.796898,
                41.115207
              ],
              [
                28.796465,
                41.115175
              ],
              [
                28.79602,
                41.11511
              ],
              [
                28.795447,
                41.115004
              ],
              [
                28.79461,
                41.114819
              ],
              [
                28.793755,
                41.114576
              ],
              [
                28.790467,
                41.113542
              ],
              [
                28.786181,
                41.112155
              ],
              [
                28.785859,
                41.112024
              ],
              [
                28.785594,
                41.111893
              ],
              [
                28.785112,
                41.111595
              ],
              [
                28.784722,
                41.111286
              ],
              [
                28.784363,
                41.110877
              ],
              [
                28.784076,
                41.110487
              ],
              [
                28.78387,
                41.110172
              ],
              [
                28.783649,
                41.109771
              ],
              [
                28.783502,
                41.109258
              ],
              [
                28.783444,
                41.108763
              ],
              [
                28.783469,
                41.106224
              ],
              [
                28.78346,
                41.10589
              ],
              [
                28.78342,
                41.105511
              ],
              [
                28.783314,
                41.105246
              ],
              [
                28.783256,
                41.105111
              ],
              [
                28.783121,
                41.104918
              ],
              [
                28.782749,
                41.104532
              ],
              [
                28.78246,
                41.104318
              ],
              [
                28.782009,
                41.104045
              ],
              [
                28.781647,
                41.103869
              ],
              [
                28.780961,
                41.103698
              ],
              [
                28.78045,
                41.103604
              ],
              [
                28.779363,
                41.103483
              ],
              [
                28.779288,
                41.103474
              ],
              [
                28.778842,
                41.103426
              ],
              [
                28.777564,
                41.103286
              ],
              [
                28.776173,
                41.103133
              ],
              [
                28.774289,
                41.103
              ],
              [
                28.773251,
                41.102872
              ],
              [
                28.7728,
                41.102849
              ],
              [
                28.77229,
                41.102861
              ],
              [
                28.771964,
                41.102893
              ],
              [
                28.771671,
                41.102924
              ],
              [
                28.771326,
                41.103005
              ],
              [
                28.771045,
                41.103086
              ],
              [
                28.77079,
                41.103179
              ],
              [
                28.770513,
                41.103296
              ],
              [
                28.770027,
                41.103588
              ],
              [
                28.769641,
                41.10389
              ],
              [
                28.769314,
                41.104194
              ],
              [
                28.769072,
                41.104445
              ],
              [
                28.768906,
                41.104672
              ],
              [
                28.768718,
                41.105054
              ],
              [
                28.76826,
                41.106879
              ],
              [
                28.768059,
                41.107739
              ],
              [
                28.767826,
                41.108695
              ],
              [
                28.766773,
                41.113298
              ],
              [
                28.766671,
                41.113825
              ],
              [
                28.766571,
                41.114344
              ],
              [
                28.766487,
                41.115118
              ],
              [
                28.766388,
                41.116006
              ],
              [
                28.766351,
                41.117374
              ],
              [
                28.766365,
                41.117963
              ],
              [
                28.766385,
                41.119027
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Onurkent Station",
            "description": "M3 Metro Station opened on 8 April 2023 (04-2023). Serving Onurkent residential district and Mimar Kemalettin Boulevard in Başakşehir.",
            "style": {
              "color": "#0CA6DF",
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.790467,
              41.113542
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Şehir Hastanesi Station",
            "description": "Directly integrated into Başakşehir Çam and Sakura City Hospital opened on 8 April 2023 (04-2023). Seamless underground access to one of Europe's largest medical centers.",
            "style": {
              "color": "#0CA6DF",
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.777564,
              41.103286
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Toplu Konutlar Station",
            "description": "M3 Metro Station opened on 8 April 2023 (04-2023). Serving Kayaşehir 15th & 16th district mass housing areas.",
            "style": {
              "color": "#0CA6DF",
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.768059,
              41.107739
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Kayaşehir Merkez Station",
            "description": "Northern terminus of M3 opened on 8 April 2023 (04-2023) at Kayaşehir Town Square. Future transfer to M11 Istanbul Airport metro line.",
            "style": {
              "color": "#0CA6DF",
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.766385,
              41.119027
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-t5-cibali-eminonu-2023-08",
    "name": "T5: Cibali - Eminönü Extension (Opening: 08-2023)",
    "date": {
      "year": 2023,
      "month": 8
    },
    "fileName": "t5-cibali-eminonu-2023-08.kml",
    "color": "#7B72B2",
    "visible": true,
    "isSample": true,
    "category": "T5 Tramway",
    "description": "T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı 2. Etabı: Cibali durağından başlayarak Haliç sahil şeridi boyunca Küçükpazar ve Eminönü istasyonlarına uzanan 1 km'lik tramvay etabı (30 Ağustos 2023).",
    "placemarksCount": 3,
    "bounds": [
      [
        41.018333,
        28.961299
      ],
      [
        41.023316,
        28.97
      ]
    ],
    "uploadedAt": "2023-08-30T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "T5 Cibali - Eminönü Tramvay Güzergahı",
            "description": "T5 Cibali - Eminönü katenersiz alttan beslemeli (APS) sahil tramvay hattı (30 Ağustos 2023).",
            "style": {
              "color": "#7B72B2",
              "width": 4.5,
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.961299,
                41.023316
              ],
              [
                28.96185,
                41.02275
              ],
              [
                28.96245,
                41.02205
              ],
              [
                28.963056,
                41.021389
              ],
              [
                28.96382,
                41.02072
              ],
              [
                28.96475,
                41.02008
              ],
              [
                28.96585,
                41.01952
              ],
              [
                28.96715,
                41.01905
              ],
              [
                28.96845,
                41.01865
              ],
              [
                28.96935,
                41.01845
              ],
              [
                28.97,
                41.018333
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Küçükpazar Station",
            "description": "T5 Tram Station opened on 30 August 2023 (08-2023). Serving Küçükpazar waterfront and pedestrian interchange to M2 Haliç metro station.",
            "style": {
              "color": "#7B72B2",
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.963056,
              41.021389
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Eminönü Station (T5)",
            "description": "Southern terminus of T5 opened on 30 August 2023 (08-2023) at Eminönü Square. Direct transfer to T1 Tram and City Lines ferries.",
            "style": {
              "color": "#7B72B2",
              "fill": "#7B72B2"
            },
            "lineCode": "T5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.97,
              41.018333
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m11-gayrettepe-kagithane-2024-01",
    "name": "M11: Gayrettepe Extension & Station (Opening: 01-2024)",
    "date": {
      "year": 2024,
      "month": 1
    },
    "fileName": "m11-gayrettepe-kagithane-2024-01.kml",
    "color": "#A1609B",
    "visible": true,
    "isSample": true,
    "category": "M11 Metro Line",
    "description": "M11 İstanbul Havalimanı Metrosu Gayrettepe Etabı: Kağıthane'den Gayrettepe'ye uzanan 3.5 km'lik ultra derin (72m) hızlı metro tüneli ve Gayrettepe transfer merkezi açılışı (29 Ocak 2024). M2 Yenikapı-Hacıosman metrosu ve Zincirlikuyu Metrobüs aktarmasını doğrudan sağlar.",
    "placemarksCount": 2,
    "bounds": [
      [
        41.066,
        28.976
      ],
      [
        41.081,
        29.012
      ]
    ],
    "uploadedAt": "2024-01-29T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M11 Gayrettepe - Kağıthane Ray Güzergahı",
            "description": "M11 Gayrettepe – İstanbul Havalimanı Metro Hattı Gayrettepe – Kağıthane hızlı metro tünel güzergahı (29 Ocak 2024).",
            "style": {
              "color": "#A1609B",
              "width": 5,
              "fill": "#A1609B"
            },
            "lineCode": "M11"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.976622,
                41.080186
              ],
              [
                28.976462,
                41.080023
              ],
              [
                28.977466,
                41.07949
              ],
              [
                28.986762,
                41.075122
              ],
              [
                28.988002,
                41.074693
              ],
              [
                28.988872,
                41.0745
              ],
              [
                28.98974,
                41.074362
              ],
              [
                28.995448,
                41.073933
              ],
              [
                28.99689,
                41.0737
              ],
              [
                29.00292,
                41.071801
              ],
              [
                29.003743,
                41.07141
              ],
              [
                29.004576,
                41.070888
              ],
              [
                29.006873,
                41.069057
              ],
              [
                29.007906,
                41.068351
              ],
              [
                29.008664,
                41.06785
              ],
              [
                29.00939,
                41.067393
              ],
              [
                29.010506,
                41.066755
              ],
              [
                29.0114,
                41.066268
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Gayrettepe Station (M11)",
            "description": "M11 Metro Station opened on 29 January 2024 (01-2024). Deepest subway station in Turkey (72m). Direct underground interchanges with M2 Yenikapı – Hacıosman line and Zincirlikuyu Metrobüs terminal.",
            "style": {
              "color": "#A1609B",
              "width": 3,
              "fill": "#A1609B"
            },
            "lineCode": "M11"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.010506,
              41.066755
            ]
          }
        }
      ]
    }
  },
  {
      "id": "rail-t6-sirkeci-kazlicesme-2024-02",
      "name": "T6: Sirkeci - Kazlıçeşme Line (Opening: 02-2024)",
      "date": {
          "year": 2024,
          "month": 2
      },
      "fileName": "t6-sirkeci-kazlicesme-2024-02.kml",
      "color": "#E77C7C",
      "visible": true,
      "isSample": true,
      "category": "T6 Tram / Light Rail Line",
      "description": "T6 Sirkeci – Kazlıçeşme Raylı Sistem ve Yaya Odaklı Yeni Nesil Ulaşım Projesi: Tarihi Marmara sahil koridorunda 8.3 km'lik raylı sistem ve 8 istasyonun hizmete girişi (26 Şubat 2024). Marmaray (B1), T1, M1, M2 ve İDO hatlarıyla entegredir.",
      "placemarksCount": 9,
      "bounds": [
          [
              40.99,
              28.915
          ],
          [
              41.018,
              28.985
          ]
      ],
      "uploadedAt": "2024-02-26T09:00:00.000Z",
      "geoJson": {
          "type": "FeatureCollection",
          "features": [
              {
                  "type": "Feature",
                  "properties": {
                      "name": "T6 Sirkeci - Kazlıçeşme Ray Güzergahı",
                      "description": "T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı güzergahı (26 Şubat 2024).",
                      "style": {
                          "color": "#E77C7C",
                          "width": 4.5,
                          "fill": "#E77C7C"
                      },
                      "lineCode": "T6"
                  },
                  "geometry": {
                      "type": "LineString",
                      "coordinates": [
                          [
                              28.978444,
                              41.014998
                          ],
                          [
                              28.9785,
                              41.015002
                          ],
                          [
                              28.978927,
                              41.015044
                          ],
                          [
                              28.980529,
                              41.015257
                          ],
                          [
                              28.980961,
                              41.015329
                          ],
                          [
                              28.981231,
                              41.015389
                          ],
                          [
                              28.981694,
                              41.015505
                          ],
                          [
                              28.981968,
                              41.015586
                          ],
                          [
                              28.982482,
                              41.015748
                          ],
                          [
                              28.982749,
                              41.015843
                          ],
                          [
                              28.983209,
                              41.016001
                          ],
                          [
                              28.983383,
                              41.016058
                          ],
                          [
                              28.983565,
                              41.016111
                          ],
                          [
                              28.983799,
                              41.016157
                          ],
                          [
                              28.984041,
                              41.016184
                          ],
                          [
                              28.984298,
                              41.016191
                          ],
                          [
                              28.984599,
                              41.016178
                          ],
                          [
                              28.984836,
                              41.016137
                          ],
                          [
                              28.985078,
                              41.016083
                          ],
                          [
                              28.985306,
                              41.016022
                          ],
                          [
                              28.985528,
                              41.015948
                          ],
                          [
                              28.985829,
                              41.015803
                          ],
                          [
                              28.986148,
                              41.015615
                          ],
                          [
                              28.986339,
                              41.015464
                          ],
                          [
                              28.986468,
                              41.015338
                          ],
                          [
                              28.98658,
                              41.015207
                          ],
                          [
                              28.986669,
                              41.015063
                          ],
                          [
                              28.98677,
                              41.014862
                          ],
                          [
                              28.986838,
                              41.014691
                          ],
                          [
                              28.986882,
                              41.014498
                          ],
                          [
                              28.986914,
                              41.014295
                          ],
                          [
                              28.986932,
                              41.014071
                          ],
                          [
                              28.98703,
                              41.011972
                          ],
                          [
                              28.987024,
                              41.01161
                          ],
                          [
                              28.987011,
                              41.011254
                          ],
                          [
                              28.98699,
                              41.011
                          ],
                          [
                              28.98695,
                              41.010732
                          ],
                          [
                              28.986876,
                              41.010352
                          ],
                          [
                              28.986796,
                              41.010037
                          ],
                          [
                              28.986717,
                              41.009785
                          ],
                          [
                              28.986628,
                              41.009542
                          ],
                          [
                              28.98649,
                              41.009229
                          ],
                          [
                              28.986337,
                              41.008916
                          ],
                          [
                              28.986139,
                              41.00856
                          ],
                          [
                              28.985909,
                              41.008191
                          ],
                          [
                              28.985694,
                              41.007911
                          ],
                          [
                              28.985422,
                              41.007583
                          ],
                          [
                              28.985192,
                              41.007316
                          ],
                          [
                              28.984814,
                              41.006946
                          ],
                          [
                              28.98449,
                              41.006663
                          ],
                          [
                              28.984179,
                              41.00641
                          ],
                          [
                              28.983833,
                              41.006147
                          ],
                          [
                              28.9836,
                              41.005984
                          ],
                          [
                              28.983496,
                              41.005918
                          ],
                          [
                              28.982954,
                              41.005581
                          ],
                          [
                              28.982333,
                              41.005195
                          ],
                          [
                              28.982218,
                              41.005124
                          ],
                          [
                              28.981432,
                              41.004635
                          ],
                          [
                              28.981057,
                              41.004417
                          ],
                          [
                              28.980345,
                              41.004025
                          ],
                          [
                              28.979852,
                              41.003758
                          ],
                          [
                              28.979596,
                              41.003631
                          ],
                          [
                              28.979338,
                              41.003519
                          ],
                          [
                              28.979223,
                              41.003474
                          ],
                          [
                              28.979006,
                              41.003391
                          ],
                          [
                              28.978811,
                              41.003329
                          ],
                          [
                              28.978611,
                              41.003269
                          ],
                          [
                              28.978412,
                              41.003219
                          ],
                          [
                              28.978149,
                              41.003163
                          ],
                          [
                              28.976082,
                              41.00274
                          ],
                          [
                              28.975287,
                              41.002594
                          ],
                          [
                              28.974914,
                              41.002542
                          ],
                          [
                              28.974501,
                              41.002499
                          ],
                          [
                              28.974152,
                              41.002475
                          ],
                          [
                              28.973803,
                              41.002461
                          ],
                          [
                              28.973503,
                              41.002459
                          ],
                          [
                              28.972937,
                              41.002471
                          ],
                          [
                              28.972631,
                              41.00249
                          ],
                          [
                              28.972093,
                              41.002544
                          ],
                          [
                              28.971508,
                              41.002617
                          ],
                          [
                              28.971298,
                              41.002644
                          ],
                          [
                              28.968764,
                              41.002973
                          ],
                          [
                              28.968654,
                              41.002986
                          ],
                          [
                              28.968253,
                              41.003038
                          ],
                          [
                              28.9679,
                              41.003071
                          ],
                          [
                              28.966782,
                              41.003141
                          ],
                          [
                              28.966689,
                              41.003147
                          ],
                          [
                              28.966577,
                              41.003154
                          ],
                          [
                              28.96544,
                              41.00323
                          ],
                          [
                              28.965113,
                              41.003254
                          ],
                          [
                              28.964364,
                              41.003337
                          ],
                          [
                              28.963241,
                              41.003417
                          ],
                          [
                              28.96175,
                              41.003508
                          ],
                          [
                              28.961315,
                              41.003546
                          ],
                          [
                              28.960906,
                              41.003604
                          ],
                          [
                              28.960551,
                              41.003662
                          ],
                          [
                              28.960391,
                              41.003692
                          ],
                          [
                              28.960006,
                              41.003778
                          ],
                          [
                              28.958912,
                              41.004057
                          ],
                          [
                              28.958046,
                              41.004282
                          ],
                          [
                              28.957572,
                              41.0044
                          ],
                          [
                              28.957043,
                              41.00452
                          ],
                          [
                              28.956741,
                              41.004571
                          ],
                          [
                              28.956443,
                              41.004613
                          ],
                          [
                              28.955696,
                              41.004699
                          ],
                          [
                              28.954028,
                              41.004812
                          ],
                          [
                              28.953233,
                              41.004858
                          ],
                          [
                              28.952819,
                              41.004866
                          ],
                          [
                              28.952235,
                              41.004838
                          ],
                          [
                              28.951904,
                              41.004801
                          ],
                          [
                              28.951391,
                              41.004713
                          ],
                          [
                              28.950851,
                              41.004602
                          ],
                          [
                              28.950325,
                              41.004469
                          ],
                          [
                              28.950078,
                              41.004411
                          ],
                          [
                              28.949506,
                              41.004297
                          ],
                          [
                              28.946816,
                              41.003766
                          ],
                          [
                              28.946368,
                              41.003676
                          ],
                          [
                              28.945499,
                              41.003521
                          ],
                          [
                              28.940253,
                              41.002773
                          ],
                          [
                              28.939024,
                              41.00258
                          ],
                          [
                              28.938612,
                              41.002487
                          ],
                          [
                              28.938101,
                              41.002338
                          ],
                          [
                              28.937763,
                              41.002217
                          ],
                          [
                              28.936568,
                              41.001752
                          ],
                          [
                              28.935179,
                              41.001208
                          ],
                          [
                              28.934906,
                              41.001108
                          ],
                          [
                              28.934356,
                              41.000845
                          ],
                          [
                              28.93398,
                              41.000631
                          ],
                          [
                              28.933621,
                              41.000397
                          ],
                          [
                              28.933323,
                              41.000157
                          ],
                          [
                              28.93311,
                              40.999969
                          ],
                          [
                              28.933034,
                              40.999903
                          ],
                          [
                              28.932602,
                              40.999472
                          ],
                          [
                              28.93252,
                              40.999383
                          ],
                          [
                              28.932407,
                              40.999237
                          ],
                          [
                              28.932203,
                              40.998946
                          ],
                          [
                              28.932017,
                              40.998634
                          ],
                          [
                              28.931874,
                              40.998334
                          ],
                          [
                              28.931715,
                              40.997921
                          ],
                          [
                              28.931574,
                              40.997626
                          ],
                          [
                              28.931474,
                              40.997376
                          ],
                          [
                              28.931387,
                              40.99716
                          ],
                          [
                              28.931351,
                              40.99709
                          ],
                          [
                              28.931232,
                              40.996856
                          ],
                          [
                              28.931119,
                              40.996667
                          ],
                          [
                              28.930982,
                              40.99645
                          ],
                          [
                              28.93082,
                              40.99625
                          ],
                          [
                              28.930661,
                              40.99606
                          ],
                          [
                              28.930387,
                              40.99577
                          ],
                          [
                              28.930182,
                              40.995582
                          ],
                          [
                              28.930085,
                              40.9955
                          ],
                          [
                              28.929313,
                              40.994867
                          ],
                          [
                              28.928887,
                              40.994596
                          ],
                          [
                              28.928566,
                              40.994413
                          ],
                          [
                              28.928087,
                              40.994183
                          ],
                          [
                              28.926546,
                              40.993455
                          ],
                          [
                              28.925536,
                              40.992992
                          ],
                          [
                              28.925381,
                              40.992911
                          ],
                          [
                              28.925207,
                              40.992804
                          ],
                          [
                              28.924966,
                              40.992644
                          ],
                          [
                              28.924801,
                              40.992531
                          ],
                          [
                              28.92464,
                              40.992428
                          ],
                          [
                              28.924426,
                              40.992311
                          ],
                          [
                              28.924096,
                              40.992155
                          ],
                          [
                              28.923727,
                              40.991999
                          ],
                          [
                              28.923259,
                              40.991848
                          ],
                          [
                              28.922896,
                              40.991764
                          ],
                          [
                              28.922665,
                              40.991723
                          ],
                          [
                              28.922399,
                              40.991697
                          ],
                          [
                              28.922082,
                              40.991682
                          ],
                          [
                              28.921784,
                              40.991682
                          ],
                          [
                              28.921331,
                              40.991719
                          ],
                          [
                              28.921116,
                              40.991753
                          ],
                          [
                              28.920908,
                              40.991794
                          ],
                          [
                              28.920644,
                              40.991854
                          ],
                          [
                              28.919725,
                              40.992085
                          ],
                          [
                              28.919414,
                              40.992163
                          ],
                          [
                              28.918768,
                              40.992305
                          ],
                          [
                              28.918168,
                              40.992399
                          ],
                          [
                              28.916885,
                              40.992579
                          ]
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Sirkeci Station (T6)",
                      "description": "T6 Tram/Rail Station opened on 26 February 2024 (02-2024) inside historic Sirkeci Railway Terminal. Direct transfers with Marmaray (B1) and T1 Tramway.",
                      "style": {
                          "color": "#E77C7C",
                          "width": 3,
                          "fill": "#E77C7C"
                      },
                      "lineCode": "T6"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.978444,
                          41.014998
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Cankurtaran Station",
                      "description": "T6 Station opened on 26 February 2024 (02-2024). Serving Sarayburnu coastal promenade, historic sea walls, and Ahırkapı.",
                      "style": {
                          "color": "#E77C7C",
                          "width": 3,
                          "fill": "#E77C7C"
                      },
                      "lineCode": "T6"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.982954,
                          41.005581
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Kumkapı Station",
                      "description": "T6 Station opened on 26 February 2024 (02-2024). Serving Kumkapı historical seafood district and coastal avenue.",
                      "style": {
                          "color": "#E77C7C",
                          "width": 3,
                          "fill": "#E77C7C"
                      },
                      "lineCode": "T6"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.963241,
                          41.003417
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Yenikapı Station (T6)",
                      "description": "T6 Interchange Station opened on 26 February 2024 (02-2024). Direct interchange with Marmaray (B1), M1A/M1B, M2, and İDO ferries.",
                      "style": {
                          "color": "#E77C7C",
                          "width": 3,
                          "fill": "#E77C7C"
                      },
                      "lineCode": "T6"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.952235,
                          41.004838
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Cerrahpaşa Station",
                      "description": "Newly built T6 Station opened on 26 February 2024 (02-2024). Direct pedestrian bridge access to Istanbul Training and Research Hospital and Cerrahpaşa Medical Faculty.",
                      "style": {
                          "color": "#E77C7C",
                          "width": 3,
                          "fill": "#E77C7C"
                      },
                      "lineCode": "T6"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.940253,
                          41.002773
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Kocamustafapaşa Station",
                      "description": "T6 Station opened on 26 February 2024 (02-2024). Serving historic Samatya Square, fishermen bazaar, and coastal facilities.",
                      "style": {
                          "color": "#E77C7C",
                          "width": 3,
                          "fill": "#E77C7C"
                      },
                      "lineCode": "T6"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.93311,
                          40.999969
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Yedikule Station",
                      "description": "T6 Station opened on 26 February 2024 (02-2024). Serving historic Yedikule Dungeons Fortress Museum and Yedikule Gasworks cultural center.",
                      "style": {
                          "color": "#E77C7C",
                          "width": 3,
                          "fill": "#E77C7C"
                      },
                      "lineCode": "T6"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.926546,
                          40.993455
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Kazlıçeşme Station (T6)",
                      "description": "Western terminal of T6 line opened on 26 February 2024 (02-2024). Direct platform interchange with Marmaray (B1) and Zeytinburnu bus terminus.",
                      "style": {
                          "color": "#E77C7C",
                          "width": 3,
                          "fill": "#E77C7C"
                      },
                      "lineCode": "T6"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.916885,
                          40.992579
                      ]
                  }
              }
          ]
      }
  },
  {
    "id": "rail-m3-kirazli-bakirkoy-sahil-2024-03",
    "name": "M3: Kirazlı - Bakırköy Sahil Extension (Opening: 03-2024)",
    "date": {
      "year": 2024,
      "month": 3
    },
    "fileName": "m3-kirazli-bakirkoy-sahil-2024-03.kml",
    "color": "#0CA6DF",
    "visible": true,
    "isSample": true,
    "category": "M3 Metro Line",
    "description": "M3 Bakırköy Sahil – Kayaşehir Merkez Metro Hattı 2. Etabı: Kirazlı'dan Molla Gürani, İlkyuva, Haznedar, İncirli, Özgürlük Meydanı istasyonları üzerinden Bakırköy Sahil Parkı ve İDO İskelesi'ne uzanan 8.4 km'lik metro etabı (10 Mart 2024).",
    "placemarksCount": 7,
    "bounds": [
      [
        40.973611,
        28.84308
      ],
      [
        41.032052,
        28.87531
      ]
    ],
    "uploadedAt": "2024-03-10T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M3 Kirazlı - Bakırköy Sahil Ray Güzergahı",
            "description": "M3 Bakırköy Sahil uzatması çift tüp delme tünel ray hattı (10 Mart 2024).",
            "style": {
              "color": "#0CA6DF",
              "width": 5,
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.84308,
                41.032052
              ],
              [
                28.84395,
                41.03102
              ],
              [
                28.84512,
                41.02941
              ],
              [
                28.8465,
                41.02773
              ],
              [
                28.847778,
                41.026111
              ],
              [
                28.84931,
                41.02332
              ],
              [
                28.85046,
                41.02201
              ],
              [
                28.85226,
                41.02096
              ],
              [
                28.85521,
                41.0202
              ],
              [
                28.857778,
                41.019444
              ],
              [
                28.85986,
                41.01828
              ],
              [
                28.86114,
                41.01687
              ],
              [
                28.86315,
                41.01422
              ],
              [
                28.865,
                41.012222
              ],
              [
                28.86675,
                41.01025
              ],
              [
                28.86861,
                41.00812
              ],
              [
                28.87023,
                41.00634
              ],
              [
                28.871667,
                41.004722
              ],
              [
                28.87285,
                41.00281
              ],
              [
                28.87392,
                41.00095
              ],
              [
                28.87465,
                40.99912
              ],
              [
                28.875,
                40.9975
              ],
              [
                28.87522,
                40.99534
              ],
              [
                28.87531,
                40.99312
              ],
              [
                28.87528,
                40.99045
              ],
              [
                28.87515,
                40.98762
              ],
              [
                28.87489,
                40.98512
              ],
              [
                28.87452,
                40.98321
              ],
              [
                28.874167,
                40.981667
              ],
              [
                28.87361,
                40.97985
              ],
              [
                28.87268,
                40.97812
              ],
              [
                28.87125,
                40.97634
              ],
              [
                28.86962,
                40.97485
              ],
              [
                28.867778,
                40.973611
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Molla Gürani Station",
            "description": "M3 Metro Station opened on 10 March 2024 (03-2024). Serving Bağcılar İnönü neighborhood and Molla Gürani Park.",
            "style": {
              "color": "#0CA6DF",
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.847778,
              41.026111
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İlkyuva Station",
            "description": "M3 Metro Station opened on 10 March 2024 (03-2024). Serving Bahçelievler Siyavuşpaşa and İlkyuva square.",
            "style": {
              "color": "#0CA6DF",
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.865,
              41.012222
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Haznedar Station",
            "description": "M3 Metro Station opened on 10 March 2024 (03-2024). Serving Haznedar square and Güngören/Bahçelievler border.",
            "style": {
              "color": "#0CA6DF",
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.871667,
              41.004722
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "İncirli Station",
            "description": "Major multimodal transit hub opened on 10 March 2024 (03-2024). Connecting M3 with M1A metro and Metrobüs.",
            "style": {
              "color": "#0CA6DF",
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.875,
              40.9975
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Özgürlük Meydanı Station",
            "description": "Major central Bakırköy station opened on 10 March 2024 (03-2024). Direct interchange with Marmaray and YHT high-speed trains.",
            "style": {
              "color": "#0CA6DF",
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.874167,
              40.981667
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Bakırköy Sahil Station",
            "description": "Southern terminus of M3 opened on 10 March 2024 (03-2024). Serving Bakırköy Coastal Park and İDO Sea Bus ferry terminal.",
            "style": {
              "color": "#0CA6DF",
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.867778,
              40.973611
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m5-cekmekoy-samandira-2024-03",
    "name": "M5: Çekmeköy - Samandıra Merkez Extension (Opening: 03-2024)",
    "date": {
      "year": 2024,
      "month": 3
    },
    "fileName": "m5-cekmekoy-samandira-2024-03.kml",
    "color": "#683166",
    "visible": true,
    "isSample": true,
    "category": "M5 Metro Line",
    "description": "M5 Üsküdar – Samandıra Merkez Metro Hattı 3. Etabı: Çekmeköy'den Meclis, Sarıgazi ve Sancaktepe istasyonları üzerinden Samandıra Merkez'e uzanan 5.6 km'lik sürücüsüz metro etabı (16 Mart 2024).",
    "placemarksCount": 5,
    "bounds": [
      [
        40.983611,
        29.189499
      ],
      [
        41.014462,
        29.231389
      ]
    ],
    "uploadedAt": "2024-03-16T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M5 Çekmeköy - Samandıra Merkez Ray Güzergahı",
            "description": "M5 Çekmeköy – Samandıra Merkez tam otomatik sürücüsüz metro tünel ray hattı (16 Mart 2024).",
            "style": {
              "color": "#683166",
              "width": 5,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.189499,
                41.014462
              ],
              [
                29.19255,
                41.01315
              ],
              [
                29.19582,
                41.01142
              ],
              [
                29.198889,
                41.009722
              ],
              [
                29.20245,
                41.00965
              ],
              [
                29.20625,
                41.00982
              ],
              [
                29.20985,
                41.00995
              ],
              [
                29.2125,
                41.01
              ],
              [
                29.2148,
                41.0068
              ],
              [
                29.217222,
                41.001389
              ],
              [
                29.2218,
                40.9982
              ],
              [
                29.22585,
                40.99785
              ],
              [
                29.22752,
                40.99465
              ],
              [
                29.228889,
                40.992222
              ],
              [
                29.22985,
                40.98952
              ],
              [
                29.23075,
                40.98665
              ],
              [
                29.231389,
                40.983611
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Meclis Station",
            "description": "M5 Metro Station opened on 16 March 2024 (03-2024). Serving Sancaktepe Meclis neighborhood.",
            "style": {
              "color": "#683166",
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.198889,
              41.009722
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Sarıgazi Station",
            "description": "M5 Metro Station opened on 16 March 2024 (03-2024). Serving Sarıgazi Square and future M13 interchange.",
            "style": {
              "color": "#683166",
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.2125,
              41.01
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Sancaktepe Station",
            "description": "M5 Metro Station opened on 16 March 2024 (03-2024). Serving Sancaktepe Municipality and City Park.",
            "style": {
              "color": "#683166",
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.228889,
              40.992222
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Samandıra Merkez Station",
            "description": "Eastern terminus of M5 opened on 16 March 2024 (03-2024). Serving Samandıra Square and bus transit interchange.",
            "style": {
              "color": "#683166",
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.231389,
              40.983611
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m9-bahariye-atakoy-2024-03",
    "name": "M9: Bahariye - Ataköy Extension (Opening: 03-2024)",
    "date": {
      "year": 2024,
      "month": 3
    },
    "fileName": "m9-bahariye-atakoy-2024-03.kml",
    "color": "#FCD10D",
    "visible": true,
    "isSample": true,
    "category": "M9 Metro Line",
    "description": "M9 Ataköy – Olimpiyat Metro Hattı 2. Etabı: Bahariye'den Atatürk Mahallesi, Halkalı Caddesi, 15 Temmuz, Doğu Sanayi, 29 Ekim - Cumhuriyet, Çobançeşme, Yenibosna istasyonları üzerinden Marmaray Ataköy Terminali'ne uzanan 10.8 km'lik metro etabı (18 Mart 2024).",
    "placemarksCount": 9,
    "bounds": [
      [
        40.98,
        28.797101
      ],
      [
        41.058505,
        28.856111
      ]
    ],
    "uploadedAt": "2024-03-18T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M9 Bahariye - Ataköy Ray Güzergahı",
            "description": "M9 Bahariye – Ataköy çift tüp delme tünel ray hattı (18 Mart 2024).",
            "style": {
              "color": "#FCD10D",
              "width": 5,
              "fill": "#FCD10D"
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                28.799491,
                41.058505
              ],
              [
                28.79865,
                41.05582
              ],
              [
                28.79782,
                41.05354
              ],
              [
                28.797101,
                41.051866
              ],
              [
                28.79812,
                41.04945
              ],
              [
                28.80115,
                41.04762
              ],
              [
                28.80385,
                41.04618
              ],
              [
                28.806111,
                41.045278
              ],
              [
                28.80862,
                41.04285
              ],
              [
                28.81145,
                41.03982
              ],
              [
                28.81321,
                41.03815
              ],
              [
                28.814167,
                41.036944
              ],
              [
                28.81525,
                41.03212
              ],
              [
                28.81615,
                41.02685
              ],
              [
                28.81695,
                41.02124
              ],
              [
                28.81745,
                41.01785
              ],
              [
                28.817778,
                41.015
              ],
              [
                28.81802,
                41.01215
              ],
              [
                28.81831,
                41.00895
              ],
              [
                28.818611,
                41.006111
              ],
              [
                28.81925,
                41.00385
              ],
              [
                28.82085,
                41.00142
              ],
              [
                28.822778,
                40.999444
              ],
              [
                28.82615,
                40.99672
              ],
              [
                28.83025,
                40.99412
              ],
              [
                28.83415,
                40.99185
              ],
              [
                28.8375,
                40.9898
              ],
              [
                28.84215,
                40.98715
              ],
              [
                28.84725,
                40.98422
              ],
              [
                28.85195,
                40.98185
              ],
              [
                28.856111,
                40.98
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Atatürk Mahallesi Station",
            "description": "M9 Metro Station opened on 18 March 2024 (03-2024). Serving ArenaPark Mall and future interchange to M7 line.",
            "style": {
              "color": "#FCD10D",
              "fill": "#FCD10D"
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.797101,
              41.051866
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Halkalı Caddesi Station",
            "description": "M9 Metro Station opened on 18 March 2024 (03-2024). Serving Mehmet Akif neighborhood and Halkalı Street axis.",
            "style": {
              "color": "#FCD10D",
              "fill": "#FCD10D"
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.806111,
              41.045278
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "15 Temmuz Station",
            "description": "M9 Metro Station opened on 18 March 2024 (03-2024). Serving Bağcılar 15 Temmuz neighborhood.",
            "style": {
              "color": "#FCD10D",
              "fill": "#FCD10D"
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.814167,
              41.036944
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Doğu Sanayi Station",
            "description": "M9 Metro Station opened on 18 March 2024 (03-2024). Serving Doğu Sanayi industrial estate and Değirmenbahçe street.",
            "style": {
              "color": "#FCD10D",
              "fill": "#FCD10D"
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.817778,
              41.015
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "29 Ekim - Cumhuriyet Station",
            "description": "M9 Metro Station opened on 18 March 2024 (03-2024). Serving 29 Ekim Street and Kuyumcukent north residential district.",
            "style": {
              "color": "#FCD10D",
              "fill": "#FCD10D"
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.818611,
              41.006111
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Çobançeşme Station",
            "description": "M9 Metro Station opened on 18 March 2024 (03-2024). Serving Kuyumcukent complex and future M11 Airport metro interchange.",
            "style": {
              "color": "#FCD10D",
              "fill": "#FCD10D"
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.822778,
              40.999444
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Yenibosna Station (M9)",
            "description": "Major multimodal transit hub opened on 18 March 2024 (03-2024). Direct interchange to M1A metro and Metrobüs.",
            "style": {
              "color": "#FCD10D",
              "fill": "#FCD10D"
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.8375,
              40.9898
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Ataköy Station (M9)",
            "description": "Southern terminus of M9 opened on 18 March 2024 (03-2024). Direct underground transfer to Marmaray Ataköy station.",
            "style": {
              "color": "#FCD10D",
              "fill": "#FCD10D"
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.856111,
              40.98
            ]
          }
        }
      ]
    }
  },
  {
      "id": "rail-m11-kargo-arnavutkoy-2024-03",
      "name": "M11: Kargo Terminali - Arnavutköy Hastane Section (Opening: 03-2024)",
      "date": {
          "year": 2024,
          "month": 3
      },
      "fileName": "m11-kargo-arnavutkoy-2024-03.kml",
      "color": "#A1609B",
      "visible": true,
      "isSample": true,
      "category": "M11 Metro Line",
      "description": "M11 İstanbul Havalimanı Metrosu 3. Etabı: Kargo Terminali'den Taşoluk üzerinden Arnavutköy Hastane'ye uzanan 14 km'lik hızlı metro kesimi ve yeni istasyonların açılışı (19 Mart 2024). Arnavutköy ilçe merkezini havalimanına ve Gayrettepe aktarma merkezine bağlar.",
      "placemarksCount": 3,
      "bounds": [
          [
              41.178,
              28.701
          ],
          [
              41.256,
              28.748
          ]
      ],
      "uploadedAt": "2024-03-19T09:00:00.000Z",
      "geoJson": {
          "type": "FeatureCollection",
          "features": [
              {
                  "type": "Feature",
                  "properties": {
                      "name": "M11 Kargo Terminali - Arnavutköy Hastane Ray Güzergahı",
                      "description": "M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı Kargo Terminali – Arnavutköy Hastane hızlı metro tünel güzergahı (19 Mart 2024).",
                      "style": {
                          "color": "#A1609B",
                          "width": 5,
                          "fill": "#A1609B"
                      },
                      "lineCode": "M11"
                  },
                  "geometry": {
                      "type": "LineString",
                      "coordinates": [
                          [
                              28.712728,
                              41.255531
                          ],
                          [
                              28.711059,
                              41.255512
                          ],
                          [
                              28.709922,
                              41.255437
                          ],
                          [
                              28.708945,
                              41.255313
                          ],
                          [
                              28.707988,
                              41.255081
                          ],
                          [
                              28.707297,
                              41.254798
                          ],
                          [
                              28.706794,
                              41.254554
                          ],
                          [
                              28.706249,
                              41.254251
                          ],
                          [
                              28.705785,
                              41.253965
                          ],
                          [
                              28.705368,
                              41.253682
                          ],
                          [
                              28.704867,
                              41.253277
                          ],
                          [
                              28.70446,
                              41.252903
                          ],
                          [
                              28.704093,
                              41.252544
                          ],
                          [
                              28.703585,
                              41.251957
                          ],
                          [
                              28.703139,
                              41.251431
                          ],
                          [
                              28.702574,
                              41.250683
                          ],
                          [
                              28.702353,
                              41.250301
                          ],
                          [
                              28.702172,
                              41.249873
                          ],
                          [
                              28.701973,
                              41.249297
                          ],
                          [
                              28.701835,
                              41.248767
                          ],
                          [
                              28.70161,
                              41.247408
                          ],
                          [
                              28.701602,
                              41.246896
                          ],
                          [
                              28.70161,
                              41.246337
                          ],
                          [
                              28.7017,
                              41.245597
                          ],
                          [
                              28.701936,
                              41.244801
                          ],
                          [
                              28.702155,
                              41.244124
                          ],
                          [
                              28.703666,
                              41.240146
                          ],
                          [
                              28.70382,
                              41.239572
                          ],
                          [
                              28.704379,
                              41.236755
                          ],
                          [
                              28.704467,
                              41.235649
                          ],
                          [
                              28.704451,
                              41.234763
                          ],
                          [
                              28.70281,
                              41.226857
                          ],
                          [
                              28.702742,
                              41.225656
                          ],
                          [
                              28.703467,
                              41.220486
                          ],
                          [
                              28.703618,
                              41.219803
                          ],
                          [
                              28.703809,
                              41.219351
                          ],
                          [
                              28.704001,
                              41.218958
                          ],
                          [
                              28.704198,
                              41.21867
                          ],
                          [
                              28.70452,
                              41.218265
                          ],
                          [
                              28.704939,
                              41.217921
                          ],
                          [
                              28.705412,
                              41.217588
                          ],
                          [
                              28.705919,
                              41.217302
                          ],
                          [
                              28.710371,
                              41.21508
                          ],
                          [
                              28.711274,
                              41.214608
                          ],
                          [
                              28.712042,
                              41.214133
                          ],
                          [
                              28.71258,
                              41.213732
                          ],
                          [
                              28.71311,
                              41.213315
                          ],
                          [
                              28.713545,
                              41.212933
                          ],
                          [
                              28.713878,
                              41.212574
                          ],
                          [
                              28.71432,
                              41.21193
                          ],
                          [
                              28.714601,
                              41.211393
                          ],
                          [
                              28.714765,
                              41.211044
                          ],
                          [
                              28.715517,
                              41.207831
                          ],
                          [
                              28.715695,
                              41.207029
                          ],
                          [
                              28.715861,
                              41.206302
                          ],
                          [
                              28.71773,
                              41.197979
                          ],
                          [
                              28.717922,
                              41.197561
                          ],
                          [
                              28.718233,
                              41.197109
                          ],
                          [
                              28.718675,
                              41.196645
                          ],
                          [
                              28.719137,
                              41.196289
                          ],
                          [
                              28.724332,
                              41.193611
                          ],
                          [
                              28.725377,
                              41.193075
                          ],
                          [
                              28.737066,
                              41.187243
                          ],
                          [
                              28.737622,
                              41.186902
                          ],
                          [
                              28.745367,
                              41.181714
                          ],
                          [
                              28.74597,
                              41.181258
                          ],
                          [
                              28.746385,
                              41.180846
                          ],
                          [
                              28.746738,
                              41.180391
                          ],
                          [
                              28.747083,
                              41.179879
                          ],
                          [
                              28.747501,
                              41.179025
                          ]
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Taşoluk Station",
                      "description": "M11 Metro Station opened on 19 March 2024 (03-2024). High-speed subway station serving Taşoluk and Mareşal Fevzi Çakmak residential districts.",
                      "style": {
                          "color": "#A1609B",
                          "width": 3,
                          "fill": "#A1609B"
                      },
                      "lineCode": "M11"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.715695,
                          41.207029
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Arnavutköy Hastane Station",
                      "description": "M11 Metro Station opened on 19 March 2024 (03-2024). Major transit terminal serving Arnavutköy State Hospital, City Park, and municipal bus interchange.",
                      "style": {
                          "color": "#A1609B",
                          "width": 3,
                          "fill": "#A1609B"
                      },
                      "lineCode": "M11"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.747501,
                          41.179025
                      ]
                  }
              }
          ]
      }
  },
  {
    "id": "rail-m9-mimar-sinan-2024-08",
    "name": "M9: Mimar Sinan Station Opening (08-2024)",
    "date": {
      "year": 2024,
      "month": 8
    },
    "fileName": "m9-mimar-sinan-2024-08.kml",
    "color": "#FCD10D",
    "visible": true,
    "isSample": true,
    "category": "M9 Metro Line",
    "description": "M9 Ataköy – Olimpiyat metro hattının 15 Temmuz ile Doğu Sanayi istasyonları arasında yer alan Mimar Sinan istasyonu, 30 Ağustos 2024 (08-2024) Zafer Bayramı'nda hizmete açılmıştır.",
    "placemarksCount": 1,
    "bounds": [
      [
        41.023,
        28.814667
      ],
      [
        41.027,
        28.818667
      ]
    ],
    "uploadedAt": "2024-08-30T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Mimar Sinan Station",
            "description": "M9 Metro Station opened on 30 August 2024 (08-2024). Serving Bağcılar Mimar Sinan and Basın Ekspres axis, future transfer to M1B extension.",
            "style": {
              "color": "#FCD10D",
              "fill": "#FCD10D"
            },
            "lineCode": "M9"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.816667,
              41.025
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m3-yildiztepe-2025-10",
    "name": "M3: Yıldıztepe Station Opening (10-2025)",
    "date": {
      "year": 2025,
      "month": 10
    },
    "fileName": "m3-yildiztepe-2025-10.kml",
    "color": "#0CA6DF",
    "visible": true,
    "isSample": true,
    "category": "M3 Metro Line",
    "description": "M3 Bakırköy Sahil – Kayaşehir Merkez metro hattının Molla Gürani ile İlkyuva istasyonları arasında yer alan Yıldıztepe istasyonu, Ekim 2025 (10-2025) tarihinde hizmete açılmıştır.",
    "placemarksCount": 1,
    "bounds": [
      [
        41.017444,
        28.855778
      ],
      [
        41.021444,
        28.859778
      ]
    ],
    "uploadedAt": "2025-10-08T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Yıldıztepe Station",
            "description": "M3 Metro Station opened on 8 October 2025 (10-2025). Serving Bağcılar Yıldıztepe neighborhood.",
            "style": {
              "color": "#0CA6DF",
              "fill": "#0CA6DF"
            },
            "lineCode": "M3"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              28.857778,
              41.019444
            ]
          }
        }
      ]
    }
  },
  {
    "id": "rail-m5-samandira-sultanbeyli-2026-05",
    "name": "M5: Samandıra Merkez - Sultanbeyli Extension & Sancaktepe Şehir Hastanesi (Opening: 05-2026)",
    "date": {
      "year": 2026,
      "month": 5
    },
    "fileName": "m5-samandira-sultanbeyli-2026-05.kml",
    "color": "#683166",
    "visible": true,
    "isSample": true,
    "category": "M5 Metro Line",
    "description": "M5 Üsküdar – Sultanbeyli Metro Hattı son etabı: Samandıra Merkez'den Veysel Karani ve Hasanpaşa istasyonları üzerinden Sultanbeyli Kent Meydanı'na uzanan 4.4 km'lik hat uzatması ile ara istasyon Sancaktepe Şehir Hastanesi'nin (22 Mayıs 2026) hizmete açılması.",
    "placemarksCount": 5,
    "bounds": [
      [
        40.965,
        29.215
      ],
      [
        41.002,
        29.275
      ]
    ],
    "uploadedAt": "2026-05-22T09:00:00.000Z",
    "geoJson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "M5 Samandıra Merkez - Sultanbeyli Ray Güzergahı",
            "description": "M5 Samandıra Merkez – Sultanbeyli tam otomatik sürücüsüz metro tünel ray hattı (22 Mayıs 2026).",
            "style": {
              "color": "#683166",
              "width": 5,
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                29.231389,
                40.983611
              ],
              [
                29.2325,
                40.9802
              ],
              [
                29.2341,
                40.9765
              ],
              [
                29.2365,
                40.9725
              ],
              [
                29.239722,
                40.969167
              ],
              [
                29.2432,
                40.9688
              ],
              [
                29.2475,
                40.9685
              ],
              [
                29.2512,
                40.9684
              ],
              [
                29.254722,
                40.968611
              ],
              [
                29.2595,
                40.9682
              ],
              [
                29.2642,
                40.9674
              ],
              [
                29.2685,
                40.9667
              ],
              [
                29.2725,
                40.966111
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Sancaktepe Şehir Hastanesi Station",
            "description": "M5 Metro Station opened on 22 May 2026 (05-2026). Serving Sancaktepe City Hospital, Prof. Dr. Feriha Öz Emergency Hospital, and 336-vehicle automated Park&Ride underground facility.",
            "style": {
              "color": "#683166",
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.217222,
              41.001389
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Veysel Karani Station",
            "description": "M5 Metro Station opened on 22 May 2026 (05-2026). Serving Sancaktepe Veysel Karani neighborhood, Rings Mall, and Aydos Forest.",
            "style": {
              "color": "#683166",
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.239722,
              40.969167
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Hasanpaşa Station",
            "description": "M5 Metro Station opened on 22 May 2026 (05-2026). Serving Sultanbeyli Hasanpaşa, Atlaspark Mall, and Sultanbeyli District Governorate & Municipality.",
            "style": {
              "color": "#683166",
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.254722,
              40.968611
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Sultanbeyli Station",
            "description": "Eastern terminus of M5 Metro line opened on 22 May 2026 (05-2026). Serving Sultanbeyli City Square, Mehmet Akif neighborhood, and central transportation hub.",
            "style": {
              "color": "#683166",
              "fill": "#683166"
            },
            "lineCode": "M5"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              29.2725,
              40.966111
            ]
          }
        }
      ]
    }
  },
  {
      "id": "rail-m11-arnavutkoy-halkali-2026-06",
      "name": "M11: Arnavutköy Hastane - Halkalı Section (Opening: 06-2026)",
      "date": {
          "year": 2026,
          "month": 6
      },
      "fileName": "m11-arnavutkoy-halkali-2026-06.kml",
      "color": "#A1609B",
      "visible": true,
      "isSample": true,
      "category": "M11 Metro Line",
      "description": "M11 İstanbul Havalimanı Metrosu 4. ve Son Etabı: Arnavutköy Hastane'den İbn Haldun Üniversitesi, Kayaşehir, Olimpiyatköy ve Halkalı Stadı üzerinden Halkalı Garı'na uzanan 17.5 km'lik kesimin açılışı (19 Haziran 2026). Marmaray, YHT, M3 ve M9 hatlarıyla entegre dev ring omurgasını tamamlar.",
      "placemarksCount": 6,
      "bounds": [
          [
              41.018,
              28.74
          ],
          [
              41.18,
              28.8
          ]
      ],
      "uploadedAt": "2026-06-19T09:00:00.000Z",
      "geoJson": {
          "type": "FeatureCollection",
          "features": [
              {
                  "type": "Feature",
                  "properties": {
                      "name": "M11 Arnavutköy Hastane - Halkalı Ray Güzergahı",
                      "description": "M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı Arnavutköy Hastane – Halkalı hızlı metro tünel güzergahı (19 Haziran 2026).",
                      "style": {
                          "color": "#A1609B",
                          "width": 5,
                          "fill": "#A1609B"
                      },
                      "lineCode": "M11"
                  },
                  "geometry": {
                      "type": "LineString",
                      "coordinates": [
                          [
                              28.747501,
                              41.179025
                          ],
                          [
                              28.748859,
                              41.176264
                          ],
                          [
                              28.749184,
                              41.175823
                          ],
                          [
                              28.749684,
                              41.175308
                          ],
                          [
                              28.750452,
                              41.174594
                          ],
                          [
                              28.751341,
                              41.173788
                          ],
                          [
                              28.752268,
                              41.173024
                          ],
                          [
                              28.753607,
                              41.172106
                          ],
                          [
                              28.755032,
                              41.171234
                          ],
                          [
                              28.771989,
                              41.162956
                          ],
                          [
                              28.773073,
                              41.162524
                          ],
                          [
                              28.77411,
                              41.162147
                          ],
                          [
                              28.774793,
                              41.161929
                          ],
                          [
                              28.775591,
                              41.161695
                          ],
                          [
                              28.776311,
                              41.161515
                          ],
                          [
                              28.779985,
                              41.160572
                          ],
                          [
                              28.780563,
                              41.160448
                          ],
                          [
                              28.781233,
                              41.160307
                          ],
                          [
                              28.781709,
                              41.160159
                          ],
                          [
                              28.782399,
                              41.159929
                          ],
                          [
                              28.783296,
                              41.159577
                          ],
                          [
                              28.78427,
                              41.159146
                          ],
                          [
                              28.785138,
                              41.158715
                          ],
                          [
                              28.797885,
                              41.151097
                          ],
                          [
                              28.798414,
                              41.150722
                          ],
                          [
                              28.798793,
                              41.150348
                          ],
                          [
                              28.799238,
                              41.14988
                          ],
                          [
                              28.799547,
                              41.149432
                          ],
                          [
                              28.799947,
                              41.148723
                          ],
                          [
                              28.80018,
                              41.148126
                          ],
                          [
                              28.800286,
                              41.1477
                          ],
                          [
                              28.800365,
                              41.147295
                          ],
                          [
                              28.800383,
                              41.146896
                          ],
                          [
                              28.800385,
                              41.146506
                          ],
                          [
                              28.800204,
                              41.146103
                          ],
                          [
                              28.799864,
                              41.145641
                          ],
                          [
                              28.793652,
                              41.139653
                          ],
                          [
                              28.793135,
                              41.139154
                          ],
                          [
                              28.791785,
                              41.137943
                          ],
                          [
                              28.78844,
                              41.134575
                          ],
                          [
                              28.787834,
                              41.133921
                          ],
                          [
                              28.787297,
                              41.133196
                          ],
                          [
                              28.786955,
                              41.132594
                          ],
                          [
                              28.785228,
                              41.12836
                          ],
                          [
                              28.784952,
                              41.127856
                          ],
                          [
                              28.784716,
                              41.127521
                          ],
                          [
                              28.784407,
                              41.12717
                          ],
                          [
                              28.783962,
                              41.126814
                          ],
                          [
                              28.783487,
                              41.126557
                          ],
                          [
                              28.782984,
                              41.12634
                          ],
                          [
                              28.782406,
                              41.126176
                          ],
                          [
                              28.781842,
                              41.126043
                          ],
                          [
                              28.767826,
                              41.123196
                          ],
                          [
                              28.767383,
                              41.123069
                          ],
                          [
                              28.766899,
                              41.122831
                          ],
                          [
                              28.766664,
                              41.122687
                          ],
                          [
                              28.766482,
                              41.122544
                          ],
                          [
                              28.766266,
                              41.122329
                          ],
                          [
                              28.766103,
                              41.122124
                          ],
                          [
                              28.76595,
                              41.121839
                          ],
                          [
                              28.765823,
                              41.121562
                          ],
                          [
                              28.765744,
                              41.121185
                          ],
                          [
                              28.765523,
                              41.11733
                          ],
                          [
                              28.76542,
                              41.11554
                          ],
                          [
                              28.765526,
                              41.114758
                          ],
                          [
                              28.765889,
                              41.112248
                          ],
                          [
                              28.766048,
                              41.111314
                          ],
                          [
                              28.766129,
                              41.110737
                          ],
                          [
                              28.766457,
                              41.109112
                          ],
                          [
                              28.766644,
                              41.10779
                          ],
                          [
                              28.766739,
                              41.106764
                          ],
                          [
                              28.766742,
                              41.105965
                          ],
                          [
                              28.766718,
                              41.105027
                          ],
                          [
                              28.764279,
                              41.094954
                          ],
                          [
                              28.764071,
                              41.093873
                          ],
                          [
                              28.764113,
                              41.092434
                          ],
                          [
                              28.764441,
                              41.091034
                          ],
                          [
                              28.768008,
                              41.081374
                          ],
                          [
                              28.769223,
                              41.078734
                          ],
                          [
                              28.76953,
                              41.077981
                          ],
                          [
                              28.769959,
                              41.076998
                          ],
                          [
                              28.770332,
                              41.075891
                          ],
                          [
                              28.770579,
                              41.075046
                          ],
                          [
                              28.770723,
                              41.074429
                          ],
                          [
                              28.770885,
                              41.073367
                          ],
                          [
                              28.77097,
                              41.07261
                          ],
                          [
                              28.771035,
                              41.07201
                          ],
                          [
                              28.771053,
                              41.071473
                          ],
                          [
                              28.771059,
                              41.071272
                          ],
                          [
                              28.771039,
                              41.070824
                          ],
                          [
                              28.770957,
                              41.070368
                          ],
                          [
                              28.770806,
                              41.069608
                          ],
                          [
                              28.770057,
                              41.066085
                          ],
                          [
                              28.770011,
                              41.065459
                          ],
                          [
                              28.770083,
                              41.06479
                          ],
                          [
                              28.770257,
                              41.064278
                          ],
                          [
                              28.770432,
                              41.063898
                          ],
                          [
                              28.770773,
                              41.063356
                          ],
                          [
                              28.772845,
                              41.060742
                          ],
                          [
                              28.773335,
                              41.060001
                          ],
                          [
                              28.773618,
                              41.059527
                          ],
                          [
                              28.773871,
                              41.059047
                          ],
                          [
                              28.774116,
                              41.058531
                          ],
                          [
                              28.774302,
                              41.058129
                          ],
                          [
                              28.774412,
                              41.057754
                          ],
                          [
                              28.774461,
                              41.057452
                          ],
                          [
                              28.774511,
                              41.056562
                          ],
                          [
                              28.774573,
                              41.055475
                          ],
                          [
                              28.774577,
                              41.055384
                          ],
                          [
                              28.774602,
                              41.054796
                          ],
                          [
                              28.774535,
                              41.052066
                          ],
                          [
                              28.774416,
                              41.050685
                          ],
                          [
                              28.773531,
                              41.041279
                          ],
                          [
                              28.773395,
                              41.040689
                          ],
                          [
                              28.77294,
                              41.039563
                          ],
                          [
                              28.772471,
                              41.038643
                          ],
                          [
                              28.770128,
                              41.035327
                          ],
                          [
                              28.769889,
                              41.034822
                          ],
                          [
                              28.769669,
                              41.034301
                          ],
                          [
                              28.769483,
                              41.033453
                          ],
                          [
                              28.769482,
                              41.033443
                          ],
                          [
                              28.768306,
                              41.024271
                          ],
                          [
                              28.768128,
                              41.022992
                          ],
                          [
                              28.768055,
                              41.022491
                          ],
                          [
                              28.76796,
                              41.021923
                          ],
                          [
                              28.767919,
                              41.021375
                          ],
                          [
                              28.76792,
                              41.020761
                          ],
                          [
                              28.767964,
                              41.019899
                          ]
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "İbn Haldun Üniversitesi Station",
                      "description": "M11 Metro Station opened on 19 June 2026 (06-2026). Direct high-speed subway access to Ibn Haldun University main campus and Fenertepe district.",
                      "style": {
                          "color": "#A1609B",
                          "width": 3,
                          "fill": "#A1609B"
                      },
                      "lineCode": "M11"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.793652,
                          41.139653
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Kayaşehir Station (M11)",
                      "description": "M11 Metro Station opened on 19 June 2026 (06-2026). Major interchange connecting directly with M3 Bakırköy Sahil – Kayaşehir Merkez line and Başakşehir National Garden.",
                      "style": {
                          "color": "#A1609B",
                          "width": 3,
                          "fill": "#A1609B"
                      },
                      "lineCode": "M11"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.765523,
                          41.11733
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Olimpiyatköy Station (M11)",
                      "description": "M11 Metro Station opened on 19 June 2026 (06-2026). High-speed subway interchange connecting with M9 Ataköy – Olimpiyat line and Atatürk Olympic Stadium complex.",
                      "style": {
                          "color": "#A1609B",
                          "width": 3,
                          "fill": "#A1609B"
                      },
                      "lineCode": "M11"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.76953,
                          41.077981
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Halkalı Stadı Station",
                      "description": "M11 Metro Station opened on 19 June 2026 (06-2026). Serving Atakent neighborhood, Tema World entertainment center, and future M7 Atakent transfer.",
                      "style": {
                          "color": "#A1609B",
                          "width": 3,
                          "fill": "#A1609B"
                      },
                      "lineCode": "M11"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.774511,
                          41.056562
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "name": "Halkalı Station (M11)",
                      "description": "M11 Southwestern terminus opened on 19 June 2026 (06-2026). Major multimodal hub connecting with Marmaray (B1), YHT high-speed rail, TCDD regional trains, and future M1B line.",
                      "style": {
                          "color": "#A1609B",
                          "width": 3,
                          "fill": "#A1609B"
                      },
                      "lineCode": "M11"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          28.767964,
                          41.019899
                      ]
                  }
              }
          ]
      }
  }
];

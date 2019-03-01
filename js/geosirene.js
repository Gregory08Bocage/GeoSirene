//-----------------------------------------------------------------------------------------//
//----------------------------------Déclaration Variables----------------------------------//
//-----------------------------------------------------------------------------------------//

//---------------URL----------------//
var URL_API_SIRENE = 'https://data.opendatasoft.com/api/v2/catalog/datasets/sirene@public/';

//--------------Carte--------------//
var map, mapbox;
var baseLayers , overlays, controlLayers;
var markers = L.markerClusterGroup();
var marker;
var popup;
var latitude, longitude;
var marker;
var streets, grayscale, satellite;
var mapBase64;

//------------Requète-------------//
var flag_all_selected = 0;
var flagEnd = 0;
var etabArray = new Array();
var nbTotalResult = 0;
var treenaf;
var tree;
var node;
var tree_to_apet700 = new Array();
var code_section_pdf = new Array();
var printerForPDF;
var treenaf_all = [
  {
    "code": "A",
    "total": "37",
    "libelle": "[A] Agriculture, sylviculture et p\u00eache",
    "hasChildren": true,
    "children": [{
      "code": "01",
      "code_section": "A",
      "total": "36",
      "libelle": "[01] Culture et production animale, chasse et services annexes",
      "hasChildren": false,
      "children": [{
        "code": "011",
        "total": "2",
        "libelle": "[011] Cultures non permanentes",
        "hasChildren": true,
        "children": [{
          "code": "0111",
          "total": "0",
          "libelle": "[0111] Culture de c\u00e9r\u00e9ales (\u00e0 l'exception du riz), de l\u00e9gumineuses et de graines ol\u00e9agineuses",
          "hasChildren": true,
          "children": [{
            "code": "0111Z",
            "libelle": "[0111Z] Culture de c\u00e9r\u00e9ales (\u00e0 l'exception du riz), de l\u00e9gumineuses et de graines ol\u00e9agineuses"
          }]
        },
        {
          "code": "0112",
          "total": "0",
          "libelle": "[0112] Culture du riz",
          "hasChildren": true,
          "children": [{
            "code": "0112Z",
            "libelle": "[0112Z] Culture du riz"
          }]
        },
        {
          "code": "0113",
          "total": "2",
          "libelle": "[0113] Culture de l\u00e9gumes, de melons, de racines et de tubercules",
          "hasChildren": true,
          "children": [{
            "code": "0113Z",
            "libelle": "[0113Z] Culture de l\u00e9gumes, de melons, de racines et de tubercules"
          }]
        },
        {
          "code": "0114",
          "total": "0",
          "libelle": "[0114] Culture de la canne \u00e0 sucre",
          "hasChildren": true,
          "children": [{
            "code": "0114Z",
            "libelle": "[0114Z] Culture de la canne \u00e0 sucre"
          }]
        },
        {
          "code": "0115",
          "total": "0",
          "libelle": "[0115] Culture du tabac",
          "hasChildren": true,
          "children": [{
            "code": "0115Z",
            "libelle": "[0115Z] Culture du tabac"
          }]
        },
        {
          "code": "0116",
          "total": "0",
          "libelle": "[0116] Culture de plantes \u00e0 fibres",
          "hasChildren": true,
          "children": [{
            "code": "0116Z",
            "libelle": "[0116Z] Culture de plantes \u00e0 fibres"
          }]
        },
        {
          "code": "0119",
          "total": "0",
          "libelle": "[0119] Autres cultures non permanentes",
          "hasChildren": true,
          "children": [{
            "code": "0119Z",
            "libelle": "[0119Z] Autres cultures non permanentes"
          }]
        }]
      },
      {
        "code": "012",
        "total": "29",
        "libelle": "[012] Cultures permanentes",
        "hasChildren": true,
        "children": [{
          "code": "0121",
          "total": "7",
          "libelle": "[0121] Culture de la vigne",
          "hasChildren": true,
          "children": [{
            "code": "0121Z",
            "libelle": "[0121Z] Culture de la vigne"
          }]
        },
        {
          "code": "0122",
          "total": "0",
          "libelle": "[0122] Culture de fruits tropicaux et subtropicaux",
          "hasChildren": true,
          "children": [{
            "code": "0122Z",
            "libelle": "[0122Z] Culture de fruits tropicaux et subtropicaux"
          }]
        },
        {
          "code": "0123",
          "total": "0",
          "libelle": "[0123] Culture d'agrumes",
          "hasChildren": true,
          "children": [{
            "code": "0123Z",
            "libelle": "[0123Z] Culture d'agrumes"
          }]
        },
        {
          "code": "0124",
          "total": "22",
          "libelle": "[0124] Culture de fruits \u00e0 p\u00e9pins et \u00e0 noyau",
          "hasChildren": true,
          "children": [{
            "code": "0124Z",
            "libelle": "[0124Z] Culture de fruits \u00e0 p\u00e9pins et \u00e0 noyau"
          }]
        },
        {
          "code": "0125",
          "total": "0",
          "libelle": "[0125] Culture d'autres fruits d'arbres ou d'arbustes et de fruits \u00e0 coque",
          "hasChildren": true,
          "children": [{
            "code": "0125Z",
            "libelle": "[0125Z] Culture d'autres fruits d'arbres ou d'arbustes et de fruits \u00e0 coque"
          }]
        },
        {
          "code": "0126",
          "total": "0",
          "libelle": "[0126] Culture de fruits ol\u00e9agineux",
          "hasChildren": true,
          "children": [{
            "code": "0126Z",
            "libelle": "[0126Z] Culture de fruits ol\u00e9agineux"
          }]
        },
        {
          "code": "0127",
          "total": "0",
          "libelle": "[0127] Culture de plantes \u00e0 boissons",
          "hasChildren": true,
          "children": [{
            "code": "0127Z",
            "libelle": "[0127Z] Culture de plantes \u00e0 boissons"
          }]
        },
        {
          "code": "0128",
          "total": "0",
          "libelle": "[0128] Culture de plantes \u00e0 \u00e9pices, aromatiques, m\u00e9dicinales et pharmaceutiques",
          "hasChildren": true,
          "children": [{
            "code": "0128Z",
            "libelle": "[0128Z] Culture de plantes \u00e0 \u00e9pices, aromatiques, m\u00e9dicinales et pharmaceutiques"
          }]
        },
        {
          "code": "0129",
          "total": "0",
          "libelle": "[0129] Autres cultures permanentes",
          "hasChildren": true,
          "children": [{
            "code": "0129Z",
            "libelle": "[0129Z] Autres cultures permanentes"
          }]
        }]
      },
      {
        "code": "013",
        "total": "0",
        "libelle": "[013] Reproduction de plantes",
        "hasChildren": true,
        "children": [{
          "code": "0130",
          "total": "0",
          "libelle": "[0130] Reproduction de plantes",
          "hasChildren": true,
          "children": [{
            "code": "0130Z",
            "libelle": "[0130Z] Reproduction de plantes"
          }]
        }]
      },
      {
        "code": "014",
        "total": "2",
        "libelle": "[014] Production animale",
        "hasChildren": true,
        "children": [{
          "code": "0141",
          "total": "1",
          "libelle": "[0141] \u00c9levage de vaches laiti\u00e8res",
          "hasChildren": true,
          "children": [{
            "code": "0141Z",
            "libelle": "[0141Z] \u00c9levage de vaches laiti\u00e8res"
          }]
        },
        {
          "code": "0142",
          "total": "0",
          "libelle": "[0142] \u00c9levage d'autres bovins et de buffles",
          "hasChildren": true,
          "children": [{
            "code": "0142Z",
            "libelle": "[0142Z] \u00c9levage d'autres bovins et de buffles"
          }]
        },
        {
          "code": "0143",
          "total": "0",
          "libelle": "[0143] \u00c9levage de chevaux et d'autres \u00e9quid\u00e9s",
          "hasChildren": true,
          "children": [{
            "code": "0143Z",
            "libelle": "[0143Z] \u00c9levage de chevaux et d'autres \u00e9quid\u00e9s"
          }]
        },
        {
          "code": "0144",
          "total": "0",
          "libelle": "[0144] \u00c9levage de chameaux et d'autres cam\u00e9lid\u00e9s",
          "hasChildren": true,
          "children": [{
            "code": "0144Z",
            "libelle": "[0144Z] \u00c9levage de chameaux et d'autres cam\u00e9lid\u00e9s"
          }]
        },
        {
          "code": "0145",
          "total": "0",
          "libelle": "[0145] \u00c9levage d'ovins et de caprins",
          "hasChildren": true,
          "children": [{
            "code": "0145Z",
            "libelle": "[0145Z] \u00c9levage d'ovins et de caprin"
          }]
        },
        {
          "code": "0146",
          "total": "1",
          "libelle": "[0146] \u00c9levage de porcins",
          "hasChildren": true,
          "children": [{
            "code": "0146Z",
            "libelle": "[0146Z] \u00c9levage de porcins"
          }]
        },
        {
          "code": "0147",
          "total": "0",
          "libelle": "[0147] \u00c9levage de volailles",
          "hasChildren": true,
          "children": [{
            "code": "0147Z",
            "libelle": "[0147Z] \u00c9levage de volailles"
          }]
        },
        {
          "code": "0149",
          "total": "0",
          "libelle": "[0149] \u00c9levage d'autres animaux",
          "hasChildren": true,
          "children": [{
            "code": "0149Z",
            "libelle": "[0149Z] \u00c9levage d'autres animaux"
          }]
        }]
      },
      {
        "code": "015",
        "total": "0",
        "libelle": "[015] Culture et \u00e9levage associ\u00e9s",
        "hasChildren": true,
        "children": [{
          "code": "0150",
          "total": "0",
          "libelle": "[0150] Culture et \u00e9levage associ\u00e9s",
          "hasChildren": true,
          "children": [{
            "code": "0150Z",
            "libelle": "[0150Z] Culture et \u00e9levage associ\u00e9s"
          }]


        }]
      },
      {
        "code": "016",
        "total": "3",
        "libelle": "[016] Activit\u00e9s de soutien \u00e0 l'agriculture et traitement primaire des r\u00e9coltes",
        "hasChildren": true,
        "children": [{
          "code": "0161",
          "total": "3",
          "libelle": "[0161] Activit\u00e9s de soutien aux cultures",
          "hasChildren": true,
          "children": [{
            "code": "0161Z",
            "libelle": "[0161Z] Activit\u00e9s de soutien aux cultures"
          }]
        },
        {
          "code": "0162",
          "total": "0",
          "libelle": "[0162] Activit\u00e9s de soutien \u00e0 la production animale",
          "hasChildren": true,
          "children": [{
            "code": "0162Z",
            "libelle": "[0162Z] Activit\u00e9s de soutien \u00e0 la production animale"
          }]
        },
        {
          "code": "0163",
          "total": "0",
          "libelle": "[0163] Traitement primaire des r\u00e9colte",
          "hasChildren": true,
          "children": [{
            "code": "0163Z",
            "libelle": "[0163Z] Traitement primaire des r\u00e9colte"
          }]
        },
        {
          "code": "0164",
          "total": "0",
          "libelle": "[0164] Traitement des semences",
          "hasChildren": true,
          "children": [{
            "code": "0164Z",
            "libelle": "[0164Z] Traitement des semences"
          }]
        }]
      },
      {
        "code": "017",
        "total": "0",
        "libelle": "[017] Chasse, pi\u00e9geage et services annexes",
        "hasChildren": true,
        "children": [{
          "code": "0170",
          "total": "0",
          "libelle": "[0170] Chasse, pi\u00e9geage et services annexes",
          "hasChildren": true,
          "children": [{
            "code": "0170Z",
            "libelle": "[0170Z] Chasse, pi\u00e9geage et services annexes"
          }]
        }]
      }]
    },
    {
      "code": "02",
      "code_section": "A",
      "total": "1",
      "libelle": "[02] Sylviculture et exploitation foresti\u00e8re",
      "hasChildren": false,
      "children": [{
        "code": "021",
        "total": "0",
        "libelle": "[021] Sylviculture et autres activit\u00e9s foresti\u00e8res",
        "hasChildren": true,
        "children": [{
          "code": "0210",
          "total": "0",
          "libelle": "[0210] Sylviculture et autres activit\u00e9s foresti\u00e8res ",
          "hasChildren": true,
          "children": [{
            "code": "0210Z",
            "libelle": "[0210Z] Sylviculture et autres activit\u00e9s foresti\u00e8res "
          }]
        }]
      },
      {
        "code": "022",
        "total": "0",
        "libelle": "[022] Exploitation foresti\u00e8re ",
        "hasChildren": true,
        "children": [{
          "code": "0220",
          "total": "0",
          "libelle": "[0220] Exploitation foresti\u00e8re ",
          "hasChildren": true,
          "children": [{
            "code": "0220Z",
            "libelle": "[0220Z] Exploitation foresti\u00e8re "
          }]
        }]
      },
      {
        "code": "023",
        "total": "0",
        "libelle": "[023] R\u00e9colte de produits forestiers non ligneux poussant \u00e0 l'\u00e9tat sauvage ",
        "hasChildren": true,
        "children": [{
          "code": "0230",
          "total": "0",
          "libelle": "[0230] R\u00e9colte de produits forestiers non ligneux poussant \u00e0 l'\u00e9tat sauvage ",
          "hasChildren": true,
          "children": [{
            "code": "0230Z",
            "libelle": "[0230Z] R\u00e9colte de produits forestiers non ligneux poussant \u00e0 l'\u00e9tat sauvage "
          }]
        }]
      },
      {
        "code": "024",
        "total": "1",
        "libelle": "[024] Services de soutien \u00e0 l'exploitation foresti\u00e8re ",
        "hasChildren": true,
        "children": [{
          "code": "0240",
          "total": "1",
          "libelle": "[0240] Services de soutien \u00e0 l'exploitation foresti\u00e8re ",
          "hasChildren": true,
          "children": [{
            "code": "0240Z",
            "libelle": "[0240Z] Services de soutien \u00e0 l'exploitation foresti\u00e8re "
          }]
        }]
      }]
    },
    {
      "code": "03",
      "code_section": "A",
      "total": "0",
      "libelle": "[03] P\u00eache et aquaculture ",
      "hasChildren": false,
      "children": [{
        "code": "031",
        "total": "0",
        "libelle": "[031] P\u00eache ",
        "hasChildren": true,
        "children": [{
          "code": "0311",
          "total": "0",
          "libelle": "[0311] P\u00eache en mer ",
          "hasChildren": true,
          "children": [{
            "code": "0311Z",
            "libelle": "[0311Z] P\u00eache en mer "
          }]
        },
        {
          "code": "0312",
          "total": "0",
          "libelle": "[0312] P\u00eache en eau douce ",
          "hasChildren": true,
          "children": [{
            "code": "0312Z",
            "libelle": "[0312Z] P\u00eache en eau douce "
          }]
        }]
      },
      {
        "code": "032",
        "total": "0",
        "libelle": "[032] Aquaculture ",
        "hasChildren": true,
        "children": [{
          "code": "0321",
          "total": "0",
          "libelle": "[0321] Aquaculture en mer ",
          "hasChildren": true,
          "children": [{
            "code": "0321Z",
            "libelle": "[0321Z] Aquaculture en mer "
          }]
        },
        {
          "code": "0322",
          "total": "0",
          "libelle": "[0322] Aquaculture en eau douce ",
          "hasChildren": true,
          "children": [{
            "code": "0322Z",
            "libelle": "[0322Z] Aquaculture en eau douce "
          }]
        }]
      }]
    }]
  },
  {
    "code": "B",
    "total": "1",
    "libelle": "[B] Industries extractives ",
    "hasChildren": true,
    "children": [{
      "code": "05",
      "code_section": "B",
      "total": "0",
      "libelle": "[05] Extraction de houille et de lignite ",
      "hasChildren": false,
      "children": [{
        "code": "051",
        "total": "0",
        "libelle": "[051] Extraction de houille ",
        "hasChildren": true,
        "children": [{
          "code": "0510",
          "total": "0",
          "libelle": "[0510] Extraction de houille ",
          "hasChildren": true,
          "children": [{
            "code": "0510Z",
            "libelle": "[0510Z] Extraction de houille "
          }]
        }]
      },
      {
        "code": "052",
        "total": "0",
        "libelle": "[052] Extraction de lignite ",
        "hasChildren": true,
        "children": [{
          "code": "0520",
          "total": "0",
          "libelle": "[0520] Extraction de lignite ",
          "hasChildren": true,
          "children": [{
            "code": "0520Z",
            "libelle": "[0520Z] Extraction de lignite "
          }]
        }]
      }]
    },
    {
      "code": "06",
      "code_section": "B",
      "total": "0",
      "libelle": "[06] Extraction d'hydrocarbures ",
      "hasChildren": false,
      "children": [{
        "code": "061",
        "total": "0",
        "libelle": "[061] Extraction de p\u00e9trole brut ",
        "hasChildren": true,
        "children": [{
          "code": "0610",
          "total": "0",
          "libelle": "[0610] Extraction de p\u00e9trole brut ",
          "hasChildren": true,
          "children": [{
            "code": "0610Z",
            "libelle": "[0610Z] Extraction de p\u00e9trole brut "
          }]
        }]
      },
      {
        "code": "062",
        "total": "0",
        "libelle": "[062] Extraction de gaz naturel ",
        "hasChildren": true,
        "children": [{
          "code": "0620",
          "total": "0",
          "libelle": "[0620] Extraction de gaz naturel ",
          "hasChildren": true,
          "children": [{
            "code": "0620Z",
            "libelle": "[0620Z] Extraction de gaz naturel "
          }]
        }]
      }]
    },
    {
      "code": "07",
      "code_section": "B",
      "total": "0",
      "libelle": "[07] Extraction de minerais m\u00e9talliques ",
      "hasChildren": false,
      "children": [{
        "code": "071",
        "total": "0",
        "libelle": "[071] Extraction de minerais de fer ",
        "hasChildren": true,
        "children": [{
          "code": "0710",
          "total": "0",
          "libelle": "[0710] Extraction de minerais de fer ",
          "hasChildren": true,
          "children": [{
            "code": "0710Z",
            "libelle": "[0710Z] Extraction de minerais de fer "
          }]
        }]
      },
      {
        "code": "072",
        "total": "0",
        "libelle": "[072] Extraction de minerais de m\u00e9taux non ferreux ",
        "hasChildren": true,
        "children": [{
          "code": "0721",
          "total": "0",
          "libelle": "[0721] Extraction de minerais d'uranium et de thorium ",
          "hasChildren": true,
          "children": [{
            "code": "0721Z",
            "libelle": "[0721Z] Extraction de minerais d'uranium et de thorium "
          }]
        },
        {
          "code": "0729",
          "total": "0",
          "libelle": "[0729] Extraction d'autres minerais de m\u00e9taux non ferreux ",
          "hasChildren": true,
          "children": [{
            "code": "0729Z",
            "libelle": "[0729Z] Extraction d'autres minerais de m\u00e9taux non ferreux "
          }]
        }]
      }]
    },
    {
      "code": "08",
      "code_section": "B",
      "total": "1",
      "libelle": "[08] Autres industries extractives ",
      "hasChildren": false,
      "children": [{
        "code": "081",
        "total": "1",
        "libelle": "[081] Extraction de pierres, de sables et d'argiles ",
        "hasChildren": true,
        "children": [{
          "code": "0811",
          "total": "0",
          "libelle": "[0811] Extraction de pierres ornementales et de construction, de calcaire industriel, de gypse, de craie et d'ardoise ",
          "hasChildren": true,
          "children": [{
            "code": "0811Z",
            "libelle": "[0811Z] Extraction de pierres ornementales et de construction, de calcaire industriel, de gypse, de craie et d'ardoise "
          }]
        },
        {
          "code": "0812",
          "total": "1",
          "libelle": "[0812] Exploitation de gravi\u00e8res et sabli\u00e8res, extraction d'argiles et de kaolin ",
          "hasChildren": true,
          "children": [{
            "code": "0812Z",
            "libelle": "[0812Z] Exploitation de gravi\u00e8res et sabli\u00e8res, extraction d'argiles et de kaolin "
          }]
        }]
      },
      {
        "code": "089",
        "total": "0",
        "libelle": "[089] Activit\u00e9s extractives n.c.a. ",
        "hasChildren": true,
        "children": [{
          "code": "0891",
          "total": "0",
          "libelle": "[0891] Extraction des min\u00e9raux chimiques et d'engrais min\u00e9raux ",
          "hasChildren": true,
          "children": [{
            "code": "0891Z",
            "libelle": "[0891Z] Extraction des min\u00e9raux chimiques et d'engrais min\u00e9raux "
          }]
        },
        {
          "code": "0892",
          "total": "0",
          "libelle": "[0892] Extraction de tourbe ",
          "hasChildren": true,
          "children": [{
            "code": "0892Z",
            "libelle": "[0892Z] Extraction de tourbe "
          }]
        },
        {
          "code": "0893",
          "total": "0",
          "libelle": "[0893] Production de sel ",
          "hasChildren": true,
          "children": [{
            "code": "0893Z",
            "libelle": "[0893Z] Production de sel "
          }]
        },
        {
          "code": "0899",
          "total": "0",
          "libelle": "[0899] Autres activit\u00e9s extractives n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "0899Z",
            "libelle": "[0899Z] Autres activit\u00e9s extractives n.c.a. "
          }]
        }]
      }]
    },
    {
      "code": "09",
      "code_section": "B",
      "total": "0",
      "libelle": "[09] Services de soutien aux industries extractives ",
      "hasChildren": false,
      "children": [{
        "code": "091",
        "total": "0",
        "libelle": "[091] Activit\u00e9s de soutien \u00e0 l'extraction d'hydrocarbures ",
        "hasChildren": true,
        "children": [{
          "code": "0910",
          "total": "0",
          "libelle": "[0910] Activit\u00e9s de soutien \u00e0 l'extraction d'hydrocarbures ",
          "hasChildren": true,
          "children": [{
            "code": "0910Z",
            "libelle": "[0910Z] Activit\u00e9s de soutien \u00e0 l'extraction d'hydrocarbures "
          }]
        }]
      },
      {
        "code": "099",
        "total": "0",
        "libelle": "[099] Activit\u00e9s de soutien aux autres industries extractives ",
        "hasChildren": true,
        "children": [{
          "code": "0990",
          "total": "0",
          "libelle": "[0990] Activit\u00e9s de soutien aux autres industries extractives ",
          "hasChildren": true,
          "children": [{
            "code": "0990Z",
            "libelle": "[0990Z] Activit\u00e9s de soutien aux autres industries extractives "
          }]
        }]
      }]
    }]
  },
  {
    "code": "C",
    "total": "143",
    "libelle": "[C] Industrie manufacturi\u00e8re",
    "hasChildren": true,
    "children": [{
      "code": "10",
      "code_section": "C",
      "total": "53",
      "libelle": "[10] Industries alimentaires",
      "hasChildren": false,
      "children": [{
        "code": "101",
        "total": "7",
        "libelle": "[101] Transformation et conservation de la viande et pr\u00e9paration de produits \u00e0 base de viande",
        "hasChildren": true,
        "children": [{
          "code": "1011",
          "total": "3",
          "libelle": "[1011] Transformation et conservation de la viande de boucherie ",
          "hasChildren": true,
          "children": [{
            "code": "1011Z",
            "libelle": "[1011Z] Transformation et conservation de la viande de boucherie "
          }]
        },
        {
          "code": "1012",
          "total": "0",
          "libelle": "[1012] Transformation et conservation de la viande de volaille ",
          "hasChildren": true,
          "children": [{
            "code": "1012Z",
            "libelle": "[1012Z] Transformation et conservation de la viande de volaille "
          }]
        },
        {
          "code": "1013",
          "total": "4",
          "libelle": "[1013] Pr\u00e9paration de produits \u00e0 base de viande",
          "hasChildren": true,
          "children": [{
            "code": "1013A",
            "libelle": "[1013A] Pr\u00e9paration industrielle de produits \u00e0 base de viande"
          },
          {
            "code": "1013B",
            "libelle": "[1013B] Charcuterie"
          }]
        }]
      },
      {
        "code": "102",
        "total": "0",
        "libelle": "[102] Transformation et conservation de poisson, de crustac\u00e9s et de mollusques ",
        "hasChildren": true,
        "children": [{
          "code": "1020",
          "total": "0",
          "libelle": "[1020] Transformation et conservation de poisson, de crustac\u00e9s et de mollusques ",
          "hasChildren": true,
          "children": [{
            "code": "1020Z",
            "libelle": "[1020Z] Transformation et conservation de poisson, de crustac\u00e9s et de mollusques "
          }]
        }]
      },
      {
        "code": "103",
        "total": "1",
        "libelle": "[103] Transformation et conservation de fruits et l\u00e9gumes ",
        "hasChildren": true,
        "children": [{
          "code": "1031",
          "total": "0",
          "libelle": "[1031] Transformation et conservation de pommes de terre ",
          "hasChildren": true,
          "children": [{
            "code": "1031Z",
            "libelle": "[1031Z] Transformation et conservation de pommes de terre "
          }]
        },
        {
          "code": "1032",
          "total": "1",
          "libelle": "[1032] Pr\u00e9paration de jus de fruits et l\u00e9gumes ",
          "hasChildren": true,
          "children": [{
            "code": "1032Z",
            "libelle": "[1032Z] Pr\u00e9paration de jus de fruits et l\u00e9gumes "
          }]
        },
        {
          "code": "1039",
          "total": "0",
          "libelle": "[1039] Autre transformation et conservation de fruits et l\u00e9gumes ",
          "hasChildren": true,
          "children": [{
            "code": "1039A",
            "libelle": "[1039A] Autre transformation et conservation de l\u00e9gumes "
          },
          {
            "code": "1039B",
            "libelle": "[1039B] Transformation et conservation de fruits "
          }]
        }]
      },
      {
        "code": "104",
        "total": "0",
        "libelle": "[104] Fabrication d'huiles et graisses v\u00e9g\u00e9tales et animales ",
        "hasChildren": true,
        "children": [{
          "code": "1041",
          "total": "0",
          "libelle": "[1041] Fabrication d'huiles et graisses ",
          "hasChildren": true,
          "children": [{
            "code": "1041A",
            "libelle": "[1041A] Fabrication d'huiles et graisses brutes "
          },
          {
            "code": "1041B",
            "libelle": "[1041B] Fabrication d'huiles et graisses raffin\u00e9es "
          }]
        },
        {
          "code": "1042",
          "total": "0",
          "libelle": "[1042] Fabrication de margarine et graisses comestibles similaires ",
          "hasChildren": true,
          "children": [{
            "code": "1042Z",
            "libelle": "[1042Z] Fabrication de margarine et graisses comestibles similaires "
          }]
        }]
      },
      {
        "code": "105",
        "total": "1",
        "libelle": "[105] Fabrication de produits laitiers ",
        "hasChildren": true,
        "children": [{
          "code": "1051",
          "total": "1",
          "libelle": "[1051] Exploitation de laiteries et fabrication de fromage ",
          "hasChildren": true,
          "children": [{
            "code": "1051A",
            "libelle": "[1051A] Fabrication de lait liquide et de produits frais "
          },
          {
            "code": "1051B",
            "libelle": "[1051B] Fabrication de beurre "
          },
          {
            "code": "1051C",
            "libelle": "[1051C] Fabrication de fromage "
          },
          {
            "code": "1051D",
            "libelle": "[1051D] Fabrication d'autres produits laitiers "
          }]
        },
        {
          "code": "1052",
          "total": "0",
          "libelle": "[1052] Fabrication de glaces et sorbets ",
          "hasChildren": true,
          "children": [{
            "code": "1052Z",
            "libelle": "[1052Z] Fabrication de glaces et sorbets "
          }]
        }]
      },
      {
        "code": "106",
        "total": "0",
        "libelle": "[106] Travail des grains ; fabrication de produits amylac\u00e9s ",
        "hasChildren": true,
        "children": [{
          "code": "1061",
          "total": "0",
          "libelle": "[1061] Travail des grains ",
          "hasChildren": true,
          "children": [{
            "code": "1061A",
            "libelle": "[1061A] Meunerie "
          },
          {
            "code": "1061B",
            "libelle": "[1061B] Autres activit\u00e9s du travail des grains "
          }]
        },
        {
          "code": "1062",
          "total": "0",
          "libelle": "[1062] Fabrication de produits amylac\u00e9s ",
          "hasChildren": true,
          "children": [{
            "code": "1062Z",
            "libelle": "[1062Z] Fabrication de produits amylac\u00e9s "
          }]
        }]
      },
      {
        "code": "107",
        "total": "41",
        "libelle": "[107] Fabrication de produits de boulangerie-p\u00e2tisserie et de p\u00e2tes alimentaires",
        "hasChildren": true,
        "children": [{
          "code": "1071",
          "total": "40",
          "libelle": "[1071] Fabrication de pain et de p\u00e2tisserie fra\u00eeche",
          "hasChildren": true,
          "children": [{
            "code": "1071A",
            "libelle": "[1071A] Fabrication industrielle de pain et de p\u00e2tisserie fra\u00eeche "
          },
          {
            "code": "1071B",
            "libelle": "[1071B] Cuisson de produits de boulangerie"
          },
          {
            "code": "1071C",
            "libelle": "[1071C] Boulangerie et boulangerie-p\u00e2tisserie"
          },
          {
            "code": "1071D",
            "libelle": "[1071D] P\u00e2tisserie "
          }]
        },
        {
          "code": "1072",
          "total": "1",
          "libelle": "[1072] Fabrication de biscuits, biscottes et p\u00e2tisseries de conservation ",
          "hasChildren": true,
          "children": [{
            "code": "1072Z",
            "libelle": "[1072Z] Fabrication de biscuits, biscottes et p\u00e2tisseries de conservation "
          }]
        },
        {
          "code": "1073",
          "total": "0",
          "libelle": "[1073] Fabrication de p\u00e2tes alimentaires ",
          "hasChildren": true,
          "children": [{
            "code": "1073Z",
            "libelle": "[1073Z] Fabrication de p\u00e2tes alimentaires "
          }]
        }]
      },
      {
        "code": "108",
        "total": "2",
        "libelle": "[108] Fabrication d'autres produits alimentaires ",
        "hasChildren": true,
        "children": [{
          "code": "1081",
          "total": "0",
          "libelle": "[1081] Fabrication de sucre ",
          "hasChildren": true,
          "children": [{
            "code": "1081Z",
            "libelle": "[1081Z] Fabrication de sucre "
          }]
        },
        {
          "code": "1082",
          "total": "1",
          "libelle": "[1082] Fabrication de cacao, chocolat et de produits de confiserie ",
          "hasChildren": true,
          "children": [{
            "code": "1082Z",
            "libelle": "[1082Z] Fabrication de cacao, chocolat et de produits de confiserie "
          }]
        },
        {
          "code": "1083",
          "total": "0",
          "libelle": "[1083] Transformation du th\u00e9 et du caf\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "1083Z",
            "libelle": "[1083Z] Transformation du th\u00e9 et du caf\u00e9 "
          }]
        },
        {
          "code": "1084",
          "total": "0",
          "libelle": "[1084] Fabrication de condiments et assaisonnements ",
          "hasChildren": true,
          "children": [{
            "code": "1084Z",
            "libelle": "[1084Z] Fabrication de condiments et assaisonnements "
          }]
        },
        {
          "code": "1085",
          "total": "0",
          "libelle": "[1085] Fabrication de plats pr\u00e9par\u00e9s ",
          "hasChildren": true,
          "children": [{
            "code": "1085Z",
            "libelle": "[1085Z] Fabrication de plats pr\u00e9par\u00e9s "
          }]
        },
        {
          "code": "1086",

          "total": "0",
          "libelle": "[1086] Fabrication d'aliments homog\u00e9n\u00e9is\u00e9s et di\u00e9t\u00e9tiques ",

          "hasChildren": true,
          "children": [{
            "code": "1086Z",
            "libelle": "[1086Z] Fabrication d'aliments homog\u00e9n\u00e9is\u00e9s et di\u00e9t\u00e9tiques "
          }]
        },
        {
          "code": "1089",
          "total": "1",
          "libelle": "[1089] Fabrication d'autres produits alimentaires n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "1089Z",
            "libelle": "[1089Z] Fabrication d'autres produits alimentaires n.c.a. "
          }]
        }]
      },
      {
        "code": "109",
        "total": "1",
        "libelle": "[109] Fabrication d'aliments pour animaux ",
        "hasChildren": true,
        "children": [{
          "code": "1091",
          "total": "1",
          "libelle": "[1091] Fabrication d'aliments pour animaux de ferme ",
          "hasChildren": true,
          "children": [{
            "code": "1091Z",
            "libelle": "[1091Z] Fabrication d'aliments pour animaux de ferme "
          }]
        },
        {
          "code": "1092",
          "total": "0",
          "libelle": "[1092] Fabrication d'aliments pour animaux de compagnie ",
          "hasChildren": true,
          "children": [{
            "code": "1092Z",
            "libelle": "[1092Z] Fabrication d'aliments pour animaux de compagnie "
          }]
        }]
      }]
    },
    {
      "code": "11",
      "code_section": "C",
      "total": "0",
      "libelle": "[11] Fabrication de boissons ",
      "hasChildren": false,
      "children": [{
        "code": "110",
        "total": "0",
        "libelle": "[110] Fabrication de boissons ",
        "hasChildren": true,
        "children": [{
          "code": "1101",
          "total": "0",
          "libelle": "[1101] Production de boissons alcooliques distill\u00e9es ",
          "hasChildren": true,
          "children": [{
            "code": "1101Z",
            "libelle": "[1101Z] Production de boissons alcooliques distill\u00e9es "
          }]
        },
        {
          "code": "1102",
          "total": "0",
          "libelle": "[1102] Production de vin (de raisin) ",
          "hasChildren": true,
          "children": [{
            "code": "1102A",
            "libelle": "[1102A] Fabrication de vins effervescents "
          },
          {
            "code": "1102B",
            "libelle": "[1102B] Vinification "
          }]
        },
        {
          "code": "1103",
          "total": "0",
          "libelle": "[1103] Fabrication de cidre et de vins de fruits ",
          "hasChildren": true,
          "children": [{
            "code": "1103Z",
            "libelle": "[1103Z] Fabrication de cidre et de vins de fruits "
          }]
        },
        {
          "code": "1104",
          "total": "0",
          "libelle": "[1104] Production d'autres boissons ferment\u00e9es non distill\u00e9es ",
          "hasChildren": true,
          "children": [{
            "code": "1104Z",
            "libelle": "[1104Z] Production d'autres boissons ferment\u00e9es non distill\u00e9es "
          }]
        },
        {
          "code": "1105",
          "total": "0",
          "libelle": "[1105] Fabrication de bi\u00e8re ",
          "hasChildren": true,
          "children": [{
            "code": "1105Z",
            "libelle": "[1105Z] Fabrication de bi\u00e8re "
          }]
        },
        {
          "code": "1106",
          "total": "0",
          "libelle": "[1106] Fabrication de malt ",
          "hasChildren": true,
          "children": [{
            "code": "1106Z",
            "libelle": "[1106Z] Fabrication de malt "
          }]
        },
        {
          "code": "1107",
          "total": "0",
          "libelle": "[1107] Industrie des eaux min\u00e9rales et autres eaux embouteill\u00e9es et des boissons rafra\u00eechissantes ",
          "hasChildren": true,
          "children": [{
            "code": "1107A",
            "libelle": "[1107A] Industrie des eaux de table "
          },
          {
            "code": "1107B",
            "libelle": "[1107B] Production de boissons rafra\u00eechissantes "
          }]
        }]
      }]
    },
    {
      "code": "12",
      "code_section": "C",
      "total": "0",
      "libelle": "[12] Fabrication de produits \u00e0 base de tabac ",
      "hasChildren": false,
      "children": [{
        "code": "120",
        "total": "0",
        "libelle": "[120] Fabrication de produits \u00e0 base de tabac ",
        "hasChildren": true,
        "children": [{
          "code": "1200",
          "total": "0",
          "libelle": "[1200] Fabrication de produits \u00e0 base de tabac ",
          "hasChildren": true,
          "children": [{
            "code": "1200Z",
            "libelle": "[1200Z] Fabrication de produits \u00e0 base de tabac "
          }]
        }]
      }]
    },
    {
      "code": "13",
      "code_section": "C",
      "total": "1",
      "libelle": "[13] Fabrication de textiles ",
      "hasChildren": false,
      "children": [{
        "code": "131",
        "total": "0",
        "libelle": "[131] Pr\u00e9paration de fibres textiles et filature ",
        "hasChildren": true,
        "children": [{
          "code": "1310",
          "total": "0",
          "libelle": "[1310] Pr\u00e9paration de fibres textiles et filature ",
          "hasChildren": true,
          "children": [{
            "code": "1310Z",
            "libelle": "[1310Z] Pr\u00e9paration de fibres textiles et filature "
          }]
        }]
      },
      {
        "code": "132",
        "total": "0",
        "libelle": "[132] Tissage ",
        "hasChildren": true,
        "children": [{
          "code": "1320",
          "total": "0",
          "libelle": "[1320] Tissage ",
          "hasChildren": true,
          "children": [{
            "code": "1320Z",
            "libelle": "[1320Z] Tissage "
          }]
        }]
      },
      {
        "code": "133",
        "total": "0",
        "libelle": "[133] Ennoblissement textile ",
        "hasChildren": true,
        "children": [{
          "code": "1330",
          "total": "0",
          "libelle": "[1330] Ennoblissement textile ",
          "hasChildren": true,
          "children": [{
            "code": "1330Z",
            "libelle": "[1330Z] Ennoblissement textile "
          }]
        }]
      },
      {
        "code": "139",
        "total": "1",
        "libelle": "[139] Fabrication d'autres textiles ",
        "hasChildren": true,
        "children": [{
          "code": "1391",
          "total": "0",
          "libelle": "[1391] Fabrication d'\u00e9toffes \u00e0 mailles ",
          "hasChildren": true,
          "children": [{
            "code": "1391Z",
            "libelle": "[1391Z] Fabrication d'\u00e9toffes \u00e0 mailles "
          }]
        },
        {
          "code": "1392",
          "total": "1",
          "libelle": "[1392] Fabrication d'articles textiles, sauf habillement ",
          "hasChildren": true,
          "children": [{
            "code": "1392Z",
            "libelle": "[1392Z] Fabrication d'articles textiles, sauf habillement "
          }]
        },
        {
          "code": "1393",
          "total": "0",
          "libelle": "[1393] Fabrication de tapis et moquettes ",
          "hasChildren": true,
          "children": [{
            "code": "1393Z",
            "libelle": "[1393Z] Fabrication de tapis et moquettes "
          }]
        },
        {
          "code": "1394",
          "total": "0",
          "libelle": "[1394] Fabrication de ficelles, cordes et filets ",
          "hasChildren": true,
          "children": [{
            "code": "1394Z",
            "libelle": "[1394Z] Fabrication de ficelles, cordes et filets "
          }]
        },
        {
          "code": "1395",
          "total": "0",
          "libelle": "[1395] Fabrication de non-tiss\u00e9s, sauf habillement ",
          "hasChildren": true,
          "children": [{
            "code": "1395Z",
            "libelle": "[1395Z] Fabrication de non-tiss\u00e9s, sauf habillement "
          }]
        },
        {
          "code": "1396",
          "total": "0",
          "libelle": "[1396] Fabrication d'autres textiles techniques et industriels ",
          "hasChildren": true,
          "children": [{
            "code": "1396Z",
            "libelle": "[1396Z] Fabrication d'autres textiles techniques et industriels "
          }]
        },
        {
          "code": "1399",
          "total": "0",
          "libelle": "[1399] Fabrication d'autres textiles n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "1399Z",
            "libelle": "[1399Z] Fabrication d'autres textiles n.c.a. "
          }]
        }]
      }]
    },
    {
      "code": "14",
      "code_section": "C",
      "total": "2",
      "libelle": "[14] Industrie de l'habillement ",
      "hasChildren": false,
      "children": [{
        "code": "141",
        "total": "2",
        "libelle": "[141] Fabrication de v\u00eatements, autres qu'en fourrure ",
        "hasChildren": true,
        "children": [{
          "code": "1411",
          "total": "0",
          "libelle": "[1411] Fabrication de v\u00eatements en cuir ",
          "hasChildren": true,
          "children": [{
            "code": "1411Z",
            "libelle": "[1411Z] Fabrication de v\u00eatements en cuir "
          }]
        },
        {
          "code": "1412",
          "total": "0",
          "libelle": "[1412] Fabrication de v\u00eatements de travail ",
          "hasChildren": true,
          "children": [{
            "code": "1412Z",
            "libelle": "[1412Z] Fabrication de v\u00eatements de travail "
          }]
        },
        {
          "code": "1413",
          "total": "2",
          "libelle": "[1413] Fabrication de v\u00eatements de dessus ",
          "hasChildren": true,
          "children": [{
            "code": "1413Z",
            "libelle": "[1413Z] Fabrication de v\u00eatements de dessus "
          }]
        },
        {
          "code": "1414",
          "total": "0",
          "libelle": "[1414] Fabrication de v\u00eatements de dessous ",
          "hasChildren": true,
          "children": [{
            "code": "1414Z",
            "libelle": "[1414Z] Fabrication de v\u00eatements de dessous "
          }]
        },
        {
          "code": "1419",
          "total": "0",
          "libelle": "[1419] Fabrication d'autres v\u00eatements et accessoires ",
          "hasChildren": true,
          "children": [{
            "code": "1419Z",
            "libelle": "[1419Z] Fabrication d'autres v\u00eatements et accessoires "
          }]
        }]
      },
      {
        "code": "142",
        "total": "0",
        "libelle": "[142] Fabrication d'articles en fourrure ",
        "hasChildren": true,
        "children": [{
          "code": "1420",
          "total": "0",
          "libelle": "[1420] Fabrication d'articles en fourrure ",
          "hasChildren": true,
          "children": [{
            "code": "1420Z",
            "libelle": "[1420Z] Fabrication d'articles en fourrure "
          }]
        }]
      },
      {
        "code": "143",
        "total": "0",
        "libelle": "[143] Fabrication d'articles \u00e0 mailles ",
        "hasChildren": true,
        "children": [{
          "code": "1431",
          "total": "0",
          "libelle": "[1431] Fabrication d'articles chaussants \u00e0 mailles ",
          "hasChildren": true,
          "children": [{
            "code": "1431Z",
            "libelle": "[1431Z] Fabrication d'articles chaussants \u00e0 mailles "
          }]
        },
        {
          "code": "1439",
          "total": "0",
          "libelle": "[1439] Fabrication d'autres articles \u00e0 mailles ",
          "hasChildren": true,
          "children": [{
            "code": "1439Z",
            "libelle": "[1439Z] Fabrication d'autres articles \u00e0 mailles "
          }]
        }]
      }]
    },
    {
      "code": "15",
      "code_section": "C",
      "total": "0",
      "libelle": "[15] Industrie du cuir et de la chaussure ",
      "hasChildren": false,
      "children": [{
        "code": "151",
        "total": "0",
        "libelle": "[151] Appr\u00eat et tannage des cuirs ; pr\u00e9paration et teinture des fourrures ; fabrication d'articles de voyage, de maroquinerie et de sellerie ",
        "hasChildren": true,
        "children": [{
          "code": "1511",
          "total": "0",
          "libelle": "[1511] Appr\u00eat et tannage des cuirs ; pr\u00e9paration et teinture des fourrures ",
          "hasChildren": true,
          "children": [{
            "code": "1511Z",
            "libelle": "[1511Z] Appr\u00eat et tannage des cuirs ; pr\u00e9paration et teinture des fourrures "
          }]
        },
        {
          "code": "1512",
          "total": "0",
          "libelle": "[1512] Fabrication d'articles de voyage, de maroquinerie et de sellerie ",
          "hasChildren": true,
          "children": [{
            "code": "1512Z",
            "libelle": "[1512Z] Fabrication d'articles de voyage, de maroquinerie et de sellerie "
          }]
        }]
      },
      {
        "code": "152",
        "total": "0",
        "libelle": "[152] Fabrication de chaussures ",
        "hasChildren": true,
        "children": [{
          "code": "1520",
          "total": "0",
          "libelle": "[1520] Fabrication de chaussures ",
          "hasChildren": true,
          "children": [{
            "code": "1520Z",
            "libelle": "[1520Z] Fabrication de chaussures "
          }]
        }]
      }]
    },
    {
      "code": "16",
      "code_section": "C",
      "total": "6",
      "libelle": "[16] Travail du bois et fabrication d'articles en bois et en li\u00e8ge, \u00e0 l'exception des meubles ; fabrication d'articles en vannerie et sparterie",
      "hasChildren": false,
      "children": [{
        "code": "161",

        "total": "1",
        "libelle": "[161] Sciage et rabotage du bois ",
        "hasChildren": true,
        "children": [{
          "code": "1610",
          "total": "1",
          "libelle": "[1610] Sciage et rabotage du bois ",
          "hasChildren": true,
          "children": [{
            "code": "1610A",
            "libelle": "[1610A] Sciage et rabotage du bois, hors impr\u00e9gnation "
          },
          {
            "code": "1610B",
            "libelle": "[1610B] Impr\u00e9gnation du bois "
          }]
        }]
      },
      {
        "code": "162",
        "total": "5",
        "libelle": "[162] Fabrication d'articles en bois, li\u00e8ge, vannerie et sparterie",
        "hasChildren": true,
        "children": [{
          "code": "1621",
          "total": "0",
          "libelle": "[1621] Fabrication de placage et de panneaux de bois ",
          "hasChildren": true,
          "children": [{
            "code": "1621Z",
            "libelle": "[1621Z] Fabrication de placage et de panneaux de bois "
          }]
        },
        {
          "code": "1622",
          "total": "0",
          "libelle": "[1622] Fabrication de parquets assembl\u00e9s ",
          "hasChildren": true,
          "children": [{
            "code": "1622Z",
            "libelle": "[1622Z] Fabrication de parquets assembl\u00e9s "
          }]
        },
        {
          "code": "1623",
          "total": "2",
          "libelle": "[1623] Fabrication de charpentes et d'autres menuiseries ",
          "hasChildren": true,
          "children": [{
            "code": "1623Z",
            "libelle": "[1623Z] Fabrication de charpentes et d'autres menuiseries "
          }]
        },
        {
          "code": "1624",
          "total": "3",
          "libelle": "[1624] Fabrication d'emballages en bois ",
          "hasChildren": true,
          "children": [{
            "code": "1624Z",
            "libelle": "[1624Z] Fabrication d'emballages en bois "
          }]
        },
        {
          "code": "1629",
          "total": "0",
          "libelle": "[1629] Fabrication d'objets divers en bois ; fabrication d'objets en li\u00e8ge, vannerie et sparterie ",
          "hasChildren": true,
          "children": [{
            "code": "1629Z",
            "libelle": "[1629Z] Fabrication d'objets divers en bois ; fabrication d'objets en li\u00e8ge, vannerie et sparterie "
          }]
        }]
      }]
    },
    {
      "code": "17",
      "code_section": "C",
      "total": "1",
      "libelle": "[17] Industrie du papier et du carton ",
      "hasChildren": false,
      "children": [{
        "code": "171",
        "total": "0",
        "libelle": "[171] Fabrication de p\u00e2te \u00e0 papier, de papier et de carton ",
        "hasChildren": true,
        "children": [{
          "code": "1711",
          "total": "0",
          "libelle": "[1711] Fabrication de p\u00e2te \u00e0 papier ",
          "hasChildren": true,
          "children": [{
            "code": "1711Z",
            "libelle": "[1711Z] Fabrication de p\u00e2te \u00e0 papier "
          }]
        },
        {
          "code": "1712",
          "total": "0",
          "libelle": "[1712] Fabrication de papier et de carton ",
          "hasChildren": true,
          "children": [{
            "code": "1712Z",
            "libelle": "[1712Z] Fabrication de papier et de carton "
          }]
        }]
      },
      {
        "code": "172",
        "total": "1",
        "libelle": "[172] Fabrication d'articles en papier ou en carton ",
        "hasChildren": true,
        "children": [{
          "code": "1721",
          "total": "1",
          "libelle": "[1721] Fabrication de papier et carton ondul\u00e9s et d'emballages en papier ou en carton ",
          "hasChildren": true,
          "children": [{
            "code": "1721A",
            "libelle": "[1721A] Fabrication de carton ondul\u00e9 "
          },
          {
            "code": "1721B",
            "libelle": "[1721B] Fabrication de cartonnages "
          },
          {
            "code": "1721C",
            "libelle": "[1721C] Fabrication d'emballages en papier "
          }]
        },
        {
          "code": "1722",
          "total": "0",
          "libelle": "[1722] Fabrication d'articles en papier \u00e0 usage sanitaire ou domestique ",
          "hasChildren": true,
          "children": [{
            "code": "1722Z",
            "libelle": "[1722Z] Fabrication d'articles en papier \u00e0 usage sanitaire ou domestique "
          }]
        },
        {
          "code": "1723",
          "total": "0",
          "libelle": "[1723] Fabrication d'articles de papeterie ",
          "hasChildren": true,

          "children": [{
            "code": "1723Z",
            "libelle": "[1723Z] Fabrication d'articles de papeterie "
          }]
        },
        {
          "code": "1724",
          "total": "0",
          "libelle": "[1724] Fabrication de papiers peints ",
          "hasChildren": true,
          "children": [{
            "code": "1724Z",
            "libelle": "[1724Z] Fabrication de papiers peints "
          }]
        },
        {
          "code": "1729",
          "total": "0",
          "libelle": "[1729] Fabrication d'autres articles en papier ou en carton ",
          "hasChildren": true,
          "children": [{
            "code": "1729Z",
            "libelle": "[1729Z] Fabrication d'autres articles en papier ou en carton "
          }]
        }]
      }]
    },
    {
      "code": "18",
      "code_section": "C",
      "total": "10",
      "libelle": "[18] Imprimerie et reproduction d'enregistrements ",
      "hasChildren": false,
      "children": [{
        "code": "181",
        "total": "10",
        "libelle": "[181] Imprimerie et services annexes ",
        "hasChildren": true,
        "children": [{
          "code": "1811",
          "total": "0",
          "libelle": "[1811] Imprimerie de journaux ",
          "hasChildren": true,
          "children": [{
            "code": "1811Z",
            "libelle": "[1811Z] Imprimerie de journaux "
          }]
        },
        {
          "code": "1812",
          "total": "5",
          "libelle": "[1812] Autre imprimerie (labeur) ",
          "hasChildren": true,
          "children": [{
            "code": "1812Z",
            "libelle": "[1812Z] Autre imprimerie (labeur) "
          }]
        },
        {
          "code": "1813",
          "total": "5",
          "libelle": "[1813] Activit\u00e9s de pr\u00e9-presse ",
          "hasChildren": true,
          "children": [{
            "code": "1813Z",
            "libelle": "[1813Z] Activit\u00e9s de pr\u00e9-presse "
          }]
        },
        {
          "code": "1814",
          "total": "0",
          "libelle": "[1814] Reliure et activit\u00e9s connexes ",
          "hasChildren": true,
          "children": [{
            "code": "1814Z",
            "libelle": "[1814Z] Reliure et activit\u00e9s connexes "
          }]
        }]
      },
      {
        "code": "182",
        "total": "0",
        "libelle": "[182] Reproduction d'enregistrements ",
        "hasChildren": true,
        "children": [{
          "code": "1820",
          "total": "0",
          "libelle": "[1820] Reproduction d'enregistrements ",
          "hasChildren": true,
          "children": [{
            "code": "1820Z",
            "libelle": "[1820Z] Reproduction d'enregistrements "
          }]
        }]
      }]
    },
    {
      "code": "19",
      "code_section": "C",
      "total": "0",
      "libelle": "[19] Cok\u00e9faction et raffinage ",
      "hasChildren": false,
      "children": [{
        "code": "191",
        "total": "0",
        "libelle": "[191] Cok\u00e9faction ",
        "hasChildren": true,
        "children": [{
          "code": "1910",
          "total": "0",
          "libelle": "[1910] Cok\u00e9faction ",
          "hasChildren": true,
          "children": [{
            "code": "1910Z",
            "libelle": "[1910Z] Cok\u00e9faction "
          }]
        }]
      },
      {
        "code": "192",
        "total": "0",
        "libelle": "[192] Raffinage du p\u00e9trole ",
        "hasChildren": true,
        "children": [{
          "code": "1920",
          "total": "0",
          "libelle": "[1920] Raffinage du p\u00e9trole ",
          "hasChildren": true,
          "children": [{
            "code": "1920Z",
            "libelle": "[1920Z] Raffinage du p\u00e9trole "
          }]
        }]
      }]
    },
    {
      "code": "20",
      "code_section": "C",
      "total": "2",
      "libelle": "[20] Industrie chimique ",
      "hasChildren": false,
      "children": [{
        "code": "201",
        "total": "1",
        "libelle": "[201] Fabrication de produits chimiques de base, de produits azot\u00e9s et d'engrais, de mati\u00e8res plastiques de base et de caoutchouc synth\u00e9tique ",
        "hasChildren": true,
        "children": [{
          "code": "2011",
          "total": "0",
          "libelle": "[2011] Fabrication de gaz industriels ",
          "hasChildren": true,
          "children": [{
            "code": "2011Z",
            "libelle": "[2011Z] Fabrication de gaz industriels "
          }]
        },
        {
          "code": "2012",
          "total": "0",
          "libelle": "[2012] Fabrication de colorants et de pigments ",
          "hasChildren": true,
          "children": [{
            "code": "2012Z",
            "libelle": "[2012Z] Fabrication de colorants et de pigments "
          }]
        },
        {
          "code": "2013",
          "total": "0",
          "libelle": "[2013] Fabrication d'autres produits chimiques inorganiques de base ",
          "hasChildren": true,
          "children": [{
            "code": "2013A",
            "libelle": "[2013A] Enrichissement et retraitement de mati\u00e8res nucl\u00e9aires "
          },
          {
            "code": "2013B",
            "libelle": "[2013B] Fabrication d'autres produits chimiques inorganiques de base n.c.a. "
          }]
        },
        {
          "code": "2014",
          "total": "0",
          "libelle": "[2014] Fabrication d'autres produits chimiques organiques de base ",
          "hasChildren": true,
          "children": [{
            "code": "2014Z",
            "libelle": "[2014Z] Fabrication d'autres produits chimiques organiques de base "
          }]
        },
        {
          "code": "2015",
          "total": "1",
          "libelle": "[2015] Fabrication de produits azot\u00e9s et d'engrais ",
          "hasChildren": true,
          "children": [{
            "code": "2015Z",
            "libelle": "[2015Z] Fabrication de produits azot\u00e9s et d'engrais "
          }]
        },
        {
          "code": "2016",
          "total": "0",
          "libelle": "[2016] Fabrication de mati\u00e8res plastiques de base ",
          "hasChildren": true,
          "children": [{
            "code": "2016Z",
            "libelle": "[2016Z] Fabrication de mati\u00e8res plastiques de base "
          }]
        },
        {
          "code": "2017",
          "total": "0",
          "libelle": "[2017] Fabrication de caoutchouc synth\u00e9tique ",
          "hasChildren": true,
          "children": [{
            "code": "2017Z",
            "libelle": "[2017Z] Fabrication de caoutchouc synth\u00e9tique "
          }]
        }]
      },
      {
        "code": "202",
        "total": "0",
        "libelle": "[202] Fabrication de pesticides et d'autres produits agrochimiques ",
        "hasChildren": true,
        "children": [{
          "code": "2020",
          "total": "0",
          "libelle": "[2020] Fabrication de pesticides et d'autres produits agrochimiques ",
          "hasChildren": true,
          "children": [{
            "code": "2020Z",
            "libelle": "[2020Z] Fabrication de pesticides et d'autres produits agrochimiques "
          }]
        }]
      },
      {
        "code": "203",
        "total": "0",
        "libelle": "[203] Fabrication de peintures, vernis, encres et mastics ",
        "hasChildren": true,
        "children": [{
          "code": "2030",
          "total": "0",
          "libelle": "[2030] Fabrication de peintures, vernis, encres et mastics ",
          "hasChildren": true,
          "children": [{
            "code": "2030Z",
            "libelle": "[2030Z] Fabrication de peintures, vernis, encres et mastics "
          }]
        }]
      },
      {
        "code": "204",
        "total": "0",
        "libelle": "[204] Fabrication de savons, de produits d'entretien et de parfums ",
        "hasChildren": true,
        "children": [{
          "code": "2041",
          "total": "0",
          "libelle": "[2041] Fabrication de savons, d\u00e9tergents et produits d'entretien ",
          "hasChildren": true,
          "children": [{
            "code": "2041Z",
            "libelle": "[2041Z] Fabrication de savons, d\u00e9tergents et produits d'entretien "
          }]
        },
        {
          "code": "2042",
          "total": "0",
          "libelle": "[2042] Fabrication de parfums et de produits pour la toilette ",
          "hasChildren": true,
          "children": [{
            "code": "2042Z",
            "libelle": "[2042Z] Fabrication de parfums et de produits pour la toilette "
          }]
        }]
      },
      {
        "code": "205",
        "total": "1",
        "libelle": "[205] Fabrication d'autres produits chimiques ",
        "hasChildren": true,
        "children": [{
          "code": "2051",
          "total": "0",
          "libelle": "[2051] Fabrication de produits explosifs ",
          "hasChildren": true,
          "children": [{
            "code": "2051Z",
            "libelle": "[2051Z] Fabrication de produits explosifs "
          }]
        },
        {
          "code": "2052",
          "total": "0",
          "libelle": "[2052] Fabrication de colles ",
          "hasChildren": true,
          "children": [{
            "code": "2052Z",
            "libelle": "[2052Z] Fabrication de colles "
          }]
        },
        {
          "code": "2053",
          "total": "0",
          "libelle": "[2053] Fabrication d'huiles essentielles ",
          "hasChildren": true,
          "children": [{
            "code": "2053Z",
            "libelle": "[2053Z] Fabrication d'huiles essentielles "
          }]
        },
        {
          "code": "2059",
          "total": "1",
          "libelle": "[2059] Fabrication d'autres produits chimiques n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "2059Z",
            "libelle": "[2059Z] Fabrication d'autres produits chimiques n.c.a. "
          }]
        }]
      },
      {
        "code": "206",
        "total": "0",
        "libelle": "[206] Fabrication de fibres artificielles ou synth\u00e9tiques ",
        "hasChildren": true,
        "children": [{
          "code": "2060",
          "total": "0",
          "libelle": "[2060] Fabrication de fibres artificielles ou synth\u00e9tiques ",
          "hasChildren": true,
          "children": [{
            "code": "2060Z",
            "libelle": "[2060Z] Fabrication de fibres artificielles ou synth\u00e9tiques "
          }]
        }]
      }]
    },
    {
      "code": "21",
      "code_section": "C",
      "total": "0",
      "libelle": "[21] Industrie pharmaceutique ",
      "hasChildren": false,
      "children": [{
        "code": "211",
        "total": "0",
        "libelle": "[211] Fabrication de produits pharmaceutiques de base ",
        "hasChildren": true,
        "children": [{
          "code": "2110",
          "total": "0",
          "libelle": "[2110] Fabrication de produits pharmaceutiques de base ",
          "hasChildren": true,
          "children": [{
            "code": "2110Z",
            "libelle": "[2110Z] Fabrication de produits pharmaceutiques de base "
          }]
        }]
      },
      {
        "code": "212",
        "total": "0",
        "libelle": "[212] Fabrication de pr\u00e9parations pharmaceutiques ",
        "hasChildren": true,
        "children": [{
          "code": "2120",
          "total": "0",
          "libelle": "[2120] Fabrication de pr\u00e9parations pharmaceutiques ",
          "hasChildren": true,
          "children": [{
            "code": "2120Z",
            "libelle": "[2120Z] Fabrication de pr\u00e9parations pharmaceutiques "
          }]
        }]
      }]
    },
    {
      "code": "22",
      "code_section": "C",
      "total": "4",
      "libelle": "[22] Fabrication de produits en caoutchouc et en plastique ",
      "hasChildren": false,
      "children": [{
        "code": "221",
        "total": "0",
        "libelle": "[221] Fabrication de produits en caoutchouc ",
        "hasChildren": true,
        "children": [{
          "code": "2211",
          "total": "0",
          "libelle": "[2211] Fabrication et rechapage de pneumatiques ",
          "hasChildren": true,
          "children": [{
            "code": "2211Z",
            "libelle": "[2211Z] Fabrication et rechapage de pneumatiques "
          }]
        },
        {
          "code": "2219",
          "total": "0",
          "libelle": "[2219] Fabrication d'autres articles en caoutchouc ",
          "hasChildren": true,
          "children": [{
            "code": "2219Z",
            "libelle": "[2219Z] Fabrication d'autres articles en caoutchouc "
          }]
        }]
      },
      {
        "code": "222",
        "total": "4",
        "libelle": "[222] Fabrication de produits en plastique ",
        "hasChildren": true,
        "children": [{
          "code": "2221",
          "total": "0",
          "libelle": "[2221] Fabrication de plaques, feuilles, tubes et profil\u00e9s en mati\u00e8res plastiques ",
          "hasChildren": true,
          "children": [{
            "code": "2221Z",
            "libelle": "[2221Z] Fabrication de plaques, feuilles, tubes et profil\u00e9s en mati\u00e8res plastiques "
          }]
        },
        {
          "code": "2222",
          "total": "0",
          "libelle": "[2222] Fabrication d'emballages en mati\u00e8res plastiques ",
          "hasChildren": true,
          "children": [{
            "code": "2222Z",
            "libelle": "[2222Z] Fabrication d'emballages en mati\u00e8res plastiques "
          }]
        },
        {
          "code": "2223",
          "total": "1",
          "libelle": "[2223] Fabrication d'\u00e9l\u00e9ments en mati\u00e8res plastiques pour la construction ",
          "hasChildren": true,
          "children": [{
            "code": "2223Z",
            "libelle": "[2223Z] Fabrication d'\u00e9l\u00e9ments en mati\u00e8res plastiques pour la construction "
          }]
        },
        {
          "code": "2229",
          "total": "3",
          "libelle": "[2229] Fabrication d'autres articles en mati\u00e8res plastiques ",
          "hasChildren": true,
          "children": [{
            "code": "2229A",
            "libelle": "[2229A] Fabrication de pi\u00e8ces techniques \u00e0 base de mati\u00e8res plastiques "
          },
          {
            "code": "2229B",
            "libelle": "[2229B] Fabrication de produits de consommation courante en mati\u00e8res plastiques "
          }]
        }]
      }]
    },
    {
      "code": "23",
      "code_section": "C",
      "total": "9",
      "libelle": "[23] Fabrication d'autres produits min\u00e9raux non m\u00e9talliques ",
      "hasChildren": false,
      "children": [{
        "code": "231",
        "total": "1",
        "libelle": "[231] Fabrication de verre et d'articles en verre ",
        "hasChildren": true,
        "children": [{
          "code": "2311",
          "total": "0",
          "libelle": "[2311] Fabrication de verre plat ",
          "hasChildren": true,
          "children": [{
            "code": "2311Z",
            "libelle": "[2311Z] Fabrication de verre plat "
          }]
        },
        {
          "code": "2312",
          "total": "1",
          "libelle": "[2312] Fa\u00e7onnage et transformation du verre plat ",
          "hasChildren": true,
          "children": [{
            "code": "2312Z",
            "libelle": "[2312Z] Fa\u00e7onnage et transformation du verre plat "
          }]
        },
        {
          "code": "2313",
          "total": "0",
          "libelle": "[2313] Fabrication de verre creux ",
          "hasChildren": true,
          "children": [{
            "code": "2313Z",
            "libelle": "[2313Z] Fabrication de verre creux "
          }]
        },
        {
          "code": "2314",
          "total": "0",
          "libelle": "[2314] Fabrication de fibres de verre ",
          "hasChildren": true,
          "children": [{
            "code": "2314Z",
            "libelle": "[2314Z] Fabrication de fibres de verre "
          }]
        },
        {
          "code": "2319",
          "total": "0",
          "libelle": "[2319] Fabrication et fa\u00e7onnage d'autres articles en verre, y compris verre technique ",
          "hasChildren": true,
          "children": [{
            "code": "2319Z",
            "libelle": "[2319Z] Fabrication et fa\u00e7onnage d'autres articles en verre, y compris verre technique "
          }]
        }]
      },
      {
        "code": "232",
        "total": "0",
        "libelle": "[232] Fabrication de produits r\u00e9fractaires ",
        "hasChildren": true,
        "children": [{
          "code": "2320",
          "total": "0",
          "libelle": "[2320] Fabrication de produits r\u00e9fractaires ",
          "hasChildren": true,
          "children": [{
            "code": "2320Z",
            "libelle": "[2320Z] Fabrication de produits r\u00e9fractaires "
          }]
        }]
      },
      {
        "code": "233",
        "total": "0",
        "libelle": "[233] Fabrication de mat\u00e9riaux de construction en terre cuite ",
        "hasChildren": true,
        "children": [{
          "code": "2331",
          "total": "0",
          "libelle": "[2331] Fabrication de carreaux en c\u00e9ramique ",
          "hasChildren": true,
          "children": [{
            "code": "2331Z",
            "libelle": "[2331Z] Fabrication de carreaux en c\u00e9ramique "
          }]
        },
        {
          "code": "2332",
          "total": "0",
          "libelle": "[2332] Fabrication de briques, tuiles et produits de construction, en terre cuite ",
          "hasChildren": true,
          "children": [{
            "code": "2332Z",
            "libelle": "[2332Z] Fabrication de briques, tuiles et produits de construction, en terre cuite "
          }]
        }]
      },
      {
        "code": "234",
        "total": "0",
        "libelle": "[234] Fabrication d'autres produits en c\u00e9ramique et en porcelaine ",
        "hasChildren": true,
        "children": [{
          "code": "2341",
          "total": "0",
          "libelle": "[2341] Fabrication d'articles c\u00e9ramiques \u00e0 usage domestique ou ornemental ",
          "hasChildren": true,
          "children": [{
            "code": "2341Z",
            "libelle": "[2341Z] Fabrication d'articles c\u00e9ramiques \u00e0 usage domestique ou ornemental "
          }]
        },
        {
          "code": "2342",
          "total": "0",
          "libelle": "[2342] Fabrication d'appareils sanitaires en c\u00e9ramique ",
          "hasChildren": true,
          "children": [{
            "code": "2342Z",
            "libelle": "[2342Z] Fabrication d'appareils sanitaires en c\u00e9ramique "
          }]
        },
        {
          "code": "2343",
          "total": "0",
          "libelle": "[2343] Fabrication d'isolateurs et pi\u00e8ces isolantes en c\u00e9ramique ",
          "hasChildren": true,
          "children": [{
            "code": "2343Z",
            "libelle": "[2343Z] Fabrication d'isolateurs et pi\u00e8ces isolantes en c\u00e9ramique "
          }]
        },
        {
          "code": "2344",
          "total": "0",
          "libelle": "[2344] Fabrication d'autres produits c\u00e9ramiques \u00e0 usage technique ",
          "hasChildren": true,
          "children": [{
            "code": "2344Z",
            "libelle": "[2344Z] Fabrication d'autres produits c\u00e9ramiques \u00e0 usage technique "
          }]
        },
        {
          "code": "2349",
          "total": "0",
          "libelle": "[2349] Fabrication d'autres produits c\u00e9ramiques ",
          "hasChildren": true,
          "children": [{
            "code": "2349Z",
            "libelle": "[2349Z] Fabrication d'autres produits c\u00e9ramiques "
          }]
        }]
      },
      {
        "code": "235",
        "total": "0",
        "libelle": "[235] Fabrication de ciment, chaux et pl\u00e2tre ",
        "hasChildren": true,
        "children": [{
          "code": "2351",
          "total": "0",
          "libelle": "[2351] Fabrication de ciment ",
          "hasChildren": true,
          "children": [{
            "code": "2351Z",
            "libelle": "[2351Z] Fabrication de ciment "
          }]
        },
        {
          "code": "2352",
          "total": "0",
          "libelle": "[2352] Fabrication de chaux et pl\u00e2tre ",
          "hasChildren": true,
          "children": [{
            "code": "2352Z",
            "libelle": "[2352Z] Fabrication de chaux et pl\u00e2tre "
          }]
        }]
      },
      {
        "code": "236",
        "total": "7",
        "libelle": "[236] Fabrication d'ouvrages en b\u00e9ton, en ciment ou en pl\u00e2tre ",
        "hasChildren": true,
        "children": [{
          "code": "2361",
          "total": "3",
          "libelle": "[2361] Fabrication d'\u00e9l\u00e9ments en b\u00e9ton pour la construction ",
          "hasChildren": true,
          "children": [{
            "code": "2361Z",
            "libelle": "[2361Z] Fabrication d'\u00e9l\u00e9ments en b\u00e9ton pour la construction "
          }]
        },
        {
          "code": "2362",
          "total": "0",
          "libelle": "[2362] Fabrication d'\u00e9l\u00e9ments en pl\u00e2tre pour la construction ",
          "hasChildren": true,
          "children": [{
            "code": "2362Z",
            "libelle": "[2362Z] Fabrication d'\u00e9l\u00e9ments en pl\u00e2tre pour la construction "
          }]
        },
        {
          "code": "2363",
          "total": "4",
          "libelle": "[2363] Fabrication de b\u00e9ton pr\u00eat \u00e0 l'emploi ",
          "hasChildren": true,
          "children": [{
            "code": "2363Z",
            "libelle": "[2363Z] Fabrication de b\u00e9ton pr\u00eat \u00e0 l'emploi "
          }]
        },
        {
          "code": "2364",
          "total": "0",
          "libelle": "[2364] Fabrication de mortiers et b\u00e9tons secs ",
          "hasChildren": true,
          "children": [{
            "code": "2364Z",
            "libelle": "[2364Z] Fabrication de mortiers et b\u00e9tons secs "
          }]
        },
        {
          "code": "2365",
          "total": "0",
          "libelle": "[2365] Fabrication d'ouvrages en fibre-ciment ",
          "hasChildren": true,
          "children": [{
            "code": "2365Z",
            "libelle": "[2365Z] Fabrication d'ouvrages en fibre-ciment "
          }]
        },
        {
          "code": "2369",
          "total": "0",
          "libelle": "[2369] Fabrication d'autres ouvrages en b\u00e9ton, en ciment ou en pl\u00e2tre ",
          "hasChildren": true,
          "children": [{
            "code": "2369Z",
            "libelle": "[2369Z] Fabrication d'autres ouvrages en b\u00e9ton, en ciment ou en pl\u00e2tre "
          }]
        }]
      },
      {
        "code": "237",
        "total": "0",
        "libelle": "[237] Taille, fa\u00e7onnage et finissage de pierres ",
        "hasChildren": true,
        "children": [{
          "code": "2370",
          "total": "0",
          "libelle": "[2370] Taille, fa\u00e7onnage et finissage de pierres ",
          "hasChildren": true,
          "children": [{
            "code": "2370Z",
            "libelle": "[2370Z] Taille, fa\u00e7onnage et finissage de pierres "
          }]
        }]
      },
      {
        "code": "239",
        "total": "1",
        "libelle": "[239] Fabrication de produits abrasifs et de produits min\u00e9raux non m\u00e9talliques n.c.a. ",
        "hasChildren": true,

        "children": [{
          "code": "2391",
          "total": "0",
          "libelle": "[2391] Fabrication de produits abrasifs ",
          "hasChildren": true,
          "children": [{
            "code": "2391Z",
            "libelle": "[2391Z] Fabrication de produits abrasifs "
          }]
        },
        {
          "code": "2399",
          "total": "1",
          "libelle": "[2399] Fabrication d'autres produits min\u00e9raux non m\u00e9talliques n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "2399Z",
            "libelle": "[2399Z] Fabrication d'autres produits min\u00e9raux non m\u00e9talliques n.c.a. "
          }]
        }]
      }]
    },
    {
      "code": "24",
      "code_section": "C",
      "total": "1",
      "libelle": "[24] M\u00e9tallurgie ",
      "hasChildren": false,
      "children": [{
        "code": "241",
        "total": "0",
        "libelle": "[241] Sid\u00e9rurgie ",
        "hasChildren": true,
        "children": [{
          "code": "2410",
          "total": "0",
          "libelle": "[2410] Sid\u00e9rurgie ",
          "hasChildren": true,
          "children": [{
            "code": "2410Z",
            "libelle": "[2410Z] Sid\u00e9rurgie "
          }]
        }]
      },
      {
        "code": "242",
        "total": "0",
        "libelle": "[242] Fabrication de tubes, tuyaux, profil\u00e9s creux et accessoires correspondants en acier ",
        "hasChildren": true,
        "children": [{
          "code": "2420",
          "total": "0",
          "libelle": "[2420] Fabrication de tubes, tuyaux, profil\u00e9s creux et accessoires correspondants en acier ",
          "hasChildren": true,
          "children": [{
            "code": "2420Z",
            "libelle": "[2420Z] Fabrication de tubes, tuyaux, profil\u00e9s creux et accessoires correspondants en acier "
          }]
        }]
      },
      {
        "code": "243",
        "total": "1",
        "libelle": "[243] Fabrication d'autres produits de premi\u00e8re transformation de l'acier ",
        "hasChildren": true,
        "children": [{
          "code": "2431",
          "total": "0",
          "libelle": "[2431] \u00c9tirage \u00e0 froid de barres ",
          "hasChildren": true,
          "children": [{
            "code": "2431Z",
            "libelle": "[2431Z] \u00c9tirage \u00e0 froid de barres "
          }]
        },
        {
          "code": "2432",
          "total": "0",
          "libelle": "[2432] Laminage \u00e0 froid de feuillards ",
          "hasChildren": true,
          "children": [{
            "code": "2432Z",
            "libelle": "[2432Z] Laminage \u00e0 froid de feuillards "
          }]
        },
        {
          "code": "2433",
          "total": "1",
          "libelle": "[2433] Profilage \u00e0 froid par formage ou pliage ",
          "hasChildren": true,
          "children": [{
            "code": "2433Z",
            "libelle": "[2433Z] Profilage \u00e0 froid par formage ou pliage "
          }]
        },
        {
          "code": "2434",
          "total": "0",
          "libelle": "[2434] Tr\u00e9filage \u00e0 froid ",
          "hasChildren": true,
          "children": [{
            "code": "2434Z",
            "libelle": "[2434Z] Tr\u00e9filage \u00e0 froid "
          }]
        }]
      },
      {
        "code": "244",
        "total": "0",
        "libelle": "[244] Production de m\u00e9taux pr\u00e9cieux et d'autres m\u00e9taux non ferreux ",
        "hasChildren": true,
        "children": [{
          "code": "2441",
          "total": "0",
          "libelle": "[2441] Production de m\u00e9taux pr\u00e9cieux ",
          "hasChildren": true,
          "children": [{
            "code": "2441Z",
            "libelle": "[2441Z] Production de m\u00e9taux pr\u00e9cieux "
          }]
        },
        {
          "code": "2442",
          "total": "0",
          "libelle": "[2442] M\u00e9tallurgie de l'aluminium ",
          "hasChildren": true,
          "children": [{
            "code": "2442Z",
            "libelle": "[2442Z] M\u00e9tallurgie de l'aluminium "
          }]
        },
        {
          "code": "2443",
          "total": "0",
          "libelle": "[2443] M\u00e9tallurgie du plomb, du zinc ou de l'\u00e9tain ",
          "hasChildren": true,
          "children": [{
            "code": "2443Z",
            "libelle": "[2443Z] M\u00e9tallurgie du plomb, du zinc ou de l'\u00e9tain "
          }]
        },
        {
          "code": "2444",
          "total": "0",
          "libelle": "[2444] M\u00e9tallurgie du cuivre ",
          "hasChildren": true,
          "children": [{
            "code": "2444Z",
            "libelle": "[2444Z] M\u00e9tallurgie du cuivre "
          }]
        },
        {
          "code": "2445",
          "total": "0",
          "libelle": "[2445] M\u00e9tallurgie des autres m\u00e9taux non ferreux ",
          "hasChildren": true,
          "children": [{
            "code": "2445Z",
            "libelle": "[2445Z] M\u00e9tallurgie des autres m\u00e9taux non ferreux "
          }]
        },
        {
          "code": "2446",
          "total": "0",
          "libelle": "[2446] \u00c9laboration et transformation de mati\u00e8res nucl\u00e9aires ",
          "hasChildren": true,
          "children": [{
            "code": "2446Z",
            "libelle": "[2446Z] \u00c9laboration et transformation de mati\u00e8res nucl\u00e9aires "
          }]
        }]
      },
      {
        "code": "245",
        "total": "0",
        "libelle": "[245] Fonderie ",
        "hasChildren": true,
        "children": [{
          "code": "2451",
          "total": "0",
          "libelle": "[2451] Fonderie de fonte ",
          "hasChildren": true,
          "children": [{
            "code": "2451Z",
            "libelle": "[2451Z] Fonderie de fonte "
          }]
        },
        {
          "code": "2452",
          "total": "0",
          "libelle": "[2452] Fonderie d'acier ",
          "hasChildren": true,
          "children": [{
            "code": "2452Z",
            "libelle": "[2452Z] Fonderie d'acier "
          }]
        },
        {
          "code": "2453",
          "total": "0",
          "libelle": "[2453] Fonderie de m\u00e9taux l\u00e9gers ",
          "hasChildren": true,
          "children": [{
            "code": "2453Z",
            "libelle": "[2453Z] Fonderie de m\u00e9taux l\u00e9gers "
          }]
        },
        {
          "code": "2454",
          "total": "0",
          "libelle": "[2454] Fonderie d'autres m\u00e9taux non ferreux ",
          "hasChildren": true,
          "children": [{
            "code": "2454Z",
            "libelle": "[2454Z] Fonderie d'autres m\u00e9taux non ferreux "
          }]
        }]
      }]
    },
    {
      "code": "25",
      "code_section": "C",
      "total": "17",
      "libelle": "[25] Fabrication de produits m\u00e9talliques, \u00e0 l'exception des machines et des \u00e9quipements",
      "hasChildren": false,
      "children": [{
        "code": "251",
        "total": "2",
        "libelle": "[251] Fabrication d'\u00e9l\u00e9ments en m\u00e9tal pour la construction ",
        "hasChildren": true,
        "children": [{
          "code": "2511",
          "total": "1",
          "libelle": "[2511] Fabrication de structures m\u00e9talliques et de parties de structures ",
          "hasChildren": true,
          "children": [{
            "code": "2511Z",
            "libelle": "[2511Z] Fabrication de structures m\u00e9talliques et de parties de structures "
          }]
        },
        {
          "code": "2512",
          "total": "1",
          "libelle": "[2512] Fabrication de portes et fen\u00eatres en m\u00e9tal ",
          "hasChildren": true,
          "children": [{
            "code": "2512Z",
            "libelle": "[2512Z] Fabrication de portes et fen\u00eatres en m\u00e9tal "
          }]
        }]
      },
      {
        "code": "252",
        "total": "0",
        "libelle": "[252] Fabrication de r\u00e9servoirs, citernes et conteneurs m\u00e9talliques ",
        "hasChildren": true,
        "children": [{
          "code": "2521",
          "total": "0",
          "libelle": "[2521] Fabrication de radiateurs et de chaudi\u00e8res pour le chauffage central ",
          "hasChildren": true,
          "children": [{
            "code": "2521Z",
            "libelle": "[2521Z] Fabrication de radiateurs et de chaudi\u00e8res pour le chauffage central "
          }]
        },
        {
          "code": "2529",
          "total": "0",
          "libelle": "[2529] Fabrication d'autres r\u00e9servoirs, citernes et conteneurs m\u00e9talliques ",
          "hasChildren": true,
          "children": [{
            "code": "2529Z",
            "libelle": "[2529Z] Fabrication d'autres r\u00e9servoirs, citernes et conteneurs m\u00e9talliques "
          }]
        }]
      },
      {
        "code": "253",
        "total": "0",
        "libelle": "[253] Fabrication de g\u00e9n\u00e9rateurs de vapeur, \u00e0 l'exception des chaudi\u00e8res pour le chauffage central ",
        "hasChildren": true,
        "children": [{
          "code": "2530",
          "total": "0",
          "libelle": "[2530] Fabrication de g\u00e9n\u00e9rateurs de vapeur, \u00e0 l'exception des chaudi\u00e8res pour le chauffage central ",
          "hasChildren": true,
          "children": [{
            "code": "2530Z",
            "libelle": "[2530Z] Fabrication de g\u00e9n\u00e9rateurs de vapeur, \u00e0 l'exception des chaudi\u00e8res pour le chauffage central "
          }]
        }]
      },
      {
        "code": "254",
        "total": "0",
        "libelle": "[254] Fabrication d'armes et de munitions ",
        "hasChildren": true,
        "children": [{
          "code": "2540",
          "total": "0",
          "libelle": "[2540] Fabrication d'armes et de munitions ",
          "hasChildren": true,
          "children": [{
            "code": "2540Z",
            "libelle": "[2540Z] Fabrication d'armes et de munitions "
          }]
        }]
      },
      {
        "code": "255",
        "total": "2",
        "libelle": "[255] Forge, emboutissage, estampage ; m\u00e9tallurgie des poudres ",
        "hasChildren": true,
        "children": [{
          "code": "2550",
          "total": "2",
          "libelle": "[2550] Forge, emboutissage, estampage ; m\u00e9tallurgie des poudres ",
          "hasChildren": true,
          "children": [{
            "code": "2550A",
            "libelle": "[2550A] Forge, estampage, matri\u00e7age ; m\u00e9tallurgie des poudres "
          },
          {
            "code": "2550B",
            "libelle": "[2550B] D\u00e9coupage, emboutissage "
          }]
        }]
      },
      {
        "code": "256",
        "total": "12",
        "libelle": "[256] Traitement et rev\u00eatement des m\u00e9taux ; usinage",
        "hasChildren": true,
        "children": [{
          "code": "2561",
          "total": "3",
          "libelle": "[2561] Traitement et rev\u00eatement des m\u00e9taux ",
          "hasChildren": true,
          "children": [{
            "code": "2561Z",
            "libelle": "[2561Z] Traitement et rev\u00eatement des m\u00e9taux "
          }]
        },
        {
          "code": "2562",
          "total": "9",
          "libelle": "[2562] Usinage ",
          "hasChildren": true,
          "children": [{
            "code": "2562A",
            "libelle": "[2562A] D\u00e9colletage "
          },
          {
            "code": "2562B",
            "libelle": "[2562B] M\u00e9canique industrielle"
          }]
        }]
      },
      {
        "code": "257",
        "total": "1",
        "libelle": "[257] Fabrication de coutellerie, d'outillage et de quincaillerie ",
        "hasChildren": true,
        "children": [{
          "code": "2571",
          "total": "0",
          "libelle": "[2571] Fabrication de coutellerie ",
          "hasChildren": true,
          "children": [{
            "code": "2571Z",
            "libelle": "[2571Z] Fabrication de coutellerie "
          }]
        },
        {
          "code": "2572",
          "total": "0",
          "libelle": "[2572] Fabrication de serrures et de ferrures ",
          "hasChildren": true,
          "children": [{
            "code": "2572Z",
            "libelle": "[2572Z] Fabrication de serrures et de ferrures "
          }]
        },
        {
          "code": "2573",
          "total": "1",
          "libelle": "[2573] Fabrication d'outillage ",
          "hasChildren": true,
          "children": [{
            "code": "2573A",
            "libelle": "[2573A] Fabrication de moules et mod\u00e8les "
          },
          {
            "code": "2573B",
            "libelle": "[2573B] Fabrication d'autres outillages "
          }]
        }]
      },
      {
        "code": "259",
        "total": "0",
        "libelle": "[259] Fabrication d'autres ouvrages en m\u00e9taux ",
        "hasChildren": true,
        "children": [{
          "code": "2591",
          "total": "0",
          "libelle": "[2591] Fabrication de f\u00fbts et emballages m\u00e9talliques similaires ",
          "hasChildren": true,
          "children": [{
            "code": "2591Z",
            "libelle": "[2591Z] Fabrication de f\u00fbts et emballages m\u00e9talliques similaires "
          }]
        },
        {
          "code": "2592",
          "total": "0",
          "libelle": "[2592] Fabrication d'emballages m\u00e9talliques l\u00e9gers ",
          "hasChildren": true,
          "children": [{
            "code": "2592Z",
            "libelle": "[2592Z] Fabrication d'emballages m\u00e9talliques l\u00e9gers "
          }]
        },
        {
          "code": "2593",
          "total": "0",
          "libelle": "[2593] Fabrication d'articles en fils m\u00e9talliques, de cha\u00eenes et de ressorts ",
          "hasChildren": true,
          "children": [{
            "code": "2593Z",
            "libelle": "[2593Z] Fabrication d'articles en fils m\u00e9talliques, de cha\u00eenes et de ressorts "
          }]
        },
        {
          "code": "2594",
          "total": "0",
          "libelle": "[2594] Fabrication de vis et de boulons ",
          "hasChildren": true,
          "children": [{
            "code": "2594Z",
            "libelle": "[2594Z] Fabrication de vis et de boulons "
          }]
        },
        {
          "code": "2599",
          "total": "0",
          "libelle": "[2599] Fabrication d'autres produits m\u00e9talliques n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "2599A",
            "libelle": "[2599A] Fabrication d'articles m\u00e9talliques m\u00e9nagers "
          },
          {
            "code": "2599B",
            "libelle": "[2599B] Fabrication d'autres articles m\u00e9talliques "
          }]
        }]
      }]
    },
    {
      "code": "26",
      "code_section": "C",
      "total": "6",
      "libelle": "[26] Fabrication de produits informatiques, \u00e9lectroniques et optiques ",
      "hasChildren": false,
      "children": [{
        "code": "261",
        "total": "2",
        "libelle": "[261] Fabrication de composants et cartes \u00e9lectroniques ",
        "hasChildren": true,
        "children": [{
          "code": "2611",
          "total": "0",
          "libelle": "[2611] Fabrication de composants \u00e9lectroniques ",
          "hasChildren": true,
          "children": [{
            "code": "2611Z",
            "libelle": "[2611Z] Fabrication de composants \u00e9lectroniques "
          }]
        },
        {
          "code": "2612",
          "total": "2",
          "libelle": "[2612] Fabrication de cartes \u00e9lectroniques assembl\u00e9es ",
          "hasChildren": true,
          "children": [{
            "code": "2612Z",
            "libelle": "[2612Z] Fabrication de cartes \u00e9lectroniques assembl\u00e9es "
          }]
        }]
      },
      {
        "code": "262",
        "total": "0",
        "libelle": "[262] Fabrication d'ordinateurs et d'\u00e9quipements p\u00e9riph\u00e9riques ",
        "hasChildren": true,
        "children": [{
          "code": "2620",
          "total": "0",
          "libelle": "[2620] Fabrication d'ordinateurs et d'\u00e9quipements p\u00e9riph\u00e9riques ",
          "hasChildren": true,
          "children": [{
            "code": "2620Z",
            "libelle": "[2620Z] Fabrication d'ordinateurs et d'\u00e9quipements p\u00e9riph\u00e9riques "
          }]
        }]
      },
      {
        "code": "263",
        "total": "1",
        "libelle": "[263] Fabrication d'\u00e9quipements de communication ",
        "hasChildren": true,
        "children": [{
          "code": "2630",
          "total": "1",
          "libelle": "[2630] Fabrication d'\u00e9quipements de communication ",
          "hasChildren": true,
          "children": [{
            "code": "2630Z",
            "libelle": "[2630Z] Fabrication d'\u00e9quipements de communication "
          }]
        }]
      },
      {
        "code": "264",
        "total": "1",
        "libelle": "[264] Fabrication de produits \u00e9lectroniques grand public ",
        "hasChildren": true,
        "children": [{
          "code": "2640",
          "total": "1",
          "libelle": "[2640] Fabrication de produits \u00e9lectroniques grand public ",
          "hasChildren": true,
          "children": [{
            "code": "2640Z",
            "libelle": "[2640Z] Fabrication de produits \u00e9lectroniques grand public "
          }]
        }]
      },
      {
        "code": "265",
        "total": "2",
        "libelle": "[265] Fabrication d'instruments et d'appareils de mesure, d'essai et de navigation ; horlogerie ",
        "hasChildren": true,
        "children": [{
          "code": "2651",
          "total": "2",
          "libelle": "[2651] Fabrication d'instruments et d'appareils de mesure, d'essai et de navigation ",
          "hasChildren": true,
          "children": [{
            "code": "2651A",
            "libelle": "[2651A] Fabrication d'\u00e9quipements d'aide \u00e0 la navigation "
          },
          {
            "code": "2651B",
            "libelle": "[2651B] Fabrication d'instrumentation scientifique et technique "
          }]
        },
        {
          "code": "2652",
          "total": "0",
          "libelle": "[2652] Horlogerie ",
          "hasChildren": true,
          "children": [{
            "code": "2652Z",
            "libelle": "[2652Z] Horlogerie "
          }]
        }]
      },
      {
        "code": "266",
        "total": "0",
        "libelle": "[266] Fabrication d'\u00e9quipements d'irradiation m\u00e9dicale, d'\u00e9quipements \u00e9lectrom\u00e9dicaux et \u00e9lectroth\u00e9rapeutiques ",
        "hasChildren": true,
        "children": [{
          "code": "2660",
          "total": "0",
          "libelle": "[2660] Fabrication d'\u00e9quipements d'irradiation m\u00e9dicale, d'\u00e9quipements \u00e9lectrom\u00e9dicaux et \u00e9lectroth\u00e9rapeutiques ",
          "hasChildren": true,
          "children": [{
            "code": "2660Z",
            "libelle": "[2660Z] Fabrication d'\u00e9quipements d'irradiation m\u00e9dicale, d'\u00e9quipements \u00e9lectrom\u00e9dicaux et \u00e9lectroth\u00e9rapeutiques "
          }]
        }]
      },
      {
        "code": "267",
        "total": "0",
        "libelle": "[267] Fabrication de mat\u00e9riels optique et photographique ",
        "hasChildren": true,
        "children": [{
          "code": "2670",
          "total": "0",
          "libelle": "[2670] Fabrication de mat\u00e9riels optique et photographique ",
          "hasChildren": true,
          "children": [{
            "code": "2670Z",
            "libelle": "[2670Z] Fabrication de mat\u00e9riels optique et photographique "
          }]
        }]
      },
      {
        "code": "268",
        "total": "0",
        "libelle": "[268] Fabrication de supports magn\u00e9tiques et optiques ",
        "hasChildren": true,
        "children": [{
          "code": "2680",
          "total": "0",
          "libelle": "[2680] Fabrication de supports magn\u00e9tiques et optiques ",
          "hasChildren": true,
          "children": [{
            "code": "2680Z",
            "libelle": "[2680Z] Fabrication de supports magn\u00e9tiques et optiques "
          }]
        }]
      }]
    },
    {
      "code": "27",
      "code_section": "C",
      "total": "4",
      "libelle": "[27] Fabrication d'\u00e9quipements \u00e9lectriques ",
      "hasChildren": false,
      "children": [{
        "code": "271",
        "total": "0",
        "libelle": "[271] Fabrication de moteurs, g\u00e9n\u00e9ratrices et transformateurs \u00e9lectriques et de mat\u00e9riel de distribution et de commande \u00e9lectrique ",
        "hasChildren": true,
        "children": [{
          "code": "2711",
          "total": "0",
          "libelle": "[2711] Fabrication de moteurs, g\u00e9n\u00e9ratrices et transformateurs \u00e9lectriques ",
          "hasChildren": true,
          "children": [{
            "code": "2711Z",
            "libelle": "[2711Z] Fabrication de moteurs, g\u00e9n\u00e9ratrices et transformateurs \u00e9lectriques "
          }]
        },
        {
          "code": "2712",
          "total": "0",
          "libelle": "[2712] Fabrication de mat\u00e9riel de distribution et de commande \u00e9lectrique ",
          "hasChildren": true,
          "children": [{
            "code": "2712Z",
            "libelle": "[2712Z] Fabrication de mat\u00e9riel de distribution et de commande \u00e9lectrique "
          }]
        }]
      },
      {
        "code": "272",
        "total": "0",
        "libelle": "[272] Fabrication de piles et d'accumulateurs \u00e9lectriques ",
        "hasChildren": true,
        "children": [{
          "code": "2720",
          "total": "0",
          "libelle": "[2720] Fabrication de piles et d'accumulateurs \u00e9lectriques ",
          "hasChildren": true,
          "children": [{
            "code": "2720Z",
            "libelle": "[2720Z] Fabrication de piles et d'accumulateurs \u00e9lectriques "
          }]
        }]
      },
      {
        "code": "273",
        "total": "1",
        "libelle": "[273] Fabrication de fils et c\u00e2bles et de mat\u00e9riel d'installation \u00e9lectrique ",
        "hasChildren": true,
        "children": [{
          "code": "2731",
          "total": "0",
          "libelle": "[2731] Fabrication de c\u00e2bles de fibres optiques ",
          "hasChildren": true,
          "children": [{
            "code": "2731Z",
            "libelle": "[2731Z] Fabrication de c\u00e2bles de fibres optiques "
          }]
        },
        {
          "code": "2732",
          "total": "0",
          "libelle": "[2732] Fabrication d'autres fils et c\u00e2bles \u00e9lectroniques ou \u00e9lectriques ",
          "hasChildren": true,
          "children": [{
            "code": "2732Z",
            "libelle": "[2732Z] Fabrication d'autres fils et c\u00e2bles \u00e9lectroniques ou \u00e9lectriques "
          }]
        },
        {
          "code": "2733",
          "total": "1",
          "libelle": "[2733] Fabrication de mat\u00e9riel d'installation \u00e9lectrique ",
          "hasChildren": true,
          "children": [{
            "code": "2733Z",
            "libelle": "[2733Z] Fabrication de mat\u00e9riel d'installation \u00e9lectrique "
          }]
        }]
      },
      {
        "code": "274",
        "total": "2",
        "libelle": "[274] Fabrication d'appareils d'\u00e9clairage \u00e9lectrique ",
        "hasChildren": true,
        "children": [{
          "code": "2740",
          "total": "2",
          "libelle": "[2740] Fabrication d'appareils d'\u00e9clairage \u00e9lectrique ",
          "hasChildren": true,
          "children": [{
            "code": "2740Z",
            "libelle": "[2740Z] Fabrication d'appareils d'\u00e9clairage \u00e9lectrique "
          }]
        }]
      },
      {
        "code": "275",
        "total": "0",
        "libelle": "[275] Fabrication d'appareils m\u00e9nagers ",
        "hasChildren": true,
        "children": [{
          "code": "2751",
          "total": "0",
          "libelle": "[2751] Fabrication d'appareils \u00e9lectrom\u00e9nagers ",
          "hasChildren": true,
          "children": [{
            "code": "2751Z",
            "libelle": "[2751Z] Fabrication d'appareils \u00e9lectrom\u00e9nagers "
          }]
        },
        {
          "code": "2752",
          "total": "0",
          "libelle": "[2752] Fabrication d'appareils m\u00e9nagers non \u00e9lectriques ",
          "hasChildren": true,
          "children": [{
            "code": "2752Z",
            "libelle": "[2752Z] Fabrication d'appareils m\u00e9nagers non \u00e9lectriques "
          }]
        }]
      },
      {
        "code": "279",
        "total": "1",
        "libelle": "[279] Fabrication d'autres mat\u00e9riels \u00e9lectriques ",
        "hasChildren": true,
        "children": [{
          "code": "2790",
          "total": "1",
          "libelle": "[2790] Fabrication d'autres mat\u00e9riels \u00e9lectriques ",
          "hasChildren": true,
          "children": [{
            "code": "2790Z",
            "libelle": "[2790Z] Fabrication d'autres mat\u00e9riels \u00e9lectriques "
          }]
        }]
      }]
    },
    {
      "code": "28",
      "code_section": "C",
      "total": "4",
      "libelle": "[28] Fabrication de machines et \u00e9quipements n.c.a. ",
      "hasChildren": false,
      "children": [{
        "code": "281",
        "total": "0",
        "libelle": "[281] Fabrication de machines d'usage g\u00e9n\u00e9ral ",
        "hasChildren": true,
        "children": [{
          "code": "2811",
          "total": "0",
          "libelle": "[2811] Fabrication de moteurs et turbines, \u00e0 l'exception des moteurs d'avions et de v\u00e9hicules ",
          "hasChildren": true,
          "children": [{
            "code": "2811Z",
            "libelle": "[2811Z] Fabrication de moteurs et turbines, \u00e0 l'exception des moteurs d'avions et de v\u00e9hicules "
          }]
        },
        {
          "code": "2812",
          "total": "0",
          "libelle": "[2812] Fabrication d'\u00e9quipements hydrauliques et pneumatiques ",
          "hasChildren": true,
          "children": [{
            "code": "2812Z",
            "libelle": "[2812Z] Fabrication d'\u00e9quipements hydrauliques et pneumatiques "
          }]
        },
        {
          "code": "2813",
          "total": "0",
          "libelle": "[2813] Fabrication d'autres pompes et compresseurs ",
          "hasChildren": true,
          "children": [{
            "code": "2813Z",
            "libelle": "[2813Z] Fabrication d'autres pompes et compresseurs "
          }]
        },
        {
          "code": "2814",
          "total": "0",
          "libelle": "[2814] Fabrication d'autres articles de robinetterie ",
          "hasChildren": true,
          "children": [{
            "code": "2814Z",
            "libelle": "[2814Z] Fabrication d'autres articles de robinetterie "
          }]
        },
        {
          "code": "2815",
          "total": "0",
          "libelle": "[2815] Fabrication d'engrenages et d'organes m\u00e9caniques de transmission ",
          "hasChildren": true,
          "children": [{
            "code": "2815Z",
            "libelle": "[2815Z] Fabrication d'engrenages et d'organes m\u00e9caniques de transmission "
          }]
        }]
      },
      {
        "code": "282",
        "total": "0",
        "libelle": "[282] Fabrication d'autres machines d'usage g\u00e9n\u00e9ral ",
        "hasChildren": true,
        "children": [{
          "code": "2821",
          "total": "0",
          "libelle": "[2821] Fabrication de fours et br\u00fbleurs ",
          "hasChildren": true,
          "children": [{
            "code": "2821Z",
            "libelle": "[2821Z] Fabrication de fours et br\u00fbleurs "
          }]
        },
        {
          "code": "2822",
          "total": "0",
          "libelle": "[2822] Fabrication de mat\u00e9riel de levage et de manutention ",
          "hasChildren": true,
          "children": [{
            "code": "2822Z",
            "libelle": "[2822Z] Fabrication de mat\u00e9riel de levage et de manutention "
          }]
        },
        {
          "code": "2823",
          "total": "0",
          "libelle": "[2823] Fabrication de machines et d'\u00e9quipements de bureau (\u00e0 l'exception des ordinateurs et \u00e9quipements p\u00e9riph\u00e9riques) ",
          "hasChildren": true,
          "children": [{
            "code": "2823Z",
            "libelle": "[2823Z] Fabrication de machines et d'\u00e9quipements de bureau (\u00e0 l'exception des ordinateurs et \u00e9quipements p\u00e9riph\u00e9riques) "
          }]
        },
        {
          "code": "2824",
          "total": "0",
          "libelle": "[2824] Fabrication d'outillage portatif \u00e0 moteur incorpor\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "2824Z",
            "libelle": "[2824Z] Fabrication d'outillage portatif \u00e0 moteur incorpor\u00e9 "
          }]
        },
        {
          "code": "2825",
          "total": "0",
          "libelle": "[2825] Fabrication d'\u00e9quipements a\u00e9rauliques et frigorifiques industriels ",
          "hasChildren": true,
          "children": [{
            "code": "2825Z",
            "libelle": "[2825Z] Fabrication d'\u00e9quipements a\u00e9rauliques et frigorifiques industriels "
          }]
        },
        {
          "code": "2829",
          "total": "0",
          "libelle": "[2829] Fabrication de machines diverses d'usage g\u00e9n\u00e9ral ",
          "hasChildren": true,
          "children": [{
            "code": "2829A",
            "libelle": "[2829A] Fabrication d'\u00e9quipements d'emballage, de conditionnement et de pesage "
          },
          {
            "code": "2829B",
            "libelle": "[2829B] Fabrication d'autres machines d'usage g\u00e9n\u00e9ral "
          }]
        }]
      },
      {
        "code": "283",
        "total": "4",
        "libelle": "[283] Fabrication de machines agricoles et foresti\u00e8res ",
        "hasChildren": true,
        "children": [{
          "code": "2830",
          "total": "4",
          "libelle": "[2830] Fabrication de machines agricoles et foresti\u00e8res ",
          "hasChildren": true,
          "children": [{
            "code": "2830Z",
            "libelle": "[2830Z] Fabrication de machines agricoles et foresti\u00e8res "
          }]
        }]
      },
      {
        "code": "284",
        "total": "0",
        "libelle": "[284] Fabrication de machines de formage des m\u00e9taux et de machines-outils ",
        "hasChildren": true,
        "children": [{
          "code": "2841",
          "total": "0",
          "libelle": "[2841] Fabrication de machines de formage des m\u00e9taux ",
          "hasChildren": true,
          "children": [{
            "code": "2841Z",
            "libelle": "[2841Z] Fabrication de machines-outils pour le travail des m\u00e9taux "
          }]
        },
        {
          "code": "2849",
          "total": "0",
          "libelle": "[2849] Fabrication d'autres machines-outils ",
          "hasChildren": true,
          "children": [{
            "code": "2849Z",
            "libelle": "[2849Z] Fabrication d'autres machines-outils "
          }]
        }]
      },
      {
        "code": "289",
        "total": "0",
        "libelle": "[289] Fabrication d'autres machines d'usage sp\u00e9cifique ",
        "hasChildren": true,
        "children": [{
          "code": "2891",
          "total": "0",
          "libelle": "[2891] Fabrication de machines pour la m\u00e9tallurgie ",
          "hasChildren": true,
          "children": [{
            "code": "2891Z",
            "libelle": "[2891Z] Fabrication de machines pour la m\u00e9tallurgie "
          }]
        },
        {
          "code": "2892",
          "total": "0",
          "libelle": "[2892] Fabrication de machines pour l'extraction ou la construction ",
          "hasChildren": true,
          "children": [{
            "code": "2892Z",
            "libelle": "[2892Z] Fabrication de machines pour l'extraction ou la construction "
          }]
        },
        {
          "code": "2893",
          "total": "0",
          "libelle": "[2893] Fabrication de machines pour l'industrie agro-alimentaire ",
          "hasChildren": true,
          "children": [{
            "code": "2893Z",
            "libelle": "[2893Z] Fabrication de machines pour l'industrie agro-alimentaire "
          }]
        },
        {
          "code": "2894",
          "total": "0",
          "libelle": "[2894] Fabrication de machines pour les industries textiles ",
          "hasChildren": true,
          "children": [{
            "code": "2894Z",
            "libelle": "[2894Z] Fabrication de machines pour les industries textiles "
          }]
        },
        {
          "code": "2895",
          "total": "0",
          "libelle": "[2895] Fabrication de machines pour les industries du papier et du carton ",
          "hasChildren": true,
          "children": [{
            "code": "2895Z",
            "libelle": "[2895Z] Fabrication de machines pour les industries du papier et du carton "
          }]
        },
        {
          "code": "2896",
          "total": "0",
          "libelle": "[2896] Fabrication de machines pour le travail du caoutchouc ou des plastiques ",
          "hasChildren": true,
          "children": [{
            "code": "2896Z",
            "libelle": "[2896Z] Fabrication de machines pour le travail du caoutchouc ou des plastiques "
          }]
        },
        {
          "code": "2899",
          "total": "0",
          "libelle": "[2899] Fabrication d'autres machines d'usage sp\u00e9cifique n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "2899A",
            "libelle": "[2899A] Fabrication de machines d'imprimerie "
          },
          {
            "code": "2899B",
            "libelle": "[2899B] Fabrication d'autres machines sp\u00e9cialis\u00e9es "
          }]
        }]
      }]
    },
    {
      "code": "29",
      "code_section": "C",
      "total": "6",
      "libelle": "[29] Industrie automobile ",
      "hasChildren": false,
      "children": [{
        "code": "291",
        "total": "0",
        "libelle": "[291] Construction de v\u00e9hicules automobiles ",
        "hasChildren": true,
        "children": [{
          "code": "2910",
          "total": "0",
          "libelle": "[2910] Construction de v\u00e9hicules automobiles ",
          "hasChildren": true,
          "children": [{
            "code": "2910Z",
            "libelle": "[2910Z] Construction de v\u00e9hicules automobiles "
          }]
        }]
      },
      {
        "code": "292",
        "total": "4",
        "libelle": "[292] Fabrication de carrosseries et remorques ",
        "hasChildren": true,
        "children": [{
          "code": "2920",
          "total": "4",
          "libelle": "[2920] Fabrication de carrosseries et remorques ",
          "hasChildren": true,
          "children": [{
            "code": "2920Z",
            "libelle": "[2920Z] Fabrication de carrosseries et remorques "
          }]
        }]
      },
      {
        "code": "293",
        "total": "2",
        "libelle": "[293] Fabrication d'\u00e9quipements automobiles ",
        "hasChildren": true,
        "children": [{
          "code": "2931",
          "total": "0",
          "libelle": "[2931] Fabrication d'\u00e9quipements \u00e9lectriques et \u00e9lectroniques automobiles ",
          "hasChildren": true,
          "children": [{
            "code": "2931Z",
            "libelle": "[2931Z] Fabrication d'\u00e9quipements \u00e9lectriques et \u00e9lectroniques automobiles "
          }]
        },
        {
          "code": "2932",
          "total": "2",
          "libelle": "[2932] Fabrication d'autres \u00e9quipements automobiles ",
          "hasChildren": true,
          "children": [{
            "code": "2932Z",
            "libelle": "[2932Z] Fabrication d'autres \u00e9quipements automobiles "
          }]
        }]
      }]
    },
    {
      "code": "30",
      "code_section": "C",
      "total": "1",
      "libelle": "[30] Fabrication d'autres mat\u00e9riels de transport ",
      "hasChildren": false,
      "children": [{
        "code": "301",
        "total": "0",
        "libelle": "[301] Construction navale ",
        "hasChildren": true,
        "children": [{
          "code": "3011",
          "total": "0",
          "libelle": "[3011] Construction de navires et de structures flottantes ",
          "hasChildren": true,
          "children": [{
            "code": "3011Z",
            "libelle": "[3011Z] Construction de navires et de structures flottantes "
          }]
        },
        {
          "code": "3012",
          "total": "0",
          "libelle": "[3012] Construction de bateaux de plaisance ",
          "hasChildren": true,
          "children": [{
            "code": "3012Z",
            "libelle": "[3012Z] Construction de bateaux de plaisance "
          }]
        }]
      },
      {
        "code": "302",
        "total": "1",
        "libelle": "[302] Construction de locomotives et d'autre mat\u00e9riel ferroviaire roulant ",
        "hasChildren": true,
        "children": [{
          "code": "3020",
          "total": "1",
          "libelle": "[3020] Construction de locomotives et d'autre mat\u00e9riel ferroviaire roulant ",
          "hasChildren": true,
          "children": [{
            "code": "3020Z",
            "libelle": "[3020Z] Construction de locomotives et d'autre mat\u00e9riel ferroviaire roulant "
          }]
        }]
      },
      {
        "code": "303",
        "total": "0",
        "libelle": "[303] Construction a\u00e9ronautique et spatiale ",
        "hasChildren": true,
        "children": [{
          "code": "3030",
          "total": "0",
          "libelle": "[3030] Construction a\u00e9ronautique et spatiale ",
          "hasChildren": true,
          "children": [{
            "code": "3030Z",
            "libelle": "[3030Z] Construction a\u00e9ronautique et spatiale "
          }]
        }]
      },
      {
        "code": "304",
        "total": "0",
        "libelle": "[304] Construction de v\u00e9hicules militaires de combat ",
        "hasChildren": true,
        "children": [{
          "code": "3040",
          "total": "0",
          "libelle": "[3040] Construction de v\u00e9hicules militaires de combat ",
          "hasChildren": true,
          "children": [{
            "code": "3040Z",
            "libelle": "[3040Z] Construction de v\u00e9hicules militaires de combat "
          }]
        }]
      },
      {
        "code": "309",
        "total": "0",
        "libelle": "[309] Fabrication de mat\u00e9riels de transport n.c.a. ",
        "hasChildren": true,
        "children": [{
          "code": "3091",
          "total": "0",
          "libelle": "[3091] Fabrication de motocycles ",
          "hasChildren": true,
          "children": [{
            "code": "3091Z",
            "libelle": "[3091Z] Fabrication de motocycles "
          }]
        },
        {
          "code": "3092",
          "total": "0",
          "libelle": "[3092] Fabrication de bicyclettes et de v\u00e9hicules pour invalides ",
          "hasChildren": true,
          "children": [{
            "code": "3092Z",
            "libelle": "[3092Z] Fabrication de bicyclettes et de v\u00e9hicules pour invalides "
          }]
        },
        {
          "code": "3099",
          "total": "0",
          "libelle": "[3099] Fabrication d'autres \u00e9quipements de transport n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "3099Z",
            "libelle": "[3099Z] Fabrication d'autres \u00e9quipements de transport n.c.a. "
          }]
        }]
      }]
    },
    {
      "code": "31",
      "code_section": "C",
      "total": "2",
      "libelle": "[31] Fabrication de meubles ",
      "hasChildren": false,
      "children": [{
        "code": "310",
        "total": "2",
        "libelle": "[310] Fabrication de meubles ",
        "hasChildren": true,
        "children": [{
          "code": "3101",
          "total": "2",
          "libelle": "[3101] Fabrication de meubles de bureau et de magasin ",
          "hasChildren": true,
          "children": [{
            "code": "3101Z",
            "libelle": "[3101Z] Fabrication de meubles de bureau et de magasin "
          }]
        },
        {
          "code": "3102",
          "total": "0",
          "libelle": "[3102] Fabrication de meubles de cuisine ",
          "hasChildren": true,
          "children": [{
            "code": "3102Z",
            "libelle": "[3102Z] Fabrication de meubles de cuisine "
          }]
        },
        {
          "code": "3103",
          "total": "0",
          "libelle": "[3103] Fabrication de matelas ",
          "hasChildren": true,
          "children": [{
            "code": "3103Z",
            "libelle": "[3103Z] Fabrication de matelas "
          }]
        },
        {
          "code": "3109",
          "total": "0",
          "libelle": "[3109] Fabrication d'autres meubles ",
          "hasChildren": true,
          "children": [{
            "code": "3109A",
            "libelle": "[3109A] Fabrication de si\u00e8ges d'ameublement d'int\u00e9rieur "
          },
          {
            "code": "3109B",
            "libelle": "[3109B] Fabrication d'autres meubles et industries connexes de l'ameublement "
          }]
        }]

      }]
    },
    {
      "code": "32",
      "code_section": "C",
      "total": "5",
      "libelle": "[32] Autres industries manufacturi\u00e8res ",
      "hasChildren": false,
      "children": [{
        "code": "321",
        "total": "0",
        "libelle": "[321] Fabrication d'articles de joaillerie, bijouterie et articles similaires ",
        "hasChildren": true,
        "children": [{
          "code": "3211",
          "total": "0",
          "libelle": "[3211] Frappe de monnaie ",
          "hasChildren": true,
          "children": [{
            "code": "3211Z",
            "libelle": "[3211Z] Frappe de monnaie "
          }]
        },
        {
          "code": "3212",
          "total": "0",
          "libelle": "[3212] Fabrication d'articles de joaillerie et bijouterie ",
          "hasChildren": true,
          "children": [{
            "code": "3212Z",
            "libelle": "[3212Z] Fabrication d'articles de joaillerie et bijouterie "
          }]
        },
        {
          "code": "3213",
          "total": "0",
          "libelle": "[3213] Fabrication d'articles de bijouterie fantaisie et articles similaires ",
          "hasChildren": true,
          "children": [{
            "code": "3213Z",
            "libelle": "[3213Z] Fabrication d'articles de bijouterie fantaisie et articles similaires "
          }]
        }]
      },
      {
        "code": "322",
        "total": "0",
        "libelle": "[322] Fabrication d'instruments de musique ",
        "hasChildren": true,
        "children": [{
          "code": "3220",
          "total": "0",
          "libelle": "[3220] Fabrication d'instruments de musique ",
          "hasChildren": true,
          "children": [{
            "code": "3220Z",
            "libelle": "[3220Z] Fabrication d'instruments de musique "
          }]
        }]
      },
      {
        "code": "323",
        "total": "0",
        "libelle": "[323] Fabrication d'articles de sport ",
        "hasChildren": true,
        "children": [{
          "code": "3230",
          "total": "0",
          "libelle": "[3230] Fabrication d'articles de sport ",
          "hasChildren": true,
          "children": [{
            "code": "3230Z",
            "libelle": "[3230Z] Fabrication d'articles de sport "
          }]
        }]
      },
      {
        "code": "324",
        "total": "0",
        "libelle": "[324] Fabrication de jeux et jouets ",
        "hasChildren": true,
        "children": [{
          "code": "3240",
          "total": "0",
          "libelle": "[3240] Fabrication de jeux et jouets ",
          "hasChildren": true,
          "children": [{
            "code": "3240Z",
            "libelle": "[3240Z] Fabrication de jeux et jouets "
          }]
        }]
      },
      {
        "code": "325",
        "total": "5",
        "libelle": "[325] Fabrication d'instruments et de fournitures \u00e0 usage m\u00e9dical et dentaire ",
        "hasChildren": true,
        "children": [{
          "code": "3250",
          "total": "5",
          "libelle": "[3250] Fabrication d'instruments et de fournitures \u00e0 usage m\u00e9dical et dentaire ",
          "hasChildren": true,
          "children": [{
            "code": "3250A",
            "libelle": "[3250A] Fabrication de mat\u00e9riel m\u00e9dico-chirurgical et dentaire "
          },
          {
            "code": "3250B",
            "libelle": "[3250B] Fabrication de lunettes "
          }]
        }]
      },
      {
        "code": "329",
        "total": "0",
        "libelle": "[329] Activit\u00e9s manufacturi\u00e8res n.c.a. ",
        "hasChildren": true,
        "children": [{
          "code": "3291",
          "total": "0",
          "libelle": "[3291] Fabrication d'articles de brosserie ",
          "hasChildren": true,
          "children": [{
            "code": "3291Z",
            "libelle": "[3291Z] Fabrication d'articles de brosserie "
          }]
        },
        {
          "code": "3299",
          "total": "0",
          "libelle": "[3299] Autres activit\u00e9s manufacturi\u00e8res n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "3299Z",
            "libelle": "[3299Z] Autres activit\u00e9s manufacturi\u00e8res n.c.a. "
          }]
        }]
      }]
    },
    {
      "code": "33",
      "code_section": "C",
      "total": "9",
      "libelle": "[33] R\u00e9paration et installation de machines et d'\u00e9quipements ",
      "hasChildren": false,
      "children": [{
        "code": "331",
        "total": "7",
        "libelle": "[331] R\u00e9paration d'ouvrages en m\u00e9taux, de machines et d'\u00e9quipements ",
        "hasChildren": true,

        "children": [{
          "code": "3311",
          "total": "2",
          "libelle": "[3311] R\u00e9paration d'ouvrages en m\u00e9taux ",

          "hasChildren": true,
          "children": [{
            "code": "3311Z",
            "libelle": "[3311Z] R\u00e9paration d'ouvrages en m\u00e9taux "
          }]
        },
        {
          "code": "3312",
          "total": "1",
          "libelle": "[3312] R\u00e9paration de machines et \u00e9quipements m\u00e9caniques ",
          "hasChildren": true,
          "children": [{
            "code": "3312Z",
            "libelle": "[3312Z] R\u00e9paration de machines et \u00e9quipements m\u00e9caniques "
          }]
        },
        {
          "code": "3313",
          "total": "1",
          "libelle": "[3313] R\u00e9paration de mat\u00e9riels \u00e9lectroniques et optiques ",
          "hasChildren": true,
          "children": [{
            "code": "3313Z",
            "libelle": "[3313Z] R\u00e9paration de mat\u00e9riels \u00e9lectroniques et optiques "
          }]
        },
        {
          "code": "3314",
          "total": "2",
          "libelle": "[3314] R\u00e9paration d'\u00e9quipements \u00e9lectriques ",
          "hasChildren": true,
          "children": [{
            "code": "3314Z",
            "libelle": "[3314Z] R\u00e9paration d'\u00e9quipements \u00e9lectriques "
          }]
        },
        {
          "code": "3315",
          "total": "0",
          "libelle": "[3315] R\u00e9paration et maintenance navale ",
          "hasChildren": true,
          "children": [{
            "code": "3315Z",
            "libelle": "[3315Z] R\u00e9paration et maintenance navale "
          }]
        },
        {
          "code": "3316",
          "total": "1",
          "libelle": "[3316] R\u00e9paration et maintenance d'a\u00e9ronefs et d'engins spatiaux ",
          "hasChildren": true,
          "children": [{
            "code": "3316Z",
            "libelle": "[3316Z] R\u00e9paration et maintenance d'a\u00e9ronefs et d'engins spatiaux "
          }]
        },
        {
          "code": "3317",
          "total": "0",
          "libelle": "[3317] R\u00e9paration et maintenance d'autres \u00e9quipements de transport ",
          "hasChildren": true,
          "children": [{
            "code": "3317Z",
            "libelle": "[3317Z] R\u00e9paration et maintenance d'autres \u00e9quipements de transport "
          }]
        },
        {
          "code": "3319",
          "total": "0",
          "libelle": "[3319] R\u00e9paration d'autres \u00e9quipements ",
          "hasChildren": true,
          "children": [{
            "code": "3319Z",
            "libelle": "[3319Z] R\u00e9paration d'autres \u00e9quipements "
          }]
        }]
      },
      {
        "code": "332",
        "total": "2",
        "libelle": "[332] Installation de machines et d'\u00e9quipements industriels ",
        "hasChildren": true,
        "children": [{
          "code": "3320",
          "total": "2",
          "libelle": "[3320] Installation de machines et d'\u00e9quipements industriels ",
          "hasChildren": true,
          "children": [{
            "code": "3320A",
            "libelle": "[3320A] Installation de structures m\u00e9talliques, chaudronn\u00e9es et de tuyauterie "
          },
          {
            "code": "3320B",
            "libelle": "[3320B] Installation de machines et \u00e9quipements m\u00e9caniques "
          },
          {
            "code": "3320C",
            "libelle": "[3320C] Conception d'ensemble et assemblage sur site industriel d'\u00e9quipements de contr\u00f4le des processus industriels "
          },
          {
            "code": "3320D",
            "libelle": "[3320D] Installation d'\u00e9quipements \u00e9lectriques, de mat\u00e9riels \u00e9lectroniques et optiques ou d'autres mat\u00e9riels "
          }]
        }]
      }]
    }]
  },
  {
    "code": "D",
    "total": "5",
    "libelle": "[D] Production et distribution d'\u00e9lectricit\u00e9, de gaz, de vapeur et d'air conditionn\u00e9 ",
    "hasChildren": true,
    "children": [{
      "code": "35",
      "code_section": "D",
      "total": "5",
      "libelle": "[35] Production et distribution d'\u00e9lectricit\u00e9, de gaz, de vapeur et d'air conditionn\u00e9 ",
      "hasChildren": false,
      "children": [{
        "code": "351",
        "total": "3",
        "libelle": "[351] Production, transport et distribution d'\u00e9lectricit\u00e9 ",
        "hasChildren": true,
        "children": [{
          "code": "3511",
          "total": "0",
          "libelle": "[3511] Production d'\u00e9lectricit\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "3511Z",
            "libelle": "[3511Z] Production d'\u00e9lectricit\u00e9 "
          }]
        },
        {
          "code": "3512",
          "total": "1",
          "libelle": "[3512] Transport d'\u00e9lectricit\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "3512Z",
            "libelle": "[3512Z] Transport d'\u00e9lectricit\u00e9 "
          }]
        },
        {
          "code": "3513",
          "total": "1",
          "libelle": "[3513] Distribution d'\u00e9lectricit\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "3513Z",
            "libelle": "[3513Z] Distribution d'\u00e9lectricit\u00e9 "
          }]
        },
        {
          "code": "3514",
          "total": "1",
          "libelle": "[3514] Commerce d'\u00e9lectricit\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "3514Z",
            "libelle": "[3514Z] Commerce d'\u00e9lectricit\u00e9 "
          }]
        }]
      },
      {
        "code": "352",
        "total": "1",
        "libelle": "[352] Production et distribution de combustibles gazeux ",
        "hasChildren": true,
        "children": [{
          "code": "3521",
          "total": "0",
          "libelle": "[3521] Production de combustibles gazeux ",
          "hasChildren": true,
          "children": [{
            "code": "3521Z",
            "libelle": "[3521Z] Production de combustibles gazeux "
          }]
        },
        {
          "code": "3522",
          "total": "1",
          "libelle": "[3522] Distribution de combustibles gazeux par conduites ",
          "hasChildren": true,
          "children": [{
            "code": "3522Z",
            "libelle": "[3522Z] Distribution de combustibles gazeux par conduites "
          }]
        },
        {
          "code": "3523",
          "total": "0",
          "libelle": "[3523] Commerce de combustibles gazeux par conduites ",
          "hasChildren": true,
          "children": [{
            "code": "3523Z",
            "libelle": "[3523Z] Commerce de combustibles gazeux par conduites "
          }]
        }]
      },
      {
        "code": "353",
        "total": "1",
        "libelle": "[353] Production et distribution de vapeur et d'air conditionn\u00e9 ",
        "hasChildren": true,
        "children": [{
          "code": "3530",
          "total": "1",
          "libelle": "[3530] Production et distribution de vapeur et d'air conditionn\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "3530Z",
            "libelle": "[3530Z] Production et distribution de vapeur et d'air conditionn\u00e9 "
          }]
        }]
      }]
    }]
  },
  {
    "code": "E",
    "total": "13",
    "libelle": "[E] Production et distribution d'eau ; assainissement, gestion des d\u00e9chets et d\u00e9pollution",
    "hasChildren": true,
    "children": [{
      "code": "36",
      "code_section": "E",
      "total": "3",
      "libelle": "[36] Captage, traitement et distribution d'eau ",
      "hasChildren": false,
      "children": [{
        "code": "360",
        "total": "3",
        "libelle": "[360] Captage, traitement et distribution d'eau ",
        "hasChildren": true,
        "children": [{
          "code": "3600",
          "total": "3",
          "libelle": "[3600] Captage, traitement et distribution d'eau ",
          "hasChildren": true,
          "children": [{
            "code": "3600Z",
            "libelle": "[3600Z] Captage, traitement et distribution d'eau "
          }]
        }]
      }]
    },
    {
      "code": "37",
      "code_section": "E",
      "total": "2",
      "libelle": "[37] Collecte et traitement des eaux us\u00e9es ",
      "hasChildren": false,
      "children": [{
        "code": "370",
        "total": "2",
        "libelle": "[370] Collecte et traitement des eaux us\u00e9es ",
        "hasChildren": true,
        "children": [{
          "code": "3700",
          "total": "2",
          "libelle": "[3700] Collecte et traitement des eaux us\u00e9es ",
          "hasChildren": true,
          "children": [{
            "code": "3700Z",
            "libelle": "[3700Z] Collecte et traitement des eaux us\u00e9es "
          }]
        }]
      }]
    },
    {
      "code": "38",
      "code_section": "E",
      "total": "7",
      "libelle": "[38] Collecte, traitement et \u00e9limination des d\u00e9chets ; r\u00e9cup\u00e9ration ",
      "hasChildren": false,
      "children": [{
        "code": "381",
        "total": "2",
        "libelle": "[381] Collecte des d\u00e9chets ",
        "hasChildren": true,
        "children": [{
          "code": "3811",
          "total": "2",
          "libelle": "[3811] Collecte des d\u00e9chets non dangereux ",
          "hasChildren": true,
          "children": [{
            "code": "3811Z",
            "libelle": "[3811Z] Collecte des d\u00e9chets non dangereux "
          }]
        },
        {
          "code": "3812",
          "total": "0",
          "libelle": "[3812] Collecte des d\u00e9chets dangereux ",
          "hasChildren": true,
          "children": [{
            "code": "3812Z",
            "libelle": "[3812Z] Collecte des d\u00e9chets dangereux "
          }]
        }]
      },
      {
        "code": "382",
        "total": "3",
        "libelle": "[382] Traitement et \u00e9limination des d\u00e9chets ",
        "hasChildren": true,
        "children": [{
          "code": "3821",
          "total": "3",
          "libelle": "[3821] Traitement et \u00e9limination des d\u00e9chets non dangereux ",
          "hasChildren": true,
          "children": [{
            "code": "3821Z",
            "libelle": "[3821Z] Traitement et \u00e9limination des d\u00e9chets non dangereux "
          }]
        },
        {
          "code": "3822",
          "total": "0",
          "libelle": "[3822] Traitement et \u00e9limination des d\u00e9chets dangereux ",
          "hasChildren": true,
          "children": [{
            "code": "3822Z",
            "libelle": "[3822Z] Traitement et \u00e9limination des d\u00e9chets dangereux "
          }]
        }]
      },
      {
        "code": "383",
        "total": "2",
        "libelle": "[383] R\u00e9cup\u00e9ration ",
        "hasChildren": true,
        "children": [{
          "code": "3831",
          "total": "0",
          "libelle": "[3831] D\u00e9mant\u00e8lement d'\u00e9paves ",
          "hasChildren": true,
          "children": [{
            "code": "3831Z",
            "libelle": "[3831Z] D\u00e9mant\u00e8lement d'\u00e9paves "
          }]
        },
        {
          "code": "3832",
          "total": "2",
          "libelle": "[3832] R\u00e9cup\u00e9ration de d\u00e9chets tri\u00e9s ",
          "hasChildren": true,
          "children": [{
            "code": "3832Z",
            "libelle": "[3832Z] R\u00e9cup\u00e9ration de d\u00e9chets tri\u00e9s "
          }]
        }]
      }]
    },
    {
      "code": "39",
      "code_section": "E",
      "total": "1",
      "libelle": "[39] D\u00e9pollution et autres services de gestion des d\u00e9chets ",
      "hasChildren": false,
      "children": [{
        "code": "390",
        "total": "1",
        "libelle": "[390] D\u00e9pollution et autres services de gestion des d\u00e9chets ",
        "hasChildren": true,
        "children": [{
          "code": "3900",
          "total": "1",
          "libelle": "[3900] D\u00e9pollution et autres services de gestion des d\u00e9chets ",
          "hasChildren": true,
          "children": [{
            "code": "3900Z",
            "libelle": "[3900Z] D\u00e9pollution et autres services de gestion des d\u00e9chets "
          }]
        }]
      }]
    }]
  },
  {
    "code": "F",
    "total": "147",
    "libelle": "[F] Construction ",
    "hasChildren": true,
    "children": [{
      "code": "41",
      "code_section": "F",
      "total": "14",
      "libelle": "[41] Construction de b\u00e2timents",
      "hasChildren": false,
      "children": [{
        "code": "411",
        "total": "1",
        "libelle": "[411] Promotion immobili\u00e8re ",
        "hasChildren": true,
        "children": [{
          "code": "4110",
          "total": "1",
          "libelle": "[4110] Promotion immobili\u00e8re ",
          "hasChildren": true,
          "children": [{
            "code": "4110A",
            "libelle": "[4110A] Promotion immobili\u00e8re de logements "
          },
          {
            "code": "4110B",
            "libelle": "[4110B] Promotion immobili\u00e8re de bureaux "
          },
          {
            "code": "4110C",
            "libelle": "[4110C] Promotion immobili\u00e8re d'autres b\u00e2timents "
          },
          {
            "code": "4110D",
            "libelle": "[4110D] Supports juridiques de programmes "
          }]
        }]
      },
      {
        "code": "412",
        "total": "13",
        "libelle": "[412] Construction de b\u00e2timents r\u00e9sidentiels et non r\u00e9sidentiels",
        "hasChildren": true,
        "children": [{
          "code": "4120",
          "total": "13",
          "libelle": "[4120] Construction de b\u00e2timents r\u00e9sidentiels et non r\u00e9sidentiels",
          "hasChildren": true,
          "children": [{
            "code": "4120A",
            "libelle": "[4120A] Construction de maisons individuelles "
          },
          {
            "code": "4120B",
            "libelle": "[4120B] Construction d'autres b\u00e2timents "
          }]
        }]
      }]
    },
    {
      "code": "42",
      "code_section": "F",
      "total": "10",
      "libelle": "[42] G\u00e9nie civil ",
      "hasChildren": false,
      "children": [{
        "code": "421",
        "total": "3",
        "libelle": "[421] Construction de routes et de voies ferr\u00e9es ",
        "hasChildren": true,
        "children": [{
          "code": "4211",
          "total": "3",
          "libelle": "[4211] Construction de routes et autoroutes ",
          "hasChildren": true,
          "children": [{
            "code": "4211Z",
            "libelle": "[4211Z] Construction de routes et autoroutes "
          }]
        },
        {
          "code": "4212",
          "total": "0",
          "libelle": "[4212] Construction de voies ferr\u00e9es de surface et souterraines ",
          "hasChildren": true,
          "children": [{
            "code": "4212Z",
            "libelle": "[4212Z] Construction de voies ferr\u00e9es de surface et souterraines "
          }]
        },
        {
          "code": "4213",
          "total": "0",
          "libelle": "[4213] Construction de ponts et tunnels ",
          "hasChildren": true,
          "children": [{
            "code": "4213A",
            "libelle": "[4213A] Construction d'ouvrages d'art "
          },
          {
            "code": "4213B",
            "libelle": "[4213B] Construction et entretien de tunnels "
          }]
        }]
      },
      {
        "code": "422",
        "total": "4",
        "libelle": "[422] Construction de r\u00e9seaux et de lignes ",
        "hasChildren": true,
        "children": [{
          "code": "4221",
          "total": "1",
          "libelle": "[4221] Construction de r\u00e9seaux pour fluides ",
          "hasChildren": true,
          "children": [{
            "code": "4221Z",
            "libelle": "[4221Z] Construction de r\u00e9seaux pour fluides "
          }]
        },
        {
          "code": "4222",
          "total": "3",
          "libelle": "[4222] Construction de r\u00e9seaux \u00e9lectriques et de t\u00e9l\u00e9communications ",
          "hasChildren": true,
          "children": [{
            "code": "4222Z",
            "libelle": "[4222Z] Construction de r\u00e9seaux \u00e9lectriques et de t\u00e9l\u00e9communications "
          }]
        }]
      },
      {
        "code": "429",
        "total": "3",
        "libelle": "[429] Construction d'autres ouvrages de g\u00e9nie civil ",
        "hasChildren": true,
        "children": [{
          "code": "4291",
          "total": "0",
          "libelle": "[4291] Construction d'ouvrages maritimes et fluviaux ",
          "hasChildren": true,
          "children": [{
            "code": "4291Z",
            "libelle": "[4291Z] Construction d'ouvrages maritimes et fluviaux "
          }]
        },
        {
          "code": "4299",
          "total": "3",
          "libelle": "[4299] Construction d'autres ouvrages de g\u00e9nie civil n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "4299Z",
            "libelle": "[4299Z] Construction d'autres ouvrages de g\u00e9nie civil n.c.a. "
          }]
        }]
      }]
    },
    {
      "code": "43",
      "code_section": "F",
      "total": "123",
      "libelle": "[43] Travaux de construction sp\u00e9cialis\u00e9s",
      "hasChildren": false,
      "children": [{
        "code": "431",
        "total": "11",
        "libelle": "[431] D\u00e9molition et pr\u00e9paration des sites",
        "hasChildren": true,
        "children": [{
          "code": "4311",
          "total": "0",
          "libelle": "[4311] Travaux de d\u00e9molition ",
          "hasChildren": true,
          "children": [{
            "code": "4311Z",
            "libelle": "[4311Z] Travaux de d\u00e9molition "
          }]
        },
        {
          "code": "4312",
          "total": "11",
          "libelle": "[4312] Travaux de pr\u00e9paration des sites ",
          "hasChildren": true,
          "children": [{
            "code": "4312A",
            "libelle": "[4312A] Travaux de terrassement courants et travaux pr\u00e9paratoires "
          },
          {
            "code": "4312B",
            "libelle": "[4312B] Travaux de terrassement sp\u00e9cialis\u00e9s ou de grande masse "
          }]
        },
        {
          "code": "4313",
          "total": "0",
          "libelle": "[4313] Forages et sondages ",
          "hasChildren": true,
          "children": [{
            "code": "4313Z",
            "libelle": "[4313Z] Forages et sondages "
          }]
        }]
      },
      {
        "code": "432",
        "total": "29",
        "libelle": "[432] Travaux d'installation \u00e9lectrique, plomberie et autres travaux d'installation",
        "hasChildren": true,
        "children": [{
          "code": "4321",
          "total": "13",
          "libelle": "[4321] Installation \u00e9lectrique ",
          "hasChildren": true,
          "children": [{
            "code": "4321A",
            "libelle": "[4321A] Travaux d'installation \u00e9lectrique dans tous locaux "
          },
          {
            "code": "4321B",
            "libelle": "[4321B] Travaux d'installation \u00e9lectrique sur la voie publique "
          }]
        },
        {
          "code": "4322",
          "total": "14",
          "libelle": "[4322] Travaux de plomberie et installation de chauffage et de conditionnement d'air ",
          "hasChildren": true,
          "children": [{
            "code": "4322A",
            "libelle": "[4322A] Travaux d'installation d'eau et de gaz en tous locaux "
          },
          {
            "code": "4322B",
            "libelle": "[4322B] Travaux d'installation d'\u00e9quipements thermiques et de climatisation "
          }]
        },
        {
          "code": "4329",
          "total": "2",
          "libelle": "[4329] Autres travaux d'installation ",
          "hasChildren": true,
          "children": [{
            "code": "4329A",
            "libelle": "[4329A] Travaux d'isolation "
          },
          {
            "code": "4329B",
            "libelle": "[4329B] Autres travaux d'installation n.c.a. "
          }]
        }]
      },
      {
        "code": "433",
        "total": "43",
        "libelle": "[433] Travaux de finition",
        "hasChildren": true,
        "children": [{
          "code": "4331",
          "total": "8",
          "libelle": "[4331] Travaux de pl\u00e2trerie ",
          "hasChildren": true,
          "children": [{
            "code": "4331Z",
            "libelle": "[4331Z] Travaux de pl\u00e2trerie "
          }]
        },
        {
          "code": "4332",
          "total": "16",
          "libelle": "[4332] Travaux de menuiserie",
          "hasChildren": true,
          "children": [{
            "code": "4332A",
            "libelle": "[4332A] Travaux de menuiserie bois et PVC "
          },
          {
            "code": "4332B",
            "libelle": "[4332B] Travaux de menuiserie m\u00e9tallique et serrurerie "
          },
          {
            "code": "4332C",
            "libelle": "[4332C] Agencement de lieux de vente "
          }]
        },
        {
          "code": "4333",
          "total": "6",
          "libelle": "[4333] Travaux de rev\u00eatement des sols et des murs ",
          "hasChildren": true,
          "children": [{
            "code": "4333Z",
            "libelle": "[4333Z] Travaux de rev\u00eatement des sols et des murs "
          }]
        },
        {
          "code": "4334",
          "total": "11",
          "libelle": "[4334] Travaux de peinture et vitrerie ",
          "hasChildren": true,
          "children": [{
            "code": "4334Z",
            "libelle": "[4334Z] Travaux de peinture et vitrerie "
          }]
        },
        {
          "code": "4339",
          "total": "2",
          "libelle": "[4339] Autres travaux de finition ",
          "hasChildren": true,
          "children": [{
            "code": "4339Z",
            "libelle": "[4339Z] Autres travaux de finition "
          }]
        }]
      },
      {
        "code": "439",
        "total": "40",
        "libelle": "[439] Autres travaux de construction sp\u00e9cialis\u00e9s",
        "hasChildren": true,
        "children": [{
          "code": "4391",
          "total": "6",
          "libelle": "[4391] Travaux de couverture ",
          "hasChildren": true,
          "children": [{
            "code": "4391A",
            "libelle": "[4391A] Travaux de charpente "
          },
          {
            "code": "4391B",
            "libelle": "[4391B] Travaux de couverture par \u00e9l\u00e9ments "
          }]
        },
        {
          "code": "4399",
          "total": "34",
          "libelle": "[4399] Autres travaux de construction sp\u00e9cialis\u00e9s n.c.a.",
          "hasChildren": true,
          "children": [{
            "code": "4399A",
            "libelle": "[4399A] Travaux d'\u00e9tanch\u00e9ification "
          },
          {
            "code": "4399B",
            "libelle": "[4399B] Travaux de montage de structures m\u00e9talliques "
          },
          {
            "code": "4399C",
            "libelle": "[4399C] Travaux de ma\u00e7onnerie g\u00e9n\u00e9rale et gros \u0153uvre de b\u00e2timent"
          },
          {
            "code": "4399D",
            "libelle": "[4399D] Autres travaux sp\u00e9cialis\u00e9s de construction "
          },
          {
            "code": "4399E",
            "libelle": "[4399E] Location avec op\u00e9rateur de mat\u00e9riel de construction "
          }]
        }]
      }]
    }]
  },
  {
    "code": "G",
    "total": "499",
    "libelle": "[G] Commerce ; r\u00e9paration d'automobiles et de motocycles",
    "hasChildren": true,
    "children": [{
      "code": "45",
      "code_section": "G",
      "total": "76",
      "libelle": "[45] Commerce et r\u00e9paration d'automobiles et de motocycles",
      "hasChildren": false,
      "children": [{
        "code": "451",
        "total": "33",
        "libelle": "[451] Commerce de v\u00e9hicules automobiles",
        "hasChildren": true,
        "children": [{
          "code": "4511",
          "total": "30",
          "libelle": "[4511] Commerce de voitures et de v\u00e9hicules automobiles l\u00e9gers ",
          "hasChildren": true,
          "children": [{
            "code": "4511Z",
            "libelle": "[4511Z] Commerce de voitures et de v\u00e9hicules automobiles l\u00e9gers "
          }]
        },
        {
          "code": "4519",
          "total": "3",
          "libelle": "[4519] Commerce d'autres v\u00e9hicules automobiles ",
          "hasChildren": true,
          "children": [{
            "code": "4519Z",
            "libelle": "[4519Z] Commerce d'autres v\u00e9hicules automobiles "
          }]
        }]
      },
      {
        "code": "452",
        "total": "23",
        "libelle": "[452] Entretien et r\u00e9paration de v\u00e9hicules automobiles ",
        "hasChildren": true,
        "children": [{
          "code": "4520",
          "total": "23",
          "libelle": "[4520] Entretien et r\u00e9paration de v\u00e9hicules automobiles ",
          "hasChildren": true,
          "children": [{
            "code": "4520A",
            "libelle": "[4520A] Entretien et r\u00e9paration de v\u00e9hicules automobiles l\u00e9gers "
          },
          {
            "code": "4520B",
            "libelle": "[4520B] Entretien et r\u00e9paration d'autres v\u00e9hicules automobiles "
          }]
        }]
      },
      {
        "code": "453",
        "total": "15",
        "libelle": "[453] Commerce d'\u00e9quipements automobiles",
        "hasChildren": true,
        "children": [{
          "code": "4531",
          "total": "11",
          "libelle": "[4531] Commerce de gros d'\u00e9quipements automobiles ",
          "hasChildren": true,
          "children": [{
            "code": "4531Z",
            "libelle": "[4531Z] Commerce de gros d'\u00e9quipements automobiles "
          }]
        },
        {
          "code": "4532",
          "total": "4",
          "libelle": "[4532] Commerce de d\u00e9tail d'\u00e9quipements automobiles ",
          "hasChildren": true,
          "children": [{
            "code": "4532Z",
            "libelle": "[4532Z] Commerce de d\u00e9tail d'\u00e9quipements automobiles "
          }]
        }]
      },
      {
        "code": "454",
        "total": "5",
        "libelle": "[454] Commerce et r\u00e9paration de motocycles ",
        "hasChildren": true,
        "children": [{
          "code": "4540",
          "total": "5",
          "libelle": "[4540] Commerce et r\u00e9paration de motocycles ",
          "hasChildren": true,
          "children": [{
            "code": "4540Z",
            "libelle": "[4540Z] Commerce et r\u00e9paration de motocycles "
          }]
        }]
      }]
    },
    {
      "code": "46",
      "code_section": "G",
      "total": "133",
      "libelle": "[46] Commerce de gros, \u00e0 l'exception des automobiles et des motocycles",
      "hasChildren": false,
      "children": [{
        "code": "461",
        "total": "8",
        "libelle": "[461] Interm\u00e9diaires du commerce de gros ",
        "hasChildren": true,
        "children": [{
          "code": "4611",
          "total": "0",
          "libelle": "[4611] Interm\u00e9diaires du commerce en mati\u00e8res premi\u00e8res agricoles, animaux vivants, mati\u00e8res premi\u00e8res textiles et produits semi-finis ",
          "hasChildren": true,
          "children": [{
            "code": "4611Z",
            "libelle": "[4611Z] Interm\u00e9diaires du commerce en mati\u00e8res premi\u00e8res agricoles, animaux vivants, mati\u00e8res premi\u00e8res textiles et produits semi-finis "
          }]
        },
        {
          "code": "4612",
          "total": "0",
          "libelle": "[4612] Interm\u00e9diaires du commerce en combustibles, m\u00e9taux, min\u00e9raux et produits chimiques ",
          "hasChildren": true,
          "children": [{
            "code": "4612A",
            "libelle": "[4612A] Centrales d'achat de carburant "
          },
          {
            "code": "4612B",
            "libelle": "[4612B] Autres interm\u00e9diaires du commerce en combustibles, m\u00e9taux, min\u00e9raux et produits chimiques "
          }]
        },
        {
          "code": "4613",
          "total": "1",
          "libelle": "[4613] Interm\u00e9diaires du commerce en bois et mat\u00e9riaux de construction ",
          "hasChildren": true,
          "children": [{
            "code": "4613Z",
            "libelle": "[4613Z] Interm\u00e9diaires du commerce en bois et mat\u00e9riaux de construction "
          }]
        },
        {
          "code": "4614",
          "total": "0",
          "libelle": "[4614] Interm\u00e9diaires du commerce en machines, \u00e9quipements industriels, navires et avions ",
          "hasChildren": true,
          "children": [{
            "code": "4614Z",
            "libelle": "[4614Z] Interm\u00e9diaires du commerce en machines, \u00e9quipements industriels, navires et avions "
          }]
        },
        {
          "code": "4615",
          "total": "1",
          "libelle": "[4615] Interm\u00e9diaires du commerce en meubles, articles de m\u00e9nage et quincaillerie ",
          "hasChildren": true,
          "children": [{
            "code": "4615Z",
            "libelle": "[4615Z] Interm\u00e9diaires du commerce en meubles, articles de m\u00e9nage et quincaillerie "
          }]
        },
        {
          "code": "4616",
          "total": "0",
          "libelle": "[4616] Interm\u00e9diaires du commerce en textiles, habillement, fourrures, chaussures et articles en cuir ",
          "hasChildren": true,
          "children": [{
            "code": "4616Z",
            "libelle": "[4616Z] Interm\u00e9diaires du commerce en textiles, habillement, fourrures, chaussures et articles en cuir "
          }]
        },
        {
          "code": "4617",
          "total": "2",
          "libelle": "[4617] Interm\u00e9diaires du commerce en denr\u00e9es, boissons et tabac ",
          "hasChildren": true,
          "children": [{
            "code": "4617A",
            "libelle": "[4617A] Centrales d'achat alimentaires "
          },
          {
            "code": "4617B",
            "libelle": "[4617B] Autres interm\u00e9diaires du commerce en denr\u00e9es, boissons et tabac "
          }]
        },
        {
          "code": "4618",
          "total": "0",
          "libelle": "[4618] Interm\u00e9diaires sp\u00e9cialis\u00e9s dans le commerce d'autres produits sp\u00e9cifiques ",
          "hasChildren": true,
          "children": [{
            "code": "4618Z",
            "libelle": "[4618Z] Interm\u00e9diaires sp\u00e9cialis\u00e9s dans le commerce d'autres produits sp\u00e9cifiques "
          }]
        },
        {
          "code": "4619",
          "total": "4",
          "libelle": "[4619] Interm\u00e9diaires du commerce en produits divers ",
          "hasChildren": true,
          "children": [{
            "code": "4619A",
            "libelle": "[4619A] Centrales d'achat non alimentaires "
          },
          {
            "code": "4619B",
            "libelle": "[4619B] Autres interm\u00e9diaires du commerce en produits divers "
          }]
        }]
      },
      {
        "code": "462",
        "total": "4",
        "libelle": "[462] Commerce de gros de produits agricoles bruts et d'animaux vivants ",
        "hasChildren": true,
        "children": [{
          "code": "4621",
          "total": "3",
          "libelle": "[4621] Commerce de gros de c\u00e9r\u00e9ales, de tabac non manufactur\u00e9, de semences et d'aliments pour le b\u00e9tail ",
          "hasChildren": true,
          "children": [{
            "code": "4621Z",
            "libelle": "[4621Z] Commerce de gros (commerce interentreprises) de c\u00e9r\u00e9ales, de tabac non manufactur\u00e9, de semences et d'aliments pour le b\u00e9tail "
          }]
        },
        {
          "code": "4622",
          "total": "0",
          "libelle": "[4622] Commerce de gros de fleurs et plantes ",
          "hasChildren": true,
          "children": [{
            "code": "4622Z",
            "libelle": "[4622Z] Commerce de gros (commerce interentreprises) de fleurs et plantes "
          }]
        },
        {
          "code": "4623",
          "total": "1",
          "libelle": "[4623] Commerce de gros d'animaux vivants ",
          "hasChildren": true,
          "children": [{
            "code": "4623Z",
            "libelle": "[4623Z] Commerce de gros (commerce interentreprises) d'animaux vivants "
          }]
        },
        {
          "code": "4624",
          "total": "0",
          "libelle": "[4624] Commerce de gros de cuirs et peaux ",
          "hasChildren": true,
          "children": [{
            "code": "4624Z",
            "libelle": "[4624Z] Commerce de gros (commerce interentreprises) de cuirs et peaux "
          }]
        }]
      },
      {
        "code": "463",
        "total": "26",
        "libelle": "[463] Commerce de gros de produits alimentaires, de boissons et de tabac",
        "hasChildren": true,
        "children": [{
          "code": "4631",
          "total": "14",
          "libelle": "[4631] Commerce de gros de fruits et l\u00e9gumes ",
          "hasChildren": true,
          "children": [{
            "code": "4631Z",
            "libelle": "[4631Z] Commerce de gros (commerce interentreprises) de fruits et l\u00e9gumes "
          }]
        },
        {
          "code": "4632",
          "total": "0",
          "libelle": "[4632] Commerce de gros de viandes et de produits \u00e0 base de viande ",
          "hasChildren": true,
          "children": [{
            "code": "4632A",
            "libelle": "[4632A] Commerce de gros (commerce interentreprises) de viandes de boucherie "
          },
          {
            "code": "4632B",
            "libelle": "[4632B] Commerce de gros (commerce interentreprises) de produits \u00e0 base de viande "
          },
          {
            "code": "4632C",
            "libelle": "[4632C] Commerce de gros (commerce interentreprises) de volailles et gibier "
          }]
        },
        {
          "code": "4633",
          "total": "2",
          "libelle": "[4633] Commerce de gros de produits laitiers, \u0153ufs, huiles et mati\u00e8res grasses comestibles ",
          "hasChildren": true,
          "children": [{
            "code": "4633Z",
            "libelle": "[4633Z] Commerce de gros (commerce interentreprises) de produits laitiers, \u0153ufs, huiles et mati\u00e8res grasses comestibles "
          }]
        },
        {
          "code": "4634",
          "total": "2",
          "libelle": "[4634] Commerce de gros de boissons ",
          "hasChildren": true,
          "children": [{
            "code": "4634Z",
            "libelle": "[4634Z] Commerce de gros (commerce interentreprises) de boissons "
          }]
        },
        {
          "code": "4635",
          "total": "0",
          "libelle": "[4635] Commerce de gros de produits \u00e0 base de tabac ",
          "hasChildren": true,
          "children": [{
            "code": "4635Z",
            "libelle": "[4635Z] Commerce de gros (commerce interentreprises) de produits \u00e0 base de tabac "
          }]
        },
        {
          "code": "4636",
          "total": "0",
          "libelle": "[4636] Commerce de gros de sucre, chocolat et confiserie ",
          "hasChildren": true,
          "children": [{
            "code": "4636Z",
            "libelle": "[4636Z] Commerce de gros (commerce interentreprises) de sucre, chocolat et confiserie "
          }]
        },
        {
          "code": "4637",
          "total": "0",
          "libelle": "[4637] Commerce de gros de caf\u00e9, th\u00e9, cacao et \u00e9pices ",
          "hasChildren": true,
          "children": [{
            "code": "4637Z",
            "libelle": "[4637Z] Commerce de gros (commerce interentreprises) de caf\u00e9, th\u00e9, cacao et \u00e9pices "
          }]
        },
        {
          "code": "4638",
          "total": "4",
          "libelle": "[4638] Commerce de gros d'autres produits alimentaires, y compris poissons, crustac\u00e9s et mollusques ",
          "hasChildren": true,
          "children": [{
            "code": "4638A",
            "libelle": "[4638A] Commerce de gros (commerce interentreprises) de poissons, crustac\u00e9s et mollusques "
          },
          {
            "code": "4638B",
            "libelle": "[4638B] Commerce de gros (commerce interentreprises) alimentaire sp\u00e9cialis\u00e9 divers "
          }]
        },
        {
          "code": "4639",
          "total": "4",
          "libelle": "[4639] Commerce de gros non sp\u00e9cialis\u00e9 de denr\u00e9es, boissons et tabac ",
          "hasChildren": true,
          "children": [{
            "code": "4639A",
            "libelle": "[4639A] Commerce de gros (commerce interentreprises) de produits surgel\u00e9s "
          },
          {
            "code": "4639B",
            "libelle": "[4639B] Commerce de gros (commerce interentreprises) alimentaire non sp\u00e9cialis\u00e9 "
          }]
        }]
      },
      {
        "code": "464",
        "total": "16",
        "libelle": "[464] Commerce de gros de biens domestiques",
        "hasChildren": true,
        "children": [{
          "code": "4641",
          "total": "0",
          "libelle": "[4641] Commerce de gros de textiles ",
          "hasChildren": true,
          "children": [{
            "code": "4641Z",
            "libelle": "[4641Z] Commerce de gros (commerce interentreprises) de textiles "
          }]
        },
        {
          "code": "4642",
          "total": "5",
          "libelle": "[4642] Commerce de gros d'habillement et de chaussures ",
          "hasChildren": true,
          "children": [{
            "code": "4642Z",
            "libelle": "[4642Z] Commerce de gros (commerce interentreprises) d'habillement et de chaussures "
          }]
        },
        {
          "code": "4643",
          "total": "0",
          "libelle": "[4643] Commerce de gros d'appareils \u00e9lectrom\u00e9nagers ",
          "hasChildren": true,
          "children": [{
            "code": "4643Z",
            "libelle": "[4643Z] Commerce de gros (commerce interentreprises) d'appareils \u00e9lectrom\u00e9nagers "
          }]
        },
        {
          "code": "4644",
          "total": "1",
          "libelle": "[4644] Commerce de gros de vaisselle, verrerie et produits d'entretien ",
          "hasChildren": true,
          "children": [{
            "code": "4644Z",
            "libelle": "[4644Z] Commerce de gros (commerce interentreprises) de vaisselle, verrerie et produits d'entretien "
          }]
        },
        {
          "code": "4645",
          "total": "1",
          "libelle": "[4645] Commerce de gros de parfumerie et de produits de beaut\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4645Z",
            "libelle": "[4645Z] Commerce de gros (commerce interentreprises) de parfumerie et de produits de beaut\u00e9 "
          }]
        },
        {
          "code": "4646",
          "total": "1",
          "libelle": "[4646] Commerce de gros de produits pharmaceutiques ",
          "hasChildren": true,
          "children": [{
            "code": "4646Z",
            "libelle": "[4646Z] Commerce de gros (commerce interentreprises) de produits pharmaceutiques "
          }]
        },
        {
          "code": "4647",
          "total": "0",
          "libelle": "[4647] Commerce de gros de meubles, de tapis et d'appareils d'\u00e9clairage ",
          "hasChildren": true,
          "children": [{
            "code": "4647Z",
            "libelle": "[4647Z] Commerce de gros (commerce interentreprises) de meubles, de tapis et d'appareils d'\u00e9clairage "
          }]
        },
        {
          "code": "4648",
          "total": "0",
          "libelle": "[4648] Commerce de gros d'articles d'horlogerie et de bijouterie ",
          "hasChildren": true,
          "children": [{
            "code": "4648Z",
            "libelle": "[4648Z] Commerce de gros (commerce interentreprises) d'articles d'horlogerie et de bijouterie "
          }]
        },
        {
          "code": "4649",
          "total": "8",
          "libelle": "[4649] Commerce de gros d'autres biens domestiques ",
          "hasChildren": true,
          "children": [{
            "code": "4649Z",
            "libelle": "[4649Z] Commerce de gros (commerce interentreprises) d'autres biens domestiques "
          }]
        }]
      },
      {
        "code": "465",
        "total": "3",
        "libelle": "[465] Commerce de gros d'\u00e9quipements de l'information et de la communication ",
        "hasChildren": true,
        "children": [{
          "code": "4651",
          "total": "1",
          "libelle": "[4651] Commerce de gros d'ordinateurs, d'\u00e9quipements informatiques p\u00e9riph\u00e9riques et de logiciels ",
          "hasChildren": true,
          "children": [{
            "code": "4651Z",
            "libelle": "[4651Z] Commerce de gros (commerce interentreprises) d'ordinateurs, d'\u00e9quipements informatiques p\u00e9riph\u00e9riques et de logiciels "
          }]
        },
        {
          "code": "4652",
          "total": "2",
          "libelle": "[4652] Commerce de gros de composants et d'\u00e9quipements \u00e9lectroniques et de t\u00e9l\u00e9communication ",
          "hasChildren": true,
          "children": [{
            "code": "4652Z",
            "libelle": "[4652Z] Commerce de gros (commerce interentreprises) de composants et d'\u00e9quipements \u00e9lectroniques et de t\u00e9l\u00e9communication "
          }]
        }]
      },
      {
        "code": "466",
        "total": "32",
        "libelle": "[466] Commerce de gros d'autres \u00e9quipements industriels",
        "hasChildren": true,
        "children": [{
          "code": "4661",
          "total": "10",
          "libelle": "[4661] Commerce de gros de mat\u00e9riel agricole ",
          "hasChildren": true,
          "children": [{
            "code": "4661Z",
            "libelle": "[4661Z] Commerce de gros (commerce interentreprises) de mat\u00e9riel agricole "
          }]
        },
        {
          "code": "4662",
          "total": "0",
          "libelle": "[4662] Commerce de gros de machines-outils ",
          "hasChildren": true,
          "children": [{
            "code": "4662Z",
            "libelle": "[4662Z] Commerce de gros (commerce interentreprises) de machines-outils "
          }]
        },
        {
          "code": "4663",
          "total": "3",
          "libelle": "[4663] Commerce de gros de machines pour l'extraction, la construction et le g\u00e9nie civil ",
          "hasChildren": true,
          "children": [{
            "code": "4663Z",
            "libelle": "[4663Z] Commerce de gros (commerce interentreprises) de machines pour l'extraction, la construction et le g\u00e9nie civil "
          }]
        },
        {
          "code": "4664",
          "total": "0",
          "libelle": "[4664] Commerce de gros de machines pour l'industrie textile et l'habillement ",
          "hasChildren": true,
          "children": [{
            "code": "4664Z",
            "libelle": "[4664Z] Commerce de gros (commerce interentreprises) de machines pour l'industrie textile et l'habillement "
          }]
        },
        {
          "code": "4665",
          "total": "0",
          "libelle": "[4665] Commerce de gros de mobilier de bureau ",
          "hasChildren": true,
          "children": [{
            "code": "4665Z",
            "libelle": "[4665Z] Commerce de gros (commerce interentreprises) de mobilier de bureau "
          }]
        },
        {
          "code": "4666",
          "total": "1",
          "libelle": "[4666] Commerce de gros d'autres machines et \u00e9quipements de bureau ",
          "hasChildren": true,
          "children": [{
            "code": "4666Z",
            "libelle": "[4666Z] Commerce de gros (commerce interentreprises) d'autres machines et \u00e9quipements de bureau "
          }]
        },
        {
          "code": "4669",
          "total": "18",
          "libelle": "[4669] Commerce de gros d'autres machines et \u00e9quipements",
          "hasChildren": true,
          "children": [{
            "code": "4669A",
            "libelle": "[4669A] Commerce de gros (commerce interentreprises) de mat\u00e9riel \u00e9lectrique "
          },
          {
            "code": "4669B",
            "libelle": "[4669B] Commerce de gros (commerce interentreprises) de fournitures et \u00e9quipements industriels divers "
          },
          {
            "code": "4669C",
            "libelle": "[4669C] Commerce de gros (commerce interentreprises) de fournitures et \u00e9quipements divers pour le commerce et les services "
          }]
        }]
      },
      {
        "code": "467",
        "total": "41",
        "libelle": "[467] Autres commerces de gros sp\u00e9cialis\u00e9s",
        "hasChildren": true,
        "children": [{
          "code": "4671",
          "total": "1",
          "libelle": "[4671] Commerce de gros de combustibles et de produits annexes ",
          "hasChildren": true,
          "children": [{
            "code": "4671Z",
            "libelle": "[4671Z] Commerce de gros (commerce interentreprises) de combustibles et de produits annexes "
          }]
        },
        {
          "code": "4672",
          "total": "3",
          "libelle": "[4672] Commerce de gros de minerais et m\u00e9taux ",
          "hasChildren": true,
          "children": [{
            "code": "4672Z",
            "libelle": "[4672Z] Commerce de gros (commerce interentreprises) de minerais et m\u00e9taux "
          }]
        },
        {
          "code": "4673",
          "total": "26",
          "libelle": "[4673] Commerce de gros de bois, de mat\u00e9riaux de construction et d'appareils sanitaires",
          "hasChildren": true,
          "children": [{
            "code": "4673A",
            "libelle": "[4673A] Commerce de gros (commerce interentreprises) de bois et de mat\u00e9riaux de construction"
          },
          {
            "code": "4673B",
            "libelle": "[4673B] Commerce de gros (commerce interentreprises) d'appareils sanitaires et de produits de d\u00e9coration "
          }]
        },
        {
          "code": "4674",
          "total": "7",
          "libelle": "[4674] Commerce de gros de quincaillerie et fournitures pour plomberie et chauffage ",
          "hasChildren": true,
          "children": [{
            "code": "4674A",
            "libelle": "[4674A] Commerce de gros (commerce interentreprises) de quincaillerie "
          },
          {
            "code": "4674B",
            "libelle": "[4674B] Commerce de gros (commerce interentreprises) de fournitures pour la plomberie et le chauffage "
          }]
        },
        {
          "code": "4675",
          "total": "3",
          "libelle": "[4675] Commerce de gros de produits chimiques ",
          "hasChildren": true,
          "children": [{
            "code": "4675Z",
            "libelle": "[4675Z] Commerce de gros (commerce interentreprises) de produits chimiques "
          }]
        },
        {
          "code": "4676",
          "total": "1",
          "libelle": "[4676] Commerce de gros d'autres produits interm\u00e9diaires ",
          "hasChildren": true,
          "children": [{
            "code": "4676Z",
            "libelle": "[4676Z] Commerce de gros (commerce interentreprises) d'autres produits interm\u00e9diaires "
          }]
        },
        {
          "code": "4677",
          "total": "0",
          "libelle": "[4677] Commerce de gros de d\u00e9chets et d\u00e9bris ",
          "hasChildren": true,
          "children": [{
            "code": "4677Z",
            "libelle": "[4677Z] Commerce de gros (commerce interentreprises) de d\u00e9chets et d\u00e9bris "
          }]
        }]
      },
      {
        "code": "469",
        "total": "3",
        "libelle": "[469] Commerce de gros non sp\u00e9cialis\u00e9 ",
        "hasChildren": true,
        "children": [{
          "code": "4690",
          "total": "3",
          "libelle": "[4690] Commerce de gros non sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4690Z",
            "libelle": "[4690Z] Commerce de gros (commerce interentreprises) non sp\u00e9cialis\u00e9 "
          }]
        }]
      }]
    },
    {
      "code": "47",
      "code_section": "G",
      "total": "290",
      "libelle": "[47] Commerce de d\u00e9tail, \u00e0 l'exception des automobiles et des motocycles",
      "hasChildren": false,
      "children": [{
        "code": "471",
        "total": "37",
        "libelle": "[471] Commerce de d\u00e9tail en magasin non sp\u00e9cialis\u00e9",
        "hasChildren": true,
        "children": [{
          "code": "4711",
          "total": "29",
          "libelle": "[4711] Commerce de d\u00e9tail en magasin non sp\u00e9cialis\u00e9 \u00e0 pr\u00e9dominance alimentaire",
          "hasChildren": true,
          "children": [{
            "code": "4711A",
            "libelle": "[4711A] Commerce de d\u00e9tail de produits surgel\u00e9s "
          },
          {
            "code": "4711B",
            "libelle": "[4711B] Commerce d'alimentation g\u00e9n\u00e9rale "
          },
          {
            "code": "4711C",
            "libelle": "[4711C] Sup\u00e9rettes "
          },
          {
            "code": "4711D",
            "libelle": "[4711D] Supermarch\u00e9s "
          },
          {
            "code": "4711E",
            "libelle": "[4711E] Magasins multi-commerces "
          },
          {
            "code": "4711F",
            "libelle": "[4711F] Hypermarch\u00e9s "
          }]
        },
        {
          "code": "4719",
          "total": "8",
          "libelle": "[4719] Autre commerce de d\u00e9tail en magasin non sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4719A",
            "libelle": "[4719A] Grands magasins "
          },
          {
            "code": "4719B",
            "libelle": "[4719B] Autres commerces de d\u00e9tail en magasin non sp\u00e9cialis\u00e9 "
          }]
        }]
      },
      {
        "code": "472",
        "total": "24",
        "libelle": "[472] Commerce de d\u00e9tail alimentaire en magasin sp\u00e9cialis\u00e9",
        "hasChildren": true,
        "children": [{
          "code": "4721",
          "total": "2",
          "libelle": "[4721] Commerce de d\u00e9tail de fruits et l\u00e9gumes en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4721Z",
            "libelle": "[4721Z] Commerce de d\u00e9tail de fruits et l\u00e9gumes en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4722",
          "total": "9",
          "libelle": "[4722] Commerce de d\u00e9tail de viandes et de produits \u00e0 base de viande en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4722Z",
            "libelle": "[4722Z] Commerce de d\u00e9tail de viandes et de produits \u00e0 base de viande en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4723",
          "total": "1",
          "libelle": "[4723] Commerce de d\u00e9tail de poissons, crustac\u00e9s et mollusques en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4723Z",
            "libelle": "[4723Z] Commerce de d\u00e9tail de poissons, crustac\u00e9s et mollusques en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4724",
          "total": "4",
          "libelle": "[4724] Commerce de d\u00e9tail de pain, p\u00e2tisserie et confiserie en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4724Z",
            "libelle": "[4724Z] Commerce de d\u00e9tail de pain, p\u00e2tisserie et confiserie en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4725",
          "total": "1",
          "libelle": "[4725] Commerce de d\u00e9tail de boissons en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4725Z",
            "libelle": "[4725Z] Commerce de d\u00e9tail de boissons en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4726",
          "total": "2",
          "libelle": "[4726] Commerce de d\u00e9tail de produits \u00e0 base de tabac en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4726Z",
            "libelle": "[4726Z] Commerce de d\u00e9tail de produits \u00e0 base de tabac en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4729",
          "total": "5",
          "libelle": "[4729] Autres commerces de d\u00e9tail alimentaires en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4729Z",
            "libelle": "[4729Z] Autres commerces de d\u00e9tail alimentaires en magasin sp\u00e9cialis\u00e9 "
          }]
        }]
      },
      {
        "code": "473",
        "total": "2",
        "libelle": "[473] Commerce de d\u00e9tail de carburants en magasin sp\u00e9cialis\u00e9 ",
        "hasChildren": true,
        "children": [{
          "code": "4730",
          "total": "2",
          "libelle": "[4730] Commerce de d\u00e9tail de carburants en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4730Z",
            "libelle": "[4730Z] Commerce de d\u00e9tail de carburants en magasin sp\u00e9cialis\u00e9 "
          }]
        }]
      },
      {
        "code": "474",
        "total": "7",
        "libelle": "[474] Commerce de d\u00e9tail d'\u00e9quipements de l'information et de la communication en magasin sp\u00e9cialis\u00e9 ",
        "hasChildren": true,
        "children": [{
          "code": "4741",
          "total": "2",
          "libelle": "[4741] Commerce de d\u00e9tail d'ordinateurs, d'unit\u00e9s p\u00e9riph\u00e9riques et de logiciels en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4741Z",
            "libelle": "[4741Z] Commerce de d\u00e9tail d'ordinateurs, d'unit\u00e9s p\u00e9riph\u00e9riques et de logiciels en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4742",
          "total": "5",
          "libelle": "[4742] Commerce de d\u00e9tail de mat\u00e9riels de t\u00e9l\u00e9communication en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4742Z",
            "libelle": "[4742Z] Commerce de d\u00e9tail de mat\u00e9riels de t\u00e9l\u00e9communication en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4743",
          "total": "0",
          "libelle": "[4743] Commerce de d\u00e9tail de mat\u00e9riels audio\/vid\u00e9o en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4743Z",
            "libelle": "[4743Z] Commerce de d\u00e9tail de mat\u00e9riels audio et vid\u00e9o en magasin sp\u00e9cialis\u00e9 "
          }]
        }]
      },
      {
        "code": "475",
        "total": "48",
        "libelle": "[475] Commerce de d\u00e9tail d'autres \u00e9quipements du foyer en magasin sp\u00e9cialis\u00e9",
        "hasChildren": true,
        "children": [{
          "code": "4751",
          "total": "3",
          "libelle": "[4751] Commerce de d\u00e9tail de textiles en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4751Z",
            "libelle": "[4751Z] Commerce de d\u00e9tail de textiles en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4752",
          "total": "17",
          "libelle": "[4752] Commerce de d\u00e9tail de quincaillerie, peintures et verres en magasin sp\u00e9cialis\u00e9",
          "hasChildren": true,
          "children": [{
            "code": "4752A",
            "libelle": "[4752A] Commerce de d\u00e9tail de quincaillerie, peintures et verres en petites surfaces (moins de 400 m\u00b2) "
          },
          {
            "code": "4752B",
            "libelle": "[4752B] Commerce de d\u00e9tail de quincaillerie, peintures et verres en grandes surfaces (400 m\u00b2 et plus) "
          }]
        },
        {
          "code": "4753",
          "total": "2",
          "libelle": "[4753] Commerce de d\u00e9tail de tapis, moquettes et rev\u00eatements de murs et de sols en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4753Z",
            "libelle": "[4753Z] Commerce de d\u00e9tail de tapis, moquettes et rev\u00eatements de murs et de sols en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4754",
          "total": "5",
          "libelle": "[4754] Commerce de d\u00e9tail d'appareils \u00e9lectrom\u00e9nagers en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4754Z",
            "libelle": "[4754Z] Commerce de d\u00e9tail d'appareils \u00e9lectrom\u00e9nagers en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4759",
          "total": "21",
          "libelle": "[4759] Commerce de d\u00e9tail de meubles, appareils d'\u00e9clairage et autres articles de m\u00e9nage en magasin sp\u00e9cialis\u00e9",
          "hasChildren": true,
          "children": [{
            "code": "4759A",
            "libelle": "[4759A] Commerce de d\u00e9tail de meubles "
          },
          {
            "code": "4759B",
            "libelle": "[4759B] Commerce de d\u00e9tail d'autres \u00e9quipements du foyer "
          }]
        }]
      },
      {
        "code": "476",
        "total": "17",
        "libelle": "[476] Commerce de d\u00e9tail de biens culturels et de loisirs en magasin sp\u00e9cialis\u00e9",
        "hasChildren": true,
        "children": [{
          "code": "4761",
          "total": "3",
          "libelle": "[4761] Commerce de d\u00e9tail de livres en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4761Z",
            "libelle": "[4761Z] Commerce de d\u00e9tail de livres en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4762",
          "total": "4",
          "libelle": "[4762] Commerce de d\u00e9tail de journaux et papeterie en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4762Z",
            "libelle": "[4762Z] Commerce de d\u00e9tail de journaux et papeterie en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4763",
          "total": "0",
          "libelle": "[4763] Commerce de d\u00e9tail d'enregistrements musicaux et vid\u00e9o en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4763Z",
            "libelle": "[4763Z] Commerce de d\u00e9tail d'enregistrements musicaux et vid\u00e9o en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4764",
          "total": "8",
          "libelle": "[4764] Commerce de d\u00e9tail d'articles de sport en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4764Z",
            "libelle": "[4764Z] Commerce de d\u00e9tail d'articles de sport en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4765",
          "total": "2",
          "libelle": "[4765] Commerce de d\u00e9tail de jeux et jouets en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4765Z",
            "libelle": "[4765Z] Commerce de d\u00e9tail de jeux et jouets en magasin sp\u00e9cialis\u00e9 "
          }]
        }]
      },
      {
        "code": "477",
        "total": "147",
        "libelle": "[477] Autres commerces de d\u00e9tail en magasin sp\u00e9cialis\u00e9",
        "hasChildren": true,
        "children": [{
          "code": "4771",
          "total": "62",
          "libelle": "[4771] Commerce de d\u00e9tail d'habillement en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4771Z",
            "libelle": "[4771Z] Commerce de d\u00e9tail d'habillement en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4772",
          "total": "11",
          "libelle": "[4772] Commerce de d\u00e9tail de chaussures et d'articles en cuir en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4772A",
            "libelle": "[4772A] Commerce de d\u00e9tail de la chaussure "
          },
          {
            "code": "4772B",
            "libelle": "[4772B] Commerce de d\u00e9tail de maroquinerie et d'articles de voyage "
          }]
        },
        {
          "code": "4773",
          "total": "19",
          "libelle": "[4773] Commerce de d\u00e9tail de produits pharmaceutiques en magasin sp\u00e9cialis\u00e9",
          "hasChildren": true,
          "children": [{
            "code": "4773Z",
            "libelle": "[4773Z] Commerce de d\u00e9tail de produits pharmaceutiques en magasin sp\u00e9cialis\u00e9"
          }]
        },
        {
          "code": "4774",
          "total": "3",
          "libelle": "[4774] Commerce de d\u00e9tail d'articles m\u00e9dicaux et orthop\u00e9diques en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4774Z",
            "libelle": "[4774Z] Commerce de d\u00e9tail d'articles m\u00e9dicaux et orthop\u00e9diques en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4775",
          "total": "10",
          "libelle": "[4775] Commerce de d\u00e9tail de parfumerie et de produits de beaut\u00e9 en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4775Z",
            "libelle": "[4775Z] Commerce de d\u00e9tail de parfumerie et de produits de beaut\u00e9 en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4776",
          "total": "11",
          "libelle": "[4776] Commerce de d\u00e9tail de fleurs, plantes, graines, engrais, animaux de compagnie et aliments pour ces animaux en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4776Z",
            "libelle": "[4776Z] Commerce de d\u00e9tail de fleurs, plantes, graines, engrais, animaux de compagnie et aliments pour ces animaux en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4777",
          "total": "6",
          "libelle": "[4777] Commerce de d\u00e9tail d'articles d'horlogerie et de bijouterie en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4777Z",
            "libelle": "[4777Z] Commerce de d\u00e9tail d'articles d'horlogerie et de bijouterie en magasin sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4778",
          "total": "22",
          "libelle": "[4778] Autre commerce de d\u00e9tail de biens neufs en magasin sp\u00e9cialis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "4778A",
            "libelle": "[4778A] Commerces de d\u00e9tail d'optique "
          },
          {
            "code": "4778B",
            "libelle": "[4778B] Commerces de d\u00e9tail de charbons et combustibles "
          },
          {
            "code": "4778C",
            "libelle": "[4778C] Autres commerces de d\u00e9tail sp\u00e9cialis\u00e9s divers "
          }]
        },
        {
          "code": "4779",
          "total": "3",
          "libelle": "[4779] Commerce de d\u00e9tail de biens d'occasion en magasin ",
          "hasChildren": true,
          "children": [{
            "code": "4779Z",
            "libelle": "[4779Z] Commerce de d\u00e9tail de biens d'occasion en magasin "
          }]
        }]
      },
      {
        "code": "478",
        "total": "5",
        "libelle": "[478] Commerce de d\u00e9tail sur \u00e9ventaires et march\u00e9s ",
        "hasChildren": true,
        "children": [{
          "code": "4781",
          "total": "4",
          "libelle": "[4781] Commerce de d\u00e9tail alimentaire sur \u00e9ventaires et march\u00e9s ",
          "hasChildren": true,
          "children": [{
            "code": "4781Z",
            "libelle": "[4781Z] Commerce de d\u00e9tail alimentaire sur \u00e9ventaires et march\u00e9s "
          }]
        },
        {
          "code": "4782",
          "total": "0",
          "libelle": "[4782] Commerce de d\u00e9tail de textiles, d'habillement et de chaussures sur \u00e9ventaires et march\u00e9s ",
          "hasChildren": true,
          "children": [{
            "code": "4782Z",
            "libelle": "[4782Z] Commerce de d\u00e9tail de textiles, d'habillement et de chaussures sur \u00e9ventaires et march\u00e9s "
          }]
        },
        {
          "code": "4789",
          "total": "1",
          "libelle": "[4789] Autres commerces de d\u00e9tail sur \u00e9ventaires et march\u00e9s ",
          "hasChildren": true,
          "children": [{
            "code": "4789Z",
            "libelle": "[4789Z] Autres commerces de d\u00e9tail sur \u00e9ventaires et march\u00e9s "
          }]
        }]
      },
      {
        "code": "479",
        "total": "3",
        "libelle": "[479] Commerce de d\u00e9tail hors magasin, \u00e9ventaires ou march\u00e9s ",
        "hasChildren": true,
        "children": [{
          "code": "4791",
          "total": "2",
          "libelle": "[4791] Vente \u00e0 distance ",
          "hasChildren": true,
          "children": [{
            "code": "4791A",
            "libelle": "[4791A] Vente \u00e0 distance sur catalogue g\u00e9n\u00e9ral "
          },
          {
            "code": "4791B",
            "libelle": "[4791B] Vente \u00e0 distance sur catalogue sp\u00e9cialis\u00e9 "
          }]
        },
        {
          "code": "4799",
          "total": "1",
          "libelle": "[4799] Autres commerces de d\u00e9tail hors magasin, \u00e9ventaires ou march\u00e9s ",
          "hasChildren": true,
          "children": [{
            "code": "4799A",
            "libelle": "[4799A] Vente \u00e0 domicile "
          },
          {
            "code": "4799B",
            "libelle": "[4799B] Vente par automates et autres commerces de d\u00e9tail hors magasin, \u00e9ventaires ou march\u00e9s n.c.a. "
          }]
        }]
      }]
    }]
  },
  {
    "code": "H",
    "total": "76",
    "libelle": "[H] Transports et entreposage ",
    "hasChildren": true,
    "children": [{
      "code": "49",
      "code_section": "H",
      "total": "45",
      "libelle": "[49] Transports terrestres et transport par conduites",
      "hasChildren": false,
      "children": [{
        "code": "491",
        "total": "2",
        "libelle": "[491] Transport ferroviaire interurbain de voyageurs ",
        "hasChildren": true,
        "children": [{
          "code": "4910",
          "total": "2",
          "libelle": "[4910] Transport ferroviaire interurbain de voyageurs ",
          "hasChildren": true,
          "children": [{
            "code": "4910Z",
            "libelle": "[4910Z] Transport ferroviaire interurbain de voyageurs "
          }]
        }]
      },
      {
        "code": "492",
        "total": "0",
        "libelle": "[492] Transports ferroviaires de fret ",
        "hasChildren": true,
        "children": [{
          "code": "4920",
          "total": "0",
          "libelle": "[4920] Transports ferroviaires de fret ",
          "hasChildren": true,
          "children": [{
            "code": "4920Z",
            "libelle": "[4920Z] Transports ferroviaires de fret "
          }]
        }]
      },
      {
        "code": "493",
        "total": "3",
        "libelle": "[493] Autres transports terrestres de voyageurs ",
        "hasChildren": true,
        "children": [{
          "code": "4931",
          "total": "1",
          "libelle": "[4931] Transports urbains et suburbains de voyageurs ",
          "hasChildren": true,
          "children": [{
            "code": "4931Z",
            "libelle": "[4931Z] Transports urbains et suburbains de voyageurs "
          }]
        },
        {
          "code": "4932",
          "total": "0",
          "libelle": "[4932] Transports de voyageurs par taxis ",
          "hasChildren": true,
          "children": [{
            "code": "4932Z",
            "libelle": "[4932Z] Transports de voyageurs par taxis "
          }]
        },
        {
          "code": "4939",
          "total": "2",
          "libelle": "[4939] Autres transports terrestres de voyageurs n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "4939A",
            "libelle": "[4939A] Transports routiers r\u00e9guliers de voyageurs "
          },
          {
            "code": "4939B",
            "libelle": "[4939B] Autres transports routiers de voyageurs "
          },
          {
            "code": "4939C",
            "libelle": "[4939C] T\u00e9l\u00e9ph\u00e9riques et remont\u00e9es m\u00e9caniques "
          }]
        }]
      },
      {
        "code": "494",
        "total": "39",
        "libelle": "[494] Transports routiers de fret et services de d\u00e9m\u00e9nagement",
        "hasChildren": true,
        "children": [{
          "code": "4941",
          "total": "36",
          "libelle": "[4941] Transports routiers de fret",
          "hasChildren": true,
          "children": [{
            "code": "4941A",
            "libelle": "[4941A] Transports routiers de fret interurbains"
          },
          {
            "code": "4941B",
            "libelle": "[4941B] Transports routiers de fret de proximit\u00e9"
          },
          {
            "code": "4941C",
            "libelle": "[4941C] Location de camions avec chauffeur "
          }]
        },
        {
          "code": "4942",
          "total": "3",
          "libelle": "[4942] Services de d\u00e9m\u00e9nagement ",
          "hasChildren": true,
          "children": [{
            "code": "4942Z",
            "libelle": "[4942Z] Services de d\u00e9m\u00e9nagement "
          }]
        }]
      },
      {
        "code": "495",
        "total": "1",
        "libelle": "[495] Transports par conduites ",
        "hasChildren": true,
        "children": [{
          "code": "4950",
          "total": "1",
          "libelle": "[4950] Transports par conduites ",
          "hasChildren": true,
          "children": [{
            "code": "4950Z",
            "libelle": "[4950Z] Transports par conduites "
          }]
        }]
      }]
    },
    {
      "code": "50",
      "code_section": "H",
      "total": "0",
      "libelle": "[50] Transports par eau ",
      "hasChildren": false,
      "children": [{
        "code": "501",
        "total": "0",
        "libelle": "[501] Transports maritimes et c\u00f4tiers de passagers ",
        "hasChildren": true,
        "children": [{
          "code": "5010",
          "total": "0",
          "libelle": "[5010] Transports maritimes et c\u00f4tiers de passagers ",
          "hasChildren": true,
          "children": [{
            "code": "5010Z",
            "libelle": "[5010Z] Transports maritimes et c\u00f4tiers de passagers "
          }]
        }]
      },
      {
        "code": "502",
        "total": "0",
        "libelle": "[502] Transports maritimes et c\u00f4tiers de fret ",
        "hasChildren": true,
        "children": [{
          "code": "5020",
          "total": "0",
          "libelle": "[5020] Transports maritimes et c\u00f4tiers de fret ",
          "hasChildren": true,
          "children": [{
            "code": "5020Z",
            "libelle": "[5020Z] Transports maritimes et c\u00f4tiers de fret "
          }]
        }]
      },
      {
        "code": "503",
        "total": "0",
        "libelle": "[503] Transports fluviaux de passagers ",
        "hasChildren": true,
        "children": [{
          "code": "5030",
          "total": "0",
          "libelle": "[5030] Transports fluviaux de passagers ",
          "hasChildren": true,
          "children": [{
            "code": "5030Z",
            "libelle": "[5030Z] Transports fluviaux de passagers "
          }]
        }]
      },
      {
        "code": "504",
        "total": "0",
        "libelle": "[504] Transports fluviaux de fret ",
        "hasChildren": true,
        "children": [{
          "code": "5040",
          "total": "0",
          "libelle": "[5040] Transports fluviaux de fret ",
          "hasChildren": true,
          "children": [{
            "code": "5040Z",
            "libelle": "[5040Z] Transports fluviaux de fret "
          }]
        }]
      }]
    },
    {
      "code": "51",
      "code_section": "H",
      "total": "0",
      "libelle": "[51] Transports a\u00e9riens ",
      "hasChildren": false,
      "children": [{
        "code": "511",
        "total": "0",
        "libelle": "[511] Transports a\u00e9riens de passagers ",
        "hasChildren": true,
        "children": [{
          "code": "5110",
          "total": "0",
          "libelle": "[5110] Transports a\u00e9riens de passagers ",
          "hasChildren": true,
          "children": [{
            "code": "5110Z",
            "libelle": "[5110Z] Transports a\u00e9riens de passagers "
          }]
        }]
      },
      {
        "code": "512",
        "total": "0",
        "libelle": "[512] Transports a\u00e9riens de fret et transports spatiaux ",
        "hasChildren": true,
        "children": [{
          "code": "5121",
          "total": "0",
          "libelle": "[5121] Transports a\u00e9riens de fret ",
          "hasChildren": true,
          "children": [{
            "code": "5121Z",
            "libelle": "[5121Z] Transports a\u00e9riens de fret "
          }]
        },
        {
          "code": "5122",
          "total": "0",
          "libelle": "[5122] Transports spatiaux ",
          "hasChildren": true,
          "children": [{
            "code": "5122Z",
            "libelle": "[5122Z] Transports spatiaux "
          }]
        }]
      }]
    },
    {
      "code": "52",
      "code_section": "H",
      "total": "24",
      "libelle": "[52] Entreposage et services auxiliaires des transports",
      "hasChildren": false,
      "children": [{
        "code": "521",
        "total": "12",
        "libelle": "[521] Entreposage et stockage ",
        "hasChildren": true,
        "children": [{
          "code": "5210",
          "total": "12",
          "libelle": "[5210] Entreposage et stockage ",
          "hasChildren": true,
          "children": [{
            "code": "5210A",
            "libelle": "[5210A] Entreposage et stockage frigorifique "
          },
          {
            "code": "5210B",
            "libelle": "[5210B] Entreposage et stockage non frigorifique "
          }]
        }]
      },
      {
        "code": "522",
        "total": "12",
        "libelle": "[522] Services auxiliaires des transports ",
        "hasChildren": true,
        "children": [{
          "code": "5221",
          "total": "7",
          "libelle": "[5221] Services auxiliaires des transports terrestres ",
          "hasChildren": true,
          "children": [{
            "code": "5221Z",
            "libelle": "[5221Z] Services auxiliaires des transports terrestres "
          }]
        },
        {
          "code": "5222",
          "total": "0",
          "libelle": "[5222] Services auxiliaires des transports par eau ",
          "hasChildren": true,
          "children": [{
            "code": "5222Z",
            "libelle": "[5222Z] Services auxiliaires des transports par eau "
          }]
        },
        {
          "code": "5223",
          "total": "0",
          "libelle": "[5223] Services auxiliaires des transports a\u00e9riens ",
          "hasChildren": true,
          "children": [{
            "code": "5223Z",
            "libelle": "[5223Z] Services auxiliaires des transports a\u00e9riens "
          }]
        },
        {
          "code": "5224",
          "total": "0",
          "libelle": "[5224] Manutention ",
          "hasChildren": true,
          "children": [{
            "code": "5224A",
            "libelle": "[5224A] Manutention portuaire "
          },
          {
            "code": "5224B",
            "libelle": "[5224B] Manutention non portuaire "
          }]
        },
        {
          "code": "5229",
          "total": "5",
          "libelle": "[5229] Autres services auxiliaires des transports ",
          "hasChildren": true,
          "children": [{
            "code": "5229A",
            "libelle": "[5229A] Messagerie, fret express "
          },
          {
            "code": "5229B",
            "libelle": "[5229B] Affr\u00e8tement et organisation des transports "
          }]
        }]
      }]
    },
    {
      "code": "53",
      "code_section": "H",
      "total": "7",
      "libelle": "[53] Activit\u00e9s de poste et de courrier ",
      "hasChildren": false,
      "children": [{
        "code": "531",
        "total": "7",
        "libelle": "[531] Activit\u00e9s de poste dans le cadre d'une obligation de service universel ",
        "hasChildren": true,
        "children": [{
          "code": "5310",
          "total": "7",
          "libelle": "[5310] Activit\u00e9s de poste dans le cadre d'une obligation de service universel ",
          "hasChildren": true,
          "children": [{
            "code": "5310Z",
            "libelle": "[5310Z] Activit\u00e9s de poste dans le cadre d'une obligation de service universel "
          }]
        }]
      },
      {
        "code": "532",
        "total": "0",
        "libelle": "[532] Autres activit\u00e9s de poste et de courrier ",
        "hasChildren": true,
        "children": [{
          "code": "5320",
          "total": "0",
          "libelle": "[5320] Autres activit\u00e9s de poste et de courrier ",
          "hasChildren": true,
          "children": [{
            "code": "5320Z",
            "libelle": "[5320Z] Autres activit\u00e9s de poste et de courrier "
          }]
        }]
      }]
    }]
  },
  {
    "code": "I",
    "total": "121",
    "libelle": "[I] H\u00e9bergement et restauration",
    "hasChildren": true,
    "children": [{
      "code": "55",
      "code_section": "I",
      "total": "13",
      "libelle": "[55] H\u00e9bergement ",
      "hasChildren": false,
      "children": [{
        "code": "551",
        "total": "10",
        "libelle": "[551] H\u00f4tels et h\u00e9bergement similaire ",
        "hasChildren": true,
        "children": [{
          "code": "5510",
          "total": "10",
          "libelle": "[5510] H\u00f4tels et h\u00e9bergement similaire ",
          "hasChildren": true,
          "children": [{
            "code": "5510Z",
            "libelle": "[5510Z] H\u00f4tels et h\u00e9bergement similaire "
          }]
        }]
      },
      {
        "code": "552",
        "total": "0",
        "libelle": "[552] H\u00e9bergement touristique et autre h\u00e9bergement de courte dur\u00e9e ",
        "hasChildren": true,
        "children": [{
          "code": "5520",
          "total": "0",
          "libelle": "[5520] H\u00e9bergement touristique et autre h\u00e9bergement de courte dur\u00e9e ",
          "hasChildren": true,
          "children": [{
            "code": "5520Z",
            "libelle": "[5520Z] H\u00e9bergement touristique et autre h\u00e9bergement de courte dur\u00e9e "
          }]
        }]
      },
      {
        "code": "553",
        "total": "2",
        "libelle": "[553] Terrains de camping et parcs pour caravanes ou v\u00e9hicules de loisirs ",
        "hasChildren": true,
        "children": [{
          "code": "5530",
          "total": "2",
          "libelle": "[5530] Terrains de camping et parcs pour caravanes ou v\u00e9hicules de loisirs ",
          "hasChildren": true,
          "children": [{
            "code": "5530Z",
            "libelle": "[5530Z] Terrains de camping et parcs pour caravanes ou v\u00e9hicules de loisirs "
          }]
        }]
      },
      {
        "code": "559",
        "total": "1",
        "libelle": "[559] Autres h\u00e9bergements ",
        "hasChildren": true,
        "children": [{
          "code": "5590",
          "total": "1",
          "libelle": "[5590] Autres h\u00e9bergements ",
          "hasChildren": true,
          "children": [{
            "code": "5590Z",
            "libelle": "[5590Z] Autres h\u00e9bergements "
          }]
        }]
      }]
    },
    {
      "code": "56",
      "code_section": "I",
      "total": "108",
      "libelle": "[56] Restauration",
      "hasChildren": false,
      "children": [{
        "code": "561",
        "total": "85",
        "libelle": "[561] Restaurants et services de restauration mobile ",
        "hasChildren": true,
        "children": [{
          "code": "5610",
          "total": "85",
          "libelle": "[5610] Restaurants et services de restauration mobile ",
          "hasChildren": true,
          "children": [{
            "code": "5610A",
            "libelle": "[5610A] Restauration traditionnelle"
          },
          {
            "code": "5610B",
            "libelle": "[5610B] Caf\u00e9t\u00e9rias et autres libres-services "
          },
          {
            "code": "5610C",
            "libelle": "[5610C] Restauration de type rapide"
          }]
        }]
      },
      {
        "code": "562",
        "total": "9",
        "libelle": "[562] Traiteurs et autres services de restauration ",
        "hasChildren": true,
        "children": [{
          "code": "5621",
          "total": "0",
          "libelle": "[5621] Services des traiteurs ",
          "hasChildren": true,
          "children": [{
            "code": "5621Z",
            "libelle": "[5621Z] Services des traiteurs "
          }]
        },
        {
          "code": "5629",
          "total": "9",
          "libelle": "[5629] Autres services de restauration ",
          "hasChildren": true,
          "children": [{
            "code": "5629A",
            "libelle": "[5629A] Restauration collective sous contrat "
          },
          {
            "code": "5629B",
            "libelle": "[5629B] Autres services de restauration n.c.a. "
          }]
        }]
      },
      {
        "code": "563",
        "total": "14",
        "libelle": "[563] D\u00e9bits de boissons ",
        "hasChildren": true,
        "children": [{
          "code": "5630",
          "total": "14",
          "libelle": "[5630] D\u00e9bits de boissons ",
          "hasChildren": true,
          "children": [{
            "code": "5630Z",
            "libelle": "[5630Z] D\u00e9bits de boissons "
          }]
        }]
      }]
    }]

  },
  {
    "code": "J",
    "total": "17",
    "libelle": "[J] Information et communication",
    "hasChildren": true,
    "children": [{
      "code": "58",
      "code_section": "J",
      "total": "5",
      "libelle": "[58] \u00c9dition ",
      "hasChildren": false,
      "children": [{
        "code": "581",
        "total": "4",
        "libelle": "[581] \u00c9dition de livres et p\u00e9riodiques et autres activit\u00e9s d'\u00e9dition ",
        "hasChildren": true,
        "children": [{
          "code": "5811",
          "total": "0",
          "libelle": "[5811] \u00c9dition de livres ",
          "hasChildren": true,
          "children": [{
            "code": "5811Z",
            "libelle": "[5811Z] \u00c9dition de livres "
          }]
        },
        {
          "code": "5812",
          "total": "0",
          "libelle": "[5812] \u00c9dition de r\u00e9pertoires et de fichiers d'adresses ",
          "hasChildren": true,
          "children": [{
            "code": "5812Z",
            "libelle": "[5812Z] \u00c9dition de r\u00e9pertoires et de fichiers d'adresses "
          }]
        },
        {
          "code": "5813",
          "total": "1",
          "libelle": "[5813] \u00c9dition de journaux ",
          "hasChildren": true,
          "children": [{
            "code": "5813Z",
            "libelle": "[5813Z] \u00c9dition de journaux "
          }]
        },
        {
          "code": "5814",
          "total": "3",
          "libelle": "[5814] \u00c9dition de revues et p\u00e9riodiques ",
          "hasChildren": true,
          "children": [{
            "code": "5814Z",
            "libelle": "[5814Z] \u00c9dition de revues et p\u00e9riodiques "
          }]
        },
        {
          "code": "5819",
          "total": "0",
          "libelle": "[5819] Autres activit\u00e9s d'\u00e9dition ",
          "hasChildren": true,
          "children": [{
            "code": "5819Z",
            "libelle": "[5819Z] Autres activit\u00e9s d'\u00e9dition "
          }]
        }]
      },
      {
        "code": "582",
        "total": "1",
        "libelle": "[582] \u00c9dition de logiciels ",
        "hasChildren": true,
        "children": [{
          "code": "5821",
          "total": "0",
          "libelle": "[5821] \u00c9dition de jeux \u00e9lectroniques ",
          "hasChildren": true,
          "children": [{
            "code": "5821Z",
            "libelle": "[5821Z] \u00c9dition de jeux \u00e9lectroniques "
          }]
        },
        {
          "code": "5829",
          "total": "1",
          "libelle": "[5829] \u00c9dition d'autres logiciels ",
          "hasChildren": true,
          "children": [{
            "code": "5829A",
            "libelle": "[5829A] \u00c9dition de logiciels syst\u00e8me et de r\u00e9seau "
          },
          {
            "code": "5829B",
            "libelle": "[5829B] \u00c9dition de logiciels outils de d\u00e9veloppement et de langages "
          },
          {
            "code": "5829C",
            "libelle": "[5829C] \u00c9dition de logiciels applicatifs "
          }]
        }]
      }]
    },
    {
      "code": "59",
      "code_section": "J",
      "total": "3",
      "libelle": "[59] Production de films cin\u00e9matographiques, de vid\u00e9o et de programmes de t\u00e9l\u00e9vision ; enregistrement sonore et \u00e9dition musicale ",
      "hasChildren": false,
      "children": [{
        "code": "591",
        "total": "3",
        "libelle": "[591] Activit\u00e9s cin\u00e9matographiques, vid\u00e9o et de t\u00e9l\u00e9vision ",
        "hasChildren": true,
        "children": [{
          "code": "5911",
          "total": "1",
          "libelle": "[5911] Production de films cin\u00e9matographiques, de vid\u00e9o et de programmes de t\u00e9l\u00e9vision ",
          "hasChildren": true,
          "children": [{
            "code": "5911A",
            "libelle": "[5911A] Production de films et de programmes pour la t\u00e9l\u00e9vision "
          },
          {
            "code": "5911B",
            "libelle": "[5911B] Production de films institutionnels et publicitaires "
          },
          {
            "code": "5911C",
            "libelle": "[5911C] Production de films pour le cin\u00e9ma "
          }]
        },
        {
          "code": "5912",
          "total": "0",
          "libelle": "[5912] Post-production de films cin\u00e9matographiques, de vid\u00e9o et de programmes de t\u00e9l\u00e9vision ",
          "hasChildren": true,

          "children": [{
            "code": "5912Z",
            "libelle": "[5912Z] Post-production de films cin\u00e9matographiques, de vid\u00e9o et de programmes de t\u00e9l\u00e9vision "
          }]
        },
        {
          "code": "5913",
          "total": "0",
          "libelle": "[5913] Distribution de films cin\u00e9matographiques, de vid\u00e9o et de programmes de t\u00e9l\u00e9vision ",
          "hasChildren": true,
          "children": [{
            "code": "5913A",
            "libelle": "[5913A] Distribution de films cin\u00e9matographiques "
          },
          {
            "code": "5913B",
            "libelle": "[5913B] \u00c9dition et distribution vid\u00e9o "
          }]
        },
        {
          "code": "5914",
          "total": "2",
          "libelle": "[5914] Projection de films cin\u00e9matographiques ",
          "hasChildren": true,
          "children": [{
            "code": "5914Z",
            "libelle": "[5914Z] Projection de films cin\u00e9matographiques "
          }]
        }]
      },
      {
        "code": "592",
        "total": "0",
        "libelle": "[592] Enregistrement sonore et \u00e9dition musicale ",
        "hasChildren": true,
        "children": [{
          "code": "5920",
          "total": "0",
          "libelle": "[5920] Enregistrement sonore et \u00e9dition musicale ",
          "hasChildren": true,
          "children": [{
            "code": "5920Z",
            "libelle": "[5920Z] Enregistrement sonore et \u00e9dition musicale "
          }]
        }]
      }]
    },
    {
      "code": "60",
      "code_section": "J",
      "total": "0",
      "libelle": "[60] Programmation et diffusion ",
      "hasChildren": false,
      "children": [{
        "code": "601",
        "total": "0",
        "libelle": "[601] \u00c9dition et diffusion de programmes radio ",
        "hasChildren": true,
        "children": [{
          "code": "6010",
          "total": "0",
          "libelle": "[6010] \u00c9dition et diffusion de programmes radio ",
          "hasChildren": true,
          "children": [{
            "code": "6010Z",
            "libelle": "[6010Z] \u00c9dition et diffusion de programmes radio "
          }]
        }]
      },
      {
        "code": "602",
        "total": "0",
        "libelle": "[602] Programmation de t\u00e9l\u00e9vision et t\u00e9l\u00e9diffusion ",
        "hasChildren": true,
        "children": [{
          "code": "6020",
          "total": "0",
          "libelle": "[6020] Programmation de t\u00e9l\u00e9vision et t\u00e9l\u00e9diffusion ",
          "hasChildren": true,
          "children": [{
            "code": "6020A",
            "libelle": "[6020A] \u00c9dition de cha\u00eenes g\u00e9n\u00e9ralistes "
          },
          {
            "code": "6020B",
            "libelle": "[6020B] \u00c9dition de cha\u00eenes th\u00e9matiques "
          }]
        }]
      }]
    },
    {
      "code": "61",
      "code_section": "J",
      "total": "1",
      "libelle": "[61] T\u00e9l\u00e9communications ",
      "hasChildren": false,
      "children": [{
        "code": "611",
        "total": "1",
        "libelle": "[611] T\u00e9l\u00e9communications filaires ",
        "hasChildren": true,
        "children": [{
          "code": "6110",
          "total": "1",
          "libelle": "[6110] T\u00e9l\u00e9communications filaires ",
          "hasChildren": true,
          "children": [{
            "code": "6110Z",
            "libelle": "[6110Z] T\u00e9l\u00e9communications filaires "
          }]
        }]
      },
      {
        "code": "612",
        "total": "0",
        "libelle": "[612] T\u00e9l\u00e9communications sans fil ",
        "hasChildren": true,
        "children": [{
          "code": "6120",
          "total": "0",
          "libelle": "[6120] T\u00e9l\u00e9communications sans fil ",
          "hasChildren": true,
          "children": [{
            "code": "6120Z",
            "libelle": "[6120Z] T\u00e9l\u00e9communications sans fil "
          }]
        }]
      },
      {
        "code": "613",
        "total": "0",
        "libelle": "[613] T\u00e9l\u00e9communications par satellite ",
        "hasChildren": true,
        "children": [{
          "code": "6130",
          "total": "0",
          "libelle": "[6130] T\u00e9l\u00e9communications par satellite ",
          "hasChildren": true,
          "children": [{
            "code": "6130Z",
            "libelle": "[6130Z] T\u00e9l\u00e9communications par satellite "
          }]
        }]
      },
      {
        "code": "619",
        "total": "0",
        "libelle": "[619] Autres activit\u00e9s de t\u00e9l\u00e9communication ",
        "hasChildren": true,
        "children": [{
          "code": "6190",
          "total": "0",
          "libelle": "[6190] Autres activit\u00e9s de t\u00e9l\u00e9communication ",
          "hasChildren": true,
          "children": [{
            "code": "6190Z",
            "libelle": "[6190Z] Autres activit\u00e9s de t\u00e9l\u00e9communication "
          }]
        }]
      }]
    },
    {
      "code": "62",
      "code_section": "J",
      "total": "5",
      "libelle": "[62] Programmation, conseil et autres activit\u00e9s informatiques ",
      "hasChildren": false,
      "children": [{
        "code": "620",
        "total": "5",
        "libelle": "[620] Programmation, conseil et autres activit\u00e9s informatiques ",
        "hasChildren": true,
        "children": [{
          "code": "6201",
          "total": "4",
          "libelle": "[6201] Programmation informatique ",
          "hasChildren": true,
          "children": [{
            "code": "6201Z",
            "libelle": "[6201Z] Programmation informatique "
          }]
        },
        {
          "code": "6202",
          "total": "1",
          "libelle": "[6202] Conseil informatique ",
          "hasChildren": true,
          "children": [{
            "code": "6202A",
            "libelle": "[6202A] Conseil en syst\u00e8mes et logiciels informatiques "
          },
          {
            "code": "6202B",
            "libelle": "[6202B] Tierce maintenance de syst\u00e8mes et d'applications informatiques "
          }]
        },
        {
          "code": "6203",
          "total": "0",
          "libelle": "[6203] Gestion d'installations informatiques ",
          "hasChildren": true,
          "children": [{
            "code": "6203Z",
            "libelle": "[6203Z] Gestion d'installations informatiques "
          }]
        },
        {
          "code": "6209",
          "total": "0",
          "libelle": "[6209] Autres activit\u00e9s informatiques ",
          "hasChildren": true,
          "children": [{
            "code": "6209Z",
            "libelle": "[6209Z] Autres activit\u00e9s informatiques "
          }]
        }]
      }]
    },
    {
      "code": "63",
      "code_section": "J",
      "total": "3",
      "libelle": "[63] Services d'information ",
      "hasChildren": false,
      "children": [{
        "code": "631",
        "total": "3",
        "libelle": "[631] Traitement de donn\u00e9es, h\u00e9bergement et activit\u00e9s connexes ; portails Internet ",
        "hasChildren": true,
        "children": [{
          "code": "6311",
          "total": "3",
          "libelle": "[6311] Traitement de donn\u00e9es, h\u00e9bergement et activit\u00e9s connexes ",
          "hasChildren": true,
          "children": [{
            "code": "6311Z",
            "libelle": "[6311Z] Traitement de donn\u00e9es, h\u00e9bergement et activit\u00e9s connexes "
          }]
        },
        {
          "code": "6312",
          "total": "0",
          "libelle": "[6312] Portails Internet ",
          "hasChildren": true,
          "children": [{
            "code": "6312Z",
            "libelle": "[6312Z] Portails Internet "
          }]
        }]
      },
      {
        "code": "639",
        "total": "0",
        "libelle": "[639] Autres services d'information ",
        "hasChildren": true,
        "children": [{
          "code": "6391",
          "total": "0",
          "libelle": "[6391] Activit\u00e9s des agences de presse ",
          "hasChildren": true,
          "children": [{
            "code": "6391Z",
            "libelle": "[6391Z] Activit\u00e9s des agences de presse "
          }]
        },
        {
          "code": "6399",
          "total": "0",
          "libelle": "[6399] Autres services d'information n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "6399Z",
            "libelle": "[6399Z] Autres services d'information n.c.a. "
          }]
        }]
      }]
    }]
  },
  {
    "code": "K",
    "total": "85",
    "libelle": "[K] Activit\u00e9s financi\u00e8res et d'assurance ",
    "hasChildren": true,
    "children": [{
      "code": "64",
      "code_section": "K",
      "total": "50",
      "libelle": "[64] Activit\u00e9s des services financiers, hors assurance et caisses de retraite",
      "hasChildren": false,
      "children": [{
        "code": "641",
        "total": "36",
        "libelle": "[641] Interm\u00e9diation mon\u00e9taire (36)",
        "hasChildren": true,
        "children": [{
          "code": "6411",
          "total": "1",
          "libelle": "[6411] Activit\u00e9s de banque centrale ",
          "hasChildren": true,
          "children": [{
            "code": "6411Z",
            "libelle": "[6411Z] Activit\u00e9s de banque centrale "
          }]
        },
        {
          "code": "6419",
          "total": "35",
          "libelle": "[6419] Autres interm\u00e9diations mon\u00e9taires",
          "hasChildren": true,
          "children": [{
            "code": "6419Z",
            "libelle": "[6419Z] Autres interm\u00e9diations mon\u00e9taires"
          }]
        }]
      },
      {
        "code": "642",
        "total": "12",
        "libelle": "[642] Activit\u00e9s des soci\u00e9t\u00e9s holding ",
        "hasChildren": true,
        "children": [{
          "code": "6420",
          "total": "12",
          "libelle": "[6420] Activit\u00e9s des soci\u00e9t\u00e9s holding ",
          "hasChildren": true,
          "children": [{
            "code": "6420Z",
            "libelle": "[6420Z] Activit\u00e9s des soci\u00e9t\u00e9s holding "
          }]
        }]
      },
      {
        "code": "643",
        "total": "0",
        "libelle": "[643] Fonds de placement et entit\u00e9s financi\u00e8res similaires ",
        "hasChildren": true,
        "children": [{
          "code": "6430",
          "total": "0",
          "libelle": "[6430] Fonds de placement et entit\u00e9s financi\u00e8res similaires ",
          "hasChildren": true,
          "children": [{
            "code": "6430Z",
            "libelle": "[6430Z] Fonds de placement et entit\u00e9s financi\u00e8res similaires "
          }]
        }]
      },
      {
        "code": "649",
        "total": "2",
        "libelle": "[649] Autres activit\u00e9s des services financiers, hors assurance et caisses de retraite ",
        "hasChildren": true,
        "children": [{
          "code": "6491",
          "total": "0",
          "libelle": "[6491] Cr\u00e9dit-bail ",
          "hasChildren": true,
          "children": [{
            "code": "6491Z",
            "libelle": "[6491Z] Cr\u00e9dit-bail "
          }]
        },
        {
          "code": "6492",
          "total": "2",
          "libelle": "[6492] Autre distribution de cr\u00e9dit ",
          "hasChildren": true,
          "children": [{
            "code": "6492Z",
            "libelle": "[6492Z] Autre distribution de cr\u00e9dit "
          }]
        },
        {
          "code": "6499",
          "total": "0",
          "libelle": "[6499] Autres activit\u00e9s des services financiers, hors assurance et caisses de retraite, n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "6499Z",
            "libelle": "[6499Z] Autres activit\u00e9s des services financiers, hors assurance et caisses de retraite, n.c.a. "
          }]
        }]
      }]
    },
    {
      "code": "65",
      "code_section": "K",
      "total": "13",
      "libelle": "[65] Assurance ",
      "hasChildren": false,
      "children": [{
        "code": "651",
        "total": "13",
        "libelle": "[651] Assurance ",
        "hasChildren": true,
        "children": [{
          "code": "6511",
          "total": "0",
          "libelle": "[6511] Assurance vie ",
          "hasChildren": true,
          "children": [{
            "code": "6511Z",
            "libelle": "[6511Z] Assurance vie "
          }]
        },
        {
          "code": "6512",
          "total": "13",
          "libelle": "[6512] Autres assurances ",
          "hasChildren": true,
          "children": [{
            "code": "6512Z",
            "libelle": "[6512Z] Autres assurances "
          }]
        }]
      },
      {
        "code": "652",
        "total": "0",
        "libelle": "[652] R\u00e9assurance ",
        "hasChildren": true,
        "children": [{
          "code": "6520",
          "total": "0",
          "libelle": "[6520] R\u00e9assurance ",
          "hasChildren": true,
          "children": [{
            "code": "6520Z",
            "libelle": "[6520Z] R\u00e9assurance "
          }]
        }]
      },
      {
        "code": "653",
        "total": "0",
        "libelle": "[653] Caisses de retraite ",
        "hasChildren": true,
        "children": [{
          "code": "6530",
          "total": "0",
          "libelle": "[6530] Caisses de retraite ",
          "hasChildren": true,
          "children": [{
            "code": "6530Z",
            "libelle": "[6530Z] Caisses de retraite "
          }]
        }]
      }]
    },
    {
      "code": "66",
      "code_section": "K",
      "total": "22",
      "libelle": "[66] Activit\u00e9s auxiliaires de services financiers et d'assurance ",
      "hasChildren": false,
      "children": [{
        "code": "661",
        "total": "8",
        "libelle": "[661] Activit\u00e9s auxiliaires de services financiers, hors assurance et caisses de retraite ",
        "hasChildren": true,
        "children": [{
          "code": "6611",
          "total": "0",
          "libelle": "[6611] Administration de march\u00e9s financiers ",
          "hasChildren": true,
          "children": [{
            "code": "6611Z",
            "libelle": "[6611Z] Administration de march\u00e9s financiers "
          }]
        },
        {
          "code": "6612",
          "total": "0",
          "libelle": "[6612] Courtage de valeurs mobili\u00e8res et de marchandises ",
          "hasChildren": true,
          "children": [{
            "code": "6612Z",
            "libelle": "[6612Z] Courtage de valeurs mobili\u00e8res et de marchandises "
          }]
        },
        {
          "code": "6619",
          "total": "8",
          "libelle": "[6619] Autres activit\u00e9s auxiliaires de services financiers, hors assurance et caisses de retraite ",
          "hasChildren": true,
          "children": [{
            "code": "6619A",
            "libelle": "[6619A] Supports juridiques de gestion de patrimoine mobilier "
          },
          {
            "code": "6619B",
            "libelle": "[6619B] Autres activit\u00e9s auxiliaires de services financiers, hors assurance et caisses de retraite, n.c.a. "
          }]
        }]
      },
      {
        "code": "662",
        "total": "13",
        "libelle": "[662] Activit\u00e9s auxiliaires d'assurance et de caisses de retraite ",
        "hasChildren": true,
        "children": [{
          "code": "6621",
          "total": "2",
          "libelle": "[6621] \u00c9valuation des risques et dommages ",
          "hasChildren": true,
          "children": [{
            "code": "6621Z",
            "libelle": "[6621Z] \u00c9valuation des risques et dommages "
          }]
        },
        {
          "code": "6622",
          "total": "11",
          "libelle": "[6622] Activit\u00e9s des agents et courtiers d'assurances ",
          "hasChildren": true,
          "children": [{
            "code": "6622Z",
            "libelle": "[6622Z] Activit\u00e9s des agents et courtiers d'assurances "
          }]
        },
        {
          "code": "6629",
          "total": "0",
          "libelle": "[6629] Autres activit\u00e9s auxiliaires d'assurance et de caisses de retraite ",
          "hasChildren": true,
          "children": [{
            "code": "6629Z",
            "libelle": "[6629Z] Autres activit\u00e9s auxiliaires d'assurance et de caisses de retraite "
          }]
        }]
      },
      {
        "code": "663",
        "total": "1",
        "libelle": "[663] Gestion de fonds ",
        "hasChildren": true,
        "children": [{
          "code": "6630",
          "total": "1",
          "libelle": "[6630] Gestion de fonds ",
          "hasChildren": true,
          "children": [{
            "code": "6630Z",
            "libelle": "[6630Z] Gestion de fonds "
          }]
        }]
      }]
    }]
  },
  {
    "code": "L",
    "total": "36",
    "libelle": "[L] Activit\u00e9s immobili\u00e8res",
    "hasChildren": true,
    "children": [{
      "code": "68",
      "code_section": "L",
      "total": "36",
      "libelle": "[68] Activit\u00e9s immobili\u00e8res",
      "hasChildren": false,
      "children": [{
        "code": "681",
        "total": "0",
        "libelle": "[681] Activit\u00e9s des marchands de biens immobiliers ",
        "hasChildren": true,
        "children": [{
          "code": "6810",
          "total": "0",
          "libelle": "[6810] Activit\u00e9s des marchands de biens immobiliers ",
          "hasChildren": true,
          "children": [{
            "code": "6810Z",
            "libelle": "[6810Z] Activit\u00e9s des marchands de biens immobiliers "
          }]
        }]
      },
      {
        "code": "682",
        "total": "13",
        "libelle": "[682] Location et exploitation de biens immobiliers propres ou lou\u00e9s ",
        "hasChildren": true,
        "children": [{
          "code": "6820",
          "total": "13",
          "libelle": "[6820] Location et exploitation de biens immobiliers propres ou lou\u00e9s ",
          "hasChildren": true,
          "children": [{
            "code": "6820A",
            "libelle": "[6820A] Location de logements "
          },
          {
            "code": "6820B",
            "libelle": "[6820B] Location de terrains et d'autres biens immobiliers "
          }]
        }]
      },
      {
        "code": "683",
        "total": "23",
        "libelle": "[683] Activit\u00e9s immobili\u00e8res pour compte de tiers ",
        "hasChildren": true,
        "children": [{
          "code": "6831",
          "total": "20",
          "libelle": "[6831] Agences immobili\u00e8res",
          "hasChildren": true,
          "children": [{
            "code": "6831Z",
            "libelle": "[6831Z] Agences immobili\u00e8res"
          }]
        },
        {
          "code": "6832",
          "total": "3",
          "libelle": "[6832] Administration de biens immobiliers ",
          "hasChildren": true,
          "children": [{
            "code": "6832A",
            "libelle": "[6832A] Administration d'immeubles et autres biens immobiliers "
          },
          {
            "code": "6832B",
            "libelle": "[6832B] Supports juridiques de gestion de patrimoine immobilier "
          }]
        }]
      }]
    }]
  },
  {
    "code": "M",
    "total": "126",
    "libelle": "[M] Activit\u00e9s sp\u00e9cialis\u00e9es, scientifiques et techniques",
    "hasChildren": true,
    "children": [{
      "code": "69",
      "code_section": "M",
      "total": "42",
      "libelle": "[69] Activit\u00e9s juridiques et comptables",
      "hasChildren": false,
      "children": [{
        "code": "691",
        "total": "19",
        "libelle": "[691] Activit\u00e9s juridiques ",
        "hasChildren": true,
        "children": [{
          "code": "6910",
          "total": "19",
          "libelle": "[6910] Activit\u00e9s juridiques ",
          "hasChildren": true,
          "children": [{
            "code": "6910Z",
            "libelle": "[6910Z] Activit\u00e9s juridiques "
          }]
        }]
      },
      {
        "code": "692",
        "total": "23",
        "libelle": "[692] Activit\u00e9s comptables ",
        "hasChildren": true,
        "children": [{
          "code": "6920",
          "total": "23",
          "libelle": "[6920] Activit\u00e9s comptables ",
          "hasChildren": true,
          "children": [{
            "code": "6920Z",
            "libelle": "[6920Z] Activit\u00e9s comptables "
          }]
        }]
      }]
    },
    {
      "code": "70",
      "code_section": "M",
      "total": "28",
      "libelle": "[70] Activit\u00e9s des si\u00e8ges sociaux ; conseil de gestion",
      "hasChildren": false,
      "children": [{
        "code": "701",
        "total": "14",
        "libelle": "[701] Activit\u00e9s des si\u00e8ges sociaux ",
        "hasChildren": true,
        "children": [{
          "code": "7010",
          "total": "14",
          "libelle": "[7010] Activit\u00e9s des si\u00e8ges sociaux ",
          "hasChildren": true,
          "children": [{
            "code": "7010Z",
            "libelle": "[7010Z] Activit\u00e9s des si\u00e8ges sociaux "
          }]
        }]
      },
      {
        "code": "702",
        "total": "14",
        "libelle": "[702] Conseil de gestion ",
        "hasChildren": true,
        "children": [{
          "code": "7021",
          "total": "1",
          "libelle": "[7021] Conseil en relations publiques et communication ",
          "hasChildren": true,
          "children": [{
            "code": "7021Z",
            "libelle": "[7021Z] Conseil en relations publiques et communication "
          }]
        },
        {
          "code": "7022",
          "total": "13",
          "libelle": "[7022] Conseil pour les affaires et autres conseils de gestion ",
          "hasChildren": true,
          "children": [{
            "code": "7022Z",
            "libelle": "[7022Z] Conseil pour les affaires et autres conseils de gestion "
          }]
        }]
      }]
    },
    {
      "code": "71",
      "code_section": "M",
      "total": "31",
      "libelle": "[71] Activit\u00e9s d'architecture et d'ing\u00e9nierie ; activit\u00e9s de contr\u00f4le et analyses techniques",
      "hasChildren": false,
      "children": [{
        "code": "711",
        "total": "26",
        "libelle": "[711] Activit\u00e9s d'architecture et d'ing\u00e9nierie",
        "hasChildren": true,
        "children": [{
          "code": "7111",
          "total": "6",
          "libelle": "[7111] Activit\u00e9s d'architecture ",
          "hasChildren": true,
          "children": [{
            "code": "7111Z",
            "libelle": "[7111Z] Activit\u00e9s d'architecture "
          }]
        },
        {
          "code": "7112",
          "total": "20",
          "libelle": "[7112] Activit\u00e9s d'ing\u00e9nierie",
          "hasChildren": true,
          "children": [{
            "code": "7112A",
            "libelle": "[7112A] Activit\u00e9 des g\u00e9om\u00e8tres "
          },
          {
            "code": "7112B",
            "libelle": "[7112B] Ing\u00e9nierie, \u00e9tudes techniques"
          }]
        }]
      },
      {
        "code": "712",
        "total": "5",
        "libelle": "[712] Activit\u00e9s de contr\u00f4le et analyses techniques ",
        "hasChildren": true,
        "children": [{
          "code": "7120",
          "total": "5",
          "libelle": "[7120] Activit\u00e9s de contr\u00f4le et analyses techniques ",
          "hasChildren": true,
          "children": [{
            "code": "7120A",
            "libelle": "[7120A] Contr\u00f4le technique automobile "
          },
          {
            "code": "7120B",
            "libelle": "[7120B] Analyses, essais et inspections techniques "
          }]
        }]
      }]
    },
    {
      "code": "72",
      "code_section": "M",
      "total": "5",
      "libelle": "[72] Recherche-d\u00e9veloppement scientifique ",
      "hasChildren": false,
      "children": [{
        "code": "721",
        "total": "5",
        "libelle": "[721] Recherche-d\u00e9veloppement en sciences physiques et naturelles ",
        "hasChildren": true,
        "children": [{
          "code": "7211",
          "total": "1",
          "libelle": "[7211] Recherche-d\u00e9veloppement en biotechnologie ",
          "hasChildren": true,
          "children": [{
            "code": "7211Z",
            "libelle": "[7211Z] Recherche-d\u00e9veloppement en biotechnologie "
          }]
        },
        {
          "code": "7219",
          "total": "4",
          "libelle": "[7219] Recherche-d\u00e9veloppement en autres sciences physiques et naturelles ",
          "hasChildren": true,
          "children": [{
            "code": "7219Z",
            "libelle": "[7219Z] Recherche-d\u00e9veloppement en autres sciences physiques et naturelles "
          }]
        }]
      },
      {
        "code": "722",
        "total": "0",
        "libelle": "[722] Recherche-d\u00e9veloppement en sciences humaines et sociales ",
        "hasChildren": true,
        "children": [{
          "code": "7220",
          "total": "0",
          "libelle": "[7220] Recherche-d\u00e9veloppement en sciences humaines et sociales ",
          "hasChildren": true,
          "children": [{
            "code": "7220Z",
            "libelle": "[7220Z] Recherche-d\u00e9veloppement en sciences humaines et sociales "
          }]
        }]
      }]
    },
    {
      "code": "73",
      "code_section": "M",
      "total": "9",
      "libelle": "[73] Publicit\u00e9 et \u00e9tudes de march\u00e9 ",
      "hasChildren": false,
      "children": [{
        "code": "731",
        "total": "9",
        "libelle": "[731] Publicit\u00e9 ",
        "hasChildren": true,
        "children": [{
          "code": "7311",
          "total": "8",
          "libelle": "[7311] Activit\u00e9s des agences de publicit\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "7311Z",
            "libelle": "[7311Z] Activit\u00e9s des agences de publicit\u00e9 "
          }]
        },
        {
          "code": "7312",
          "total": "1",
          "libelle": "[7312] R\u00e9gie publicitaire de m\u00e9dias ",
          "hasChildren": true,
          "children": [{
            "code": "7312Z",
            "libelle": "[7312Z] R\u00e9gie publicitaire de m\u00e9dias "
          }]
        }]
      },
      {
        "code": "732",
        "total": "0",
        "libelle": "[732] \u00c9tudes de march\u00e9 et sondages ",
        "hasChildren": true,
        "children": [{
          "code": "7320",
          "total": "0",
          "libelle": "[7320] \u00c9tudes de march\u00e9 et sondages ",
          "hasChildren": true,
          "children": [{
            "code": "7320Z",
            "libelle": "[7320Z] \u00c9tudes de march\u00e9 et sondages "
          }]
        }]
      }]
    },
    {
      "code": "74",
      "code_section": "M",
      "total": "5",
      "libelle": "[74] Autres activit\u00e9s sp\u00e9cialis\u00e9es, scientifiques et techniques ",
      "hasChildren": false,
      "children": [{
        "code": "741",
        "total": "0",
        "libelle": "[741] Activit\u00e9s sp\u00e9cialis\u00e9es de design ",
        "hasChildren": true,
        "children": [{
          "code": "7410",
          "total": "0",
          "libelle": "[7410] Activit\u00e9s sp\u00e9cialis\u00e9es de design ",
          "hasChildren": true,
          "children": [{
            "code": "7410Z",
            "libelle": "[7410Z] Activit\u00e9s sp\u00e9cialis\u00e9es de design "
          }]
        }]
      },
      {
        "code": "742",
        "total": "1",
        "libelle": "[742] Activit\u00e9s photographiques ",
        "hasChildren": true,
        "children": [{
          "code": "7420",
          "total": "1",
          "libelle": "[7420] Activit\u00e9s photographiques ",
          "hasChildren": true,
          "children": [{
            "code": "7420Z",
            "libelle": "[7420Z] Activit\u00e9s photographiques "
          }]
        }]
      },
      {
        "code": "743",
        "total": "0",
        "libelle": "[743] Traduction et interpr\u00e9tation ",
        "hasChildren": true,
        "children": [{
          "code": "7430",
          "total": "0",
          "libelle": "[7430] Traduction et interpr\u00e9tation ",
          "hasChildren": true,
          "children": [{
            "code": "7430Z",
            "libelle": "[7430Z] Traduction et interpr\u00e9tation "
          }]
        }]
      },
      {
        "code": "749",
        "total": "4",
        "libelle": "[749] Autres activit\u00e9s sp\u00e9cialis\u00e9es, scientifiques et techniques n.c.a. ",
        "hasChildren": true,
        "children": [{
          "code": "7490",
          "total": "4",
          "libelle": "[7490] Autres activit\u00e9s sp\u00e9cialis\u00e9es, scientifiques et techniques n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "7490A",
            "libelle": "[7490A] Activit\u00e9 des \u00e9conomistes de la construction "
          },
          {
            "code": "7490B",
            "libelle": "[7490B] Activit\u00e9s sp\u00e9cialis\u00e9es, scientifiques et techniques diverses "
          }]
        }]
      }]
    },
    {
      "code": "75",
      "code_section": "M",
      "total": "6",
      "libelle": "[75] Activit\u00e9s v\u00e9t\u00e9rinaires ",
      "hasChildren": false,
      "children": [{
        "code": "750",
        "total": "6",
        "libelle": "[750] Activit\u00e9s v\u00e9t\u00e9rinaires ",
        "hasChildren": true,
        "children": [{
          "code": "7500",
          "total": "6",
          "libelle": "[7500] Activit\u00e9s v\u00e9t\u00e9rinaires ",
          "hasChildren": true,
          "children": [{
            "code": "7500Z",
            "libelle": "[7500Z] Activit\u00e9s v\u00e9t\u00e9rinaires "
          }]
        }]
      }]
    }]
  },
  {
    "code": "N",
    "total": "91",
    "libelle": "[N] Activit\u00e9s de services administratifs et de soutien",
    "hasChildren": true,
    "children": [{
      "code": "77",
      "code_section": "N",
      "total": "10",
      "libelle": "[77] Activit\u00e9s de location et location-bail ",
      "hasChildren": false,
      "children": [{
        "code": "771",
        "total": "3",
        "libelle": "[771] Location et location-bail de v\u00e9hicules automobiles ",
        "hasChildren": true,
        "children": [{
          "code": "7711",
          "total": "2",
          "libelle": "[7711] Location et location-bail de voitures et de v\u00e9hicules automobiles l\u00e9gers ",
          "hasChildren": true,
          "children": [{
            "code": "7711A",
            "libelle": "[7711A] Location de courte dur\u00e9e de voitures et de v\u00e9hicules automobiles l\u00e9gers "
          },
          {
            "code": "7711B",
            "libelle": "[7711B] Location de longue dur\u00e9e de voitures et de v\u00e9hicules automobiles l\u00e9gers "
          }]
        },
        {
          "code": "7712",
          "total": "1",
          "libelle": "[7712] Location et location-bail de camions ",
          "hasChildren": true,
          "children": [{
            "code": "7712Z",
            "libelle": "[7712Z] Location et location-bail de camions "
          }]
        }]
      },
      {
        "code": "772",
        "total": "2",
        "libelle": "[772] Location et location-bail de biens personnels et domestiques ",
        "hasChildren": true,
        "children": [{
          "code": "7721",
          "total": "0",
          "libelle": "[7721] Location et location-bail d'articles de loisirs et de sport ",
          "hasChildren": true,
          "children": [{
            "code": "7721Z",
            "libelle": "[7721Z] Location et location-bail d'articles de loisirs et de sport "
          }]
        },
        {
          "code": "7722",
          "total": "0",
          "libelle": "[7722] Location de vid\u00e9ocassettes et disques vid\u00e9o ",
          "hasChildren": true,
          "children": [{
            "code": "7722Z",
            "libelle": "[7722Z] Location de vid\u00e9ocassettes et disques vid\u00e9o "
          }]
        },
        {
          "code": "7729",
          "total": "2",
          "libelle": "[7729] Location et location-bail d'autres biens personnels et domestiques ",
          "hasChildren": true,
          "children": [{
            "code": "7729Z",
            "libelle": "[7729Z] Location et location-bail d'autres biens personnels et domestiques "
          }]
        }]
      },
      {
        "code": "773",
        "total": "5",
        "libelle": "[773] Location et location-bail d'autres machines, \u00e9quipements et biens ",
        "hasChildren": true,
        "children": [{
          "code": "7731",
          "total": "0",
          "libelle": "[7731] Location et location-bail de machines et \u00e9quipements agricoles ",
          "hasChildren": true,
          "children": [{
            "code": "7731Z",
            "libelle": "[7731Z] Location et location-bail de machines et \u00e9quipements agricoles "
          }]
        },
        {
          "code": "7732",
          "total": "5",
          "libelle": "[7732] Location et location-bail de machines et \u00e9quipements pour la construction ",
          "hasChildren": true,
          "children": [{
            "code": "7732Z",
            "libelle": "[7732Z] Location et location-bail de machines et \u00e9quipements pour la construction "
          }]
        },
        {
          "code": "7733",
          "total": "0",
          "libelle": "[7733] Location et location-bail de machines de bureau et de mat\u00e9riel informatique ",
          "hasChildren": true,
          "children": [{
            "code": "7733Z",
            "libelle": "[7733Z] Location et location-bail de machines de bureau et de mat\u00e9riel informatique "
          }]
        },
        {
          "code": "7734",
          "total": "0",
          "libelle": "[7734] Location et location-bail de mat\u00e9riels de transport par eau ",
          "hasChildren": true,
          "children": [{
            "code": "7734Z",
            "libelle": "[7734Z] Location et location-bail de mat\u00e9riels de transport par eau "
          }]
        },
        {
          "code": "7735",
          "total": "0",
          "libelle": "[7735] Location et location-bail de mat\u00e9riels de transport a\u00e9rien ",
          "hasChildren": true,
          "children": [{
            "code": "7735Z",
            "libelle": "[7735Z] Location et location-bail de mat\u00e9riels de transport a\u00e9rien "
          }]
        },
        {
          "code": "7739",
          "total": "0",
          "libelle": "[7739] Location et location-bail d'autres machines, \u00e9quipements et biens mat\u00e9riels n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "7739Z",
            "libelle": "[7739Z] Location et location-bail d'autres machines, \u00e9quipements et biens mat\u00e9riels n.c.a. "
          }]
        }]
      },
      {
        "code": "774",
        "total": "0",
        "libelle": "[774] Location-bail de propri\u00e9t\u00e9 intellectuelle et de produits similaires, \u00e0 l'exception des \u0153uvres soumises \u00e0 copyright ",
        "hasChildren": true,
        "children": [{
          "code": "7740",
          "total": "0",
          "libelle": "[7740] Location-bail de propri\u00e9t\u00e9 intellectuelle et de produits similaires, \u00e0 l'exception des \u0153uvres soumises \u00e0 copyright ",
          "hasChildren": true,
          "children": [{
            "code": "7740Z",
            "libelle": "[7740Z] Location-bail de propri\u00e9t\u00e9 intellectuelle et de produits similaires, \u00e0 l'exception des \u0153uvres soumises \u00e0 copyright "
          }]
        }]
      }]
    },
    {
      "code": "78",
      "code_section": "N",
      "total": "27",
      "libelle": "[78] Activit\u00e9s li\u00e9es \u00e0 l'emploi",
      "hasChildren": false,
      "children": [{
        "code": "781",
        "total": "1",
        "libelle": "[781] Activit\u00e9s des agences de placement de main-d'\u0153uvre ",
        "hasChildren": true,
        "children": [{
          "code": "7810",
          "total": "1",
          "libelle": "[7810] Activit\u00e9s des agences de placement de main-d'\u0153uvre ",
          "hasChildren": true,
          "children": [{
            "code": "7810Z",
            "libelle": "[7810Z] Activit\u00e9s des agences de placement de main-d'\u0153uvre "
          }]
        }]
      },
      {
        "code": "782",
        "total": "13",
        "libelle": "[782] Activit\u00e9s des agences de travail temporaire ",
        "hasChildren": true,
        "children": [{
          "code": "7820",
          "total": "13",
          "libelle": "[7820] Activit\u00e9s des agences de travail temporaire ",
          "hasChildren": true,
          "children": [{
            "code": "7820Z",
            "libelle": "[7820Z] Activit\u00e9s des agences de travail temporaire "
          }]
        }]
      },
      {
        "code": "783",
        "total": "13",
        "libelle": "[783] Autre mise \u00e0 disposition de ressources humaines ",
        "hasChildren": true,
        "children": [{
          "code": "7830",
          "total": "13",
          "libelle": "[7830] Autre mise \u00e0 disposition de ressources humaines ",
          "hasChildren": true,
          "children": [{
            "code": "7830Z",
            "libelle": "[7830Z] Autre mise \u00e0 disposition de ressources humaines "
          }]
        }]
      }]
    },
    {
      "code": "79",
      "code_section": "N",
      "total": "5",
      "libelle": "[79] Activit\u00e9s des agences de voyage, voyagistes, services de r\u00e9servation et activit\u00e9s connexes ",
      "hasChildren": false,
      "children": [{
        "code": "791",
        "total": "3",
        "libelle": "[791] Activit\u00e9s des agences de voyage et voyagistes ",
        "hasChildren": true,
        "children": [{
          "code": "7911",
          "total": "3",
          "libelle": "[7911] Activit\u00e9s des agences de voyage ",
          "hasChildren": true,
          "children": [{
            "code": "7911Z",
            "libelle": "[7911Z] Activit\u00e9s des agences de voyage "
          }]
        },
        {
          "code": "7912",
          "total": "0",
          "libelle": "[7912] Activit\u00e9s des voyagistes ",
          "hasChildren": true,
          "children": [{
            "code": "7912Z",
            "libelle": "[7912Z] Activit\u00e9s des voyagistes "
          }]
        }]
      },
      {
        "code": "799",
        "total": "2",
        "libelle": "[799] Autres services de r\u00e9servation et activit\u00e9s connexes ",
        "hasChildren": true,
        "children": [{
          "code": "7990",
          "total": "2",
          "libelle": "[7990] Autres services de r\u00e9servation et activit\u00e9s connexes ",
          "hasChildren": true,
          "children": [{
            "code": "7990Z",
            "libelle": "[7990Z] Autres services de r\u00e9servation et activit\u00e9s connexes "
          }]
        }]
      }]
    },
    {
      "code": "80",
      "code_section": "N",
      "total": "6",
      "libelle": "[80] Enqu\u00eates et s\u00e9curit\u00e9 ",
      "hasChildren": false,
      "children": [{
        "code": "801",
        "total": "6",
        "libelle": "[801] Activit\u00e9s de s\u00e9curit\u00e9 priv\u00e9e ",
        "hasChildren": true,
        "children": [{
          "code": "8010",
          "total": "6",
          "libelle": "[8010] Activit\u00e9s de s\u00e9curit\u00e9 priv\u00e9e ",
          "hasChildren": true,
          "children": [{
            "code": "8010Z",
            "libelle": "[8010Z] Activit\u00e9s de s\u00e9curit\u00e9 priv\u00e9e "
          }]
        }]
      },
      {
        "code": "802",
        "total": "0",
        "libelle": "[802] Activit\u00e9s li\u00e9es aux syst\u00e8mes de s\u00e9curit\u00e9 ",
        "hasChildren": true,
        "children": [{
          "code": "8020",
          "total": "0",
          "libelle": "[8020] Activit\u00e9s li\u00e9es aux syst\u00e8mes de s\u00e9curit\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "8020Z",
            "libelle": "[8020Z] Activit\u00e9s li\u00e9es aux syst\u00e8mes de s\u00e9curit\u00e9 "
          }]
        }]
      },
      {
        "code": "803",
        "total": "0",
        "libelle": "[803] Activit\u00e9s d'enqu\u00eate ",
        "hasChildren": true,
        "children": [{
          "code": "8030",
          "total": "0",
          "libelle": "[8030] Activit\u00e9s d'enqu\u00eate ",
          "hasChildren": true,
          "children": [{
            "code": "8030Z",
            "libelle": "[8030Z] Activit\u00e9s d'enqu\u00eate "
          }]
        }]
      }]
    },
    {
      "code": "81",
      "code_section": "N",
      "total": "19",
      "libelle": "[81] Services relatifs aux b\u00e2timents et am\u00e9nagement paysager ",
      "hasChildren": false,
      "children": [{
        "code": "811",
        "total": "0",
        "libelle": "[811] Activit\u00e9s combin\u00e9es de soutien li\u00e9 aux b\u00e2timents ",
        "hasChildren": true,
        "children": [{
          "code": "8110",
          "total": "0",
          "libelle": "[8110] Activit\u00e9s combin\u00e9es de soutien li\u00e9 aux b\u00e2timents ",
          "hasChildren": true,
          "children": [{
            "code": "8110Z",
            "libelle": "[8110Z] Activit\u00e9s combin\u00e9es de soutien li\u00e9 aux b\u00e2timents "
          }]
        }]
      },
      {
        "code": "812",
        "total": "11",
        "libelle": "[812] Activit\u00e9s de nettoyage ",
        "hasChildren": true,
        "children": [{
          "code": "8121",
          "total": "7",
          "libelle": "[8121] Nettoyage courant des b\u00e2timents ",
          "hasChildren": true,
          "children": [{
            "code": "8121Z",
            "libelle": "[8121Z] Nettoyage courant des b\u00e2timents "
          }]
        },
        {
          "code": "8122",
          "total": "3",
          "libelle": "[8122] Autres activit\u00e9s de nettoyage des b\u00e2timents et nettoyage industriel ",
          "hasChildren": true,
          "children": [{
            "code": "8122Z",
            "libelle": "[8122Z] Autres activit\u00e9s de nettoyage des b\u00e2timents et nettoyage industriel "
          }]
        },
        {
          "code": "8129",
          "total": "1",
          "libelle": "[8129] Autres activit\u00e9s de nettoyage ",
          "hasChildren": true,
          "children": [{
            "code": "8129A",
            "libelle": "[8129A] D\u00e9sinfection, d\u00e9sinsectisation, d\u00e9ratisation "
          },
          {
            "code": "8129B",
            "libelle": "[8129B] Autres activit\u00e9s de nettoyage n.c.a. "
          }]
        }]
      },
      {
        "code": "813",
        "total": "8",
        "libelle": "[813] Services d'am\u00e9nagement paysager ",
        "hasChildren": true,
        "children": [{
          "code": "8130",
          "total": "8",
          "libelle": "[8130] Services d'am\u00e9nagement paysager ",
          "hasChildren": true,
          "children": [{
            "code": "8130Z",
            "libelle": "[8130Z] Services d'am\u00e9nagement paysager "
          }]
        }]
      }]
    },
    {
      "code": "82",
      "code_section": "N",
      "total": "24",
      "libelle": "[82] Activit\u00e9s administratives et autres activit\u00e9s de soutien aux entreprises",
      "hasChildren": false,
      "children": [{
        "code": "821",
        "total": "17",
        "libelle": "[821] Activit\u00e9s administratives",
        "hasChildren": true,
        "children": [{
          "code": "8211",
          "total": "0",
          "libelle": "[8211] Services administratifs combin\u00e9s de bureau ",
          "hasChildren": true,
          "children": [{
            "code": "8211Z",
            "libelle": "[8211Z] Services administratifs combin\u00e9s de bureau "
          }]
        },
        {
          "code": "8219",
          "total": "17",
          "libelle": "[8219] Photocopie, pr\u00e9paration de documents et autres activit\u00e9s sp\u00e9cialis\u00e9es de soutien de bureau",
          "hasChildren": true,
          "children": [{
            "code": "8219Z",
            "libelle": "[8219Z] Photocopie, pr\u00e9paration de documents et autres activit\u00e9s sp\u00e9cialis\u00e9es de soutien de bureau"
          }]
        }]
      },
      {
        "code": "822",
        "total": "0",
        "libelle": "[822] Activit\u00e9s de centres d'appels ",
        "hasChildren": true,
        "children": [{
          "code": "8220",
          "total": "0",
          "libelle": "[8220] Activit\u00e9s de centres d'appels ",
          "hasChildren": true,
          "children": [{
            "code": "8220Z",
            "libelle": "[8220Z] Activit\u00e9s de centres d'appels "
          }]
        }]
      },
      {
        "code": "823",
        "total": "0",
        "libelle": "[823] Organisation de salons professionnels et congr\u00e8s ",
        "hasChildren": true,
        "children": [{
          "code": "8230",
          "total": "0",
          "libelle": "[8230] Organisation de salons professionnels et congr\u00e8s ",
          "hasChildren": true,
          "children": [{
            "code": "8230Z",
            "libelle": "[8230Z] Organisation de foires, salons professionnels et congr\u00e8s "
          }]
        }]
      },
      {
        "code": "829",
        "total": "7",
        "libelle": "[829] Activit\u00e9s de soutien aux entreprises n.c.a. ",
        "hasChildren": true,
        "children": [{
          "code": "8291",
          "total": "0",
          "libelle": "[8291] Activit\u00e9s des agences de recouvrement de factures et des soci\u00e9t\u00e9s d'information financi\u00e8re sur la client\u00e8le ",
          "hasChildren": true,
          "children": [{
            "code": "8291Z",
            "libelle": "[8291Z] Activit\u00e9s des agences de recouvrement de factures et des soci\u00e9t\u00e9s d'information financi\u00e8re sur la client\u00e8le "
          }]
        },
        {
          "code": "8292",
          "total": "2",
          "libelle": "[8292] Activit\u00e9s de conditionnement ",
          "hasChildren": true,
          "children": [{
            "code": "8292Z",
            "libelle": "[8292Z] Activit\u00e9s de conditionnement "
          }]
        },
        {
          "code": "8299",
          "total": "5",
          "libelle": "[8299] Autres activit\u00e9s de soutien aux entreprises n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "8299Z",
            "libelle": "[8299Z] Autres activit\u00e9s de soutien aux entreprises n.c.a. "
          }]
        }]
      }]
    }]
  },
  {
    "code": "O",
    "total": "73",
    "libelle": "[O] Administration publique",
    "hasChildren": true,
    "children": [{
      "code": "84",
      "code_section": "O",
      "total": "73",
      "libelle": "[84] Administration publique et d\u00e9fense ; s\u00e9curit\u00e9 sociale obligatoire",
      "hasChildren": false,
      "children": [{
        "code": "841",
        "total": "57",
        "libelle": "[841] Administration g\u00e9n\u00e9rale, \u00e9conomique et sociale",
        "hasChildren": true,
        "children": [{
          "code": "8411",
          "total": "33",
          "libelle": "[8411] Administration publique g\u00e9n\u00e9rale ",
          "hasChildren": true,
          "children": [{
            "code": "8411Z",
            "libelle": "[8411Z] Administration publique g\u00e9n\u00e9rale "
          }]
        },
        {
          "code": "8412",
          "total": "10",
          "libelle": "[8412] Administration publique (tutelle) de la sant\u00e9, de la formation, de la culture et des services sociaux, autre que s\u00e9curit\u00e9 sociale ",
          "hasChildren": true,
          "children": [{
            "code": "8412Z",
            "libelle": "[8412Z] Administration publique (tutelle) de la sant\u00e9, de la formation, de la culture et des services sociaux, autre que s\u00e9curit\u00e9 sociale "
          }]
        },
        {
          "code": "8413",
          "total": "14",
          "libelle": "[8413] Administration publique (tutelle) des activit\u00e9s \u00e9conomiques ",
          "hasChildren": true,
          "children": [{
            "code": "8413Z",
            "libelle": "[8413Z] Administration publique (tutelle) des activit\u00e9s \u00e9conomiques "
          }]
        }]
      },
      {
        "code": "842",
        "total": "8",
        "libelle": "[842] Services de pr\u00e9rogative publique ",
        "hasChildren": true,
        "children": [{
          "code": "8421",
          "total": "0",
          "libelle": "[8421] Affaires \u00e9trang\u00e8res ",
          "hasChildren": true,
          "children": [{
            "code": "8421Z",
            "libelle": "[8421Z] Affaires \u00e9trang\u00e8res "
          }]
        },
        {
          "code": "8422",
          "total": "0",
          "libelle": "[8422] D\u00e9fense ",
          "hasChildren": true,
          "children": [{
            "code": "8422Z",
            "libelle": "[8422Z] D\u00e9fense "
          }]
        },
        {
          "code": "8423",
          "total": "5",
          "libelle": "[8423] Justice ",
          "hasChildren": true,
          "children": [{
            "code": "8423Z",
            "libelle": "[8423Z] Justice "
          }]
        },
        {
          "code": "8424",
          "total": "2",
          "libelle": "[8424] Activit\u00e9s d'ordre public et de s\u00e9curit\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "8424Z",
            "libelle": "[8424Z] Activit\u00e9s d'ordre public et de s\u00e9curit\u00e9 "
          }]
        },
        {
          "code": "8425",
          "total": "1",
          "libelle": "[8425] Services du feu et de secours ",
          "hasChildren": true,
          "children": [{
            "code": "8425Z",
            "libelle": "[8425Z] Services du feu et de secours "
          }]
        }]
      },
      {
        "code": "843",
        "total": "8",
        "libelle": "[843] S\u00e9curit\u00e9 sociale obligatoire ",
        "hasChildren": true,
        "children": [{
          "code": "8430",
          "total": "8",
          "libelle": "[8430] S\u00e9curit\u00e9 sociale obligatoire ",
          "hasChildren": true,
          "children": [{
            "code": "8430A",
            "libelle": "[8430A] Activit\u00e9s g\u00e9n\u00e9rales de s\u00e9curit\u00e9 sociale "
          },
          {
            "code": "8430B",
            "libelle": "[8430B] Gestion des retraites compl\u00e9mentaires "
          },
          {
            "code": "8430C",
            "libelle": "[8430C] Distribution sociale de revenus "
          }]
        }]
      }]
    }]
  },
  {
    "code": "P",
    "total": "97",
    "libelle": "[P] Enseignement",
    "hasChildren": true,
    "children": [{
      "code": "85",
      "code_section": "P",
      "total": "97",
      "libelle": "[85] Enseignement",
      "hasChildren": false,
      "children": [{
        "code": "851",
        "total": "19",
        "libelle": "[851] Enseignement pr\u00e9-primaire ",
        "hasChildren": true,
        "children": [{
          "code": "8510",
          "total": "19",
          "libelle": "[8510] Enseignement pr\u00e9-primaire ",
          "hasChildren": true,
          "children": [{
            "code": "8510Z",
            "libelle": "[8510Z] Enseignement pr\u00e9-primaire "
          }]
        }]
      },
      {
        "code": "852",
        "total": "41",
        "libelle": "[852] Enseignement primaire ",
        "hasChildren": true,
        "children": [{
          "code": "8520",
          "total": "41",
          "libelle": "[8520] Enseignement primaire ",
          "hasChildren": true,
          "children": [{
            "code": "8520Z",
            "libelle": "[8520Z] Enseignement primaire "
          }]
        }]
      },
      {
        "code": "853",
        "total": "17",
        "libelle": "[853] Enseignement secondaire",
        "hasChildren": true,
        "children": [{
          "code": "8531",
          "total": "13",
          "libelle": "[8531] Enseignement secondaire g\u00e9n\u00e9ral ",
          "hasChildren": true,
          "children": [{
            "code": "8531Z",
            "libelle": "[8531Z] Enseignement secondaire g\u00e9n\u00e9ral "
          }]
        },
        {
          "code": "8532",
          "total": "4",
          "libelle": "[8532] Enseignement secondaire technique ou professionnel ",
          "hasChildren": true,
          "children": [{
            "code": "8532Z",
            "libelle": "[8532Z] Enseignement secondaire technique ou professionnel "
          }]
        }]
      },
      {
        "code": "854",
        "total": "2",
        "libelle": "[854] Enseignement sup\u00e9rieur et post-secondaire non sup\u00e9rieur ",
        "hasChildren": true,
        "children": [{
          "code": "8541",
          "total": "0",
          "libelle": "[8541] Enseignement post-secondaire non sup\u00e9rieur ",
          "hasChildren": true,
          "children": [{
            "code": "8541Z",
            "libelle": "[8541Z] Enseignement post-secondaire non sup\u00e9rieur "
          }]
        },
        {
          "code": "8542",
          "total": "2",
          "libelle": "[8542] Enseignement sup\u00e9rieur ",
          "hasChildren": true,
          "children": [{
            "code": "8542Z",
            "libelle": "[8542Z] Enseignement sup\u00e9rieur "
          }]
        }]
      },
      {
        "code": "855",
        "total": "17",
        "libelle": "[855] Autres activit\u00e9s d'enseignement",
        "hasChildren": true,
        "children": [{
          "code": "8551",
          "total": "2",
          "libelle": "[8551] Enseignement de disciplines sportives et d'activit\u00e9s de loisirs ",
          "hasChildren": true,
          "children": [{
            "code": "8551Z",
            "libelle": "[8551Z] Enseignement de disciplines sportives et d'activit\u00e9s de loisirs "
          }]
        },
        {
          "code": "8552",
          "total": "0",
          "libelle": "[8552] Enseignement culturel ",
          "hasChildren": true,
          "children": [{
            "code": "8552Z",
            "libelle": "[8552Z] Enseignement culturel "
          }]
        },
        {
          "code": "8553",
          "total": "5",
          "libelle": "[8553] Enseignement de la conduite ",
          "hasChildren": true,
          "children": [{
            "code": "8553Z",
            "libelle": "[8553Z] Enseignement de la conduite "
          }]
        },
        {
          "code": "8559",
          "total": "10",
          "libelle": "[8559] Enseignements divers ",
          "hasChildren": true,
          "children": [{
            "code": "8559A",
            "libelle": "[8559A] Formation continue d'adultes "
          },
          {
            "code": "8559B",
            "libelle": "[8559B] Autres enseignements "
          }]
        }]
      },
      {
        "code": "856",
        "total": "1",
        "libelle": "[856] Activit\u00e9s de soutien \u00e0 l'enseignement ",
        "hasChildren": true,
        "children": [{
          "code": "8560",
          "total": "1",
          "libelle": "[8560] Activit\u00e9s de soutien \u00e0 l'enseignement ",
          "hasChildren": true,
          "children": [{
            "code": "8560Z",
            "libelle": "[8560Z] Activit\u00e9s de soutien \u00e0 l'enseignement "
          }]
        }]
      }]
    }]
  },
  {
    "code": "Q",
    "total": "152",
    "libelle": "[Q] Sant\u00e9 humaine et action sociale",
    "hasChildren": true,
    "children": [{
      "code": "86",
      "code_section": "Q",
      "total": "75",
      "libelle": "[86] Activit\u00e9s pour la sant\u00e9 humaine",
      "hasChildren": false,
      "children": [{
        "code": "861",
        "total": "13",
        "libelle": "[861] Activit\u00e9s hospitali\u00e8res ",
        "hasChildren": true,
        "children": [{
          "code": "8610",
          "total": "13",
          "libelle": "[8610] Activit\u00e9s hospitali\u00e8res ",
          "hasChildren": true,
          "children": [{
            "code": "8610Z",
            "libelle": "[8610Z] Activit\u00e9s hospitali\u00e8res "
          }]
        }]
      },
      {
        "code": "862",
        "total": "42",
        "libelle": "[862] Activit\u00e9 des m\u00e9decins et des dentistes",
        "hasChildren": true,
        "children": [{
          "code": "8621",
          "total": "19",
          "libelle": "[8621] Activit\u00e9 des m\u00e9decins g\u00e9n\u00e9ralistes ",
          "hasChildren": true,
          "children": [{
            "code": "8621Z",
            "libelle": "[8621Z] Activit\u00e9 des m\u00e9decins g\u00e9n\u00e9ralistes "
          }]
        },
        {
          "code": "8622",
          "total": "17",
          "libelle": "[8622] Activit\u00e9 des m\u00e9decins sp\u00e9cialistes",
          "hasChildren": true,
          "children": [{
            "code": "8622A",
            "libelle": "[8622A] Activit\u00e9s de radiodiagnostic et de radioth\u00e9rapie "
          },
          {
            "code": "8622B",
            "libelle": "[8622B] Activit\u00e9s chirurgicales "
          },
          {
            "code": "8622C",
            "libelle": "[8622C] Autres activit\u00e9s des m\u00e9decins sp\u00e9cialistes"
          }]
        },
        {
          "code": "8623",
          "total": "6",
          "libelle": "[8623] Pratique dentaire ",
          "hasChildren": true,
          "children": [{
            "code": "8623Z",
            "libelle": "[8623Z] Pratique dentaire "
          }]
        }]
      },
      {
        "code": "869",
        "total": "20",
        "libelle": "[869] Autres activit\u00e9s pour la sant\u00e9 humaine ",
        "hasChildren": true,
        "children": [{
          "code": "8690",
          "total": "20",
          "libelle": "[8690] Autres activit\u00e9s pour la sant\u00e9 humaine ",
          "hasChildren": true,
          "children": [{
            "code": "8690A",
            "libelle": "[8690A] Ambulances "
          },
          {
            "code": "8690B",
            "libelle": "[8690B] Laboratoires d'analyses m\u00e9dicales "
          },
          {
            "code": "8690C",
            "libelle": "[8690C] Centres de collecte et banques d'organes "
          },
          {
            "code": "8690D",
            "libelle": "[8690D] Activit\u00e9s des infirmiers et des sages-femmes "
          },
          {
            "code": "8690E",
            "libelle": "[8690E] Activit\u00e9s des professionnels de la r\u00e9\u00e9ducation, de l'appareillage et des p\u00e9dicures-podologues "
          },
          {
            "code": "8690F",
            "libelle": "[8690F] Activit\u00e9s de sant\u00e9 humaine non class\u00e9es ailleurs "
          }]
        }]
      }]
    },
    {
      "code": "87",
      "code_section": "Q",
      "total": "21",
      "libelle": "[87] H\u00e9bergement m\u00e9dico-social et social",
      "hasChildren": false,
      "children": [{
        "code": "871",
        "total": "10",
        "libelle": "[871] H\u00e9bergement m\u00e9dicalis\u00e9 ",
        "hasChildren": true,
        "children": [{
          "code": "8710",
          "total": "10",
          "libelle": "[8710] H\u00e9bergement m\u00e9dicalis\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "8710A",
            "libelle": "[8710A] H\u00e9bergement m\u00e9dicalis\u00e9 pour personnes \u00e2g\u00e9es "
          },
          {
            "code": "8710B",
            "libelle": "[8710B] H\u00e9bergement m\u00e9dicalis\u00e9 pour enfants handicap\u00e9s "
          },
          {
            "code": "8710C",
            "libelle": "[8710C] H\u00e9bergement m\u00e9dicalis\u00e9 pour adultes handicap\u00e9s et autre h\u00e9bergement m\u00e9dicalis\u00e9 "
          }]
        }]
      },
      {
        "code": "872",
        "total": "2",
        "libelle": "[872] H\u00e9bergement social pour personnes handicap\u00e9es mentales, malades mentales et toxicomanes ",
        "hasChildren": true,
        "children": [{
          "code": "8720",
          "total": "2",
          "libelle": "[8720] H\u00e9bergement social pour personnes handicap\u00e9es mentales, malades mentales et toxicomanes ",
          "hasChildren": true,
          "children": [{
            "code": "8720A",
            "libelle": "[8720A] H\u00e9bergement social pour handicap\u00e9s mentaux et malades mentaux "
          },
          {
            "code": "8720B",
            "libelle": "[8720B] H\u00e9bergement social pour toxicomanes "
          }]
        }]
      },
      {
        "code": "873",
        "total": "4",
        "libelle": "[873] H\u00e9bergement social pour personnes \u00e2g\u00e9es ou handicap\u00e9es physiques ",
        "hasChildren": true,
        "children": [{
          "code": "8730",
          "total": "4",
          "libelle": "[8730] H\u00e9bergement social pour personnes \u00e2g\u00e9es ou handicap\u00e9es physiques ",
          "hasChildren": true,
          "children": [{
            "code": "8730A",
            "libelle": "[8730A] H\u00e9bergement social pour personnes \u00e2g\u00e9es "
          },
          {
            "code": "8730B",
            "libelle": "[8730B] H\u00e9bergement social pour handicap\u00e9s physiques "
          }]
        }]
      },
      {
        "code": "879",
        "total": "5",
        "libelle": "[879] Autres activit\u00e9s d'h\u00e9bergement social ",
        "hasChildren": true,
        "children": [{
          "code": "8790",
          "total": "5",
          "libelle": "[8790] Autres activit\u00e9s d'h\u00e9bergement social ",
          "hasChildren": true,
          "children": [{
            "code": "8790A",
            "libelle": "[8790A] H\u00e9bergement social pour enfants en difficult\u00e9s "
          },
          {
            "code": "8790B",
            "libelle": "[8790B] H\u00e9bergement social pour adultes et familles en difficult\u00e9s et autre h\u00e9bergement social "
          }]
        }]
      }]
    },
    {
      "code": "88",
      "code_section": "Q",
      "total": "56",
      "libelle": "[88] Action sociale sans h\u00e9bergement",
      "hasChildren": false,
      "children": [{
        "code": "881",
        "total": "11",
        "libelle": "[881] Action sociale sans h\u00e9bergement pour personnes \u00e2g\u00e9es et pour personnes handicap\u00e9es ",
        "hasChildren": true,
        "children": [{
          "code": "8810",
          "total": "11",
          "libelle": "[8810] Action sociale sans h\u00e9bergement pour personnes \u00e2g\u00e9es et pour personnes handicap\u00e9es ",
          "hasChildren": true,
          "children": [{
            "code": "8810A",
            "libelle": "[8810A] Aide \u00e0 domicile "
          },
          {
            "code": "8810B",
            "libelle": "[8810B] Accueil ou accompagnement sans h\u00e9bergement d'adultes handicap\u00e9s ou de personnes \u00e2g\u00e9es "
          },
          {
            "code": "8810C",
            "libelle": "[8810C] Aide par le travail "
          }]
        }]
      },
      {
        "code": "889",
        "total": "45",
        "libelle": "[889] Autre action sociale sans h\u00e9bergement",
        "hasChildren": true,
        "children": [{
          "code": "8891",
          "total": "16",
          "libelle": "[8891] Action sociale sans h\u00e9bergement pour jeunes enfants",
          "hasChildren": true,
          "children": [{
            "code": "8891A",
            "libelle": "[8891A] Accueil de jeunes enfants "
          },
          {
            "code": "8891B",
            "libelle": "[8891B] Accueil ou accompagnement sans h\u00e9bergement d'enfants handicap\u00e9s "
          }]
        },
        {
          "code": "8899",
          "total": "29",
          "libelle": "[8899] Autre action sociale sans h\u00e9bergement n.c.a.",
          "hasChildren": true,
          "children": [{
            "code": "8899A",
            "libelle": "[8899A] Autre accueil ou accompagnement sans h\u00e9bergement d'enfants et d'adolescents "
          },
          {
            "code": "8899B",
            "libelle": "[8899B] Action sociale sans h\u00e9bergement n.c.a."
          }]
        }]
      }]
    }]
  },
  {
    "code": "R",
    "total": "37",
    "libelle": "[R] Arts, spectacles et activit\u00e9s r\u00e9cr\u00e9atives",
    "hasChildren": true,
    "children": [{
      "code": "90",
      "code_section": "R",
      "total": "5",
      "libelle": "[90] Activit\u00e9s cr\u00e9atives, artistiques et de spectacle ",
      "hasChildren": false,
      "children": [{
        "code": "900",
        "total": "5",
        "libelle": "[900] Activit\u00e9s cr\u00e9atives, artistiques et de spectacle ",
        "hasChildren": true,
        "children": [{
          "code": "9001",
          "total": "2",
          "libelle": "[9001] Arts du spectacle vivant ",
          "hasChildren": true,
          "children": [{
            "code": "9001Z",
            "libelle": "[9001Z] Arts du spectacle vivant "
          }]
        },
        {
          "code": "9002",
          "total": "2",
          "libelle": "[9002] Activit\u00e9s de soutien au spectacle vivant ",
          "hasChildren": true,
          "children": [{
            "code": "9002Z",
            "libelle": "[9002Z] Activit\u00e9s de soutien au spectacle vivant "
          }]
        },
        {
          "code": "9003",
          "total": "0",
          "libelle": "[9003] Cr\u00e9ation artistique ",
          "hasChildren": true,
          "children": [{
            "code": "9003A",
            "libelle": "[9003A] Cr\u00e9ation artistique relevant des arts plastiques "
          },
          {
            "code": "9003B",
            "libelle": "[9003B] Autre cr\u00e9ation artistique "
          }]
        },
        {
          "code": "9004",
          "total": "1",
          "libelle": "[9004] Gestion de salles de spectacles ",
          "hasChildren": true,
          "children": [{
            "code": "9004Z",
            "libelle": "[9004Z] Gestion de salles de spectacles "
          }]
        }]
      }]
    },
    {
      "code": "91",
      "code_section": "R",
      "total": "4",
      "libelle": "[91] Biblioth\u00e8ques, archives, mus\u00e9es et autres activit\u00e9s culturelles ",
      "hasChildren": false,
      "children": [{
        "code": "910",
        "total": "4",
        "libelle": "[910] Biblioth\u00e8ques, archives, mus\u00e9es et autres activit\u00e9s culturelles ",
        "hasChildren": true,
        "children": [{
          "code": "9101",
          "total": "3",
          "libelle": "[9101] Gestion des biblioth\u00e8ques et des archives ",
          "hasChildren": true,
          "children": [{
            "code": "9101Z",
            "libelle": "[9101Z] Gestion des biblioth\u00e8ques et des archives "
          }]
        },
        {
          "code": "9102",
          "total": "0",
          "libelle": "[9102] Gestion des mus\u00e9es ",
          "hasChildren": true,
          "children": [{
            "code": "9102Z",
            "libelle": "[9102Z] Gestion des mus\u00e9es "
          }]
        },
        {
          "code": "9103",
          "total": "1",
          "libelle": "[9103] Gestion des sites et monuments historiques et des attractions touristiques similaires ",
          "hasChildren": true,
          "children": [{
            "code": "9103Z",
            "libelle": "[9103Z] Gestion des sites et monuments historiques et des attractions touristiques similaires "
          }]
        },
        {
          "code": "9104",
          "total": "0",
          "libelle": "[9104] Gestion des jardins botaniques et zoologiques et des r\u00e9serves naturelles ",
          "hasChildren": true,
          "children": [{
            "code": "9104Z",
            "libelle": "[9104Z] Gestion des jardins botaniques et zoologiques et des r\u00e9serves naturelles "
          }]
        }]
      }]
    },
    {
      "code": "92",
      "code_section": "R",
      "total": "0",
      "libelle": "[92] Organisation de jeux de hasard et d'argent ",
      "hasChildren": false,
      "children": [{
        "code": "920",
        "total": "0",
        "libelle": "[920] Organisation de jeux de hasard et d'argent ",
        "hasChildren": true,
        "children": [{
          "code": "9200",
          "total": "0",
          "libelle": "[9200] Organisation de jeux de hasard et d'argent ",
          "hasChildren": true,
          "children": [{
            "code": "9200Z",
            "libelle": "[9200Z] Organisation de jeux de hasard et d'argent "
          }]
        }]
      }]
    },
    {
      "code": "93",
      "code_section": "R",
      "total": "28",
      "libelle": "[93] Activit\u00e9s sportives, r\u00e9cr\u00e9atives et de loisirs",
      "hasChildren": false,
      "children": [{
        "code": "931",
        "total": "22",
        "libelle": "[931] Activit\u00e9s li\u00e9es au sport ",
        "hasChildren": true,
        "children": [{
          "code": "9311",
          "total": "2",
          "libelle": "[9311] Gestion d'installations sportives ",
          "hasChildren": true,
          "children": [{
            "code": "9311Z",
            "libelle": "[9311Z] Gestion d'installations sportives "
          }]
        },
        {
          "code": "9312",
          "total": "17",
          "libelle": "[9312] Activit\u00e9s de clubs de sports",
          "hasChildren": true,
          "children": [{
            "code": "9312Z",
            "libelle": "[9312Z] Activit\u00e9s de clubs de sports"
          }]
        },
        {
          "code": "9313",
          "total": "3",
          "libelle": "[9313] Activit\u00e9s des centres de culture physique ",
          "hasChildren": true,
          "children": [{
            "code": "9313Z",
            "libelle": "[9313Z] Activit\u00e9s des centres de culture physique "
          }]
        },
        {
          "code": "9319",
          "total": "0",
          "libelle": "[9319] Autres activit\u00e9s li\u00e9es au sport ",
          "hasChildren": true,
          "children": [{
            "code": "9319Z",
            "libelle": "[9319Z] Autres activit\u00e9s li\u00e9es au sport "
          }]
        }]
      },
      {
        "code": "932",
        "total": "6",
        "libelle": "[932] Activit\u00e9s r\u00e9cr\u00e9atives et de loisirs ",
        "hasChildren": true,
        "children": [{
          "code": "9321",
          "total": "1",
          "libelle": "[9321] Activit\u00e9s des parcs d'attractions et parcs \u00e0 th\u00e8mes ",
          "hasChildren": true,
          "children": [{
            "code": "9321Z",
            "libelle": "[9321Z] Activit\u00e9s des parcs d'attractions et parcs \u00e0 th\u00e8mes "
          }]
        },
        {
          "code": "9329",
          "total": "5",
          "libelle": "[9329] Autres activit\u00e9s r\u00e9cr\u00e9atives et de loisirs ",
          "hasChildren": true,
          "children": [{
            "code": "9329Z",
            "libelle": "[9329Z] Autres activit\u00e9s r\u00e9cr\u00e9atives et de loisirs "
          }]
        }]
      }]
    }]
  },
  {
    "code": "S",
    "total": "86",
    "libelle": "[S] Autres activit\u00e9s de services",
    "hasChildren": true,
    "children": [{
      "code": "94",
      "code_section": "S",
      "total": "40",
      "libelle": "[94] Activit\u00e9s des organisations associatives",
      "hasChildren": false,
      "children": [{
        "code": "941",
        "total": "8",
        "libelle": "[941] Activit\u00e9s des organisations \u00e9conomiques, patronales et professionnelles ",
        "hasChildren": true,
        "children": [{
          "code": "9411",
          "total": "7",
          "libelle": "[9411] Activit\u00e9s des organisations patronales et consulaires ",
          "hasChildren": true,
          "children": [{
            "code": "9411Z",
            "libelle": "[9411Z] Activit\u00e9s des organisations patronales et consulaires "
          }]
        },
        {
          "code": "9412",
          "total": "1",
          "libelle": "[9412] Activit\u00e9s des organisations professionnelles ",
          "hasChildren": true,
          "children": [{
            "code": "9412Z",
            "libelle": "[9412Z] Activit\u00e9s des organisations professionnelles "
          }]
        }]
      },
      {
        "code": "942",
        "total": "0",
        "libelle": "[942] Activit\u00e9s des syndicats de salari\u00e9s ",
        "hasChildren": true,
        "children": [{
          "code": "9420",
          "total": "0",
          "libelle": "[9420] Activit\u00e9s des syndicats de salari\u00e9s ",
          "hasChildren": true,
          "children": [{
            "code": "9420Z",
            "libelle": "[9420Z] Activit\u00e9s des syndicats de salari\u00e9s "
          }]
        }]
      },
      {
        "code": "949",
        "total": "32",
        "libelle": "[949] Activit\u00e9s des autres organisations associatives",
        "hasChildren": true,
        "children": [{
          "code": "9491",
          "total": "5",
          "libelle": "[9491] Activit\u00e9s des organisations religieuses ",
          "hasChildren": true,
          "children": [{
            "code": "9491Z",
            "libelle": "[9491Z] Activit\u00e9s des organisations religieuses "
          }]
        },
        {
          "code": "9492",
          "total": "0",
          "libelle": "[9492] Activit\u00e9s des organisations politiques ",
          "hasChildren": true,
          "children": [{
            "code": "9492Z",
            "libelle": "[9492Z] Activit\u00e9s des organisations politiques "
          }]
        },
        {
          "code": "9499",
          "total": "27",
          "libelle": "[9499] Activit\u00e9s des organisations associatives n.c.a",
          "hasChildren": true,
          "children": [{
            "code": "9499Z",
            "libelle": "[9499Z] Autres organisations fonctionnant par adh\u00e9sion volontaire"
          }]
        }]
      }]
    },
    {
      "code": "95",
      "code_section": "S",
      "total": "4",
      "libelle": "[95] R\u00e9paration d'ordinateurs et de biens personnels et domestiques ",
      "hasChildren": false,
      "children": [{
        "code": "951",
        "total": "1",
        "libelle": "[951] R\u00e9paration d'ordinateurs et d'\u00e9quipements de communication ",
        "hasChildren": true,
        "children": [{
          "code": "9511",
          "total": "0",
          "libelle": "[9511] R\u00e9paration d'ordinateurs et d'\u00e9quipements p\u00e9riph\u00e9riques ",
          "hasChildren": true,
          "children": [{
            "code": "9511Z",
            "libelle": "[9511Z] R\u00e9paration d'ordinateurs et d'\u00e9quipements p\u00e9riph\u00e9riques "
          }]
        },
        {
          "code": "9512",
          "total": "1",
          "libelle": "[9512] R\u00e9paration d'\u00e9quipements de communication ",
          "hasChildren": true,
          "children": [{
            "code": "9512Z",
            "libelle": "[9512Z] R\u00e9paration d'\u00e9quipements de communication "
          }]
        }]
      },
      {
        "code": "952",
        "total": "3",
        "libelle": "[952] R\u00e9paration de biens personnels et domestiques ",
        "hasChildren": true,
        "children": [{
          "code": "9521",
          "total": "1",
          "libelle": "[9521] R\u00e9paration de produits \u00e9lectroniques grand public ",
          "hasChildren": true,
          "children": [{
            "code": "9521Z",
            "libelle": "[9521Z] R\u00e9paration de produits \u00e9lectroniques grand public "
          }]
        },
        {
          "code": "9522",
          "total": "2",
          "libelle": "[9522] R\u00e9paration d'appareils \u00e9lectrom\u00e9nagers et d'\u00e9quipements pour la maison et le jardin ",
          "hasChildren": true,
          "children": [{
            "code": "9522Z",
            "libelle": "[9522Z] R\u00e9paration d'appareils \u00e9lectrom\u00e9nagers et d'\u00e9quipements pour la maison et le jardin "
          }]
        },
        {
          "code": "9523",
          "total": "0",
          "libelle": "[9523] R\u00e9paration de chaussures et d'articles en cuir ",
          "hasChildren": true,
          "children": [{
            "code": "9523Z",
            "libelle": "[9523Z] R\u00e9paration de chaussures et d'articles en cuir "
          }]
        },
        {
          "code": "9524",
          "total": "0",
          "libelle": "[9524] R\u00e9paration de meubles et d'\u00e9quipements du foyer ",
          "hasChildren": true,
          "children": [{
            "code": "9524Z",
            "libelle": "[9524Z] R\u00e9paration de meubles et d'\u00e9quipements du foyer "
          }]
        },
        {
          "code": "9525",
          "total": "0",
          "libelle": "[9525] R\u00e9paration d'articles d'horlogerie et de bijouterie ",
          "hasChildren": true,
          "children": [{
            "code": "9525Z",
            "libelle": "[9525Z] R\u00e9paration d'articles d'horlogerie et de bijouterie "
          }]
        },
        {
          "code": "9529",
          "total": "0",
          "libelle": "[9529] R\u00e9paration d'autres biens personnels et domestiques ",
          "hasChildren": true,
          "children": [{
            "code": "9529Z",
            "libelle": "[9529Z] R\u00e9paration d'autres biens personnels et domestiques "
          }]
        }]
      }]
    },
    {
      "code": "96",
      "code_section": "S",
      "total": "42",
      "libelle": "[96] Autres services personnels ",
      "hasChildren": false,
      "children": [{
        "code": "960",
        "total": "42",
        "libelle": "[960] Autres services personnels ",
        "hasChildren": true,
        "children": [{
          "code": "9601",
          "total": "1",
          "libelle": "[9601] Blanchisserie-teinturerie ",
          "hasChildren": true,
          "children": [{
            "code": "9601A",
            "libelle": "[9601A] Blanchisserie-teinturerie de gros "
          },
          {
            "code": "9601B",
            "libelle": "[9601B] Blanchisserie-teinturerie de d\u00e9tail "
          }]
        },
        {
          "code": "9602",
          "total": "29",
          "libelle": "[9602] Coiffure et soins de beaut\u00e9 ",
          "hasChildren": true,
          "children": [{
            "code": "9602A",
            "libelle": "[9602A] Coiffure (21)"
          },
          {
            "code": "9602B",
            "libelle": "[9602B] Soins de beaut\u00e9 "
          }]
        },
        {
          "code": "9603",
          "total": "8",
          "libelle": "[9603] Services fun\u00e9raires ",
          "hasChildren": true,
          "children": [{
            "code": "9603Z",
            "libelle": "[9603Z] Services fun\u00e9raires "
          }]
        },
        {
          "code": "9604",
          "total": "1",
          "libelle": "[9604] Entretien corporel ",
          "hasChildren": true,
          "children": [{
            "code": "9604Z",
            "libelle": "[9604Z] Entretien corporel "
          }]
        },
        {
          "code": "9609",
          "total": "3",
          "libelle": "[9609] Autres services personnels n.c.a. ",
          "hasChildren": true,
          "children": [{
            "code": "9609Z",
            "libelle": "[9609Z] Autres services personnels n.c.a. "
          }]
        }]
      }]
    }]
  },
  {
    "code": "T",
    "total": "0",
    "libelle": "[T] Activit\u00e9s des m\u00e9nages en tant qu'employeurs ; activit\u00e9s indiff\u00e9renci\u00e9es des m\u00e9nages en tant que producteurs de biens et services pour usage propre ",
    "hasChildren": true,
    "children": [{
      "code": "97",
      "code_section": "T",
      "total": "0",
      "libelle": "[97] Activit\u00e9s des m\u00e9nages en tant qu'employeurs de personnel domestique ",
      "hasChildren": false,
      "children": [{
        "code": "970",
        "total": "0",
        "libelle": "[970] Activit\u00e9s des m\u00e9nages en tant qu'employeurs de personnel domestique ",
        "hasChildren": true,
        "children": [{
          "code": "9700",
          "total": "0",
          "libelle": "[9700] Activit\u00e9s des m\u00e9nages en tant qu'employeurs de personnel domestique ",
          "hasChildren": true,
          "children": [{
            "code": "9700Z",
            "libelle": "[9700Z] Activit\u00e9s des m\u00e9nages en tant qu'employeurs de personnel domestique "
          }]
        }]
      }]
    },
    {
      "code": "98",
      "code_section": "T",
      "total": "0",
      "libelle": "[98] Activit\u00e9s indiff\u00e9renci\u00e9es des m\u00e9nages en tant que producteurs de biens et services pour usage propre ",
      "hasChildren": false,
      "children": [{
        "code": "981",
        "total": "0",
        "libelle": "[981] Activit\u00e9s indiff\u00e9renci\u00e9es des m\u00e9nages en tant que producteurs de biens pour usage propre ",
        "hasChildren": true,
        "children": [{
          "code": "9810",
          "total": "0",
          "libelle": "[9810] Activit\u00e9s indiff\u00e9renci\u00e9es des m\u00e9nages en tant que producteurs de biens pour usage propre ",
          "hasChildren": true,
          "children": [{
            "code": "9810Z",
            "libelle": "[9810Z] Activit\u00e9s indiff\u00e9renci\u00e9es des m\u00e9nages en tant que producteurs de biens pour usage propre "
          }]
        }]
      },
      {
        "code": "982",
        "total": "0",
        "libelle": "[982] Activit\u00e9s indiff\u00e9renci\u00e9es des m\u00e9nages en tant que producteurs de services pour usage propre ",
        "hasChildren": true,
        "children": [{
          "code": "9820",
          "total": "0",
          "libelle": "[9820] Activit\u00e9s indiff\u00e9renci\u00e9es des m\u00e9nages en tant que producteurs de services pour usage propre ",
          "hasChildren": true,
          "children": [{
            "code": "9820Z",
            "libelle": "[9820Z] Activit\u00e9s indiff\u00e9renci\u00e9es des m\u00e9nages en tant que producteurs de services pour usage propre "
          }]
        }]
      }]
    }]
  },
  {
    "code": "U",
    "total": "0",
    "libelle": "[U] Activit\u00e9s extra-territoriales ",
    "hasChildren": true,
    "children": [{
      "code": "99",
      "code_section": "U",
      "total": "0",
      "libelle": "[99] Activit\u00e9s des organisations et organismes extraterritoriaux ",
      "hasChildren": false,
      "children": [{
        "code": "990",
        "total": "0",
        "libelle": "[990] Activit\u00e9s des organisations et organismes extraterritoriaux ",
        "hasChildren": true,
        "children": [{
          "code": "9900",
          "total": "0",
          "libelle": "[9900] Activit\u00e9s des organisations et organismes extraterritoriaux ",
          "hasChildren": true,
          "children": [{
            "code": "9900Z",
            "libelle": "[9900Z] Activit\u00e9s des organisations et organismes extraterritoriaux "
          }]
        }]
      }]
    }]
  }
];


//------------------------------------------------------------------------------------------//
//----------------------------------Initialisation jQuery-----------------------------------//
//------------------------------------------------------------------------------------------//

$(document).ready(function() {
  $('select').material_select();
  initTreeNaf(treenaf_all);
  initMap();
  getTable();
  clearButton();
  clearButtonAfterExport();
  bindRequest();
  bindClickAllRequest();
  bindClickPdf();
  bindClickCheked();
  bindClickBtnExportCSV();
  bindClickAllSelectExport();
  bindClickDownloadCSV();
  $('#attente').hide();
  $('#div_html').hide();
});


//------------------------------------------------------------------------------------------//
//------------------------------------Initialisation Carte----------------------------------//
//------------------------------------------------------------------------------------------//

function initMap() {
  mapbox = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ3JlZ29yeTIzIiwiYSI6ImNqcnZ5OW5qOTA2aGM0M3Bra2VjejVwN2EifQ.yE75I7RZtgeAaRpwu4z-MQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 17
  };
  streets = L.tileLayer(mapbox, {id: 'mapbox.streets'});
  grayscale = L.tileLayer(mapbox, {id: 'mapbox.light'});
  satellite = L.tileLayer(mapbox, {id: 'mapbox.satellite'});

  map = L.map('map',{
    center : [46.027482, 2.570801],
    zoom : 6,
    layers : streets,
    zoomControl : false
  });

  baseLayers = {
    "Rues" : streets,
    "Satellite" : satellite,
    "Gris" : grayscale
  };

  var zoomHome = L.Control.zoomHome({
    position: 'topright',
    zoomHomeTitle: '',
    zoomInTitle: '',
    zoomOutTitle: ''
  }).addTo(map);

  controlLayers = L.control.layers(baseLayers, overlays, {
    position :'topright'
  }).addTo(map);

    printerForPDF = L.easyPrint({
    hidden: true,
    tileWait: 20000,
    tileLayer: streets,
    sizeModes: ['Current'],
    filename: 'fichie_voie',
    exportOnly: true,
    hideControlContainer: true
  }).addTo(map);

  map.addControl(new L.Control.Fullscreen({
    position: 'topright',
    title: {
      'false': 'Plein ecran',
      'true': 'Quitter plein ecran'
    }
  }));

}


//-----------------------------------------------------------------------------------------//
//------------------------------------------Tableau----------------------------------------//
//-----------------------------------------------------------------------------------------//

function getTable(){

  // Tu initialise ton tableau avec les en-tetes (tu met les class que tu veux pour qu'il soit jolie)
  var table = '<table id="tbl_result" class="hover row-border">' +
  '<thead>'+
  '<tr>'+
  '<th>Nom</th> <th>Activité</th> <th>Code Postal</th>'+
  '</tr>'+
  '</thead>' +
  '<tbody id="tbody_table"> </tbody>'
  '</table>';

  // ajout tableau a div html
  $('#div_html').append(table);

}


//-------------------------------------------------------------------------------------------//
//---------------------------------------Boutons click--------------------------------------//
//-----------------------------------------------------------------------------------------//

function bindRequest(){
  $('#buttonCartho').on('click', function(){
    nbTotalResult = 0;
    importData({
      insee: $.trim($('#insee').val()),
      departements  : $.trim($('#departements').val()),
      epci : $.trim($('#epci').val()),
      tefet: $('#tefet').val(),
      apet700: tree_to_apet700,
      apet700GroupLength: 30
    });
    $('#btnExportCSV').on('click', function(){
      $('#export_form').show();
    });
    $('#nbResult').show();
    $('#loading').show();
  });
}


function bindClickAllRequest() {
  $('#arbre_all_div').on('click', function() {
    if (flag_all_selected == 0) {
      $('#arbre_all').prop('checked', true);
      tree.checkAll();
      flag_all_selected = 1;
    }
    else {
      $('#arbre_all').prop('checked', false);
      tree.uncheckAll();
      flag_all_selected = 0;
    }
  });
}


function bindClickCheked(){
  if(tree == 0){
    $('#buttonCartho').on('click', function(){
      alert('Merci de cocher au moins un élément...')
      $('#btnExportCSV').hide();
      $('#loading').hide();
    });
  }
}


function bindClickPdf(){
  $('#btnExportPDF').on('click', function(){
    printerForPDF.printMap('CurrentSize', 'MT_voirie');
  })
}


function bindClickBtnExportCSV() {
  $('#btnExportCSV').on('click', function() {
    $('#clearButtonAfter').show();
    checked: true
    $('.checkBackground').hide();
    if(etabArray == 0){
      alert('Merci de selectionner un champ à carthographier...')
      if ($('#export_form').is(":visible")) {
        $('#export_form').hide();

      }else {
        $('#export_form').prop('hidden', false);
      }
    }
  });
}


function bindClickAllSelectExport() {
  $('#csv_all').on('click', function() {
    if ($(this).prop('checked')) {  // Va changer l'état de la case à cocher en checked
    $('input:checkbox[name=csv_checkbox]').prop('checked', true);  // (prop true (Boolean) Va changer l'état de la case à cocher en checked)
  } else {
    $('input:checkbox[name=csv_checkbox]').prop('checked', false);
  }
});
}


function bindClickDownloadCSV() {
  $('#btnDownloadCSV').on('click', function() {
    JSONToCSVConvertor(etabArray);
  });
}


function clearButton(){
  $('#clearButton').on('click', function(){
    markers.clearLayers();
    window.location.reload();
  })
}


function clearButtonAfterExport(){
  $('#clearButtonAfter').on('click', function(){
    markers.clearLayers();
    window.location.reload();
  })
}


//---------------------------------------------------------------------------------------------------//
//----------------------------------Début code requète et Markeurs----------------------------------//
//-------------------------------------------------------------------------------------------------//

function initTreeNaf(treenaf_all) {
  tree = $('#tree').tree({
    primaryKey: 'code',
    textField: 'libelle',
    uiLibrary: 'materialdesign',
    dataSource: treenaf_all,
    checkboxes: true
  });
  $('.groupeButton').show();
  $('.entete').show();
  $('.arbre_checkbox').show();
  $('.all_check_arbre').show();
}


function prepareWhere(parameters, callback){
  callback((function(insee, departements, epci){
    var request = '';
    if(insee){
      return "("+insee.split(',').map(function(v, i){  // v = valeur et i = index ----  map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant
      return 'depcomet = "'+v+'"';
    }).join(' OR ')+")";
  }
  if(departements){
    return "("+departements.split(',').map(function(v, i){  // v = valeur et i = index ----  map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant
    return 'depet = "'+v+'"';
  }).join(' OR ')+")";
}
if(epci){
  return "("+epci.split(',').map(function(v, i){  // v = valeur et i = index ----  map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant
  return 'epci = "'+v+'"';
}).join(' OR ')+")";
}
})(parameters.insee, parameters.departements, parameters.epci));
return false;
}


function prepareUrlQueue(tefet, apet700List, where, apet700GroupLength, callback){
  var acrr_apet700 = apet700GroupLength;
  var start_slice = 0;
  var chunk = null;   // chunk est le tronçon
  var urls = [];

  $.each(tree.getCheckedNodes(), function(index, value) {
    if (value.length == 5) {
      tree_to_apet700.push(value);
    }
    if (value.length == 1) {
      code_section_pdf.push(value);
    }
  });

  while(start_slice<=tree_to_apet700.length){
    var slice = tree_to_apet700.slice(start_slice, acrr_apet700);  // coupe arbre de 0 à 30 apet700
    chunk = "("+slice.map(function(v, i){  // creer requete avec 30 premiere valeurs
      return 'apet700="'+v+'"';
    }).join(' OR ')+")";

    if (tefet != "") {
      chunk += " AND tefet='"+tefet+"'";   // ajoute tefet  si besoin
    }
    urls.push(URL_API_SIRENE+'records?dataset_id=sirene@public&where='+encodeURIComponent(where+'AND'+ chunk)+'&rows=100&output=json');  // assemble les conditions pour constituer la requete et l'url
    start_slice += apet700GroupLength;  // ajpute les series de 30 apet700 (0,30,60...)
    acrr_apet700 += apet700GroupLength;  // ajoute 30 a la valeur apet700GroupLength  (valeur de fin )
  }
  callback(urls);
}


function importData(parameters){
  prepareWhere(parameters, function(where){
    prepareUrlQueue(parameters.tefet, parameters.apet700, where, parameters.apet700GroupLength, function(urls){

      urls.forEach(function (url) {
        request(url);
      });
    });
  });
}


function request(url){
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: function(res) { },
    error: function(err) { },
    complete: function(e) {

      var nbResult = e.responseJSON['total_count'];
      var records = e.responseJSON['records'];
      var links = e.responseJSON['links'];

      var total_count = e.responseJSON['records'];
      if (total_count == 0) {
        $('#nbResult').html("Pas de resultat...");
        $("#loading").hide();
      }
      else{
        $("#loading").show();
        nbTotalResult += nbResult;
        $('#nbResult').html('Résultat(s) de la recherche : '+nbTotalResult+' entreprise(s) géocodée(s)');
      }

      // manage link next
      flagEnd;
      $.each(links, function(index, value) {
        if (value['rel'] == 'next') {
          flagEnd = 1;
          var next_url = value['href'];
          nextRequest(next_url);
        }
      });

      // manage records in first request
      $.each(records, function(index, value) {
        var etab = value['record']['fields'];
        if (etab['coordonnees'] != null) {
          popup = etab['l1_normalisee'];
          latitude = etab['coordonnees']['lat'];
          longitude = etab['coordonnees']['lon'];

          marker = L.marker([latitude, longitude], {
            id: etab['siret']
          });


          marker.bindPopup(popup);
          markers.addLayer(marker);
          getColorNaf(marker, etab['code_section']);
        }

        etabArray.push(etab);
        // Pour chaque ligne, creer la valeur dans la colonne correspondante
        var tr = '<tr onclick="findInMapMarkerBySiret('+etab['siret']+')">'+
        '<td>'+value['record']['fields']['l1_normalisee']+'</td>'+
        '<td>'+value['record']['fields']['libapen']+'</td>'+
        '<td>'+value['record']['fields']['codpos']+'</td>'+
        '</tr>';
        // ajoute ta ligne au tbody
        $('#tbody_table').append(tr);
      });


      if (flagEnd == 0) {
        endOfRequest();
      }
    }
  });
}


function nextRequest(url) {
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: function(res) { },
    error: function(err) { },
    complete: function(e) {

      var records = e.responseJSON['records'];
      var links = e.responseJSON['links'];
      // manage link next -- if not end of process
      $.each(links, function(index, value) {
        if (value['rel'] == 'next') {
          var next_url = value['href'];
          nextRequest(next_url);
        }
      });

      // manage records in first request
      $.each(records, function(index, value) {
        console.log('Coucou Next ?!?!?!');

        var etab = value['record']['fields'];
        if (etab['coordonnees'] != null) {
          popup = etab['l1_normalisee'];
          latitude = etab['coordonnees']['lat'];
          longitude = etab['coordonnees']['lon'];

          marker = L.marker([latitude, longitude], {
            id: etab['siret']
          });


          marker.bindPopup(popup);
          markers.addLayer(marker);
          getColorNaf(marker, etab['code_section']);
        }
        etabArray.push(etab);

        var tr = '<tr onclick="findInMapMarkerBySiret('+etab['siret']+')">'+
        '<td>'+value['record']['fields']['l1_normalisee']+'</td>'+
        '<td>'+value['record']['fields']['libapen']+'</td>'+
        '<td>'+value['record']['fields']['codpos']+'</td>'+
        '</tr>';

        $('#tbody_table').append(tr);
      });

      // check if finish
      if (links.length == 4) {
        endOfRequest();
      }
    }
  });
}


//------------------------------------------------------------------------------------------------//
//----------------------Fin requète et affichage tableau et markeurs customisé--------------------//
//------------------------------------------------------------------------------------------------//

function endOfRequest() {

  setTimeout(function(){ if(flagEnd >= 0){
    $('#tbl_result').DataTable({
      destroy : true,
      "language": {
        "lengthMenu": "",
        "pageLength": 10,
        "zeroRecords": "Aucun résultat trouvé - désolé",
        "info": "Page _PAGE_ sur _PAGES_",
        "infoEmpty": "Aucune donnée disponible",
        "infoFiltered": "(filtrée à partir de _MAX_ enregistrements)",
        "search": "Rechercher :",
        "paginate": {
          "previous": "◄",
          "next": "►"
        }
      }
    });
    $('#loading').hide();
  };
}, 4800);
map.fitBounds(markers.getBounds());
markers.addTo(map);
$('#btnExportCSV').show();
$('#btnExportPDF').show();
flagEnd = 1;
$('#div_html').show();
$('#legende').show();
}


function findInMapMarkerBySiret(siret) {
  markers.eachLayer(function (layer) {
    if (siret == layer.options.id) {
      // console.log('trouvé');
      var latLng = [layer.getLatLng()];
      // console.log(latLng);
      var zoom = L.latLngBounds(latLng);
      // console.log(L.latLngBounds(latLng));
      map.fitBounds(zoom,{
        maxZoom : 17
      });
      layer.openPopup();
    }
  });
}


function getColorNaf(marker, section_code) {
  var codeNaf = section_code;
  switch (codeNaf) {
    case 'A':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_A',
      shape: 'circle',
      markerColor: 'green-light',
      prefix: 'icon_sirene'
    }));
    break;
    case 'B':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_B',
      shape: 'penta',
      markerColor: 'green-dark',
      prefix: 'icon_sirene'
    }));
    break;
    case 'C':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_C',
      shape: 'star',
      markerColor: 'green',
      prefix: 'icon_sirene'
    }));
    break;
    case 'D':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_D',
      shape: 'penta',
      markerColor: 'blue',
      prefix: 'icon_sirene'
    }));
    break;
    case 'E':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_E',
      shape: 'star',
      markerColor: 'cyan',
      prefix: 'icon_sirene'
    }));
    break;
    case 'F':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_F',
      shape: 'star',
      markerColor: 'orange-dark',
      prefix: 'icon_sirene'
    }));
    break;
    case 'G':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_G',
      shape: 'penta',
      markerColor: 'red',
      prefix: 'icon_sirene'
    }));
    break;
    case 'H':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_H',
      shape: 'star',
      markerColor: 'black',
      prefix: 'icon_sirene'
    }));
    break;
    case 'I':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_I',
      shape: 'circle',
      markerColor: 'yellow',
      prefix: 'icon_sirene'
    }));
    break;
    case 'J':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_J',
      shape: 'circle',
      markerColor: 'orange-dark',
      prefix: 'icon_sirene'
    }));
    break;
    case 'K':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_K',
      shape: 'circle',
      markerColor: 'pink',
      prefix: 'icon_sirene'
    }));
    break;
    case 'L':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_L',
      shape: 'circle',
      markerColor: 'blue-dark',
      prefix: 'icon_sirene'
    }));
    break;
    case 'M':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_M',
      shape: 'square',
      markerColor: 'orange',
      prefix: 'icon_sirene'
    }));
    break;
    case 'N':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_N',
      shape: 'square',
      markerColor: 'purple',
      prefix: 'icon_sirene'
    }));
    break;
    case 'O':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_O',
      shape: 'square',
      markerColor: 'green-light',
      prefix: 'icon_sirene'
    }));
    break;
    case 'P':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_P',
      shape: 'square',
      markerColor: 'yellow',
      prefix: 'icon_sirene'
    }));
    break;
    case 'Q':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_Q',
      shape: 'square',
      markerColor: 'pink',
      prefix: 'icon_sirene'
    }));
    break;
    case 'R':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_R',
      shape: 'circle',
      markerColor: 'cyan',
      prefix: 'icon_sirene'
    }));
    break;
    case 'S':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_S',
      shape: 'square',
      markerColor: 'red',
      prefix: 'icon_sirene'
    }));
    break;
    case 'T':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_T',
      shape: 'star',
      markerColor: 'blue',
      prefix: 'icon_sirene'
    }));
    break;
    case 'U':
    marker.setIcon(L.ExtraMarkers.icon({
      icon: 'NAF_U',
      shape: 'penta',
      markerColor: 'white',
      iconColor : 'black',
      prefix: 'icon_sirene'
    }));
    break;
  }
}


//------------------------------------------------------------------------------------------------//
//-------------------------------------Code export CSV et PDF-------------------------------------//
//------------------------------------------------------------------------------------------------//

function JSONToCSVConvertor(JSONData){ // JsonData - spécifie le Json à télécharger,

  // Si JSONData n'est pas un objet, JSON.parse analysera la chaîne JSON dans un objet
  var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
  var CSV = '';

  var row = "";
  var fieldToExtract = [];
  $('input:checkbox[name=csv_checkbox]:checked').each(function(){

    var id = $(this).attr('id');  // récupère la valeur de l'attribut 'id'
    var label = id.substr(4);  // retourne chaine de caractère de l'indice
    if(label == 'coordonnees'){
      row += "latitude;longitude;";
    }else{
      row += label+";";  // si pas de coordonnées case vide (le ";" est un separateur de case)
    }
    fieldToExtract.push(label);
  });
  // si pas de aucun champs selectionné
  if(fieldToExtract.length == 0){
    alert('Selctionnez au moins un champ...')
    return;
  }
  row.slice(0, row.length -1);  // copie du tableau (slice)
  CSV += row + '\r\n';  // ajoute une ligne d'étiquette avec un saut de ligne

  $.each(etabArray, function(index, value){

    var row = "";
    var value_ordered = {};  // tableau associatif {}

    Object.keys(value).sort().forEach(function(key){  // renvoi un tableau de valeur (object.keys) classé (sort) pour chaque [key (-> permet d'obtenir la valeur correspondante)]
    value_ordered[key] = value[key];
  });
  Object.keys(value_ordered).forEach(function(key){

    if(fieldToExtract.indexOf(key) != -1 && key != 'coordonnees'){  // si (key) = -1, il n'y a pas de l'élément cherché (retourne -1 si element absent )

    if(value_ordered[key] == null){  // si la key de value_ordered est null, affiche case blanche
      row += ';';
    }else{
      row += '"'+value_ordered[key]+'";';
    }
  }else if(fieldToExtract.indexOf(key) != -1 && key == 'coordonnees'){
    if(value_ordered[key] == null){  // si pas de coordonnées case blanche
      row += ';;';
    }else{
      row += value_ordered['coordonnees']['lat']+';'+value_ordered['coordonnees']['lon']+';';  // separe coordonnées [longitude] et [latitude] dans 2 colonnes
    }
  }
});
row.slice(0, row.length -1);
CSV += row + '\r\n'; // ajoute un saut de ligne après chaque ligne
});
if (CSV == '') {
  alert('problème lors de l\'export csv !')
  return;
}

var date = new Date();
var fileName  = "export_sirene_"+date.yyyymmdd();  // intitulé de la feuille csv (export sirene + date du jour)

// Initialise le format de fichier que vous voulez csv ou xls
var uri = data_type + escape(CSV);

blob = new Blob([CSV], { type: 'text/csv' });// 'Blob' nouvelle méthode de téléchargement de balise d'ancrage non prise en charge dans le dernier chrome
var csvUrl = URL.createObjectURL(blob)  // Maintenant le fichier avec le nom de fichier approprié est téléchargé avec l'extension appropriée

var data_type = 'data:text/csv;carset=utf-8,';

var link = document.createElement("a");  // cette astuce va générer une balise temporaire <a />
link.href = csvUrl;

link.style = "visibility:hidden";  // définit la visibilité cachée pour qu'elle n'affecte pas votre mise en page Web
link.download = fileName + ".csv";

// cette partie va ajouter la balise d'ancrage et la supprimer après un clic automatique
document.body.appendChild(link);
link.click();
document.body.removeChild(link);



}


function printFichePdf(img64){
// console.log(img64);
  setTimeout(function() {
    var date = new Date();
    var doc = new jsPDF('l', 'pt');

    // Tableau
    var columns = [
      {title: "NOM", dataKey: "nom"},
      {title: "Activité", dataKey: "activite"},
      {title: "Code Postal", dataKey: "codePostal"},
    ];
    var rows = new Array();
    $.each(etabArray,  function(index, value) {
      var lineData = {
        "nom": value['l1_normalisee'],
        "activite": value['libapen'],
        "codePostal": value['codpos']
      };
      rows.push(lineData);
    });
    var totalPagesExp = "{total_pages_count_string}";
    doc.autoTable(columns, rows, {
      styles: {
        cellPadding: 12,
        fontSize: 8,
        columnWidth: 'auto',
      },
      headerStyles: {
        fillColor: [106, 151, 166]
      },
      margin: {
        top: 155
      },
      addPageContent: function(data) {
        console.log(data);
        doc.setFontSize(15);
        doc.setTextColor(106, 151, 166);
        doc.setFontStyle('normal');
        doc.text("Tableau des résultats Géosirene", 320, 75);
        doc.setFontSize(12);
        doc.setTextColor(0);
        doc.setFontStyle('normal');

        var height = doc.internal.pageSize.height;
        var width = doc.internal.pageSize.width;

        var str = data.pageCount;
        if (typeof doc.putTotalPages === 'function') {
          str = str + " / " + totalPagesExp;
        }
        doc.setFontSize(10);
        doc.text(str, width-50, height-20);
        doc.text(date.ddmmyyyy(), data.settings.margin.left, height-20);
        if (logo_geosirene_base64) {
          doc.addImage(logo_geosirene_base64, 'PNG', data.settings.margin.left, 30, 40, 50);
        }
      }
    });
    doc.putTotalPages(totalPagesExp);

    doc.addPage();
    // Carte
    doc.addImage(logo_geosirene_base64, 'PNG', 40, 30, 40, 50);
    doc.setFontSize(15);
    doc.setTextColor(106, 151, 166);
    doc.text(340, 75, 'Export carte Géosirene PDF');
    doc.addImage(img64, 'PNG', 110, 120, 700, 450);
    doc.setTextColor(0);
    doc.setFontSize(10);
    doc.text("Géosirene", 750, 575);
    doc.text(date.ddmmyyyy(), 40, 575);

    // Code section et commentaire
    doc.addPage();
    doc.addImage(logo_geosirene_base64, 'PNG', 40, 30, 40, 50);
    doc.setFontSize(15);
    doc.setTextColor(106, 151, 166);
    doc.text(350, 75, 'Export Géosirene PDF');
    var x_code_section = 150;
    doc.setFontSize(12);
    doc.setTextColor(0);

    $.each(code_section_pdf, function(index, value) {
      console.log(value);
      var code_section = value;
      var splitTitle = doc.splitTextToSize('Code section : '+'['+code_section+']', 145);
      doc.text(40, x_code_section, splitTitle);
      x_code_section += 20;
    });
      doc.rect(495, 120, 300, 300);
      doc.setFontSize(10);
      doc.text("COMMENTAIRES", 605, 145);

      doc.text("Géosirene", 750, 575);
      doc.text(date.ddmmyyyy(), 40, 575);

      var fileName = "Export_PDF_Résultats_Géosirene_"+date.yyyymmdd();
      doc.save(fileName+'.pdf');
  });
}


Date.prototype.ddmmyyyy = function(){
  var mois = this.getMonth() + 1;
  // Attention 0 correspond au mois de Janvier et 11 au mois de Décembre. Donc pour afficher le mois, il faut ajouter 1 au retour de getMonth()
  // Il te retourne 1 - 2 - 3 ... 12 ==> En français on veux 01
  // On rajoute un 0 devant
  if (mois < 10) {
    mois = '0'+mois;
  }
  var jour = this.getDate();
  // On rajoute un 0 devant
  if (jour < 10) {
    jour = '0'+jour;
  }
  var annee = this.getFullYear();

  var ma_date = jour + '/' + mois + '/' + annee;

  return ma_date;
};
Date.prototype.yyyymmdd = function(){
  var mm = this.getMonth() + 1;  // Attention 0 correspond au mois de Janvier et 11 au mois de Décembre. Donc pour afficher le mois, il faut ajouter 1 au retour de getMonth()
  var dd = this.getDate();

  return [this.getFullYear(),
    (mm>9 ? '' : '0') + mm,
    (dd>9 ? '' : '0') + dd
  ].join('');
};

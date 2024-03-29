
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the BadsmellProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
/* export class shitBin {
  "codigo": number;
  "distrito": number;
  "direccion": string;
  "modelo": string;
  "fijacion": string;
  "x": string;
  "y": string;
  "longitud": number;
  "latitud": number;
} */




@Injectable()
export class BadsmellProvider {

    constructor(){

    }

  getShitPositions(){

    return[['Bondi Beach', -33.890542, 151.274856, 4],
    ['Coogee Beach', -33.923036, 151.259052, 5],
    ['Cronulla Beach', -34.028249, 151.157507, 3],
    ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
    ['Maroubra Beach', -33.950198, 151.259302, 1]
  ];


  }
  getShit(){
    return [[{
      "codigo": 284225,
      "distrito": 11,
      "direccion": "AVENIDA DE OPORTO,2",
      "modelo": "50_LTS_EX",
      "fijacion": "SMFR",
      "x": "439030,0224",
      "y": "4470751,945",
      "longitud": -3.71832,
      "latitud": 40.38513
    },
    {
      "codigo": 284244,
      "distrito": 6,
      "direccion": "PASEO DE LA DIRECCION,304",
      "modelo": "50_LTS_EX",
      "fijacion": "FARO",
      "x": "440115,9566",
      "y": "4480126,614",
      "longitud": -3.70641,
      "latitud": 40.46966
    },
    {
      "codigo": 284247,
      "distrito": 18,
      "direccion": "CALLE DE BATRES,8",
      "modelo": "50_LTS_EX",
      "fijacion": "SENA",
      "x": "447236,2254",
      "y": "4468648,405",
      "longitud": -3.62147,
      "latitud": 40.36674
    },
    {
      "codigo": 290890,
      "distrito": 21,
      "direccion": "CALLE DE LA BAHIA DE MALAGA,18",
      "modelo": "50_LTS_EX",
      "fijacion": "FARO",
      "x": "449620,0689",
      "y": "4479837,912",
      "longitud": -3.59428,
      "latitud": 40.46769
    },
    {
      "codigo": 291009,
      "distrito": 17,
      "direccion": "CALLE DE LA COALICION,22",
      "modelo": "50_LTS_EX",
      "fijacion": "FARO",
      "x": "441516,5351",
      "y": "4467513,002",
      "longitud": -3.68873,
      "latitud": 40.35613
    },
    {
      "codigo": 291047,
      "distrito": 16,
      "direccion": "AVENIDA DE JUAN ANTONIO SAMARANCH",
      "modelo": "50_LTS_EX",
      "fijacion": "FARO",
      "x": "447575,6488",
      "y": "4482805,823",
      "longitud": -3.61864,
      "latitud": 40.4943
    },
    {
      "codigo": 291122,
      "distrito": 20,
      "direccion": "AVENIDA DE CANILLEJAS A VICALVARO,169",
      "modelo": "50_LTS_EX",
      "fijacion": "SENA",
      "x": "448166,1747",
      "y": "4474578,429",
      "longitud": -3.611,
      "latitud": 40.42022
    },
    {
      "codigo": 291128,
      "distrito": 16,
      "direccion": "CALLE DE FINA DE CALDERON,24",
      "modelo": "50_LTS_EX",
      "fijacion": "FARO",
      "x": "447645,8289",
      "y": "4482904,127",
      "longitud": -3.61782,
      "latitud": 40.49519
    },
    {
      "codigo": 291139,
      "distrito": 11,
      "direccion": "",
      "modelo": "50_LTS_EX",
      "fijacion": "SMFR",
      "x": "436527,2711",
      "y": "4470511,827",
      "longitud": -3.74778,
      "latitud": 40.38278
    },
    {
      "codigo": 291140,
      "distrito": 11,
      "direccion": "AVENIDA DE LA PESETA,70",
      "modelo": "50_LTS_EX",
      "fijacion": "FARO",
      "x": "435936,3178",
      "y": "4468207,901",
      "longitud": -3.75451,
      "latitud": 40.36198
    },
    {
      "codigo": 291148,
      "distrito": 16,
      "direccion": "CALLE DE JOSEFINA ALDECOA",
      "modelo": "50_LTS_EX",
      "fijacion": "FARO",
      "x": "447920,0903",
      "y": "4482981,025",
      "longitud": -3.61459,
      "latitud": 40.4959
    },
    {
      "codigo": 291153,
      "distrito": 16,
      "direccion": "CALLE DE JOSE ANTONIO CODERCH,2",
      "modelo": "50_LTS_EX",
      "fijacion": "FARO",
      "x": "447324,3047",
      "y": "4482735,435",
      "longitud": -3.6216,
      "latitud": 40.49365
    },
    {
      "codigo": 291182,
      "distrito": 9,
      "direccion": "GLORIETA DE SAN ANTONIO DE LA FLORIDA,4",
      "modelo": "50_LTS_EX",
      "fijacion": "SMFR",
      "x": "438393,6114",
      "y": "4475221,841",
      "longitud": -3.72625,
      "latitud": 40.42535
    },
    {
      "codigo": 291227,
      "distrito": 13,
      "direccion": "CALLE DE LOPEZ GRASS,62",
      "modelo": "50_LTS_EX",
      "fijacion": "FARO",
      "x": "444230,04",
      "y": "4472124,599",
      "longitud": -3.65718,
      "latitud": 40.39786
    },
    {
      "codigo": 291241,
      "distrito": 16,
      "direccion": "CALLE DE CESAR CORT BOTI",
      "modelo": "50_LTS_EX",
      "fijacion": "FARO",
      "x": "448079,0074",
      "y": "4482801,2",
      "longitud": -3.6127,
      "latitud": 40.49429
    },
    {
      "codigo": 291260,
      "distrito": 16,
      "direccion": "CALLE FRANCISCO DE ASIS CABRERO",
      "modelo": "50_LTS_EX",
      "fijacion": "FARO",
      "x": "448125,6157",
      "y": "4482678,77",
      "longitud": -3.61214,
      "latitud": 40.49319
    },
    {
      "codigo": 291264,
      "distrito": 16,
      "direccion": "CALLE DE CESAR CORT BOTI",
      "modelo": "50_LTS_EX",
      "fijacion": "FARO",
      "x": "448116,0241",
      "y": "4483128,411",
      "longitud": -3.61229,
      "latitud": 40.49724
    },
    {
      "codigo": 291288,
      "distrito": 16,
      "direccion": "AVENIDA DE FRANCISCO JAVIER SAENZ DE OIZA",
      "modelo": "50_LTS_EX",
      "fijacion": "SENA",
      "x": "448208,778",
      "y": "4483428,595",
      "longitud": -3.61122,
      "latitud": 40.49995
    },
    {
      "codigo": 291292,
      "distrito": 16,
      "direccion": "CALLE DE JOSEFINA ALDECOA",
      "modelo": "50_LTS_EX",
      "fijacion": "FARO",
      "x": "447969,7618",
      "y": "4483299,267",
      "longitud": -3.61403,
      "latitud": 40.49877
    },
    {
      "codigo": 291293,
      "distrito": 16,
      "direccion": "CALLE DE FELIX CANDELA",
      "modelo": "50_LTS_EX",
      "fijacion": "SENA",
      "x": "447660,6463",
      "y": "4483083,853",
      "longitud": -3.61766,
      "latitud": 40.49681
    },
    {
      "codigo": 291349,
      "distrito": 18,
      "direccion": "CALLE DE TIEDRA,3",
      "modelo": "50_LTS_EX",
      "fijacion": "SENA",
      "x": "447071,9292",
      "y": "4469671,908",
      "longitud": -3.62349,
      "latitud": 40.37595
    }]];


  }


}

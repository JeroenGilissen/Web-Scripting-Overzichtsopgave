'use strict'

const Worp = require('./Worp');

// let dobbelsteen1 = new Dobbelsteen();
// let dobbelsteen2 = new Dobbelsteen();
// let dobbelsteen3 = new Dobbelsteen();
// let dobbelsteen4 = new Dobbelsteen();
// console.log(dobbelsteen1.zijde); // 1
// console.log(dobbelsteen2.zijde); // 2
// console.log(dobbelsteen3.zijde); // 1
// console.log(dobbelsteen4.zijde); // *
// console.log(dobbelsteen1.waarde); // 1
// console.log(dobbelsteen2.waarde); // 2
// console.log(dobbelsteen3.waarde); // 1
// console.log(dobbelsteen4.waarde); // 0
// console.log(dobbelsteen1.isGelijkAan(dobbelsteen2)); //false
// console.log(dobbelsteen1.isGelijkAan(dobbelsteen3)); //true
// console.log(dobbelsteen1.isGelijkAan(dobbelsteen4)); //true
// console.log(dobbelsteen4.isGelijkAan(dobbelsteen1)); //true

let worp = new Worp(4);
console.log(worp.resultaat);
'use strict'

class SpeelbaarObject {

    get waarde() {
        return 0;
    }

    // Functie controleerd of een speelbaarobject van het juiste type is.
    isGelijkAan(speelbaarObject) {
        if (!(speelbaarObject instanceof SpeelbaarObject)) {
            throw new Error("misse ingave: geen SpeelbaarObject");
        } else {
            return true;
        }
    }

    //1 + (0 TOT 1) * (1+6-1=)6 (maximaal 6.9999999999999999) afgerond naar beneden is getal tussen 0 en 6
    genereerWillekeurigGetal(min, max) {
        if (!(Number.isInteger(min)) || !(Number.isInteger(max)) || min > max) {
            throw new Error("misse ingave voor min of max");
        } else {
            return Math.floor(min + Math.random() * (1 + max - min));
        }
    }


}

class Dobbelsteen extends SpeelbaarObject {
    _zijde;

    constructor() {
        super();
        let worp = this.genereerWillekeurigGetal(1, 6);
        if (worp < 6) {
            this._zijde = worp;
        } else {
            this._zijde = '*';
        }
    }

    get zijde() {
        return this._zijde;
    }

    get waarde() {
        if (this._zijde === '*') {
            return 0;
        } else {
            return Number(this._zijde);
        }
    }

    isGelijkAan(speelbaarObject) {
        if (!(speelbaarObject instanceof SpeelbaarObject)) {
            throw new Error("misse ingave: geen SpeelbaarObject");
        } else if (!(speelbaarObject instanceof Dobbelsteen)) {
            throw new Error("misse ingave: geen Dobbelsteen");
        }
        if (speelbaarObject.zijde === this.zijde || speelbaarObject.zijde === '*' || this.zijde === '*') {
            return true;
        } else {
            return false;
        }
    }

}

class Worp {
    _dobbelstenen = [];

    constructor(aantalDobbelstenen) {

        if (!(aantalDobbelstenen >= 2)) {
            throw new Error("misse ingave voor aantalDobbelstenen");
        } else {
            for (let i = 0; i < aantalDobbelstenen; i++) {
                this.voegDobbelsteenToe(new Dobbelsteen());
            }
        }
    }

    voegDobbelsteenToe(dobbelsteen) {
        this._dobbelstenen.push(dobbelsteen);
    }

    get resultaat() {
        let hoogste = 0;
        for (let i = 0; i < this._dobbelstenen.length - 1; i++) {
            if (this._dobbelstenen[i].isGelijkAan(this._dobbelstenen[i + 1])) {
                let som = this._dobbelstenen[i].waarde + this._dobbelstenen[i + 1].waarde;
                if (som > hoogste) {
                    hoogste = som;
                }
            }
        }
        return hoogste;
    }
}

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
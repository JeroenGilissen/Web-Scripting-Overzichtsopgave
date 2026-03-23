'use strict'
const Dobbelsteen = require('./Dobbelsteen');
module.exports = class Worp {
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

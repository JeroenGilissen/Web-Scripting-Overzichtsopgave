'use strict'

const SpeelbaarObject = require('./SpeelbaarObject');

module.exports = class Dobbelsteen extends SpeelbaarObject {
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
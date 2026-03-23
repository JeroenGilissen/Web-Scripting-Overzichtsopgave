'use strict'

module.exports = class SpeelbaarObject {

    get waarde() {
        return 0;
    }

    isGelijkAan(speelbaarObject) {
        if (!(speelbaarObject instanceof SpeelbaarObject)) {
            throw new Error("misse ingave: geen SpeelbaarObject");
        } else {
            return true;
        }
    }

    //1 + (0 TOT 1) * (1+6-1=)6 (maximaal 6.9999999999999999) afgerond naar beneden is getal tussen 1 en 6
    genereerWillekeurigGetal(min, max) {
        if (!(Number.isInteger(min)) || !(Number.isInteger(max)) || min > max) {
            throw new Error("misse ingave voor min of max");
        } else {
            return Math.floor(min + Math.random() * (1 + max - min));
        }
    }


}

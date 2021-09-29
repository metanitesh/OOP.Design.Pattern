export class JazzBand {
    constructor() {
        this._name = "JazzMeUp";
    }
    get name() {
        return this._name;
    }
    playMusic() {
        return console.log("Jazz music");
    }
}
export class ElectronicBand {
    constructor() {
        this._name = "Electricity";
    }
    get name() {
        return this._name;
    }
    playMusic() {
        return console.log("Boom Boom music");
    }
}
export class BandFactory {
    createBand(mood) {
        let band;
        if (mood === 'classy') {
            band = new JazzBand();
        }
        if (mood === 'focus') {
            band = new ElectronicBand();
        }
        return band;
    }
}
export class MusicClient {
    playMusic(mood) {
        const bandFactory = new BandFactory();
        const band = bandFactory.createBand(mood);
        band.playMusic();
    }
}
const musicClient = new MusicClient();
musicClient.playMusic('classy');

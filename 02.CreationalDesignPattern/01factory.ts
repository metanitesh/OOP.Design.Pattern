

interface Band {
  name: string,
  playMusic: () => void
}

export class JazzBand implements Band {
  private _name = "JazzMeUp"

  get name() {
    return this._name
  }

  playMusic() {
    return console.log("Jazz music")
  }
}

export class ElectronicBand implements Band {
  private _name = "Electricity"

  get name() {
    return this._name
  }

  playMusic() {
    return console.log("Boom Boom music")
  }
}

type Mood = 'classy' | 'focus' | 'dance'

export class BandFactory {
  createBand(mood: Mood) {
    let band: Band;
    if (mood === 'classy') {
      band = new JazzBand()
    }

    if (mood === 'focus') {
      band = new ElectronicBand()
    }
    return band

  }
}

export class MusicClient {
  playMusic(mood: Mood) {
    const bandFactory = new BandFactory()
    const band = bandFactory.createBand(mood)
    band.playMusic()
  }
}

const musicClient = new MusicClient();
musicClient.playMusic('classy')

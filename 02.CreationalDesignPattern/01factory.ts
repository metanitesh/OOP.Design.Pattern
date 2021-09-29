

interface Band {
  name: string,
  playMusic: () => void
}

class JazzBand implements Band {
  private _name = "JazzMeUp"

  get name() {
    return this._name
  }

  playMusic() {
    return console.log("Jazz music")
  }
}

class ElectronicBand implements Band {
  private _name = "Electricity"

  get name() {
    return this._name
  }

  playMusic() {
    return console.log("Boom Boom music")
  }
}

type Mood = 'classy' | 'focus' | 'dance'

class BandFactory {
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

class MusicClient {
  playMusic(mood: Mood) {
    const bandFactory = new BandFactory()
    const band = bandFactory.createBand(mood)
    band.playMusic()
  }
}

const musicClient = new MusicClient();
musicClient.playMusic('classy')


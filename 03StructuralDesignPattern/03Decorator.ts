//: Playground - noun: a place where people can play

type INSTRUMENT = 'guitar' | 'drums' | 'bass'

interface Musician {
  instruments: string,
  play: () => void
}

class Guitarist implements Musician {
  instruments: INSTRUMENT = 'guitar'
  play() {
    console.log('this is a guitarist')
  }
}

class MusicianDecorator implements Musician {
  instruments: INSTRUMENT

  constructor(private decoratedMusician: Musician) {
  }

  play() {
    this.decoratedMusician.play()
  }
}

class GuitarDecorator extends MusicianDecorator {
  play() {
    super.play()
    console.log(" and play the \(Instrument.guitar)")
  }
}

class DrummerDecorator extends MusicianDecorator {
  play() {
    super.play()
    console.log(`and play the drums`)
  }
}

let drummerAndGuitarist = new GuitarDecorator(new DrummerDecorator(new Guitarist()))
drummerAndGuitarist.play()


//: Playground - noun: a place where people can play

interface PlaySongCommand {
  play: () => void
}

/// A command to play a song that needs to be fetched over the network first
class RemoteSongCommand implements PlaySongCommand {


  constructor(private songURL) { }

  play() {
    console.log('playing remote song')
  }
}

/// A command to play a song that is available in disk.
class LocalSongCommand implements PlaySongCommand {


  constructor(private songURL) {
  }

  play() {
    console.log('playing local song')
  }
}

/**
 The music player which can execute and queue PlaySongCommands.
 */
class MusicPlayer {

  private queue: PlaySongCommand[] = []

  play(command: PlaySongCommand) {
    command.play()
  }

  addToQueue(command: PlaySongCommand) {
    this.queue.push(command)
  }

  playNext() {

    const command = this.queue.pop()
    this.play(command)
  }
}

const musicPlayer = new MusicPlayer()
const localSong = new LocalSongCommand('file://niteshsharma.mpv')
const remoteSong = new RemoteSongCommand('http://niteshsharma.com')
musicPlayer.addToQueue(localSong)
musicPlayer.addToQueue(localSong)
musicPlayer.addToQueue(remoteSong)

musicPlayer.playNext()
musicPlayer.playNext()
musicPlayer.playNext()

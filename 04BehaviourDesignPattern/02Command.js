//: Playground - noun: a place where people can play
/// A command to play a song that needs to be fetched over the network first
var RemoteSongCommand = /** @class */ (function () {
    function RemoteSongCommand(songURL) {
        this.songURL = songURL;
    }
    RemoteSongCommand.prototype.play = function () {
        console.log('playing remote song');
    };
    return RemoteSongCommand;
}());
/// A command to play a song that is available in disk.
var LocalSongCommand = /** @class */ (function () {
    function LocalSongCommand(songURL) {
        this.songURL = songURL;
    }
    LocalSongCommand.prototype.play = function () {
        console.log('playing local song');
    };
    return LocalSongCommand;
}());
/**
 The music player which can execute and queue PlaySongCommands.
 */
var MusicPlayer = /** @class */ (function () {
    function MusicPlayer() {
        this.queue = [];
    }
    MusicPlayer.prototype.play = function (command) {
        command.play();
    };
    MusicPlayer.prototype.addToQueue = function (command) {
        this.queue.push(command);
    };
    MusicPlayer.prototype.playNext = function () {
        var command = this.queue.pop();
        this.play(command);
    };
    return MusicPlayer;
}());
var musicPlayer = new MusicPlayer();
var localSong = new LocalSongCommand('file://niteshsharma.mpv');
var remoteSong = new RemoteSongCommand('http://niteshsharma.com');
musicPlayer.addToQueue(localSong);
musicPlayer.addToQueue(localSong);
musicPlayer.addToQueue(remoteSong);
musicPlayer.playNext();
musicPlayer.playNext();
musicPlayer.playNext();

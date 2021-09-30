//: Playground - noun: a place where people can play
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Guitarist = /** @class */ (function () {
    function Guitarist() {
        this.instruments = 'guitar';
    }
    Guitarist.prototype.play = function () {
        console.log('this is a guitarist');
    };
    return Guitarist;
}());
var MusicianDecorator = /** @class */ (function () {
    function MusicianDecorator(decoratedMusician) {
        this.decoratedMusician = decoratedMusician;
    }
    MusicianDecorator.prototype.play = function () {
        this.decoratedMusician.play();
    };
    return MusicianDecorator;
}());
var GuitarDecorator = /** @class */ (function (_super) {
    __extends(GuitarDecorator, _super);
    function GuitarDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuitarDecorator.prototype.play = function () {
        _super.prototype.play.call(this);
        console.log(" and play the \(Instrument.guitar)");
    };
    return GuitarDecorator;
}(MusicianDecorator));
var DrummerDecorator = /** @class */ (function (_super) {
    __extends(DrummerDecorator, _super);
    function DrummerDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrummerDecorator.prototype.play = function () {
        _super.prototype.play.call(this);
        console.log("and play the drums");
    };
    return DrummerDecorator;
}(MusicianDecorator));
var drummerAndGuitarist = new GuitarDecorator(new DrummerDecorator(new Guitarist()));
drummerAndGuitarist.play();

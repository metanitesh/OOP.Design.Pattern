"use strict";
exports.__esModule = true;
exports.Subscriber = exports.Publisher = void 0;
var Publisher = /** @class */ (function () {
    function Publisher() {
        this.subscribers = [];
    }
    Publisher.prototype.subscribe = function (subscribeObj) {
        this.subscribers.push(subscribeObj);
    };
    Publisher.prototype.publish = function (message) {
        this.subscribers.forEach(function (subscriber) { return subscriber.receivedMessage(message); });
    };
    return Publisher;
}());
exports.Publisher = Publisher;
var Subscriber = /** @class */ (function () {
    function Subscriber(name) {
        this.name = name;
    }
    Subscriber.prototype.receivedMessage = function (message) {
        console.log(this.name + " " + message);
    };
    return Subscriber;
}());
exports.Subscriber = Subscriber;
var subscriber1 = new Subscriber('s1');
var subscriber2 = new Subscriber('s2');
var publisher = new Publisher();
publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);
publisher.publish('hello world');

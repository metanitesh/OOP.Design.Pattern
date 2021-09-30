"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.MessageAdopter = void 0;
var MessageSender = /** @class */ (function () {
    function MessageSender() {
    }
    MessageSender.prototype.send = function (message) {
        message.recipients.forEach(function (message) { return console.log(message); });
    };
    return MessageSender;
}());
var MessageAdopter = /** @class */ (function () {
    function MessageAdopter(legacyMessage) {
        this.legacyMessage = legacyMessage;
    }
    Object.defineProperty(MessageAdopter.prototype, "message", {
        get: function () {
            return __assign(__assign({}, this.legacyMessage), { recipients: [this.legacyMessage.recipient] });
        },
        enumerable: false,
        configurable: true
    });
    return MessageAdopter;
}());
exports.MessageAdopter = MessageAdopter;
var message = new MessageAdopter({
    id: '1',
    text: 'Hello world',
    recipient: 'nit@gmail.com'
});
var messageSender = new MessageSender();
messageSender.send(message.message);

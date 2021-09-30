"use strict";
exports.__esModule = true;
exports.OrderFacade = exports.PaymentProcessor = exports.ConcertManager = void 0;
// A class for interacting with different concerts
var ConcertManager = /** @class */ (function () {
    function ConcertManager() {
    }
    return ConcertManager;
}());
exports.ConcertManager = ConcertManager;
// A class for processing payments
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor() {
    }
    return PaymentProcessor;
}());
exports.PaymentProcessor = PaymentProcessor;
var OrderFacade = /** @class */ (function () {
    function OrderFacade(paymentProcessor, concertManager) {
        this.paymentProcessor = paymentProcessor;
        this.concertManager = concertManager;
    }
    OrderFacade.prototype.process = function (order) {
    };
    return OrderFacade;
}());
exports.OrderFacade = OrderFacade;

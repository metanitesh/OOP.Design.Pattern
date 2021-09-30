// A class for interacting with different concerts
var ConcertManager = /** @class */ (function () {
    function ConcertManager() {
    }
    return ConcertManager;
}());
// A class for processing payments
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor() {
    }
    return PaymentProcessor;
}());
var OrderFacade = /** @class */ (function () {
    function OrderFacade(paymentProcessor, concertManager) {
        this.paymentProcessor = paymentProcessor;
        this.concertManager = concertManager;
    }
    OrderFacade.prototype.process = function (order) {
    };
    return OrderFacade;
}());

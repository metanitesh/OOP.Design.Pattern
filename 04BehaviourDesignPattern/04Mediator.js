/// 2. Producer
var CustomerRepresentative = /** @class */ (function () {
    function CustomerRepresentative() {
    }
    CustomerRepresentative.prototype.sendPromotionEmail = function () {
        var email = {
            body: "Get 50% off your next purchase!", subject: "Promo"
        };
        var demographics = {
            isActiveUser: true, madePurchaseRecently: true
        };
        var mediator = new EmailMediator();
        mediator.send(email, demographics);
    };
    return CustomerRepresentative;
}());
/// 3. Mediator
var EmailMediator = /** @class */ (function () {
    function EmailMediator() {
        this.users = [
            { name: "John", emailAddress: "john@emailprovider.com" },
            { name: "Mary", emailAddress: "mary@emailprovider.com" },
            { name: "Bob", emailAddress: "bob@emailprovider.com" },
        ];
    }
    EmailMediator.prototype.send = function (email, toUsersWith) {
        var _this = this;
        this.users.forEach(function (user) {
            if (toUsersWith.isActiveUser) {
                _this.sendEmail();
            }
        });
    };
    EmailMediator.prototype.sendEmail = function () {
        console.log("sending email");
    };
    return EmailMediator;
}());

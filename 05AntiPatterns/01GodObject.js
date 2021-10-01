var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    UserInfo.prototype.setUserInfo = function () {
    };
    return UserInfo;
}());
var UserPreference = /** @class */ (function () {
    function UserPreference() {
        this.userPreferences = [];
    }
    UserPreference.prototype.setUserPreference = function (userPreference) {
    };
    return UserPreference;
}());
var UserONBoarding = /** @class */ (function () {
    function UserONBoarding() {
        this.stepTracker = [];
    }
    UserONBoarding.prototype.completeFeature1 = function () {
        this.stepTracker.push('feature1');
    };
    UserONBoarding.prototype.completeFeature2 = function () {
        this.stepTracker.push('feature2');
    };
    return UserONBoarding;
}());

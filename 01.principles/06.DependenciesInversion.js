//: Playground - noun: a place where people can play
var Message = /** @class */ (function () {
    function Message(id, text) {
        this.id = id;
        this.text = text;
    }
    return Message;
}());
var MessageCacher = /** @class */ (function () {
    function MessageCacher(objectCache) {
        this.objectCache = objectCache;
    }
    MessageCacher.prototype.store = function (message) {
        this.objectCache.cache(message);
    };
    return MessageCacher;
}());
var InMemoryCache = /** @class */ (function () {
    function InMemoryCache() {
    }
    InMemoryCache.prototype.cache = function () {
    };
    return InMemoryCache;
}());

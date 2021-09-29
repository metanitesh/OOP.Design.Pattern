"use strict";
exports.__esModule = true;
exports.ImageCache = void 0;
var InMemoryCache = /** @class */ (function () {
    function InMemoryCache() {
    }
    InMemoryCache.prototype.cache = function () {
        console.log('InMemoryCache');
    };
    return InMemoryCache;
}());
var DiskCache = /** @class */ (function () {
    function DiskCache() {
    }
    DiskCache.prototype.cache = function () {
        console.log('InDiskCache');
    };
    return DiskCache;
}());
var ImageCache = /** @class */ (function () {
    function ImageCache(objectCache) {
        this.objectCache = objectCache;
    }
    return ImageCache;
}());
exports.ImageCache = ImageCache;
var imageCache = new ImageCache(new InMemoryCache());
var diskCache = new ImageCache(new DiskCache());
imageCache.objectCache.cache();
diskCache.objectCache.cache();

var GrayScaleConverter = /** @class */ (function () {
    function GrayScaleConverter() {
    }
    GrayScaleConverter.prototype.handle = function () {
        console.log('Grayscale image');
    };
    return GrayScaleConverter;
}());
var ThumbnailConverter = /** @class */ (function () {
    function ThumbnailConverter() {
    }
    ThumbnailConverter.prototype.handle = function () {
        console.log('Thumbnail image');
    };
    return ThumbnailConverter;
}());
var ImageProcessor = /** @class */ (function () {
    function ImageProcessor() {
        this.handlers = [
            new GrayScaleConverter(),
            new ThumbnailConverter()
        ];
    }
    ImageProcessor.prototype.process = function () {
        this.handlers.forEach(function (handler) { return handler.handle(); });
    };
    return ImageProcessor;
}());
var imageProcessor = new ImageProcessor();
imageProcessor.process();

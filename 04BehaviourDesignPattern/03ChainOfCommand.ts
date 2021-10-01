type Image = {
  image: BinaryData
}

interface ImageHandler {
  handle: () => void
}

class GrayScaleConverter implements ImageHandler {
  handle() {
    console.log('Grayscale image')
  }
}

class ThumbnailConverter implements ImageHandler {
  handle() {
    console.log('Thumbnail image')
  }
}

class ImageProcessor {
  private handlers: ImageHandler[]
  constructor() {
    this.handlers = [
      new GrayScaleConverter(),
      new ThumbnailConverter()
    ]
  }

  process() {
    this.handlers.forEach(handler => handler.handle())
  }

}

const imageProcessor = new ImageProcessor()
imageProcessor.process()

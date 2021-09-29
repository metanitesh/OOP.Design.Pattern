
interface Cache {
  cache: () => void
}

class InMemoryCache implements Cache {
  cache() {
    console.log('InMemoryCache')
  }
}

class DiskCache implements Cache {
  cache() {
    console.log('InDiskCache')
  }
}

export class ImageCache {
  objectCache: Cache

  constructor(objectCache: Cache) {
    this.objectCache = objectCache
  }
}

let imageCache = new ImageCache(new InMemoryCache())
let diskCache = new ImageCache(new DiskCache())

imageCache.objectCache.cache()
diskCache.objectCache.cache()



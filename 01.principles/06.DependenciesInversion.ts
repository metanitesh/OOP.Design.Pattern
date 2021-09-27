//: Playground - noun: a place where people can play

interface ObjectCache {
  cache: (message: Message) => void
}

class Message {
  constructor(private id: string, private text: string) {
  }
}

class MessageCacher {

  constructor(private objectCache: ObjectCache) {
  }

  store(message: Message) {
    this.objectCache.cache(message)
  }
}


class InMemoryCache implements ObjectCache {
  cache() {
  }
}

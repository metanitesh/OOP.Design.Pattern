export class Publisher {
  private subscribers = []

  subscribe(subscribeObj: Subscriber) {
    this.subscribers.push(subscribeObj)
  }

  publish(message: string) {
    this.subscribers.forEach(subscriber => subscriber.receivedMessage(message))
  }
}

export class Subscriber {
  constructor(private name) {

  }
  receivedMessage(message) {
    console.log(this.name + " " + message)
  }
}

const subscriber1 = new Subscriber('s1')
const subscriber2 = new Subscriber('s2')

const publisher = new Publisher()
publisher.subscribe(subscriber1)
publisher.subscribe(subscriber2)

publisher.publish('hello world')

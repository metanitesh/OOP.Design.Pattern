class MessageSender {
  send(message: Message) {
    message.recipients.forEach(message => console.log(message))
  }
}

export interface Message {
  id: string
  text: string
  recipients: [string]
}

export interface LegacyMessage {
  id: string
  text: string
  recipient: string
}

export class MessageAdopter {
  constructor(private legacyMessage: LegacyMessage) {

  }
  get message(): Message {
    return {
      ...this.legacyMessage,
      recipients: [this.legacyMessage.recipient]
    }
  }
}

const message = new MessageAdopter({
  id: '1',
  text: 'Hello world',
  recipient: 'nit@gmail.com'
})

const messageSender = new MessageSender()
messageSender.send(message.message)
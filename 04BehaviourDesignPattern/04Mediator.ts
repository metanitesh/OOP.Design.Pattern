
interface User {
  name: string
  emailAddress: string
}


type Email = {
  body: string
  subject: string
}

type EmailDemographics = {
  isActiveUser: boolean
  madePurchaseRecently: boolean
}
/// 2. Producer
class CustomerRepresentative {
  sendPromotionEmail() {
    let email: Email = {
      body: "Get 50% off your next purchase!", subject: "Promo"
    }
    let demographics: EmailDemographics = {
      isActiveUser: true, madePurchaseRecently: true
    }

    let mediator = new EmailMediator()
    mediator.send(email, demographics)
  }
}




/// 3. Mediator
class EmailMediator {

  private users: User[] = [
    { name: "John", emailAddress: "john@emailprovider.com" },
    { name: "Mary", emailAddress: "mary@emailprovider.com" },
    { name: "Bob", emailAddress: "bob@emailprovider.com" },
  ]

  send(email: Email, toUsersWith: EmailDemographics) {
    this.users.forEach(user => {
      if (toUsersWith.isActiveUser) {
        this.sendEmail()
      }
    })
  }

  sendEmail() {
    console.log("sending email")
  }

}


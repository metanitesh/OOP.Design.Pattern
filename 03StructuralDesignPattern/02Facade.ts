// An order for a ticket to a concert
interface Order {
  userId: String
  payment: PaymentInformation
  concert: Concert
}

// A user's payment information
interface PaymentInformation {
  creditCardNumber: String
  // ...other fields
}

// A concert
interface Concert {
  id: String
  // ...other fields
}

// A class for interacting with different concerts
class ConcertManager {
}

// A class for processing payments
class PaymentProcessor {
}

class OrderFacade {
  constructor(private paymentProcessor: PaymentInformation, private concertManager: ConcertManager) {

  }

  process(order: Order) {

  }
}
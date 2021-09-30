// An order for a ticket to a concert
export interface Order {
  userId: String
  payment: PaymentInformation
  concert: Concert
}

// A user's payment information
export interface PaymentInformation {
  creditCardNumber: String
  // ...other fields
}

// A concert
export interface Concert {
  id: String
  // ...other fields
}

// A class for interacting with different concerts
export class ConcertManager {
}

// A class for processing payments
export class PaymentProcessor {
}

export class OrderFacade {
  constructor(private paymentProcessor: PaymentInformation, private concertManager: ConcertManager) {

  }

  process(order: Order) {

  }
}
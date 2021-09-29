class NetworkClient {
  static shared = new NetworkClient()

  constructor() {
    return NetworkClient.shared
  }

  fetchUser() {
    console.log('user fetched')
  }
}

const ne = new NetworkClient()
ne.fetchUser()
NetworkClient.shared.fetchUser()

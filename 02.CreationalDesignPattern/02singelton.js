class NetworkClient {
    constructor() {
    }
    fetchUser() {
        console.log('user fetched');
    }
}
NetworkClient.shared = new NetworkClient();

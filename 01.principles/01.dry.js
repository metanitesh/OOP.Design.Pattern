var geUserName = function (user) {
    return user.firstName + " " + user.lastName;
};
var getUserAddress = function (user) {
    return "Hello " + geUserName(user) + " the address is " + user.address;
};
var greetUser = function (user) {
    return "Hello " + geUserName(user);
};
console.log(getUserAddress({
    firstName: "Nitesh",
    lastName: "Sharma",
    address: "Bangalore"
}));
console.log(greetUser({
    firstName: "Nitesh",
    lastName: "Sharma",
    address: "Bangalore"
}));

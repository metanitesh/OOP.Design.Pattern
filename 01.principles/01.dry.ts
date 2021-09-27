type UserType = {
  firstName: string,
  lastName: string
  address: string
}

const geUserName = (user: UserType) => {
  return `${user.firstName} ${user.lastName}`
}

const getUserAddress = (user: UserType) => {
  return `Hello ${geUserName(user)} the address is ${user.address}`
}

const greetUser = (user: UserType) => {
  return `Hello ${geUserName(user)}`
}

console.log(getUserAddress({
  firstName: "Nitesh",
  lastName: "Sharma",
  address: "Bangalore"
}))

console.log(greetUser({
  firstName: "Nitesh",
  lastName: "Sharma",
  address: "Bangalore"
}))
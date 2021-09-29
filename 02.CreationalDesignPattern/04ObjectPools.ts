class Particle {
  constructor(public rank: number) {
  }
}

const objectPool = []

for (let index = 0; index < 100; index++) {
  const element = objectPool.push(new Particle(index))
}

const particle = objectPool.pop()
objectPool.push(particle)
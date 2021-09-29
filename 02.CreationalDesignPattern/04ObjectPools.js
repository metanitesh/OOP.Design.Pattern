var Particle = /** @class */ (function () {
    function Particle(rank) {
        this.rank = rank;
    }
    return Particle;
}());
var objectPool = [];
for (var index = 0; index < 100; index++) {
    var element = objectPool.push(new Particle(index));
}
var particle = objectPool.pop();
objectPool.push(particle);

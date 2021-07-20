function Car(model) {
    this.model = model;
}

let cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus'),
    new Car('Ferrari'),
    new Car('Fiat')
]

let carSearch = cars.find(function(car) {
    return car.model === 'Ferrari';
});

console.log(carSearch);
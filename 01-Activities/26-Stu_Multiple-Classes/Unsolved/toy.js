class ToyClass {
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
}

const toysArray = [
  new ToyClass('Action Figure', 14.99, 5),
  new ToyClass('Rare Toy', 17.99, 1),
];

module.exports = {
  ToyClass,
  toysArray,
};

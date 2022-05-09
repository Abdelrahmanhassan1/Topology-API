class ElectricComponent {
  constructor(Default, min, max) {
    this.Default = Default;
    this.min = min;
    this.max = max;
  }
}

let resistance = new ElectricComponent(100, 10, 1000);
console.log(resistance.Default);

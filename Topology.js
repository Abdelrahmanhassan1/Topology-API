class ElectricComponent {
  constructor(Default, min, max) {
    this.Default = Default;
    this.min = min;
    this.max = max;
  }
}

class Netlist {
  constructor(netlist_object) {
    this.netlist = new Map();
    let size = Object.keys(netlist_object).length;
    let keys = Object.keys(netlist_object);

    for (let i = 0; i < size; i++) {
      this.netlist.set(keys[i], netlist_object[keys[i]]);
    }
  }
}

class Topology {
  constructor(
    id,
    component_type,
    component_id,
    electricComponent,
    netlistObject
  ) {
    this.id = id;
    this.component_type = component_type;
    this.component_id = component_id;
    this.electricComponent = electricComponent;
    this.netlistObject = netlistObject;
    this.components = {
      type: this.component_type,
      id: this.component_id,
      electricComponent: this.electricComponent,
      netlistObject: this.netlistObject,
    };
  }
}
let resistance = new ElectricComponent(100, 10, 1000);
let netlist = new Netlist({ t1: "vdd", t2: "n1" });

let topology = new Topology("top1", "resistance", "res1", resistance, netlist);
// console.log(topology.electricComponent);
console.log(topology.components);

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

// let n1 = {
//   "t1": "vdd",
//   "t2": "n1"
// }
// let n2 = {
//   "drain": "n1",
//   "gate": "vin",
//   "source": "vss"
// }

// const net1 = new Netlist(n1);
// const net2 = new Netlist(n2);

// console.log(net1);
// console.log(net2);

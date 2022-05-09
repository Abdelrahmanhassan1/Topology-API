// import ElectricComponent from "./ElectronicComponent";
// const Many = require("ts-mixer");
const ElectricComponent = require("./ElectronicComponent");
const Netlist = require("./Netlist");
class Topology extends (ElectricComponent, Netlist) {
  constructor(id, components, Default, min, max, netlist_object) {
    super(Default, min, max);
    // super(netlist_object);
    this.id = id;
    this.components = components;
    console.log(this.Default);
    console.log(this.min);
  }
}
















// let topology_1 = new Topology("top1", [], 100, 10, 1000, { abdo: "10" });

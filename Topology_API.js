const fs = require("fs");
const jsonfile = require("jsonfile");
class Topology_API {
  constructor(filename) {
    this.filename = filename;
    this.data = JSON.parse(fs.readFileSync(filename, "utf-8"));
    this.devices = [];
    for (let i = 0; i < this.data.length; i++) {
      this.devices.push(this.data[i].components);
    }
  }

  // print all devices of the topology
  query_devices(topology_id) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === topology_id) {
        console.log(this.data[i].components);
      }
    }
  }
  // print devices with specific netlist id
  query_devices_with_netlist_node(topology_id, netlist_node_id) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === topology_id) {
        for (let j = 0; j < this.data[i].components.length; j++) {
          if (this.data[i].components[j].id === netlist_node_id) {
            let specific_device = this.data[i].components[j];
            console.log(specific_device);
          }
        }
      }
    }
  }
  // delete specific topology
  delete_topology(topology_id) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === topology_id) {
        this.data.splice(i, 1);
        break;
      }
    }
    // update the json file
    jsonfile.writeFile(this.filename, this.data);
    console.log(this.data);
  }
  // show the topologies stored
  query_topologies() {
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i]);
    }
  }
}

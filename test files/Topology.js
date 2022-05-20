class Topology {
  constructor(
    id,
    component_type,
    component_id,
    electricComponents,
    netlistObject
  ) {
    this.id = id;
    this.component_type = component_type;
    this.component_id = component_id;
    this.electricComponent = electricComponents;
    this.netlistObject = netlistObject;
    this.components = {
      type: this.component_type,
      id: this.component_id,
      electricComponent: this.electricComponent,
      netlistObject: this.netlistObject,
    };
  }
}

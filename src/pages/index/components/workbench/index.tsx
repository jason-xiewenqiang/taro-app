import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import Modules from "./modules";
import Padding from "./padding";

export default class Workbench extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: "module",
    };
  }
  render() {
    const { current } = this.state;
    return <View>{current === "module" ? <Modules /> : <Padding />}</View>;
  }
}

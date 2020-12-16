import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import ModulesHeader from './modules-header';
import { v4 as uuidv4 } from "uuid";
import Group from './group';

export default class Modules extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      groups: [
        {
          name:'分组1',
          id: uuidv4(),
          group: [
            { name:'模块1', id: uuidv4() },
            { name:'模块2', id: uuidv4() },
            { name:'模块3', id: uuidv4() },
            { name:'模块4', id: uuidv4() },
            { name:'模块5', id: uuidv4() },
          ]
        },
        {
          name:'分组2',
          id: uuidv4(),
          group: [
            { name:'模块1', id: uuidv4() },
            { name:'模块2', id: uuidv4() },
            { name:'模块3', id: uuidv4() },
            { name:'模块4', id: uuidv4() },
            { name:'模块5', id: uuidv4() },
          ]
        },
        {
          name:'分组3',
          id: uuidv4(),
          group: [
            { name:'模块1', id: uuidv4() },
            { name:'模块2', id: uuidv4() },
            { name:'模块3', id: uuidv4() },
            { name:'模块4', id: uuidv4() },
            { name:'模块5', id: uuidv4() },
          ]
        },
        {
          name:'分组4',
          id: uuidv4(),
          group: [
            { name:'模块1', id: uuidv4() },
            { name:'模块2', id: uuidv4() },
            { name:'模块3', id: uuidv4() },
            { name:'模块4', id: uuidv4() },
            { name:'模块5', id: uuidv4() },
          ]
        },
      ]
    }
  }
  render() {
    return (
        <View className="modules-view">
          <ModulesHeader/>
          <View className="groups">
            <Group/> 
          </View>
        </View>
    );
  }
}

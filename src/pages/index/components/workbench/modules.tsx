import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import ModulesHeader from './modules-header';
import Group from './group';

export default class Modules extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      groups: [
        {
          name:'分组1',
          id: 'dds',
          group: [
            { name:'模块1', id:'qwq' },
            { name:'模块2', id:'qwq' },
            { name:'模块3', id:'qwq' },
            { name:'模块4', id:'qwq' },
            { name:'模块5', id:'qwq' },
          ]
        },
        {
          name:'分组2',
          id: 'qwq',
          group: [
            { name:'模块1', id: 'uuidv4' },
            { name:'模块2', id: 'uuidv4' },
            { name:'模块3', id: 'uuidv4' },
            { name:'模块4', id: 'uuidv4' },
            { name:'模块5', id: 'uuidv4' },
          ]
        },
        {
          name:'分组3',
          id: 'uuidv4',
          group: [
            { name:'模块1', id: 'uuidv4' },
            { name:'模块2', id: 'uuidv4' },
            { name:'模块3', id: 'uuidv4' },
            { name:'模块4', id: 'uuidv4' },
            { name:'模块5', id: 'uuidv4' },
          ]
        },
        {
          name:'分组4',
          id: 'uuidv4',
          group: [
            { name:'模块1', id: 'uuidv4' },
            { name:'模块2', id: 'uuidv4' },
            { name:'模块3', id: 'uuidv4' },
            { name:'模块4', id: 'uuidv4' },
            { name:'模块5', id: 'uuidv4' },
            { name:'模块5', id: 'uuidv4' },
            { name:'模块5', id: 'uuidv4' },
            { name:'模块5', id: 'uuidv4' },
            { name:'模块5', id: 'uuidv4' },
            { name:'模块5', id: 'uuidv4' },
            { name:'模块5', id: 'uuidv4' },
          ]
        },
      ]
    }
  }
  // 点击了一个模块
  moduleItemClick(item) {
    console.log(item)
  }
  // 点击了一个处理项
  handleItemClick(mission) {
    console.log(mission)
    this.props.changeView(mission)
  }
  render() {
    const {groups} = this.state;
    return (
        <View className="modules-view">
          <ModulesHeader handleItemClick={this.handleItemClick.bind(this)}/>
          <View className="groups">
            {
              groups.map(group =>(
                <Group item={group} key={group.id} itemClick={this.moduleItemClick.bind(this)}/> 
              ))
            }
          </View>
        </View>
    );
  }
}

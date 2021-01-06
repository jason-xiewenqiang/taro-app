import React, { Component } from "react";
import { View } from "@tarojs/components";
import ModulesHeader from './modules-header';
import Group from './group';
import uuid from '../../../../utils/uuid';
import { connect }  from 'react-redux';
@connect(({ modules })=>({ modules }), (dispatch)=>({}))
class Modules extends Component {
  constructor() {
    super(...arguments);
  }
  // 点击了一个模块
  moduleItemClick(item) {
    console.log(item)
  }
  // 点击了一个处理项
  handleItemClick(mission) {
    this.props.changeView(mission)
  }
  render() {
    const { modules: { group } } = this.props;
    return (
        <View className='modules-view'>
          <ModulesHeader handleItemClick={this.handleItemClick.bind(this)} />
          <View className='groups'>
            {
              group.map(g =>(
                <Group item={g} key={uuid()} itemClick={this.moduleItemClick.bind(this)} />
              ))
            }
          </View>
        </View>
    );
  }
}

export default Modules

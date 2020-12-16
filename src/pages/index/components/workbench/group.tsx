import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtIcon } from 'taro-ui'
import './group.scss';
export default class Group extends Component {
  constructor() {
    super(...arguments)
  }
  render() {
    return (
      <View className="pre-group">
        <View className="group-name">分组1</View>
        <View className="group-items">
          <View className="group-item">
            <AtIcon value='user' size='30' color='#000'></AtIcon>
            <Text>模块1</Text>
          </View>
        </View>
      </View>
    )
  }
}
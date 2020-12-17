import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtIcon,AtAvatar  } from 'taro-ui'
import './group.scss';
export default class Group extends Component {
  constructor() {
    super(...arguments)
  }
  render() {
    const { item, itemClick } = this.props;
    return (
      <View className="pre-group">
        <View className="group-name">{item.name}</View>
        <View className="group-items">
          {
            item.group.map(g=>(
              <View className="group-item" key={g.id} onClick={() => {itemClick(g)}}>
                <AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
                <Text>{g.name}</Text>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}
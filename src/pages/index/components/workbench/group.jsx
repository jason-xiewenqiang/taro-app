import React, { Component } from "react";
import { View,Text } from "@tarojs/components";
import { AtGrid, AtAvatar  } from 'taro-ui'
import './group.scss';

export default class Group extends Component {
  constructor() {
    super(...arguments)
  }
  render() {
    const { item, itemClick } = this.props;
    return (
      <View className='pre-group'>
        <View className='group-name'>{item.name || '默认分组'}</View>
        <View className="group-items">
          {
            item && item.children ? item.children.map(g=>(
              <View className="group-item" key={g.id} onClick={() => {itemClick(g)}}>
                <i className={g.iconfont} style={g.style}></i>
                <Text className="text">{g.title}</Text>
              </View>
            )) : null
          }
        </View>
        {/* <AtGrid mode='square' hasBorder={false} data={item.children} onClick={() => {itemClick()}}></AtGrid> */}
      </View>
    )
  }
}

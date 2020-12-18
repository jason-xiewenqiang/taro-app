import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import PaddingCard from './padding-card';
import { navigateTo } from '@tarojs/taro'
export default class Padding extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      missions: [
        {
          name: '机房巡检',
          area: '数据楼三楼数据机房....',
          from: '机房检测',
          type: '事件处理',
          time: '2020-12-17',
          system: '工单',
          id: 'uuidv4'
        },
        {
          name: '机房巡检',
          area: '数据楼三楼数据机房....',
          from: '机房检测',
          type: '事件处理',
          time: '2020-12-17',
          system: '工单',
          id: 'uuidv4'
        },
        {
          name: '机房巡检',
          area: '数据楼三楼数据机房....',
          from: '机房检测',
          type: '事件处理',
          time: '2020-12-17',
          system: '工单',
          id: 'uuidv4'
        },
        {
          name: '机房巡检',
          area: '数据楼三楼数据机房....',
          from: '机房检测',
          type: '事件处理',
          time: '2020-12-17',
          system: '工单',
          id: 'uuidv4'
        },
      ]
    }
  }
  toDetail(info) {
    console.log('toDetail >> ', info)
    navigateTo({
      url: `/pages/detail/index?id=${info.id}`
    })
  }
  render() {
    const { missions } = this.state;
    return (
        <View className="padding-page">
          {
            missions.map(mission => (
              <PaddingCard info={mission} toDetail={this.toDetail.bind(this)} key={mission.id}/>
            ))
          }
        </View>
    );
  }
}

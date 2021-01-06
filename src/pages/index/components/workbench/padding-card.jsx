import React, { Component } from "react";
import { View } from "@tarojs/components";
import { AtAvatar } from "taro-ui";
import "./padding-card.scss";

export default class PaddingCard extends Component {
  constructor() {
    super(...arguments);
  }
  render() {
    const { name, area, time, system, type, from } = this.props.info;
    return (
      <View className='padding-card'>
        <View className='card-header'>
          <AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar> {name}
        </View>
        <View className='card-info'>
          <View className='card-label'>巡检范围：</View>
          <View className='card-text'>{area}</View>
        </View>
        <View className='card-info'>
          <View className='card-label'>任务来源：</View>
          <View className='card-text'>{from}</View>
        </View>
        <View className='card-info'>
          <View className='card-label'>任务类型：</View>
          <View className='card-text'>{type}</View>
        </View>
        <View className='line'></View>
        <View className='card-bottom'>
          <View className='time-box'>
            {time} 来自 {system}
          </View>
          <View
            className='check-info'
            onClick={() => {
              this.props.toDetail(this.props.info);
            }}
          >
            查看详情
          </View>
        </View>
      </View>
    );
  }
}

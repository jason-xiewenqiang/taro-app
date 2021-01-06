import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtDivider } from "taro-ui";
import { navigateTo } from "@tarojs/taro";
import "taro-ui/dist/style/components/divider.scss";
import "./alarm.scss";

export default class Alarm extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      messages: [
        {
          time: "11:12",
          info:
            "会议通知：产品设计部会议即将开始 会议时间：2020-12-18 10:30 会议地点：....",
        },
        {
          time: "16:30",
          info:
            "会议通知：产品设计部会议即将开始 会议时间：2020-12-18 10:30 会议地点：....",
        },
      ],
    };
    this.checkDetail.bind(this);
  }
  checkDetail(info) {
    console.log("查看详情", info);
    navigateTo({
      url: `/pages/detail/index?id=${info.time}`,
    });
  }
  render() {
    const { messages } = this.state;
    return (
      <View className='alarm'>
        {messages.map((msg) => (
          <View className='card' key={msg.time}>
            <View className='time'>{msg.time}</View>
            <View className='content'>
              <Text>{msg.info}</Text>
              <AtDivider content='' className='divider' />
              <Text
                className='check'
                onClick={() => {
                  this.checkDetail(msg);
                }}
              >
                查看详情
              </Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

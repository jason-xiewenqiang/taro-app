import React, { Component } from "react";
import { View } from "@tarojs/components";
import { AtNavBar } from "taro-ui";
import { navigateTo } from "@tarojs/taro";
import "./index.scss";

export default class Detail extends Component {
  constructor() {
    super(...arguments);
  }
  onClickLeftIcon() {
    navigateTo({ url: "/pages/index/index" });
  }
  render() {
    return (
      <View className="detail-page">
        <View className="detail-top">
          <AtNavBar
            onClickLeftIcon={this.onClickLeftIcon.bind(this)}
            color="#000"
            title="详情"
            leftText="返回"
            leftIconType="chevron-left"
          />
        </View>
        <View className="desc">
          <View className="label">会议类型：</View>
          <View className="text">专题会议</View>
        </View>
        <View className="desc">
          <View className="label">会议名称：</View>
          <View className="text">用户体验部专题会议</View>
        </View>
        <View className="desc">
          <View className="label">会议状态：</View>
          <View className="text">未开始</View>
        </View>
        <View className="desc">
          <View className="label">发起人：</View>
          <View className="text">张三战三</View>
        </View>
        <View className="desc">
          <View className="label">会议地点：</View>
          <View className="text">总部会议室401</View>
        </View>
        <View className="desc">
          <View className="label">会议内容：</View>
          <View className="text">用户体验专题分享</View>
        </View>
        <View className="desc">
          <View className="label">会议内容：</View>
          <View className="text">用户体验专题分享</View>
        </View>
        <View className="desc">
          <View className="label">会议内容：</View>
          <View className="text">用户体验专题分享</View>
        </View>
        <View className="desc">
          <View className="label">参会者：</View>
          <View className="text">张三、张三、张三、张三、张三、张三....</View>
        </View>
        <View className="desc">
          <View className="label">开始时间：</View>
          <View className="text">2020-11-12</View>
        </View>
        <View className="desc">
          <View className="label">结束时间：</View>
          <View className="text">2020-11-12</View>
        </View>
      </View>
    );
  }
}

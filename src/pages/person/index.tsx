import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { getCurrentInstance } from "@tarojs/taro";
import { AtList, AtListItem } from "taro-ui";
import './index.scss'
export default class Person extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      user: {
        name: "詹三",
        position: "创始合伙人",
        phone: "13390902486",
        email: "zhansan@xbrother.com",
        area: "南山",
        city: "深圳",
        department: "总监办",
        icon: require("../index/components/assets/user.png"),
      },
    };
  }
  componentDidMount() {
    // 需要根据参数拉取用户信息
    console.log(getCurrentInstance().router.params);
  }
  render() {
    const { user } = this.state;
    return (
      <View>
        <AtListItem title={user.name} thumb={user.icon} note={user.position}/>
        <View className="info-item">
          <View className="label">手机号</View>
          <View className="text primary">{user.phone}</View>
        </View>
        <View className="info-item">
          <View className="label">邮箱</View>
          <View className="text primary">{user.email}</View>
        </View>
        <View className="info-item">
          <View className="label">大区</View>
          <View className="text">{user.area}</View>
        </View>
        <View className="info-item">
          <View className="label">办事处</View>
          <View className="text">{user.city}</View>
        </View>
        <View className="info-item">
          <View className="label">部门</View>
          <View className="text">{user.department}</View>
        </View>
      </View>
    );
  }
}

import React, { Component } from "react";
import { View } from "@tarojs/components";
import { getCurrentInstance, showToast, navigateTo } from "@tarojs/taro";
import { AtListItem, AtNavBar } from "taro-ui";
import "./index.scss";
import Request from "../../api/request";
import { USER_DETAIL } from "../../api";

class Person extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      user: {},
    };
    this.onClickLeftIcon.bind(this)
  }
  componentDidMount() {
    // 需要根据参数拉取用户信息
    const { userId } = getCurrentInstance().router.params;
    Request(
      USER_DETAIL,
      "GET",
      { userId: userId },
      {
        header: {
          "content-type": "application/json",
          token: window.sessionStorage.getItem("token"),
        },
      }
    ).then(data => {
      this.setState({
        user: data,
      })
    }).catch(e=>{
      console.error(e)
      showToast({title: '获取用户信息失败'})
    })
  }
  onClickLeftIcon() {
    navigateTo({url: `/pages/index/index?fromDetail=1`})
  }
  render() {
    const { user } = this.state;
    return (
      <View className="person-info">
        <AtNavBar
          onClickLeftIcon={this.onClickLeftIcon}
          color='#000'
          title='个人信息'
          leftText='返回'
          leftIconType='chevron-left'
        />
        <AtListItem title={user.name} thumb={user.photo && ('http://192.168.4.95:8888/' + user.photo) || require("../index/components/assets/user.png")} note={user.position || '无'} />
        <View className="info-item">
          <View className="label">手机号</View>
          <View className="text primary">{user.phone || '00000000000'}</View>
        </View>
        <View className="info-item">
          <View className="label">邮箱</View>
          <View className="text primary">{user.email || '未知'}</View>
        </View>
        {/* <View className="info-item">
          <View className="label">大区</View>
          <View className="text">{user.area || '未知'}</View>
        </View> */}
        {/* <View className="info-item">
          <View className="label">办事处</View>
          <View className="text">{user.city || '未知'}</View>
        </View> */}
        <View className="info-item">
          <View className="label">部门</View>
          <View className="text">{user.deptList && user.deptList.map(dep=>dep.name).join(' ') || ''}</View>
        </View>
      </View>
    );
  }
}

export default Person

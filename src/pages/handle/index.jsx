import React, { Component } from "react";
import { View } from "@tarojs/components";
import { getCurrentInstance, navigateTo } from "@tarojs/taro";
import { AtButton, AtTextarea, AtImagePicker, AtNavBar } from "taro-ui";
import "./index.scss";

export default class Detail extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      detail: {
        no: "WH001786",
        name: "机房巡检",
        area: "数据机房",
        from: "机房检测",
        type: "事件处理",
        desc:
          "文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述；",
        comment: "",
        files: [
          {
            url: "https://jdc.jd.com/img/200",
          },
          {
            url: "https://jdc.jd.com/img/200",
          },
          {
            url: "https://jdc.jd.com/img/200",
          },
        ],
      },
    };
  }
  componentDidMount() {
    // 需要根据参数拉取用户信息
    console.log(getCurrentInstance().router.params);
  }
  handleChangeComment() {
    console.log("输入意见");
  }
  onChangePic() {
    console.log("选择照片");
  }
  commit() {
    console.log("提交");
  }
  handleAssign() {
    console.log("指派");
  }
  handleUpgrade() {
    console.log("升级");
  }
  onClickLeftIcon() {
    navigateTo({url: '/pages/index/index'})
  }
  render() {
    const { detail } = this.state;
    return (
      <View className="handle-page">
        <View className="detail-top">
          <AtNavBar
            onClickLeftIcon={this.onClickLeftIcon.bind(this)}
            color='#000'
            title='详情'
            leftText='返回'
            leftIconType='chevron-left'
          />
        </View>
        <View className="btn-group">
          <AtButton size="small" onClick={this.handleAssign.bind(this)}>
            指派
          </AtButton>
          <AtButton size="small" onClick={this.handleUpgrade.bind(this)}>
            升级
          </AtButton>
        </View>
        <View className="desc">
          <View className="label">任务编号：</View>
          <View className="text">{detail.no}</View>
        </View>
        <View className="desc">
          <View className="label">任务名称：</View>
          <View className="text">{detail.name}</View>
        </View>
        <View className="desc">
          <View className="label">巡检范围：</View>
          <View className="text">{detail.area}</View>
        </View>
        <View className="desc">
          <View className="label">任务来源：</View>
          <View className="text">{detail.from}</View>
        </View>
        <View className="desc">
          <View className="label">任务类型：</View>
          <View className="text">{detail.type}</View>
        </View>
        <View className="desc">
          <View className="label">任务描述：</View>
          <View className="text">{detail.desc}</View>
        </View>
        <View className="handle">
          <View className="title">处理结果：</View>
          <AtTextarea
            value={this.state.comment}
            onChange={this.handleChangeComment.bind(this)}
            maxLength={200}
            placeholder="请输入处理意见..."
          />
        </View>
        <View className="handle">
          <View className="title">上传照片：</View>
          <AtImagePicker
            files={this.state.files}
            onChange={this.onChangePic.bind(this)}
          />
        </View>
        <AtButton type="primary" circle onClick={this.commit.bind(this)}>
          提交
        </AtButton>
      </View>
    );
  }
}

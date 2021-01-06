import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "@tarojs/components";
import { AtTabBar } from "taro-ui";

import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/icon.scss";

import "./index.scss";
import Address from "./components/address/index";
import Message from "./components/message/index";
import Workbench from "./components/workbench/index";
import { getAuth } from "../../actions/global";
import { changeTab } from "../../actions/index";
import { switchView } from '../../actions/modules';
import { changeMessageTab } from "../../actions/message";

@connect(
  ({ view, }) => ({ view }),
  (dispatch) => ({
    getAuth: () => {
      dispatch(getAuth());
    },
    changeTab: (tab) => {
      dispatch(changeTab(tab));
    },
    switchView: () => {
      dispatch(switchView('module'));
    },
    changeMessageTab: () => {
      dispatch(changeMessageTab(0));
    }
  })
)
class Index extends Component {
  constructor() {
    super(...arguments);
  }
  componentWillMount() {
    this.props.getAuth();
  }
  handleClick(value) {
    this.props.changeTab(value)
    // 切换大的 tab 是初始化掉之前的状态
    if (value === 1) {
      this.props.switchView();
    }
    if (value === 0) {
      this.props.changeMessageTab();
    }
  }
  render() {
    const { view: { tab } } = this.props;
    return (
      <View className='index'>
        <View className='container'>
          {tab === 0 && <Message />}
          {tab === 1 && <Workbench />}
          {tab === 2 && <Address />}
        </View>
        <AtTabBar
          fixed
          backgroundColor='#ececec'
          tabList={[
            { title: "消息", iconType: "message" },
            { title: "工作台", iconType: "sketch" },
            { title: "通讯录", iconType: "user" },
          ]}
          onClick={this.handleClick.bind(this)}
          current={tab}
        />
      </View>
    );
  }
}

export default Index;

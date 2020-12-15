import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';

import 'taro-ui/dist/style/components/tab-bar.scss';
import 'taro-ui/dist/style/components/icon.scss';

import './index.scss';
import Address from './components/address/index';
import Message from './components/message/index';
import Workbench from './components/workbench/index';
export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 2,
    };
  }
  handleClick(value) {
    this.setState({
      current: value,
    });
  }
  onLaunch(options) {
    console.log(options);
  }
  render() {
    return (
      <View className="index">
        <View className="container">
          {this.state.current === 0 && <Message />}
          {this.state.current === 1 && <Workbench />}
          {this.state.current === 2 && <Address />}
        </View>
          <AtTabBar
            fixed
            backgroundColor="#ececec"
            tabList={[
              { title: '消息', iconType: 'message' },
              { title: '工作台', iconType: 'sketch' },
              { title: '通讯录', iconType: 'user' },
            ]}
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />
      </View>
    );
  }
}

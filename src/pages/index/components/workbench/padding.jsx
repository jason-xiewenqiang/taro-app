/* eslint-disable jsx-quotes */
import React, { Component } from "react";
import { View } from "@tarojs/components";
import { navigateTo } from '@tarojs/taro';
import { AtNavBar } from "taro-ui";
import PaddingCard from './padding-card';
import uuid from '../../../../utils/uuid';
import { connect} from 'react-redux';
import { switchView } from '../../../../actions/modules';
import './padding.scss';

@connect(({modules})=>({modules}), (dispatch) =>({
  switchView: (view) => {
    dispatch(switchView(view))
  }
}))
class Padding extends Component {
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
    navigateTo({
      url: `/pages/handle/index?id=${info.id}`
    })
  }
  onClickLeftIcon() {
    this.props.switchView('module')
  }
  render() {
    const { missions } = this.state;
    return (
        <View className="padding-page">
          <View className="padding-top">
            <AtNavBar
              onClickLeftIcon={this.onClickLeftIcon.bind(this)}
              color='#000'
              title={this.props.title}
              leftText='返回'
              leftIconType='chevron-left'
            />
          </View>
          {
            missions.map(mission => (
              <PaddingCard info={mission} toDetail={this.toDetail.bind(this)} key={uuid()} />
            ))
          }
        </View>
    );
  }
}

export default Padding

import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtList, AtSwipeAction, AtListItem } from 'taro-ui';
import 'taro-ui/dist/style/components/swipe-action.scss';

export default class Item extends Component {
    constructor() {
        super(...arguments)
    }
    clickHandler() {
        console.log('click')
    }
    render() {
        return (
            <AtSwipeAction
            options={[
              {
                text: '取消',
                style: {
                  backgroundColor: '#6190E8',
                },
              },
              {
                text: '确认',
                style: {
                  backgroundColor: '#FF4949',
                },
              },
            ]}
          >
            <AtListItem
              onClick={this.clickHandler.bind(this)}
              title={this.props.data.title}
              note={this.props.data.note}
              extraText={this.props.data.time}
              thumb={this.props.data.icon}
              />
          </AtSwipeAction>
        )
    }
}
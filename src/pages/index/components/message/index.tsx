import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtSegmentedControl } from 'taro-ui';
import All from './all';
import Unread from './unread';
import Alarm from './alarm';

import "taro-ui/dist/style/components/segmented-control.scss";
import './index.scss';
export default class Message extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            current: 0
        }
    }
    handleClick (value) {
        this.setState({
            current: value
        })
    }
    render() {
        return (
            <View className="message-view">
            <AtSegmentedControl
                values={['全部(1)', '未读(2)', '告警(0)']}
                onClick={this.handleClick.bind(this)}
                current={this.state.current}
                />
            { this.state.current === 0 ? <View className='tab-content'><All/></View> : null }
            { this.state.current === 1 ? <View className='tab-content'><Unread/></View> : null }
            { this.state.current === 2 ? <View className='tab-content'><Alarm/></View> : null }
            </View>
        )
    }
}
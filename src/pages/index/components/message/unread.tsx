import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtDivider} from 'taro-ui';
import "taro-ui/dist/style/components/divider.scss";
import './unread.scss';
export default class Unread extends Component {
    constructor() {
        super(...arguments);
    }
    render() {
        return (
            <View className="unread">
                <View className="card">
                    <View className="time">12:23</View>
                    <View className="content">
                        <Text>共济科技机房监控巡检</Text>
                        <AtDivider content='' className="divider"/>
                        <Text>查看详情</Text>
                    </View>
                </View>
            </View>
        )
    }
}
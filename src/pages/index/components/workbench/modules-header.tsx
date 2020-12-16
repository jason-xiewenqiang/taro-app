import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtBadge, AtIcon } from "taro-ui";
import "./modules-header.scss";
export default class ModulesHeader extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      missions: [
        { name: "待处理", key: "padding", count: 2 },
        { name: "已处理", key: "processed", count: 3 },
        { name: "已发起", key: "started", count: 5 },
        { name: "我收到的", key: "receive", count: 12 },
      ],
    };
    this.handleClick.bind(this)
  }
  handleClick(mission) {
    console.log(mission)
  }
  render() {
    const { missions } = this.state;
    return (
      <View className="modules-header">
        <View className="container">
          {missions.map(mission => (
            <View className="mission-item" key={mission.key} onClick={()=>{this.handleClick(mission)}}>
              <View className="icon">
                <AtBadge value={mission.count} maxValue={99}>
                  <AtIcon value="file-generic" size="50" color="#000"></AtIcon>
                </AtBadge>
              </View>
              <View className="text">{mission.name}</View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

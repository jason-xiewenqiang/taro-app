import React, { Component } from "react";
import { View } from "@tarojs/components";
import { AtBadge, AtIcon,  } from "taro-ui";
import "./modules-header.scss";
import { connect } from 'react-redux';
@connect(({modules})=>({modules}), (dispatch) =>({

}))
class ModulesHeader extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      missions: [
        { name: "待处理", key: "pendingCount", count: 0 },
        { name: "已处理", key: "processedCount", count: 0 },
        { name: "已发起", key: "initiatedCount", count: 0 },
        { name: "我收到的", key: "receivedCount", count: 0 },
      ],
    };
  }
  render() {
    const { missions } = this.state;
    const { handleItemClick, modules: { modulesCount } } = this.props;
    return (
      <View className='modules-header'>
        <View className='container'>
          {missions.map(mission => (
            <View className='mission-item' key={mission.key} onClick={()=>{handleItemClick(mission)}}>
              <View className='icon'>
                <AtBadge value={modulesCount ? modulesCount[mission.key] : mission.count} maxValue={99}>
                  <AtIcon value='a icon icon-xbro-s-wodegongzuo' size='50' color='#000'></AtIcon>
                  {/* <i className={"icon icon-xbro-s-wodegongzuo"}></i> */}
                </AtBadge>
                <View className='text'>{mission.name}</View>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
export default ModulesHeader

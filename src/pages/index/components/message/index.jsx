import React, { Component } from "react";
import "taro-ui/dist/style/components/segmented-control.scss";
import { View } from "@tarojs/components";
import { AtSegmentedControl } from "taro-ui";
import { connect } from "react-redux";
import All from "./all";
import Unread from "./unread";
import Alarm from "./alarm";
import {
  changeMessageTab,
  fetchMessage,
  saveMessageAll,
  saveMessageUnread,
  saveMessageAlarm,
} from "../../../../actions/message";

import "./index.scss";

@connect(
  ({ message }) => ({
    message,
  }),
  (dispatch) => ({
    changeMessageTab: (tab) => {
      dispatch(changeMessageTab(tab));
    },
    fetchMessage: () => {
      dispatch(fetchMessage());
    },
    saveAll: () => {
      dispatch(saveMessageAll());
    },
    saveUnread: () => {
      dispatch(saveMessageUnread());
    },
    saveAlarm: () => {
      dispatch(saveMessageAlarm());
    },
  })
)
class Message extends Component {
  constructor() {
    super(...arguments);
  }
  handleClick(value) {
    this.props.changeMessageTab(value);
  }
  render() {
    const {
      message: { tab, all, unread, alarm },
    } = this.props;
    return (
      <View className="message-view">
        <View className="control-box">
          <AtSegmentedControl
            values={[
              `全部( ${all.length} )`,
              `未读( ${unread.length} )`,
              `告警( ${alarm.length} )`,
            ]}
            onClick={this.handleClick.bind(this)}
            current={tab}
          />
        </View>
        {tab === 0 ? (
          <View className="tab-content">
            <All />
          </View>
        ) : null}
        {tab === 1 ? (
          <View className="tab-content">
            <Unread />
          </View>
        ) : null}
        {tab === 2 ? (
          <View className="tab-content">
            <Alarm />
          </View>
        ) : null}
      </View>
    );
  }
}

export default Message;

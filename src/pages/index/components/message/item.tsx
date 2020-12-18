import React, { Component } from "react";
import { AtSwipeAction, AtListItem } from "taro-ui";
import "taro-ui/dist/style/components/swipe-action.scss";
import './item.scss';
export default class Item extends Component {
  constructor() {
    super(...arguments);
    this.clickHandler.bind(this);
  }
  clickHandler() {
    console.log("click");
  }
  render() {
    return (
      <AtSwipeAction
        options={[
          {
            text: "取消",
            style: {
              backgroundColor: "#6190E8",
            },
          },
          {
            text: "确认",
            style: {
              backgroundColor: "#FF4949",
            },
          },
        ]}
      >
        <AtListItem
          onClick={() => {
            this.clickHandler(this.props.data);
          }}
          title={this.props.data.title}
          note={this.props.data.note}
          extraText={this.props.data.time}
          thumb={this.props.data.icon}
        />
      </AtSwipeAction>
    );
  }
}

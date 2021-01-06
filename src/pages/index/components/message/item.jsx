import React, { Component } from "react";
import { AtSwipeAction, AtListItem } from "taro-ui";
import "taro-ui/dist/style/components/swipe-action.scss";
import { connect } from "react-redux";
import "./item.scss";
import { add, minus, asyncAdd } from "../../../../actions/counter";

@connect(
  ({ counter }) => ({
    counter,
  }),
  dispatch => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    },
  })
)
class Item extends Component {
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
            this.props.add();
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

export default Item

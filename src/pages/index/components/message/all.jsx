import React, { Component } from "react";
import { View } from "@tarojs/components";
import { AtList } from "taro-ui";
import "taro-ui/dist/style/components/swipe-action.scss";
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";
import Item from "./item";
import uuid from "../../../../utils/uuid";
import { connect } from "react-redux";
import { fetchAll } from "../../../../actions/message";
@connect(
  ({ message }) => ({ message }),
  (dispatch) => ({
    fetchAll: () => {
      dispatch(fetchAll());
    },
  })
)
class All extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    // TODO:
    // this.props.fetchAll()
  }

  render() {
    const {message: { all } } = this.props;
    return (
      <View>
        <AtList>
          {all.map((li) => (
            <Item key={uuid()} data={li} />
          ))}
        </AtList>
      </View>
    );
  }
}

export default All

import { View } from "@tarojs/components";
import React, { Component } from "react";
import { AtList, AtListItem } from "taro-ui";
import "./departmentList.scss";

export default class DepartmentList extends Component {
  constructor() {
    super(...arguments);
  }
  render() {
    return (
      <View className='my-list'>
        <AtList>
          {this.props.data.map((dep) =>
            dep.type === "DEPT" ? (
              <AtListItem
                key={dep.uid}
                title={dep.name + "(" + dep.userTotal + ")"}
                thumb={dep.photo && ('http://192.168.4.95:8888/' + dep.photo) || require("../assets/folder.png")}
                onClick={() => this.props.clickItem(dep)}
              />
            ) : (
              <AtListItem
                key={dep.id}
                title={dep.name}
                thumb={dep.photo && ('http://192.168.4.95:8888/' + dep.photo) || require("../assets/user.png")}
                note={dep.position}
                onClick={() => this.props.clickItem(dep)}
              />
            )
          )}
        </AtList>
      </View>
    );
  }
}

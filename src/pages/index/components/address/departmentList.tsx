import { View } from "@tarojs/components";
import React, { Component } from "react";
import {  AtList, AtListItem  } from "taro-ui";
import './departmentList.scss';
export default class DepartmentList extends Component {
  constructor() {
    super(...arguments);
  }
  render() {
    return (
      <View className="my-list">
        <AtList>
          { this.props.data.map(dep=>(
            Reflect.has(dep, 'count') ?
            <AtListItem
              key={dep.id}
              title={dep.name + '(' + dep.count + ')'}
              thumb={dep.icon}
              onClick={() => this.props.clickItem(dep)}
              /> :
              <AtListItem
                key={dep.id}
                title={dep.name}
                thumb={dep.icon}
                note={dep.position}
                onClick={() => this.props.clickItem(dep)}
              />
            )) }
        </AtList>
      </View>

    )
  }
}
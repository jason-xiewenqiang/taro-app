import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { navigateTo } from '@tarojs/taro'
import { AtSearchBar, AtList, AtListItem, AtIcon } from "taro-ui";
import "./index.scss";
import DepartmentList from "./departmentList";
import { users, deparments } from './mock';
var userss = users;
var deparmentss = deparments;

export default class Address extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      search: "",
      currentView: "department", // department user
      departments: deparments,
      users: users,
    };
  }
  onChange(value) {
    this.setState({
      search: value,
    });
  }
  clear() {
    const { currentView } = this.state;
    this.onChange('');
    this.setState({
      [currentView+'s']: JSON.parse(JSON.stringify(currentView==='user'? userss: deparmentss))
    })
  }
  onActionClick() {
    const { currentView, search } = this.state;
    if (search !== '') {
      this.setState({
        [currentView+'s']: this.state[currentView+'s'].filter(item=>item.name.indexOf(search) !== -1)
      })
    } else {
      this.setState({
        [currentView+'s']: JSON.parse(JSON.stringify(currentView==='user'? userss: deparmentss))
      })
    }
  }
  clickItem(dep) {
    // 切换数据
    if (this.state.currentView === "department") {
      this.setState({
        currentView: "user",
      });
    } else {
      // 跳转至详情页面
      console.log('需要跳转到个人详情页面')
      navigateTo({
        url: `/pages/person/index?id=${dep.id}&name=${dep.name}`
      })
    }
  }
  goBack() {
    this.setState({
      currentView: "department",
    });
  }
  render() {
    const { currentView, users, departments, search } = this.state;
    return (
      <View>
        <View className="depart-search">
          {/* {currentView === "user" ? (
            <View
              className="back"
              onClick={() => {
                this.goBack();
              }}
            >
              <AtIcon value="chevron-left" size="42" color="#000"></AtIcon>返回
            </View>
          ) : null} */}
          <View className="search-box">
            <AtSearchBar 
              value={search} 
              onChange={this.onChange.bind(this)} 
              onClear={this.clear.bind(this)}
              onActionClick={this.onActionClick.bind(this)}/>
          </View>
        </View>
        <DepartmentList
          data={currentView === "user" ? users : departments}
          clickItem={this.clickItem.bind(this)}
        />
      </View>
    );
  }
}

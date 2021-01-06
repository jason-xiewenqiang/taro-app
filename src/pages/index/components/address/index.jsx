import React, { Component } from "react";
import { View } from "@tarojs/components";
import { navigateTo } from "@tarojs/taro";
import { AtSearchBar, AtIcon } from "taro-ui";
import { connect } from "react-redux";
import "./index.scss";
import DepartmentList from "./departmentList";
import {
  fetchBook,
  commitStack,
  commitCache,
} from "../.../../../../../actions/adress";
import Request from "../../../../api/request";
import { ADDRESS_PATH } from "../../../../api";
import { getCurrentInstance } from "@tarojs/taro";
import { throttle } from 'lodash';

@connect(
  ({ address }) => ({ address }),
  (dispatch) => ({
    fetchBook: () => {
      dispatch(fetchBook());
    },
    commitStack: (data) => {
      dispatch(commitStack(data));
    },
    commitCache: (data) => {
      dispatch(commitCache(data));
    },
  })
)
class Address extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      search: "",
      list: null,
    };
  }
  componentDidMount() {
    // 从用户详情返回的判断
    const {
      params,
    } = getCurrentInstance().router;
    const {
      address: { cacheData, historyStack },
    } = this.props;
    if (params && Reflect.has(params, 'fromDetail') && historyStack.length) {
      this.setState({
        list: [...cacheData[historyStack[historyStack.length - 1]]],
      });
    } else {
      if (!Reflect.has(cacheData, "root")) {
        this.props.fetchBook();
      } else {
        this.setState({
          list: [...cacheData.root],
        });
      }
    }
  }
  onChange(value) {
    this.setState({
      search: value,
    });
  }
  clear() {
    this.onChange("");
    const {
      address: { cacheData, historyStack },
    } = this.props;
    if (historyStack.length) {
      this.setState({
        list: [...cacheData[historyStack[historyStack.length - 1]]]
      })
    } else {
      this.setState({
        list: [...cacheData.root]
      })
    }
  }
  onActionClick() {
    throttle(this.filterList.bind(this), 200)()
  }
  filterList() {
    const { search, list } = this.state;
    let tempList = list || this.props.address.addressBook;
    this.setState({
      list: tempList.filter(li => li.name.indexOf(search) !== -1)
    })
  }
  clickItem(dep) {
    this.setState({
      search: ''
    })
    // 切换数据
    if (dep.type === "DEPT" && dep.userTotal) {
      const {
        address: { cacheData, historyStack },
      } = this.props;
      // try get from cache
      if (cacheData[dep.id]) {
        this.setState({
          list: [...cacheData[dep.id]],
        });
        historyStack.push(dep.id + "");
        this.props.commitStack([...historyStack]);
      } else {
        Request(
          ADDRESS_PATH,
          "GET",
          { parentDeptId: dep.id },
         )
          .then((data) => {
            this.setState({
              list: data,
            });
            // 添加进入history中
            historyStack.push(dep.id);
            this.props.commitStack([...historyStack]);
            this.props.commitCache({ [dep.id + ""]: data });
          })
          .catch((e) => {
            console.error(e);
          });
      }
    } else {
      // 跳转至详情页面
      navigateTo({
        url: `/pages/person/index?userId=${dep.id}`,
      });
    }
  }
  goBack() {
    const {
      address: { cacheData, historyStack },
    } = this.props;
    if (historyStack.length <= 1) {
      this.setState({
        list: [...cacheData.root],
      });
      this.props.commitStack([]);
    } else {
      this.setState({
        list: [...cacheData[historyStack[historyStack.length - 2]]],
      });
      // 移除 最后一项 history
      historyStack.length = historyStack.length - 1;
      this.props.commitStack([...historyStack]);
    }
  }
  render() {
    const { search, list } = this.state;
    const {
      address: { addressBook, historyStack },
    } = this.props;
    return (
      <View>
        <View className="depart-search">
          {historyStack.length < 1 ? null : (
            <View className="back" onClick={this.goBack.bind(this)}>
              <AtIcon value="chevron-left"></AtIcon>返回
            </View>
          )}
          <View className="search-box">
            <AtSearchBar
              value={search}
              onChange={this.onChange.bind(this)}
              onClear={this.clear.bind(this)}
              onActionClick={this.onActionClick.bind(this)}
            />
          </View>
        </View>
        <DepartmentList
          data={list ? list : addressBook}
          clickItem={this.clickItem.bind(this)}
        />
      </View>
    );
  }
}

export default Address;

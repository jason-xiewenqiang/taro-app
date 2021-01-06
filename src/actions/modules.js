import {
  MODULES_GROUP_PATH,
  MODULES_LIST_PATH,
  MODULES_COUNT_PATH,
} from "../api";
import Request from "../api/request";

import {
  MODULES_VIEW,
  MODULES_GROUP,
  MODULES_COUNT
} from "../constants/modules";

// 改变 view
export const switchView = (view) => {
  return {
    type: MODULES_VIEW,
    data: view,
  };
};

// 保存模块组数据
export const saveGroup = (data) => {
  return {
    type: MODULES_GROUP,
    data
  }
}

// 保存 count
export const modolesCount = (data) => {
  return {
    type: MODULES_COUNT,
    data
  }
}

// 获取详情列表数据
export function fetchList() {
  return (dispatch) => {
    Request(MODULES_LIST_PATH, "GET", {})
      .then((data) => {})
      .catch((e) => {});
  };
}

// 获取模块组
export function fetchGroup() {
  return (dispatch) => {
    Request(MODULES_GROUP_PATH, "GET", {})
      .then((data) => {
        if (Array.isArray(data)) {
          data = data.reverse().map(item => {
            if (item.children && Array.isArray(item.children)) {
              item.children.forEach(child => {
                if (child.name.length > 4) {
                  child.title = child.name.substring(0,4) + '...';
                } else {
                  child.title = child.name;
                }
                const { name, color } = JSON.parse(child.icon);
                child.iconfont = name.indexOf('icon') !== -1 ? 'icon ' + name : 'icon icon-xbro-l-anfangxitong';
                child.style = { color: color || '' };
              });
            }
            return item
          });
          dispatch(saveGroup(data))
        }
      })
      .catch((e) => {
        console.error(e)
      });
  };
}

// 获取工单数量
export function fetchOrderCount() {
  return (dispatch) => {
    Request(MODULES_COUNT_PATH, 'GET', {})
    .then((data) => {
      dispatch(modolesCount(data))
    })
    .catch((e) => {console.error(e)});
  }
}

import Taro from "@tarojs/taro";
import { ADDRESS_BOOK, HISTORY_STACK, CACHE_DATA } from "../constants/address";
import { ADDRESS_PATH } from "../api";
import Request from "../api/request";

export const fetchAddress = (data) => {
  return {
    type: ADDRESS_BOOK,
    data,
  };
};
export const commitStack = (data) => {
  return {
    type: HISTORY_STACK,
    data
  }
}
export const commitCache = (data) => {
  return {
    type: CACHE_DATA,
    data,
  }
}
export function fetchBook() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Request(
        ADDRESS_PATH,
        "GET",
        {
          parentDeptId: "",
        },
        {
          header: {
            "content-type": "application/json",
            token: window.sessionStorage.getItem('token'),
          },
        }
      )
        .then((data) => {
          dispatch(fetchAddress(data));
          dispatch(commitCache({root: data}));
          resolve();
        })
        .catch((err) => {
          console.log(err);
          Taro.showToast({ title: "获取通信录失败", icon: "none" });
        });
    })
  };
}

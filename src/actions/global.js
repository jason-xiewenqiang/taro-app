import Taro from "@tarojs/taro";
import { LOGIN } from "../constants/global";
import { LOGIN_PATH } from "../api";
import Request from "../api/request";

export const fetchAuth = (data) => {
  return {
    type: LOGIN,
    data,
  };
};

export function getAuth() {
  return (dispatch) => {
    Request(LOGIN_PATH, "POST", {
      account: "admin",
      confirmCode: "string",
      password: "123456",
    })
      .then((data) => {
        window.sessionStorage.setItem("token", data.token);
        // dispatch(fetchAuth(data))
      })
      .catch((err) => {
        console.log(err);
        Taro.showToast({ title: "获取Token失败", icon: "none" });
      });
  };
}

import {
  MESSAGE_TAB,
  MESSAGE_ALL,
  MESSAGE_UNREAD,
  MESSAGE_ALARM,
} from "../constants/message";
import { MESSAGE_PATH } from "../api/index";
import Request from "../api/request";

export const changeMessageTab = (data) => {
  return {
    type: MESSAGE_TAB,
    data,
  };
};

export const saveMessageAll = (data) => {
  return {
    type: MESSAGE_ALL,
    data,
  };
};

export const saveMessageUnread = (data) => {
  return {
    type: MESSAGE_UNREAD,
    data,
  };
};

export const saveMessageAlarm = (data) => {
  return {
    type: MESSAGE_ALARM,
    data,
  };
};

export function fetchMessage() {
  return (dispatch) => {
    Request(MESSAGE_PATH, "GET", {})
      .then((data) => {})
      .catch((e) => {});
  };
}

export function fetchAll() {
  return (dispatch) => {
    Request(MESSAGE_PATH, "GET", {})
      .then((data) => {})
      .catch((e) => {});
  };
}

export function fetchUnread() {
  return (dispatch) => {
    Request(MESSAGE_PATH, "GET", {})
      .then((data) => {})
      .catch((e) => {});
  };
}

export function fetchAlarm() {
  return (dispatch) => {
    Request(MESSAGE_PATH, "GET", {})
      .then((data) => {})
      .catch((e) => {});
  };
}

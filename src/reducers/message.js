import {
  MESSAGE_TAB,
  MESSAGE_ALL,
  MESSAGE_UNREAD,
  MESSAGE_ALARM,
} from "../constants/message";

const INITIAL_STATE = {
  tab: 0,
  all: [], // 全部
  unread: [], // 未读
  alarm: [], // 告警
};

export default function message(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MESSAGE_TAB:
      return {
        ...state,
        tab: action.data,
      };
    case MESSAGE_ALL:
      return {
        ...state,
        all: [...action.data],
      };
    case MESSAGE_UNREAD:
      return {
        ...state,
        unread: [...action.data],
      };
    case MESSAGE_ALARM:
      return {
        ...state,
        alarm: [...action.data],
      };
    default:
      return state;
  }
}

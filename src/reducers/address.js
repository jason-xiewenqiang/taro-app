import { ADDRESS_BOOK, HISTORY_STACK, CACHE_DATA } from "../constants/address";

const INITIAL_STATE = {
  addressBook: [], // 初次保存的 adress 数据
  historyStack: [], // 点击过的下层
  cacheData: {}, // 缓存数据
};
export default function adress(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADDRESS_BOOK:
      return {
        ...state,
        addressBook: action.data,
      };
    case HISTORY_STACK:
      return {
        ...state,
        historyStack: action.data,
      };
    case CACHE_DATA:
      return {
        ...state,
        cacheData: {...state.cacheData, ...action.data}
      }
    default:
      return state;
  }
}

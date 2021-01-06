import {
  MODULES_VIEW,
  MODULES_LIST,
  MODULES_GROUP,
  MODULES_COUNT,
} from "../constants/modules";

const INITIAL_STATE = {
  view: "module",
  modulesCount: null,
  list: [],
  group: [],
};

export default function modules(state = INITIAL_STATE, action) {
  const { type, data } = action;
  switch (type) {
    case MODULES_VIEW:
      return {
        ...state,
        view: data,
      };
    case MODULES_GROUP:
      return {
        ...state,
        group: [...data],
      };
    case MODULES_LIST:
      return {
        ...state,
        list: [...data],
      };
    case MODULES_COUNT:
      return {
        ...state,
        modulesCount: data,
      };
    default:
      return state;
  }
}

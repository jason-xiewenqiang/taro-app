import { TAB_CURRENT } from "../constants/index";

const INITIAL_STATE = {
  tab: 0,
};

export default function viewControl(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TAB_CURRENT:
      return {
        ...state,
        tab: action.data,
      };
    default:
      return state;
  }
}

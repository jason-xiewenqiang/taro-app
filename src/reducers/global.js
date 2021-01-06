import { LOGIN } from "../constants/global";

const INITIAL_STATE = {
  auth: null,
};

export default function global(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        auth: action.data,
      };
    default:
      return state;
  }
}

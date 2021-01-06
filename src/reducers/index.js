import { combineReducers } from "redux";
import counter from "./counter";
import address from "./address";
import global from "./global";
import message from "./message";
import viewControl from "./viewControl";
import modules from "./modules";

export default combineReducers({
  counter,
  address,
  global,
  message,
  modules,
  view: viewControl,
});

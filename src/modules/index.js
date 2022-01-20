import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootRuducer = combineReducers({
  counter,
  todos,
});

export default rootRuducer;

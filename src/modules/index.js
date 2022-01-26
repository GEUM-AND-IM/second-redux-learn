import { combineReducers } from "redux";
import counter from "./counter";
import posts from "./posts";

const rootRuducer = combineReducers({
  counter,
  posts,
});

export default rootRuducer;

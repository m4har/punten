import { combineReducers } from "redux";

// REDUCER DATA
import Login from "./Login";
import Register from "./Register";

const Reducer = combineReducers({
  Login,
  Register
});

export default Reducer;

import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import car from "./car";
import manufacture from "./manufacture";
import transmission from "./transmission";
import type from "./type";

// it will combining some reducers that will be possible to call in the jsx files
export default combineReducers({
  auth,
  car,
  manufacture,
  transmission,
  type,
});

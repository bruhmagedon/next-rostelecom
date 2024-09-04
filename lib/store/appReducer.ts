import { combineReducers } from "@reduxjs/toolkit";
import modalReducer from "../features/modals/modalsSlice";

export const rootReducer = combineReducers({
  modal: modalReducer,
});

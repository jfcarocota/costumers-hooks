import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import costumersReducer from "./costumers/costumersReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  costumers: costumersReducer
});

export default rootReducer;
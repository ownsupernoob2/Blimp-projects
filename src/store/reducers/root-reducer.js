import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import user from "./user";
import profile from './profile';


// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["data"],
// };

const rootReducer = combineReducers({
  user: user,
  data: profile
});

export default rootReducer;

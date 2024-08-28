import { combineReducers } from "@reduxjs/toolkit";

import { activityReducer } from "./activity/slice";
import { themeReducer } from "./theme/slice";
import { tableReducer } from "./table/slice";

const rootReducer = combineReducers({
  Activity: activityReducer,
  Theme: themeReducer,
  Table: tableReducer,
});

export default rootReducer;

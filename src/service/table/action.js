import { createAction } from "@reduxjs/toolkit";

export const MODULE = "Table";

export const $reset = createAction(`${MODULE}/reset`);
export const $initialize = createAction(`${MODULE}/initialize`);

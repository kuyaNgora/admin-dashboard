import { createAction } from "@reduxjs/toolkit";

const MODULE = "Theme";

export const $reset = createAction(`${MODULE}/reset`);

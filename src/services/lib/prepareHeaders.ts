/* eslint-disable @typescript-eslint/no-explicit-any */

import { RootState } from "../../app/store/store";

export const prepareHeadersApi = ( headers: Headers, { getState } : any) => {
    const state = getState() as RootState;
    console.log(state);
    const jwtToken = localStorage.getItem("jwtToken") || sessionStorage.getItem('jwtToken');
    if (jwtToken) {
      headers.set("authorization", `Bearer ${jwtToken}`);
    }
    headers.set("accept", "*/*");
    headers.set("Content-Type", "application/json");
    return headers;
}
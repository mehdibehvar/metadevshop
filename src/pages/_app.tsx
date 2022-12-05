import "../../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import CssBaseline from '@mui/material/CssBaseline';
import React from "react";
export default function App({Component,pageProps}:AppProps) {
    return <Provider store={store}>
       <>
       {/* ///reset for css style */}
       <CssBaseline/>
       <Component {...pageProps}/>
       </>
       </Provider>;
};
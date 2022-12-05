import "../../styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "../app/store";
import CssBaseline from '@mui/material/CssBaseline';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return <Provider store={store}>
    <>
    <CssBaseline/>
    {getLayout(<Component {...pageProps} />)}
    </>
   
  </Provider>
}
///Per-Page Layouts
// If you need multiple layouts, you can add a property getLayout to your page, allowing you to return a React component for the layout. This allows you to define the layout on a per-page basis. Since we're returning a function, we can have complex nested layouts if desired.
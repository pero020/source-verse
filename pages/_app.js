import '../styles/globals.css';
import createEmotionCache from '../utility/createEmotionCache';
import theme from '../styles/theme/theme';

import { SessionProvider } from "next-auth/react"
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import Layout from '../components/layout'
import Head from 'next/head';

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps: { session, 
    emotionCache = clientSideEmotionCache, 
    ...pageProps },
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width user-scalable=no" />
        <title>Sourced Info</title>
      </Head>
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
        <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  )
    
}

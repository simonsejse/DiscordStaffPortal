import '../styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import Navigation from '../components/Navigation';
import { SnackbarProvider } from '../components/Snackbar';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Navigation />
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </SessionProvider>
  );
}

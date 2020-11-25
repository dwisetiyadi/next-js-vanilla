import '@styles/style.scss';

import { wrapper } from '@redux/core/store';
import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import React, { FC } from 'react';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const WrappedApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // console.log('props _app.tsx:', pageProps);
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);

import '@styles/style.scss';
import '@styles/CDataTable.module.css';
import '@styles/CIcon.css';
import '@styles/CToast.css';
import '@styles/perfect-scrollbar.css';
import '@styles/scrollbar.css';
import '@styles/tippy.css';
import '@components/coreui/icon/coreui-icons/css/all.css';

import { icons } from '@components/coreui/icon/coreui-icons/js';
import { wrapper } from '@redux/core/store';
import { AppProps } from 'next/app';
import React, { FC } from 'react';

global.REACTICONS = icons;

const WrappedApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // console.log('props _app.tsx:', pageProps);
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);

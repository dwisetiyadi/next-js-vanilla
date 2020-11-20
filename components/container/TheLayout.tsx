/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */
import React from 'react';

import { TheContent, TheFooter, TheHeader, TheSidebar } from './index';

const TheLayout = (props: any) => {
  const { navigation, children } = props;
  return (
    <div className="c-app c-default-layout">
      <TheSidebar navigation={navigation} />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent>{children}</TheContent>
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { CContainer, CFade } from '@components/coreui';
import React from 'react';
// import { Redirect, Route, Switch } from 'react-router-dom';

// routes config
// import routes from '../routes';

// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse" />
//   </div>
// );

const TheContent = ({ children }: any) => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <CFade>{children}</CFade>
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);

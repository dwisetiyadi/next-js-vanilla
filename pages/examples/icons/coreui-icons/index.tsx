import { DocsLink } from '@components/reusable';
import { CCard, CCardBody, CCardHeader, CRow } from 'coreui-next';
import { freeSet } from 'coreui-next/dist/icon/coreui-icons/js/src/free/index';
import React from 'react';

import { getIconsView } from '../brands';

const CoreUIIcons = () => {
  return (
    <CCard>
      <CCardHeader>
        Free Icons / as CIcon{' '}
        <DocsLink href="https://github.com/coreui/coreui-icons" text="GitHub" />
      </CCardHeader>
      <CCardBody>
        <CRow className="text-center">{getIconsView(freeSet)}</CRow>
      </CCardBody>
    </CCard>
  );
};

export default CoreUIIcons;

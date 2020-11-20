import { CCard, CCardBody, CCardHeader, CRow } from '@components/coreui';
import { freeSet } from '@components/coreui/icon/coreui-icons/js/src';
import { DocsLink } from '@components/reusable';
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

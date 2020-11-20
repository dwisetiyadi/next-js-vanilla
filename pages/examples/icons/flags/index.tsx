import { CCard, CCardBody, CCardHeader, CRow } from '@components/coreui';
import { flagSet } from '@components/coreui/icon/coreui-icons/js/src';
import { DocsLink } from '@components/reusable';
import React from 'react';

import { getIconsView } from '../brands';

const CoreUIIcons = () => {
  return (
    <CCard>
      <CCardHeader>
        Flag Icons
        <DocsLink href="https://github.com/coreui/coreui-icons" text="GitHub" />
      </CCardHeader>
      <CCardBody>
        <CRow className="text-center">{getIconsView(flagSet)}</CRow>
      </CCardBody>
    </CCard>
  );
};

export default CoreUIIcons;

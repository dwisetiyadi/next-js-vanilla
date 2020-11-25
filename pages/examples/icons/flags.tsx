import navigation from '@components/container/_navExample';
import Layout from '@components/container/TheLayout';
import { DocsLink } from '@components/reusable';
import { CCard, CCardBody, CCardHeader, CRow } from 'coreui-next';
import { flagSet } from 'coreui-next/dist/icon/coreui-icons/js/src/flag/index';
import React from 'react';

import { getIconsView } from './brands';

const CoreUIIcons = () => {
  return (
    <Layout navigation={navigation}>
      <CCard>
        <CCardHeader>
          Flag Icons
          <DocsLink
            href="https://github.com/coreui/coreui-icons"
            text="GitHub"
          />
        </CCardHeader>
        <CCardBody>
          <CRow className="text-center">{getIconsView(flagSet)}</CRow>
        </CCardBody>
      </CCard>
    </Layout>
  );
};

export default CoreUIIcons;

import navigation from '@components/container/_navExample';
import Layout from '@components/container/TheLayout';
import { DocsLink } from '@components/reusable';
import { CCard, CCardBody, CCardHeader, CRow } from 'coreui-next';
import { freeSet } from 'coreui-next/dist/icon/coreui-icons/js/src/free/index';
import React from 'react';

import { getIconsView } from './brands';

const CoreUIIcons = () => {
  return (
    <Layout navigation={navigation}>
      <CCard>
        <CCardHeader>
          Free Icons / as CIcon{' '}
          <DocsLink
            href="https://github.com/coreui/coreui-icons"
            text="GitHub"
          />
        </CCardHeader>
        <CCardBody>
          <CRow className="text-center">{getIconsView(freeSet)}</CRow>
        </CCardBody>
      </CCard>
    </Layout>
  );
};

export default CoreUIIcons;

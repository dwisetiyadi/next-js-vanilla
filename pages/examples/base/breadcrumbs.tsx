import navigation from '@components/container/_navExample';
import Layout from '@components/container/TheLayout';
import { DocsLink } from '@components/reusable';
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CLink,
  CRow,
} from 'coreui-next';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

// routes config for breadcrumb
const routes = [
  {
    path: '/users',
    name: 'Users',
  },
  {
    path: '/users/create',
    name: 'User Create',
  },
];

const Breadcrumbs = () => {
  return (
    <Layout navigation={navigation}>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>
              Bootstrap Breadcrumb
              <DocsLink name="CBreadcrumb" />
            </CCardHeader>
            <CCardBody>
              <h6>CBreadcrumbRouter wrapper component</h6>
              <CBreadcrumbRouter nextRouter={useRouter} routes={routes} />
              <h6>Manual</h6>
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <CLink>Home</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem active>Library</CBreadcrumbItem>
              </CBreadcrumb>
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <CLink>Home</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <CLink>Library</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem active>Data</CBreadcrumbItem>
              </CBreadcrumb>
              <CBreadcrumb>
                <CBreadcrumbItem>
                  <CLink>Home</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <CLink>Library</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem>
                  <CLink>Data</CLink>
                </CBreadcrumbItem>
                <CBreadcrumbItem active>
                  <span>Bootstrap</span>
                </CBreadcrumbItem>
              </CBreadcrumb>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </Layout>
  );
};

export default Breadcrumbs;

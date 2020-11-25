/* eslint-disable @typescript-eslint/no-explicit-any */
import navigation from '@components/container/_navExample';
import Layout from '@components/container/TheLayout';
import { DocsLink } from '@components/reusable';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CIcon,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CTabs,
} from 'coreui-next';
// import Link from 'next/link';
import React, { useState } from 'react';

const Tabs = () => {
  const [active, setActive] = useState(1);
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.';

  return (
    <Layout navigation={navigation}>
      <CRow>
        <CCol xs="12" md="6" className="mb-4">
          <CCard>
            <CCardHeader>
              Index indentifiers
              <DocsLink name="CTabs" />
            </CCardHeader>
            <CCardBody>
              <CTabs>
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink>Home</CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>Profile</CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>Messages</CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane>{`1. ${lorem}`}</CTabPane>
                  <CTabPane>{`2. ${lorem}`}</CTabPane>
                  <CTabPane>{`3. ${lorem}`}</CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" md="6" className="mb-4">
          <CCard>
            <CCardHeader>Id indentifiers</CCardHeader>
            <CCardBody>
              <CTabs activeTab="home">
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink data-tab="home">Home</CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="profile">Profile</CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="messages">Messages</CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane data-tab="home">{`1. ${lorem}`}</CTabPane>
                  <CTabPane data-tab="profile">{`2. ${lorem}`}</CTabPane>
                  <CTabPane data-tab="messages">{`3. ${lorem}`}</CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" md="6" className="mb-4">
          <CCard>
            <CCardHeader>No fade animation tabs</CCardHeader>
            <CCardBody>
              <CTabs>
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink>
                      <CIcon name="cil-calculator" />
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                      <CIcon name="cil-basket" />
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                      <CIcon name="cil-chart-pie" />
                    </CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent fade={false}>
                  <CTabPane>{`1. ${lorem}`}</CTabPane>
                  <CTabPane>{`2. ${lorem}`}</CTabPane>
                  <CTabPane>{`3. ${lorem}`}</CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" md="6" className="mb-4">
          <CCard>
            <CCardHeader>Controlled tabs</CCardHeader>
            <CCardBody>
              <CTabs
                activeTab={active}
                onActiveTabChange={(idx: any) => setActive(idx)}
              >
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink>
                      <CIcon name="cil-calculator" />
                      {active === 0 && ' Home'}
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                      <CIcon name="cil-basket" />
                      {active === 1 && ' Profile'}
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                      <CIcon name="cil-chart-pie" />
                      {active === 2 && ' Messages'}
                    </CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane>{`1. ${lorem}`}</CTabPane>
                  <CTabPane>{`2. ${lorem}`}</CTabPane>
                  <CTabPane>{`3. ${lorem}`}</CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </Layout>
  );
};

export default Tabs;

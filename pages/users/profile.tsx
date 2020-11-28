/* eslint-disable @typescript-eslint/no-explicit-any */
import navigation from '@components/container/_nav';
import Layout from '@components/container/TheLayout';
import { DocsLink } from '@components/reusable';
import usersData from '@pages/examples/users/UsersData';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from 'coreui-next';
// import Link from 'next/link';
import React from 'react';

const getBadge = (status: any) => {
  switch (status) {
    case 'Active':
      return 'success';
    case 'Inactive':
      return 'secondary';
    case 'Pending':
      return 'warning';
    case 'Banned':
      return 'danger';
    default:
      return 'primary';
  }
};
const fields = ['name', 'registered', 'role', 'status'];

const Tables = () => {
  return (
    <Layout navigation={navigation}>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Simple Table
              <DocsLink name="CModal" />
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  status: (item: any) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </Layout>
  );
};

export default Tables;

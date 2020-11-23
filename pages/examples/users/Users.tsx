/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CPagination,
  CRow,
} from 'coreui-next';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// import { useHistory, useLocation } from 'react-router-dom';
import usersData from './UsersData';

const getBadge = (status: string) => {
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

const Users = () => {
  const router = useRouter();
  const queryPage = router.query;
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  const pageChange = (newPage: any) => {
    currentPage !== newPage && router.push(`/users?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  return (
    <CRow>
      <CCol xl={6}>
        <CCard>
          <CCardHeader>
            Users
            <small className="text-muted"> example</small>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={usersData}
              fields={[
                { key: 'name', _classes: 'font-weight-bold' },
                'registered',
                'role',
                'status',
              ]}
              hover
              striped
              itemsPerPage={5}
              activePage={page}
              clickableRows
              onRowClick={(item: any) => router.push(`/users/${item.id}`)}
              scopedSlots={{
                status: (item: any) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                  </td>
                ),
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={5}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Users;

/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CCard, CCardBody, CCardHeader, CCol, CIcon, CRow } from 'coreui-next';
import React from 'react';

import usersData from './UsersData';

const User = ({ match }: any) => {
  const user = usersData.find(
    (user: any) => user.id.toString() === match.params.id
  );
  /* eslint-disable prettier/prettier */
  const userDetails = user
    ? Object.entries(user)
    : [
        [
          'id',
          <span>
            <CIcon className="text-muted" name="cui-icon-ban" /> Not found
          </span>,
        ],
      ];
  /* eslint-enable prettier/prettier */

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>User id: {match.params.id}</CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {/* @ts-ignore */}
                {userDetails.map(([key, value]: any[], index: any) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{`${key}:`}</td>
                      <td>
                        <strong>{value}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default User;

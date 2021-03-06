/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import navigation from '@components/container/_navExample';
import Layout from '@components/container/TheLayout';
import { DocsLink } from '@components/reusable';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormGroup,
  CInput,
  CInputCheckbox,
  CLabel,
  CRow,
  CToast,
  CToastBody,
  CToaster,
  CToastHeader,
} from 'coreui-next';
// import Link from 'next/link';
import React, { useState } from 'react';

const Toaster = () => {
  const positions = [
    'static',
    'top-left',
    'top-center',
    'top-right',
    'top-full',
    'bottom-left',
    'bottom-center',
    'bottom-right',
    'bottom-full',
  ];

  const [toasts, setToasts] = useState([
    { position: 'static' },
    { position: 'static' },
    { position: 'top-right', autohide: 3000 },
  ]);

  const [position, setPosition] = useState('top-right');
  const [autohide, setAutohide] = useState(true);
  const [autohideValue, setAutohideValue] = useState(5000);
  const [closeButton, setCloseButton] = useState(true);
  const [fade, setFade] = useState(true);

  const addToast = () => {
    // @ts-ignore
    setToasts([
      ...toasts,
      { position, autohide: autohide && autohideValue, closeButton, fade },
    ]);
  };

  const toasters = (() => {
    return toasts.reduce((toasters: any, toast: any) => {
      toasters[toast.position] = toasters[toast.position] || [];
      toasters[toast.position].push(toast);
      return toasters;
    }, {});
  })();

  return (
    <Layout navigation={navigation}>
      <CCard>
        <CCardHeader>
          Toasts.
          <DocsLink name="-Toast" />
        </CCardHeader>
        <CCardBody>
          <CContainer>
            <CRow>
              <CCol sm="12" lg="6">
                <CForm>
                  <h5>Add toast with following props:</h5>

                  <CFormGroup variant="custom-checkbox" className="my-2 mt-4">
                    <CInputCheckbox
                      id="autohide"
                      // @ts-ignore
                      checked={autohide}
                      onChange={(e: any) => {
                        setAutohide(e.target.checked);
                      }}
                      custom
                    />
                    <CLabel variant="custom-checkbox" htmlFor="autohide">
                      Autohide of the toast
                    </CLabel>
                  </CFormGroup>
                  {autohide && (
                    <CFormGroup className="my-2">
                      <CLabel htmlFor="ccyear">Time to autohide</CLabel>
                      <CInput
                        type="number"
                        value={autohideValue}
                        onChange={(e: any) => {
                          setAutohideValue(Number(e.target.value));
                        }}
                      />
                    </CFormGroup>
                  )}

                  <CFormGroup className="my-2">
                    <CLabel htmlFor="ccyear">Position</CLabel>
                    <select
                      className="form-control"
                      value={position}
                      onChange={(e) => {
                        setPosition(e.target.value);
                      }}
                    >
                      {positions.map((position, i) => (
                        <option key={i + 1}>{position}</option>
                      ))}
                    </select>
                  </CFormGroup>

                  <CFormGroup variant="custom-checkbox" className="my-2">
                    <CInputCheckbox
                      id="fade"
                      checked={fade}
                      onChange={(e: any) => {
                        setFade(e.target.checked);
                      }}
                      custom
                    />
                    <CLabel variant="custom-checkbox" htmlFor="fade">
                      fade
                    </CLabel>
                  </CFormGroup>

                  <CFormGroup variant="custom-checkbox" className="my-2">
                    <CInputCheckbox
                      id="close"
                      custom
                      checked={closeButton}
                      onChange={(e: any) => {
                        setCloseButton(e.target.checked);
                      }}
                    />
                    <CLabel variant="custom-checkbox" htmlFor="close">
                      closeButton
                    </CLabel>
                  </CFormGroup>

                  <CButton
                    className="mr-1 w-25"
                    color="success"
                    onClick={addToast}
                  >
                    Add toast
                  </CButton>
                </CForm>
              </CCol>
              <CCol sm="12" lg="6">
                {Object.keys(toasters).map((toasterKey) => (
                  <CToaster position={toasterKey} key={`toaster${toasterKey}`}>
                    {toasters[toasterKey].map((toast: any, key: any) => {
                      return (
                        <CToast
                          key={`toast${key}`}
                          show
                          autohide={toast.autohide}
                          fade={toast.fade}
                        >
                          <CToastHeader closeButton={toast.closeButton}>
                            Toast title
                          </CToastHeader>
                          <CToastBody>
                            {/* eslint-disable prettier/prettier */}
                            {`This is a toast in ${toasterKey} positioned toaster number ${
                              key + 1
                            }.`}
                            {/* eslint-enable prettier/prettier */}
                          </CToastBody>
                        </CToast>
                      );
                    })}
                  </CToaster>
                ))}
              </CCol>
            </CRow>
          </CContainer>
        </CCardBody>
      </CCard>
    </Layout>
  );
};

export default Toaster;

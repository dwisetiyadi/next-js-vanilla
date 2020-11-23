/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import navigation from '@components/container/_navExample';
import Layout from '@components/container/TheLayout';
import { DocsLink } from '@components/reusable';
import { rgbToHex } from '@coreui/utils';
import classNames from 'classnames';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from 'coreui-next';
import React, { createRef, useEffect, useState } from 'react';

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)');
  const ref = createRef();

  useEffect(() => {
    // @ts-ignore
    const el = ref.current.parentNode.firstChild;
    const varColor = window
      .getComputedStyle(el)
      .getPropertyValue('background-color');
    setColor(varColor);
  }, [ref]);

  return (
    <table
      className="table w-100"
      // @ts-ignore
      ref={ref}
    >
      <tbody>
        <tr>
          <td className="text-muted">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-muted">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  );
};

const ThemeColor = ({ className, children }: any) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3');
  return (
    <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
      <div className={classes} style={{ paddingTop: '75%' }} />
      {children}
      <ThemeView />
    </CCol>
  );
};

const Colors = () => {
  return (
    <>
      <Layout navigation={navigation}>
        <CCard>
          <CCardHeader>
            Theme colors
            <DocsLink href="https://coreui.io/docs/utilities/colors/" />
          </CCardHeader>
          <CCardBody>
            <CRow>
              <ThemeColor className="bg-primary">
                <h6>Brand Primary Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-secondary">
                <h6>Brand Secondary Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-success">
                <h6>Brand Success Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-danger">
                <h6>Brand Danger Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-warning">
                <h6>Brand Warning Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-info">
                <h6>Brand Info Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-light">
                <h6>Brand Light Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-dark">
                <h6>Brand Dark Color</h6>
              </ThemeColor>
            </CRow>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>Grays</CCardHeader>
          <CCardBody>
            <CRow className="mb-3">
              <ThemeColor className="bg-gray-100">
                <h6>Gray 100 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-200">
                <h6>Gray 200 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-300">
                <h6>Gray 300 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-400">
                <h6>Gray 400 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-500">
                <h6>Gray 500 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-600">
                <h6>Gray 600 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-700">
                <h6>Gray 700 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-800">
                <h6>Gray 800 Color</h6>
              </ThemeColor>
              <ThemeColor className="bg-gray-900">
                <h6>Gray 900 Color</h6>
              </ThemeColor>
            </CRow>
          </CCardBody>
        </CCard>
      </Layout>
    </>
  );
};

export default Colors;

/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { getColor } from '@coreui/utils';
import { CChartBar } from 'coreui-next';
import PropTypes from 'prop-types';
import React from 'react';

const ChartBarSimple = (props: any) => {
  const {
    backgroundColor,
    pointHoverBackgroundColor,
    dataPoints,
    label,
    pointed,
    ...attributes
  } = props;

  const defaultDatasets = (() => {
    return [
      {
        data: dataPoints,
        // backgroundColor: getColor(backgroundColor),
        // pointHoverBackgroundColor: getColor(pointHoverBackgroundColor),
        label,
        barPercentage: 0.5,
        categoryPercentage: 1,
      },
    ];
  })();

  const defaultOptions = (() => {
    return {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: false,
          },
        ],
      },
    };
  })();

  // render
  return (
    <CChartBar
      {...attributes}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={label}
    />
  );
};

ChartBarSimple.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  //
  backgroundColor: PropTypes.string,
  pointHoverBackgroundColor: PropTypes.string,
  dataPoints: PropTypes.array,
  label: PropTypes.string,
  labels: PropTypes.string,
  pointed: PropTypes.bool,
  style: PropTypes.object,
};

ChartBarSimple.defaultProps = {
  backgroundColor: 'rgba(0,0,0,.2)',
  dataPoints: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
  label: 'Sales',
};

export default ChartBarSimple;

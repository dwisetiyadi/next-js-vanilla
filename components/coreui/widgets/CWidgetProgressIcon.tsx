/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import CProgress from '../progress/CProgress';

// component - CoreUI / CWidgetProgressIcon
const CWidgetProgressIcon = (props: any) => {
  const {
    children,
    className,
    //
    header,
    text,
    value,
    color,
    inverse,
    progressSlot,
    ...attributes
  } = props;

  const classes = classNames(
    'card',
    inverse ? [color && `bg-${color}`, 'text-white'] : '',
    className
  );

  return (
    <>
      <div className={classes} {...attributes}>
        <div className="card-body">
          {children && (
            <div className="h1 text-muted text-right mb-4">{children}</div>
          )}
          {header && <div className="h4 m-0">{header}</div>}
          {text && (
            <small className="text-muted text-uppercase font-weight-bold">
              {text}
            </small>
          )}
          {progressSlot || (
            <CProgress
              color={!inverse ? color : ''}
              value={value}
              // eslint-disable-next-line prettier/prettier
              className={`progress-xs my-3 mb-0 ${
                inverse ? 'progress-white' : ''
                // eslint-disable-next-line prettier/prettier
              }`}
            />
          )}
        </div>
      </div>
    </>
  );
};

CWidgetProgressIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  header: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.number,
  inverse: PropTypes.bool,
  progressSlot: PropTypes.node,
};

CWidgetProgressIcon.defaultProps = {
  value: 25,
};

export default CWidgetProgressIcon;

/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import CProgress from '../progress/CProgress';

// component - CoreUI / CWidgetProgress
const CWidgetProgress = (props: any) => {
  const {
    children,
    className,
    //
    header,
    text,
    footer,
    color,
    value,
    inverse,
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
          {header && <div className="h4 m-0">{header}</div>}
          {text && <div>{text}</div>}
          {children || (
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
          {footer && <small className="text-muted">{footer}</small>}
        </div>
      </div>
    </>
  );
};

CWidgetProgress.propTypes = {
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
  footer: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.number,
  inverse: PropTypes.bool,
  variant: PropTypes.string,
};

CWidgetProgress.defaultProps = {
  value: 25,
};

export default CWidgetProgress;

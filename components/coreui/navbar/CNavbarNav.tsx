/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';

// component - CoreUI / CNavbarNav

const CNavbarNav = (props: any) => {
  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props;

  // render

  const classes = classNames('navbar-nav', className);

  return (
    <>
      <Tag className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CNavbarNav.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  children: PropTypes.node,
};

CNavbarNav.defaultProps = {
  tag: 'ul',
};

export default CNavbarNav;

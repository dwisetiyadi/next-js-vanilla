/* eslint-disable consistent-return */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { omitByKeys } from '@coreui/utils';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import CFade from '../fade/CFade';
import { CFadeProps } from '../utils/helper';
// import './CToast.css'

export const Context = React.createContext({});

// component - CoreUI / CToast
const CToast = (props: any) => {
  const {
    className,
    children,
    //
    innerRef,
    show,
    autohide,
    fade,
    onStateChange,
    ...attributes
  } = props;

  const [state, setState] = useState(show);
  const timeout = useRef();

  useEffect(() => {
    setState(show);
  }, [show]);

  // triggered on mount and destroy
  useEffect(() => () => clearTimeout(timeout.current), []);

  useEffect(() => {
    if (state === true && autohide) {
      setAutohide();
    }
    onStateChange && onStateChange(state);
  }, [state]);

  const setAutohide = () => {
    clearTimeout(timeout.current);
    // @ts-ignore
    timeout.current = setTimeout(() => {
      startAutohide();
    }, autohide);
  };

  const onMouseOver = () => {
    if (state !== 'closing') {
      state !== true && setState(true);
      clearTimeout(timeout.current);
    }
  };

  const onMouseOut = () => {
    if (autohide && state !== 'closing') {
      setAutohide();
    }
  };

  const startAutohide = () => {
    if (!fade) {
      return setState(false);
    }
    setState('hiding');
    clearTimeout(timeout.current);
    // @ts-ignore
    timeout.current = setTimeout(() => {
      setState(false);
    }, 2000);
  };

  const close = () => {
    if (!fade) {
      return setState(false);
    }
    setState('closing');
    clearTimeout(timeout.current);
    // @ts-ignore
    timeout.current = setTimeout(() => {
      setState(false);
    }, 500);
  };

  // render
  const classes = classNames('toast', className);

  const fadeClasses = classNames(
    fade && (state === 'hiding' ? 'toast-fade-slow' : 'toast-fade')
  );

  const attrs = omitByKeys(attributes, CFadeProps);
  return (
    <Context.Provider value={{ close }}>
      {state && (
        <CFade
          className={classes}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          in={state === true}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          baseClass={fadeClasses}
          innerRef={innerRef}
          {...attrs}
        >
          {children}
        </CFade>
      )}
    </Context.Provider>
  );
};

CToast.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  show: PropTypes.bool,
  autohide: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  fade: PropTypes.bool,
  onStateChange: PropTypes.func,
};

CToast.defaultProps = {
  fade: true,
};

export default CToast;

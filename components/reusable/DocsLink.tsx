/* eslint-disable @typescript-eslint/no-explicit-any */
import { CLink } from '@components/coreui';
import React from 'react';

const DocsLink = (props: any) => {
  const { name, text, href, ...rest } = props;

  const hrefParse = name
    ? `https://coreui.io/react/docs/components/${name}`
    : href;

  return (
    <div className="card-header-actions">
      <CLink
        {...rest}
        href={hrefParse}
        rel="noreferrer noopener"
        target="_blank"
        className="card-header-action"
      >
        <small className="text-muted">{text || 'docs'}</small>
      </CLink>
    </div>
  );
};

export default React.memo(DocsLink);

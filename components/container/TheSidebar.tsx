/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CCreateElement,
  CIcon,
  CSidebar,
  CSidebarBrand,
  CSidebarMinimizer,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CSidebarNavTitle,
} from 'coreui-next';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// sidebar nav config
// import navigation from './_nav';

// const NewCsidebarNavDropdown = <CSidebarNavDropdown nextRouter={useRouter} />;
// console.log(NewCsidebarNavDropdown);

const TheSidebar = (props: any) => {
  const dispatch = useDispatch();
  const show = useSelector((state: any) => state.container.sidebarShow);

  const { navigation } = props;
  const router = useRouter();

  return (
    <CSidebar
      show={show}
      onShowChange={(val: any) => dispatch({ type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          nextRouter={router.pathname}
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarMinimizer,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CSidebarNavTitle,
} from '@components/coreui';
import { CIcon } from '@components/coreui/icon/coreui-icons-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// sidebar nav config
// import navigation from './_nav';

const TheSidebar = (props: any) => {
  const dispatch = useDispatch();
  const show = useSelector((state: any) => state.container.sidebarShow);

  const { navigation } = props;

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

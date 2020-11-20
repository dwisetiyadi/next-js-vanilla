export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['User Management'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users Profile',
    to: '/users/profile',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    to: '/users',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Content Management'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Categories',
    to: '/categories',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Contents',
    to: '/contents',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Template Examples',
    to: '/examples',
    icon: 'cil-calculator',
  },
];

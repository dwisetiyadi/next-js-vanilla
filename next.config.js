module.exports = {
  async redirects() {
    return [
      {
        source: '/examples',
        destination: '/examples/dashboard',
        permanent: true,
      },
      {
        source: '/examples/themes',
        destination: '/examples/themes/colors',
        permanent: true,
      },
      {
        source: '/examples/base',
        destination: '/examples/base/breadcrumbs',
        permanent: true,
      },
      {
        source: '/examples/buttons',
        destination: '/examples/buttons/buttons',
        permanent: true,
      },
      {
        source: '/examples/icons',
        destination: '/examples/icons/coreui-icons',
        permanent: true,
      },
      {
        source: '/examples/notifications',
        destination: '/examples/notifications/alerts',
        permanent: true,
      },
    ];
  },
};

import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';

import Header from '../header';

const layoutStyle = css`
  padding: 1rem;
`;

const Layout = () => (
  <>
    <Header />
    <main css={layoutStyle}>
      <Outlet />
    </main>
  </>
);

export default Layout;

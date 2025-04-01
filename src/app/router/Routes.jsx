import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import NotFoundPage from '@/pages/notFoundPage';
import Layout from '@/widgets/layout';

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;

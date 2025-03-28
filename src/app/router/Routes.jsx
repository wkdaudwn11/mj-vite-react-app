import BackoutClListPage from '@/pages/backoutClList';
import DefectChartPage from '@/pages/defectChart';
import LoginPage from '@/pages/login';
import NotFoundPage from '@/pages/notFoundPage';
import Layout from '@/widgets/layout';

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <DefectChartPage />,
      },
      {
        path: '/backout-cl-list',
        element: <BackoutClListPage />,
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

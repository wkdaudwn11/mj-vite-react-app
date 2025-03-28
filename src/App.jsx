import { BrowserRouter, useRoutes } from 'react-router-dom';

import routes from '@/app/router';

const AppRoutes = () => useRoutes(routes);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;

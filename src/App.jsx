import { BrowserRouter, useRoutes } from 'react-router-dom';

import routes from '@/app/router';
import ErrorBoundary from '@/shared/ui/errorBoundary';

const AppRoutes = () => useRoutes(routes);

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;

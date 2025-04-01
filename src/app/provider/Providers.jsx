import ErrorBoundary from './ErrorBoundary';

const Providers = ({ children }) => <ErrorBoundary>{children}</ErrorBoundary>;

export default Providers;

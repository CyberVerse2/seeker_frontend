import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <Layout>
          <Home />
        </Layout>
      </ErrorBoundary>
    ),
    errorElement: (
      <ErrorBoundary>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Oops! Something went wrong</h2>
            <p className="text-gray-600 mb-4">We're sorry, but it seems there was an error.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </ErrorBoundary>
    )
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

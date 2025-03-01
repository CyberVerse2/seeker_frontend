import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[rgb(252,252,253)]">
          <div className="max-w-xl w-full px-4">
            <div className="text-center">
              <h2 className="text-3xl font-[Bricolage_Grotesque] font-bold mb-4">
                Oops! Something went wrong
              </h2>
              <p className="text-gray-600 mb-8">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => window.location.reload()}
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-light transition-colors"
                >
                  Refresh Page
                </button>
                <div>
                  <Link to="/" className="text-primary hover:text-primary-light transition-colors">
                    Return Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

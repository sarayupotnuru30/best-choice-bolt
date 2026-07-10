import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center max-w-sm">
        <div className="text-8xl font-black text-primary opacity-20 mb-4 select-none">404</div>
        <h1 className="text-2xl font-bold text-brand-text mb-2">Page Not Found</h1>
        <p className="text-brand-muted text-sm mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary">Go Home</Link>
          <Link to="/categories" className="btn-outline">Browse Products</Link>
        </div>
      </div>
    </div>
  );
}

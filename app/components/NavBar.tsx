import { Link } from "@remix-run/react";

export const NavBar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/logo-light.png"
                alt="Logo"
                className="h-8 w-auto hidden dark:block"
              />
              <img
                src="/logo-dark.png"
                alt="Logo"
                className="h-8 w-auto dark:hidden"
              />
              <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                React Anatomy
              </span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Inicio
            </Link>
            <Link
              to="/hooks"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Hooks
            </Link>
            <Link
              to="/optimization"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Optimizaciones
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Acerca de
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

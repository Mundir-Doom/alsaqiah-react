import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between">
          <div className="flex items-center gap-6 gap-x-reverse">
            <Link to="/" className="flex items-center" aria-label="الصفحة الرئيسية">
              <img
                alt="الساقية"
                loading="lazy"
                width="100"
                height="100"
                className="shrink-0"
                src="/logo.svg"
              />
            </Link>
            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1 text-lg font-semibold">
                <li>
                  <Link
                    to="/"
                    className={`relative px-4 py-2 rounded-lg font-semibold transition-all ${
                      isActive('/') 
                        ? 'text-emerald-700 bg-emerald-50' 
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50'
                    }`}
                  >
                    الرئيسية
                    {isActive('/') && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></span>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className={`relative px-4 py-2 rounded-lg font-semibold transition-all ${
                      isActive('/products') 
                        ? 'text-emerald-700 bg-emerald-50' 
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50'
                    }`}
                  >
                    المنتجات
                    {isActive('/products') && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></span>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/news"
                    className={`relative px-4 py-2 rounded-lg font-semibold transition-all ${
                      isActive('/news') 
                        ? 'text-emerald-700 bg-emerald-50' 
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50'
                    }`}
                  >
                    الأخبار
                    {isActive('/news') && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></span>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sustainability"
                    className={`relative px-4 py-2 rounded-lg font-semibold transition-all ${
                      isActive('/sustainability') 
                        ? 'text-emerald-700 bg-emerald-50' 
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50'
                    }`}
                  >
                    الاستدامة
                    {isActive('/sustainability') && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></span>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`relative px-4 py-2 rounded-lg font-semibold transition-all ${
                      isActive('/about') 
                        ? 'text-emerald-700 bg-emerald-50' 
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50'
                    }`}
                  >
                    من نحن
                    {isActive('/about') && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></span>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`relative px-4 py-2 rounded-lg font-semibold transition-all ${
                      isActive('/contact') 
                        ? 'text-emerald-700 bg-emerald-50' 
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50'
                    }`}
                  >
                    اتصل بنا
                    {isActive('/contact') && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></span>
                    )}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/search"
              className="hidden sm:block rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
            >
              بحث
            </Link>
            <div className="hidden sm:block">
              <div className="relative">
                <button
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  className="inline-flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
                >
                  ع
                  <span aria-hidden="true" className="text-xs">▾</span>
                </button>
              </div>
            </div>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-emerald-50 transition-colors"
              aria-label="القائمة"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


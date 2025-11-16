import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white py-10 text-sm text-gray-600">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="font-semibold text-gray-900">الشركة</h2>
            <ul className="mt-3 space-y-1">
              <li>
                <Link to="/about" className="hover:text-gray-900">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-900">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">المنتجات والأخبار</h2>
            <ul className="mt-3 space-y-1">
              <li>
                <Link to="/products" className="hover:text-gray-900">
                  المنتجات
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-gray-900">
                  المدونة
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">الاستدامة</h2>
            <ul className="mt-3 space-y-1">
              <li>
                <Link to="/sustainability" className="hover:text-gray-900">
                  الركائز
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-500">
          <div>© 2025 شركة الساقية للمواد الغذائية. جميع الحقوق محفوظة.</div>
          <div className="mt-2">
            <a href="mailto:Info@al-saqiah.ly" className="hover:text-gray-900 transition-colors">
              Info@al-saqiah.ly
            </a>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/17M7fPmnSt/?mibextid=wwXIfr"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تابعنا على فيسبوك"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99h-2.2V12h2.2V9.8c0-2.17 1.3-3.37 3.28-3.37.95 0 1.95.17 1.95.17v2.15h-1.1c-1.08 0-1.42.67-1.42 1.36V12h2.42l-.39 2.88h-2.03v6.99A10 10 0 0 0 22 12z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


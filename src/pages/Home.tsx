import { Link } from 'react-router-dom';

export default function Home() {
  const featuredProducts = [
    {
      image: '/Produit/DELICE LAIT.png',
      title: 'حليب دليس',
      description: 'حليب طازج وصحي من أجود أنواع الألبان التونسية',
    },
    {
      image: '/Produit/oikos.png',
      title: 'زبادي أوكيوس',
      description: 'زبادي يوناني كريمي بنكهات متنوعة ولذيذة',
    },
    {
      image: '/Produit/DANAO.png',
      title: 'عصائر دانو',
      description: 'عصائر فواكه طبيعية 100% بدون إضافات صناعية',
    },
    {
      image: '/Produit/Danette-CHOCOLAT-1.png',
      title: 'حلويات دانيت',
      description: 'حلويات ألبان شهية بنكهات الشوكولاتة والفانيليا',
    },
    {
      image: '/Produit/YOPRO STRAWBERRY.png',
      title: 'بروتين يوبرو',
      description: 'مشروبات بروتين عالية الجودة للرياضيين',
    },
    {
      image: '/Produit/celtia strawberry.png',
      title: 'سيلتيا فراولة',
      description: 'ألبان منكهة منعشة ولذيذة لجميع أفراد الأسرة',
    },
  ];

  const newsItems = [
    {
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
      category: 'مبادرات المجتمع',
      date: '١٠ سبتمبر ٢٠٢٥',
      title: 'حملة توزيع الحليب على المدارس',
      description: 'مبادرة لدعم التغذية الصحية لدى الأطفال عبر توفير حليب طازج يوميًا.',
      link: '/news/community-initiatives',
    },
    {
      image: 'https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=800&q=80',
      category: 'تقرير الاستدامة',
      date: '٢٢ أغسطس ٢٠٢٥',
      title: 'خفض الانبعاثات في سلسلة التوريد',
      description: 'خطوات عملية لخفض البصمة الكربونية ضمن عمليات التبريد والنقل.',
      link: '/news/sustainability-report',
    },
    {
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
      category: 'منتجات جديدة',
      date: '٣٠ يوليو ٢٠٢٥',
      title: 'إطلاق زبادي طبيعي بنكهات جديدة',
      description: 'نكهات موسمية طبيعية غنية بالبروبيوتيك لتعزيز الصحة والهضم.',
      link: '/news/new-products-launch',
    },
  ];

  const brands = [
    '/brands/celtia-132831.png',
    '/brands/Danone_2004_logo.png',
    '/brands/Oikos-700.png',
    '/brands/1280px-Danette_Logo.svg.png',
    '/brands/Activia_logo.png',
    '/brands/LOGO-MENU.png.webp',
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-teal-600 via-emerald-500 to-cyan-400">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1920&q=80')] bg-cover bg-center opacity-20"
        ></div>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-3xl py-24 md:py-32">
            <div className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-6 py-2 mb-6">
              <span className="text-white font-semibold">شركة الساقية للمواد الغذائية</span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl leading-tight">
              نكهة <span className="text-yellow-300">تونس</span>...<br />
              على المائدة الليبية
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90 font-medium">
              منذ أكثر من عقدين من الخبرة في مجال استيراد وتوزيع المواد الغذائية، تواصل شركة الساقية
              تقديم الأفضل للسوق الليبي من أشهر العلامات التونسية، وعلى رأسها منتجات دليس وغيرها من
              العلامات ذات الجودة العالية.
            </p>
            <p className="mt-4 text-lg text-white/85 max-w-3xl leading-relaxed">
              نحرص على أن تصل منتجاتنا طازجة وآمنة لكل بيت ليبي، محملة بروح الجودة والنكهة المتوسطية
              الأصيلة.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center rounded-full bg-white px-7 py-3 text-teal-700 font-bold text-base hover:bg-yellow-300 hover:text-teal-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                من نحن
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center rounded-full bg-white px-7 py-3 text-teal-700 font-bold text-base hover:bg-yellow-300 hover:text-teal-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                منتجاتنا
              </Link>
              <Link
                to="/partners"
                className="inline-flex items-center rounded-full bg-white px-7 py-3 text-teal-700 font-bold text-base hover:bg-yellow-300 hover:text-teal-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                شركاؤنا
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border-2 border-white px-7 py-3 text-white font-bold text-base hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                اتصل بنا
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-white via-teal-50 to-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12" dir="rtl">
            <span className="inline-block rounded-full bg-teal-100 px-6 py-2 text-teal-700 font-semibold mb-4">
              🎯 منتجاتنا
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">منتجاتنا المميزة</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl">
              اكتشف مجموعتنا من المنتجات التونسية عالية الجودة
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <Link
                key={index}
                to="/products"
                className="group block rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-teal-400"
              >
                <div className="aspect-video relative bg-white">
                  <img
                    alt={product.title}
                    loading="lazy"
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300 w-full h-full"
                    src={product.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/50 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{product.description}</p>
                  <span className="inline-block mt-3 text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
                    اكتشف المزيد →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12" dir="rtl">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl text-center mb-8">
              شاهد منتجاتنا
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/4ia6EWjJGFU"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12" dir="rtl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-6 py-2 text-emerald-700 font-semibold mb-4">
              <span>📰</span>
              <span>الأخبار</span>
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">آخر الأخبار</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">تابع أحدث أخبارنا وفعالياتنا</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((news, index) => (
              <Link
                key={index}
                to={news.link}
                className="group block rounded-3xl bg-white/80 backdrop-blur-sm p-4 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-emerald-100"
              >
                <div className="overflow-hidden rounded-2xl">
                  <div className="relative aspect-video">
                    <img
                      alt={news.title}
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-full"
                      src={news.image}
                    />
                  </div>
                </div>
                <div className="px-2 pt-4 pb-3">
                  <div className="mb-3 flex items-center gap-2 text-xs text-emerald-700">
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 font-semibold">
                      {news.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2 leading-snug line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {news.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-300 text-emerald-700 px-4 py-2 font-semibold hover:bg-emerald-50 transition-colors">
                    اكتشف المزيد →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/news"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 px-8 py-4 text-white font-bold text-lg hover:from-teal-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              عرض جميع الأخبار →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-full px-5 py-2 mb-6">
                <span className="text-2xl">🐄</span>
                <span className="font-bold text-teal-700">من المزرعة إلى طاولتك</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                منتجات ألبان <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">طبيعية 100%</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                نستورد منتجات الألبان من مزارع طبيعية في تونس، حيث ترعى الأبقار في بيئة خضراء وتحت
                إشراف بيطري يضمن جودة الحليب ونقائه.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  { icon: '✓', title: 'منتجات طبيعية', desc: 'من مزارع مختارة بعناية تلتزم بأعلى معايير الجودة' },
                  { icon: '❄', title: 'سلسلة تبريد متطورة', desc: 'نظام تبريد متكامل يحافظ على النضارة حتى التسليم' },
                  { icon: '★', title: 'شهادات مطابقة دولية', desc: 'معتمدة من هيئات عالمية تضمن السلامة والجودة' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-bold rounded-full hover:from-teal-700 hover:to-emerald-600 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <span>استكشف المنتجات</span>
                  <span>→</span>
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-teal-600 text-teal-700 font-bold rounded-full hover:bg-teal-50 transition-all"
                >
                  <span>تعرف على مصادرنا</span>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 relative h-64 rounded-3xl overflow-hidden shadow-xl group">
                  <img
                    alt="Barn surrounded by trees"
                    loading="lazy"
                    className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full"
                    src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=1600&q=80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-teal-700 shadow-lg">
                    مزارع طبيعية
                  </div>
                </div>
                <div className="relative h-48 rounded-3xl overflow-hidden shadow-xl group">
                  <img
                    alt="Fresh milk products"
                    loading="lazy"
                    className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full"
                    src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&q=80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
                </div>
                <div className="relative h-48 rounded-3xl overflow-hidden shadow-xl group">
                  <img
                    alt="A herd of cows on a lush green field"
                    loading="lazy"
                    className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full"
                    src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12" dir="rtl">
            <span className="inline-block rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 px-6 py-2 text-teal-700 font-bold mb-4">
              🤝 شركاؤنا
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              العلامات التجارية التي نوزعها
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              نفخر بتوزيع منتجات من أشهر وأرقى العلامات التجارية التونسية
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="group">
                <div className="aspect-square relative flex items-center justify-center">
                  <img
                    alt={`Brand ${index + 1}`}
                    loading="lazy"
                    className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all w-full h-full"
                    src={brand}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">وأكثر من 50 علامة تجارية تونسية متميزة</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 text-teal-700 font-bold hover:text-teal-800 transition-colors"
            >
              <span>عرض جميع المنتجات</span>
              <span>←</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


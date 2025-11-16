import { Link } from 'react-router-dom';

export default function News() {
  const featuredArticle = {
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&q=80',
    category: 'منتجات جديدة',
    date: '٢٠ أكتوبر ٢٠٢٥',
    title: 'إطلاق تشكيلة الألبان الصيفية الجديدة',
    description: 'وصول شحنة جديدة من أفضل منتجات الألبان التونسية: حليب دليس، زبادي أوكيوس، وجبن طبيعي طازج',
    link: '/news/new-dairy-collection',
  };

  const articles = [
    {
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80',
      category: 'تقرير',
      date: '١٥ سبتمبر ٢٠٢٥',
      title: 'جودة الحليب الطازج من المزارع التونسية',
      description: 'كيف نضمن وصول الحليب الطازج من المزارع الطبيعية في تونس إلى منازلكم بأعلى معايير الجودة والنضارة',
      link: '/news/fresh-milk-quality',
    },
    {
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
      category: 'صحة وتغذية',
      date: '٥ أغسطس ٢٠٢٥',
      title: 'فوائد الزبادي اليوناني للصحة',
      description: 'اكتشف الفوائد الصحية المذهلة لزبادي أوكيوس الغني بالبروتين والبروبيوتيك الطبيعي',
      link: '/news/yogurt-benefits',
    },
    {
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800&q=80',
      category: 'دليل المنتجات',
      date: '١٢ يوليو ٢٠٢٥',
      title: 'أنواع الأجبان التونسية المتوفرة',
      description: 'دليلك الشامل لأنواع الأجبان التونسية الفاخرة: من الجبن الأبيض الطري إلى الأجبان المعتقة',
      link: '/news/cheese-varieties',
    },
    {
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80',
      category: 'تقنية',
      date: '٢٨ يونيو ٢٠٢٥',
      title: 'سلسلة التبريد المتطورة لدينا',
      description: 'نظام التبريد المتكامل الذي يحافظ على نضارة منتجات الألبان من لحظة استلامها حتى تصل إلى عتبة منزلك',
      link: '/news/cold-chain-system',
    },
    {
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80',
      category: 'تقرير مصور',
      date: '١٠ يونيو ٢٠٢٥',
      title: 'زيارة إلى مزارع الألبان في تونس',
      description: 'رحلة مصورة إلى المزارع الطبيعية التي نستورد منها، حيث ترعى الأبقار في مراعي خضراء تحت إشراف بيطري',
      link: '/news/dairy-farms-tunisia',
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-teal-600 via-emerald-500 to-cyan-500">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80')] bg-cover bg-center opacity-10"
        ></div>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative text-white" dir="rtl">
            <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-6 py-2 mb-6 font-semibold">
              📰 آخر الأخبار
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">المدونة</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              تابع آخر أخبارنا ومقالاتنا حول منتجاتنا ومبادراتنا
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block rounded-full bg-teal-100 px-4 py-2 text-teal-700 font-bold text-sm">
              ⭐ المقال المميز
            </span>
          </div>
          <Link to={featuredArticle.link} className="group block">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  alt={featuredArticle.title}
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 w-full h-full"
                  src={featuredArticle.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {featuredArticle.category}
                </div>
              </div>
              <div>
                <div className="text-sm text-teal-600 font-semibold mb-3">{featuredArticle.date}</div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{featuredArticle.description}</p>
                <span className="inline-flex items-center gap-2 text-teal-600 font-bold text-lg group-hover:gap-4 transition-all">
                  <span>اقرأ المزيد</span>
                  <span>←</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">جميع المقالات</h2>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors">
                الكل
              </button>
              <button className="px-4 py-2 rounded-full bg-white border-2 border-gray-200 text-gray-700 font-semibold hover:border-teal-500 hover:text-teal-600 transition-colors">
                بيان صحفي
              </button>
              <button className="px-4 py-2 rounded-full bg-white border-2 border-gray-200 text-gray-700 font-semibold hover:border-teal-500 hover:text-teal-600 transition-colors">
                قصة
              </button>
              <button className="px-4 py-2 rounded-full bg-white border-2 border-gray-200 text-gray-700 font-semibold hover:border-teal-500 hover:text-teal-600 transition-colors">
                تقرير
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link key={index} to={article.link} className="group block">
                <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="relative h-56">
                    <img
                      alt={article.title}
                      loading="lazy"
                      className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full"
                      src={article.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-teal-700 shadow">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-teal-600 font-semibold mb-2">{article.date}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                      {article.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>اقرأ المزيد</span>
                      <span>←</span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <nav className="mt-12 flex items-center justify-center gap-4" aria-label="Pagination">
            <button className="px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-teal-500 hover:text-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              السابق
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors">
                1
              </button>
              <button className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 text-gray-700 font-bold hover:border-teal-500 hover:text-teal-600 transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 text-gray-700 font-bold hover:border-teal-500 hover:text-teal-600 transition-colors">
                3
              </button>
            </div>
            <button className="px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-teal-500 hover:text-teal-600 transition-colors">
              التالي
            </button>
          </nav>
        </div>
      </section>
    </main>
  );
}


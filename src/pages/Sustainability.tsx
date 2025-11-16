export default function Sustainability() {
  const pillars = [
    {
      icon: '🌱',
      title: 'البيئة',
      description: 'نعمل على خفض البصمة الكربونية وتحسين كفاءة استخدام الموارد الطبيعية.',
    },
    {
      icon: '🤝',
      title: 'المجتمع',
      description: 'نشارك في مبادرات مجتمعية تدعم التغذية الصحية والتعليم.',
    },
    {
      icon: '⚖️',
      title: 'المسؤولية',
      description: 'نلتزم بأعلى معايير الجودة والأمان في جميع منتجاتنا.',
    },
    {
      icon: '📊',
      title: 'الشفافية',
      description: 'نحرص على الشفافية في عملياتنا وعلاقاتنا مع الشركاء.',
    },
  ];

  return (
    <main className="flex-1">
      <section className="relative py-16 bg-gradient-to-br from-teal-600 via-emerald-500 to-cyan-500">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=1920&q=80')] bg-cover bg-center opacity-10"
        ></div>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative text-white" dir="rtl">
            <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-6 py-2 mb-6 font-semibold">
              🌍 الاستدامة
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">الاستدامة والمسؤولية</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              التزامنا ببناء مستقبل مستدام من خلال الممارسات المسؤولة
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12" dir="rtl">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">ركائز الاستدامة</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              نؤمن بأن المسؤولية تجاه البيئة والمجتمع هي جزء لا يتجزأ من رؤيتنا التجارية.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100">
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div dir="rtl">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">سلسلة التوريد المستدامة</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                نعمل مع شركائنا في تونس لضمان أن جميع منتجاتنا تأتي من مصادر مسؤولة ومستدامة. نحن
                نراقب سلسلة التوريد بالكامل من المزرعة إلى المستهلك النهائي.
              </p>
              <ul className="space-y-4">
                {[
                  'شهادات الجودة والسلامة الغذائية',
                  'خفض الانبعاثات في النقل والتبريد',
                  'دعم المزارع الصغيرة والمحلية',
                  'استخدام مواد تغليف قابلة لإعادة التدوير',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-xl">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img
                alt="Sustainable supply chain"
                loading="lazy"
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=800&q=80"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


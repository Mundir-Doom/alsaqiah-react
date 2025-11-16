export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    alert('تم إرسال رسالتك بنجاح!');
  };

  return (
    <main className="flex-1">
      <section className="py-16 bg-gray-50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div dir="rtl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">اتصل بنا</h1>
            <div className="h-0.5 w-24 bg-emerald-700 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl">نحن هنا للإجابة على جميع استفساراتكم وملاحظاتكم.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1" dir="rtl">
              <div className="sticky top-24 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">معلومات التواصل</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                        <path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10z"></path>
                        <circle cx="12" cy="11" r="2.5"></circle>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">العنوان</div>
                      <p className="text-gray-700">طرابلس – ليبيا</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.59 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.12a2 2 0 0 1 2.11-.45c.8.27 1.64.47 2.5.59A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">الهاتف</div>
                      <div className="flex flex-col gap-1">
                        <a href="tel:+218917347788" className="text-gray-700 hover:text-emerald-700 transition-colors">
                          091 734 7788
                        </a>
                        <a href="tel:+218918034242" className="text-gray-700 hover:text-emerald-700 transition-colors">
                          091 803 4242
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-6h-6v6H5a2 2 0 0 1-2-2V9z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">الفروع</div>
                      <p className="text-gray-700">طرابلس · بنغازي · مصراتة · الخمس · الزاوية · زوارة · الجبل الغربي بالكامل</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
                        <path d="m22 6-10 7L2 6"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">البريد الإلكتروني</div>
                      <a href="mailto:Info@al-saqiah.ly" className="text-gray-700 hover:text-emerald-700 transition-colors">
                        Info@al-saqiah.ly
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">ساعات العمل</div>
                      <p className="text-gray-700">الأحد - الخميس: 8:00 ص - 5:00 م</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-600 text-center">سنقوم بالرد خلال 24 ساعة عمل.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2" dir="rtl">
              <form className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200" onSubmit={handleSubmit} aria-labelledby="contact-title">
                <h2 id="contact-title" className="text-2xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="أدخل اسمك الكامل"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-emerald-700 focus:ring-0 focus:outline-none"
                      name="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="example@email.com"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-emerald-700 focus:ring-0 focus:outline-none"
                      name="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      الرسالة
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-emerald-700 focus:ring-0 focus:outline-none resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 hover:bg-emerald-800 px-8 py-4 text-white font-semibold text-base transition-colors"
                  >
                    <span>إرسال الرسالة</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


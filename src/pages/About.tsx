export default function About() {
  return (
    <main className="py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative h-[300px] -mx-4 sm:-mx-6 lg:-mx-8 mb-12 rounded-lg overflow-hidden">
          <img
            alt="About Al Saqiya"
            loading="lazy"
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1600&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
              <h1 className="text-4xl font-bold text-white">من نحن</h1>
              <p className="mt-4 text-xl text-gray-100 max-w-2xl">جسر التجارة الغذائية بين تونس وليبيا</p>
            </div>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-lg text-gray-700">
          شركة الساقية للمواد الغذائية هي شركة ليبية متخصصة في استيراد وتوزيع المواد الغذائية
          التونسية داخل السوق الليبي. رغم أن تأسيسها الرسمي كان سنة 2022، إلا أن فريقها يمتلك
          خبرة تمتد لأكثر من 20 عامًا.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900">رؤيتنا</h2>
            <p className="mt-2 text-sm text-gray-600">
              أن نكون الجسر التجاري الأول بين تونس وليبيا في مجال الأغذية عالية الجودة.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900">رسالتنا</h2>
            <p className="mt-2 text-sm text-gray-600">
              تزويد السوق الليبي بمنتجات غذائية متميزة المصدر والمذاق، تحمل قيم الجودة والأمان.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900">قيمنا</h2>
            <p className="mt-2 text-sm text-gray-600">المصداقية، الجودة، الشراكة، والتطوير المستمر.</p>
          </div>
        </div>
      </div>
    </main>
  );
}


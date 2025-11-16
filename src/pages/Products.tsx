export default function Products() {

  // Product images from the Produit directory
  const products = [
    { name: 'DELICE LAIT', image: '/Produit/DELICE LAIT.png' },
    { name: 'oikos', image: '/Produit/oikos.png' },
    { name: 'DANAO', image: '/Produit/DANAO.png' },
    { name: 'Danette CHOCOLAT', image: '/Produit/Danette-CHOCOLAT-1.png' },
    { name: 'YOPRO STRAWBERRY', image: '/Produit/YOPRO STRAWBERRY.png' },
    { name: 'celtia strawberry', image: '/Produit/celtia strawberry.png' },
    { name: 'YOPRO LAIT', image: '/Produit/YOPRO LAIT.png' },
    { name: 'YOPRO VANILLE', image: '/Produit/YOPRO VANILLE.png' },
    { name: 'YOPRO CARAMEL', image: '/Produit/YOPRO CARAMEL.png' },
    { name: 'YOPRO CHOCLATE', image: '/Produit/YOPRO CHOCLATE.png' },
    { name: 'YOPRO VANILLA COOKIES', image: '/Produit/YOPRO_VANILLA_COOKIES.png' },
    { name: 'YOPRO NATURAL', image: '/Produit/YOPRO_NATURAL.png' },
    { name: 'YOPRO STRAWBERRY RASPBERRY', image: '/Produit/YOPRO_STRAWBERRY_RASPBERRY.png' },
    { name: 'YOPRO COFFEE CARAMEL', image: '/Produit/YOPRO_COFFEE_CARAMEL.png' },
    { name: 'ACTIVIA PEACH', image: '/Produit/ACTIVIA PEACH.png' },
    { name: 'ALSAQIYA FROMAGE', image: '/Produit/ALSAQIYA FROMAGE.png' },
    { name: 'BLENDY ABRICOT', image: '/Produit/BLENDY ABRICOT.png' },
    { name: 'BLENDY FRAMBOISE', image: '/Produit/BLENDY FRAMBOISE.png' },
    { name: 'DANETTE FLAN', image: '/Produit/DANETTE-FLAN-1 (1).png' },
    { name: 'DANETTE PRALINÉ', image: '/Produit/DANETTE-PRALINÉ-1 (1).png' },
    { name: 'DANETTE VANILLE', image: '/Produit/DANETTE-VANILLE-1 (2).png' },
    { name: 'DELI SHAKE BANANE', image: '/Produit/DELI SHAKE BANANE.png' },
    { name: 'DELI SHAKE CHOCLATE', image: '/Produit/DELI SHAKE CHOCLATE.png' },
    { name: 'DAILYN CAKE', image: '/Produit/DAILYN CAKE.png' },
    { name: 'DAILYN slice', image: '/Produit/DAILYN slice.png' },
    { name: 'FRAMBOISE', image: '/Produit/FRAMBOISE.png' },
    { name: 'MIX & GO', image: '/Produit/MIX & GO.png' },
    { name: 'OIKOS FRAISE', image: '/Produit/OIKOS FRAISE2.png' },
    { name: 'celtia', image: '/Produit/celtia.png' },
    { name: 'celtia Apple', image: '/Produit/celtia Apple.png' },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-600 via-emerald-500 to-cyan-400 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=1920&q=80')] bg-cover bg-center opacity-10"
        ></div>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative text-white" dir="rtl">
            <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-6 py-2 mb-6 font-semibold">
              🛒 منتجاتنا
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              منتجاتنا المختارة بعناية<br />
              من السوق التونسي
            </h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
              نقدم لعملائنا مجموعة متنوعة من المنتجات الغذائية التونسية من أشهر الشركات، وعلى رأسها
              منتجات دليس: عصائر طبيعية، حليب وألبان، وزبادي بنكهات متعددة.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <div key={index} className="rounded-lg border border-gray-200 p-4">
                <div className="aspect-square relative overflow-hidden rounded">
                  <img
                    alt={product.name}
                    loading="lazy"
                    className="object-contain bg-white w-full h-full"
                    src={product.image}
                  />
                </div>
                <div className="text-base font-semibold text-gray-900 mt-3" dir="rtl">
                  {product.name}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center" dir="rtl">
            <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              كل منتجاتنا أصلية ومستوردة مباشرة من تونس، وتحمل شهادات مطابقة للجودة والمواصفات.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


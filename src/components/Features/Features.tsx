'use client';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Yönetmelik Uygunluk Analizi',
    description: 'Türkiye yangın güvenliği yönetmeliklerine tam uygunluk kontrolü. Eksiklikleri anında tespit edin.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Hızlı Analiz',
    description: 'Saniyeler içinde bina bilgilerini girin, dakikalar içinde detaylı analiz raporunu alın.',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Detaylı Raporlama',
    description: 'PDF ve Excel formatında profesyonel raporlar. Yetkililere sunuma hazır çıktılar.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Kat ve Mekan Yönetimi',
    description: 'Her kat ve mekan için ayrı ayrı analiz. Detaylı kullanıcı yükü hesaplamaları.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Güvenli Veri Saklama',
    description: 'Tüm verileriniz şifreli olarak saklanır. KVKK uyumlu altyapı.',
    color: 'from-red-500 to-rose-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Kurum Yönetimi',
    description: 'Birden fazla kullanıcı ve bina yönetimi. Kurumsal hesap özellikleri.',
    color: 'from-cyan-500 to-teal-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full text-red-600 text-sm font-medium mb-4">
            Özellikler
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Yangın Güvenliği Analizinde{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Yeni Nesil Çözüm
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            YANGINPRO, binalarınızın yangın güvenliği uygunluğunu analiz etmek için ihtiyacınız olan tüm araçları sunar.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div id="how-it-works" className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
              Nasıl Çalışır?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              3 Adımda Analiz
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Bina Bilgilerini Girin',
                description: 'Kat sayısı, alan, yükseklik gibi temel bilgileri hızlıca girin.',
              },
              {
                step: '2',
                title: 'Analizi Başlatın',
                description: 'Sistem otomatik olarak yönetmeliklere göre analiz yapar.',
              },
              {
                step: '3',
                title: 'Raporu Alın',
                description: 'Detaylı uygunluk raporu ve önerileri inceleyin.',
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-red-500/30">
                  {item.step}
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-red-300 to-transparent" />
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

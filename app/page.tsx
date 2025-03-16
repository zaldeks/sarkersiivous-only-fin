import Image from "next/image";
import PriceCalculator from "./components/PriceCalculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Professional cleaning service"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
            quality={100}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sarker Siivous - Ammattitaitoista siivouspalvelua
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Laadukasta ja luotettavaa siivouspalvelua
            </p>
            <a
              href="/ota-yhteytta"
              className="bg-white text-[#27ae60] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Pyydä tarjous
            </a>
          </div>
        </div>
      </div>

      {/* Puhtaampi koti Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Puhtaampi koti, parempi elämä
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Puhdas ja hyvin hoidettu koti ei ole vain miellyttävä silmälle –
              se on tärkeä osa terveellistä elämäntapaa.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Palvelumme</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential Cleaning */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/images/services/residental cleaning.jpg"
                  alt="Residential cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Kodin siivous</h3>
                <p className="text-gray-600 mb-4">
                  Ammattitaitoista kodin siivousta joustavilla aikatauluilla.
                  Räätälöimme palvelun tarpeidesi mukaan.
                </p>
                <a
                  href="/ota-yhteytta"
                  className="inline-block bg-[#27ae60] text-white px-6 py-2 rounded-full hover:bg-[#219a54] transition-colors"
                >
                  Varaa nyt
                </a>
              </div>
            </div>

            {/* Window Cleaning */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/images/services/window cleaning.jpg"
                  alt="Window cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Ikkunan pesu</h3>
                <p className="text-gray-600 mb-4">
                  Tehokasta ja perusteellista ikkunoiden pesua ammattimaisilla
                  välineillä. Turvallista työskentelyä myös korkeissa kohteissa.
                </p>
                <a
                  href="/ota-yhteytta"
                  className="inline-block bg-[#27ae60] text-white px-6 py-2 rounded-full hover:bg-[#219a54] transition-colors"
                >
                  Varaa nyt
                </a>
              </div>
            </div>

            {/* Special Cleaning */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/images/services/special cleaning.jpg"
                  alt="Special cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Erikoispuhdistus</h3>
                <p className="text-gray-600 mb-4">
                  Erityistä huomiota ja ammattitaitoa vaativat kohteet.
                  Räätälöidyt ratkaisut haastaviin siivoustarpeisiin.
                </p>
                <a
                  href="/ota-yhteytta"
                  className="inline-block bg-[#27ae60] text-white px-6 py-2 rounded-full hover:bg-[#219a54] transition-colors"
                >
                  Varaa nyt
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Miksi valita meidät
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#27ae60] mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Ympäristöystävällinen
            </h3>
            <p className="text-gray-600">
              Käytämme ympäristöystävällisiä puhdistusaineita
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#27ae60] mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Ammattitaitoinen</h3>
            <p className="text-gray-600">Kokenut ja koulutettu henkilökunta</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#27ae60] mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Luotettava</h3>
            <p className="text-gray-600">
              Täsmällistä ja vastuullista palvelua
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#27ae60] mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Perusteellinen</h3>
            <p className="text-gray-600">Huolellista ja tarkkaa työtä</p>
          </div>
        </div>
      </section>

      {/* Price Calculator Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <PriceCalculator />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Tietoa meistä</h2>
            <p className="text-lg text-gray-700 mb-8">
              Olemme sitoutuneet tarjoamaan parasta mahdollista siivouspalvelua
              asiakkaillemme.
            </p>
            <ul className="text-left space-y-4">
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-6 h-6 text-[#27ae60] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Yli 5 vuoden kokemus alalta
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-6 h-6 text-[#27ae60] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Ammattitaitoinen ja luotettava henkilökunta
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-6 h-6 text-[#27ae60] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Ympäristöystävälliset puhdistusaineet
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-6 h-6 text-[#27ae60] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Joustava aikataulutus
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-6 h-6 text-[#27ae60] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Kilpailukykyiset hinnat
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-6 h-6 text-[#27ae60] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Tyytyväisyystakuu
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mitä asiakkaamme sanovat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <h3 className="font-semibold">Maria Virtanen</h3>
                  <p className="text-gray-600">Tyytyväinen asiakas</p>
                </div>
              </div>
              <p className="text-gray-700">
                Erinomaista palvelua! Koti on aina puhdas ja raikas siivouksen
                jälkeen. Suosittelen lämpimästi.
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <h3 className="font-semibold">Antti Korhonen</h3>
                  <p className="text-gray-600">Säännöllinen asiakas</p>
                </div>
              </div>
              <p className="text-gray-700">
                Luotettava ja ammattitaitoinen siivouspalvelu. Henkilökunta on
                ystävällistä ja tekee työnsä huolellisesti.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <h3 className="font-semibold">Laura Mäkinen</h3>
                  <p className="text-gray-600">Säännöllinen asiakas</p>
                </div>
              </div>
              <p className="text-gray-700">
                Olen erittäin tyytyväinen Sarker Siivouksen palveluun. Koti on
                aina siisti ja raikas siivouksen jälkeen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-[#27ae60] text-white py-16 w-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Valmis aloittamaan?</h2>
          <p className="text-xl mb-8">Ota yhteyttä jo tänään!</p>
          <div className="max-w-4xl mx-auto">
            <a
              href="/ota-yhteytta"
              className="block w-full bg-white text-[#27ae60] py-4 text-xl font-semibold hover:bg-gray-100 transition-all"
            >
              Pyydä tarjous
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

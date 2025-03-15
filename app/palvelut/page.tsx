import Link from "next/link";
import {
  CheckIcon,
  CalendarDaysIcon,
  HandRaisedIcon,
  SparklesIcon,
  CreditCardIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Services() {
  const residentialServices = [
    "Pölyjen pyyhintä ja imurointi",
    "Lattioiden pesu",
    "Kylpyhuoneen ja WC:n siivous",
    "Keittiön siivous",
    "Vuodevaatteiden vaihto",
    "Ikkunalautojen pyyhintä",
  ];

  const windowServices = [
    "Ikkunoiden sisä- ja ulkopinnat",
    "Karmit ja puitteet",
    "Ikkunalaudat",
    "Sälekaihtimet",
    "Turvallinen korkealla työskentely",
    "Ympärivuotinen palvelu",
  ];

  const specialServices = [
    "Muuttosiivoukset",
    "Rakennussiivoukset",
    "Suursiivous",
    "Desinfiointi",
    "Hajunpoisto",
    "Allergiasiivoukset",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <img
            src="/images/services/hero-image.jpg"
            alt="Professional cleaning services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Palvelumme</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Tarjoamme monipuolisia siivouspalveluita koteihin ja yrityksille
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential Cleaning */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/images/services/residental cleaning.jpg"
                  alt="Residential cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Kodin siivous</h3>
                <p className="text-gray-600 mb-6">
                  Ammattitaitoista kodin siivousta joustavilla aikatauluilla.
                  Räätälöimme palvelun tarpeidesi mukaan.
                </p>
                <div className="space-y-3 mb-6">
                  {residentialServices.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-[#27ae60] flex-shrink-0 mr-2 mt-1" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/ota-yhteytta"
                  className="inline-block bg-[#27ae60] hover:bg-[#219a54] text-white font-medium py-2 px-6 rounded-full transition-colors"
                >
                  Pyydä tarjous
                </Link>
              </div>
            </div>

            {/* Window Cleaning */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/images/services/window cleaning.jpg"
                  alt="Window cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Ikkunan pesu</h3>
                <p className="text-gray-600 mb-6">
                  Tehokasta ja perusteellista ikkunoiden pesua ammattimaisilla
                  välineillä. Turvallista työskentelyä myös korkeissa kohteissa.
                </p>
                <div className="space-y-3 mb-6">
                  {windowServices.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-[#27ae60] flex-shrink-0 mr-2 mt-1" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/ota-yhteytta"
                  className="inline-block bg-[#27ae60] hover:bg-[#219a54] text-white font-medium py-2 px-6 rounded-full transition-colors"
                >
                  Pyydä tarjous
                </Link>
              </div>
            </div>

            {/* Special Cleaning */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/images/services/special cleaning.jpg"
                  alt="Special cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Erikoispuhdistus</h3>
                <p className="text-gray-600 mb-6">
                  Erityistä huomiota ja ammattitaitoa vaativat kohteet.
                  Räätälöidyt ratkaisut haastaviin siivoustarpeisiin.
                </p>
                <div className="space-y-3 mb-6">
                  {specialServices.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-[#27ae60] flex-shrink-0 mr-2 mt-1" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/ota-yhteytta"
                  className="inline-block bg-[#27ae60] hover:bg-[#219a54] text-white font-medium py-2 px-6 rounded-full transition-colors"
                >
                  Pyydä tarjous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Miten toimimme
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Helppo ja selkeä prosessi laadukkaaseen siivoukseen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-[#27ae60] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <CalendarDaysIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Varaa aika</h3>
                <p className="text-gray-600">
                  Valitse sinulle sopiva ajankohta
                </p>
              </div>
              <div
                className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-[#27ae60] -translate-y-1/2 transform"
                style={{ width: "calc(100% - 2rem)" }}
              ></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-[#27ae60] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <HandRaisedIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Vahvistus</h3>
                <p className="text-gray-600">
                  Saat vahvistuksen ja tarkat ohjeet
                </p>
              </div>
              <div
                className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-[#27ae60] -translate-y-1/2 transform"
                style={{ width: "calc(100% - 2rem)" }}
              ></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-[#27ae60] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <SparklesIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Siivous</h3>
                <p className="text-gray-600">
                  Ammattilaisemme hoitavat siivouksen
                </p>
              </div>
              <div
                className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-[#27ae60] -translate-y-1/2 transform"
                style={{ width: "calc(100% - 2rem)" }}
              ></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-[#27ae60] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <CreditCardIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tarkistus</h3>
                <p className="text-gray-600">
                  Varmistamme että olet tyytyväinen
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/ota-yhteytta"
              className="inline-flex items-center justify-center bg-[#27ae60] hover:bg-[#219a54] text-white font-medium py-3 px-8 rounded-full transition-colors text-lg"
            >
              Pyydä tarjous
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Map */}
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg bg-gray-50 order-2 md:order-1">
              <Image
                src="/images/south-finland-map.png"
                alt="Service Area Map"
                width={1920}
                height={1080}
                className="w-full h-full object-contain"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-[#27ae60] bg-opacity-5"></div>
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <MapPinIcon className="w-12 h-12 text-[#27ae60] mb-4" />
                <h2 className="text-3xl font-bold mb-4">Palvelualueemme</h2>
                <p className="text-gray-600 mb-4">
                  Tarjoamme siivouspalveluja pääkaupunkiseudulla'
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-[#27ae60] mr-2" />
                    <span className="text-gray-700">Helsinki</span>
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-[#27ae60] mr-2" />
                    <span className="text-gray-700">Espoo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-[#27ae60] mr-2" />
                    <span className="text-gray-700">Vantaa</span>
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-[#27ae60] mr-2" />
                    <span className="text-gray-700">Kauniainen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

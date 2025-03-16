"use client";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <img
            src="/images/about/about hero image.jpg"
            alt="Professional cleaning team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tietoa meistä
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Luotettavaa ja ammattitaitoista siivouspalvelua jo vuodesta 2018
            </p>
            <Link
              href="/ota-yhteytta"
              className="inline-block bg-[#27ae60] text-white px-8 py-3 rounded-lg hover:bg-[#219a52] transition-colors"
            >
              Pyydä tarjous
            </Link>
          </div>
        </div>
      </section>

      {/* Why Need Cleaning Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Miksi valita ammattimainen siivous?
              </h2>
              <p className="text-gray-600 mb-8">
                Puhdas koti ja työympäristö ovat tärkeitä hyvinvoinnille ja
                terveydelle. Ammattimainen siivous säästää aikaasi ja takaa
                laadukkaan lopputuloksen.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-3" />
                  <p className="text-gray-700">
                    Säästät aikaa ja energiaa tärkeämpiin asioihin
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-3" />
                  <p className="text-gray-700">
                    Saat puhtaan ja terveellisen ympäristön
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-3" />
                  <p className="text-gray-700">
                    Vähennät allergioita ja hengitystieongelmia
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-3" />
                  <p className="text-gray-700">
                    Pidennät pintamateriaalien käyttöikää
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-3" />
                  <p className="text-gray-700">
                    Nautit stressittömästä ja järjestelmällisestä kodista
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="/images/about/clean home environment.jpg"
                alt="Clean home environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Mitä tarjoamme</h2>
          <p className="text-gray-600 mb-12">
            Tarjoamme kattavan valikoiman siivouspalveluita koteihin ja
            yrityksille. Palvelumme on räätälöity asiakkaidemme tarpeiden
            mukaan, ja käytämme vain ympäristöystävällisiä puhdistusaineita.
          </p>
        </div>
      </section>

      {/* Our Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="/images/about/professional cleaning experience.jpg"
                alt="Professional cleaning experience"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Kokemuksemme</h2>
              <p className="text-gray-600 mb-8">
                Yli viiden vuoden kokemuksella olemme kehittäneet tehokkaat ja
                luotettavat siivousmenetelmät. Henkilökuntamme on
                ammattitaitoista ja sitoutunutta työhönsä.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-3" />
                  <p className="text-gray-700">
                    Kokenut ja luotettava siivouspalvelu
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-3" />
                  <p className="text-gray-700">
                    Koulutettu ja ammattitaitoinen henkilökunta
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-3" />
                  <p className="text-gray-700">
                    Modernit ja tehokkaat siivousvälineet
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-3" />
                  <p className="text-gray-700">
                    Ympäristöystävälliset puhdistusaineet
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-3" />
                  <p className="text-gray-700">
                    Joustava palvelu asiakkaan aikataulun mukaan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Lupauksemme</h2>
          <p className="text-gray-600 mb-8">
            Tavoitteemme on ylittää asiakkaidemme odotukset jokaisella
            siivouskerralla. Tarjoamme 100% tyytyväisyystakuun kaikille
            palveluillemme.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#27ae60] flex items-center justify-center">
              <CheckCircleIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Tyytyväisyystakuu kaikille palveluille
            </h3>
            <p className="text-gray-600">
              Tarjoamme 100% tyytyväisyystakuun kaikille palveluille. Jos et ole
              tyytyväinen, korjaamme asian.
            </p>
            <div className="mt-8">
              <Link
                href="/ota-yhteytta"
                className="inline-block bg-[#27ae60] text-white px-8 py-3 rounded-lg hover:bg-[#219a52] transition-colors"
              >
                Pyydä tarjous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Usein kysytyt kysymykset
          </h2>
          <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                onClick={() => toggleFaq(0)}
              >
                <span className="font-medium text-lg">
                  Minkä tyyppisiä siivouspalveluja tarjoatte?
                </span>
                {openFaq === 0 ? (
                  <ChevronUpIcon className="w-5 h-5 text-[#27ae60]" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-[#27ae60]" />
                )}
              </button>
              {openFaq === 0 && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">
                    Tarjoamme laajan valikoiman siivouspalveluja, mukaan lukien
                    kotisiivous, toimistosiivous, ikkunanpesu, perusteellinen
                    siivous, jälkisiivous rakennusprojektien jälkeen ja paljon
                    muuta. Voimme räätälöidä palvelumme vastaamaan juuri sinun
                    siivoustarpeitasi.
                  </p>
                </div>
              )}
            </div>
            <div className="border rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                onClick={() => toggleFaq(1)}
              >
                <span className="font-medium text-lg">
                  Ovatko siivoustuotteenne turvallisia lapsille ja lemmikeille?
                </span>
                {openFaq === 1 ? (
                  <ChevronUpIcon className="w-5 h-5 text-[#27ae60]" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-[#27ae60]" />
                )}
              </button>
              {openFaq === 1 && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">
                    Kyllä, asetamme etusijalle läheistesi ja ympäristön
                    turvallisuuden. Käytämme ekologisia ja myrkyttömiä
                    siivoustuotteita, jotka ovat turvallisia lapsille ja
                    lemmikeille.
                  </p>
                </div>
              )}
            </div>
            <div className="border rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                onClick={() => toggleFaq(2)}
              >
                <span className="font-medium text-lg">
                  Miten voin tilata siivouspalvelun?
                </span>
                {openFaq === 2 ? (
                  <ChevronUpIcon className="w-5 h-5 text-[#27ae60]" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-[#27ae60]" />
                )}
              </button>
              {openFaq === 2 && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">
                    Voit tilata siivouspalvelun soittamalla meille, lähettämällä
                    sähköpostia tai täyttämällä yhteydenottolomakkeen
                    verkkosivuillamme.
                  </p>
                </div>
              )}
            </div>
            <div className="border rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                onClick={() => toggleFaq(3)}
              >
                <span className="font-medium text-lg">
                  Kuinka paljon siivouspalvelu maksaa?
                </span>
                {openFaq === 3 ? (
                  <ChevronUpIcon className="w-5 h-5 text-[#27ae60]" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-[#27ae60]" />
                )}
              </button>
              {openFaq === 3 && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">
                    Siivouspalvelumme hinta määräytyy asunnon koon,
                    siivoustyypin ja tarvittavan työn määrän mukaan. Käytä
                    verkkosivullamme olevaa hintalaskuria saadaksesi arvion tai
                    ota yhteyttä tarkkaa tarjousta varten.
                  </p>
                </div>
              )}
            </div>
            <div className="border rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                onClick={() => toggleFaq(4)}
              >
                <span className="font-medium text-lg">
                  Voiko siivouksesta saada kotitalousvähennyksen?
                </span>
                {openFaq === 4 ? (
                  <ChevronUpIcon className="w-5 h-5 text-[#27ae60]" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-[#27ae60]" />
                )}
              </button>
              {openFaq === 4 && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">
                    Kyllä, siivouspalvelumme oikeuttavat kotitalousvähennykseen.
                    Voit hyödyntää jopa 40% verovähennyksen palvelun
                    työkustannuksista.
                  </p>
                </div>
              )}
            </div>
            <div className="border rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                onClick={() => toggleFaq(5)}
              >
                <span className="font-medium text-lg">
                  Millä alueilla toimitte?
                </span>
                {openFaq === 5 ? (
                  <ChevronUpIcon className="w-5 h-5 text-[#27ae60]" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-[#27ae60]" />
                )}
              </button>
              {openFaq === 5 && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">
                    Toimimme pääkaupunkiseudulla (Helsinki, Espoo, Vantaa,
                    Kauniainen) sekä lähikunnissa.
                  </p>
                </div>
              )}
            </div>
            <div className="border rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                onClick={() => toggleFaq(6)}
              >
                <span className="font-medium text-lg">
                  Entä jos minulla on erityisiä ohjeita tai tiettyjä alueita,
                  joihin haluan siivoojien keskittyvän?
                </span>
                {openFaq === 6 ? (
                  <ChevronUpIcon className="w-5 h-5 text-[#27ae60]" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-[#27ae60]" />
                )}
              </button>
              {openFaq === 6 && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">
                    Arvostamme avointa viestintää asiakkaidemme kanssa. Voit
                    antaa meille erityisiä ohjeita tai korostaa tiettyjä
                    alueita, joihin haluat siivoojiemme keskittyvän
                    siivouskäynnilläsi. Tiimimme räätälöi siivousprosessin
                    vastaamaan tarpeitasi.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Valmis aloittamaan?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ota yhteyttä ja pyydä tarjous - teemme kodistasi tai työpaikastasi
            puhtaamman ja viihtyisämmän!
          </p>
          <Link
            href="/ota-yhteytta"
            className="inline-block bg-[#27ae60] hover:bg-[#219a54] text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Pyydä tarjous
          </Link>
        </div>
      </section>
    </div>
  );
}

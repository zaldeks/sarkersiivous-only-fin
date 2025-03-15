import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Etusivu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Etusivu
                </Link>
              </li>
              <li>
                <Link
                  href="/tietoa-meista"
                  className="text-gray-400 hover:text-white"
                >
                  Tietoa meistä
                </Link>
              </li>
              <li>
                <Link
                  href="/palvelut"
                  className="text-gray-400 hover:text-white"
                >
                  Palvelut
                </Link>
              </li>
              <li>
                <Link
                  href="/ota-yhteytta"
                  className="text-gray-400 hover:text-white"
                >
                  Ota yhteyttä
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4">Ota yhteyttä</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Puh:{" "}
                <a href="tel:0443296873" className="hover:text-[#27ae60]">
                  044 329 6873
                </a>
              </li>
              <li className="text-gray-400">
                Info:{" "}
                <a
                  href="mailto:info@sarkersiivous.fi"
                  className="hover:text-[#27ae60]"
                >
                  info@sarkersiivous.fi
                </a>
              </li>
              <li className="text-gray-400">
                Myynti:{" "}
                <a
                  href="mailto:myynti@sarkersiivous.fi"
                  className="hover:text-[#27ae60]"
                >
                  myynti@sarkersiivous.fi
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-medium mb-4">Palvelualueet</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Helsinki</li>
              <li className="text-gray-400">Espoo</li>
              <li className="text-gray-400">Vantaa</li>
              <li className="text-gray-400">Kauniainen</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <div className="text-sm text-gray-500 mt-4">
            <p>
              &copy; {new Date().getFullYear()} Sarker Siivous. Kaikki oikeudet
              pidätetään
            </p>
            <p>Y-tunnus: 3360393-2</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

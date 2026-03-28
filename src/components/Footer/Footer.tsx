import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react";

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { name: "Tutti i Prodotti", href: "/shop" },
    { name: "Zona Giorno", href: "/collections/living-room" },
    { name: "Zona Notte", href: "/collections/bedroom" },
    { name: "Sala da Pranzo", href: "/collections/dining" },
    { name: "Ufficio", href: "/collections/office" },
  ];

  const companyLinks = [
    { name: "Chi Siamo", href: "/about" },
    { name: "La Nostra Storia", href: "/story" },
    { name: "Artigianato", href: "/craftsmanship" },
    { name: "Sostenibilità", href: "/sustainability" },
    { name: "Lavora con Noi", href: "/careers" },
  ];

  const customerServiceLinks = [
    { name: "Contattaci", href: "/contact" },
    { name: "Spedizioni e Resi", href: "/shipping" },
    { name: "Guida alla Cura", href: "/care-guide" },
    { name: "Garanzia", href: "/warranty" },
    { name: "Domande Frequenti", href: "/faq" },
  ];

  const legalLinks = [
    { name: "Informativa sulla Privacy", href: "/privacy" },
    { name: "Termini di Servizio", href: "/terms" },
    { name: "Informativa sui Cookie", href: "/cookies" },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight">AM Mida</span>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Qualità e risparmio hanno trovato Casa. Fondata nel 1966, AM Mida è oggi uno dei marchi italiani più affidabili nel settore dell'arredamento.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Via San Pio X – 63 , 84043 Agropoli (SA)
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/70 flex-shrink-0" />
                  <a
                    href="tel:+390974829334"
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    +39 0974 829334
                  </a>
                </div>
                <div className="flex items-center gap-3 ml-8">
                  <span className="text-white/50 nav-link-caps">WhatsApp:</span>
                  <a
                    href="https://wa.me/393338840807"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    +39 333 8840807
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/70 flex-shrink-0" />
                <a
                  href="mailto:info.ammidaarredo@gmail.com"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  info.ammidaarredo@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3 pt-4 border-t border-white/5">
                <Clock className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" />
                <div className="text-white/70 text-sm italic">
                  <p className="font-medium not-italic">Aperti dal Lunedì al Sabato</p>
                  <p>Mattino: 09:00 / 13:00</p>
                  <p>Pomeriggio: 16:00 / 20:00</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Negozio</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Azienda</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Servizio Clienti</h3>
            <ul className="space-y-3">
              {customerServiceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Google Map Section */}
        <div className="mb-12 w-full h-[350px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
          <div className="absolute inset-0 bg-neutral-900/20 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.762708244957!2d14.989837676424976!3d40.347609659842625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bfe50c4e5135f%3A0x39665d7a227018be!2sVia%20S.%20Pio%20X%2C%2063%2C%2084043%20Agropoli%20SA!5e0!3m2!1sen!2sit!4v1774707663887!5m2!1sen!2sit"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.6) contrast(1.1) brightness(0.9)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Posizione AM Mida Agropoli"
            className="hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition-all duration-1000 ease-in-out"
          />
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left mt-6">
            <p className="text-white/60 text-sm">
              © {currentYear} AM Mida. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-header font-bold mb-4">U-Spa</h3>
            <p className="font-body text-primary-foreground/80 mb-4">
              U-Spa is de premium dealer van Bullfrog Spa's. Deze met design awards bekroonde spa's zijn de zuinigste en stilste ter wereld, dankzij een innovatief ontwerp dat 90% minder leidingen gebruikt. Met een keuze uit 16 unieke, verwisselbare JetPaks geniet u, ongeacht uw lichaamslengte, van een massage op maat. Zo blijft u, jaar in jaar uit, fit en gezond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-foreground/60 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/60 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/60 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/60 transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-header font-bold mb-4">Belangrijke Pagina's</h3>
            <div className="space-y-2">
              <a href="/" className="block font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Home
              </a>
              <a href="/series" className="block font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Spa's
              </a>
              <a href="/difference" className="block font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Uw Voordeel
              </a>
              <a href="/company" className="block font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
                Over Ons
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-header font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="font-body text-primary-foreground/80">
                <strong>Telefoon:</strong> 06 25 071 071
              </p>
              <p className="font-body text-primary-foreground/80">
                <strong>E-mail:</strong> info@u-spa.nl
              </p>
              <p className="font-body text-primary-foreground/80">
                <strong>Adres:</strong><br />
                Herenweg 64<br />
                3602 AR Maarssen
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-primary-foreground/60 text-sm">
              © 2025 U-Spa. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-body text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors duration-200">
                Privacybeleid
              </a>
              <a href="#" className="font-body text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors duration-200">
                Algemene Voorwaarden
              </a>
              <a href="#" className="font-body text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

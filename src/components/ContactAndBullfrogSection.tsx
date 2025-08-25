import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactAndBullfrogSection: FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Build by Bullfrog Section (Left) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-header font-semibold text-white">BUILD BY BULLFROG</h3>
            <div className="space-y-4 text-white">
              <p className="text-base font-body">
                U-Spa is de premium dealer van Bullfrog Spa's. Deze met design awards bekroonde spa's zijn de zuinigste en stilste ter wereld, dankzij een innovatief ontwerp dat 90% minder leidingen gebruikt.
              </p>
              <p className="text-base font-body">
                Met een keuze uit 16 unieke, verwisselbare JetPaks geniet u, ongeacht uw lichaamslengte, van een massage op maat.
              </p>
              <p className="text-base font-body">
                Zo blijft u, jaar in jaar uit, fit en gezond.
              </p>
            </div>
            <div className="relative w-full" style={{ paddingTop: "56.25%" /* 16:9 Aspect Ratio */ }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://player.vimeo.com/video/882791674?h=16.214"
                title="Bullfrog Spas Overzicht"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Contact Details (Right) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-header font-semibold text-white">TOE AAN EEN FITTERE YOU?</h3>
            <div className="space-y-4 text-white">
              <p className="text-base font-body">
                Heeft u vragen of wilt u een afspraak maken? Neem contact met ons op en ons team helpt u graag verder.
              </p>
              <p className="text-base font-body">
                Samen met U-Spa kijkt u naar de mogelijkheden voor de plaatsing in of om uw huis. U-Spa levert, installeert en onderhoudt de designspa, zodat u zonder stress kunt genieten van het leven.
              </p>
              <p className="text-base font-body">
                Een stille, perfecte masseur die altijd doet wat u vraagt. Wie wil dat nou niet?
              </p>
              <p className="text-base font-body">
                Bel of mail direct met U-Spa!
              </p>
            </div>
            
            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="bg-transparent border border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white text-black p-2 rounded-full">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-header font-semibold text-white">Telefoon</h3>
                      <p className="font-body text-white">06 25 071 071</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-transparent border border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white text-black p-2 rounded-full">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-header font-semibold text-white">E-mail</h3>
                      <p className="font-body text-white">info@u-spa.nl</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-transparent border border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white text-black p-2 rounded-full">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-header font-semibold text-white">Adres</h3>
                      <p className="font-body text-white">
                        Herenweg 64<br />
                        3602 AR Maarssen
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAndBullfrogSection;

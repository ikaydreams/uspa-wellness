import Footer from "@/components/Footer";

const Company = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section 1: Heading */}
          <h1 className="text-4xl md:text-5xl font-header font-bold text-center mb-8 text-white">
            EEN FITTERE YOU
          </h1>

          {/* Section 2: Three Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Block 1: Persoonlijk Contact */}
            <div className="text-center">
              <div className="w-80 h-80 mx-auto mb-6 overflow-hidden rounded-2xl shadow-2xl border-4 border-white/40 bg-white/20 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://static.wixstatic.com/media/25e0c0_2557dcd677eb442da5a47574b25241f1~mv2.jpg/v1/crop/x_14,y_0,w_315,h_315/fill/w_224,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FP%20Diensten_edited.jpg"
                  alt="Persoonlijk Contact"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-header font-bold mb-4 text-white">Persoonlijk Contact</h2>
              <div className="space-y-3 text-white">
                <p className="text-base font-body">
                  Geen betere klant dan een fitte klant die optimaal geniet van zijn Bullfrog U-Spa.
                </p>
                <p className="text-base font-body">
                  Voor U-Spa is sales pas echt succesvol wanneer een klant de naam U-Spa enthousiast doorgeeft aan vrienden.
                </p>
                <p className="text-base font-body">
                  Van plaatsing tot aftersales. Geen stress met U-Spa.
                </p>
              </div>
            </div>

            {/* Block 2: Keuze voor Kwaliteit */}
            <div className="text-center">
              <div className="w-80 h-80 mx-auto mb-6 overflow-hidden rounded-2xl shadow-2xl border-4 border-white/40 bg-white/20 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://static.wixstatic.com/media/25e0c0_725640aa36544163b871af23113a5827~mv2.jpg/v1/fill/w_224,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fivestar-300x300_edited_edited.jpg"
                  alt="Keuze voor Kwaliteit"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-header font-bold mb-4 text-white">Keuze voor Kwaliteit</h2>
              <div className="space-y-3 text-white">
                <p className="text-base font-body">
                  Wij verkopen een kwaliteitsproduct met talloze voordelen, zoals:
                </p>
                <div className="flex justify-center">
                  <ul className="text-base font-body text-left space-y-1">
                    <li>• JetPak Technologie</li>
                    <li>• Houtloze constructie</li>
                    <li>• Warmtepomp ready</li>
                    <li>• Voor alle lichaamslengtes</li>
                    <li>• Optimale Power en veiligheid</li>
                    <li>• Energiezuinig</li>
                  </ul>
                </div>
                <p className="text-base font-body">
                  En behoudt van waarde bij inruil, zelfs na jaren van gebruik.
                </p>
              </div>
            </div>

            {/* Block 3: Professionele Installatie */}
            <div className="text-center">
              <div className="w-80 h-80 mx-auto mb-6 overflow-hidden rounded-2xl shadow-2xl border-4 border-white/40 bg-white/20 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://static.wixstatic.com/media/25e0c0_b4d4feabd7684562bdb29103f9f8b354~mv2.jpg/v1/fill/w_251,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/VB%20Spa%20Adv_edited_edited_edited.jpg"
                  alt="Professionele Installatie"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-header font-bold mb-4 text-white">Professionele Installatie</h2>
              <div className="space-y-3 text-white">
                <p className="text-base font-body">
                  Ons U-Spa Team weet als geen ander hoe zij de optimale installatie van een Bullfrog Spa moeten verzorgen.
                </p>
                <p className="text-base font-body">
                  Wij hebben veel ervaring met de levering van de buitenspa's en weten precies waar we op moeten letten.
                </p>
                <p className="text-base font-body">
                  Wij bieden geen product, maar een exclusieve beleving.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Contact Details */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-header font-bold mb-8 text-white text-center">Contactgegevens</h2>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Contact Information (Left) */}
              <div className="w-full lg:w-1/2">
                <div className="bg-transparent border border-gray-700 rounded-2xl p-8 space-y-6">
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-header font-semibold text-white mb-3">Telefoon</h3>
                    <p className="text-xl font-body text-white">06 25 071 071</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-header font-semibold text-white mb-3">E-mail</h3>
                    <p className="text-xl font-body text-white">info@u-spa.nl</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-header font-semibold text-white mb-3">Adres</h3>
                    <p className="text-xl font-body text-white">
                      Herenweg 64<br />
                      3602 AR Maarssen
                    </p>
                    <p className="text-lg font-body text-white mt-3">
                      Maandag tot en met Zaterdag alleen op afspraak.
                    </p>
                  </div>
                </div>
              </div>

              {/* Spa Image (Right) */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="w-full max-w-xl">
                  <img
                    src="/compressed_20241008_BF_KWP_DAY01_SHOT06_2743.jpg"
                    alt="Luxury Spa"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Company;

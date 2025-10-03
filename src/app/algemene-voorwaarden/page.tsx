import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | TechWithYou',
  description: 'Lees onze algemene voorwaarden voor het gebruik van TechWithYou diensten en website.',
  alternates: {
    canonical: '/algemene-voorwaarden',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <section className="relative pt-32 pb-10 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Algemene <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Voorwaarden</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            De voorwaarden die van toepassing zijn op het gebruik van onze diensten.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
            </div>

            <h2>1. Definities</h2>
            <ul>
              <li><strong>TechWithYou:</strong> De onderneming gevestigd te Amsterdam, Nederland</li>
              <li><strong>Klant:</strong> De natuurlijke of rechtspersoon die gebruik maakt van onze diensten</li>
              <li><strong>Diensten:</strong> Alle door TechWithYou aangeboden professionele diensten</li>
              <li><strong>Website:</strong> De website toegankelijk via techwithyou.com</li>
            </ul>

            <h2>2. Toepasselijkheid</h2>
            <p>
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, overeenkomsten en leveringen van 
              TechWithYou. Afwijkende voorwaarden van de klant worden uitdrukkelijk van de hand gewezen, tenzij 
              schriftelijk anders overeengekomen.
            </p>

            <h2>3. Aanbiedingen en Overeenkomsten</h2>
            <p>
              Alle aanbiedingen van TechWithYou zijn vrijblijvend en geldig gedurende 30 dagen, tenzij anders aangegeven. 
              Overeenkomsten komen tot stand door schriftelijke bevestiging van beide partijen of door aanvang van de 
              werkzaamheden door TechWithYou.
            </p>

            <h2>4. Prijzen en Betaling</h2>
            <ul>
              <li>Alle prijzen zijn exclusief BTW en andere heffingen, tenzij anders vermeld</li>
              <li>Betaling dient te geschieden binnen 30 dagen na factuurdatum</li>
              <li>Bij overschrijding van de betalingstermijn zijn wij gerechtigd de wettelijke rente in rekening te brengen</li>
              <li>Vooruitbetaling kan worden gevraagd voor projecten boven €5.000</li>
            </ul>

            <h2>5. Uitvoering van Diensten</h2>
            <p>
              TechWithYou zal de overeengekomen diensten naar beste kunnen en volgens de huidige stand der techniek uitvoeren. 
              Wij streven naar het nakomen van afgesproken deadlines, maar termijnen zijn indicatief tenzij uitdrukkelijk 
              anders overeengekomen.
            </p>

            <h2>6. Medewerking van de Klant</h2>
            <p>
              De klant verplicht zich om alle benodigde informatie, materialen en medewerking tijdig te verstrekken. 
              Vertraging door gebrek aan medewerking van de klant kan leiden tot aanpassing van planning en kosten.
            </p>

            <h2>7. Intellectueel Eigendom</h2>
            <ul>
              <li>Alle door TechWithYou ontwikkelde software en ontwerpen blijven ons eigendom tot volledige betaling</li>
              <li>Na betaling verkrijgt de klant een niet-exclusieve licentie voor het overeengekomen gebruik</li>
              <li>Broncode en ontwerpdocumenten blijven eigendom van TechWithYou tenzij anders overeengekomen</li>
            </ul>

            <h2>8. Geheimhouding</h2>
            <p>
              Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie die tijdens de 
              samenwerking wordt uitgewisseld. Deze verplichting geldt ook na beëindiging van de overeenkomst.
            </p>

            <h2>9. Aansprakelijkheid</h2>
            <p>
              De aansprakelijkheid van TechWithYou is beperkt tot het factuurbedrag van de betreffende opdracht, 
              met een maximum van €25.000 per gebeurtenis. Wij zijn niet aansprakelijk voor indirecte schade, 
              gederfde winst of gevolgschade.
            </p>

            <h2>10. Garantie en Support</h2>
            <ul>
              <li>Wij bieden 3 maanden garantie op geleverde software tegen materiële gebreken</li>
              <li>Support en onderhoud na oplevering zijn tegen aparte vergoeding beschikbaar</li>
              <li>Garantie vervalt bij eigen aanpassingen door de klant of derden</li>
            </ul>

            <h2>11. Overmacht</h2>
            <p>
              TechWithYou is niet gehouden tot nakoming van enige verplichting indien zij daartoe verhinderd wordt 
              als gevolg van overmacht, waaronder ziekte van sleutelpersoneel, internetuitval, en andere 
              onvoorzienbare omstandigheden.
            </p>

            <h2>12. Beëindiging</h2>
            <p>
              Beide partijen kunnen de overeenkomst schriftelijk opzeggen met inachtneming van een opzegtermijn van 
              30 dagen. Bij beëindiging zijn alle tot dan toe geleverde diensten tegen de overeengekomen tarieven 
              verschuldigd.
            </p>

            <h2>13. Wijziging Voorwaarden</h2>
            <p>
              TechWithYou behoudt zich het recht voor deze voorwaarden te wijzigen. Wijzigingen worden van kracht 
              30 dagen na kennisgeving via onze website of per e-mail.
            </p>

            <h2>14. Toepasselijk Recht</h2>
            <p>
              Op alle overeenkomsten met TechWithYou is Nederlands recht van toepassing. Geschillen zullen worden 
              voorgelegd aan de bevoegde rechter in Amsterdam.
            </p>

            <h2>15. Slotbepalingen</h2>
            <p>
              Indien een bepaling uit deze voorwaarden nietig of vernietigbaar blijkt, blijven de overige bepalingen 
              volledig van kracht. De nietige bepaling zal worden vervangen door een geldige bepaling die de bedoeling 
              zo dicht mogelijk benadert.
            </p>

            <h2>16. Contact</h2>
            <p>
              Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen:
            </p>
            <ul>
              <li><strong>E-mail:</strong> info@techwithyou.com</li>
              <li><strong>Telefoon:</strong> +31 6 058 158</li>
              <li><strong>Adres:</strong> Amsterdam, Nederland</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
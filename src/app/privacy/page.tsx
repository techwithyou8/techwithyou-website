import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacybeleid | TechWithYou',
  description: 'Lees ons privacybeleid om te begrijpen hoe TechWithYou uw persoonlijke gegevens verzamelt, gebruikt en beschermt.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <section className="relative pt-32 pb-10 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Privacy</span>beleid
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uw privacy is belangrijk voor ons. Lees hier hoe wij omgaan met uw persoonlijke gegevens.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
            </div>

            <h2>1. Inleiding</h2>
            <p>
              TechWithYou ("wij", "ons", "onze") respecteert uw privacy en is toegewijd aan het beschermen van uw persoonlijke gegevens. 
              Dit privacybeleid legt uit hoe we uw persoonlijke informatie verzamelen, gebruiken, delen en beschermen wanneer u onze diensten gebruikt.
            </p>

            <h2>2. Gegevens die wij verzamelen</h2>
            <p>Wij kunnen de volgende categorieën persoonlijke gegevens verzamelen:</p>
            <ul>
              <li><strong>Contactgegevens:</strong> naam, e-mailadres, telefoonnummer, bedrijfsnaam</li>
              <li><strong>Projectinformatie:</strong> details over uw projectvereisten en wensen</li>
              <li><strong>Technische gegevens:</strong> IP-adres, browsertype, apparaatinformatie</li>
              <li><strong>Gebruiksgegevens:</strong> hoe u onze website gebruikt en communiceert</li>
            </ul>

            <h2>3. Hoe wij uw gegevens gebruiken</h2>
            <p>Wij gebruiken uw persoonlijke gegevens voor de volgende doeleinden:</p>
            <ul>
              <li>Het leveren van onze professionele diensten</li>
              <li>Communicatie over projecten en offertes</li>
              <li>Verbetering van onze website en diensten</li>
              <li>Voldoen aan wettelijke verplichtingen</li>
              <li>Bescherming van onze legitieme bedrijfsbelangen</li>
            </ul>

            <h2>4. Delen van gegevens</h2>
            <p>
              Wij delen uw persoonlijke gegevens niet met derden, behalve:
            </p>
            <ul>
              <li>Met uw uitdrukkelijke toestemming</li>
              <li>Aan dienstverleners die ons helpen bij het leveren van onze diensten</li>
              <li>Wanneer wettelijk vereist</li>
              <li>Om onze rechten, eigendom of veiligheid te beschermen</li>
            </ul>

            <h2>5. Gegevensbeveiliging</h2>
            <p>
              Wij implementeren passende technische en organisatorische maatregelen om uw persoonlijke gegevens te beschermen tegen 
              ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging. Dit omvat encryptie, veilige servers en 
              toegangscontroles.
            </p>

            <h2>6. Bewaartermijnen</h2>
            <p>
              Wij bewaren uw persoonlijke gegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld, 
              of zoals vereist door toepasselijke wetgeving. Contactgegevens worden maximaal 7 jaar bewaard na laatste contact.
            </p>

            <h2>7. Uw rechten</h2>
            <p>Onder de AVG heeft u de volgende rechten:</p>
            <ul>
              <li>Recht op toegang tot uw persoonlijke gegevens</li>
              <li>Recht op rectificatie van onjuiste gegevens</li>
              <li>Recht op verwijdering ("recht om vergeten te worden")</li>
              <li>Recht op beperking van verwerking</li>
              <li>Recht op gegevensoverdraagbaarheid</li>
              <li>Recht van bezwaar tegen verwerking</li>
            </ul>

            <h2>8. Cookies en tracking</h2>
            <p>
              Onze website gebruikt cookies om de gebruikerservaring te verbeteren. U kunt uw cookievoorkeuren beheren via de 
              cookie-instellingen van uw browser. Essentiële cookies kunnen niet worden uitgeschakeld.
            </p>

            <h2>9. Wijzigingen in dit beleid</h2>
            <p>
              Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. Belangrijke wijzigingen worden gecommuniceerd via 
              onze website. De datum van de laatste wijziging wordt altijd vermeld.
            </p>

            <h2>10. Contact</h2>
            <p>
              Voor vragen over dit privacybeleid of het uitoefenen van uw rechten, kunt u contact met ons opnemen:
            </p>
            <ul>
              <li><strong>E-mail:</strong> info@techwithyou.com</li>
              <li><strong>Telefoon:</strong> +31 6 058 158</li>
              <li><strong>Adres:</strong> Amsterdam, Nederland</li>
            </ul>

            <h2>11. Autoriteit Persoonsgegevens</h2>
            <p>
              Als u niet tevreden bent over hoe wij uw persoonlijke gegevens behandelen, heeft u het recht om een klacht 
              in te dienen bij de Autoriteit Persoonsgegevens via{' '}
              <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400">
                autoriteitpersoonsgegevens.nl
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
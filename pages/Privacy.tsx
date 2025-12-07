import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { Lock } from 'lucide-react';

const Privacy: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-50/30 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 md:p-16 rounded-3xl shadow-xl shadow-brand-100/50 border border-brand-50">
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
          <div className="p-3 bg-brand-50 rounded-2xl">
            <Lock className="w-8 h-8 text-brand-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-brand-dark">{t('privacy.title')}</h1>
            <p className="text-gray-500">{t('privacy.subtitle')}</p>
          </div>
        </div>
        
        <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
          <p className="font-medium text-gray-900 mb-6">Versie: 2.1 - Laatst gewijzigd: November 2024</p>

          <div className="grid gap-8">
            <article>
              <h3 className="font-bold text-brand-dark mb-2">1. Identiteit Verwerkingsverantwoordelijke</h3>
              <p>Jajo Consult Beheer B.V., gevestigd te Amsterdam, ingeschreven bij de Kamer van Koophandel onder nummer 77933877, is verantwoordelijk voor de verwerking van uw persoonsgegevens.</p>
            </article>

            <article>
              <h3 className="font-bold text-brand-dark mb-2">2. Welke gegevens verwerken wij?</h3>
              <p>Wij verwerken gegevens die u zelf aan ons verstrekt: NAW-gegevens, e-mailadres, telefoonnummer, inkomensgegevens, gezinssamenstelling en gegevens over uw huidige woonsituatie.</p>
            </article>

            <article>
              <h3 className="font-bold text-brand-dark mb-2">3. Doel van de verwerking</h3>
              <p>Het doel is tweeledig: (1) Het uitvoeren van de selectieprocedure om te bepalen of u in aanmerking komt voor een bezichtiging, en (2) Het communiceren over de voortgang van uw inschrijving en eventuele toewijzing.</p>
            </article>

            <article>
              <h3 className="font-bold text-brand-dark mb-2">4. Grondslag van de verwerking</h3>
              <p>De verwerking is noodzakelijk voor de uitvoering van de overeenkomst (uw inschrijving) en, waar van toepassing, om te voldoen aan wettelijke verplichtingen (zoals administratieplicht).</p>
            </article>

            <article>
              <h3 className="font-bold text-brand-dark mb-2">5. Delen met derden</h3>
              <p>Uw gegevens worden in beginsel niet met derden gedeeld. Alleen indien u daadwerkelijk wordt voorgedragen voor een woning, worden uw gegevens gedeeld met de betreffende verhuurder voor het opstellen van het contract.</p>
            </article>

            <article>
              <h3 className="font-bold text-brand-dark mb-2">6. Bewaartermijn</h3>
              <p>Wij bewaren uw gegevens niet langer dan strikt noodzakelijk. Indien er geen match plaatsvindt, worden uw gedetailleerde financiële gegevens na 12 maanden geanonimiseerd. Factuurgegevens bewaren wij 7 jaar conform de fiscale bewaarplicht.</p>
            </article>

            <article>
              <h3 className="font-bold text-brand-dark mb-2">7. Beveiliging</h3>
              <p>Wij nemen de bescherming van uw gegevens serieus. Onze website maakt gebruik van SSL-certificaten en de database is beveiligd met encryptie en strikte toegangsbeperkingen.</p>
            </article>

            <article>
              <h3 className="font-bold text-brand-dark mb-2">8. Geautomatiseerde besluitvorming</h3>
              <p>Ons systeem maakt gebruik van logica om profielen te matchen aan woningcriteria (bijv. inkomenseis). U heeft altijd het recht om een herziening door een medewerker aan te vragen indien u het niet eens bent met de uitkomst.</p>
            </article>

            <article>
              <h3 className="font-bold text-brand-dark mb-2">9. Cookies en Tracking</h3>
              <p>Wij gebruiken functionele cookies om de website goed te laten werken. Wij gebruiken analytische cookies om het gebruik van de website te meten; deze gegevens zijn geanonimiseerd.</p>
            </article>

            <article>
              <h3 className="font-bold text-brand-dark mb-2">10. Inzage en correctie</h3>
              <p>U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. U kunt een verzoek tot inzage sturen naar info@dutch-rentals.nl.</p>
            </article>

            <article>
              <h3 className="font-bold text-brand-dark mb-2">11. Klachten</h3>
              <p>Heeft u een klacht over de verwerking van uw persoonsgegevens? Wij lossen dit graag met u op. Komt u er niet uit, dan heeft u het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.</p>
            </article>

            <article>
              <h3 className="font-bold text-brand-dark mb-2">12. Wijzigingen Privacyverklaring</h3>
              <p>Deze verklaring kan wijzigen. Wij raden u aan deze regelmatig te raadplegen. De laatste versie is altijd beschikbaar op onze website.</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
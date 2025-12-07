import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { FileText, ShieldAlert, BadgeInfo } from 'lucide-react';

const Terms: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-50/30 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 md:p-16 rounded-3xl shadow-xl shadow-brand-100/50 border border-brand-50">
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
          <div className="p-3 bg-brand-50 rounded-2xl">
            <FileText className="w-8 h-8 text-brand-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-brand-dark">{t('terms.title')}</h1>
            <p className="text-gray-500">{t('terms.subtitle')}</p>
          </div>
        </div>
        
        <div className="space-y-10 text-gray-700 leading-relaxed text-sm md:text-base">
            <section className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
              <h2 className="text-lg font-bold text-brand-dark mb-2">Jajo Consult Beheer B.V.</h2>
              <p className="text-gray-600 mb-1">KvK nummer: 77933877</p>
              <p className="text-gray-600">Handelend onder de naam: Dutch Rentals</p>
            </section>

            <div className="grid gap-8">
              <article>
                <h3 className="font-bold text-gray-900 mb-2">1. Definities en Toepasselijkheid</h3>
                <p>Deze algemene voorwaarden zijn van toepassing op elk aanbod van Dutch Rentals en op elke tot stand gekomen overeenkomst tussen ondernemer en consument. Onder 'deelnemer' wordt verstaan iedere natuurlijke persoon die zich inschrijft op het platform.</p>
              </article>

              <article>
                <h3 className="font-bold text-gray-900 mb-2">2. Dienstverlening</h3>
                <p>Dutch Rentals biedt een online platform aan waarmee woningzoekenden op basis van een profielanalyse geselecteerd kunnen worden voor bezichtigingen. Wij zijn geen eigenaar van de woningen, maar faciliteren het selectieproces in opdracht van verhuurders.</p>
              </article>

              <article>
                <h3 className="font-bold text-gray-900 mb-2">3. Het Inschrijfproces</h3>
                <p>Door het invullen van de vragenlijst en het voldoen van de betaling, schrijft de deelnemer zich in. Deelnemer verklaart dat alle ingevulde gegevens (inkomen, gezinssamenstelling) naar waarheid zijn ingevuld.</p>
              </article>

              <article>
                <h3 className="font-bold text-gray-900 mb-2">4. Betaling en Vergoeding</h3>
                <p>Voor deelname aan de selectieprocedure wordt eenmalig een bedrag van €45,00 in rekening gebracht. Deze kosten dekken de administratieve verwerking, de verificatie van het profiel en het gebruik van het platform. Betaling geschiedt via iDeal.</p>
              </article>

              <article className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-amber-900">
                <h3 className="font-bold mb-2 flex items-center gap-2"><ShieldAlert className="w-4 h-4"/> 5. Geen Garanties (Disclaimer)</h3>
                <p className="mb-2">Dutch Rentals spant zich in, maar biedt expliciet <strong>geen resultaatsverplichting</strong> op:</p>
                <ul className="list-disc ml-5 space-y-1">
                    <li>Het daadwerkelijk verkrijgen van een huurwoning (de uiteindelijke keuze ligt bij de verhuurder).</li>
                    <li>Het doorgaan van geplande bezichtigingen indien de woning tussentijds is verhuurd of ingetrokken.</li>
                    <li>De beschikbaarheid van specifiek aanbod in de toekomst.</li>
                </ul>
              </article>

              <article>
                <h3 className="font-bold text-gray-900 mb-2">6. Restitutiebeleid</h3>
                <p>Gezien de aard van de dienst (directe levering van toegang tot het selectiesysteem en netwerk), is het herroepingsrecht uitgesloten na succesvolle betaling en aanvang van de dienstverlening. De inschrijfkosten worden niet gerestitueerd bij het niet verkrijgen van een woning.</p>
              </article>

              <article>
                <h3 className="font-bold text-gray-900 mb-2">7. Aansprakelijkheid</h3>
                <p>Dutch Rentals is niet aansprakelijk voor schade voortvloeiend uit het niet verkrijgen van een woning, foutieve informatie in woningadvertenties (aangeleverd door derden), of technische storingen van het platform.</p>
              </article>

              <article>
                <h3 className="font-bold text-gray-900 mb-2">8. Gedrag en Misbruik</h3>
                <p>Bij vermoeden van fraude, het verstrekken van valse inkomensgegevens of onbehoorlijk gedrag jegens medewerkers of verhuurders, behoudt Dutch Rentals zich het recht voor de deelnemer direct uit te sluiten zonder restitutie.</p>
              </article>

              <article>
                <h3 className="font-bold text-gray-900 mb-2">9. Privacy en Gegevensverwerking</h3>
                <p>Persoonsgegevens worden verwerkt conform de AVG en onze Privacyverklaring. Gegevens worden enkel gedeeld met de verhuurder indien dit noodzakelijk is voor de totstandkoming van de huurovereenkomst.</p>
              </article>

              <article>
                <h3 className="font-bold text-gray-900 mb-2">10. Huurovereenkomsten</h3>
                <p>De uiteindelijke huurovereenkomst komt tot stand tussen huurder en verhuurder. Dutch Rentals is geen partij in het huurcontract. Standaard betreft dit contracten voor minimaal 12 maanden met een opzegtermijn van 1 kalendermaand.</p>
              </article>

              <article>
                <h3 className="font-bold text-gray-900 mb-2">11. Wijzigingen Voorwaarden</h3>
                <p>Dutch Rentals is gerechtigd deze voorwaarden te wijzigen. Op lopende inschrijvingen zijn de voorwaarden van toepassing zoals deze luidden ten tijde van inschrijving.</p>
              </article>

              <article>
                <h3 className="font-bold text-gray-900 mb-2">12. Toepasselijk Recht</h3>
                <p>Op alle rechtsbetrekkingen waarbij gebruiker partij is, is uitsluitend het Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar Jajo Consult Beheer B.V. is gevestigd.</p>
              </article>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
export default function Impressum() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-black!">Impressum</h1>
      <p className="text-lg text-center">
        Angaben gemäß § 5 TMG:<br />
        Maxhofkinder e. V.<br />
        Königswieser Str. 12<br />
        81475 München<br />
        Telefon: 089 - 7594647<br />
        Fax: 089 - 74442218<br />
        E-Mail: <a href="mailto:kontakt@maxhofkinder.de">Kontakt@maxhofkinder.de</a>
      </p>
      <h2 className="text-3xl font-bold">Haftungsausschluss</h2>
      
        <h3>Haftung für Inhalte</h3>
        <p className="text-lg text-center">
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p><br />

        <h3>Haftung für Links</h3>
        <p className="text-lg text-center">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p><br />
        <h3>Urheberrecht</h3>
        <p className="text-lg text-center">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p><br />

        <h3>Datenschutz</h3>
        <p className="text-lg text-center">
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
        </p>
      

      <h2 className="text-3xl font-bold">Vertreten durch Vorstand</h2>
      <ul className="text-center">
        <li>Nina Schumann</li>
        <li>Sabine Adelwarth</li>
        <li>Karina Werberger</li>
      </ul>

      <h2 className="text-3xl font-bold">Registereintrag</h2>
      <p className="text-lg text-center">
        Eintragung im Vereinsregister.<br />
        Registergericht: München<br />
        Registernummer: VR 13389<br />
      </p>

      <h2 className="text-3xl font-bold">Aufsichtsbehörde</h2>
      <p className="text-lg text-center">
        Landeshauptstadt München<br />
        Referat für Bildung und Sport<br />
        Abteilung KITA<br />
      </p>



      {/* Add legal details */}
    </div>
  );
}
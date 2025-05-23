export default function About() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 my-16">

      <div className="card-gradient card-gradient-green">
        <h1>Der Verein</h1>
        <img src="img/outside.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="cardText">
          <p>Die „Maxhofkinder“ wurden im Juni 1989 gegründet. Wir betreuen Kinder im Alter von 2 bis 10 Jahren. Träger ist der, seit November 1990 eingetragene gemeinnützige Verein, &quot;Maxhofkinder e.V.&quot; (ehemals „Eltern-Kind-Initiative Maxhof e.V.“), dem mindestens ein Elternteil je betreutem Kind als Mitglied angehört.</p>
          <p>Der Vorstand des Vereins wird aus den Vereinsmitgliedern gewählt. Er vertritt den Verein nach außen und ist für Kontakte mit den Ämtern und für die Finanzen zuständig.</p>
          <p>Gefördert wird die Eltern-Kind-Initiative &quot;Maxhofkinder e.V.&quot; durch die Stadt München (EKI Förderung), dem BayKiBiG (Bayerisches Kinderbildungs- und betreuungsgesetz) und ist Mitglied im KKT (Klein Kinder Tagesstätten e.V.).</p>
        </div>
      </div>

      <div className="card-gradient card-gradient-orange">
        <h1>Die Reggio-Pädagogik</h1>
        <img src="img/sample2.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="cardText">
          <p>Unser pädagogisches Konzept und unsere Arbeitsweise orientieren sich an den erziehungswissenschaftlichen Grundsätzen der Reggio-Pädagogik.</p>
          <p>Die Reggio-Pädagogik hat ihre Wurzeln in der norditalienischen Stadt „Reggio Emilia“ und entstand in der Nachkriegszeit. Als Loris Malaguzzi in den 70er Jahren diese weiterentwickelte und ausformulierte, weckte er das weltweite Interesse. 1991 wurde die Reggio-inspirierte Pädagogik von der UNESCO als beste vorschulische Pädagogik ausgezeichnet. Diese Denkweise zu finden und sie im pädagogischen Alltag gut umzusetzen, benötigt Zeit.</p>
          <p>Von 2014 bis 2017 wurden wir von einer Referentin der Dialog Reggio e.V. (www.dialog-reggio.de) begleitet und unterstützt.</p>
          <p>Im September 2017 haben wir die Anerkennung als Reggio-Inspirierte Einrichtung erhalten.</p>
          <p>Neben der Reggio-inspirierten Pädagogik orientiert sich unser Konzept am Bayerischen Bildungs- und Erziehungsplan (BEP), sowie den gesetzlichen Grundlagen des Bayerischen Kinderbildungs- und Betreuungsgestzes (BayKiBiG).</p>
        </div>
      </div>

      <div className="card-gradient card-gradient-blue">
        <h1>Unsere Leitsätze</h1>
        <img src="img/leafs.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="cardText">
          <p>Als Elterninitiative ist eine enge, vertrauensvolle Zusammenarbeit mit den Eltern selbstverständlich und bildet die Basis unserer familiären Atmosphäre. Wir fördern die Aufnahme von Geschwisterkindern und achten stets auf eine liebevolle Betreuung.</p>
          <p>Die Kinder sowie deren Eltern sollen sich geborgen fühlen. Wir gehen auf individuelle Bedürfnisse ein und stehen in pädagogischen Fragen gerne als beratende Funktion zur Verfügung.</p>
          <p>Unsere großzügigen, freundlich eingerichteten Räumlichkeiten bieten Platz zur freien Entfaltung im Spiel. Ob Rückzugsmöglichkeiten, Bewegung, Konstruktion oder kreative Gestaltung, die Räume sind für unsere große Alterspanne adäquat eingerichtet.</p>
        </div>
      </div>

      <div className="card-gradient card-gradient-red">
        <h1>Konzeption</h1>
        <img src="img/free2.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="cardText">
          <p className="text-center">Die ausführliche Konzeption unserer Einrichtung finden Sie hier:</p>
          <h4 className="mt-4 mb-8 text-2xl font-bold bg-white w-fit mx-auto text-[#ff6666] rounded-full py-4 px-8 drop-shadow-md">Konzeption</h4>
        </div>
      </div>

    </div>
  );
}
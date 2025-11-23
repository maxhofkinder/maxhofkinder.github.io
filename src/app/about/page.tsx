export default function About() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-16">

      {/* ---- DIE KINDER ---- */}
      <div className="card-gradient">
        <h1>Die Kinder</h1>
        <img src="img/back.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="cardText">
          <p>Die Eltern-Kind-Initiative Maxhofkinder e.V. ist eine altersgemischte Einrichtung mit 40 Kindern. In zwei Gruppen betreuen wir üblicherweise bis zu drei Krippenkinder (2 bis 3 Jahre), 21 Kindergartenkinder (3 bis 6 Jahre) und 16 Hortkinder (1. bis 4. Klasse aus der Königswieser Grundschule)</p>
          <p>Für Kinder mit Behinderung oder von Behinderung bedrohte Kinder bieten wir zwei Einzelintegrationsplätze nach §§ 53, 54 SGB XII an. Hierbei arbeiten wir eng mit dem heilpädagogischen Fachdienst zusammen.</p>
        </div>
      </div>

      {/* <div className="card-gradient card-gradient-orange">
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
      </div> */}

      

      {/* ---- TEAM ---- */}
      <div className="card-gradient">
        <h1>Das Team</h1>
        <img src="img/team.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="flex flex-wrap justify-center gap-8 my-8 text-white">
          <div className="w-fit">
            {/* <img src="img/profile.jpg" alt="" className="rounded-full w-[80%] mx-auto shadow-md/25 shadow-[#000000]" /> */}
            <div className="w-full text-center">
              <h2>Daniela Wolfrum</h2>
              <p>Leitung Kindergarten</p>
              <p><a href="mailto:leitung@maxhofkinder.de">leitung@maxhofkinder.de</a></p>
            </div>
          </div>

          <div className="w-fit">
            {/* <img src="img/profile.jpg" alt="" className="rounded-full w-[80%] mx-auto shadow-md/25 shadow-[#000000]" /> */}
            <div className="w-full text-center">
              <h2>Alessandra Hauptmann</h2>
              <p>Leitung Hort</p>
              <p><a href="mailto:leitung@maxhofkinder.de">leitung@maxhofkinder.de</a></p>
            </div>
          </div>
        </div>
        <div className="cardText">
          <p>Zu unserem Team zählen wir zwei Erzieherinnen in der Leitungsposition (eine mit Schwerpunkt Kindergarten und eine mit Schwerpunkt Hortarbeit), eine Erzieherin und zwei pädagogische Ergänzungskräfte im Kindergarten sowie eine Erzieherin und eine Hilfskraft im Hortbereich. Unterstützt werden wir durch unsere Küchenkräfte.</p>
          <p>Zusätzlich wird das Team vom mobilen heilpädagogischen Fachdienst unterstützt. Dieser kommt einmal die Woche zur Förderung der Integrationskinder und steht für Fachfragen zur Verfügung.</p>
        </div>
      </div>

      {/* ---- VORSTAND ---- */}
      <div className="card-gradient">
        <h1>Verein & Vorstand</h1>
        <img src="img/kiga_1.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="cardText">
          <p>Die Eltern-Kind-Initiative „Maxhofkinder e.V.“ ist ein gemeinnütziger Verein, dem die Eltern der aktuell betreuten Kinder angehören. Die aktive Mitarbeit aller Eltern ist eine notwendige Voraussetzung für einen reibungslosen Ablauf und die erfolgreiche Arbeit der Einrichtung. Die Eltern übernehmen ehrenamtlich alle Verwaltungs- und Organisationsaufgaben.</p>
          <p>Die Eltern der betreuten Kinder sind Mitglieder des Vereins und wählen aus ihrer Mitte einen Vorstand, der aus drei Personen besteht. Der Vorstand vertritt den Verein nach außen, fungiert als Träger sowie Arbeitgeber und ist für Kontakte mit Ämtern und für die Finanzen zuständig.</p>
          <p>Auch zwischen Eltern und Team vermittelt, wenn nötig, der Vorstand.</p>
        </div>
      </div>

      {/* ---- KONTAKT ---- */}
      <div className="card-gradient">
        <h1>Kontakt</h1>
        <a href="https://maps.google.com/maps?ll=48.083614,11.485004&z=15&t=m&hl=de&gl=US&mapclient=embed&cid=10305119482219968423"><img src="img/map.jpg" alt="" className="object-cover h-64 w-full" /></a>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.4212158051123!2d11.482557551060475!3d48.08281376285081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dd972d5956165%3A0x8f032391f9adb7a7!2sMaxhof+Kinder!5e0!3m2!1sde!2sde!4v1497276151895"
          className="w-full h-64"
        ></iframe> */}
        <div className="cardText">
          <p className="text-center">
            <b>Maxhofkinder e. V.</b><br />
            Königswieser Str. 12 • 81475 München<br />
            Telefon: 089 - 7594647<br />
            Fax: 089 - 74442218<br />
            E-Mail: <a href="mailto:kontakt@maxhofkinder.de">Kontakt@maxhofkinder.de</a><br />
          </p>
          <p className="text-center">Haben Sie Fragen oder Interesse an unserer Einrichtung?</p>
          
        </div>
        <h4 className="text-2xl font-bold bg-white w-fit mx-auto rounded-full py-4 px-8 drop-shadow-md mt-4"><a href="mailto:kontakt@maxhofkinder.de">Schreiben Sie uns!</a></h4>
      </div>



    </div>

  );
}
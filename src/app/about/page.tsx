export default function About() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-16">

      {/* ---- DER VEREIN ---- */}
      <div className="card-gradient">
        <h1>Der Verein</h1>
        <img src="img/outside.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="cardText">
          <p>Die EKI Maxhofkinder e.V. ist eine altersgemischte Einrichtung von bis zu 40 Kindern. Die beiden Gruppen stellen sich üblicherweise wie folgt zusammen:</p>
          <p>Bis zu drei Krippenkinder (2 bis 3 Jahre), 20 Kindergartenkinder (3 bis 6 Jahre) und 15 Hortkinder (1. Bis 4. Klasse aus der Königswieser Grundschule)</p>
          <p>Außerdem bieten wir zwei Einzelintegrationsplätze für Kinder mit Behinderung oder von Behinderung bedrohte Kinder nach §§ 53, 54 SGB XII an. Eine enge Zusammenarbeit mit dem heilpädagogischen Fachdienst ist dabei eine Selbstverständlichkeit.</p>
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

      {/* ---- KONZEPTION ---- */}
      <div className="card-gradient">
        <h1>Konzeption</h1>
        <img src="img/free2.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="cardText">
          <p>Eine enge, authentische Zusammenarbeit mit den Eltern bildet die Basis unserer familiären Atmosphäre.
            Wir gehen auf individuelle Bedürfnisse der Eltern und Kinder ein und stehen beratend zur Verfügung.</p>
          <p>In einem vertrauensvollen und emphatischen Umfeld legen wir Wert auf individuelle Förderung nach dem Bayr. Bildungs- und Erziehungsplan. Wir leben nach dem situativen Ansatz und bieten in unseren liebevoll gestalteten Räumen und dem Außenbereich Platz für kreative Entfaltung, Ruhe und Bewegung.</p>
          <p className="text-center">Die ausführliche Konzeption unserer Einrichtung finden Sie hier:</p>
          <h4 className="mt-4 mb-8 text-2xl font-bold bg-white w-fit mx-auto text-[#ff6666] rounded-full py-4 px-8 drop-shadow-md">Konzeption</h4>
        </div>
      </div>

      {/* ---- TEAM ---- */}
      <div className="card-gradient">
        <h1>Das Team</h1>
        {/* <img src="img/free2.jpg" alt="" className="object-cover h-64 w-full" /> */}
        <div className="flex flex-wrap justify-center gap-8 my-8">
          <div className="w-fit">
            <img src="img/profile.jpg" alt="" className="rounded-full w-[80%] mx-auto shadow-md shadow-[#105366]" />
            <div className="w-full text-center">
              <h2>Daniela Wolfrum</h2>
              <p>Leitung Kindergarten</p>
              <p>leitung@maxhofkinder.de</p>
            </div>
          </div>

          <div className="w-fit">
            <img src="img/profile.jpg" alt="" className="rounded-full w-[80%] mx-auto shadow-md shadow-[#105366]" />
            <div className="w-full text-center">
              <h2>Alessandra Hauptmann</h2>
              <p>Leitung Hort</p>
              <p>leitung@maxhofkinder.de</p>
            </div>
          </div>
        </div>
        <div className="cardText">
          <p>Zu unserem hochmotivierten und engagierten Team zählen wir zwei Erzieherinnen in der Leitungsposition (eine mit Schwerpunkt Kindergarten und eine mit Schwerpunkt Hortarbeit), eine pädagogische Fachkraft sowie zwei Kinderpflegerinnen.</p>
          <p>Zusätzlich wird das Team vom mobilen heilpädagogischen Fachdienst unterstützt. Dieser kommt einmal die Woche zur Förderung des Integrationskindes und steht für Fachfragen zur Verfügung. Jede Kollegin darf sich in ihren persönlichen Schwerpunkten frei entfalten, setzt diese optimal im pädagogischen Alltag ein und bildet sich stets fort.</p>
          <p>Die Ausbildung neuer Kollegen/innen sehen wir als besondere Aufgabe. Aus diesem Grund bieten wir seit September 2016 eine Stelle zum Sozialpädagogischem Seminar an. Zudem ermöglichen wir interessierten Schülern/innen regelmäßig ein Praktikum in unserer Einrichtung.</p>
        </div>
      </div>

      {/* ---- VORSTAND ---- */}
      <div className="card-gradient">
        <h1>Vorstand</h1>
        <img src="img/free2.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="cardText">
          <p>Der Vorstand handelt stets im Auftrag des Vereins, muss dessen Ziele verfolgen und auf die Einhaltung der gesetzlichen Vorgaben achten. Er fungiert als Träger, Vereinsvertretung und Arbeitgeber. </p>
          <p>In der Regel wird er aus drei Mitgliedern der Mitgliederversammlung gestellt und gewählt. Sie dürfen sich auch mehrere Jahre in Folge aufstellen lassen. Die Eltern können sich mit ihren Anliegen, Fragen und Problemen jederzeit an den Vorstand wenden, persönlich, telefonisch oder per E-mail. Auch zwischen Eltern und Team vermittelt, wenn nötig, der Vorstand.</p>
        </div>
      </div>

      {/* ---- KONTAKT ---- */}
      <div className="card-gradient card-gradient-green">
        <h1>Kontakt</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.4212158051123!2d11.482557551060475!3d48.08281376285081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dd972d5956165%3A0x8f032391f9adb7a7!2sMaxhof+Kinder!5e0!3m2!1sde!2sde!4v1497276151895"
          className="w-full h-64"
        ></iframe>
        <div className="cardText">
          <p className="text-center">
            <b>Maxhofkinder e. V.</b><br />
            Königswieser Str. 12 • 81475 München<br />
            Telefon: 089 - 7594647<br />
            Fax: 089 - 74442218<br />
            E-Mail: Kontakt@maxhofkinder.de<br />
          </p>
          <p className="text-center">Haben Sie Fragen oder Interesse an unserer Einrichtung?</p>
          <h4 className="mt-8 text-2xl font-bold bg-white w-fit mx-auto text-[#92ca43] rounded-full py-4 px-8 drop-shadow-md">Schreiben Sie uns!</h4>
        </div>
      </div>



    </div>

  );
}
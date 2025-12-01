export default function Schedule() {
  return (

    <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-16">

      {/* ---- KONZEPTION ---- */}
      <div className="card-gradient xl:col-span-2 2xl:col-span-1">
        <h1>Konzeption</h1>
        <img src="/img/kiga_2.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="cardText">
          <p>Eine enge, authentische Zusammenarbeit mit den Eltern bildet die Basis unserer familiären Atmosphäre.
            Wir gehen auf individuelle Bedürfnisse der Eltern und Kinder ein und stehen beratend zur Verfügung.</p>
          <p>In einem vertrauensvollen und emphatischen Umfeld legen wir Wert auf individuelle Förderung nach dem Bayerischen Bildungs- und Erziehungsplan. Wir leben nach dem situativen Ansatz und bieten in unseren liebevoll gestalteten Räumen und dem Außenbereich Platz für kreative Entfaltung, Ruhe und Bewegung.</p>
          <p className="text-center">Die ausführliche Konzeption unserer Einrichtung findet ihr hier:</p>
        </div>
        {/* <h4 className="text-2xl font-bold bg-white w-fit mx-auto rounded-full py-4 px-8 drop-shadow-md"><a href="https://raw.githubusercontent.com/maxhofkinder/mhk-data/main/docs/Konzeption.pdf" target="_blank">Konzeption</a></h4> */}
        <h4 className="text-2xl font-bold bg-white w-fit mx-auto rounded-full py-4 px-8 drop-shadow-md"><a href="docs/Konzeption.pdf" target="_blank">Konzeption</a></h4>
      </div>

      {/* ---- TAGESABLAUF KIDERGARTEN ---- */}
      <div className="card-gradient">
        <h1>Tagesablauf Kindergarten</h1>
        <img src="/img/kiga_3.jpg" alt="" className="object-cover h-64 w-full" />

        <div className="cardText">
          {/* <h3>Unsere Öffnungszeiten sind Mo. - Fr. von 7:00 bis 15:30 Uhr.</h3>
          <p>Im Morgenkreis wird der Tagesablauf besprochen. Die Kinder haben hier die Möglichkeit Ihre Wünsche und Ideen zu äußern. Beobachtungen unsererseits werden mitgeteilt und dienen so als Impulsgeber für evtl. Projektarbeiten. Mit Hilfe von Symbolen erkennen die Kinder die einzelnen Aktionen und können so ihren Eltern vorlesen und berichten was sie gemacht haben.</p>
          <h3>Der Tagesablauf wird wie folgt gestaltet:</h3> */}

          {/* ---- TABLE ---- */}
          <div className="mx-auto w-fit grid grid-cols-[max-content_1fr] gap-x-8 gap-y-2 px-4 py-2">
            <p className="text-right text-lg font-medium whitespace-nowrap">07:00 - 07:30</p>
            <p className="text-lg text-left font-bold">Frühöffnung</p>

            <p className="text-right text-lg font-medium whitespace-nowrap">07:30 - 08:30</p>
            <div>
              <p className="text-lg text-left font-bold">Zeit zum Ankommen</p>
              <p className="font-light text-base text-left leading-tight">Gleitende Brotzeit bis 10 Uhr.</p>
            </div>

            <p className="text-right text-lg font-medium whitespace-nowrap">08:30 - 09:00</p>
            <div>
              <p className="text-lg text-left font-bold">Morgenkreis</p>
              <p className="font-light text-base text-left leading-tight"> • Begrüßung<br /> • Erzählrunde<br /> • Raum für Gespräche</p>
            </div>

            <p className="text-right text-lg font-medium whitespace-nowrap">09:00 - 10:30</p>
            <p className="text-lg text-left font-bold">Pädagogische Angebote und Freispielzeit</p>


            <p className="text-right text-lg font-medium whitespace-nowrap">10:30 - 11:30</p>
            <p className="text-lg text-left font-bold">Aufenthalt im Freien</p>


            <p className="text-right text-lg font-medium whitespace-nowrap">11:30 - 12:15</p>
            <p className="text-lg text-left font-bold">gemeinsames Mittagessen</p>


            <p className="text-right text-lg font-medium whitespace-nowrap">12:15 - 13:30</p>
            <div>
              <p className="text-lg text-left font-bold">Ruhezeit</p>
              <p className="font-light text-base leading-tight">• Leserunde <br />• Förderangebote am Tisch <br />• Mittagsschlaf für die Jüngeren</p>
            </div>

            <p className="text-right text-lg font-medium whitespace-nowrap">13:30 - 14:30</p>
            <p className="text-lg text-left font-bold">gemeinsame Brotzeit, Freispiel, flexible Angebote</p>

            <p className="text-right text-lg font-medium whitespace-nowrap">bis 15:00 / 15:30</p>
            <p className="text-lg text-left font-bold">Aufenthalt im Freien</p>
          </div>

          <p className="text-center font-bold">Von 08:30 Uhr bis 12.00 Uhr keine Bring- und Abholzeit</p>
        </div>
      </div>


      {/* ---- TAGESABLAUF HORT ---- */}
      <div className="card-gradient">
        <h1>Tagesablauf Hort</h1>
        <img src="/img/hort_1.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="cardText">
          {/* <p>Seit 2014 bieten wir 15 Schulkindern eine Betreuung im Hort. Da die Kinder die Räumlichkeiten und das Personal aus der Kindergartenzeit kennen, wird ihnen der Übergang so erleichtert. Der Hort wird von einer Erzieherin und einer Kinderpflegerin betreut.</p>
          <h3>Der Tagesablauf wird wie folgt gestaltet:</h3> */}

          {/* ---- TABLE ---- */}
          <div className="mx-auto w-fit grid grid-cols-[max-content_1fr] gap-x-8 gap-y-2 px-4 py-2">
            <p className="text-right text-lg font-medium whitespace-nowrap">11:30/12:15 - 12:45</p>
            <div>
              <p className="text-lg text-left font-bold">Aufenthalt im Freien (Nach Schulschluss)</p>
              <p className="font-light text-base leading-tight">Die Schulanfänger werden in den ersten Wochen von der Schule abgeholt. Schritt für Schritt wird der selbständige Weg zum Hort geübt und verlängert.</p>
            </div>

            <p className="text-right text-lg font-medium whitespace-nowrap">13:10 - 13:45</p>
            <p className="text-lg text-left font-bold">Gemeinsames Mittagessen</p>

            <p className="text-right text-lg font-medium whitespace-nowrap">13:45 - 15:00</p>
            <div>
              <p className="text-lg text-left font-bold">Hausaufgaben</p>
              <p className="font-light text-base leading-tight">Kreative Angebote, Projektarbeit.</p>
            </div>

            <p className="text-right text-lg font-medium whitespace-nowrap">14:45 - 15:30</p>
            <p className="text-lg text-left font-bold">Aufenthalt im Freien</p>
          </div>
          <p className="text-center font-bold">Von 13:45 Uhr bis 14:30 Uhr keine Bring- und Abholzeit</p>
        </div>
      </div>

    </div>

  );
}
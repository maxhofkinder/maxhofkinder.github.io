export default function Team() {
  return (
    <div className="space-y-8 my-8 text-center">
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-fit">
          <img src="/img/profile.jpg" alt="" className="rounded-full w-[80%] mx-auto shadow-md shadow-[#d7bea1]" />
          <div className="w-full text-center">
            <h2 className="text-[#00b0e2]">Ute Mustermann</h2>
            <p>Leitung Kindergarten</p>
          </div>
        </div>

        <div className="w-fit">
          <img src="/img/profile.jpg" alt="" className="rounded-full w-[80%] mx-auto shadow-md shadow-[#d7bea1]" />
          <div className="w-full text-center">
            <h2 className="text-[#92ca43]">Ute Mustermann</h2>
            <p>Leitung Hort</p>
          </div>
        </div>

        <div className="w-fit">
          <img src="/img/profile.jpg" alt="" className="rounded-full w-[80%] mx-auto shadow-md shadow-[#d7bea1]" />
          <div className="w-full text-center">
            <h2 className="text-[#ffaf40]">Ute Mustermann</h2>
            <p>Fachkraft</p>
          </div>
        </div>

        <div className="w-fit">
          <img src="/img/profile.jpg" alt="" className="rounded-full w-[80%] mx-auto shadow-md shadow-[#d7bea1]" />
          <div className="w-full text-center">
            <h2 className="text-[#bd66ff]">Ute Mustermann</h2>
            <p>Kinderpflegerin</p>
          </div>
        </div>

        <div className="w-fit">
          <img src="/img/profile.jpg" alt="" className="rounded-full w-[80%] mx-auto shadow-md shadow-[#d7bea1]" />
          <div className="w-full text-center">
            <h2 className="text-[#ff6666]">Ute Mustermann</h2>
            <p>Vorstand</p>
          </div>
        </div>

      </div>

      <div>
        <h1 className="text-[#ffaf40]">Das Team</h1>        
        <p className="text-lg max-w-[950px] mx-auto leading-snug">
          Zu unserem hochmotivierten und engagierten Team zählen wir zwei Erzieherinnen in der Leitungsposition (eine mit Schwerpunkt Kindergarten und eine mit Schwerpunkt Hortarbeit), eine pädagogische Fachkraft sowie zwei Kinderpflegerinnen.
          <br /><br />
          Zusätzlich wird das Team vom mobilen heilpädagogischen Fachdienst unterstützt. Dieser kommt einmal die Woche zur Förderung des Integrationskindes und steht für Fachfragen zur Verfügung. Jede Kollegin darf sich in ihren persönlichen Schwerpunkten frei entfalten, setzt diese optimal im pädagogischen Alltag ein und bildet sich stets fort.
          <br /><br />
          Die Ausbildung neuer Kollegen/innen sehen wir als besondere Aufgabe. Aus diesem Grund bieten wir seit September 2016 eine Stelle zum Sozialpädagogischem Seminar an. Zudem ermöglichen wir interessierten Schülern/innen regelmäßig ein Praktikum in unserer Einrichtung.
        </p>
      </div>
    </div>
  );
}
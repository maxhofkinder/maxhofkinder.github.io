export default function Official() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-16">

      {/* ---- Öffnungszeiten ---- */}
      <div className="card-gradient">
        <h1>Betreuungszeiten</h1>
        <img src="/img/yard_1.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="cardText">
          <p>Unsere Betreuungszeiten sind Montag bis Donnerstag von 7:00 bis 15:30 Uhr, am Freitag von 7:30 Uhr bis 15:30 Uhr.</p>
          <p>Die Abholzeit richtet sich nach der jeweiligen Buchungszeit. Wir empfehlen, die Kinder spätestens 15 Minuten vor dem Betreuungsende abzuholen, damit noch Zeit für eventuelle Tür- und Angelgespräche ist, die Kinder ihr Spiel in Ruhe zu Ende bringen und sie sich von ihren Freundinnen und Freunden verabschieden können.</p>
          <p>Unsere Einrichtung ist bis auf wenige Tage ganzjährig geöffnet. Um stets eine optimale pädagogische Qualität zu gewährleisten und zu sichern, finden Klausurtage zur Fortbildung unseres Teams statt, an denen die Einrichtung geschlossen bleibt. Diese Schließtage werden rechtzeitig bekannt gegeben.</p>
          <p>Die Betreuungszeiten der Schulkinder richten sich nach ihrem Stundenplan. Auf Wunsch ist eine Betreuung auch in den Schulferien, während der gesamten Betreuungszeiten, möglich.</p>
        </div>
      </div>

      {/* ---- Kosten ---- */}
      <div className="card-gradient">
        <h1>Kosten</h1>
        <img src="/img/hall_2.jpg" alt="" className="object-cover h-64 w-full" />
        <p className="text-sm text-black">Festsetzung der Elternentgelte ab 01.01.2025</p>
        <div className="mx-auto max-w-[600px] overflow-hidden shadow-md/25 shadow-[#000000]">
          <table className="table-auto w-full text-black">
            <thead>
              <tr className="bg-[#555555] text-white">
                <th className="px-2 py-2 text-sm md:text-base">Buchungszeit</th>
                <th className="px-2 py-2 text-sm md:text-base">Kleinkind<br /><span className="text-sm whitespace-nowrap">(&lt; 3 Jahre)</span></th>
                <th className="px-2 py-2 text-sm md:text-base">Kindergarten<br /><span className="text-sm whitespace-nowrap">(&gt; 3 Jahre)</span></th>
                <th className="px-2 py-2 text-sm md:text-base">Schulkind<br /><span className="text-sm whitespace-nowrap">(1.-4. Klasse)</span></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#d4d4d4]">
                <td className="border-x-0 border  px-4 py-2 whitespace-nowrap">2-3h</td>
                <td className="border-x-0 border px-4 py-2">-</td>
                <td className="border-x-0 border px-4 py-2">-</td>
                <td className="border-x-0 border px-4 py-2">107,00€</td>
              </tr>
              <tr className="bg-[#e0e0e0]">
                <td className="border-x-0 border  px-4 py-2 whitespace-nowrap">3-4h</td>
                <td className="border-x-0 border px-4 py-2">-</td>
                <td className="border-x-0 border px-4 py-2">-</td>
                <td className="border-x-0 border px-4 py-2">113,00€</td>
              </tr>
              <tr className="bg-[#d4d4d4]">
                <td className="border-x-0 border px-4 py-2 whitespace-nowrap">4-5h</td>
                <td className="border-x-0 border px-4 py-2">162,00€</td>
                <td className="border-x-0 border px-4 py-2">0,00€</td>
                <td className="border-x-0 border px-4 py-2">125,00€</td>
              </tr>
              <tr className="bg-[#e0e0e0]">
                <td className="border-x-0 border px-4 py-2 whitespace-nowrap">5-6h</td>
                <td className="border-x-0 border px-4 py-2">179,00€</td>
                <td className="border-x-0 border px-4 py-2">0,00€</td>
                <td className="border-x-0 border px-4 py-2">-</td>
              </tr>
              <tr className="bg-[#d4d4d4]">
                <td className="border-x-0 border px-4 py-2 whitespace-nowrap">6-7h</td>
                <td className="border-x-0 border px-4 py-2">196,00€</td>
                <td className="border-x-0 border px-4 py-2">0,00€</td>
                <td className="border-x-0 border px-4 py-2">-</td>
              </tr>
              <tr className="bg-[#e0e0e0]">
                <td className="border-x-0 border px-4 py-2 whitespace-nowrap">7-8h</td>
                <td className="border-x-0 border px-4 py-2">213,00€</td>
                <td className="border-x-0 border px-4 py-2">0,00€</td>
                <td className="border-x-0 border px-4 py-2">-</td>
              </tr>
              <tr className="bg-[#d4d4d4]">
                <td className="border-x-0  px-4 py-2 whitespace-nowrap">8-9h</td>
                <td className="border-x-0  px-4 py-2">230,00€</td>
                <td className="border-x-0  px-4 py-2">0,00€</td>
                <td className="border-x-0  px-4 py-2 rounded-br-xl">-</td>
              </tr>

            </tbody>
          </table>
        </div>
        <div className="cardText text-center!">
          <p>Unser Mittagessen wird von einem Caterer geliefert (<a href="http://www.kitakoch.de" target="_blank">www.kitakoch.de</a>).<br />
          Die Kosten pro Essen belaufen sich derzeit auf: <br />
            <b>Kindergarten:</b> 82,50 € im Monat (plus 5 € Brotzeitgeld)<br />
            <b>Schulkinder:</b> 87,50 € im Monat (plus 3 € Brotzeitgeld)</p>
        </div>

      </div>

{/* ---- Anmeldung ---- */}
      <div className="card-gradient">
        <h1>Anmeldung</h1>
        <img src="/img/entrance.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="cardText">
          <p>Da die Nachbelegung der offenen Plätze in Kindergarten und Hort mehrheitlich hausintern geregelt wird, werden die verbleibenden freien Plätze über externe Anmeldungen gefüllt. Nach einer Vorauswahl laden wir die Familien zu einem persönlichen Gespräch ein.</p>
          <p>Die Registrierung für unsere Warteliste erfolgt <b>ausschließlich über unser Anmeldeformular</b>. Im Falle einer Zusage nehmen wir Kontakt auf, im Falle einer Absage bleiben die Kinder automatisch auf unserer Warteliste. Eine persönliche Benachrichtigung gibt es darüber nicht.</p>
        </div>
         {/* <h4 className="text-2xl font-bold bg-white w-fit mx-auto rounded-full py-4 px-8 drop-shadow-md mt-4"><a href="https://raw.githubusercontent.com/maxhofkinder/mhk-data/main/docs/Voranmeldung_Maxhofkinder.pdf" target="_blank">Anmeldung</a></h4> */}
         <h4 className="text-2xl font-bold bg-white w-fit mx-auto rounded-full py-4 px-8 drop-shadow-md mt-4"><a href="/docs/Voranmeldung_Maxhofkinder.pdf" target="_blank">Anmeldung</a></h4>
      </div>
    </div>
  );
}
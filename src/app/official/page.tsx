export default function Official() {
  return (
    <div className="text-center space-y-8">
      <div>
        <h1 className="text-[#ffaf40]">Betreuungszeiten</h1>
        <p className="text-lg max-w-[900px] mx-auto leading-snug">
          Die Ab&shy;hol&shy;zeit richtet sich nach der je&shy;wei&shy;li&shy;gen Bu&shy;chungs&shy;zeit, je&shy;doch emp&shy;feh&shy;len wir spä&shy;tes&shy;tens 15:15 Uhr, da&shy;mit noch Zeit für even&shy;tu&shy;el&shy;le Tür- und An&shy;gel&shy;ge&shy;sprä&shy;che ist, die Kin&shy;der ihr Spiel in Ruhe zu Ende brin&shy;gen und sich von ihren Freun&shy;den ver&shy;ab&shy;schie&shy;den kön&shy;nen. Die Ein&shy;rich&shy;tung schließt um 15:30 Uhr.
          <br /><br />
          Unsere Einrichtung ist bis auf wenige Tage ganzjährig geöffnet. Um stets eine optimale pädagogische Qualität zu gewährleisten und zu sichern, finden Klausurtage zur Fortbildung unseres Teams statt, an denen die Einrichtung geschlossen bleibt. Diese werden rechtzeitig bekannt gegeben.
          <br /><br />
          Die Betreuungszeiten der Schulkinder richten sich nach ihrem Stundenplan. Auf Wunsch ist eine Betreuung auch in den Schulferien, während der gesamten Öffnungszeiten, möglich.
        </p>
      </div>

      <div>
        <h1 className="text-[#92ca43]">Kosten</h1>
        <p className="text-sm">Festsetzung der Elternentgelte ab 01.09.2024</p>
        <div className="mx-auto max-w-[600px] overflow-hidden rounded-lg border border-[#92ca43] drop-shadow-md drop-shadow-[#d7bea1]">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-[#92ca43] text-white">
                <th className="px-2 py-2 text-sm md:text-base">Buchungszeit</th>
                <th className="px-2 py-2 text-sm md:text-base">Kleinkind<br /><span className="text-sm whitespace-nowrap">(&lt; 3 Jahre)</span></th>
                <th className="px-2 py-2 text-sm md:text-base">Kindergarten<br /><span className="text-sm whitespace-nowrap">(&gt; 3 Jahre)</span></th>
                <th className="px-2 py-2 text-sm md:text-base">Schulkind<br /><span className="text-sm whitespace-nowrap">(1.-4. Klasse)</span></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#bbe77c]">
                <td className="border-x-0 border  px-4 py-2 whitespace-nowrap">3-4h</td>
                <td className="border-x-0 border px-4 py-2">-</td>
                <td className="border-x-0 border px-4 py-2">-</td>
                <td className="border-x-0 border px-4 py-2">113,00€</td>
              </tr>
              <tr className="bg-[#e3ffbb]">
                <td className="border-x-0 border px-4 py-2 whitespace-nowrap">4-5h</td>
                <td className="border-x-0 border px-4 py-2">162,00€</td>
                <td className="border-x-0 border px-4 py-2">0,00€</td>
                <td className="border-x-0 border px-4 py-2">125,00€</td>
              </tr>
              <tr className="bg-[#bbe77c]">
                <td className="border-x-0 border px-4 py-2 whitespace-nowrap">5-6h</td>
                <td className="border-x-0 border px-4 py-2">179,00€</td>
                <td className="border-x-0 border px-4 py-2">0,00€</td>
                <td className="border-x-0 border px-4 py-2">-</td>
              </tr>
              <tr className="bg-[#e3ffbb]">
                <td className="border-x-0 border px-4 py-2 whitespace-nowrap">6-7h</td>
                <td className="border-x-0 border px-4 py-2">196,00€</td>
                <td className="border-x-0 border px-4 py-2">0,00€</td>
                <td className="border-x-0 border px-4 py-2">-</td>
              </tr>
              <tr className="bg-[#bbe77c]">
                <td className="border-x-0 border px-4 py-2 whitespace-nowrap">7-8h</td>
                <td className="border-x-0 border px-4 py-2">213,00€</td>
                <td className="border-x-0 border px-4 py-2">0,00€</td>
                <td className="border-x-0 border px-4 py-2">-</td>
              </tr>
              <tr className="bg-[#e3ffbb]">
                <td className="border-x-0  px-4 py-2 whitespace-nowrap">8-9h</td>
                <td className="border-x-0  px-4 py-2">230,00€</td>
                <td className="border-x-0  px-4 py-2">0,00€</td>
                <td className="border-x-0  px-4 py-2 rounded-br-xl">-</td>
              </tr>

            </tbody>
          </table>
        </div>
        <p className="text-sm mt-2 max-w-[620px] mx-auto">
          Unsere Betreuungskosten richten sich nach den Buchungszeiten. Die Beiträge können durch Einkommensstaffelung und Geschwisterermäßigung reduziert werden. Der Verein kann zusätzliche Mitgliedsbeiträge erheben.
        </p>
      </div>

      <div>
        <h1 className="text-[#00b0e2]">Verpflegung</h1>
        <p className="text-lg leading-snug">
          Unser Mittagessen wird von einem Caterer geliefert (www.thann-catering.de).
          <br />
          Die Kosten pro Essen belaufen sich derzeit auf:
          <br />
          <b>Kindergarten:</b> 82,50 € im Monat (plus 5 € Brotzeitgeld)
          <br />
          <b>Schulkinder:</b> 87,50 € im Monat (plus 3 € Brotzeitgeld)
        </p>
      </div>
    </div>
  );
}
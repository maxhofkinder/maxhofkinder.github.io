export default function Schedule() {
  return (
    <div className="space-y-8 text-center">
      <div>
        <h1 className="text-[#ffaf40]">Der Tagesablauf</h1>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          <div>
            <div className="card-gradient card-gradient-green">
              <h1>Kindergarten/Krippe</h1>
              <img src="img/children.jpg" alt="" className="object-cover h-64 w-full" />

              <div className="cardText">
                <h3>Unsere Öffnungszeiten sind Mo. - Fr. von 7:00 bis 15:30 Uhr.</h3>
                <p>Im Morgenkreis wird der Tagesablauf besprochen. Die Kinder haben hier die Möglichkeit Ihre Wünsche und Ideen zu äußern. Beobachtungen unsererseits werden mitgeteilt und dienen so als Impulsgeber für evtl. Projektarbeiten. Mit Hilfe von Symbolen erkennen die Kinder die einzelnen Aktionen und können so ihren Eltern vorlesen und berichten was sie gemacht haben.</p>
                <h3>Der Tagesablauf wird wie folgt gestaltet:</h3>                
                <div className="mx-auto grid grid-cols-2 gap-x-8 gap-y-2 mt-2 -translate-x-5">
                  <p className="text-right text-lg font-medium whitespace-nowrap">7:00 - 8:00</p>
                  <p className="text-lg text-left font-bold">Frühöffnung</p>

                  <p className="text-right text-lg font-medium whitespace-nowrap">8:30 - ca 9:00</p>
                  <div>
                    <p className="text-lg text-left font-bold">Morgenkreis</p>
                    <p className="font-light text-base text-left leading-tight">Begrüßung, was passiert heute? <br />Wer möchte wo mitmachen?<br /> Wünsche und Ideen äußern.</p>
                  </div>

                  <p className="text-right text-lg font-medium whitespace-nowrap">Ab 9:00</p>
                  <div><p className="text-lg text-left font-bold">Kleingruppenarbeit</p>
                    <p className="font-light text-base text-left leading-tight">wie schulvorbereitende Förderung,<br /> Projektarbeit...</p></div>

                  <p className="text-right text-lg font-medium whitespace-nowrap">Bis ca. 10:30</p>
                  <div>
                  <p className="text-lg text-left font-bold">Freies Spiel</p>
                  <p className="font-light text-base leading-tight">in den Funktionsbereichen</p>
                  </div>

                  <p className="text-right text-lg font-medium whitespace-nowrap">10:30 - 11:30</p>
                  <div>
                    <p className="text-lg text-left font-bold">Aufenthalt im Freien</p>                  
                    <p className="font-light text-base leading-tight"> (Spielplätze, Innenhof, Garten, <br />Stadtteilerkundung)</p>
                  </div>
                  
                  <p className="text-right text-lg font-medium whitespace-nowrap">11:30 - 12:15</p>
                  <p className="text-lg text-left font-bold">Mittagessen</p>

                  
                  <p className="text-right text-lg font-medium whitespace-nowrap">12:15 - 13:30</p>
                  <div>
                  <p className="text-lg text-left font-bold">Ruhezeit</p>
                    <p className="font-light text-base leading-tight">Mittagsschlaf für die Kleinen, <br />Leserunde für die Größeren, <br />ruhiges Freispiel</p>
                  </div>

                  <p className="text-right text-lg font-medium whitespace-nowrap">13:30 - 14:00</p>
                  <p className="text-lg text-left font-bold">Nachmittagskreis</p>

                  <p className="text-right text-lg font-medium whitespace-nowrap">14:00 - 14:30</p>
                  <p className="text-lg text-left font-bold">Brotzeit</p>

                  <p className="text-right text-lg font-medium whitespace-nowrap">14:30 - 15:30</p>
                  <p className="text-lg text-left font-bold">Wir sind im Innenhof bzw. Garten / Abholzeit</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-gradient card-gradient-blue">
            <h1>Hort</h1>
            <img src="img/hort.jpg" alt="" className="object-cover h-64 w-full" />
            <div className="cardText">
              <p>Seit 2014 bieten wir 15 Schulkindern eine Betreuung im Hort. Da die Kinder die Räumlichkeiten und das Personal aus der Kindergartenzeit kennen, wird ihnen der Übergang so erleichtert. Der Hort wird von einer Erzieherin und einer Kinderpflegerin betreut.</p>              
              <h3>Der Tagesablauf wird wie folgt gestaltet:</h3>              
              <div className="mx-auto grid grid-cols-2 gap-x-8 px-4 gap-y-2 mt-2 -translate-x-5">
                <p className="text-right text-lg font-medium whitespace-nowrap">11:30/12:15 - 12:45</p>
                <div>
                <p className="text-lg text-left font-bold">Schulschluss - Aufenthalt im Freien</p>
                  <p className="font-light text-base leading-tight">(auf dem Schulhof) Die Kinder werden vom Schulhaus abgeholt.</p>
                </div>

                <p className="text-right text-lg font-medium whitespace-nowrap">12:45 - 13:30</p>
                <div>
                <p className="text-lg text-left font-bold">Mittagessen</p>
                  <p className="font-light text-base leading-tight">Die Kinder, die um 13:00 Uhr Schulschluss haben, kommen selbstständig in die Einrichtung. Freispiel.</p>
                </div>
                <p className="text-right text-lg font-medium whitespace-nowrap">Ab 13:30</p>
                <div>
                <p className="text-lg text-left font-bold">Hausaufgaben und Freispielzeit</p>
                  <p className="font-light text-base leading-tight">(je nach Bedarf); In Rücksprache mit den Eltern dürfen die Kinder alleine nach Hause gehen.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default function Contact() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-16 my-16">

      <div className="card-gradient card-gradient-orange">
        <h1>Anmeldung</h1>
        <img src="img/parents2.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="cardText">
          <p>Über die Voranmeldung können Sie ihr Kind bei uns anmelden.
            Sobald wir einen Platz in Aussicht haben melden wir uns bei Ihnen.</p>
          <h4 className="mt-8 text-2xl font-bold bg-white w-fit mx-auto text-[#ffaf40] rounded-full py-4 px-8 drop-shadow-md">Voranmeldung</h4>
        </div>
      </div>

      <div className="card-gradient card-gradient-green">
        <h1>Lage</h1>
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
        </p>
        <p>Haben Sie Fragen oder Interesse an unserer Einrichtung?</p>
        <h4 className="mt-8 text-2xl font-bold bg-white w-fit mx-auto text-[#92ca43] rounded-full py-4 px-8 drop-shadow-md">Schreiben Sie uns!</h4>
        </div>
      </div>

      <div className="card-gradient card-gradient-blue">
        <h1>Stellenanzeigen</h1>
        <img src="img/carrer.jpg" alt="" className="object-cover h-64 w-full" />
        <div className="cardText">
        <p>Momentan sind wir auf der Suche nach folgenden Positionen:</p>
        <h4 className="mt-8 text-2xl font-bold bg-white w-fit mx-auto text-[#00b0e2] rounded-full py-4 px-8 drop-shadow-md">Erzieher*in</h4>
        </div>
      </div>

    </div>
  );
}
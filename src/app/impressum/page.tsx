export default function Impressum() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-black!">Impressum</h1>
      <p className="text-lg">
        Angaben gemäß § 5 TMG:
Maxhofkinder e. V.
Königswieser Str. 12
81475 München
      </p>
      <h2 className="text-3xl font-bold">Vertreten durch Vorstand</h2>
      <ul>
        <li>Nina Schumann</li>
        <li>Sabine Adelwarth</li>
        <li>Karina Werberger</li>
      </ul>

      <h2 className="text-3xl font-bold">Kontakt</h2>
      <p className="text-lg">
        E-Mail: kontakt@maxhofkinder.de
      </p>

    <h2 className="text-3xl font-bold">Registereintrag</h2>
      <p className="text-lg">
        Eintragung im Vereinsregister.
Registergericht: München
Registernummer: VR13389
      </p>

      <h2 className="text-3xl font-bold">Aufsichtsbehörde</h2>
      <p className="text-lg">
        Landeshauptstadt München
Referat für Bildung und Sport
Abteilung KITA
      </p>

      <h2 className="text-3xl font-bold">Haftungsausschluss</h2>
      <p className="text-lg">
        ...
      </p>

      {/* Add legal details */}
    </div>
  );
}
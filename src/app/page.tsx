export default function Home() {
  return (
    <div className="space-y-8">
      {/* <h1 className="text-4xl font-bold">Die Maxhofkinder</h1> */}
      <img src="img/logo.png" alt="" className="mx-auto w-1/4 mt-8" />
      <div className="w-fit mx-auto">
        <p className="text-3xl sm:text-4xl text-center font-bold w-fit text-[#f39535]">
          „Reggio ist kein Modell, <span className="whitespace-nowrap">sondern eine neue</span> <span className="whitespace-nowrap">Art des Denkens über Kinder,</span>
          <br /><span className="text-[#52b155]">über Erziehung, über den <span className="whitespace-nowrap">Kindergarten und seine</span>  <span className="whitespace-nowrap">Beziehung zur Gesellschaft.</span></span>
          <br /><span className="text-[#00b0e2]">Es ist eine Denkweise, <span className="whitespace-nowrap">die nicht gelernt,</span> <span className="whitespace-nowrap">aber die gefunden werden kann.“</span></span>
        </p>
        <p className="text-center italic font-light w-full mt-2">(Aus der Reggio-Pädagogik)</p>
        <p className="text-lg text-center font-medium mt-4">
          Seit September 2017 eine, als Reggio-Inspiriert anerkannte, Einrichtung für Kinder von 2 bis 10 Jahren.
        </p>
      </div>

      {/* Add more content for your landing page */}
    </div>
  );
}


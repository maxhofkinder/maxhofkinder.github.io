import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 w-full">
      <div className='flex flex-col lg:flex-row justify-center gap-x-16 w-[80%] mx-auto  items-center'>
        <div className=''>
        <img className='' src="img/logo-foerderung.png" alt="" />
      </div>
      
      <div className="flex flex-row flex-wrap lg:flex-col justify-center py-5 gap-x-4">
        <p className=''>Tel: 089 7594647 </p>
        <p className='whitespace-nowrap'>E-Mail: kontakt@maxhofkinder.de</p>
        <p className=''>© {new Date().getFullYear()} Maxhofkinder e.V.</p>
        <Link href="/impressum" className="hover:underline">Impressum</Link>
      </div>

      </div>
      
      {/* <div className="flex justify-center py-5">
        <Link href="/about" className="px-3 hover:underline">Über uns</Link>
        <Link href="/team" className="px-3 hover:underline">Team</Link>
        <Link href="/parents" className="px-3 hover:underline">Kinder & Eltern</Link>
        <Link href="/schedule" className="px-3 hover:underline">Tagesablauf</Link>
        <Link href="/official" className="px-3 hover:underline">Zeiten & Kosten</Link>
        <Link href="/contact" className="px-3 hover:underline">Kontakt</Link>
        <Link href="/impressum" className="px-3 hover:underline">Impressum</Link>
      </div> */}
    </footer>
  );
}


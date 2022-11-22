import { GiElectric } from 'react-icons/gi';
import Link from 'next/link';

export default function SidenavHeader() {
  return (
    <div className="bg-body flex h-20 items-center justify-center mb-6 sticky top-0 z-10">
        <GiElectric size = '1.5rem' color='#fff' />
        <Link href = '/'>
          <a className='text-white font-bold'>Utility Meter Dashboard</a>
        </Link>

    </div>
  );
}

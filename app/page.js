import Link from 'next/link';
export default function Page() {
  return (
    <main>
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
       Go to <Link href="/week-2" target="_blank"> Week-2 </Link>{'->'}
       Go to <Link href="/week-3" target="_blank">Week-3</Link>{'->'}
       Go to <Link href="/week-4" target="_blank">Week-4</Link>{'->'}
       Go to <Link href="/week-5" target="_blank">Week-5</Link>{'->'}
       Go to <Link href="/week-6" target="_blank">Week-6</Link>{'->'}
       Go to <Link href="/week-7" target="_blank">Week-7</Link>{'->'}
       Go to <Link href="/week-8" target="_blank">Week-8</Link>{'->'}
       Go to <Link href="/week-9" target="_blank">Week-9</Link>
      </main>
  );
}
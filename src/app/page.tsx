import QuoteCard from '@/components/QuoteCard';
import { ModeToggle } from '@/components/ui/mode-toggle';

async function getQuote() {
  const res = await fetch('https://zenquotes.io/api/random', {
    cache: 'no-store', // avoid caching
  });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const quote = await getQuote();

  return (
    <main className="font-[family-name:var(--font-geist-sans)] flex items-center justify-center min-h-screen">
      <div className="hidden">
        <ModeToggle />
      </div>
      <QuoteCard q={quote[0].q} a={quote[0].a} />
    </main>
  );
}

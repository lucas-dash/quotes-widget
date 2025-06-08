type QuoteCardProps = {
  q: string;
  a: string;
};

export default function QuoteCard({ q, a }: QuoteCardProps) {
  return (
    <div className="max-w-[300px] min-h-[200px] border-2 border-muted rounded-3xl p-5 flex items-center justify-center flex-col gap-5 font-serif">
      <p className="text-xl font-medium text-center">{q}</p>
      <p className="font-bold">{a}</p>
    </div>
  );
}

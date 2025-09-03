import { Shuffle, Link2 } from 'lucide-react';
import { useCallback, useEffect, useState, ReactElement } from 'react';
import { toast } from 'sonner';
import { Chip, Spinner } from '../components';
import { useGetQuote } from './hooks';
import { type Quote } from './types';

const Quote = (): ReactElement => {
  const { data, isLoading } = useGetQuote();
  const [quote, setQuote] = useState<Quote | null>(null);

  const handleRandomQuote = useCallback((): void => {
    const randomIndex = Math.floor(Math.random() * (data?.length ?? 0));
    setQuote(data?.[randomIndex] ?? null);
  }, [data]);

  useEffect(() => {
    handleRandomQuote();
  }, [data, handleRandomQuote]);

  const handleCopyQuote = (): void => {
    navigator.clipboard.writeText(`"${quote?.quote}". ${quote?.author}`);
    toast.success('Quote copied to clipboard');
  };

  return (
    <div className="grid content-center justify-center h-screen bg-gray-900 gap-10">
      {isLoading || !quote ? (
        <Spinner />
      ) : (
        <>
          <div
            className="grid items-center justify-items-center gap-4 max-w-[475px] min-w-[300px] rounded-lg bg-[#20293a] px-8 py-6 bg-no-repeat bg-bottom
             max-[768px]:max-w-[250px] max-[768px]:min-w-0 random-quote-background"
          >
            <div className="flex flex-col gap-4 items-center">
              <span className="text-xl font-medium">{quote?.author}</span>
              <div className="flex gap-2">
                {quote?.tags?.map((tag: string) => <Chip key={tag}>{tag}</Chip>)}
              </div>
              <span className="text-lg font-medium opacity-60 text-center">{quote?.quote}</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <button
              className="bg-gray-800 rounded-lg p-2 hover:bg-gray-700 "
              onClick={handleRandomQuote}
            >
              <Shuffle className="w-6 h-6" />
            </button>
            <button
              className="bg-gray-800 rounded-lg p-2 hover:bg-gray-700 "
              onClick={handleCopyQuote}
            >
              <Link2 className="w-6 h-6" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quote;

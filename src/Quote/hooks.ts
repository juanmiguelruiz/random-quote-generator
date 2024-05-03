import { useQuery } from '@tanstack/react-query';

export async function getQuotes() {
  const response = await fetch('https://api.quotable.io/random');
  return response.json();
}

export const useGetQuote = () =>
  useQuery({
    queryKey: ['quote'],
    queryFn: getQuotes,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

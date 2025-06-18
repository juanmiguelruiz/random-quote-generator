import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Quote } from './types';

export async function getQuotes(): Promise<Quote[]> {
  const response = await fetch(
    'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json'
  );
  return response.json();
}

export const useGetQuote = (): UseQueryResult<Quote[], Error> =>
  useQuery({
    queryKey: ['quote'],
    queryFn: getQuotes,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

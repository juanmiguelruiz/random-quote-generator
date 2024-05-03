import { renderHook, waitFor } from '@testing-library/react';
import { useGetQuote } from './hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
const queryClient = new QueryClient();

const wrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useGetQuote', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  ) as jest.Mock;

  it('should return quote data correctly', async () => {
    const { result } = renderHook(() => useGetQuote(), {
      wrapper,
    });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.data).not.toBeUndefined();
  });
});

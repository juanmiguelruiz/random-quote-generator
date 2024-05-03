import React from 'react';
import ReactDOM from 'react-dom/client';
import Quote from './Quote/index.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Quote />
    </QueryClientProvider>
  </React.StrictMode>
);

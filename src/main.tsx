import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';
import Quote from './Quote';
import './styles.css';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <React.StrictMode>
    <Toaster />
    <QueryClientProvider client={queryClient}>
      <Quote />
    </QueryClientProvider>
  </React.StrictMode>
);

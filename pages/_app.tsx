import React from 'react';
import useRemoveServerSideJss from '@/hooks/useRemoveServerSideJss';
import { CssBaseline } from '@material-ui/core';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const DeApp = ({ Component, pageProps }: AppProps) => {
  useRemoveServerSideJss();

  // Default react client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : (
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <Component {...pageProps} />
        </QueryClientProvider>
      )}
    </div>
  );
};

export default DeApp;

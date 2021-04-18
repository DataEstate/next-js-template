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
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default DeApp;

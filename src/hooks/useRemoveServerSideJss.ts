import { useEffect } from 'react';

/**
 * Hook to remove JSS from the server side
 */
const useRemoveServerSideJss = () => {
  useEffect(() => {
    // Remove the server-side injected CSS to avoid Class Name conflicts
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
};

export default useRemoveServerSideJss;

import 'styles/globals.scss';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { midnightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import Layout from 'components/Layout';
import { bscTestnet } from 'chains';
import WagmiProvider from './WagmiProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const { chains } = configureChains([bscTestnet], [publicProvider()]);

  return (
    <WagmiProvider>
      <RainbowKitProvider
        chains={chains}
        theme={midnightTheme({
          accentColor: '#10b981'
        })}
        coolMode
        modalSize="compact">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiProvider>
  );
};

export default MyApp;

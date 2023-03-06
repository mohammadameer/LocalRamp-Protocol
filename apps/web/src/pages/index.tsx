import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';

const Home: NextPage = () => {
  const router = useRouter();
  const { isConnected } = useAccount();

  return (
    <>
      <Head>
        <title>Real Protocol - Home Page</title>
        <meta name="description" content="Real Protocol: easy kyc " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex min-h-screen flex-col items-center justify-between ">
        <div className="flex w-full grow flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-between gap-8">
            <p className="text-6xl font-bold">One-Time KYC for all Dapps</p>

            <div className="items-center">
              {isConnected ? (
                <div>
                  <button
                    type="button"
                    className="cursor-pointer rounded-2xl bg-emerald-500 p-4 py-2 text-xl text-white hover:scale-105 active:scale-95"
                    onClick={() => router.push('/verify')}>
                    Verify your identity
                  </button>
                </div>
              ) : (
                <ConnectButton />
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white p-10">
      <div className="fixed top-0 left-0 z-20 flex w-full items-center justify-between p-10">
        <button
          type="button"
          className="cursor-pointer text-4xl text-emerald-500 hover:scale-105 active:scale-95"
          onClick={() => router.push('/')}>
          Real Protocol
        </button>

        <p className="flex items-center gap-8">
          <button
            type="button"
            className="cursor-pointer text-xl text-emerald-500 hover:scale-105 active:scale-95"
            onClick={() => router.push('/docs')}>
            Docs
          </button>
          <ConnectButton showBalance />
        </p>
      </div>
      <div className="flex w-full grow flex-col items-center justify-center">{children}</div>
    </div>
  );
};
export default Layout;

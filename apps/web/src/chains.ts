import { Chain } from 'wagmi';

export const bscTestnet: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
  rpcUrls: {
    default: "'https://data-seed-prebsc-1-s1.binance.org:8545'",
    public: "'https://data-seed-prebsc-1-s1.binance.org:8545'"
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: 'https://testnet.bscscan.com/'
    },
    default: {
      name: 'Etherscan',
      url: 'https://testnet.bscscan.com/'
    }
  },
  testnet: true
};

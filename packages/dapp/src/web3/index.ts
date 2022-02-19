interface chainMap {
    chainId: string;
    chainName: string;
}

export const CHAIN_MAP: Array<chainMap> = [
  {
    chainId: '0x1',
    chainName: "Ethereum Main"
  },
  {
    chainId: '0x38',
    chainName: "Binance SC Main"
  },
  {
    chainId: '0x61',
    chainName: "Binance SC Test"
  },
  {
    chainId: '0x89',
    chainName: "Polygon Main"
  },
  {
    chainId: `0x${Number(1337).toString(16)}`,
    chainName: "localhost"
  }
]

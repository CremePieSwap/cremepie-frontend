import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  // {
  //   pid: 0,
  //   lpSymbol: 'CAKE',
  //   lpAddresses: {
  //     97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //     137: '',
  //   },
  //   token: tokens.syrup,
  //   quoteToken: tokens.wbnb,
  // },
  {
    pid: 0,
    lpSymbol: 'CPIE',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      137: '0xfad70FD116559914240faB82b0078c4E82a6a1B8',
    },
    token: tokens.syrup,
    quoteToken: tokens.wmatic,
  },
  // {
  //   pid: 251,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
  //     56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
  //     137: '',
  //   },
  //   token: tokens.cake,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 252,
  //   lpSymbol: 'BUSD-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  //     137: '',
  //   },
  //   token: tokens.busd,
  //   quoteToken: tokens.wbnb,
  // },
  {
    pid: 1,
    lpSymbol: 'CPIE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      137: '0x8DE0068ceA36C0bD1B10034f28Ba680C94a0954A',
    },
    token: tokens.cpie,
    quoteToken: tokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'CPIE-USDC LP',
    lpAddresses: {
      97: '',
      137: '0xa562Cf4e4AD052ef9798524Db77f73b50EaACDbE',
    },
    token: tokens.cpie,
    quoteToken: tokens.usdc,
  },
  {
    pid: 3,
    lpSymbol: 'CPIE-MATIC LP',
    lpAddresses: {
      97: '',
      137: '0xAB1cBbD4c563E230f3114A456A56fd51B8cf8ffE',
    },
    token: tokens.cpie,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 4,
    lpSymbol: 'USDC-MATIC LP',
    lpAddresses: {
      97: '',
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827',
    },
    token: tokens.usdc,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 7,
    lpSymbol: 'MATIC-USDT LP',
    lpAddresses: {
      97: '',
      137: '0x0B23bd7D56160272049C6b33e2d4D575B6bE46ae',
    },
    token: tokens.usdt,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 8,
    lpSymbol: 'WETH-USDC LP',
    lpAddresses: {
      97: '',
      137: '0xac0ed4cceb1ae6c507b9925ac05dcfe8692ff8c0',
    },
    token: tokens.eth,
    quoteToken: tokens.usdc,
  },
  {
    pid: 9,
    lpSymbol: 'MATIC-WETH LP',
    lpAddresses: {
      97: '',
      137: '0x8cf24da57eb6f5881c13b14aeb48c49df6b034a6',
    },
    token: tokens.wmatic,
    quoteToken: tokens.eth,
  },
  {
    pid: 10,
    lpSymbol: 'MATIC-USDC LP',
    lpAddresses: {
      97: '',
      137: '0x29a92b95be45d5bdd638b749798f0fee107fdbc7',
    },
    token: tokens.wmatic,
    quoteToken: tokens.usdc,
  },
  {
    pid: 11,
    lpSymbol: 'CPIE-WETH LP',
    lpAddresses: {
      97: '',
      137: '0xfd1b6a2d94c1705d514095230e71455e15d28b07',
    },
    token: tokens.cpie,
    quoteToken: tokens.eth,
  },
  {
    pid: 13,
    lpSymbol: 'MATIC-DAI LP',
    lpAddresses: {
      97: '',
      137: '0xa623b447a71ec4ee16eb2a46958f412c930594e1',
    },
    token: tokens.wmatic,
    quoteToken: tokens.dai,
  },
  {
    pid: 14,
    lpSymbol: 'USDC-USDT LP',
    lpAddresses: {
      97: '',
      137: '0x1542ac4a9cb9b969f6c3ee25e9da64254aa273dd',
    },
    token: tokens.usdc,
    quoteToken: tokens.usdt,
  },
  {
    pid: 15,
    lpSymbol: 'WETH-USDT LP',
    lpAddresses: {
      97: '',
      137: '0x6cffbeff35848f48ef69f4649e0a3efab138b9cc',
    },
    token: tokens.eth,
    quoteToken: tokens.usdt,
  },
  {
    pid: 16,
    lpSymbol: 'WBTC-WETH LP',
    lpAddresses: {
      97: '',
      137: '0xb4c6b4b89624a6e204e799d5bf5b5d06eeb52979',
    },
    token: tokens.wbtc,
    quoteToken: tokens.eth,
  },
  // pool only get price
  {
    pid: 17,
    lpSymbol: 'QUOKK-USDC LP',
    lpAddresses: {
      97: '',
      137: '0xbf79de8d42555256ff27fbb8baa9d1e311cc67a7',
    },
    token: tokens.quokk,
    quoteToken: tokens.usdc,
  },
  // pool only get price
  {
    pid: 19,
    lpSymbol: 'NALIS-USDT LP',
    lpAddresses: {
      97: '',
      137: '0xff50a77412997fc86e78178a4b47000b9225ffd9',
    },
    token: tokens.nalis,
    quoteToken: tokens.usdt,
  },
]

export default farms

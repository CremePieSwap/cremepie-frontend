import tokens from './tokens'
import { FarmConfig } from './types'

const priceHelperLps: FarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absense of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  {
    pid: null,
    lpSymbol: 'USDC-MATIC LP',
    lpAddresses: {
      97: '',
      56: '0x7b3ae32eE8C532016f3E31C8941D937c59e055B9',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      // 137: '0x3e49d885166893b6050b4BA5c63217342c9e5237',
    },
    token: tokens.wmatic,
    quoteToken: tokens.usdc,
  },
]

export default priceHelperLps

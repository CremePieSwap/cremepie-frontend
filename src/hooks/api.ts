import { useEffect, useState } from 'react'
import { getCpieUsdtLPContract } from 'utils/contractHelpers'
/* eslint-disable camelcase */
export interface DeBankTvlResponse {
  id: string
  chain: string
  name: string
  site_url: string
  logo_url: string
  has_supported_portfolio: boolean
  tvl: number
}

// export const useGetStats = () => {
//   const [data, setData] = useState<DeBankTvlResponse | null>(null)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://openapi.debank.com/v1/protocol?id=bsc_pancakeswap')
//         const responseData: DeBankTvlResponse = await response.json()

//         setData(responseData)
//       } catch (error) {
//         console.error('Unable to fetch data:', error)
//       }
//     }

//     fetchData()
//   }, [setData])

//   return data
// }

const getLiquidity = async (constract: any) => {
  const reserves = await constract.getReserves()
  return reserves
}


export const useGetStats = () => {
  // const web3_provider = useWeb3React().library
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    // const CPIE_USDT_LP = '0x8DE0068ceA36C0bD1B10034f28Ba680C94a0954A'
    // const CPIE_USDC_LP = '0xa562Cf4e4AD052ef9798524Db77f73b50EaACDbE'
    // const CPIE_MATIC_LP = '0xAB1cBbD4c563E230f3114A456A56fd51B8cf8ffE'
    const CPIE_USDT_LP_contract = getCpieUsdtLPContract()
    getLiquidity(CPIE_USDT_LP_contract)
    .then((res) => {
      const liquidity = res._reserve0.mul(2)
      setData(liquidity)
    })
    .catch(err => {
      console.error(err);
    }) 
    // const contract_CPIE_USDT_LP = new web3.eth.Contract(CremePiePairABI, CPIE_USDT_LP)
    // console.error('contract_CPIE_USDT_LP', contract_CPIE_USDT_LP);
  }, [setData])

  return data
}

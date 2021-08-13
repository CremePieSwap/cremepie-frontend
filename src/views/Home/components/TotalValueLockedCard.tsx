/* eslint-disable */
import React, {useEffect, useState, useMemo} from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Card, CardBody, Heading, Skeleton, Text } from '@cremepie/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import { useFarms, usePools, useFetchPublicPoolsData, usePollFarmsData, useFetchCakeVault } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'

const TotalValueLockedCard = () => {
  usePollFarmsData()
  useFetchCakeVault()
  useFetchPublicPoolsData()

  const { data: farmsLP } = useFarms()
  const [ tvle, setTVLE ] = useState(Number(0))

  const { account } = useWeb3React()
  const { pools: poolsWithoutAutoVault } = usePools(account)

  const pools = useMemo(() => {
    const cakePool = poolsWithoutAutoVault.find((pool) => pool.sousId === 0)
    const cakeAutoVault = { ...cakePool, isAutoVault: true }
    return [cakeAutoVault, ...poolsWithoutAutoVault]
  }, [poolsWithoutAutoVault])

  useEffect(() => {
    let liquidity: Array<String> = []
    if (farmsLP) {
      farmsLP.forEach((farm) => {
        if (farm) {
          if (farm.pid !== 0) {
            const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteToken.busdPrice)
            liquidity.push(totalLiquidity.toFixed(0))
          }
        }
      })
    }
    let total : number = 0;
    liquidity.forEach((e) => {
      total += Number(e)
    })
    const totalStakeDollar = getBalanceNumber(pools[0].totalStaked.multipliedBy(pools[0].earningTokenPrice), pools[0].stakingToken.decimals).toFixed(0)
    setTVLE(total + Number(totalStakeDollar))
  }, [farmsLP])

  const { t } = useTranslation()
  const tvl = tvle.toLocaleString('en-US')
  return (
    <Block className="type-4">
      <Subtitle4>Total Value Locked (TVL)</Subtitle4>
      {tvle ? (
        <>
          <Title4>{`$${tvl}`}</Title4>
        </>
      ) : (
        <Skeleton height={45} />
      )}
      <Description4>Across all LPs and Cream Pool</Description4>
    </Block>
  )
}

export default TotalValueLockedCard

const Block = styled.div`
  width: 350px;
  padding: 20px 30px;
  box-shadow: 1px 1px 1px rgba(23, 18, 43, 0.1);
  border-radius: 15px;
  text-align: left;
  position: relative;
  &.type-4{
    margin-bottom: 30px;
    background: #FFFFFF;
  }

  @media (max-width: 500px) {
    width: 100%;
    &.type-4{
      margin-bottom: 20px;
    }
  }
`
const Title4 = styled.div`
  font-size: 32px;
  line-height: 40px;
  font-family: SFPro900;  
  color: #A9A9A9;
  @media (max-width: 330px) {
    font-size: 25px;
  }
`
const Subtitle4 = styled.div`
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  color: #A9A9A9;
  @media (max-width: 330px) {
    font-size: 20px;
  }
`
const Description4 = styled.div`
  font-size: 14px;
  line-height: 40px;
  font-weight: 400;
  color: #A9A9A9;
`
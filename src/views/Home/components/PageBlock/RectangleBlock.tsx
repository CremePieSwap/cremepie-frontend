
import React, { useMemo, useState, useEffect } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { useAppDispatch } from 'state'
import max from 'lodash/max'
import { useFarms, usePriceCakeBusd } from 'state/hooks'
import { getFarmApr } from 'utils/apr'
import { fetchFarmsPublicDataAsync, nonArchivedFarms } from 'state/farms'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { Skeleton } from '@cremepie/uikit'

const Block = styled.div`
  width: 350px;
  padding: 20px 30px;
  box-shadow: 1px 1px 1px rgba(23, 18, 43, 0.1);
  border-radius: 15px;
  text-align: left;
  position: relative;
  &.type-1 {
    background: linear-gradient(247.99deg, rgba(80, 227, 194, 0.5) 0%, rgba(255, 245, 133, 0.5) 49.23%, rgba(227, 80, 122, 0.5) 98.46%);;
    backdrop-filter: blur(5px);
  }
  &.type-2 {
    background: #FFFFFF;
  }
  &.type-3 {
    background: linear-gradient(247.99deg, #FAE8BA 0%, #50E3C2 98.46%);
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    .icon-bg {
      position: absolute;
      right: 8px;
      top: 8px;
    }
    .icon-bg-mobile {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  &.type-4, &.type-5 {
    margin-bottom: 30px;
    background: #FFFFFF;
  }

  @media (max-width: 500px) {
    width: 100%;
    &.type-3, &.type-4, &.type-5 {
      margin-bottom: 20px;
    }
  }
`
const Subtitle = styled.div<{ color: string }>`
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  color: ${({ color }) => color};
`
const Title = styled.div<{ color: string }>`
  font-size: 24px;
  line-height: 23px;
  font-family: SFPro900;
  color: ${({ color }) => color};
`
const Title3 = styled.div`
  font-size: 36px;
  line-height: 40px;
  font-family: SFPro900;
  color: #5B5A99;
  .highlight {
    color: #E3507A;
    font-family: SFPro900;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
  @media (max-width: 400px) {
    font-size: 27px;
  }
  @media (max-width: 330px) {
    font-size: 22px;
  }
`

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    padding: 20px 0 0;
  };
`
const Button = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-family: SFPro500;
  color: #fff;
  background: #E3507A;
  border-radius: 32px;
  padding: 0 45px;
  cursor: pointer;
  height: 30px;
  box-shadow: 3px 3px 5px rgba(138, 172, 172, 0.5), -3px -3px 5px rgba(255, 255, 255, 0.5);
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
const Title5 = styled.div`
  font-size: 32px;
  line-height: 40px;
  font-family: SFPro900;
  color: #50E3C2;
`
const Subtitle5 = styled.div`
  font-size: 14px;
  line-height: 23px;
  font-weight: 400;
  color: #A9A9A9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// const CalcHighestAPR = () => {
//   const polygonChainId = 137
//   const { data: farmsLP } = useFarms()
//   const cakePrice = usePriceCakeBusd()
//   const highestApr = useMemo(() => {
//     if (cakePrice.gt(0)) {
//       const aprs = farmsLP.map((farm) => {
//         // Filter inactive farms, because their theoretical APR is super high. In practice, it's 0.
//         if (farm.pid !== 0 && farm.multiplier !== '0X' && farm.lpTotalInQuoteToken && farm.quoteToken.busdPrice) {
//           console.error('here');

//           const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteToken.busdPrice)
//           const { cakeRewardsApr, lpRewardsApr } = getFarmApr(
//             new BigNumber(farm.poolWeight),
//             cakePrice,
//             totalLiquidity,
//             farm.lpAddresses[polygonChainId],
//           )
//           return cakeRewardsApr + lpRewardsApr
//         }
//         return null
//       })

//       const maxApr = max(aprs)
//       return maxApr?.toLocaleString('en-US', { maximumFractionDigits: 2 })
//     }
//     return null
//   }, [cakePrice, farmsLP])

//   return highestApr
// }
interface RectangleBlockProps {
  type: number,
  titleColor: string,
  subtitleColor: string,
}

export default function RectangleBlock({
  type,
  titleColor,
  subtitleColor,
}: RectangleBlockProps) {
  const isMobile = window.innerWidth < 500
  const [isFetchingFarmData, setIsFetchingFarmData] = useState(true)
  const { data: farmsLP } = useFarms()
  const cakePrice = usePriceCakeBusd()
  const dispatch = useAppDispatch()
  const { observerRef, isIntersecting } = useIntersectionObserver()

  const polygonChainId = 137
  // Fetch farm data once to get the max APR
  useEffect(() => {
    const fetchFarmData = async () => {
      try {
        await dispatch(fetchFarmsPublicDataAsync(nonArchivedFarms.map((nonArchivedFarm) => nonArchivedFarm.pid)))
      } finally {
        setIsFetchingFarmData(false)
      }
    }

    if (isIntersecting) {
      fetchFarmData()
    }
  }, [dispatch, setIsFetchingFarmData, isIntersecting])

  const highestApr = useMemo(() => {
    if (cakePrice.gt(0)) {
      const aprs = farmsLP.map((farm) => {
        // Filter inactive farms, because their theoretical APR is super high. In practice, it's 0.
        if (farm.pid !== 0 && farm.multiplier !== '0X' && farm.lpTotalInQuoteToken && farm.quoteToken.busdPrice) {
          const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteToken.busdPrice)
          const { cakeRewardsApr, lpRewardsApr } = getFarmApr(
            new BigNumber(farm.poolWeight),
            cakePrice,
            totalLiquidity,
            farm.lpAddresses[polygonChainId],
          )
          return cakeRewardsApr + lpRewardsApr
        }
        return null
      })

      const maxApr = max(aprs)
      return maxApr?.toLocaleString('en-US', { maximumFractionDigits: 2 })
    }
    return null
  }, [cakePrice, farmsLP])


  switch (type) {
    case 1:
      return (
        <Block className={`type-${type}`}>
          <Subtitle color={subtitleColor}>
            Earn
          </Subtitle>
          <Title color={titleColor}>
            CPIE, 100xCoin, LZ...
          </Title>
          <Subtitle color={subtitleColor}>
            In Pools
          </Subtitle>
        </Block>
      )
    case 2:
      return (
        <Block className={`type-${type}`}>
          <Subtitle color={subtitleColor}>
            Earn up to
          </Subtitle>
          <Title color={titleColor}>
            {highestApr && !isFetchingFarmData ? (
              `${highestApr}%`
            ) : (
              <>
                <Skeleton animation="pulse" variant="rect" height="44px" />
                <div ref={observerRef} />
              </>
            )}
          </Title>
          <Subtitle color={subtitleColor}>
            APR in Farms
          </Subtitle>
        </Block>
      )
    case 3:
      return (
        <Block className={`type-${type}`}>
          {
            isMobile ?
              <img className='icon-bg-mobile' src='/images/how_to_buy_bg_mobile.svg' alt="" /> :
              <img className='icon-bg' src='/images/how_to_buy_bg.svg' alt="" />
          }
          <div style={{ display: 'block' }}>
            <Title3>How to Buy <span className="highlight">$CPIE</span></Title3>
            <Title3>with <span className="highlight">CremePieSwap</span></Title3>
            <ButtonRow>
              <Button>
                <a
                  href="https://docs.cremepieswap.finance/instructions/how-to-trade-cpie-on-cremepieswap"
                  target="_blank"
                  rel="noreferrer"
                >
                  Discover
                </a>
              </Button>
            </ButtonRow>
          </div>
        </Block>
      )
    case 4:
      return (
        <Block className={`type-${type}`}>
          <Subtitle4>Total Value Locked (TVL)</Subtitle4>
          <Title4>$1,306,969</Title4>
          <Description4>Across all LPs and Cream Pool</Description4>
        </Block>
      )
    case 5:
      return (
        <Block className={`type-${type}`}>
          <Title5>CPIE Stats</Title5>
          <Subtitle5>
            <div>Total CPIE Supply</div>
            <div>50,000,000,000</div>
          </Subtitle5>
          <Subtitle5>
            <div>Total CPIE Burned</div>
            <div>0</div>
          </Subtitle5>
          <Subtitle5>
            <div>New CPIE per block</div>
            <div>2000</div>
          </Subtitle5>
        </Block>
      )
    default:
      return (
        <Block className={`type-${type}`}>
          <Subtitle color={subtitleColor}>
            {type === 1 ? 'Earn' : 'Earn up to'}
          </Subtitle>
          <Title color={titleColor}>
            {type === 1 ? 'CPIE, 100xCoin, LZ...' : highestApr}
          </Title>
          <Subtitle color={subtitleColor}>
            {type === 1 ? 'In Pools' : 'APR in Farms'}
          </Subtitle>
        </Block>
      )
  }
}

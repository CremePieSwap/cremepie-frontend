import React from 'react'
import styled from 'styled-components'
import orderBy from 'lodash/orderBy'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from '@cremepie/uikit'
import { NavLink } from 'react-router-dom'
import pools from 'config/constants/pools'
import { Pool } from 'state/types'
import { useTranslation } from 'contexts/Localization'

const activeNonCakePools = pools.filter((pool) => !pool.isFinished && !pool.earningToken.symbol.includes('CAKE'))
const latestPools: Pool[] = orderBy(activeNonCakePools, ['sortOrder', 'pid'], ['desc', 'desc']).slice(0, 3)
// Always include CAKE
const assets = ['CAKE', ...latestPools.map((pool) => pool.earningToken.symbol)].join(', ')

const EarnAssetCard = () => {
  const { t } = useTranslation()
  const assetText = t('Earn %assets% in Pools', { assets })
  const [earn, InPools] = assetText.split(assets)

  return (
    <Block className='type-1'>
      <NavLink exact activeClassName="active" to="/syrup" id="pool-cta">
        <Subtitle color="#5B5A99">
          Earn
        </Subtitle>
        <Title color='#FFFFFF'>
          CPIE, 100xCoin, LZ...
        </Title>
        <Subtitle color="#5B5A99">
          In Pools
          <ArrowForwardIcon mt={30} color="text" style={{float: 'right'}} />
        </Subtitle>
      </NavLink>
    </Block>
  )
}

export default EarnAssetCard

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

  @media (max-width: 500px) {
    width: 100%;
  }
`
const Subtitle = styled.div<{ color: string }>`
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  color: ${({ color }) => color};
`
const Title = styled.div<{ color: string }>`
  font-size: 28px;
  line-height: 23px;
  font-family: SFPro900;
  color: ${({ color }) => color};
`
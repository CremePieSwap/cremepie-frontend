import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@cremepie/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import HowToBuyCard from 'views/Home/components/HowToBuyCard'
import PredictionPromotionCard from 'views/Home/components/PredictionPromotionCard'
import LotteryPromotionCard from 'views/Home/components/LotteryPromotionCard'
import LotteryBanner from 'views/Home/components/LotteryBanner'
import useFetchLotteryForPromos from 'views/Home/hooks/useFetchLotteryForPromos'

import PageTitle from './components/PageTitle'

const Home: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Page>
        <PageTitle />
        <StylePageBlock>
          <BlockContainer>
            <BlockRow>
              <FarmStakingCard />
              <RightBlock>
                <EarnAssetCard />
                <EarnAPRCard />
              </RightBlock>
            </BlockRow>
            <BlockRow>
              <HowToBuyCard />
            </BlockRow>
            <BlockRow>
              <TotalValueLockedCard />
              <CakeStats />
            </BlockRow>
          </BlockContainer>
        </StylePageBlock>
      </Page>
    </>
  )
}

export default Home

const StylePageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
`

const BlockContainer = styled.div`
  width: 730px;
  @media (max-width: 720px) {
    width: 100%;
  }
`

const BlockRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    display: block;
    width: 100%;
    margin: 0 auto 20px;
  };
`

const RightBlock = styled.div`
  display: grid;
  grid-auto-rows: auto;
  gap: 20px;
  margin-bottom: 30px;
  @media (max-width: 500px) {
    gap: 20px;
    margin-bottom: 20px;
  };
`
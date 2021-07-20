import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@cremepie/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  // const tvl = data ? data.tvl.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null
  // const tvl = data ? data : null

  return (
    // <StyledTotalValueLockedCard>
    //   <CardBody>
    //     <Heading scale="lg" mb="24px">
    //       {t('Total Value Locked (TVL)')}
    //     </Heading>
    //     {data ? (
    //       <>
    //         <Heading scale="xl">{`$${data}`}</Heading>
    //         <Text color="textSubtle">{t('Across all LPs and Syrup Pools')}</Text>
    //       </>
    //     ) : (
    //       <Skeleton height={66} />
    //     )}
    //   </CardBody>
    // </StyledTotalValueLockedCard>
    <Block className="type-4">
      <Subtitle4>Total Value Locked (TVL)</Subtitle4>
      <Title4>$1,306,969</Title4>
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
import React from 'react'
import { Card, CardBody, Heading, Text } from '@cremepie/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    // <StyledCakeStats>
    //   <CardBody>
    //     <Heading scale="xl" mb="24px">
    //       {t('Cake Stats')}
    //     </Heading>
    //     <Row>
    //       <Text fontSize="14px">{t('Total CAKE Supply')}</Text>
    //       {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
    //     </Row>
    //     <Row>
    //       <Text fontSize="14px">{t('Total CAKE Burned')}</Text>
    //       <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
    //     </Row>
    //     <Row>
    //       <Text fontSize="14px">{t('New CAKE/block')}</Text>
    //       <CardValue fontSize="14px" decimals={0} value={19} />
    //     </Row>
    //   </CardBody>
    // </StyledCakeStats>
    <Block className='type-5'>
      <Title5>CPIE Stats</Title5>
      <Subtitle5>
        <div>Total CPIE Supply</div>
        <div>50,000,000,000</div>
      </Subtitle5>
      <Subtitle5>
        <div>Total CPIE Burned</div>
        <div>158,179,858</div>
      </Subtitle5>
      <Subtitle5>
        <div>New CPIE per block</div>
        <div>2000</div>
      </Subtitle5>
    </Block>
  )
}

export default CakeStats

const Block = styled.div`
  width: 350px;
  padding: 20px 30px;
  box-shadow: 1px 1px 1px rgba(23, 18, 43, 0.1);
  border-radius: 15px;
  text-align: left;
  position: relative;
  &.type-5 {
    margin-bottom: 30px;
    background: #FFFFFF;
  }

  @media (max-width: 500px) {
    width: 100%;
    &.type-5 {
      margin-bottom: 20px;
    }
  }
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
import React from 'react'
import { Text } from '@cremepie/uikit'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { FarmWithBalance } from 'views/Home/hooks/useFarmsWithBalance'
import { usePriceCakeBusd } from 'state/hooks'
import styled from 'styled-components'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const Block = styled.div`
`

interface CakeHarvestBalanceProps {
  farmsWithBalance: FarmWithBalance[]
}

const CakeHarvestBalance: React.FC<CakeHarvestBalanceProps> = ({ farmsWithBalance }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const earningsSum = farmsWithBalance.reduce((accum, earning) => {
    const earningNumber = new BigNumber(earning.balance)
    if (earningNumber.eq(0)) {
      return accum
    }
    return accum + earningNumber.div(DEFAULT_TOKEN_DECIMAL).toNumber()
  }, 0)
  const cakePriceBusd = usePriceCakeBusd()
  const earningsBusd = new BigNumber(earningsSum).multipliedBy(cakePriceBusd).toNumber()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '76px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <Block>
      <CardValue value={earningsSum} lineHeight="1.5" fontSize="30px" color="#50E3C2" fontFamily='SFPro900' />
      {cakePriceBusd.gt(0) && <CardBusdValue value={earningsBusd} lineHeight="16px" fontSize="14px" color="#5B5A99" fontFamily='SFPro500'/>}
    </Block>
  )
}

export default CakeHarvestBalance

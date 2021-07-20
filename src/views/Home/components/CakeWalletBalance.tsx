import React from 'react'
import { Text } from '@cremepie/uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceCakeBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const CakeWalletBalance = () => {
  const { t } = useTranslation()
  const { balance: cakeBalance } = useTokenBalance(getCakeAddress())
  const cakePriceBusd = usePriceCakeBusd()
  const busdBalance = new BigNumber(getBalanceNumber(cakeBalance)).multipliedBy(cakePriceBusd).toNumber()
  const { account } = useWeb3React()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '54px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={getBalanceNumber(cakeBalance)} decimals={4} lineHeight="1.5" fontSize="30px" color="#50E3C2" fontFamily='SFPro900' />
      {cakePriceBusd.gt(0) ? <CardBusdValue value={busdBalance} lineHeight="16px" fontSize="14px" color="#5B5A99" fontFamily='SFPro500'/> : <br />}
    </>
  )
}

export default CakeWalletBalance

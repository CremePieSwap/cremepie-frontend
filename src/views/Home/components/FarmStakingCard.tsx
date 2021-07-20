import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@cremepie/uikit'
import { harvestFarm } from 'utils/calls'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useFarmsWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import { useMasterchef } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const { toastError } = useToast()
  const farmsWithBalance = useFarmsWithBalance()
  const masterChefContract = useMasterchef()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.gt(0))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of balancesWithValue) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvestFarm(masterChefContract, farmWithBalance.pid)
      } catch (error) {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      }
    }
    setPendingTx(false)
  }, [balancesWithValue, masterChefContract, toastError, t])

  return (
    <Block>
      <BlockTitle>Farms & Staking</BlockTitle>
      <img src='/images/mini_creme_pie.svg' alt="Mini pie" />
      <BlockContent>
        <Label>CPIE To Harvest</Label>
        <CakeHarvestBalance farmsWithBalance={balancesWithValue} />
      </BlockContent>
      <BlockContent style={{ margin: '20px 0' }}>
        <Label>CPIE In Wallet</Label>
        <CakeWalletBalance />
      </BlockContent>
      {account ? (
        <Button
          id="harvest-all"
          disabled={balancesWithValue.length <= 0 || pendingTx}
          onClick={harvestAllFarms}
          width="100%"
        >
          {pendingTx
            ? t('Collecting')
            : t('Harvest all (%count%)', {
                count: balancesWithValue.length,
              })}
        </Button>
      ) : (
        <UnlockButton width="100%" />
      )}
      <PieBackground>
        <img src='/images/background_pie.svg' alt="pie" />
      </PieBackground>
    </Block>
  )
}
export default FarmedStakingCard

const Block = styled.div`
  width: 350px;
  padding: 20px 30px;
  background: #FFFFFF;
  box-shadow: 1px 1px 1px rgba(23, 18, 43, 0.1);
  backdrop-filter: blur(3px);
  border-radius: 15px;
  text-align: left;
  position: relative;
  height: 100%;
  margin-bottom: 30px;
  @media (max-width: 500px) {
    margin: 0 auto 20px;
    width: 100%;
  };
`
const BlockTitle = styled.div`
  font-size: 30px;
  line-height: 40px;
  font-weight: 600;
  color: #50E3C2;
  margin-bottom: 10px;
`
const BlockContent = styled.div`
`
const Label = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #50E3C2;
`
const PieBackground = styled.div`
  position: absolute;
  bottom: 45px;
  right: 0;
  opacity: 0.2;
`


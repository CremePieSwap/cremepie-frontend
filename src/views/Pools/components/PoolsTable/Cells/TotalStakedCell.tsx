import React, { useMemo } from 'react'
import { Flex, Skeleton, Text } from '@cremepie/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'
import Balance from 'components/Balance'
import { Pool } from 'state/types'
import { useCakeVault } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import BaseCell, { CellContent } from './BaseCell'

interface TotalStakedCellProps {
  pool: Pool
}

const StyledCell = styled(BaseCell)`
  flex: 2 0 100px;
`

const TotalStakedCell: React.FC<TotalStakedCellProps> = ({ pool }) => {
  const { t } = useTranslation()
  const { sousId, stakingToken, totalStaked, isAutoVault, stakingTokenPrice } = pool
  const { totalCakeInVault } = useCakeVault()

  const isManualCakePool = sousId === 0

  const totalStakedBalance = useMemo(() => {
    if (isAutoVault) {
      return getBalanceNumber(totalCakeInVault, stakingToken.decimals)
    }
    if (isManualCakePool) {
      const manualCakeTotalMinusAutoVault = new BigNumber(totalStaked).minus(totalCakeInVault)
      return getBalanceNumber(manualCakeTotalMinusAutoVault, stakingToken.decimals)
    }
    return getBalanceNumber(totalStaked, stakingToken.decimals)
  }, [isAutoVault, totalCakeInVault, isManualCakePool, totalStaked, stakingToken.decimals])

  const totalStakedNumber = getBalanceNumber(totalStaked, stakingToken.decimals)
  const totalStakeDollar = getBalanceNumber(totalStaked.multipliedBy(stakingTokenPrice), stakingToken.decimals)
  return (
    <StyledCell role="cell">
      <CellContent>
        <Text fontSize="12px" color="text" textAlign="left">
          {t('Total staked')}
        </Text>
        {totalStaked && totalStaked.gte(0) ? (
          <div style={{margin: '4px 0'}}>
            <Balance fontSize="16px" value={totalStakedNumber} decimals={0} unit={` ${stakingToken.symbol}`} />
            {stakingTokenPrice > 0 && (
              <Balance
                display="inline"
                fontSize="12px"
                color="textSubtle"
                decimals={2}
                prefix="~"
                value={totalStakeDollar}
                unit=" USD"
              />
            )}
          </div>
        ) : (
          <Skeleton width="80px" height="16px" />
        )}
      </CellContent>
    </StyledCell>
  )
}

export default TotalStakedCell

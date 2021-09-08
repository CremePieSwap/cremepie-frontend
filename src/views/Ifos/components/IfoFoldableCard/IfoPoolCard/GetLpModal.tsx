import React from 'react'
import { Modal, ModalBody, Text, Image, Button, Link, OpenNewIcon } from '@cremepie/uikit'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import { Token } from 'config/constants/types'
import { useTranslation } from 'contexts/Localization'

interface Props {
  currency: Token
  onDismiss?: () => void
}

const GetLpModal: React.FC<Partial<Props>> = ({ currency, onDismiss }) => {
  const { t } = useTranslation()
  return (
    <Modal title={t('LP Tokens required')} onDismiss={onDismiss}>
      <ModalBody maxWidth="288px">
        <Image
          src={`/images/${currency.symbol.split(' ')[0].toLocaleLowerCase()}.png`}
          width={50}
          height={50}
          margin="auto"
          mb="24px"
        />
        <Text mb="16px">{t('You’ll need CAKE-BNB LP tokens to participate in the IFO!')}</Text>
        <Text mb="24px">{t('Get LP tokens, or make sure your tokens aren’t staked somewhere else.')}</Text>
        <Button
          as={Link}
          external
          href={`${BASE_ADD_LIQUIDITY_URL}/0xfad70FD116559914240faB82b0078c4E82a6a1B8/0xc2132D05D31c914a87C6611C10748AEb04B58e8F`}
          endIcon={<OpenNewIcon color="white" />}
          minWidth="100%" // Bypass the width="fit-content" on Links
        >
          {t('Get LP tokens')}
        </Button>
      </ModalBody>
    </Modal>
  )
}

export default GetLpModal

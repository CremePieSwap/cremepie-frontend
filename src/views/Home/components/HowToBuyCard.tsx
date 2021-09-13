import React from 'react'
import styled from 'styled-components'
import orderBy from 'lodash/orderBy'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from '@cremepie/uikit'
import { NavLink } from 'react-router-dom'
import pools from 'config/constants/pools'
import { Pool } from 'state/types'
import { useTranslation } from 'contexts/Localization'

const HowToBuyCard = () => {
  const isMobile = window.innerWidth < 500
  return (
    <Block className='type-3'>
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
                href="https://docs.cremepieswapfinance.com/instructions/how-to-trade-cpie-on-cremepieswap"
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
}

export default HowToBuyCard

const Block = styled.div`
  width: 350px;
  padding: 20px 30px;
  box-shadow: 1px 1px 1px rgba(23, 18, 43, 0.1);
  border-radius: 15px;
  text-align: left;
  position: relative;
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

  @media (max-width: 500px) {
    width: 100%;
    &.type-3{
      margin-bottom: 20px;
    }
  }
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
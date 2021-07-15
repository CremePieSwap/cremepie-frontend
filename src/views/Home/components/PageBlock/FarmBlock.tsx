import React from 'react'
import styled from 'styled-components'

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
const Subtitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #50E3C2;
`
const Title = styled.div`
  font-size: 30px;
  line-height: 40px;
  font-family: SFPro900;
  color: #50E3C2;
  font-family: SFPro900;
`
const Subtitle2 = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #5B5A99;
`
const BlockButton = styled.div`
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  font-weight: 600;
  color: #FFFFFF;
  height: 30px;
  background-color: #50E3C2;
  box-shadow: 1px 1px 0px rgba(170, 170, 204, 0.5);
  border-radius: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
const PieBackground = styled.div`
  position: absolute;
  bottom: 45px;
  right: 0;
  opacity: 0.2;
`

export default function FarmBlock() {

  return (
    <Block>
      <BlockTitle>Farms & Staking</BlockTitle>
      <img src='/images/mini_creme_pie.svg' alt="Mini pie" />
      <BlockContent>
        <Subtitle>CPIE To Harvest</Subtitle>
        <Title>0.0000</Title>
        <Subtitle2>~$0.00</Subtitle2>
      </BlockContent>
      <BlockContent style={{ margin: '20px 0' }}>
        <Subtitle>CPIE In Wallet</Subtitle>
        <Title>0.0000</Title>
        <Subtitle2>~$0.00</Subtitle2>
      </BlockContent>
      <BlockButton>
        Harvest All
      </BlockButton>
      <PieBackground>
        <img src='/images/background_pie.svg' alt="pie" />
      </PieBackground>
    </Block>
  )
}

import React from 'react'
import styled from 'styled-components'
import FarmBlock from './FarmBlock'
import RectangleBlock from './RectangleBlock'

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


export default function PageBlock() {
  return (
    <StylePageBlock>
      <BlockContainer>
        <BlockRow>
          <FarmBlock />
          <RightBlock>
            <RectangleBlock 
              type={1}
              titleColor="#FFFFFF" 
              subtitleColor="#5B5A99"
            />
            <RectangleBlock 
              type={2}
              titleColor="#50E3C2" 
              subtitleColor="#F397B7"
            />
          </RightBlock>
        </BlockRow>
        <BlockRow>
          <RectangleBlock 
            type={3}
            titleColor="#DADADA" 
            subtitleColor="#50E3C2"
          />
        </BlockRow>
        <BlockRow>
          <RectangleBlock 
            type={4}
            titleColor="#A9A9A9" 
            subtitleColor="#50E3C2"
          />
          <RectangleBlock 
            type={5}
            titleColor="#DADADA" 
            subtitleColor="#50E3C2"
          />
        </BlockRow>
      </BlockContainer>
    </StylePageBlock>
  )
}

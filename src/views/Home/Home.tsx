import React from 'react'
import styled from 'styled-components'
import PageTitle from './components/PageTitle'
import PageBlock from './components/PageBlock'

const StyleHome = styled.div`
  width: 100%;
  text-align: center;
  background: url(/images/main_bg.svg) no-repeat;
  background-size: cover;
  padding-top: 50px;
  @media (max-width: 960px) {
    padding-top: 20px;
  }
  @media (max-width: 500px) {
    padding: 20px 20px 0;
  }
`

const Home: React.FC = () => {
  return (
    <StyleHome>
      <PageTitle/>
      <PageBlock/>
    </StyleHome>
  )
}

export default Home

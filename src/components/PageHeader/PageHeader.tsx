import React from 'react'
import styled from 'styled-components'
import { Box } from '@cremepie/uikit'
import Container from '../Layout/Container'

const Outer = styled(Box)<{ background?: string }>`
  // background: ${({ theme, background }) => background || theme.colors.gradients.bubblegum};
  background: linear-gradient(247.99deg, #50E3C2 0%, #6F6C99 98.46%);
  backdrop-filter: blur(0.3px);
`

const Inner = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
`

const PageHeader: React.FC<{ background?: string }> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader

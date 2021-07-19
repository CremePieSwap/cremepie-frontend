import styled from 'styled-components'

export const ActionContainer = styled.div`
  padding: 16px;
  border-radius: 16px;
  flex-grow: 1;
  flex-basis: 0;
  &.harvest {
    border: 1px solid #59588D;
    padding: 16px 30px;
    @media (max-width: 500px) {
      padding: 10px 20px;
    }
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 0;
    max-height: 100px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-left: 48px;
    margin-right: 0;
    margin-bottom: 0;
    max-height: 100px;
  }
`

export const ActionTitles = styled.div`
  display: flex;
`

export const ActionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Earned = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 500px) {
    max-width: 140px;
  }
`

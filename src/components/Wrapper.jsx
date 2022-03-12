import React from 'react'
import styled from 'styled-components'

export const Wrapper = ({ children, largeWidth }) => {
  return <WrapperContainer largeWidth={largeWidth}>{children}</WrapperContainer>
}
const WrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: ${({ largeWidth }) => largeWidth && `${largeWidth}%`};
  }
`

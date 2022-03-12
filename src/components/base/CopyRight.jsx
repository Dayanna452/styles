import React from 'react'
import styled from 'styled-components'

export const CopyRight = () => {
  return (
    <CopyRightContainer>
      <h2>Rights all reserved</h2>
      <Media>
        <Buttons>
          <button>button 1</button>
          <button>button 2</button>
          <button>button 3</button>
          <button>button 4</button>
        </Buttons>
        <Social>
          <i>1</i>
          <i>2</i>
          <i>3</i>
          <i>4</i>
          <i>5</i>
        </Social>
      </Media>
    </CopyRightContainer>
  )
}
const CopyRightContainer = styled.div`
  background-color: yellowgreen;
  display: flex;
  justify-content: space-between;
`

const Media = styled.div`
  display: flex;
`

const Buttons = styled.div`
  display: flex;
`

const Social = styled.div`
  display: flex;
`

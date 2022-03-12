import React from 'react'
import styled from 'styled-components'
import { CopyRight } from './base/CopyRight'
import { Form } from './base/Form'
import { Wrapper } from './Wrapper'

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Wrapper largeWidth={30}>
          <h2>links</h2>
          <ButtonList>
            <button>button 1</button>
            <button>button 2</button>
            <button>button 3</button>
            <button>button 4</button>
          </ButtonList>
        </Wrapper>
        <Wrapper largeWidth={15}>
          <h2>links</h2>
          <ButtonList>
            <button>button 1</button>
            <button>button 2</button>
            <button>button 3</button>
            <button>button 4</button>
          </ButtonList>
        </Wrapper>
        <Wrapper largeWidth={15}>
          <h2>links</h2>
          <ButtonList>
            <button>button 1</button>
            <button>button 2</button>
            <button>button 3</button>
            <button>button 4</button>
          </ButtonList>
        </Wrapper>
        <Wrapper largeWidth={40}>
          <Form />
        </Wrapper>
      </FooterContainer>
      <CopyRight />
    </>
  )
}
const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: red;
`

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: beige;
`

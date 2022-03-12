import { Footer } from '../components/Footer'
import styled from 'styled-components'

export default function Home () {
  return (
    <HomeContainer>
      <Footer />
    </HomeContainer>
  )
}
const HomeContainer = styled.div`
  padding: 50px;
`

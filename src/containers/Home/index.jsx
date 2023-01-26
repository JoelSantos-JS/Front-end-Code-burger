import React from 'react'
import HomeLogo from '../../assets/logohome.svg'
import CategoryCarrosel from '../../components/CategoryCarrosel'
import OffersCarousel from '../../components/OffersCarousel'
import { HomeContainer, HomeImg } from './style'

function Home() {
  return (
    <HomeContainer>
        <HomeImg src={HomeLogo} alt="logo da home" />
            <CategoryCarrosel/>
            <OffersCarousel/>
            </HomeContainer>
  )
}

export default Home
import React from 'react'
import { HeroUI, HeroBGBlur, HeroTitle, HeroButton } from './HeroStyles'

const Hero = () => {
  return (
    <HeroUI>
        <HeroBGBlur>
                <HeroTitle>#musiquita analógica para toda la vida</HeroTitle>
                <HeroButton>CHUSMEAR</HeroButton>
        </HeroBGBlur>
    </HeroUI>
  )
}

export default Hero
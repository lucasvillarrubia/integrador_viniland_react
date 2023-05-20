import React from 'react';
import { Button, TextSpan } from '../globalComponents/GlobalComponents';
import {
  HeroImage,
  // HeroParagraph,
  HeroSection,
  HeroSlogan,
  HeroTextContainer,
  HeroTitle,
} from './HeroStyles';

const Hero = () => {
  return (
    <>
      <HeroSection>
        <HeroSlogan>
          <HeroTextContainer>
            <HeroTitle>
              <TextSpan size='200px' color='var(--marron)'>Viniland</TextSpan>
            </HeroTitle>
          </HeroTextContainer>
          <Button>Ver Más</Button>
        </HeroSlogan>
        <HeroImage src='./images/hero.png' alt='Logo react' />
      </HeroSection>
    </>
  );
};

export default Hero;

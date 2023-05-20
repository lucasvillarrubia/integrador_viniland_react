import React from 'react';
import shortid from 'shortid';
import { speakers } from '../../data/data';
import { Button, SectionTitle } from '../globalComponents/GlobalComponents';
import SpeakerCard from '../productoCard/Producto';
import {
  SpeakerCardsContainer,
  SpeakersSection,
  TitleContainer,
} from './ProductosStyles';

const Speakers = () => {
  return (
    <>
      <SpeakersSection>
        <TitleContainer>
          <SectionTitle>Productos</SectionTitle>
          <Button>COMPRAR</Button>
        </TitleContainer>
        <SpeakerCardsContainer>
          {speakers.map(speaker => {
            return <SpeakerCard key={shortid.generate()} {...speaker} />;
          })}
        </SpeakerCardsContainer>
      </SpeakersSection>
    </>
  );
};

export default Speakers;

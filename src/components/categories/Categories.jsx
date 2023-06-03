import React from 'react'
import { categories } from '../../data/Categories';
import CategoryCard from './CategoryCard';
import { CategoryCardsContainer } from './CategoryCardStyles';
import { SectionTitle, Section } from '../globalComponents/GlobalComponents';

const Categories = () => {
  return (
    <Section>
      <SectionTitle>categorías</SectionTitle>
      <CategoryCardsContainer>
        {categories.map(category => {
                return <CategoryCard key={category.id+100} {...category} />;
              })}
      </CategoryCardsContainer>
    </Section>
  )
}

export default Categories
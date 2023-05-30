import React from 'react'
import { categories } from '../../data/Categories';
import CategoryCard from './CategoryCard';
import { CategoryCardsContainer } from './CategoryCardStyles';

const Categories = () => {
  return (
        <CategoryCardsContainer>
        {categories.map(category => {
                return <CategoryCard key={category.id+100} {...category} />;
              })}
        </CategoryCardsContainer>
  )
}

export default Categories
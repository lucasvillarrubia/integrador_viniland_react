import React from 'react'
import { CategoryCardUI, CategoryIcon, CategoryName } from './CategoryCardStyles'

const CategoryCard = ({icon, name}) => {
  return (
    <CategoryCardUI>
        <CategoryIcon>{icon}</CategoryIcon>
        <CategoryName>{name.toUpperCase()}</CategoryName>
    </CategoryCardUI>
  )
}

export default CategoryCard
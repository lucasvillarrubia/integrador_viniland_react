import React from 'react'
import { products } from '../../data/Products'
import { ProductCardsContainer } from './ProductCardStyles'
import ProductCard from './ProductCard'
import { SectionTitle, Section } from '../globalComponents/GlobalComponents'

const Products = () => {
  return (
    <Section>
        <SectionTitle>productos disponibles</SectionTitle>
        <ProductCardsContainer>
                {products.filter(product => product.id <= 8)
                        .map(product => {
                              return <ProductCard key={product.id} {...product} />;
                            })}
        </ProductCardsContainer>
    </Section>
  )
}

export default Products
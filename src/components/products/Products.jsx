import React from 'react'
import { products } from '../../data/Products'
import { ProductCardsContainer } from './ProductCardStyles'
import ProductCard from './ProductCard'

const Products = () => {
  return (
        <ProductCardsContainer>
                {products.map(product => {
                        return <ProductCard key={product.id} {...product} />;
                      })}
        </ProductCardsContainer>
  )
}

export default Products
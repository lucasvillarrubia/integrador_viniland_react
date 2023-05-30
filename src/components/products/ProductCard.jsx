import React from 'react'
import { ProductCardUI, ProductTitle, ProductInfo, ProductAuthor, ProductPrice, ProductButton } from './ProductCardStyles';

const ProductCard = ({name, author, image, price}) => {
        return (
                <ProductCardUI>
                        <ProductInfo>
                                <img src={image} alt={name}/>
                                <ProductAuthor>
                                        {author.toUpperCase()}
                                </ProductAuthor>
                                <ProductTitle>
                                        {name}
                                </ProductTitle>
                                <ProductPrice>
                                        ${price}
                                </ProductPrice>
                        </ProductInfo>
                        <ProductButton>
                                AGREGAR AL CARRITO
                        </ProductButton>
                </ProductCardUI>
        )
}

export default ProductCard
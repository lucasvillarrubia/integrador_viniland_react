import React from 'react';

import Categories from '../../components/categories/Categories';
import Products from '../../components/products/Products'
import Hero from '../../components/hero/Hero';


function Home() {
  return (
    <>
        <Hero />
        <Categories />
        <Products />
    </>
  );
}

export default Home;

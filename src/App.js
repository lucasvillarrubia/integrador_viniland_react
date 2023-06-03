import Products from './components/products/Products';
import { GlobalStyles } from './styles/GlobalStyles';
import Toolbar from './components/header/Toolbar';
import Categories from './components/categories/Categories';
import Navbar from './components/header/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Toolbar />
      <Hero />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default App;

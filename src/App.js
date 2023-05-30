import Products from './components/products/Products';
import { GlobalStyles } from './styles/GlobalStyles';
import { Section, Title } from './components/globalComponents/GlobalComponents';
import Navbar from './components/navbar/Navbar';
import Categories from './components/categories/Categories';

function App() {
  return (
    <>
      <GlobalStyles />
      <Section>
        <Navbar />
        <Title>Viniland</Title>
        <Categories />
        <Products />
      </Section>
    </>
  );
}

export default App;

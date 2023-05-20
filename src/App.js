import { Main } from './components/globalComponents/GlobalComponents';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Productos from './components/productos/Productos';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Hero />
        <Productos />
        {/* Categorias */}
        {/* Contacto */}
      </Main>
      {/* Tooter */}
    </>
  );
}

export default App;

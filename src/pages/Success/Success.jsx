import { useNavigate } from 'react-router-dom';

import Button from '../../components/globalComponents/Button';

import { ContainerInfoStyled, PatternStyled, TextStyled, TitleStyled } from './SuccessStyles';

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TextStyled>
        <img
          src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648433/coding/NucbaZappi/Assets/Success-illustration_sbucqm.png'
          alt=''
        />
        <ContainerInfoStyled>
          <TitleStyled>¡Felicitaciones!</TitleStyled>
          <p>Tu pedido fué realizadop</p>
        </ContainerInfoStyled>
        <Button onClick={() => navigate('/my-orders')}>Volver</Button>
      </TextStyled>
      <PatternStyled
        src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648434/coding/NucbaZappi/Assets/Pattern_lt5uru.png'
        alt=''
        className='pattern'
      />
    </div>
  );
};

export default Felicitaciones;

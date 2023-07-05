import styled, { css } from "styled-components";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Main = styled.main`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
`;

export const Section = styled.section`
        /* position: relative; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        /* padding: 60px 0; */
        max-width: 1440px;
        /* width: 320px; */
        background-color: var(--marroncito);
        padding-top: 50px;
        /* gap: 50px; */
        /* width: 100%; */
`;

export const SubmitUI = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--btn-gradient);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  margin-top: 15px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: calc(151px - 1.5rem * 2);
  margin: 0 auto;
`;

export const LoaderStyled = styled(motion.div)`
  border: 2px dashed #d9d9d9;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-left-color: transparent;

  ${({ args }) => css({ ...args })}
`;

export const ContainerLinkStyled = styled(motion.div)``;

export const LinkUI = styled(Link)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ radius }) => `${radius}px`};
  background: var(--btn-gradient);
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  z-index: 2;

  & span {
    font-weight: 700;
    font-size: 1rem;
    background: var(--btn-gradient);
    -webkit-background-clip: text;
    color: white;
  }
`;

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 1.5rem 2rem;
  color: white;
  background-color: var(--gray-bg);
  border-radius: 15px;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
  outline: none;
  caret-color: white;

  ::placeholder {
    opacity: 80%;
  }
  -webkit-text-fill-color: white;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--gray-bg) inset;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;

export const Button = styled.button`
        background-color: var(--marron);
        border: 0px solid black;
        outline: none;
        width: 180px;
        height: 40px;
        color: white;
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.4s linear;
        &:hover {
                background-color: var(--beige);
                transition: all 0.4s linear;
        }
`;

export const IncreaseStyled = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ bgColor }) => bgColor || 'var(--btn-gradient)'};
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 800;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CountStyled = styled.span`
  width: 22px;
  padding: 0 0.5rem;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.6px;
  opacity: 0.7;
`;

export const SectionTitle = styled.h4`
        /* text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -10px 10px 0 #000, 2px 2px 0 #000; */
        /* -webkit-text-stroke: 2px var(--marronzote); */
        font-family: 'Kanit', sans-serif;
        font-size: 20px;
        width: 100%;
        text-align: center;
        color: black;
        letter-spacing: 2px;
`;

export const ButtonUI = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ radius }) => `${radius}px`};
  background: var(--btn-gradient);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    opacity: 95%;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background: #252525;
      & span {
        background: var(--btn-gradient);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
    `}
`;

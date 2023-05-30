import styled from "styled-components";

export const Main = styled.main`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
`;

export const Section = styled.section`
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        /* padding: 60px 0; */
        max-width: 1300px;
        /* width: 320px; */
        background-color: var(--marroncito);
        gap: 50px;
        /* width: 100%; */
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

export const Title = styled.h1`
        text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -10px 10px 0 #000, 2px 2px 0 #000;
        font-family: 'Lobster', sans-serif;
        font-size: 80px;
        color: white;
`;
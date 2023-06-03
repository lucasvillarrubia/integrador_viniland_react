import styled from "styled-components";

export const HeroUI = styled.div`
        width: 100%;
        height: 100vh;
        background-color: var(--vanilla);
        background-repeat: repeat;
        background-size: 50%;
        background-image: url('./images/hero2.jpg');
`;

export const HeroBGBlur = styled.div`
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,1) 100%);
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px;
        gap: 30px;
`;

export const HeroTitle = styled.h1`
        font-size: 35px;
        font-family: 'Kanit', sans-serif;
        color: white;
        font-style: italic;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
        line-height: 35px;
        &::first-line {
                font-size: 55px;
                letter-spacing: 1px;
                font-weight: 600;
                font-family: 'Sansita Swashed', sans-serif;
                font-style: normal;
                color: var(--tomato);
                line-height: normal;
        }
`;

export const HeroButton = styled.button`
        padding: 10px 20px;
        font-family: 'Shrikhand', sans-serif;
        font-size: 15px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
`;
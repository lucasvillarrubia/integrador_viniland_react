import styled from 'styled-components'

export const CategoryCardUI = styled.div`
        width: 120px;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
        border-radius: 50%;
        cursor: pointer;
`;

export const CategoryName = styled.h5`
        font-size: 10px;
        letter-spacing: 3px;
        font-weight: bold;
        color: white;
        max-width: 80px;
        text-align: center;
`;

export const CategoryIcon = styled.i`
        font-size: 40px;
        color: white;
`;

export const CategoryCardsContainer = styled.div`
        margin: 0 auto;
        width: 100%;
        /* background-color: var(--mentita); */
        display: grid;
        grid-template-columns: repeat(auto-fit, 120px);
        grid-gap: 20px;
        justify-content: center;
        align-items: center;
        padding: 50px 0;
`;

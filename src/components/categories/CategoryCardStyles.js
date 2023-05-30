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
        color: var(--amarillo);
`;

export const CategoryCardsContainer = styled.div`
        background-color: var(--mentita);
        display: grid;
        grid-template-columns: repeat(2, 120px);
        gap: 20px;
`;

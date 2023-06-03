import styled from "styled-components";

export const FooterUI = styled.footer`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 80px;
        padding: 5rem 1rem;
        background-color: var(--marroncito);
`;

export const InfoFooter = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
`;

export const LinksFooter = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
`;

export const LogosFooter = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        & img {
                height: 200px;
        }
        & p {
                font-family: 'Shrikhand', sans-serif;
                font-size: 80px;
                color: var(--marronzote);
                text-shadow: var(--borde_claro);
        }
`;

export const RedesFooter = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        & a {
                font-size: 40px;
                color: var(--marronzote);
                text-shadow: var(--borde_fino);
        }
`;

export const DireccionFooter = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        font-size: 20px;
        overflow-wrap: break-word;
        color: var(--marronzote);
        gap: 20px;
        padding-top: 2rem;
`;

export const ExtrasFooter = styled.div`
        text-align: center;
        & a {
                text-decoration: underline;
                font-size: 15px;
                color: var(--marronzote);
                text-align: center;
        }
        & p {
                color: var(--marronzote);
                font-size: 20px;
                text-align: center;
        }
`;
import styled from "styled-components";

export const NavbarUI = styled.div`
        width: 100%;
        background-color: black;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0;
        padding: 10px 0 5px 0;
        max-width: 1300px;
`;

export const NavIcon = styled.a`
        font-size: 25px;
        color: white;
        /* background-color: black; */
        cursor: pointer;
`;

export const NavLogo = styled.img`
        width: 30%;
`;

export const NavMenu = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        word-wrap: break-word;
        align-items: center;
        font-size: 20px;
`;

export const NavMenuItem = styled.a`
        font-weight: bold;
`;

export const NavMenuButton = styled.button`
        box-shadow: 11px 28px 50px rgba(20, 78, 90, 0.2);
        border-radius: 15px;
        width: 166px;
        cursor: pointer;
        height: 50px;
        color: white;
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 14px;
        border: none;
`;
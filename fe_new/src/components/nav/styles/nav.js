import styled from "styled-components";
import { Link as ReacRouterLink } from 'react-router-dom';

export const Container = styled.div`
    z-index: 1;
    position: fixed;
    width: -webkit-fill-available;
    background: linear-gradient(to bottom, #000000, #736F6E);
    display: flex;
    padding: 25px 50px;
    justify-content: space-between;
    a{
        display: flex;
    }
`;

export const Menu = styled.div`
    display: flex;
`;

export const Logo = styled.img`
    height: 90px;
    margin: -30px 0;
`;

export const ButtonLink = styled(ReacRouterLink)`
    margin: 0 10px;
    Background-color: #d9000b;
    color: white;
    width: fit-content;
    height: fit-content;
    border: 0;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    padding 8px 17px;
    text-decoration: none;

    &:hover {
        background-color: #ff2e38;
    }
`;
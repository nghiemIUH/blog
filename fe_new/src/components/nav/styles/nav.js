import styled from "styled-components";
import { Link as ReacRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    padding: 25px 0;
    alight-items: center;
    justify-content: space-between;
    a{
        display: flex;
    }
`;

export const Menu = styled.div`
    display: flex;
`;

export const Logo = styled.img`
    height: 70px;
    margin: -20px 0 -20px 0;
    border-radius: 35px;
    background: #000000;
`;

export const ButtonLink = styled(ReacRouterLink)`
    margin: 0 10px;
    display: block;
    Background-color: #d9000b;
    width: fit-content;
    height: fit-content;
    color: white;
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
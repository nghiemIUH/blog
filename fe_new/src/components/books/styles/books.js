import styled from "styled-components/macro";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 450px));
    grid-gap: 50px;
    padding: 50px 70px 0 70px;
    margin: auto;
    justify-content: center;
`;

export const Frame = styled.a`
    display: block;
    border: solid black 1px;
    border-radius: 20px;
    height: 300px;
    width: 450px;
    text-decoration: none;
`;

export const Image = styled.img`
    display: block;
    margin-top: 15px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 18px;
    width: 420px;
    height: 200px;

    background: #000000;
`;

export const Title = styled.p`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    height: 45px;
    color: #000000;

    &:hover{
        color: #004999;
    }
`;
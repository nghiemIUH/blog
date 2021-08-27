import styled from "styled-components/macro";

export const Container = styled.div`
    display: block;
    padding: 50px 70px 0 70px;
    margin: auto;
`;

export const Frame = styled.div`
    border-bottom: 1px solid #696969;
    display: flex;
    height: 100px;
    width: 70%;
    margin: 10px auto;
`;

export const Infor = styled.div`
    display: inline-grid;
    height: 100px;
    padding: 0 20px;
`;

export const A = styled.a``;

export const UseAva = styled.img`
    margin-left: 10px;
    background: black;
    height: 80px;
    border-radius: 40px;
`;

export const UseName = styled.a`
    padding-top: 10px;
    text-decoration: none;
    color: #004999;
`;

export const Title = styled.a`
    text-decoration: none;
    color: #000000;
    font-size: 25px;
    
    &:hover{
        color: #004999;
    }
`;

export const Date = styled.p`
    color: #696969;
    margin: unset;
    font-size: 15px;
`;
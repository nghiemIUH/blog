import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    padding-top: 150px;
    width: 70%;
    margin: auto;
    justify-content: space-between;
`;

export const Frame = styled.div`
    width: 60%;
`;

export const SideBar = styled.div`
    width: 35%;
`;

export const Items = styled.div`
    border-bottom: 1px solid #696969;
    display: flex;
    height: 80px;
    margin: 10px 10px;
`;

export const Infor = styled.div`
    height: 80px;
    padding: 0 20px;
    margin-bottom: 10px;
    display: inline-grid;
    height: auto
`;

export const A = styled.a``;

export const UseAva = styled.img`
    margin-left: 10px;
    background: black;
    height: 65px;
    border-radius: 50%;
`;

export const UseName = styled.a`
    font-size: 14px;
    text-decoration: none;
    color: #004999;
`;

export const Title = styled.a`
    text-decoration: none;
    color: #000000;
    font-size: 20px;
    
    &:hover{
        color: #004999;
    }
`;

export const Date = styled.p`
    color: #696969;
    margin: unset;
    font-size: 14px;
`;

export const TextUpppercase = styled.a`
    text-decoration: none;
    color: #004999;
    text-transform: uppercase!important;
`;
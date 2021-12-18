import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid solid #222;
    padding: 165px 45px;
    text-align: center;
`;

export const Title = styled.h1`
    color: white;
    max-width: 700px;
    font-size: 65px;
    font-weight: 500;
    margin: auto;
    
    @media (max-width:800px){
        max-width: 550px;
        font-size: 40px;
    }
`;

export const SubTitle = styled.h2`
    color: white;
    font-size: 30px;
    font-weight: normal;
    margin: 16px auto;

    @media (max-width:800px){
        font-size: 18px;
    }
`;
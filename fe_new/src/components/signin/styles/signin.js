import styled from "styled-components/macro";

export const Container = styled.div`
    padding-top: 100px;
    display: block;
    width: 600px;
    margin: auto;
`;

export const Title = styled.div`
    padding: 20px 0;
    text-align: center;
    color: #000000;
    font-size: 25px;
    font-weight: 600;
    border-bottom: 1px solid #696969;
`;

export const Form = styled.div`
    padding: 20px 0;
    display: grid;
    grid-template-columns: 120px 400px;
    grid-gap: 10px;
    justify-content: center;
`;

export const TextArea = styled.p`
    color: #000000;
    margin: auto;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    border: 0;
    height: 40px;
    box-sizing: border-box;
`;
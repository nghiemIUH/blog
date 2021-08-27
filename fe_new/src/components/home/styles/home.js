import styled from "styled-components/macro";

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    opacity: 0.8;
    background: linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.3)),url('../images/misc/home-bg.jpg')
        top left / cover no-repeat;
`;

export const Frame = styled.div``;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    alight-items: center;

    a{
        display: flex;
    }

    @media (max-width: 1000px){
        margin: 0 30px;
    }
`;
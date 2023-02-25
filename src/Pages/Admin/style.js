import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;    
    
    a {
        text-decoration: none;
        color: #b4b8bb;
        margin: 14px 0;
        font-size: 14px;
    }
`
export const Title = styled.h1`    
    margin-bottom: 28px;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 500px;
`
export const TextArea = styled.textarea`
    margin-bottom: 12px;
    border: 0;
    height: 90px;
    resize: none;
    border-radius: 4px;
    padding: 8px;
`

export const SubmitButton = styled.button`
    height: 36px;
    border: 0;
    border-radius: 4px;
    background-color: #3366ff;
    color: #FFF;
    font-size: 18px;
    margin-bottom: 28px;
`

export const List = styled.article`
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    background-color: rgba(18,18,18, 0.38);
    border-radius: 4px;
    margin-bottom: 12px;
    justify-content: center;
    padding: 14px 8px;

    p {
        margin-bottom: 8px;
    }
`

export const ListButton = styled.button`
    margin-right: 8px;
    border: 0;
    border-radius: 4px;
    padding: 4px;
    color: ${(props) => props.fontColor};
    background-color: ${ props => props.background};
`

export const LogoutBtn = styled.button`
    position: absolute;
    bottom: 6%;
    left: 4%;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 0;
    font-weight: bold;
    background-color: rgba(219, 38, 41, 0.35);
    color: #fff;
    transition: all 0.4s;
    
    :hover{
        background-color: rgba(219, 38, 41, 1);
        color: #fff;
    }
`
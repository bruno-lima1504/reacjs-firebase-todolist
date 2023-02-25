import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    a {
        text-decoration: none;
        color: #b4b8bb;
        margin: 14px 0;
        font-size: 14px;
    }
`

export const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 8px;
`
export const Span = styled.span`
    margin-bottom: 28px;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 400px;
`
export const Input = styled.input`
    border: 0;
    margin-bottom: 12px;
    height: 36px;
    border-radius: 4px;
    padding: 0 8px;
`
export const SubmitButton = styled.button`
    height: 36px;
    border: 0;
    border-radius: 4px;
    background-color: #3366ff;
    color: #FFF;
    font-size: 18px;
`

export const TextArea = styled.textarea`
    margin-bottom: 12px;
    border: 0;
    height: 90px;
    resize: none;
    border-radius: 4px;
`
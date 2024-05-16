import styled from "@emotion/styled";

interface InputProps {
    isRowReverse?: boolean;
}

export const InputContainerStyle = styled.div<InputProps>`
    display: flex;
    flex-direction: ${({isRowReverse}) => isRowReverse ? "row-reverse" : "column"};
    justify-content: ${({isRowReverse}) => isRowReverse ? "start" : "flex-start"};
    gap: 4px;
    width: 100%;
    height: fit-content;
`

export const InputLabelStyle = styled.label`
    font-size: 16px;
    color: black;
`

export const InputStyle = styled.input<InputProps>`
    width: auto;
    height: auto;
    padding: 12px 20px;
    outline: none;
    font-size: 16px;
    border: 1px solid black;
    color: black;
    background-color: #ffffff59;
    border-radius: 5px;

    ::placeholder {
    color: grey;
}
`

export const ErrorMessage = styled.div`
    font-size: 16px;
    color: red;
    height: 18px;
`

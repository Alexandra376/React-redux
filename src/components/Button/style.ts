import styled from "@emotion/styled";

interface ButtonProps {
    disabled?: boolean;
}

export const ButtonStyle = styled.button<ButtonProps>`
    width: 100%;
    height: 48px;
    outline: none;
    border: none;
    border-radius: 50px;
    padding: 12px 40px;
    background: #3678B4;
    opacity: ${({disabled}) => disabled ? 0.7 : 1};
    color: white;
    font-size: 16px;
    cursor: pointer;
`

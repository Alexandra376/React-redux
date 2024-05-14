type ButtonType = "button" | "submit" | "reset" | undefined;
export interface ButtonProps {
    name: string;
    type?: ButtonType,
    handlerButton?(): void
    disabled?: boolean;
}

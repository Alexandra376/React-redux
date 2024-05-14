import {InputProps } from "./types";
import {ErrorMessage, InputContainerStyle, InputLabelStyle, InputStyle} from "./style";

function Input({ name, type = "text", label, placeholder='Output', getValue, value, isRowReverse=false, isChecked, error } :InputProps) {
    return (
        <InputContainerStyle isRowReverse={isRowReverse}>
            <InputLabelStyle>{label}</InputLabelStyle>
            <InputStyle
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={getValue}
                value={value}
                checked={isChecked}
            />
            <ErrorMessage>{error}</ErrorMessage>
        </InputContainerStyle>
    );
}

export default Input;

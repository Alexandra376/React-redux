import { ButtonProps } from './types'
import {ButtonStyle} from './style';

function Button({ name, type = "button", disabled=false, handlerButton}: ButtonProps) {
    return (
        <ButtonStyle disabled={disabled} type={type} onClick={handlerButton}>
            {name}
        </ButtonStyle>
    );
}

export default Button;

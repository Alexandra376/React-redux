import Button from "components/Button/Button";
import "./types";
import type {CounterProps} from "components/Counter/types";
import {CounterWrapperStyle, ButtonControlStyle, ParagraphStyle} from './style';

function Counter({onMinusClick, countValue, onPlusClick} : CounterProps) {
    return (
        <CounterWrapperStyle>
            <ButtonControlStyle>
                <Button handlerButton={onMinusClick} name="-" />
            </ButtonControlStyle>
            <ParagraphStyle>{countValue}</ParagraphStyle>
            <ButtonControlStyle>
                <Button handlerButton={onPlusClick} name="+" />
            </ButtonControlStyle>
        </CounterWrapperStyle>
    );
}

export default Counter;

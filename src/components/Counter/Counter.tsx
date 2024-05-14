import Button from "components/Button/Button";
import "./types";
import {CounterWrapperStyle, ButtonControlStyle, ParagraphStyle} from './style';
import { useState } from "react"

function Counter() {

  const [value, setValue] = useState<number>(0);

  const onMinusClick = () => {
    setValue(prevValue => prevValue - 1);
  };
  const onPlusClick = () => {
    setValue(prevValue => prevValue + 1);
  };

  const onMultiplyTwiceClick = () => {
    setValue(prevValue => parseFloat((prevValue * 2).toFixed(2)));
  }

  const onDivideTwiceClick = () => {
    setValue(prevValue => parseFloat((prevValue / 2).toFixed(2)));
  }

    return (
        <CounterWrapperStyle>
          <ButtonControlStyle>
            <Button handlerButton={onMultiplyTwiceClick} name="X" />
          </ButtonControlStyle>
            <ButtonControlStyle>
                <Button handlerButton={onMinusClick} name="-" />
            </ButtonControlStyle>
            <ParagraphStyle>{value}</ParagraphStyle>
            <ButtonControlStyle>
                <Button handlerButton={onPlusClick} name="+" />
            </ButtonControlStyle>
          <ButtonControlStyle>
            <Button handlerButton={onDivideTwiceClick} name="/" />
          </ButtonControlStyle>

        </CounterWrapperStyle>
    );
}

export default Counter;

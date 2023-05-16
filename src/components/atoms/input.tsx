import { FC, FormEvent } from 'react';
import { InputType } from '../../models/types/types';

const Input: FC<InputType> = (
  {
    id,
    classes,
    maxValue,
    placeholder,
    text,
    onInputChangeHandler
  }) => {

  const onInputHandler = (evt: FormEvent<HTMLInputElement>) => {
    let inputValue: number = parseFloat((evt.target as HTMLInputElement).value);
    if (maxValue && inputValue > maxValue) {
      inputValue = maxValue;
    }
    if (onInputChangeHandler) {
      onInputChangeHandler(inputValue);
    }
  }

  return <input type="number"
                id={id}
                className={classes}
                placeholder={placeholder}
                value={text?.toString()}
                onChange={onInputHandler}  />
}

export {Input}

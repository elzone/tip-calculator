import { ComponentWithLabel, InputWithIcon } from '../molecules';
import { FC } from 'react';
import { LabelWithInputAndIconType } from '../../models/types/types';

const LabelWithInputAndIcon: FC<LabelWithInputAndIconType> = (
  {
    labelText,
    labelClasses,
    labelFor,
    src,
    id,
    classes,
    placeholder,
    text,
    onInputChangeHandler
  }) => {
  return <ComponentWithLabel labelClasses={labelClasses}
                        labelFor={labelFor}
                        labelText={labelText}>
    <InputWithIcon id={id}
                   classes={classes}
                   placeholder={placeholder}
                   src={src}
                   text={text}
                   onInputChangeHandler={onInputChangeHandler}/>
  </ComponentWithLabel>
}

export {LabelWithInputAndIcon};

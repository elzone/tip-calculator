import { Icon, Input } from '../atoms';
import { FC } from 'react';
import { InputWithIconType } from '../../models/types/types';

const InputWithIcon: FC<InputWithIconType> = (
  {
    src,
    id,
    classes,
    placeholder,
    text,
    onInputChangeHandler
  }) => {
  return <div>
    <Icon src={src}/>
    <Input id={id}
           classes={classes}
           placeholder={placeholder}
           text={text}
           onInputChangeHandler={onInputChangeHandler}/>
  </div>
}

export {InputWithIcon}

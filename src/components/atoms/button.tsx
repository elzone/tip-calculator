import { FC } from 'react';
import { ButtonType } from '../../models/types/types';

const Button: FC<ButtonType> = (
  {
    buttonClasses,
    buttonLabel,
    onClickHandler
  }) => {
  return <button type="button"
                 data-button={buttonLabel}
                 className={buttonClasses}
                 onClick={onClickHandler}>
    {buttonLabel}
  </button>
}

export {Button}

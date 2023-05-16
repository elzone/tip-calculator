import { FC } from 'react';
import { LabelType } from '../../models/types/types';

const Label: FC<LabelType> = (
  {
    labelClasses,
    labelFor,
    labelText
  }) => {
  return <label htmlFor={labelFor}
                className={labelClasses}>
    {labelText}
  </label>
}

export {Label};

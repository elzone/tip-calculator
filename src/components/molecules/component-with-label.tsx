import { Label } from '../atoms';
import { FC } from 'react';
import { ComponentWithLabelType } from '../../models/types/types';

const ComponentWithLabel: FC<ComponentWithLabelType> = (
  {
    children,
    labelClasses,
    labelFor,
    labelText
  }) => {
  return <div>
    <Label labelClasses={labelClasses}
           labelFor={labelFor}
           labelText={labelText} />
    <div>{children}</div>
  </div>
}

export {ComponentWithLabel};

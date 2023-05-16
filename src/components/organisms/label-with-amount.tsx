import { Label } from '../atoms';
import { FC } from 'react';
import { LabelWithAmountType } from '../../models/types/types';

const LabelWithAmount: FC<LabelWithAmountType> = (
  {
    labelBigText,
    labelSmallText,
    labelAmount
  }) => {

  return <div className="label-with-amount">
    <div className="label-with-amount-labels">
      <Label labelClasses={'label-with-amount-label_white'}
             labelText={labelBigText} />
      <Label labelClasses={'label-with-amount-label_green'}
             labelText={labelSmallText} />
    </div>
    <Label labelClasses={'label-with-amount-label_amount'}
           labelText={`$${labelAmount.toFixed(2)}`} />
  </div>
}

export {LabelWithAmount};

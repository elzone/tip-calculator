import { useCalculationStore } from '../../stores/calculation-store';
import { LabelWithInputAndIcon } from '../organisms';
import React, { FC } from 'react';
import { convertToAmount } from '../../helpers/helper';

const BillAmount: FC = () => {
  const {billAmount, updateBillAmount, updateTipAmount} = useCalculationStore((state) => state);

  const onBillAmountChangeHandler = (value: number) => {
    updateBillAmount(convertToAmount(value));
    updateTipAmount();
  }

  const inputId: string = 'bill-amount';

  return <LabelWithInputAndIcon labelClasses={'block-label'}
                                labelFor={inputId}
                                labelText={'Bill'}
                                src={''}
                                id={inputId}
                                text={billAmount}
                                onInputChangeHandler={onBillAmountChangeHandler}/>
}

export {BillAmount};

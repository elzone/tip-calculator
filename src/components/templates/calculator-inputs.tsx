import { BillAmount } from './bill-amount';
import { SelectTips } from './select-tips';
import { NumberOfPeople } from './number-of-people';
import React, { FC } from 'react';

const CalculatorInputs: FC = () => {
  return <div className="calculator-inputs">
    <BillAmount />
    <SelectTips />
    <NumberOfPeople />
  </div>
}

export {CalculatorInputs};

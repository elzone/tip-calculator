import { LabelWithAmount } from '../organisms';
import { Button } from '../atoms';
import React, { FC } from 'react';
import { useCalculationStore } from '../../stores/calculation-store';

const CalculatorResult: FC = () => {
  const {tipAmountPerPerson, tipAmountTotal, resetCalculation} = useCalculationStore((state) => state);

  return <div className="calculator-result">
    <div className="calculator-result-amounts">
      <LabelWithAmount labelBigText={'Tip Amount'}
                       labelSmallText={'/ person'}
                       labelAmount={tipAmountPerPerson}/>
      <LabelWithAmount labelBigText={'Total'}
                       labelSmallText={'/ person'}
                       labelAmount={tipAmountTotal}/>
    </div>
    <Button buttonClasses={'btn btn-secondary text-uppercase'}
            buttonLabel={'Reset'} onClickHandler={resetCalculation}/>
  </div>
}

export {CalculatorResult};

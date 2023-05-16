import { LabelWithInputAndIcon } from '../organisms';
import React, { FC } from 'react';
import { useCalculationStore } from '../../stores/calculation-store';
import { convertToIntDigit } from '../../helpers/helper';

const NumberOfPeople: FC = () => {
  const {peopleNumber, updatePeopleNumber, updateTipAmount} = useCalculationStore((state) => state);

  const onPeopleNumberChangeHandler = (value: number) => {
    updatePeopleNumber(convertToIntDigit(value));
    updateTipAmount();
  };

  const inputId: string = 'number-of-people';

  return <LabelWithInputAndIcon labelClasses={'block-label'}
                                labelFor={inputId}
                                labelText={'Number of People'}
                                src={''}
                                id={inputId}
                                text={peopleNumber}
                                onInputChangeHandler={onPeopleNumberChangeHandler}/>
}

export {NumberOfPeople};

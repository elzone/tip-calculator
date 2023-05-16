import { Button, Input } from '../atoms';
import { useCalculationStore } from '../../stores/calculation-store';
import { useState } from 'react';

interface ITip {
  id: string;
  value: number | string
}

const tips: ITip[] = [
  {id: '1', value: 5},
  {id: '2', value: 10},
  {id: '3', value: 15},
  {id: '4', value: 25},
  {id: '5', value: 50},
  {id: '6', value: 'Custom'}
];

const Tips = () => {
  const {tipNumber, updateTipNumber, updateTipAmount} = useCalculationStore((state) => state);
  const [isCustomTip, setIsCustomTip] = useState<boolean>(false);

  const onTipClick = (tip: number) => {
    setIsCustomTip(false);
    updateTip(tip);
  }

  const onCustomTipInput = (value: number) => {
    setIsCustomTip(true);
    updateTip(value);
  }

  const updateTip = (value: number) => {
    updateTipNumber(value);
    updateTipAmount();
  }

  return <div className="tip">
    {tips.map((tip) => {
      const {id, value} = tip;
      const isTipButtonActive: boolean = value === tipNumber && !isCustomTip;
      return typeof tip.value === 'number'
        ? <Button key={id}
                  buttonClasses={`btn btn-primary ${isTipButtonActive ? 'active' : ''}`}
                  buttonLabel={`${value}%`}
                  onClickHandler={() => onTipClick(value as number)} />
        : <Input key={tip.id}
                 classes={'input'}
                 maxValue={100}
                 placeholder={value as string}
                 text={isCustomTip && tipNumber !== -1 ? tipNumber : ''}
                 onInputChangeHandler={onCustomTipInput}/>
    })}
  </div>
}

export {Tips};

import { ReactElement } from 'react';

export type ClassesType = {
  classes?: string;
}

export type TextType = {
  text?: number | string;
}

export type IconType = {
  src: string;
}

export type ButtonType = {
  buttonClasses?: string;
  buttonLabel?: string;
  onClickHandler?: () => void;
}

export type InputType = ClassesType & TextType & {
  id?: string;
  maxValue?: number;
  placeholder?: string;
  onInputChangeHandler?: (value: number) => void;
}

export type InputWithIconType = IconType & InputType;

export type LabelType = {
  labelClasses?: string;
  labelText: string;
  labelFor?: string;
}

export type LabelWithInputAndIconType = LabelType & InputWithIconType;

export type ComponentWithLabelType = LabelType & {
  children: ReactElement;
}

export type LabelWithAmountType = {
  labelBigText: string;
  labelSmallText: string;
  labelAmount: number;
}

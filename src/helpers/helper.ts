export const convertToIntDigit = (value: number) => {
  const regDigits: RegExp = /^\d+$/;
  const regFirstZero: RegExp = /^0[0-9].*$/;
  const stringValue: string = value.toString();

  if (regDigits.test(stringValue)) {
    if(regFirstZero.test(stringValue)) {
      return parseInt(stringValue);
    }
    return value;
  } else {
    return 1;
  }
}

export const convertToAmount = (value: number) => {
  return Math.round(value * 100) / 100;
}

import { create } from 'zustand';

type CalculationStoreType = {
  billAmount: number;
  peopleNumber: number;
  tipNumber: number;
  tipAmountPerPerson: number;
  tipAmountTotal: number;
  updateBillAmount: (billAmount: number) => void;
  updatePeopleNumber: (peopleNumber: number) => void;
  updateTipNumber: (tipNumber: number) => void;
  updateTipAmount: () => void;
  resetCalculation: () => void;
}

export const useCalculationStore = create<CalculationStoreType>((set, get) => ({
  billAmount: 0,
  peopleNumber: 0,
  tipNumber: -1,
  tipAmountPerPerson: 0,
  tipAmountTotal: 0,
  updateBillAmount: (billAmount) => set({billAmount}),
  updatePeopleNumber: (peopleNumber) => set({peopleNumber}),
  updateTipNumber: (tipNumber) => set({tipNumber}),
  updateTipAmount: () => set((state) => {
    const {billAmount, peopleNumber, tipNumber} = state;

    if (billAmount !== 0 && peopleNumber !== 0 && tipNumber > 0) {
      const calculatedTip = Math.round(((billAmount * tipNumber / 100) / peopleNumber) * 100) / 100;
      const calculatedTipTotal = calculatedTip * peopleNumber;
      return {
        tipAmountPerPerson: calculatedTip,
        tipAmountTotal: calculatedTipTotal
      }
    } else {
      return {
        ...state
      }
    }
  }),
  resetCalculation: () => set({
    billAmount: 0,
    peopleNumber: 0,
    tipNumber: -1,
    tipAmountPerPerson: 0.00,
    tipAmountTotal: 0.00,
  })
}));

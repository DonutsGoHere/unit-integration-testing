import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 and 4 to get 5', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const addButton = container.getByTestId('operator-add');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('5');
    
  })

  it('should subtract 4 from 7 to get 3', () => {
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const minusButton = container.getByTestId('operator-subtract');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(minusButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3');

  })
  it('should multiply 3 and 5 to get 15', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const timesButton = container.getByTestId('operator-multiply');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(timesButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('15');

  })

  it('should divide 21 by 7 to get 3', () => {
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button7 = container.getByTestId('number7');
    const divideButton = container.getByTestId('operator-divide');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3');

  })

  it('should concatenate multiple number button clicks', () => {
    const button8 = container.getByTestId('number8');
    const button2 = container.getByTestId('number2');
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(button2);
    fireEvent.click(button8);
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('7287');
  })

  it('should chain multiple operations together', () => {
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button7 = container.getByTestId('number7');
    const button5 = container.getByTestId('number5')
    const divideButton = container.getByTestId('operator-divide');
    const timesButton = container.getByTestId('operator-multiply');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(timesButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should clear the running total without affecting calculation', () => {
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button7 = container.getByTestId('number7');
    const button5 = container.getByTestId('number5')
    const divideButton = container.getByTestId('operator-divide');
    const timesButton = container.getByTestId('operator-multiply');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    const clearButton = container.getByTestId('clear')
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(timesButton);
    fireEvent.click(button5)
    fireEvent.click(clearButton);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3');

  })

})


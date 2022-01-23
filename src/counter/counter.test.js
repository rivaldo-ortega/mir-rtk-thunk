import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';
import { Provider } from 'react-redux';
import { store } from '../../src/store/index';

describe('<Counter /> Tests', () => {
  test('should render the initial value of count = 0', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const countValue = screen.getByText('0');
    expect(countValue).toBeInTheDocument();
  });

  test('should add 1 when clicked plus button', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const buttonPlus = screen.getAllByRole('button')[1];
    userEvent.click(buttonPlus);

    const countValue = screen.getByText('1');
    expect(countValue).toBeInTheDocument();
  });

  test('should substract 1 when clicked minus button', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const buttonMinus = screen.getByLabelText('Decrement value');
    userEvent.click(buttonMinus);
    userEvent.click(buttonMinus);

    const countValue = screen.getByText('-1');
    expect(countValue).toBeInTheDocument();
  });
});

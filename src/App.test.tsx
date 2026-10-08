import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe("App", () => {
  it('renders App component', () => {
    render(<App />);

    const button = screen.getByTestId('click-btn');
    const input = screen.getByPlaceholderText(/type here/i);

    expect(screen.getByText(/hello, world!/i)).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('input event', async () => {
    render(<App />);
    const valueElement = screen.getByTestId('value-elem');
    const input = screen.getByPlaceholderText(/Type here.../i);

    expect(valueElement).toHaveTextContent('');

    // fireEvent.change(input, {
    //   target: { value: '12345' }
    // })
    await userEvent.type(input, '12345');

    expect(valueElement).toHaveTextContent('12345');
  });

});




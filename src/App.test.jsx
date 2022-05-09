import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

describe('Behavioral Test', () => {
  it('signs up, goes to guestbook, and adds a new entry to the list', async () => {
    render(
      <MemoryRouter
        initialEntries={['/', '/login', 'guestbook']}
        initialIndex={0}
      >
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );

    const guestbookLink = screen.getByRole('link', { name: /view guestbook/i });
    userEvent.click(guestbookLink);

    const email = screen.getByPlaceholderText(/email/i);
    userEvent.type(email, 'testing@123.com');

    const password = screen.getByPlaceholderText(/password/i);
    userEvent.type(password, 'testtest');

    const button = screen.getByRole('button', { name: /log in/i });
    userEvent.click(button);

    await screen.findByText('Hello testing@123.com!', { exact: false });

    const textInput = await screen.findByPlaceholderText(
      /write in the guestbook/i
    );
    userEvent.type(textInput, 'new entry');

    const entryButton = await screen.findByRole('button', {
      name: /add entry/i,
    });
    userEvent.click(entryButton);

    await screen.findByText('new entry', { exact: false });
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockData from '../src/fixtures/mockdata';
import { waitFor } from '@testing-library/react';

const server = setupServer(
  rest.post(
    'https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/token',
    (req, res, ctx) => res(ctx.json(mockData))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

    const email = await screen.findByPlaceholderText(/email/i);
    userEvent.type(email, 'newtest@newuser.com');

    const password = await screen.findByPlaceholderText(/password/i);
    userEvent.type(password, 'testtest');

    const button = await screen.findByRole('button', { name: /sign up/i });
    userEvent.click(button);

    waitFor(() => {
     screen.getByText('Hello newtest@newuser.com!', { exact: false });

      const textInput = screen.getByPlaceholderText(
        /write in the guestbook/i
      );
      userEvent.type(textInput, 'new entry');
  
      const entryButton = screen.getByRole('button', {
        name: /add entry/i,
      });
      userEvent.click(entryButton);
  
    const newEntry = screen.getByText('new entry', { exact: false }
    );

      expect(newEntry).toBeInTheDocument();
    })

  
  });
});

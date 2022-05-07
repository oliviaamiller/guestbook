import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

describe('Behavioral Test', () => {
    it('signs up, goes to guestbook, and adds a new entry to the list', async () => {
        render(
            <MemoryRouter>
                <UserProvider>
                    <App />
                </UserProvider>
            </MemoryRouter>
        )
    })
})
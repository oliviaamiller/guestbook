import { createContext, useContext, useState } from 'react';
import { getUser, signInUser, signUpUser } from '../services/user';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { email: null });

  const signUp = async (email, password) => {
    const newUser = await signUpUser({ email, password });

    if (newUser) {
      setUser(newUser);
    }
  };

  const login = async (email, password) => {
    const returningUser = await signInUser({ email, password });

    if (returningUser) {
      setUser(returningUser);
    }
  };

  const logout = () => {
    setUser({ email: null });
  };

  return (
    <UserContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('user is undefined');
  }

  return context;
};

import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Auth() {
  const { login } = useUser();
  const { signUp } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleLoginForm = async (e) => {
    try {
      e.preventDefault();
      await login(email, password);

      const url = location.state.origin ? location.state.origin.pathname : '/';
      history.replace(url);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUpForm = async (e) => {
    try {
      e.preventDefault();
      await signUp(email, password);

      const url = location.state.origin ? location.state.origin.pathname : '/';
      history.replace(url);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h2>Auth Page</h2>
      <div>
      <form onSubmit={handleSignUpForm}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit">sign up</button>
        <p>{error}</p>
      </form>
      </div>
      <div>
      <form onSubmit={handleLoginForm}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit">sign in</button>
        <p>{error}</p>
      </form>
      </div>
    </>
  );
}

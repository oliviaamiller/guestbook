import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import styles from '../../App.css';

export default function Auth() {
  const { login, signUp } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await login(email, password);

      const url = location.search.origin ? location.search.origin.pathname : '/guestbook';
      history.replace(url);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      await signUp(email, password);

      const url = location.search.origin ? location.search.origin.pathname : '/guestbook';
      history.replace(url);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className={styles.home}>
      <h2>Auth Page</h2>
      <div className={styles.auth}>
        <form className={styles.form}>
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
          <button type="submit" onClick={handleSignUp}>
            sign up
          </button>
          <button type="submit" onClick={handleSubmit}>
            log in
          </button>
          <p>{error}</p>
        </form>
      </div>
    </section>
  );
}

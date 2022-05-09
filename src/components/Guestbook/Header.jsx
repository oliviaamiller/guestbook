import { useUser } from '../../context/UserContext';
import styles from '../../App.css';

export default function Header() {
  const { logout, user } = useUser();

  return (
    <div className={styles.home}>
    <h2>Guestbook</h2>
      <p>
        Hello {user.email}!
      </p>
      
      <button onClick={logout}>log out</button>
    </div>
  );
}

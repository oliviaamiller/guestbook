import { Link } from 'react-router-dom';
import styles from '../../App.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <h2>Home Page</h2>
      <Link to="/guestbook">View Guestbook</Link>
    </div>
  );
}

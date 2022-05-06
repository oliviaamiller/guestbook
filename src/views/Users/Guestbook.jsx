import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import { getEntries } from '../../services/entries';

export default function Guestbook() {
  const { logout } = useUser();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      const results = await getEntries();

      setEntries(results);
      setLoading(false);
    };
    fetchEntries();
  }, []);

  return (
    <>
      <h2>Guestbook</h2>
      <p>If you can see this page, you are logged in!</p>
      <button onClick={logout}>Logout</button>
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>{entry.content}</li>
          ))}
        </ul>
      )}
    </>
  );
}

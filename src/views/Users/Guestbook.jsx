import { useUser } from '../../context/UserContext';
import { useEffect, useState } from 'react';
import { getEntries } from '../../services/entries';

export default function Guestbook() {
  const { logout, user } = useUser();
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
      <p>Hello {user.email}, you logged in successfully! here are your entries:</p>
      {/* {loading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>{entry.content}</li>
          ))}
        </ul>
      )} */}
      <button onClick={logout}>log out</button>
    </>
  );
}

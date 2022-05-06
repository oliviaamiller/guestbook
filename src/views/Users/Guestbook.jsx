import { useUser } from '../../context/UserContext';
import { useEffect, useState } from 'react';
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
      <button onClick={logout}>log out</button>
    </>
  );
}

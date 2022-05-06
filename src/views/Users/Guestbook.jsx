import { useUser } from '../../context/UserContext';
import { useEffect, useState } from 'react';
import { getEntries } from '../../services/entries';
import Header from '../../components/Header';

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
    <Header />
    
      {/* {loading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>{entry.content}</li>
          ))}
        </ul>
      )} */}
  
    </>
  );
}

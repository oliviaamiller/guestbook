import { useUser } from '../../context/UserContext';
import { useEffect, useState } from 'react';
import Header from '../../components/Guestbook/Header';
import { getEntries } from '../../services/entries';
import EntryForm from '../../components/Guestbook/EntryForm';

export default function EntryList() {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function fetchEntries() {
      const results = await getEntries();
      console.log(results);
      setEntries(results);
      setLoading(false);
    }
    fetchEntries();
  }, []);

  async function refreshEntries() {
    const results = await getEntries();
    setEntries(results);
    setLoading(false);
  }

  return (
    <>
      <Header />
      <EntryForm refreshEntries={refreshEntries} />
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <h3>Entries</h3>
          {entries.length ? (
            <ul>
              {entries.map((entry) => (
                <li key={entry.id}>
                  {entry.content}
                  {user.email}
                </li>
              ))}
            </ul>
          ) : (
            <p>no entries yet</p>
          )}
        </>
      )}
    </>
  );
}

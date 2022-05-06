import { useUser } from '../../context/UserContext';
import { useEffect, useState } from 'react';
import Header from '../../components/Guestbook/Header';
import { getEntries } from '../../services/entries';
import EntryForm from '../../components/Guestbook/EntryForm';

export default function Guestbook() {
  const { user } = useUser();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEntries() {
      const results = await getEntries();
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
      <EntryForm refreshEntries={refreshEntries}/>
      {loading
      ? <p>loading...</p>
      : (
        <>
        <h3>Entries</h3>
        </>
      )}
    </>
  );
}

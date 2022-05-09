import { useUser } from '../../context/UserContext';
import { useEffect, useState } from 'react';
import Header from '../../components/Guestbook/Header';
import { getEntries } from '../../services/entries';
import EntryForm from '../../components/Guestbook/EntryForm';
import styles from '../../App.css';

export default function EntryList() {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);

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
      <section className={styles.entries}>
        <div className={styles.form}>
          <EntryForm refreshEntries={refreshEntries} />
        </div>
        {loading ? (
          <p>loading...</p>
        ) : (
          <div className={styles.entryList}>
            <h3>Entries</h3>
            {entries.length ? (
              <span>
                {entries.map((entry) => (
                  <div key={entry.id}>
                    {entry.content}
                    <br />
                    {user.email}
                  </div>
                ))}
              </span>
            ) : (
              <p>no entries yet</p>
            )}
          </div>
        )}
      </section>
    </>
  );
}

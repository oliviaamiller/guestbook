import { useUser } from '../../context/UserContext';
import { useEffect, useState } from 'react';
import Header from '../../components/Guestbook/Header';
import { getEntries } from '../../services/entries';
import EntryForm from '../../components/Guestbook/EntryForm';

export default function Guestbook() {
  const { user } = useUser();
  const [content, setContent] = useState('');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

const fetchEntries = () => {
  getEntries()
    .then(setEntries)
    .finally(() => setLoading(false));
};

useEffect(() => {
  fetchEntries();
}, []);

  return (
    <>
      <Header />
      <EntryForm onAddEntry={fetchEntries} />
    </>
  );
}

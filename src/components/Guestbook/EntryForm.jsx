import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { createEntry } from '../../services/entries';

export default function EntryForm({ onAddEntry }) {
  const [content, setContent] = useState('');
  const { user } = useUser();

  const addNewEntry = async (e) => {
    e.preventDefault();
    const entry = await createEntry({ userId: user.id, content });
    onAddEntry(entry);
    setContent('');
  };

  return (
    <>
      <div>
        <form onSubmit={addNewEntry}>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">add entry</button>
        </form>
      </div>
    </>
  );
}

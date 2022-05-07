import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { createEntry } from '../../services/entries';

export default function EntryForm({ refreshEntries }) {
  const [content, setContent] = useState('');
  const { user } = useUser();

  async function addNewEntry(e) {
    e.preventDefault();
    await createEntry({ userId: user.id, content });

    //clear the form
    setContent('');
    await refreshEntries();
  }

  return (
    <>
    <h3>Write Entry</h3>
      <div>
        <form onSubmit={addNewEntry}>
          <textarea
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

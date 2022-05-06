import React from 'react'
import { useEffect, useState } from 'react';
import { getEntries } from '../services/entries';

export default function EntryList() {
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
    <p>here's where the mapping happens</p>
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
  )
}

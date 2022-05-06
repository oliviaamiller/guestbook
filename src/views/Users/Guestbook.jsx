import { useUser } from '../../context/UserContext';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import EntryList from '../../components/EntryList';

export default function Guestbook() {
  const { user } = useUser();


  return (
    <>
    <Header />
    <EntryList />
      
    </>
  );
}

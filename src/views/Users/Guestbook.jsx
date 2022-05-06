import { useUser } from '../../context/UserContext';

export default function Guestbook() {
  const { logout } = useUser();

  return (
    <>
      <h2>Guestbook</h2>
      <button onClick={logout}>log out</button>
    </>
  );
}

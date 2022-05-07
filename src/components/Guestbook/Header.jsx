import { useUser } from '../../context/UserContext';

export default function Header() {
  const { logout, user } = useUser();

  return (
    <>
    <h2>Guestbook</h2>
      <p>
        Hello {user.email}!
      </p>
      
      <button onClick={logout}>log out</button>
    </>
  );
}

import { Route, Switch } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import EntryList from './views/Users/EntryList';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <PrivateRoute path="/guestbook">
          <EntryList />
        </PrivateRoute>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </UserProvider>
  );
}

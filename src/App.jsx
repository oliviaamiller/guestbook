import { Route, Switch } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Guestbook from './views/Users/Guestbook';

export default function App() {
  return (
    <Switch>
      <Route path="/login">
        <Auth />
      </Route>
      <PrivateRoute path="/guestbook">
        <Guestbook />
      </PrivateRoute>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

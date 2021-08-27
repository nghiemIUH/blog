import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Blogs, Books, Signin } from './pages/index'


function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.BLOGS}>
        <Blogs />
      </Route>
      <Route exact path={ROUTES.BOOKS}>
        <Books />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
    </Router>
  );
}

export default App
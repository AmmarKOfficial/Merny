import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./Users/Pages/Users";
import NewPlace from "./Places/Pages/NewPlace";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>

        <Route path="/places/new" exact>
          <NewPlace />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

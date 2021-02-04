import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Home, AddUser } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/add" component={AddUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

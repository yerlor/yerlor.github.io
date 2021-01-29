import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Data
import data from "./data/data.json";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Views
import Home from './views/Home';
import About from './views/About';
import Work from './views/Work';

// Components
import NavComponent from './components/NavComponent';


function App() {
  return (
    <Router>
      <div>
        <NavComponent data={data} />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

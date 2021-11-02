import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Pages, NotFound } from "./pages";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/pages" component={Pages} exact></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Router>
    );
}

export default App;

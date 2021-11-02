import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Pages, NotFound } from "./pages";
import Helmet from "react-helmet";
import imgHelmet from "../src/images/imageJPG.jpg";

function App() {
    return (
        <Router>
            <Helmet>
                <meta property="og:image" src={imgHelmet} />
                <meta property="og:image" content={imgHelmet} />
            </Helmet>
            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/pages" component={Pages} exact></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Router>
    );
}

export default App;

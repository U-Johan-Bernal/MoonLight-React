import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import ContacPage from "../Paginas/ContactPage";
import HomePage from "../Paginas/HomePage";
import NotFoundPage from "../Paginas/NotFoundPage";



export default function AppRouter() {
  return (
    <Router>
        <Switch>
                <Route path="/Contacto" component={ContacPage}></Route>
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="*" component={NotFoundPage}></Route>
        </Switch>
    </Router>
  );
}


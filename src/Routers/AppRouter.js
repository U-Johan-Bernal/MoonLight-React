import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import AuthPage from "../Paginas/AuthPage";
import ContacPage from "../Paginas/ContactPage";
import HomePage from "../Paginas/HomePage";
import NotFoundPage from "../Paginas/NotFoundPage";



export default function AppRouter() {
  return (
    <Router>
        <Switch>
                <Route path="/Contacto" component={ContacPage}></Route>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/Iniciar_Sesion" component={AuthPage}></Route>
                <Route exact path="*" component={NotFoundPage}></Route>
        </Switch>
    </Router>
  );
}


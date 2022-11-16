import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Landing from "./pages/Landing";
import Profile from "./user/pages/Profile";
import Countries from "./pages/Countries";
import Employees from "./pages/Employees";
import Students from "./pages/Students";
import Contact from "./pages/Contact";

import CountryDetails from "./pages/CountryDetails";
import University from "./pages/University";
import Auth from "./pages/Auth";
function App() {
  return (
    <>
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/auth" exact>
              <Auth />
            </Route>
            <Route path="/profile/:uid" exact>
              <Profile />
            </Route>
            <Route path="/countries" exact>
              <Countries />
            </Route>
            <Route path="/countries/:cid" exact>
              <CountryDetails />
            </Route>
            <Route path="/universities/:cid/:uid" exact>
              <University />
            </Route>
            <Route path="/employees" exact>
              <Employees />
            </Route>
            <Route path="/students" exact>
              <Students />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>

            <Redirect to="/" />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

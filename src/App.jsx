import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Landing from "./pages/Landing";
import Profile from "./user/pages/Profile";
import Countries from "./pages/Countries";
import Contact from "./pages/Contact";
import CountryDetails from "./pages/CountryDetails";
import University from "./pages/University";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import UniversityUpdateForm from "./components/UniversityForm/UniversityUpdateForm";
import CountryUpdateForm from "./components/CountryForm/CountryUpdateForm";
import EmployeeUpdateForm from "./components/EmployeeForm/EmployeeUpdateForm";

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
            <Route path="/cms" exact>
              <Admin />
            </Route>
            <Route path="/cms/universities/:uid" exact>
              <UniversityUpdateForm />
            </Route>
            <Route path="/cms/countries/:cid" exact>
              <CountryUpdateForm />
            </Route>
            <Route path="/cms/employees/:eid" exact>
              <EmployeeUpdateForm />
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

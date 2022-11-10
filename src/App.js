import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Success from './components/RegisterForm/Succes'
import Landing from './pages/Landing'
import Profile from './user/pages/Profile'
import Countries from './pages/Countries'
import Employees from './pages/Employees'
import Students from './pages/Students'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import CountryDetails from './pages/CountryDetails'
import University from './pages/University'
function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <MainNavigation />
          <Switch>
            <Route path='/' exact>
              <Landing />
            </Route>
            <Route path='/profile/:uid' exact>
              <Profile />
            </Route>
            <Route path='/countries' exact>
              <Countries />
            </Route>
            <Route path='/countries/:cid' exact>
              <CountryDetails />
            </Route>
            <Route path='/universities/:uid' exact>
              <University />
            </Route>
            <Route path='/employees' exact>
              <Employees />
            </Route>
            <Route path='/students' exact>
              <Students />
            </Route>
            <Route path='/contact' exact>
              <Contact />
            </Route>
            <Route path='/login' exact>
              <Login />
            </Route>
            <Route path='/register' exact>
              <Register />
            </Route>
            <Route path='/success' exact>
              <Success />
            </Route>
            <Redirect to='/' />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App

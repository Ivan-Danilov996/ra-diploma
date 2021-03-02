import { Fragment } from 'react';
import './App.css';
import Error from './components/Error';
import HomePage from './components/homePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/homePage/header/Header';
import Footer from './components/homePage/footer/Footer';
import Catalog from './components/homePage/main/Catalog';
import banner from './img/banner.jpg'
import About from './components/About';
import Contacts from './components/Contacts';
import Order from './components/Order';
import Cart from './components/Cart';
import CatalogSearch from './components/CatalogSearch';




function App() {

  function withComponent(Component) {
    function newComponent(props) {
      return (
        <Fragment>
          <Header />
          <main className="container">
            <div className="row">
              <div className="col">
                <div className="banner">
                  <img src={banner} className="img-fluid" alt="К весне готовы!" />
                  <h2 className="banner-header">К весне готовы!</h2>
                </div>
                <Component {...props}>
                  <CatalogSearch />
                </Component>
              </div>
            </div>
          </main>
          <Footer />
        </Fragment>
      )
    }
    return newComponent
  }




  const NewCatalog = withComponent(Catalog)
  const NewError = withComponent(Error)
  const NewHomePage = withComponent(HomePage)
  const NewContacts = withComponent(Contacts)
  const NewAbout = withComponent(About)
  const NewOrder = withComponent(Order)
  const NewCart = withComponent(Cart)


  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path='/catalog/:id([0-9]+)' component={NewOrder} />
          <Route path='/cart'>
            <NewCart />
          </Route>
          <Route path='/contacts'>
            <NewContacts />
          </Route>
          <Route path='/about'>
            <NewAbout />
          </Route>
          <Route path='/catalog'>
            <NewCatalog />
          </Route>
          <Route exact path='/'>
            <NewHomePage />
          </Route>
          <Route>
            <NewError />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

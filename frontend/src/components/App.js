import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import Home from '../views/Home';
import ProductDetails from '../views/ProductDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
            <Redirect exact path='/' to='home' />
            <Route path='/home' component={Home} exact />
            <Route path='/product/:id' component={ProductDetails} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

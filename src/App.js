import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';
import Form from './Form';
import NotFound from './NotFound';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/"  component={Welcome}/>
            <Route exact path="/newDocument/:shipper"  component={Form}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import FetchScreen from './components/FetchScreen';
import HistoryScreen from './components/HistoryScreen';
import ProfileScreen from './components/ProfileScreen';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={FetchScreen} />
          <Route path="/history" component={HistoryScreen} />
          <Route path="/profile/:id" component={ProfileScreen} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { GameController } from './components/GameController';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={GameController} />
        <Route path='/game' component={GameController} />
      </Layout>
    );
  }
}

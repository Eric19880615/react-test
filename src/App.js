import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import {GlobalStyle} from './style';
import {GlobalIcon} from './statics/iconfont/iconfont';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <GlobalIcon/>
        <Provider store={store}>
          <Fragment>
            <BrowserRouter>
              <Fragment>
                <Header/>
                <Route path='/' exact component={Home}/>
                <Route path='/write' exact component={Write}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/detail/:id' exact component={Detail}/>
              </Fragment>
            </BrowserRouter>
          </Fragment>
        </Provider>
      </div>
    );
  }
}

export default App;

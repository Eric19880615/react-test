import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Header from './common/header';
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
          <Header/>
        </Provider>
      </div>
    );
  }
}

export default App;

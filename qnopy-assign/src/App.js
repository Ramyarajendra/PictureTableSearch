import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MapComponent from './components/MapComponent';
import SearchModal from './modals/SearchModal';
import {Provider} from 'react-redux';
import store from './store';
import ImagesView from './components/ImagesView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
    <div className="App">
      <Navbar/>
      <SearchBar/>
      <SearchModal/>
      <Switch>
      {/* <MapComponent/> */}
      <Route exact path = '/' component={ImagesView} />
      <Route exact path = '/mapComponent' component={MapComponent} />
      </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;

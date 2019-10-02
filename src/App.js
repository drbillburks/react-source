import React from 'react';
import LogoHeader from './logo-header';
import Navigation from './navigation';
import Home from './home';
import Papers from './papers';
import Podcast from './podcast';
import Testimony from './testimony';

const App=()=> {
  return (
    <div className="container">
      <LogoHeader/>
      <Navigation />
      <Home />
      <Papers />
      <Podcast />
      <Testimony />
    </div>

  );
}

export default App;

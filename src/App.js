import React from 'react';
import './App.css';
import Header from './Header.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Profile from './Profile.jsx'


const App = () => {
  return (
    <div className="grid">
      <Header />
      <Nav />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;

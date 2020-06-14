import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Contact 
        avatar="https://randomuser.me/api/portraits/men/53.jpg"
        name="Julian Carlson"
        status="online"
      />
      <Contact 
        avatar="https://randomuser.me/api/portraits/men/79.jpg"
        name="Kyle Duncan"
        status="offline"
      />
      <Contact 
        avatar="https://randomuser.me/api/portraits/women/43.jpg"
        name="Myrtle Soto"
        status="online"
      />
    </div>
  );
}


export default App;

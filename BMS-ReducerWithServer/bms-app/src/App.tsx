import React from 'react';
//import logo from './logo.svg';
//import './App.css';
// import '../node_modules/react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Components/book.css'
import BookApp from './Components/BookApp';
import Slider from './Components/Slider';
import Scroll from './Components/Scroll';
import Footer from './Components/Footer';




function App() {
  return (
    <div className="App">
      <div>
        <BookApp />
        <Scroll />
      </div>

    </div>
  );
}

export default App;

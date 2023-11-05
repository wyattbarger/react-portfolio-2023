import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Add an import to bring in the necessary component to handle our routing with react-router-dom per the 6.18v documentation noted in the README under sources.
import Header from './components/Header'; // Add an import to access the Header component containing our NavBar elements.

import './App.css'; // Add an import for the App.css file to include necessary styling. 

function App() {

  return (
    <Router>
      {/* Add the Header component to render the header for the portfolio. */}
      <Header />
      <Routes>
        {/* Define the routes that will be accessed by clicking NavBar links. */}
        {/* <Route path='/contact' element={<Contact />}/> */}
        {/* <Route path='/about' element={<About />}/> */}
        {/* <Route path='/portfolio' element={<Portfolio />}/> */}
        {/* <Route path='/resume' element={<Resume />}/> */}
      {/* Add the footer component to render the footer for the portfolio. */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App

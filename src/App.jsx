import { Outlet } from 'react-router-dom';
import Header from './components/Header'; // Add an import to access the Header component containing our NavBar elements.
import MyFooter from './components/Footer'; // Add an import to access the Header component containing our NavBar elements.


import './App.css'; // Add an import for the App.css file to include necessary styling. 

function App() {

  return (
    <main>
      {/* Add the Header component to render the header for the portfolio. */}
      <Header />
        {/* Outlet comment */}
        <Outlet />
      {/* Add the footer component to render the footer for the portfolio. */}
      <MyFooter />
    </main>
  );
}

export default App

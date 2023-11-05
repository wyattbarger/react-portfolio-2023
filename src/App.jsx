import './App.css'

function App() {


  return (
    <>
    {/* Add the Header component to render the header for the portfolio. */}
    <Header />
      {/* Add the Outlet component to render the view of the portfolio the user is currently on. */}
      <Outlet />
    {/* Add the footer component to render the footer for the portfolio. */}
    <Footer />
  </>
  )

}

export default App

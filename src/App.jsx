import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Body from "./components/Body.jsx"
import Title from "./components/Title.jsx"

function App() {

  return (
    <>
      <main className="container-fluid">
        <Navbar/>
        <div>
          <Title/>
          <Body/>
        </div>
        <Footer/>
      </main>
    </>
  )
}

export default App

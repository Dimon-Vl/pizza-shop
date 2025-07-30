import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'
import Hero from './components/header/Hero'
import './app.scss'
function App() {

  return (
    <>
      <div className='container'>
        <Hero />
        <Menu />
      </div>
      <Footer />
    </>
  )
}

export default App

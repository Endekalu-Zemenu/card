import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Info from './components/Info'
import Interests from './components/Interests'

function App() {

  return (
    <div className='w-screen py-20 flex justify-center items-center bg-slate-800'>
      <div className='w-1/4 bg-slate-900 rounded-md text-white'>
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  )
}

export default App

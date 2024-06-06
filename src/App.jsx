import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Info from './components/Info'
import Interests from './components/Interests'

function App() {

  return (
    <div className='w-screen py-20 flex justify-center items-center bg-slate-800'>
      <div className='w-1/4 bg-slate-900 rounded-md'>
        <Info
          img="rounded-t-md"
          h2="text-2xl flex justify-center font-bold p-1 pb-0"
          p1="flex justify-center text-base text-slate-400"
          p2="flex justify-center text-sm" 
          buttons="flex justify-around py-2 px-6"
          email="flex justify-center items-center w-32 gap-3 text-lg h-10 bg-slate-100 text-black"
          linkedin="flex justify-center items-center w-32 gap-3 text-lg bg-sky-700 h-10"
        />

        <About
          className="px-10 py-5"
          h3="text-xl font-medium"
          p="text-slate-400 font-medium" 
        />

        <Interests
          className="px-10 py-5"
          h3="text-xl font-medium"
          p="text-slate-400 font-medium" 
        />

        <Footer
          className="px-20 py-5 bg-slate-950 flex justify-around items-center text-2xl rounded-b-md" 
        />

      </div>
    </div>
  )
}

export default App

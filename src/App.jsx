import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from-black to-pink-800 
      flex flex-col items-center justify-center text-center'>
        <div className='flex items-center justify-center space-x-8 mb-12'>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="w-24 h-24 animate-spin" alt="Vite logo" style={{animationDuration: "0.5s"}}/>
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="w-24 h-24 animate-spin" alt="React logo" style={{animationDuration: "0.5s"}} />
          </a>
        </div>
        <h1 className='text-white text-6x1 font-bold mb-8 animate-spin' alt="React logo" style={{animationDuration: "0.5s"}}>Vite + React</h1>
        <div className="text-sm space-y-6 mb-8">
          <button onClick={() => setCount((count) => count + 1)} className='bg-white rounded-full px-6 py-3 font-semibold hover:bg-pink-300 transition animate-spin'>
            count is {count}
          </button>
          <p className='text-neutral-50 animate-spin'>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-neutral-50 animate-spin">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App

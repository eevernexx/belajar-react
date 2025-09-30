import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Add your login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-red-600 to-blue-900 flex items-center justify-center p-4">
      <div className="flex max-w-4xl w-full bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Left side - Image placeholder */}
        <div className="hidden md:flex md:w-1/2 bg-gray-300 items-center justify-center overflow-hidden">
          <img 
            src="https://cdn-6.motorsport.com/images/amp/0RrXllB0/s1000/world-drivers-champion-max-ver.jpg" 
            alt="Login" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Login form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-center mb-8">Login</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 via-red-600 to-blue-900 hover:from-yellow-500 hover:via-red-700 hover:to-blue-950 text-white font-medium py-2.5 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



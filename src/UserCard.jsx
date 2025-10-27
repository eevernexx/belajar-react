import React from 'react'

function UserCard({ name, email, street, city, isClicked, onButtonClick }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {street}, {city}
      </p>
      <button
        onClick={onButtonClick}
        className={`mt-4 px-4 py-2 rounded font-medium ${
          isClicked 
            ? 'bg-green-500 text-white' 
            : 'bg-gray-500 text-white hover:bg-gray-600'
        }`}
      >
        {isClicked ? 'Tombol sudah diklik' : 'Silakan Klik'}
      </button>
    </div>
  )
}

export default UserCard
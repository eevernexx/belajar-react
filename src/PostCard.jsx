import React, { useState } from 'react';

function PostCard({ id, userId, title, body }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow group hover:shadow-lg hover:scale-105 hover:border hover:border-black hover:bg-pink-100 transition-all flex flex-col h-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 flex-grow">{body.replace(/\n/g, ' ')}</p>
      <button
        onClick={() => setIsClicked(true)}
        className={`mt-4 px-4 py-2 rounded font-medium ${
          isClicked
            ? 'bg-[#b83016] text-white'
            : 'bg-gray-500 text-white'
        } group-hover:bg-red-300 transition-colors`}
      >
        {isClicked ? 'Tombol sudah diklik' : 'Silakan Klik'}
      </button>
    </div>
  );
}

export default PostCard;

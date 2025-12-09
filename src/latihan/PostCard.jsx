import React, { useState } from "react";

function PostCard(props) {
  const { id, userId, title, body, ...rest } = props;
  const [clicked, setClicked] = useState(false);

  // Fungsi handler klik tombol
  function handleClick() {
    setClicked(true);
  }

  return (
    <div className="flex flex-col justify-between h-full bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:border-2 hover:border-gray-400 hover:bg-pink-50">
      <h2 className="text-xl font-bold text-defaultBlack mb-4 text-center">
        {title}
      </h2>
      <p className="text-gray-02 mb-4 text-center text-base leading-relaxed">
        {body}
      </p>

      {/* Menampilkan data tambahan dari rest */}
      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-600 text-sm">
          <span className="font-medium capitalize">{key}:</span> {value}
        </p>
      ))}

      <div className="flex  items-center justify-center mt-4 ">
        <button
          className={`${ 
            clicked ? "bg-special-red2 hover:bg-special-red" : "bg-gray-700 hover:bg-gray-500"
          } w-full py-3 rounded-lg text-white font-semibold transition-all duration-300`}
          onClick={handleClick} 
        >
          {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
        </button>
      </div>
    </div>
  );
}

export default PostCard;
import React, { useState } from "react";
import UserCard from "./UserCard";

function Exercise() {
  const [clickedCards, setClickedCards] = useState({});

  const users = [
    { id: 1, name: "April", email: "april@gmail.com", street: "Jl. Imam Bonjol", city: "Semarang" },
    { id: 2, name: "Yani", email: "yani@gmail.com", street: "Jl. Indraprasta", city: "Ungaran" },
    { id: 3, name: "Safitri", email: "safitri@gmail.com", street: "Jl. Pemuda", city: "Kendal" }
  ];

  const handleCardClick = (id) => {
    setClickedCards(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {users.map(user => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              street={user.street}
              city={user.city}
              isClicked={clickedCards[user.id]}
              onButtonClick={() => handleCardClick(user.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;
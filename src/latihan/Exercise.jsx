import React, { useEffect, useState} from "react";
import PostCard from "./PostCard.jsx";
import { getPost }  from "./Services.jsx";

function Exercise() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(getPost);
    }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 ">
        <h1 className="text-3xl font-bold text-center mb-6 text-special-red">
          Post Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-8xl mx-auto">
          {posts.map((item) => (
            <PostCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;
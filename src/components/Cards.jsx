import React from 'react';
import axios from "axios";
import toast from 'react-hot-toast';

function Cards({ item }) {
  const handleRedirect = () => {
    console.log(item.id);
  
    // Sending the name in the request body (make sure the backend expects it)
    
  
    // Redirect to the item's path
    window.open(item.path, "_self");  // '_blank' ensures it opens in a new tab
  };
  
  return (
    <div className="mt-4 my-3 p-3 place-items-center">
      <div className="card w-80 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text dark:border">
        {/* Further increase the image height */}
        <figure className="h-80 w-full overflow-hidden">
          <img
            src={item.image}
            alt="Card Item"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-sm card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="text-sm text-left justify-center">{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline"> &#x20b9; {item.price}</div>
            <button
              onClick={handleRedirect}
              
              className="cursor-pointer px-2 py-1 rounded-full border-[2px] badge hover:bg-pink-500 hover:text-white"
            >
              Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

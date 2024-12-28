import React, { useEffect } from 'react';
import { useState } from 'react';
import Cards from './Cards';
import axios from "axios";
import { Link } from 'react-router-dom';

function Course() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async() => {
            try {
                const res = await axios.get("https://techshelfbackend-1.onrender.com/book");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error);
                
            }
        }
        getBook();
    }, [])
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-10 items-center justify-center text-center">
            <h1 className="pt-20 text-2xl md:text-4xl">Welcome to the World of 
                <span className="text-pink-500 font-semibold"> Tech Books!</span>
            </h1>
            <p className="mt-6">Dive deep into the ever-evolving universe of technology with our specially curated collection of tech books. Whether you're a budding programmer, an aspiring data scientist, or a seasoned tech enthusiast, you'll find resources here to sharpen your skills and expand your knowledge. From coding and machine learning to cybersecurity and cloud computing, we bring you the best tools to stay ahead in the tech world.</p>
            <p className="mt-6">Your journey of innovation starts here—explore, learn, and shape the future!</p>
            <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
            </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 place-items-center">
            {
                book.map((item) => (
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course

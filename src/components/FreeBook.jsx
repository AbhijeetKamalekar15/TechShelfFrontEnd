import React from 'react';
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { useState, useEffect } from 'react';

function FreeBook() {
    const [book, setBook] = useState([]);
    const [sliderKey, setSliderKey] = useState(0); // Key to force re-render

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("https://techshelfbackend-1.onrender.com/book");
                const data = res.data.filter((data) => data.category === "Free");
                console.log(data);
                setBook(data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);

    useEffect(() => {
        // Force re-render on window resize
        const handleResize = () => {
            setSliderKey((prevKey) => prevKey + 1); // Update key to trigger re-render
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        lazyLoad: 'ondemand', // Lazy load images
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="font-semibold text-xl pb-0">The Wisdom Corner</h1>
                    <p className="mb-4 mt-2">
                        While our primary focus is on tech-related books, we also offer a handpicked
                        collection of must-read books for students. From personal development and
                        productivity to leadership and creativity, these books are designed to inspire
                        and guide you through your academic journey. Whether it’s mastering soft skills
                        or gaining life-changing insights, there’s something here for every curious mind!
                    </p>
                </div>

                <div>
                    <Slider {...settings} key={sliderKey}>
                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default FreeBook;

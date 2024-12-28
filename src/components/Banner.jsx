import React from 'react'
import banner from "../../public/Banner 2.png"
// import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Banner() {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            access_key: "74e62c4b-b697-436d-ae3b-0ca535e4bb0e",
            request_book: data.request_book,
        };
        try {
            await axios.post("https://api.web3forms.com/submit", userInfo);
            toast.success("Request sent successfully");
            reset();
        } catch (error) {
            toast.error("An error occurred");
        }
    };
    return (
        <>
            <div className="mb-6 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className="w-full order-2 md:order-1 md: w-1/2 mt-12 md:mt-24">
                    <div className="space-y-12">
                        <h1 className="text-4xl font-bold">Hello, welcome here to learn something <span className="text-pink-500">new everyday!!!</span></h1>
                        <p className="text-xl font-semibold">
                            Dive into a world of knowledge with our curated collection of top-notch tech books. From programming and algorithms to AI and cybersecurity, we’ve got everything you need to fuel your passion for technology. Explore, learn, and grow—one page at a time. Let's build your tech library today!
                        </p>

                        <div className="">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <textarea
                                    name="request-book"
                                    placeholder="Request Books"
                                    className="dark:text-white bg-transparent resize-none text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                                    {...register("request_book", { required: true })}
                                />
                                {errors.request_book && (
                                    <span className="dark:text-orange-500 text-sm text-red-500 font-semibold">
                                        No books added!
                                    </span>
                                )}
                                <br />
                                <button type="submit" className="mt-6 btn btn-secondary border-none hover:bg-blue-600">Request</button>
                            </form>
                        </div>
                    </div>


                </div>
                <div className=" order-1 w-full md: w-1/2">

                    <img className="w-92 h-92 p-2" src={banner} alt="" />

                </div>
            </div>
        </>
    )
}

export default Banner

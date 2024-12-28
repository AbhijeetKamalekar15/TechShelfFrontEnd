import React from 'react';
import { Link, replace, useLocation, useNavigate } from 'react-router-dom'; // Ensure Link is imported
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
import Navbar from './Navbar';

function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post("https://techshelfbackend-1.onrender.com/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Signup Successfully!');
                    navigate(from, { replace: true });
                    window.location.reload();
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }

            })
    }

    return (
        <>
        <div className='invisible'>
            <Navbar/>
        </div>
        
            <div className="dark:bg-slate-900 flex h-screen items-center justify-center">
                <div id="my_modal_3" className="w-[600px]">
                    <div className="dark:bg-slate-900 modal-box dark:border">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Signup</h3>

                            <div className="mt-4 space-y-2">
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your fullname"
                                    className="bg-transparent w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("fullname", { required: true })}
                                />
                                <br />
                                {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
                            </div>


                            <div className="mt-4 space-y-2">
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-transparent w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("email", {
                                        required: true,
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@walchandsangli\.ac\.in$/,
                                            message: "Please enter a valid email address of type 'abhijeet.kamalekar@walchandsangli.ac.in'"
                                        }
                                    })}
                                />

                                <br />
                                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                            </div>

                            <div className="mt-4 space-y-2">
                                <span>Password</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your password"
                                    className="bg-transparent w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                            </div>
                            <div className="flex justify-around mt-4">
                                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
                                <p>Go to {" "}
                                    <Link to="/" className="underline text-blue-500 cursor-pointer"
                                        onClick={() => document.getElementById("my_modal_3").showModal()}
                                    >Home</Link>
                                </p>

                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Signup;

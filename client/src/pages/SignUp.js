import React, { useEffect, useState } from 'react';
import '../input.css';
import { IoMenu } from "react-icons/io5";
import Footer from '../componenets/Footer';
import { Link } from 'react-router-dom';
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import axios from 'axios';
import { Button, Spinner } from 'flowbite-react';
function SignUp() {
    const [open, setOpen] = useState(false);
    const [username , setusername] = useState('')
    const [password , setPassword] = useState('')
    const [email , setEmail] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('') 
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(null)
    const [equal , setEqual] = useState(true)
    useEffect(()=>{
      if (password != confirmPassword) {
        setEqual(false)
      }else {
        setEqual(true)
      }
    } , [password , confirmPassword])
    const submit = (e )=>{
        e.preventDefault()
        setLoading(true)
        axios.post('http://localhost:8800/api/auth/register' , {username : username , password:password , email : email}).then(
            (result)=>{
                console.log(result.data)
                setLoading(false)
            }
        ).catch(
            (err)=>{
              console.log(err.message)
                setError("try again...!!!")
                setLoading(false)
            }
        )
    }
    return (
        <div>
            <div className="relative bg-cover bg-center bg-nav_bg text-white py-4">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-20 flex justify-between px-4 lg:px-8 py-4 lg:py-6 items-center">
                    <h1 className="text-lg lg:text-xl md:text-2xl font-bold">Bookme.com</h1>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <IoMenu
                            className="text-3xl lg:text-5xl cursor-pointer font-semibold text-[#C49C74]"
                            onClick={() => setOpen(!open)}
                        />

                        {/* Mobile Menu */}
                        <div className={`${open ? 'flex' : 'hidden'} flex-col absolute top-20 right-5 w-[calc(100%-5rem)] mx-3 bg-black bg-opacity-90 rounded-lg z-30 mb-7`}>
                            <Link
                                className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer"
                                onClick={() => setOpen(false)}
                                to={"/"}
                            >
                                Home
                            </Link>
                            <Link
                                className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer"
                                onClick={() => setOpen(false)}
                                to={"/contact"}
                            >
                                Contact
                            </Link>
                            <Link
                                className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer"
                                onClick={() => setOpen(false)}
                                to={"/hotels?place=''"}
                            >
                                Hotels
                            </Link>
                            <Link
                               className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer"
                                onClick={() => setOpen(false)}
                            >
                                Sign in
                            </Link>
                            <Link
                                className="border-t-2 border-white px-4 py-3 hover:bg-white hover:text-black transition duration-300 cursor-pointer"
                                onClick={() => setOpen(false)}
                            >
                                Get the app
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-4 md:space-x-8 text-lg md:text-base items-center">
                        <Link to="/" className="hover:underline">Home</Link>
                        <Link to="/contact" className="hover:underline">Contact</Link>
                        <Link to="/hotels?place=&checkin=&checkout=&guests=0" className="hover:underline">Hotels</Link>
                        <Link to="/signup" className="hover:underline">Sign up</Link>
                        <button className="border border-white px-2 lg:px-3 md:px-4 py-1 md:py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
                            Get the app
                        </button>
                    </div>
                </div>

                {/* Sign In Form */}
                <div className={open ? "relative  flex items-center justify-center min-h-screen mt-60" : "relative z-20 flex items-center justify-center min-h-screen"}>
                    <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md mx-4 lg:mx-8 py-6">
                        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                        <form className="space-y-4 mb-5"  onSubmit={submit}>
                        <div>
                                <label htmlFor="email" className="block text-sm mb-1">email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#C49C74]"
                                    required
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                />
                            </div>
                            <div>
                                <label htmlFor="username" className="block text-sm mb-1">username</label>
                                <input
                                    type="username"
                                    id="username"
                                    placeholder="Enter your username"
                                    className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#C49C74]"
                                    required
                                    onChange={(e)=>{setusername(e.target.value)}}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm mb-1">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className="w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#C49C74]"
                                    required
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm mb-1">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmpassword"
                                    placeholder="Confirm your password"
                                    className={equal ? "w-full px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#C49C74]" : "w-full px-3 py-2 border border-red-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#C49C74]" }
                                    required
                                    onChange={(e)=>{setConfirmPassword(e.target.value)}}
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full py-2 px-4 bg-[#C49C74] text-white rounded-lg hover:bg-[#a68c60] transition duration-300 items-center "
                                disabled={loading}
                            >
                                {loading ? <Spinner className='w-5 mr-2'/> : '' }
                                Register
                            </Button>
                            <p className="text-center text-sm mt-6">
                                have an account? <Link to="/signin" className="text-[#C49C74] hover:underline">signin</Link>
                            </p>
                            {
                                error && <Alert className='my-2 z-50' color="failure" icon={HiInformationCircle}>{error}</Alert>
                            }
                        </form>
                    </div>
                </div>
            </div>
            <div className="z-40 w-full">
                <Footer />
            </div>
        </div>
    );
}

export default SignUp;


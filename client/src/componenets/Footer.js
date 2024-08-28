import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-[#252525] text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center mb-4">
                    <Link href="/" className="mx-2 hover:text-[#C49C74] transition duration-300">Home</Link>
                    <Link href="/" className="mx-2 hover:text-[#C49C74] transition duration-300">About Us</Link>
                    <Link href="/hotels" className="mx-2 hover:text-[#C49C74] transition duration-300">Hotels</Link>
                    <Link to={"/contact"} className="mx-2 hover:text-[#C49C74] transition duration-300">Contact</Link>
                </div>
                <div className="mb-4">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
                    </p>
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C49C74] transition duration-300">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C49C74] transition duration-300">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C49C74] transition duration-300">
                        <FaTwitter size={24} />
                    </a>
                </div>
                <div className="flex justify-center">
                    <a href="#" className="mx-2 hover:text-[#C49C74] transition duration-300">Privacy Policy</a>
                    <a href="#" className="mx-2 hover:text-[#C49C74] transition duration-300">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../componenets/Footer';

const AboutUs = () => {
  return (
    <section className="bg-[#252525] text-white py-16 px-8 lg:px-32 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg lg:text-xl leading-relaxed mb-8">
          Welcome to <span className="text-[#C49C74]">Bookme.com</span>, your trusted partner in finding the perfect stay for your travels. We collaborate with a wide range of hotels across the globe to bring you the best options, whether you're looking for luxury, comfort, or budget-friendly accommodations. Our mission is to make your booking experience seamless, offering a user-friendly platform that allows you to discover and reserve your ideal hotel with ease.
        </p>
        <p className="text-lg lg:text-xl leading-relaxed mb-8">
          At <span className="text-[#C49C74]">Bookme.com</span>, we believe that your journey starts with a great place to stay. That's why we're dedicated to providing you with a diverse selection of hotels, from boutique inns to world-renowned chains. Our team works tirelessly to ensure that you have access to the latest deals, comprehensive hotel information, and reliable customer support.
        </p>
        <p className="text-lg lg:text-xl leading-relaxed mb-8">
          Whether you're planning a weekend getaway or a long-term vacation, we've got you covered. Explore our platform to find your next stay, and let us help you create unforgettable memories.
        </p>
        <Link to="/contact" className="inline-block bg-[#C49C74] text-white py-3 px-6 rounded-full hover:bg-[#b99979] transition duration-300">
          Contact Us
        </Link>
      </div>
      <Footer/>
    </section>
  );
};

export default AboutUs;
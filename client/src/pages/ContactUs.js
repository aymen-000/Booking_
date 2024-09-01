import Footer from '../componenets/Footer';
import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-[#252525] text-white py-16 px-8 lg:px-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg lg:text-xl leading-relaxed mb-8">
          We're here to help you with any questions or concerns you may have. Whether you're looking for assistance with a booking, need more information about our services, or have feedback to share, our team is ready to assist you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Customer Support</h3>
            <p className="text-lg mb-4">Email: <a href="mailto:support@bookme.com" className="text-[#C49C74] hover:underline">support@bookme.com</a></p>
            <p className="text-lg mb-4">Phone: <a href="tel:+123456789" className="text-[#C49C74] hover:underline">+123 456 789</a></p>
            <p className="text-lg">Our support team is available 24/7 to assist you with your needs.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Business Inquiries</h3>
            <p className="text-lg mb-4">Email: <a href="mailto:business@bookme.com" className="text-[#C49C74] hover:underline">business@bookme.com</a></p>
            <p className="text-lg mb-4">Phone: <a href="tel:+987654321" className="text-[#C49C74] hover:underline">+987 654 321</a></p>
            <p className="text-lg">For partnerships, advertising, and other business-related inquiries.</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Visit Us</h3>
          <p className="text-lg mb-4">Address: 123 Bookme Street, Suite 456, Travel City, Country</p>
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0921765443995!2d144.95373631590616!3d-37.81627937975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775d44f167bdf8!2sBookme.com!5e0!3m2!1sen!2sau!4v1600951632955!5m2!1sen!2sau"
            className="w-full h-64 border-none"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default ContactUs;
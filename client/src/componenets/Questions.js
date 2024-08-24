import React from 'react';
import QuestionBlock from './QuestionBlock';

function Questions() {
    const questions = [
        {
            "q" : "What Makes Us Different", 
            "description" : "Our hotel stands out due to our exceptional customer service, unique amenities, and personalized experience tailored to each guest's needs. We offer complimentary shuttle services, a full-service spa, and gourmet dining options that set us apart from other hotels. Our dedicated staff ensures that every stay is memorable and exceeds expectations."
        }, 
        {
            "q"  : "What Time Is Checking Out?",  
            "description" : "Check-out time is typically at 11:00 AM. If you need a later check-out time, please contact the front desk in advance, and we will do our best to accommodate your request based on availability."
        }, 
        {
            "q" : "How Far Is the Nearest Bus Station?", 
            "description" : "The nearest bus station is just a 5-minute walk from our hotel. It provides convenient access to various routes throughout the city, making it easy for you to explore local attractions and destinations."
        }
    ];

    return (
        <div className='flex justify-center bg-[#F0EFEF] '>
            <section className=" my-2  w-2/3 max-sm:w-full max-sm:mx-auto flex justify-center">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h1 className="text-5xl font-semibold bg-gradient-to-r from-[#6562629a]  to-[#C49C74] text-center bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h1>
                    <p className='text-black text-[12px] text-center font-semibold mt-2'>You can book massages 7 days a week from 6 am to 11 pm, including public holidays.</p>
                    <div className="space-y-4 my-2">
                        {questions.map((item, index) => (
                            <QuestionBlock key={index} q={item.q} description={item.description} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Questions;

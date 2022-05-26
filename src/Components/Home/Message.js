import React from 'react';

const Message = () => {
    return (
        <div class="hero w-full">
            <div class="hero-content flex-col lg:flex-row">
                <img className='sm:w-50 lg:w-96' src="https://media.istockphoto.com/vectors/anniversary-celebration-gold-icon-vector-id637019928?b=1&k=20&m=637019928&s=612x612&w=0&h=CFsmC9FqR5v9z3CBi8xEQ_4mJV83xVGGDAtMNBNMiuA=" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='text-left lg:mx-10'>
                    <h1 class="text-5xl font-bold">50 Year Celebration</h1>
                    <p class="py-6">Wishing someone a happy work anniversary is so relevant and meaningful. It’s one of the most fundamental forms of employee appreciation and employee recognition.</p>
                </div>
            </div>
        </div>
    );
};

export default Message;
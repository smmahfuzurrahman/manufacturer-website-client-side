import React from 'react';

const Message = () => {
    return (
        <div class="hero w-full">
            <div class="hero-content flex-col lg:flex-row">
                <img class=" w-56 lg:w-96 rounded-lg shadow-md"  src="https://cdn.dribbble.com/users/942723/screenshots/3960116/media/cdadac36da582dacc4ac77d9ee205b00.png?compress=1&resize=400x300&vertical=top" alt='' />
                <div className='text-left lg:mx-10'>
                    <h1 class="text-5xl font-bold">Our Service</h1>
                    <p class="py-6">We have a dedicated Team who are the expert engineer and ready to provide Best Computer, Laptop service home and office in Bangladesh.We Can provide service to your given location it can be yours at home or office. We make sure quality service to keep the highest satisfaction.</p>
                </div>
            </div>
        </div>
    );
};

export default Message;
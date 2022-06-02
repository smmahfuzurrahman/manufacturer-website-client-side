import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('https://stormy-dusk-99238.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl m-5 font-bold text-sky-600'>Review</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2'>
                {
                    reviews.map(review =>
                        <div>
                            <div class="card card-compact w-4/5 h-full bg-base-100 shadow-xl mx-auto">
                                <figure className=''>
                                    <img className='rounded-full w-36 h-36 p-5' src={review.img} alt="Shoes" />
                                </figure>
                                <div class="card-body text-left">
                                    <h2 class="card-title">{review.name}</h2>
                                    <p>{review.review}</p>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default Review;
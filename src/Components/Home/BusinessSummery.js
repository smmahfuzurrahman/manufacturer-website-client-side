import {faFlag, faHeart} from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummery = () => {
    return (
        <div>
            <h1 className='text-4xl mt-5 mb-5'>Website Overview</h1>
            <div class="stats shadow-xl w-full p-5">
                <div class="start">
                    <div class="text-primary">
                        <FontAwesomeIcon className=' w-16 h-16' icon={faUsers}></FontAwesomeIcon>
                    </div>
                    <div class="stat-value text-primary">25.6K+</div>
                    <div class="font-bold text-xl">Clients</div>
                </div>
                <div class="start">
                    <div class="text-error">
                        <FontAwesomeIcon className=' w-16 h-16' icon={faHeart}></FontAwesomeIcon>
                    </div>
                    <div class="stat-value text-primary">100K+</div>
                    <div class="font-bold text-xl">Review</div>
                </div>
                <div class="start">
                    <div class="text-primary">
                        <FontAwesomeIcon className=' w-16 h-16' icon={faFlag}></FontAwesomeIcon>
                    </div>
                    <div class="stat-value text-primary">32</div>
                    <div class="font-bold text-xl">Country</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;
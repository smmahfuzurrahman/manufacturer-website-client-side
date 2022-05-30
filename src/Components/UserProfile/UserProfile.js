import React from "react";
import './UserProfile.css';
import img from '../../images/about/10861 A.JPG';
const UserProfile = () => {
    return (
        <div class="hero ">
            <div class="hero-content flex-col lg:flex-row mx-auto">
                <img className="w-40 lg:mr-40 lg:mb-40" src={img} alt='' />
                <div>
                    <h1 class="text-5xl font-bold mb-16">My Profile</h1>
                    <p class="py-1 text-xl text-left">Name: S.M. Mahfuzur Rahman <span></span></p>
                    <p class="py-1 text-xl text-left">Email: smmahfuz787@gmail.com<span></span></p>
                    <p class="py-1 text-xl text-left">Phone Number: 01629504411 <span></span></p>
                    <p class="py-1 text-xl text-left">Address: Boropol Road, China House, Chittagong<span></span></p>
                    <h1 class="text-2xl font-bold mt-16">Some of  My Project</h1>
                    <ul className="grid gap-2 text-left">
                        <li><a href="https://story-keeper-371db.web.app/">Project 1</a></li>
                        <li><a href="https://jack-stick.web.app/">Project 2</a></li>
                        <li><a href="https://micro-dot.github.io/Golden-Convention-Center/">Project 3</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default UserProfile;

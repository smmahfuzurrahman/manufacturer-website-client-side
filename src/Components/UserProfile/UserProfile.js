import React from "react";
import './UserProfile.css';
import img from '../../images/about/10861 A.JPG';
const UserProfile = () => {
    return (
        <div className="portfolio-div mt-5">
            <h1 className="text-2xl underline mb-10">My portfolio</h1>
            <div className="about_me_content">
                <div className="my_img">
                    <img src={img} alt="" />
                </div>

                <div className="about_me_info">
                    <div className="educationa_info">
                        <p>
                            Name: <span>S.M. Mahfuzur Rahman</span>
                        </p>
                        <p>
                            Email: <span>smmahfuz787@gmail.com</span>
                        </p>
                        <p>
                            Mobile: <span>01629504411</span>
                        </p>
                        <p>
                            Post Graduation:
                            <span>
                                Southern University Bangladesh (2022)
                            </span>
                        </p>
                    </div>

                    <div className="skills">
                        <h3>Programming Skills</h3>
                        <p>
                            I started my web development journey from the beginning of 2022
                            and learned the following skills:
                        </p>
                        <ul>
                            <li>html</li>
                            <li>css</li>
                            <li>tailwind css</li>
                            <li>bootstrap</li>
                            <li>javascript</li>
                            <li>react js</li>
                            <li>node js</li>
                            <li>mongodb</li>
                            <li>firebase</li>
                            <li>git</li>
                        </ul>
                    </div>

                    <div>
                        <h3>My Project Link</h3>
                        <ul>
                            <li  className="mb-3"><a href="">Project 1</a></li>
                            <li  className="mb-3"><a href=""></a>Project 2</li>
                            <li  className="mb-3"><a href=""></a>Project 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
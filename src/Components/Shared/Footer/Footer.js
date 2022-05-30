import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className='mt-10'>
            <body>
                <footer>
                    <div class="footer-content">
                        <ul class="socials">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                        </ul>
                    </div>
                    <div class="footer-bottom">
                        <p>copyright &copy; <a href="#">Computer Village</a>  </p>
                    </div>

                </footer>
            </body>


        </div>
    );
};

export default Footer;
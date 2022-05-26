import React from 'react';
import img1 from '../../images/box.png';
import img2 from '../../images/house.png';
import img3 from '../../images/question.png';
import shipment from '../../images/shopping.png';
const Shipment = () => {
    return (
        <div>
            <section class="mx-auto mt-10 mb-5 ">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-7">
                    <div class="row-span-3">
                        <img src={shipment} alt="" />
                    </div>
                    <div class="rounded-xl flex shadow-xl bg-white p-6  gap-4 w-full">
                        <img class="w-20 h-20" src={img1} alt="" />
                        <div>
                            <h4 class="text-2xl">Find the Perfect Fit</h4>
                            <p>Everybody is different, which is why we
                                offer styles for every body.</p>
                        </div>
                    </div>

                    <div class="">
                        <div class="flex rounded-xl shadow-xl bg-white p-6 gap-4 w-full">
                            <img class="w-20 h-20" src={img2} alt="" />
                            <div>
                                <h4 class="text-2xl">Contact Our Seller</h4>
                                <p>
                                    One of the many reasons you can shop with peace of mind.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex rounded-xl bg-white shadow-xl p-6 w-full gap-4">
                        <img class="w-20 h-20" src={img3} alt="" />
                        <div>
                            <h4 class="text-2xl">Contact Our Seller</h4>
                            <p>They are here to help you. That's quite literally what we pay them for.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Shipment;
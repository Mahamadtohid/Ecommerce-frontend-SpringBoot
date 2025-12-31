import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@headlessui/react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';


function HomeSectionCarousel() {

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />)
    return (
        <div className=" px-4 lg:px-8">
            <div className="relative p-5 ">
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    infinite
                />

                {/* Right button */}
                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow z-50"
                >
                    <KeyboardArrowLeftIcon className="rotate-180 text-black" />
                </button>

                {/* Left button */}
                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow z-50"
                >
                    <KeyboardArrowLeftIcon className="text-black" />
                </button>
            </div>
        </div>

    );
};

export default HomeSectionCarousel
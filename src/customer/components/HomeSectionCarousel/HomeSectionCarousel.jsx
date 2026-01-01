import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = ({data, sectionName})=> {

    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const syncActiveIndex = (e) => setActiveIndex(e.item);

    const items = data.slice(0,10).map((item, i) => (
        <HomeSectionCard key={i} product={item} />
    ));

    return (
        <div className=" border">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
            <div className="relative p-5">

                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                {/* Right button */}
                {activeIndex !== items.length - 5 &&<button
                    onClick={slideNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow z-50"
                >
                    <KeyboardArrowLeftIcon className="rotate-180 text-black" />
                </button>}

                {/* Left button */}
                {activeIndex !== 0 && (
                    <button
                        onClick={slidePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow z-50"
                    >
                        <KeyboardArrowLeftIcon className="text-black" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel

import Image from 'next/image'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (

    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide className="w-full">

        <div className="my-10 grid grid-cols-2 grid-rows-3 gap-4">

            <div className="h-38 text-left flex bg-white shadow-xl p-6 rounded-md">
            <Image
                src="/img/moods/mood-lg.png"
                alt="Mood"
                width={106}
                height={117}
                className="rounded-md"
            />

            <div className="ml-4">
                <p className="text-xl mb-2 text-black font-semibold">
                    Relax & Wellness
                </p>
                <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
            </div>
            </div>

            <div className="h-38 text-left flex bg-white shadow-xl p-6 rounded-md">
            <Image
                src="/img/moods/mood-lg.png"
                alt="Mood"
                width={106}
                height={117}
                className="rounded-md"
            />

            <div className="ml-4">
                <p className="text-xl mb-2 text-black font-semibold">
                    Young & Fun
                </p>
                <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
            </div>
            </div>

            <div className="h-38 text-left flex bg-white shadow-xl p-6 rounded-md">
            <Image
                src="/img/moods/mood-lg.png"
                alt="Mood"
                width={106}
                height={117}
                className="rounded-md"
            />

            <div className="ml-4">
                <p className="text-xl mb-2 text-black font-semibold">
                Food addicted
                </p>
                <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
            </div>
            </div>

            <div className="h-38 text-left flex bg-white shadow-xl p-6 rounded-md">
            <Image
                src="/img/moods/mood-lg.png"
                alt="Mood"
                width={106}
                height={117}
                className="rounded-md"
            />

            <div className="ml-4">
                <p className="text-xl mb-2 text-black font-semibold">
                    Sport & Avventura
                </p>
                <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
            </div>
            </div>

            <div className="h-38 text-left flex bg-white shadow-xl p-6 rounded-md">
            <Image
                src="/img/moods/mood-lg.png"
                alt="Mood"
                width={106}
                height={117}
                className="rounded-md"
            />

            <div className="ml-4">
                <p className="text-xl mb-2 text-black font-semibold">
                Wine Lover
                </p>
                <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
            </div>
            </div>

            <div className="h-38 text-left flex bg-white shadow-xl p-6 rounded-md">
            <Image
                src="/img/moods/mood-lg.png"
                alt="Mood"
                width={106}
                height={117}
                className="rounded-md"
            />

            <div className="ml-4">
                <p className="text-xl mb-2 text-black font-semibold">
                Storia & Cultura
                </p>
                <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
            </div>
            </div>


        </div>

        </SwiperSlide>
        
        <SwiperSlide className="w-full">

        <div className="my-10 grid grid-cols-2 grid-rows-3 gap-4">

            <div className="h-38 text-left flex bg-white shadow-xl p-6 rounded-md">
            <Image
                src="/img/moods/mood-lg.png"
                alt="Mood"
                width={106}
                height={117}
                className="rounded-md"
            />

            <div className="ml-4">
                <p className="text-xl mb-2 text-black font-semibold">
                    Relax & Wellness
                </p>
                <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
            </div>
            </div>

            <div className="h-38 text-left flex bg-white shadow-xl p-6 rounded-md">
            <Image
                src="/img/moods/mood-lg.png"
                alt="Mood"
                width={106}
                height={117}
                className="rounded-md"
            />

            <div className="ml-4">
                <p className="text-xl mb-2 text-black font-semibold">
                    Young & Fun
                </p>
                <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
            </div>
            </div>

            <div className="h-38 text-left flex bg-white shadow-xl p-6 rounded-md">
            <Image
                src="/img/moods/mood-lg.png"
                alt="Mood"
                width={106}
                height={117}
                className="rounded-md"
            />

            <div className="ml-4">
                <p className="text-xl mb-2 text-black font-semibold">
                Food addicted
                </p>
                <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
            </div>
            </div>

            <div className="h-38 text-left flex bg-white shadow-xl p-6 rounded-md">
            <Image
                src="/img/moods/mood-lg.png"
                alt="Mood"
                width={106}
                height={117}
                className="rounded-md"
            />

            <div className="ml-4">
                <p className="text-xl mb-2 text-black font-semibold">
                    Sport & Avventura
                </p>
                <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
            </div>
            </div>

            <div className="h-38 text-left flex bg-white shadow-xl p-6 rounded-md">
            <Image
                src="/img/moods/mood-lg.png"
                alt="Mood"
                width={106}
                height={117}
                className="rounded-md"
            />

            <div className="ml-4">
                <p className="text-xl mb-2 text-black font-semibold">
                Wine Lover
                </p>
                <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
            </div>
            </div>

            <div className="h-38 text-left flex bg-white shadow-xl p-6 rounded-md">
            <Image
                src="/img/moods/mood-lg.png"
                alt="Mood"
                width={106}
                height={117}
                className="rounded-md"
            />

            <div className="ml-4">
                <p className="text-xl mb-2 text-black font-semibold">
                Storia & Cultura
                </p>
                <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
            </div>
            </div>
        </div>
        </SwiperSlide>
    </Swiper>
  );
};
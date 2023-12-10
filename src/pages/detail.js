import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import SwiperCore, { EffectFlip, Navigation, Pagination } from 'swiper'

SwiperCore.use([EffectFlip, Navigation, Pagination])


const Detail = () => {
  return (
    <>
      <Head>
      <title>Detail page</title>
        <meta name="description" content="" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-32">
          <AnimatedText
            text="Esperienze"
            className="mb-16 !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8"
          />
          

            <Swiper
                navigation
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className="w-screen">
                    <div className="w-screen">
                        <div className="grid gap-4 grid-cols-12 row-span-2 pt-4 px-6">
                            <div className="bg-indigo-600 order-1 row-span-1 h-96 col-span-5 rounded-lg shadow-xl mb-5 lg:mb-0">
                                <img src="/img/gallery/01.jpg" className="rounded-lg object-cover h-full w-full" alt="" />
                            </div>
                            <div className="bg-gray-900 order-2 row-span-1 h-96 col-span-4 rounded-lg shadow-xl mb-5 lg:mb-0">
                                <img src="/img/gallery/02.jpg" className="rounded-lg object-cover h-full w-full" alt="" />
                            </div>
                            <div className="bg-gray-900 order-2 row-span-1 h-96 col-span-3 rounded-lg shadow-xl mb-5 lg:mb-0">
                                <img src="/img/gallery/03.jpg" className="rounded-lg object-cover h-full w-full" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen">
                        <div className="grid gap-4 grid-cols-12 row-span-2 pt-4 px-6">
                            <div className="bg-indigo-600 order-1 row-span-1 h-96 col-span-5 rounded-lg shadow-xl mb-5 lg:mb-0">
                                <img src="/img/gallery/01.jpg" className="rounded-lg object-cover h-full w-full" alt="" />
                            </div>
                            <div className="bg-gray-900 order-2 row-span-1 h-96 col-span-4 rounded-lg shadow-xl mb-5 lg:mb-0">
                                <img src="/img/gallery/02.jpg" className="rounded-lg object-cover h-full w-full" alt="" />
                            </div>
                            <div className="bg-gray-900 order-2 row-span-1 h-96 col-span-3 rounded-lg shadow-xl mb-5 lg:mb-0">
                                <img src="/img/gallery/03.jpg" className="rounded-lg object-cover h-full w-full" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen">
                        <div className="grid gap-4 grid-cols-12 row-span-2 pt-4 px-6">
                            <div className="bg-indigo-600 order-1 row-span-1 h-96 col-span-5 rounded-lg shadow-xl mb-5 lg:mb-0">
                                <img src="/img/gallery/01.jpg" className="rounded-lg object-cover h-full w-full" alt="" />
                            </div>
                            <div className="bg-gray-900 order-2 row-span-1 h-96 col-span-4 rounded-lg shadow-xl mb-5 lg:mb-0">
                                <img src="/img/gallery/02.jpg" className="rounded-lg object-cover h-full w-full" alt="" />
                            </div>
                            <div className="bg-gray-900 order-2 row-span-1 h-96 col-span-3 rounded-lg shadow-xl mb-5 lg:mb-0">
                                <img src="/img/gallery/03.jpg" className="rounded-lg object-cover h-full w-full" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            <div className="px-44">

           

                <div className="container mx-auto my-20 w-full">
                    <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-12 2xl:row-span-2 2xl:pb-8">

                    <div className="lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-7 rounded-lg px-4 mb-5 lg:mb-0">

                        <div className="pr-4">
                        <p className="text-gray-500">
                            Borgata Serra dei turchi, 88, 12064 La Morra (CN)
                        </p>

                        <div className="flex items-center justify-between mt-4 sm:mb-6">
                            <h2 className="text-4xl font-bold text-divinea-black">
                            Vertical tasting of Barolo Gianni Gagliardo
                            </h2>
                            <img src="/img/pin.svg" alt="" />
                        </div>

                        <div className="flex space-x-6 mb-8">

                            <div className="flex">
                            <img src="/img/icons/icon-pin.svg" alt="" />
                            <p className="ml-2 text-gray-500">
                                Colognola Ai Colli (VR)
                            </p>
                            </div>

                            <div className="flex">
                            <img src="/img/icons/icon-time.svg" alt="" />
                            <p className="ml-2 text-gray-500">
                                1 h e 30 min
                            </p>
                            </div>

                            <div className="flex">
                            <img src="/img/icons/icon-globe.svg" alt="" />
                            <p className="ml-2 text-gray-500">
                                English/German/Italian
                            </p>
                            </div>

                        </div>

                        <p className="text-gray-500">
                            The tour of the winery will be the beginning of all our experiences. It is structured in our aging rooms, where our guests will be told the history of our 6 generations and the philosophy of our family. Together we will take a look at the Barolo area from our panoramic terrace to learn from the words of the owner Paolo the characteristics that make it make it unique in the world, like its land and its history. At the end of the tour we will enjoy a vertical of our Barolo Gianni Gagliardo.
                        </p>

                        <hr className="mt-12 mb-6" />

                        <h3 className="text-xl text-divinea-black font-semibold">
                            What is included
                        </h3>

                        <div className="mt-6">

                            <div className="inline-grid grid-cols-3 gap-8">
                            <div>
                                <div className="flex">
                                <img src="/img/icons/icon-check.svg" alt="" />
                                <p className="ml-2 text-gray-500">
                                    Parking
                                </p>
                                </div>
                            </div>
                            <div className="flex">
                                <img src="/img/icons/icon-check.svg" alt="" />
                                <p className="ml-2 text-gray-500">
                                Wine Sales
                                </p>
                            </div>
                            <div className="flex">
                                <img src="/img/icons/icon-check.svg" alt="" />
                                <p className="ml-2 text-gray-500">
                                Wi-fi
                                </p>
                            </div>
                            <div className="flex">
                                <img src="/img/icons/icon-check.svg" alt="" />
                                <p className="ml-2 text-gray-500">
                                Bistrot/Restaurant
                                </p>
                            </div>
                            <div className="flex">
                                <img src="/img/icons/icon-check.svg" alt="" />
                                <p className="ml-2 text-gray-500">
                                Pets allowed
                                </p>
                            </div>
                            <div className="flex">
                                <img src="/img/icons/icon-check.svg" alt="" />
                                <p className="ml-2 text-gray-500">
                                Accept credit card
                                </p>
                            </div>
                            <div className="flex">
                                <img src="/img/icons/icon-check.svg" alt="" />
                                <p className="ml-2 text-gray-500">
                                Overnight stay
                                </p>
                            </div>
                            </div>

                        </div>
                        </div>

                    </div>

                    <div className="lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-5 rounded-lg h-auto pt-7 pb-10 px-10 shadow-2xl mb-5 lg:mb-0">

                        <div className="card-direita">

                        <p className="text-2xl text-divinea-black font-semibold mb-2">
                            € 30.00
                        </p>
                        <p className="text-gray-500 text-sm">
                            € 30.00 / € 00.00
                        </p>
                        <p className="text-gray-500 text-sm">
                            Adults / € Children
                        </p>

                        <hr className="my-6" />

                        <h4 className="text-lg text-divinea-black font-semibold">
                            Schedule your experience
                        </h4>

                        <div className="my-6 w-full bg-gray-100 text-sm text-gray-500 leading-none border-2 border-gray-100 rounded-full inline-flex">
                            <button
                            className="w-2/4 py-3.5 inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 active"
                            >
                            <p className="w-full">
                                In Person
                            </p>
                            </button>
                            <button
                            className="w-2/4 py-3.5 inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2"
                            >
                            <p className="w-full">
                                Online
                            </p>
                            </button>
                        </div>

                        <div className="mb-6 w-96 md:w-full grid grid-cols-5 place-items-center text-center">
                            <div className="bg-divinea-primary-light border border-divinea-primary py-2 px-2 rounded-xl">
                            <p className="w-9 font-semibold text-md text-divinea-black">
                                8
                            </p>
                            <p className="font-nonrmal text-sm text-gray-500">
                                Wed
                            </p>
                            </div>
                            <div className="border border-gray-200 py-2 px-2 rounded-xl">
                            <p className="w-9 font-semibold text-md text-divinea-black">
                                9
                            </p>
                            <p className="font-nonrmal text-sm text-gray-500">
                                Thu
                            </p>
                            </div>
                            <div className="border border-gray-200 py-2 px-2 rounded-xl">
                            <p className="w-9 font-semibold text-md text-divinea-black">
                                10
                            </p>
                            <p className="font-nonrmal text-sm text-gray-500">
                                Fri
                            </p>
                            </div>
                            <div className="border border-gray-200 py-2 px-2 rounded-xl">
                            <p className="w-9 font-semibold text-md text-divinea-black">
                                11
                            </p>
                            <p className="font-nonrmal text-sm text-gray-500">
                                Sat
                            </p>
                            </div>
                            <div className="border border-gray-200 py-2 px-2 rounded-xl">
                            <p className="w-9 font-semibold text-md text-divinea-black">
                                12
                            </p>
                            <p className="font-nonrmal text-sm text-gray-500">
                                Sun
                            </p>
                            </div>
                        </div>

                        <div className="my-8 border flex justify-between border-gray-200 rounded-lg p-4">
                            <label htmlFor="cars">Choose a time:</label>

                            <select name="cars" id="cars">
                            <option value="subaru">Subaru</option>
                            <option value="saab">Saab</option>
                            <option value="toyota">Toyota</option>
                            <option value="mercedes">Mercedes</option>
                            </select>
                        </div>

                        {/*<a href="" className="font-semibold text-white bg-divinea-primary px-8 py-3 mr-6 border rounded-full">*/}
                        {/*  Buy as a visitor*/}
                        {/*</a>*/}

                        <button
                            className="w-full font-semibold text-white bg-divinea-primary inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-full px-4 py-2"
                        >
                            <p className="w-full">
                            Buy as a visitor
                            </p>
                        </button>

                        </div>

                    </div>
                    </div>

                    <hr className="mt-20" />
                </div>

                <div className="container mx-auto w-full">

                    <h3 className="flex text-lg text-divinea-black font-semibold">
                    <img className="mr-2" src="/img/star-purple.svg" alt="" />
                    4.95 (76 reviews)
                    </h3>

                    <div className="sm:w-full lg:w-10/12 xl:w-3/4 lg:px-0  mt-8 mb-20">

                    <div className="sm:block md:flex justify-between">

                        <div>

                        <div className="flex justify-between items-center">
                            <p className="w-32 text-gray-500 text-sm">
                            Cleanliness
                            </p>
                            <img src="/img/line.svg" alt="" />
                            <p className="ml-4 text-divinea-black">
                            4,8
                            </p>
                        </div>

                        <div className="my-4 flex justify-between items-center">
                            <p className="w-32 text-gray-500 text-sm">
                            Accuracy
                            </p>
                            <img src="/img/line.svg" alt="" />
                            <p className="ml-4 text-divinea-black">
                            4,5
                            </p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="w-32 text-gray-500 text-sm">
                            Communication
                            </p>
                            <img src="/img/line.svg" alt="" />
                            <p className="ml-4 text-divinea-black">
                            4,2
                            </p>
                        </div>

                        </div>


                        <div className="lg:pl-20 md:pl-0">

                        <div className="flex justify-between items-center">
                            <p className="w-32 text-gray-500 text-sm">
                            Location
                            </p>
                            <img src="/img/line.svg" alt="" />
                            <p className="ml-4 text-divinea-black">
                            4,8
                            </p>
                        </div>

                        <div className="my-4 flex justify-between items-center">
                            <p className="w-32 text-gray-500 text-sm">
                            Value
                            </p>
                            <img src="/img/line.svg" alt="" />
                            <p className="ml-4 text-divinea-black">
                            4,6
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="w-32 text-gray-500 text-sm">
                            Check-in
                            </p>
                            <img src="/img/line.svg" alt="" />
                            <p className="ml-4 text-divinea-black">
                            4,9
                            </p>
                        </div>

                        </div>


                    </div>

                    </div>


                    <div className="grid grid-cols-2 gap-16 w-9/12">

                    <div className="w-full">
                        <div className="w-56 flex justify-between items-center">
                        <img width="60" src="/img/avatar/01.png" alt="" />
                        <div>
                            <p className="text-divinea-black">
                            Chinaza Akachi
                            </p>
                            <p className="text-gray-500">
                            September 2020
                            </p>
                        </div>
                        </div>
                        <p className="mt-6 text-gray-500">
                        Good place to stay.
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="w-56 flex justify-between items-center">
                        <img width="60" src="/img/avatar/02.png" alt="" />
                        <div>
                            <p className="text-divinea-black">
                            Gaspar Antunes
                            </p>
                            <p className="text-gray-500">
                            September 2020
                            </p>
                        </div>
                        </div>
                        <p className="mt-6 text-gray-500">
                        Cozy plaze, but still confused about this position at gmaps. Thanks
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="w-56 flex justify-between items-center">
                        <img width="60" src="/img/avatar/03.png" alt="" />
                        <div>
                            <p className="text-divinea-black">
                            Daya Chitanis
                            </p>
                            <p className="text-gray-500">
                            September 2020
                            </p>
                        </div>
                        </div>
                        <p className="mt-6 text-gray-500">
                        The place was amazing and it is pretty much close to great restaurants/cafes. A little feedback is for the wifi, as the signal was not so stable so it was kind of painful for us
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="w-56 flex justify-between items-center">
                        <img width="60" src="/img/avatar/04.png" alt="" />
                        <div>
                            <p className="text-divinea-black">
                            Helena Brauer
                            </p>
                            <p className="text-gray-500">
                            September 2020
                            </p>
                        </div>
                        </div>
                        <p className="mt-6 text-gray-500">
                        Cozy plaze, but still confused about this position at gmaps. Thanks
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="w-56 flex justify-between items-center">
                        <img width="60" src="/img/avatar/05.png" alt="" />
                        <div>
                            <p className="text-divinea-black">
                            Jesús Moruga
                            </p>
                            <p className="text-gray-500">
                            September 2020
                            </p>
                        </div>
                        </div>
                        <p className="mt-6 text-gray-500">
                        Something youll miss for sure!
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="w-56 flex justify-between items-center">
                        <img width="60" src="/img/avatar/06.png" alt="" />
                        <div>
                            <p className="text-divinea-black">
                            Francisco Maia
                            </p>
                            <p className="text-gray-500">
                            September 2020
                            </p>
                        </div>
                        </div>
                        <p className="mt-6 text-gray-500">
                        Arsana's place was truly beautiful, so hard to say good bye. Property was exactly as seen on pictures.
                        </p>
                    </div>

                    <a href="" className="w-52 text-center text-divinea-black px-6 py-2 mr-6 border rounded-md">
                        Show all 76 reviews
                    </a>

                    </div>

                    <hr className="my-20" />
                    <div>

                    <h3 className="text-lg text-divinea-black font-semibold">
                        Map
                    </h3>

                    <img className="mt-8 mb-20" src="/img/mapa.jpg" alt="" />

                    </div>

                </div>

            </div>
            
        </Layout>
      </main>
    </>
  );
};

export default Detail

import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import Image from 'next/image'

import SliderOld from '../components/SliderOld'


export default function Home() {
  
  return (
    <>
      <Head>
      <title>Divinea</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start'>
        <Layout className='pt-16 md:pt-16 sm:pt-16'>

              <h1 className="text-center p-10 md:p-20 pb-4 md:pb-5 text-6xl md:text-6xl sm:text-3xl font-semibold">
                Your wine tasting experience
                <div className="mt-4">
                  in an Italian winery.
                </div>
              </h1>
              <p className="text-center text-md md:text-lg px-6 md:px-0 text-divinea-bluegray">
                Prenota la tua degustazione di vino. Vivi unèsperienza Divinea
              </p>


              <div className="mt-24 relative container mx-auto px-32">

                {/* Filtros */}
                {/* <div className="
                      block
                      md:flex
                      justify-between
                      items-center
                      px-6
                      py-4
                      -mt-10
                      absolute
                      z-10
                      inset-x-0
                      shadow-2xl
                      bg-white
                      w-11/12
                      lg:w-10/12
                      mx-auto
                      rounded-lg">
                  <div className="pt-4 pb-0 mr-10 md:pt-0 md:pb-0">
                    <p className="text-divinea-bluegray font-semibold">
                      Search
                    </p>
                    <input type="text" placeholder="Destino..." />
                  </div>
                  <div className="pt-4 pb-0 md:pt-0 md:pb-0">
                    <p className="text-divinea-bluegray font-semibold">
                      Date
                    </p>
                    <input type="text" placeholder="dd/mm/aa" />
                  </div>
                  <div className="pt-4 pb-0 md:pt-0 md:pb-0">
                    <p className="text-divinea-bluegray font-semibold">
                      Category
                    </p>
                    <input type="text" placeholder="Selecione" />
                  </div>
                  <button className="lg:w-44 w-full bg-divinea-primary text-white py-2 my-4 md:my-0 px-6 rounded-full">
                    Search
                  </button>
                </div> */}

                <Image
                  src="/img/hero.jpg"
                  alt="Logo Divinea"
                  width={1920}
                  height="800"
                  className="rounded-md m-auto"
                />

              </div>


              {/*mood*/}
              <h1 className="text-center p-20 pb-5 text-4xl text-divinea-black font-semibold">
                What kind of experience are you looking for?
              </h1>
              <p className="w-7/12 mx-auto text-center text-md text-divinea-bluegray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
              </p>

              <div className="max-w-5xl mx-auto mt-10 mb-0">
                <SliderOld />
              </div>

              <div className="max-w-6xl mx-auto">
                {/* <Cards /> */}
              </div>

              {/*wineries*/}
              <div className="bg-black pt-24 pb-24 px-0 relative block m-auto w-full h-200">

                <div className="container px-32 mx-auto flex items-baseline justify-between pb-12">
                  <h3 className="text-white font-semibold text-4xl">
                    Destinazioni popolari
                  </h3>

                  <div className="flex items-center">
                    <a className="text-white" href="">
                      Vedi tutte le offerte
                    </a>
                    <img className="ml-4" src="/img/arrow-ff.svg" alt="" />
                  </div>

                </div>

                <div className="sticky pl-6 pb-5 space-x-6 top-0 flex justify-between overflow-hidden overflow-x-scroll items-center">


                  <img className="bg-contain bg-center bg-no-repeat w1/5 rounded-2xl" src="/img/wineries/01.png" alt="" />
                  <img className="bg-contain bg-center bg-no-repeat w1/5 rounded-2xl" src="/img/wineries/02.png" alt="" />
                  <img className="bg-contain bg-center bg-no-repeat w1/5 rounded-2xl" src="/img/wineries/01.png" alt="" />
                  <img className="bg-contain bg-center bg-no-repeat w1/5 rounded-2xl" src="/img/wineries/02.png" alt="" />
                  <img className="bg-contain bg-center bg-no-repeat w1/5 rounded-2xl" src="/img/wineries/01.png" alt="" />
                  <img className="bg-contain bg-center bg-no-repeat w1/5 rounded-2xl" src="/img/wineries/02.png" alt="" />
                  <img className="bg-contain bg-center bg-no-repeat w1/5 rounded-2xl" src="/img/wineries/01.png" alt="" />
                  <img className="pr-6 bg-contain bg-center bg-no-repeat w1/5 rounded-2xl" src="/img/wineries/02.png" alt="" />

                </div>

              </div>

              {/*experiences*/}
              <h1 className="text-center p-20 pb-5 text-4xl text-divinea-black font-semibold">
                Esperienze selezionate per te
              </h1>
              <p className="w-7/12 mx-auto text-center text-md text-divinea-bluegray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
              </p>

              <div className="max-w-[1720px] sm:container mx-auto mt-24 mb-20 px-40 sm:px-10 md:px-10 lg:px-2">

                {/*experiences grid*/}
                <div className="max-w-full mt-20 px-4 grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">

                  {/*grid item*/}
                  <div className="shadow-xl rounded-3xl">
                    <div className="relative rounded-3xl overflow-hidden">

                      <div className="absolute w-full flex justify-between z-10 p-5">
                        <div>
                          <a href="" className="bg-white rounded-xl uppercase text-sm font-semibold py-1.5 px-8 absolute z-10">
                            Tasting
                          </a>
                        </div>
                        <div>
                          <img className="w-8" src="/img/heart.svg" alt="" />
                        </div>
                      </div>

                      <div className="relative overflow-hidden pb-44">
                        <img
                          className="absolute h-full w-full object-cover object-center"
                          src="/img/experiences/img01.jpg"
                          alt=""
                        />
                      </div>
                      <div className="relative bg-white overflow-hidden">
                        <div className="pt-6 pb-6 px-6">
                          <h3 className="h-20 min-h-full text-divinea-black text-2xl font-bold">
                            Wine & Food Experience
                          </h3>
                          <p className="leading-7 mt-4 text-gray-400">
                            Carmignano (PO) Tenuta di Capezzana
                          </p>
                          <div className="mt-10 flex justify-between items-center">
                            <div className="flex items-center">
                              <img
                                src="/img/star.svg"
                                alt=""
                                className="w-5"
                              />
                              <p className="ml-2 text-gray-400">
                                <strong className="text-divinea-black">4.95</strong> (76)
                              </p>
                            </div>
                            <div className="flex items-center">
                              <p className="mr-1 text-right text-divinea-black">
                                <strong>€ 55,00</strong> / a persona
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*grid item*/}
                  <div className="shadow-xl rounded-3xl">
                    <div className="relative rounded-3xl overflow-hidden">

                      <div className="absolute w-full flex justify-between z-10 p-5">
                        <div>
                          <a href="" className="bg-white rounded-xl uppercase text-sm font-semibold py-1.5 px-8 absolute z-10">
                            Exclusive
                          </a>
                        </div>
                        <div>
                          <img className="w-8" src="/img/heart.svg" alt="" />
                        </div>
                      </div>

                      <div className="relative overflow-hidden pb-44">
                        <img
                          className="absolute h-full w-full object-cover object-center"
                          src="/img/experiences/img02.jpg"
                          alt=""
                        />
                      </div>
                      <div className="relative bg-white overflow-hidden">
                        <div className="pt-6 pb-6 px-6">
                          <h3 className="h-20 min-h-full text-divinea-black text-2xl font-bold">
                            Guided tour and tasting – Italian
                          </h3>
                          <p className="leading-7 mt-4 text-gray-400">
                            Montagna (BZ)
                          </p>
                          <div className="mt-10 flex justify-between items-center">
                            <div className="flex items-center">
                              <img
                                src="/img/star.svg"
                                alt=""
                                className="w-5"
                              />
                              <p className="ml-2 text-gray-400">
                                <strong className="text-divinea-black">4.33</strong> (115)
                              </p>
                            </div>
                            <div className="flex items-center">
                              <p className="mr-1 text-right text-divinea-black">
                                <strong>€ 70,00</strong> / a persona
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*grid item*/}
                  <div className="shadow-xl rounded-3xl">
                    <div className="relative rounded-3xl overflow-hidden">

                      <div className="absolute w-full flex justify-between z-10 p-5">
                        <div>
                          <a href="" className="bg-white rounded-xl uppercase text-sm font-semibold py-1.5 px-8 absolute z-10">
                            Exclusive
                          </a>
                        </div>
                        <div>
                          <img className="w-8" src="/img/heart.svg" alt="" />
                        </div>
                      </div>

                      <div className="relative overflow-hidden pb-44">
                        <img
                          className="absolute h-full w-full object-cover object-center"
                          src="/img/experiences/img03.jpg"
                          alt=""
                        />
                      </div>
                      <div className="relative bg-white overflow-hidden">
                        <div className="pt-6 pb-6 px-6">
                          <h3 className="h-20 min-h-full text-divinea-black text-2xl font-bold">
                            Vertical tasting of Barolo Gianni Gagliardo
                          </h3>
                          <p className="leading-7 mt-4 text-gray-400">
                            Poderi Gianni Gagliardo
                          </p>
                          <div className="mt-10 flex justify-between items-center">
                            <div className="flex items-center">
                              <img
                                src="/img/star.svg"
                                alt=""
                                className="w-5"
                              />
                              <p className="ml-2 text-gray-400">
                                <strong className="text-divinea-black">4.95</strong> (76)
                              </p>
                            </div>
                            <div className="flex items-center">
                              <p className="mr-1 text-right text-divinea-black">
                                <strong>€ 55,00</strong> / a persona
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*grid item*/}
                  <div className="shadow-xl rounded-3xl">
                    <div className="relative rounded-3xl overflow-hidden">

                      <div className="absolute w-full flex justify-between z-10 p-5">
                        <div>
                          <a href="" className="bg-white rounded-xl uppercase text-sm font-semibold py-1.5 px-8 absolute z-10">
                            Online
                          </a>
                        </div>
                        <div>
                          <img className="w-8" src="/img/heart.svg" alt="" />
                        </div>
                      </div>

                      <div className="relative overflow-hidden pb-44">
                        <img
                          className="absolute h-full w-full object-cover object-center"
                          src="/img/experiences/img04.jpg"
                          alt=""
                        />
                      </div>
                      <div className="relative bg-white overflow-hidden">
                        <div className="pt-6 pb-6 px-6">
                          <h3 className="h-20 min-h-full text-divinea-black text-2xl font-bold">
                            Discovery
                          </h3>
                          <p className="leading-7 mt-4 text-gray-400">
                            Carmignano (PO) Tenuta di Capezzana
                          </p>
                          <div className="mt-10 flex justify-between items-center">
                            <div className="flex items-center">
                              <img
                                src="/img/star.svg"
                                alt=""
                                className="w-5"
                              />
                              <p className="ml-2 text-gray-400">
                                <strong className="text-divinea-black">4.95</strong> (76)
                              </p>
                            </div>
                            <div className="flex items-center">
                              <p className="mr-1 text-right text-divinea-black">
                                <strong>€ 55,00</strong> / a persona
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*grid item*/}
                  <div className="shadow-xl rounded-3xl">
                    <div className="relative rounded-3xl overflow-hidden">

                      <div className="absolute w-full flex justify-between z-10 p-5">
                        <div>
                          <a href="" className="bg-white rounded-xl uppercase text-sm font-semibold py-1.5 px-8 absolute z-10">
                            Online
                          </a>
                        </div>
                        <div>
                          <img className="w-8" src="/img/heart.svg" alt="" />
                        </div>
                      </div>

                      <div className="relative overflow-hidden pb-44">
                        <img
                          className="absolute h-full w-full object-cover object-center"
                          src="/img/experiences/img05.jpg"
                          alt=""
                        />
                      </div>
                      <div className="relative bg-white overflow-hidden">
                        <div className="pt-6 pb-6 px-6">
                          <h3 className="h-20 min-h-full text-divinea-black text-2xl font-bold">
                            Between Fashion, Wine and Motors
                          </h3>
                          <p className="leading-7 mt-4 text-gray-400">
                            Colle Manora
                          </p>
                          <div className="mt-10 flex justify-between items-center">
                            <div className="flex items-center">
                              <img
                                src="/img/star.svg"
                                alt=""
                                className="w-5"
                              />
                              <p className="ml-2 text-gray-400">
                                <strong className="text-divinea-black">4.42</strong> (8)
                              </p>
                            </div>
                            <div className="flex items-center">
                              <p className="mr-1 text-right text-divinea-black">
                                <strong>€ 32,00</strong> / a persona
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*grid item*/}
                  <div className="shadow-xl rounded-3xl">
                    <div className="relative rounded-3xl overflow-hidden">

                      <div className="absolute w-full flex justify-between z-10 p-5">
                        <div>
                          <a href="" className="bg-white rounded-xl uppercase text-sm font-semibold py-1.5 px-8 absolute z-10">
                            Online
                          </a>
                        </div>
                        <div>
                          <img className="w-8" src="/img/heart.svg" alt="" />
                        </div>
                      </div>

                      <div className="relative overflow-hidden pb-44">
                        <img
                          className="absolute h-full w-full object-cover object-center"
                          src="/img/experiences/img06.jpg"
                          alt=""
                        />
                      </div>
                      <div className="relative bg-white overflow-hidden">
                        <div className="pt-6 pb-6 px-6">
                          <h3 className="h-20 min-h-full text-divinea-black text-2xl font-bold">
                            Trentodoc Monfort
                          </h3>
                          <p className="leading-7 mt-4 text-gray-400">
                            Cantine Monfort
                          </p>
                          <div className="mt-10 flex justify-between items-center">
                            <div className="flex items-center">
                              <img
                                src="/img/star.svg"
                                alt=""
                                className="w-5"
                              />
                              <p className="ml-2 text-gray-400">
                                <strong className="text-divinea-black">4.66</strong> (12)
                              </p>
                            </div>
                            <div className="flex items-center">
                              <p className="mr-1 text-right text-divinea-black">
                                <strong>€ 26,00</strong> / a persona
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
              {/*experiences end*/}

              {/*see all button*/}
              <div className="text-center w-full pt-0 pb-20">
                <a href="" className="text-divinea-primary px-20 py-2 mr-6 border rounded-md">
                  See all
                </a>
              </div>

              {/*newsletter*/}
              <div className="bg-black bg-cover bg-center h-80 flex md:block items-center justify-center">

                <div className="px-20 md:pt-12 ">
                  <h3 className="text-4xl sm:text-2xl text-white font-semibold">
                    Join Our Newsletter
                  </h3>
                  <p className="text-md text-white mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>

                <div className="m-4 w-[320px] ml-20 mr-40 flex justify-between py-1 rounded-3xl border bg-white border-gray-200">
                  <input
                    className="rounded-3xl py-2 pl-2 ml-4 mr-0 text-gray-800 bg-white"
                    placeholder="your@mail.com" />
                  <button
                    className="px-8 mr-0 rounded-3xl bg-primary text-white font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
        </Layout>
      </main>
    </>
  )
}

import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.min.css";

import { useStateContext } from '../context/Context'

SwiperCore.use([Pagination, Autoplay]);


const Service = () => {
  const { currentColor, serviceData, t } = useStateContext();


  return (
    <div className='activeSection w-screen min-h-screen mx-auto md:w-4/5 flex flex-col pt-10'>
      <div>
        <div className='relative mb-10'>
          <h3 className='text-xl absolute left-1/2 -translate-x-1/2 z-10 '>{t("skills")}</h3>
          <span style={{ background: currentColor }} className='left-1/2 -top-1.5 -translate-x-1/2 rounded-full absolute w-8 h-8'></span>
        </div>

        <h1 className='text-2xl md:text-4xl my-5 text-center font-titr ltr:font-summer'>
          {t("seeSkills")}
        </h1>
        <div style={{ background: currentColor }} className='w-3/5 md:w-2/5 mx-auto h-1'>
          <div className="relative bg-main-bg dark:bg-main-dark-bg w-10 h-1 left-2/4 -translate-x-2/4 rtl:-left-2/4 rtl:translate-x-2/4">
            <span className="absolute rounded-full rtl:mx-0 rtl:left-2 w-2 h-1 mx-2 bg-black dark:bg-white"></span>
            <span className="absolute rounded-full rtl:mx-0 rtl:left-6 left-4 w-2 h-1 mx-2 bg-black dark:bg-white"></span>
          </div>
        </div>


      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        style={{ direction: "ltr" }}
        className='mt-20 h-72 w-4/5 md:w-full'
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        breakpoints={{
          360: {
            width: 360,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          900: {
            width: 900,
            slidesPerView: 3,
          },
          1100: {
            width: 1100,
            slidesPerView: 4,
          }
        }}
      >
        {serviceData.map(({ icon, skill, description }) => (
          <SwiperSlide key={skill}>
            <div
              className='item border-black dark:border-white border-2 p-4 w-10/12 md:w-60 h-4/5 flex flex-col gap-y-4'>
              <style>
                {
                  `.item:hover {
                  background: ${currentColor} !important;}`
                }
                {
                  `.swiper-pagination-bullet {
                    background-color: transparent;
                    border:${localStorage.getItem("ThemeMode") === "dark" ? "1px solid white" : "1px solid black"} ;
                    opacity:1;
                    padding:.3rem;
                  }`
                }
                {
                  `.swiper-pagination-bullet-active {
                    background-color: ${currentColor} !important;
                    box-shadow:0 0 .5rem ${currentColor} , 0 0 1rem ${currentColor};
                  }`
                }
                {
                  `.item:hover .description {
                    color:lightgray;
                  }`
                }
              </style>

              <h2 className="text-xl font-semibold">{icon}</h2>
              <h3 className='text-xl font-summer'>{skill}</h3>
              <p style={{ direction: localStorage.getItem("currentLang") === "fa" ? "rtl" : "ltr" }} className='description text-sm text-gray-400 rtl:text-right'>{description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


    </div >
  )
}

export default Service
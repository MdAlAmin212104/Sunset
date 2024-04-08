import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';



const Banner = () => {


      return (
      
            <>
                  <Swiper
                        style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                        }}
                        pagination={{
                              clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper h-[600px] my-8"
                        >
                        
                        <SwiperSlide>

                        <img
                              src="https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=600"
                              loading="lazy"
                              className='w-full'
                        />
                              
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img
                              src="https://swiperjs.com/demos/images/nature-3.jpg"
                              loading="lazy"
                              className='w-full'
                        />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img
                              src="https://swiperjs.com/demos/images/nature-4.jpg"
                              loading="lazy"
                              className='w-full'
                        />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </SwiperSlide>
                        
                        
                        <SwiperSlide>
                        <img
                              src="https://swiperjs.com/demos/images/nature-7.jpg"
                              loading="lazy"
                              className='w-full'
                        />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img
                              src="https://swiperjs.com/demos/images/nature-8.jpg"
                              loading="lazy"
                              className='w-full'
                        />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img
                              src="https://swiperjs.com/demos/images/nature-2.jpg"
                              loading="lazy"
                              className='w-full position-center'
                        />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </SwiperSlide>
                  </Swiper>
            </>
      );
};

export default Banner;
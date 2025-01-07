import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import Heading from "../../components/Heading";

const Order = () => {
  return (
    <section className="pt-1">
      <Heading heading='From Our Menu' title='From 11.00am to 10.00pm' />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <p className="text-3xl uppercase text-center absolute bottom-4 translate-x-1/2 text-white z-50">
            Salad
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <p className="text-3xl uppercase text-center absolute bottom-4 translate-x-1/2 text-white z-50">
            Pizza
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <p className="text-3xl uppercase text-center absolute bottom-4 translate-x-1/2 text-white z-50">
            Soup
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <p className="text-3xl uppercase text-center absolute bottom-4 translate-x-1/2 text-white z-50">
            Cake
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <p className="text-3xl uppercase text-center absolute bottom-4 translate-x-1/2 text-white z-50">
            Salad
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Order;

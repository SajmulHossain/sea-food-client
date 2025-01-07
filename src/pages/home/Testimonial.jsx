import Heading from "../../components/Heading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('reviews.json')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])

  return (
    <section>
      <Heading heading="Testimonial" title="What our client says" />

      <div>
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="text-center mb-6">
                  <Rating
                    className="text-2xl space-x-2"
                    initialRating={review.rating}
                    emptySymbol={<FaStar className="text-gray-400" />}
                    fullSymbol={<FaStar className="text-yellow-600" />}
                  />
                </div>
                <div className="flex justify-center">
                  <FaQuoteLeft size={50} />
                </div>

                <div className="text-center mt-6 w-8/12 mx-auto">
                  <p>{review.details}</p>
                  <h3 className="mt-2 text-yellow-600 font-semibold">{review.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default Testimonial;
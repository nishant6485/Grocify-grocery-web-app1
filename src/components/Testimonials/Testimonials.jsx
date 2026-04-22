import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Customer1 from "../../assets/images/customer1.jpg";
import Customer2 from "../../assets/images/customer2.jpg";
import Customer3 from "../../assets/images/customer3.jpg";
import Customer4 from "../../assets/images/customer4.jpg";
import Customer5 from "../../assets/images/customer5.jpg";

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 4,
    feedback:
      "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 5,
    feedback:
      "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 4,
    feedback:
      "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 5,
    feedback:
      "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: Customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 5,
    feedback:
      "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: Customer5,
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <Heading highlight="customers" heading="saying" />

          <div className="flex gap-3 justify-center sm:justify-end">
            <button
              aria-label="previous"
              className="custom-prev rounded-lg bg-zinc-100 w-10 h-10 md:w-11 md:h-11 text-zinc-800 flex justify-center items-center text-xl md:text-2xl hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer transition-colors"
            >
              <IoIosArrowBack />
            </button>
            <button
              aria-label="next"
              className="custom-next rounded-lg bg-zinc-100 w-10 h-10 md:w-11 md:h-11 text-zinc-800 flex justify-center items-center text-xl md:text-2xl hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer transition-colors"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-10">
          <Swiper
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            loop
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {review.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!h-auto bg-zinc-100 rounded-xl p-6 md:p-8 flex flex-col justify-between min-h-[300px]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full outline-2 outline-orange-500 outline-offset-4 overflow-hidden bg-zinc-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-bold text-base md:text-lg lg:text-xl truncate">
                      {item.name}
                    </h5>
                    <p className="text-sm md:text-base text-zinc-600 truncate">
                      {item.profession}
                    </p>
                    <span className="flex mt-2 text-yellow-400 text-sm md:text-base gap-1">
                      {Array.from({ length: item.rating }, (_, i) => (
                        <FaStar key={i} />
                      ))}
                    </span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-zinc-600 mt-6 md:mt-8 line-clamp-5">
                  {item.feedback}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

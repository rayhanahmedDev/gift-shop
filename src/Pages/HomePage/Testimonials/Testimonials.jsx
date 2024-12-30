import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import testi from "../../../assets/1724854304099.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export const Testimonials = () => {
  return (
    <section>
      <div className="mb-8 mt-16">
        <h2 className="text-4xl font-semibold text-center">Reviews From The Clients</h2>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {/* 1st review */}
        <SwiperSlide>
          <div className="flex flex-col text-center items-center mx-24 my-16">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={testi} />
              </div>
            </div>
            {/* rating section start*/}
            <div className="rating my-5">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
            </div>
            {/* rating section end */}

            <p>“At Cheli, we believe that life is too short to resist the allure of delectable treats. Our shelves are brimming“</p>
          </div>
        </SwiperSlide>
        {/* 2nd review */}
        <SwiperSlide>
          <div className="flex flex-col text-center items-center mx-24 my-16">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={testi} />
              </div>
            </div>
            {/* rating section start*/}
            <div className="rating my-5">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
            </div>
            {/* rating section end */}

            <p>“At Cheli, we believe that life is too short to resist the allure of delectable treats. Our shelves are brimming“</p>
          </div>
        </SwiperSlide>
        {/* 3rd review */}
        <SwiperSlide>
          <div className="flex flex-col text-center items-center mx-24 my-16">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={testi} />
              </div>
            </div>
            {/* rating section start*/}
            <div className="rating my-5">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
            </div>
            {/* rating section end */}

            <p>“At Cheli, we believe that life is too short to resist the allure of delectable treats. Our shelves are brimming“</p>
          </div>
        </SwiperSlide>
        {/* 4th review */}
        <SwiperSlide>
          <div className="flex flex-col text-center items-center mx-24 my-16">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={testi} />
              </div>
            </div>
            {/* rating section start*/}
            <div className="rating my-5">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
            </div>
            {/* rating section end */}

            <p>“At Cheli, we believe that life is too short to resist the allure of delectable treats. Our shelves are brimming“</p>
          </div>
        </SwiperSlide>
        {/* 5th review */}
        <SwiperSlide>
          <div className="flex flex-col text-center items-center mx-24 my-16">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={testi} />
              </div>
            </div>
            {/* rating section start*/}
            <div className="rating my-5">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#A31352]"
              />
            </div>
            {/* rating section end */}

            <p>“At Cheli, we believe that life is too short to resist the allure of delectable treats. Our shelves are brimming“</p>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
};

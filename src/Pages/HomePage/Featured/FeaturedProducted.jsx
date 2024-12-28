import { useState, useEffect } from "react";
import Featured from "../../../component/Navber/Featured";
import image from "../../../assets/featured-1-565x640.png";

export default function FeaturedProducted() {
  const [featuredData, setFeatured] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  return (
    <div className="my-16">
      <div className="text-center">
        <h2 className="text-4xl font-semibold">Shop The Featured Products</h2>
        <p className="mt-4 text-[#01162DAB] text-[16px]">
          {" "}
          Whether you&apos;re looking to treat yourself or surprise someone
          special, makes every occasion memorable.
        </p>
      </div>

      {/* featured products */}
      <div className="mt-12 md:mx-8 flex gap-8">
        {/* top featured producted */}
        <div
          className="bg-cover lg:h-[652px] md:w-2/6 bg-center relative"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <h3 className="bg-[#A31352] text-white absolute top-5 left-5 py-2 px-3">
            Top Featured
          </h3>
          <div className="absolute bottom-7 left-7">
            <h2 className="text-[18px] uppercase font-semibold tracking-[1.08px]">
              Pink Papaercut Gift Box
            </h2>
            {/* rating section start */}
            <div className="rating rating-sm mt-3">
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
            <p className="text-[18px] mt-2">$30.50</p>
          </div>
        </div>
        {/* others products */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:w-4/6">
          {featuredData.map((featured) => (
            <Featured key={featured.id} featured={featured}></Featured>
          ))}
        </div>
      </div>
    </div>
  );
}

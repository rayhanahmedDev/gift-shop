import { BsCart2 } from "react-icons/bs";

export default function Featured({ featured }) {
  const { heading, image, price } = featured;
  return (
    <div className="flex items-center gap-6 card-side bg-base-100 transform  transition-all duration-500 py-4 px-4 border border-gray-200 hover:shadow-lg">
      <figure>
        <img className="w-[148px] h-[163px]" src={image} alt="Movie" />
      </figure>
      <div style={{ width: "calc(100% - 168px)" }}>
        <h2 className="text-[16px] tracking-[0.96px] leading-6 font-semibold uppercase">
          {heading}
        </h2>
        <p className="mt-2">${price}</p>
        <div className="flex justify-end">
          <button className="bg-[#7d65ae] mt-3 text-white py-3 px-3 rounded-full">
            <BsCart2 className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

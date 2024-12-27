import image from '../../../assets/material-gift-wrapping-presents-arranged-side-background.jpg'

export default function Banner() {
  return (
    <div
      className="md:bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="md:w-[58%] pt-28 text-[#24141B] space-y-6 ml-14">
        <h1 className="lg:text-[66px] lg:leading-[80px] text-4xl font-black">
        Choose The Perfect Gift From Gift Shop
        </h1>
        <p className="text-[#01162DAB] text-xl pb-3">
        Welcome to our vibrant and enchanting lipstick store! Step into a world of color and elegance where beauty takes center stage.
        </p>
        <button className="min-h-12 rounded-full w-[150px] bg-[#A31352] border-none text-white">
          Shop Now
        </button>
      </div>
    </div>
  );
}

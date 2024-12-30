import Banner from "../Banner/Banner";
import FeaturedProducted from "../Featured/FeaturedProducted";
import { Testimonials } from "../Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducted></FeaturedProducted>
      <div className="max-w-5xl mx-auto">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
}

import Banner from "../Banner/Banner";
import { Faqs } from "../Faqs/Faqs";
import FeaturedProducted from "../Featured/FeaturedProducted";
import { Testimonials } from "../Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducted></FeaturedProducted>
      <div className="max-w-6xl mx-auto">
        <Testimonials></Testimonials>
      </div>
      <div className="max-w-4xl mx-auto">
        <Faqs></Faqs>
      </div>
    </div>
  );
}

import Features from "@/Components/Home/features";
import Hero from "@/Components/Home/Hero";
import Slider from "@/Components/Home/slider";
import Tools from "@/Components/Home/Tool";
// import Tool from "@/Components/Home/Tools";
export default function Home() {
  return (
    <div>
      <Hero />
      <Tools />
      <Slider />
      <Features />
    </div>
  );
}

import HeroSlider from "../HeroSlider";
import HeroSidebar from "../HeroSidebar";
const Hero = () => {
  return (
    <div className={`hero`}>
      <div className="xl:container">
        <div className="flex w-full max-h-screen">
          <div className="hidden w-[20%] lg:block">
            <HeroSidebar />
          </div>
          <div className="w-full lg:w-[80%] h-full">
            <HeroSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Hero from "../components/Hero";
import TourCards from "../components/TourCards";

const MainPage = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <Hero />
      <TourCards limit={4} />
    </div>
  );
};

export default MainPage;

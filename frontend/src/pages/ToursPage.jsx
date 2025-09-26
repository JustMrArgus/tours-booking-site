import TourCards from "../components/TourCards";

const ToursPage = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <h2 className="font-lato text-5xl text-center pt-6 opacity-70">
        All Our Tours
      </h2>
      <TourCards />
    </div>
  );
};

export default ToursPage;

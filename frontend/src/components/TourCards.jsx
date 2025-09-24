import { useEffect, useState } from "react";
import TourCard from "./TourCard";

const TourCards = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("/api/tours?limit=4")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTours(result.data.data);
      })
      .catch(() => console.log("Something went wrong while fetching..."));
  }, []);

  return (
    <main className="py-10">
      <div>
        <div className="flex gap-10 flex-wrap justify-center items-center min-h-[50vh]">
          {tours.map((tour) => (
            <TourCard
              key={tour._id}
              name={tour.name}
              duration={tour.duration}
              difficulty={tour.difficulty}
              summary={tour.summary}
              startLocation={tour.startLocation.description}
              startDate={tour.startDates[0]}
              stops={tour.locations.length}
              price={tour.price}
              ratingsAverage={tour.ratingsAverage}
              maxGroupSize={tour.maxGroupSize}
              ratingsQuanity={tour.ratingsQuantity}
              imageCoverName={tour.imageCover}
              slug={tour.slug}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default TourCards;

import { useEffect, useState } from "react";
import TourCard from "./TourCard";

const TourCards = ({ limit = 999999 }) => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch(`/api/tours?limit=${limit}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTours(result.data.data);
      })
      .catch(() => console.log("Something went wrong while fetching..."));
  }, [limit]);

  return (
    <main className="py-10">
      <div>
        <div className="flex gap-10 flex-wrap justify-start min-h-[50vh] max-w-[108rem] mx-auto">
          {tours.map((tour) => (
            <div key={tour._id} className="basis-[calc(25%-2.5rem)]">
              <TourCard
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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TourCards;

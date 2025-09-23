const TourCard = ({
  name,
  duration,
  difficulty,
  summary,
  startLocation,
  startDate,
  stops,
  price,
  ratingsAverage,
  maxGroupSize,
  ratingsQuanity,
  imageCoverName,
}) => {
  return (
    <div className="overflow-hidden shadow-2xl min-w-[400px] cursor-pointer ">
      <div className="relative">
        <img
          src={`/api/img/tours/${imageCoverName}`}
          alt={name}
          className="w-full h-64 object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-green-600 opacity-40"></div>

        <h2 className="font-lato absolute inset-0 flex items-center justify-center text-white text-4xl font-bold  drop-shadow-lg">
          {name}
        </h2>
      </div>

      <div>
        <p>
          {difficulty} {duration}-day tour
        </p>
        {/* <p>{summary}</p> */}
        <div>
          <div>{startLocation}</div>
          <div>{startDate}</div>
          <div>{stops} stops</div>
          <div>Group: {maxGroupSize}</div>
        </div>
        <div>
          <span>${price}</span>
          <span>
            {ratingsAverage} ({ratingsQuanity})
          </span>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

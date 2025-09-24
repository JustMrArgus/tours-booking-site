import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

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
  slug,
}) => {
  const date = new Date(startDate);
  const formattedStartDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);

  return (
    <div className="overflow-hidden shadow-2xl min-w-[400px] rounded-md  duration-200 hover:scale-110 font-lato">
      <div className="relative">
        <img
          src={`/api/img/tours/${imageCoverName}`}
          alt={name}
          className="w-full h-64 object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-green-600 opacity-40"></div>

        <h2 className=" absolute inset-0 flex items-center justify-center text-white text-4xl font-bold  drop-shadow-lg">
          {name}
        </h2>
      </div>

      <div>
        <p className="text-center uppercase font-bold opacity-60 my-2">
          {difficulty} {duration}-day tour
        </p>
        <p className="max-w-[300px] text-center italic opacity-45 mx-auto">
          {summary}
        </p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-10 mt-5 w-max mx-auto">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-[16px] text-green-600" />
            <p className="italic opacity-45">{startLocation}</p>
          </div>
          <div className="flex items-center gap-1">
            <FaCalendar className="text-[16px] text-green-600" />
            <p className="italic opacity-45">{formattedStartDate}</p>
          </div>
          <div className="flex items-center gap-1">
            <FaFlag className="text-[16px] text-green-600" />
            <p className="italic opacity-45">{stops} stops</p>
          </div>
          <div className="flex items-center gap-1">
            <IoPersonSharp className="text-[16px] text-green-600" />
            <p className="italic opacity-45">{maxGroupSize} people</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-5 px-10 py-6 bg-[#e9e8e8]">
          <div className="flex flex-col gap-1">
            <p>
              <span className="font-bold text-[0.9rem]">${price}</span>{" "}
              <span className="opacity-45">per person</span>
            </p>
            <p>
              <span className="font-bold text-[0.9rem]">{ratingsAverage}</span>{" "}
              <span className="opacity-45">rating({ratingsQuanity})</span>
            </p>
          </div>
          <div>
            <button className="bg-linear-to-r text-white from-green-500 to-green-300 p-6 rounded-[2rem] cursor-pointer duration-200 hover:scale-[1.1] hover:shadow-md">
              <Link to={`tours/${slug}`}>DETAILS</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

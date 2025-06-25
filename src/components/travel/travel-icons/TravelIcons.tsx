import classes from "./TravelIcons.module.scss";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdLocalHotel } from "react-icons/md";
import { MdHouse } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";

const TravelIcons = () => {
  return (
    <div className={classes["travel-icons-container"]}>
      <div className={classes.icon}>
        <MdOutlineTravelExplore size={22} color="grey" />
        <p>Explore</p>
      </div>
      <div className={classes.icon}>
        <GiCommercialAirplane size={22} color="grey" />
        <p>Flights</p>
      </div>
      <div className={classes.icon}>
        <MdLocalHotel size={22} color="grey" />
        <p>Hotels</p>
      </div>
      <div className={classes.icon}>
        <MdHouse size={22} color="grey" />
        <p>Vacation rentals</p>
      </div>
    </div>
  );
};

export default TravelIcons;

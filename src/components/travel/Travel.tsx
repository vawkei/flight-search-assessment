import classes from "./Travel.module.scss";
import  { useState } from "react";
import image from "../../assets/spotter_background.svg";
import Search from "../ui/serach/Search";
import TravelIcons from "./travel-icons/TravelIcons";
import TravelContent from "./TravelContent";
import { Destinations } from "./TravelData";

const Travel = () => {
  const [search, setSearch] = useState("");


  const array = Destinations;

  const filteredItems = array.filter((item)=>{
    return item.city.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || item.attractions.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  });

  return (
    <div className={classes["travel-container"]}>
      
      <div className={classes["background-image"]}>
        <img src={image} alt={"background_image"} />
      </div>

      <section className={classes["top-section"]}>
        <h1>Travel</h1>
        <div className={classes.search}>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className={classes["travel-icons"]}>
            <TravelIcons />
        </div>
      </section>

      <section className={classes["cards-section"]}>
          <TravelContent filteredItems = {filteredItems} />
        </section>
    </div>
  );
};

export default Travel;

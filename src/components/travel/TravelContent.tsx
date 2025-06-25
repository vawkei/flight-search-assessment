import classes from "./TravelContent.module.scss";
import type { DestinationProps } from "../../interface/interface";
import Card from "../ui/card/Card";
import type React from "react";

//📒 Note: Please i am using static data on the page due to time constraint. Else I would have loved to have used data from the  GET /api/v1/hotels/searchDestinationOrHotel api

const TravelContent: React.FC<{ filteredItems: DestinationProps[] }> = (
  props
) => {
  return (
    <div className={classes.container}>
      {props.filteredItems.length < 1 ? (
        <div className={classes["item-not-found"]}>
          <p>No city found</p>
        </div>
      ) : (
        props.filteredItems.map((item, index) => {
          return (
            <Card key={index} className={classes.cardClass}>
              <div className={classes["main-image"]}>
                <img src={item.image} alt={item.city} />
              </div>

              <div className={classes["right-content"]}>
                <div>
                  <h2>{item.city}</h2>
                  <p>{item.attractions}</p>
                </div>

                <div className={classes.price}>{item.price}</div>
              </div>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default TravelContent;

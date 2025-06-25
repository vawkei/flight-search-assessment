// import FlightContent from "./FlightContent";
import classes from "./Flights.module.scss";
import MockFlightContent from "./MockFlightContent";

const Flights = () => {
    return ( 
        <div className={classes["flight-container"]}>
            <h2>Flights Component</h2>
            {/* <FlightContent /> */}
            <MockFlightContent />
        </div>
     );
}
 
export default Flights;
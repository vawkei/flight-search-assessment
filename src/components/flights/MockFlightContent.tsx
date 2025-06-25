import classes from "./FlightContent.module.scss";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import type {
  AirportOptionProps,
  FlightResult,
} from "../../interface/interface";
import mockFlightResults from "../../mock-data/flightResultsMock.json";
import airportOptionsMock from "../../mock-data/airportOptionsMock.json";
import Button from "../ui/button/Button";
// import Search from "../ui/serach/Search";
import { useMediaQuery } from "react-responsive";

const MockFlightContent = () => {
  const [flightFrom, setFlightFrom] = useState("");
  const [flightTo, setFlightTo] = useState("");
  const [flightFromOptions, setFlightFromOptions] = useState<
    AirportOptionProps[]
  >([]);
  const [flightToOptions, setFlightToOptions] = useState<AirportOptionProps[]>(
    []
  );
  const [flightSelectedFrom, setFlightSelectedFrom] =
    useState<AirportOptionProps | null>(null);
  const [flightSelectedTo, setFlightSelectedTo] =
    useState<AirportOptionProps | null>(null);
  const [flightDate, setFlightDate] = useState<Date | null>(null);
  const [flightResults, setFlightResults] = useState<FlightResult[]>([]);
  const [error, setError] = useState("");
  const [hideFromUl, setHideFromUl] = useState(false);
  const [hideToUl, setHideToUl] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 640 });

  //👇👇handleflight from====================================================👇👇>>>

  const flightFromHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFlightFrom(value);
    const filtered = airportOptionsMock.filter((opt) =>
      opt.presentation.suggestionTitle
        .toLowerCase()
        .includes(value.toLowerCase())
    );
    setFlightFromOptions(filtered);
  };

  //👇👇handle flight to====================================================👇👇>>>

  const flightToHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFlightTo(value);
    const filtered = airportOptionsMock.filter((opt) =>
      opt.presentation.suggestionTitle
        .toLowerCase()
        .includes(value.toLowerCase())
    );
    setFlightToOptions(filtered);
  };

  //👇👇handleSearch====================================================👇👇>>>
  //📒we are searching for flights with this request.

  const searchHandler = async () => {
    if (!flightSelectedFrom || !flightSelectedTo || !flightDate) {
      toast.error("please select both locations and date");
      return;
    }

    setFlightResults(mockFlightResults);
    if(flightResults){
      setFlightFrom("");
      setFlightTo("");
    }

  };

  // useEffect(() => {
  //   console.log(
  //     "this is what we get from flightFromOptions",
  //     flightFromOptions
  //   );
  //   console.log("this is what we get from flightToOptions", flightToOptions);
  // }, [flightFromOptions, flightToOptions]);

  useEffect(() => {
    if (hideFromUl && flightSelectedFrom) {
      setFlightFromOptions([]);
      console.log("hideFromUl has been hidden");
    } else {
      console.log("still showing");
    }
  }, [hideFromUl,flightSelectedFrom]);

  useEffect(()=>{
    if(hideToUl && flightSelectedTo){
      setFlightToOptions([]);
      console.log("hideFromUl has been hidden");
    }
  },[hideToUl,,flightSelectedTo]);

  return (
    <div className={classes["content-container"]}>
      <h2>Flight Search (Mocked)</h2>

      {isMobile ? (
        <div>
          {/*👇👇first-row==========================================👇👇 */}
          <div className={classes["first-row"]}>
            {/* from */}
            <div className={classes.control}>
              <input
                type="text"
                placeholder="From"
                value={flightFrom}
                onChange={flightFromHandler}
              />
              {/* <Search value={flightFrom} onChange={flightFromHandler} /> */}
              {flightFromOptions.length > 0 && (
                <ul>
                  {flightFromOptions.map((opt) => (
                    <li
                      key={opt.skyId}
                      onClick={() => {
                        setFlightSelectedFrom(opt);
                        setFlightFrom(opt.presentation.suggestionTitle); // updates the input UI
                      }}>
                      {opt.presentation.suggestionTitle}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* To */}
            <div className={classes.control}>
              <input
                type="text"
                placeholder="To"
                value={flightTo}
                onChange={flightToHandler}
              />
              {/* <Search value={flightTo} onChange={flightToHandler} /> */}
              {flightToOptions.length > 0 && (
                <ul>
                  {flightToOptions.map((opt) => (
                    <li
                      key={opt.skyId}
                      onClick={() => {
                        setFlightSelectedTo(opt);
                        setFlightTo(opt.presentation.suggestionTitle);
                      }}>
                      {opt.presentation.suggestionTitle}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {/*👇👇first-row==========================================👇👇 */}
          <div className={classes["second-row"]}>
            <div className={classes.controlDate}>
              <DatePicker
                selected={flightDate}
                onChange={(date: Date | null) => setFlightDate(date)}
                placeholderText="Select a travel date"
                dateFormat="yyyy-MM-dd"
                minDate={new Date()} //to disable past dates
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.controls}>
          <div className={classes.control}>
            <input
              type="text"
              placeholder="From"
              value={flightFrom}
              onChange={flightFromHandler}
            />
            {/* <Search value={flightFrom} onChange={flightFromHandler} /> */}
            {flightFromOptions.length > 0 ? (
              <ul>
                {flightFromOptions.map((opt) => (
                  <li
                    key={opt.skyId}
                    // onClick={() => setFlightSelectedFrom(opt)}
                    onClick={() => {
                      setFlightSelectedFrom(opt); // stores the object
                      setFlightFrom(opt.presentation.suggestionTitle); // updates the input UI
                      setHideFromUl(true);
                    }}>
                    {opt.presentation.suggestionTitle}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>

          <div className={classes.control}>
            <input
              type="text"
              placeholder="To"
              value={flightTo}
              onChange={flightToHandler}
            />
            {/* <Search value={flightTo} onChange={flightToHandler} /> */}
            {flightToOptions.length > 0 ? (
              <ul>
                {flightToOptions.map((opt) => (
                  <li
                    key={opt.skyId}
                    // onClick={() => {
                    //   setFlightSelectedTo(opt);
                    // }}
                    onClick={() => {
                      setFlightSelectedTo(opt); // stores the object
                      setFlightTo(opt.presentation.suggestionTitle); // updates the input UI
                      setHideToUl(true);
                    }}>
                    {opt.presentation.suggestionTitle}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>

          <div className={classes.controlDate}>
            <DatePicker
              selected={flightDate}
              onChange={(date: Date | null) => setFlightDate(date)}
              placeholderText="Select a travel date"
              dateFormat="yyyy-MM-dd"
              minDate={new Date()} //to disable past dates
            />
          </div>
        </div>
      )}

      <br />
      <div className={classes.action}>
        <Button onClick={searchHandler} type="submit">
          Search Flights
        </Button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: "2rem" }}>
        <h3>Flight Results</h3>
        {flightResults.length > 0 ? (
          flightResults.map((f, index) => (
            <div
              key={index}
              style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
              <p>
                <strong>{f.airline}</strong>
              </p>
              <p>
                {f.departureTime} → {f.arrivalTime}
              </p>
              <p>{f.duration}</p>
              <p>{f.price}</p>
            </div>
          ))
        ) : (
          <p>No flights found.</p>
        )}
      </div>
    </div>
  );
};

export default MockFlightContent;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import type { AirportOptionProps } from "../../interface/interface";
import { format } from "date-fns";


const FlightContent = () => {
  const [flightFrom, setFlightFrom] = useState("");
  const [flightTo, setFlightTo] = useState("");

  const [flightFromOptions, setFlightFromOptions] = useState<
    AirportOptionProps[]
  >([]);
  const [flightToOptions, setFlightToOptions] = useState<AirportOptionProps[]>(
    []
  );

  const [flightDate, setFlightDate] = useState<Date | null>(null);

  const [flightSelectedFrom, setFlightSelectedFrom] =
    useState<AirportOptionProps | null>(null);

  const [flightSelectedTo, setFlightSelectedTo] =
    useState<AirportOptionProps | null>(null);

  const [flightResults, setFlightResult] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  //   const [isError, setIsError] = useState(false);

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const API_URL_SEARCH_AIRPORT = `${BASE_URL}/searchAirport`;
  const API_URL_SEARCH_FLIGHTS = `${BASE_URL}/searchFlights`;

  //👇👇handleflight from====================================================👇👇>>>

  const flightFromHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    setFlightFrom(value);
    if (!value) {
      console.log("please enter a value");
      toast.error("please enter a value");
      return;
    }
    console.log(`value:${value}`);

    try {
      console.log("about to start the request....");

      const response = await axios.get(API_URL_SEARCH_AIRPORT, {
        params: { query: value },
        headers: {
          "x-rapidapi-host": import.meta.env.VITE_X_RAPIDAPI_HOST,
          "x-rapidapi-key": import.meta.env.VITE_X_RAPIDAPI_KEY,
        },
      });
      console.log("response for FROM:", response);
      setFlightFromOptions(response.data.data);
      //📒📒 if all things go well, we are meant to gert data from Skyscrapper. In their documentation on the site, they got back an array with 8 objects
      //these are 3:
      // entityType:"AIRPORT"
      // localizedName:"Stewart International"

      //   entityType:"AIRPORT"
      //   localizedName:"Newquay"

      // entityType:"AIRPORT"
      // localizedName:"New York John F. Kennedy". And i will store it in const flightFromOptions📒📒
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "something went wrong";
      console.log("flight from error:", message);
      toast.error(message, { position: "top-left" });
    }
  };

  //👇👇handle flight to====================================================👇👇>>>

  const flightToHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setFlightTo(value);

    if (!value) {
      console.log("please enter a value");
      toast.error("please enter a value");
      return;
    }
    console.log(`value:${value}`);

    try {
      console.log("about to start the request....");
      const response = await axios.get(API_URL_SEARCH_AIRPORT, {
        params: { value },
        headers: {
          "x-rapidapi-host": import.meta.env.VITE_X_RAPIDAPI_HOST,
          "x-rapidapi-key": import.meta.env.VITE_X_RAPIDAPI_KEY,
        },
      });
      console.log("response for TO:", response);
      setFlightToOptions(response.data.data);
      //   same as above but for to
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "something went wrong";
      console.log("flight from error:", message);
      toast.error(message, { position: "top-left" });
    }
  };

  //👇👇handleSearch====================================================👇👇>>>
  //📒we are searching for flights with this request.

  const searchHandler = async () => {
    if (!flightSelectedFrom || !flightSelectedTo || !flightDate) {
      toast.error("please select both locations and date");
      //   setIsError(true);
      return;
    }

    // setIsError(false);
    setIsLoading(true);
    setFlightResult([]);

    try {
      const response = await axios.get(API_URL_SEARCH_FLIGHTS, {
        params: {
          originSkyId: flightSelectedFrom.skyId,
          originEntityId: flightSelectedFrom.entityId,
          destinationSkyId: flightSelectedTo.skyId,
          destinationEntityId: flightSelectedTo.entityId,
          //   date: flightDate,
          date: flightDate ? format(flightDate, "yyyy-MM-dd") : null,
          //formatting the date using date-fns before sending it to the API in YYYY-MM-DD format, which the Sky Scrapper API requires. Else error.
        },
        headers: {
          "x-rapidapi-host": import.meta.env.VITE_X_RAPIDAPI_HOST,
          "x-rapidapi-key": import.meta.env.VITE_X_RAPIDAPI_KEY,
        },
      });
      setFlightResult(response.data.data);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "something went wrong";
      console.log("search error:", message);
      toast.error(message, { position: "top-left" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(
      "this is what we get from flightFromOptions",
      flightFromOptions
    );
    console.log("this is what we get from flightToOptions", flightToOptions);
  }, [flightFromOptions, flightToOptions]);

  return (
    <div>
      <h2>Search Flights</h2>

      {/*👇👇=============From=========================  👇👇*/}
      <input
        type="text"
        value={flightFrom}
        onChange={flightFromHandler}
        placeholder="from"
      />

      {flightFromOptions?.length > 0 && (
        <ul>
          {flightFromOptions.map((option) => (
            <li
              key={option.skyId}
              onClick={() => setFlightSelectedFrom(option)}>
              {option.presentation.suggestionTitle}
            </li>
          ))}
        </ul>
      )}

      {/*👇👇=============To========================= 👇👇 */}

      <input
        type="text"
        value={flightTo}
        onChange={flightToHandler}
        placeholder="To"
      />

      {flightToOptions?.length > 0 && (
        <ul>
          {flightToOptions.map((option) => (
            <li key={option.skyId} onClick={() => setFlightSelectedTo(option)}>
              {option.presentation.suggestionTitle}
            </li>
          ))}
        </ul>
      )}

      {/*👇👇=============Date======================== 👇👇 */}

      <DatePicker
        selected={flightDate}
        onChange={(date: Date | null) => setFlightDate(date)}
        placeholderText="Select a Travel Date"
        minDate={new Date()} //to disable past dates
      />

      <button onClick={searchHandler}>
        {isLoading ? "Searching" : "Search Flights"}
      </button>

      <div>
        <h3>Results</h3>
        {flightResults.length > 0 ? (
          flightResults.map((result, index) => (
            <div key={index}>
              <p>{JSON.stringify(result, null, 2)}</p>
            </div>
          ))
        ) : (
          <div>{!isLoading && <p>No Results Yet.</p>}</div>
        )}
      </div>
    </div>
  );
};

export default FlightContent;

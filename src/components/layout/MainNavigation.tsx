import DrawerToggleButton from "../ui/drawer-toggle/DrawerToggle";
import classes from "./MainNavigation.module.scss";
import { NavLink } from "react-router-dom";
import { MdLuggage } from "react-icons/md";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdLocalHotel } from "react-icons/md";
import { MdHouse } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import Card from "../ui/card/Card";
import { useEffect, useState } from "react";

const MainNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showToggleHandler = () => {
    setShowMenu((current) => !current);
  };

  const setShowMenuToFalse = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  const navDataHandler = (navData: any) => {
    return navData.isActive ? classes.active : "";
  };

  const googleLetters = [
    { char: "G", color: "blue" },
    { char: "o", color: "red" },
    { char: "o", color: "yellow" },
    { char: "g", color: "blue" },
    { char: "l", color: "green" },
    { char: "e", color: "red" },
  ];

  return (
    <header className={classes["main-nav-container"]}>
      <div className={classes["title-div"]}>
        <div className={classes.harmburger} onClick={showToggleHandler}>
          <DrawerToggleButton />
        </div>

        <h2>
          <NavLink to={"/"} className={navDataHandler}>
            {googleLetters.map(({ char, color }, index) => {
              return (
                <span key={index} style={{ color }}>
                  {char}
                </span>
              );
            })}
          </NavLink>
        </h2>
      </div>

      <nav
        className={
          showMenu
            ? `${classes["show-navigation"]}`
            : `${classes["hide-navigation"]}`
        }>
        <div
          onClick={setShowMenuToFalse}
          className={
            showMenu
              ? `${classes["nav-backdrop"]} ${classes["show-nav-backdrop"]}`
              : `${classes["nav-backdrop"]}`
          }></div>
        <ul onClick={setShowMenuToFalse}>
          <NavLink to="/travel">
            {({ isActive }) => (
              <Card
                className={`${classes["card-class"]} ${
                  isActive ? classes.active : ""
                }`}>
                <li>
                  <MdLuggage size={12} color="blue" />
                  Travel
                </li>
              </Card>
            )}
          </NavLink>

          <NavLink to={"/explore"}>
            {({ isActive }) => (
              <Card
                className={`${classes["card-class"]} ${
                  isActive ? classes.active : ""
                }`}>
                <li>
                  <MdOutlineTravelExplore size={12} color={"blue"} />
                  Explore
                </li>
              </Card>
            )}
          </NavLink>

          <NavLink to={"/flights"}>
            {({ isActive }) => (
              <Card
                className={`${classes["card-class"]} ${
                  isActive ? classes.active : ""
                }`}>
                <li>
                  <GiCommercialAirplane size={12} color={"blue"} />
                  Flights
                </li>
              </Card>
            )}
          </NavLink>

          <NavLink to={"/hotels"}>
            {({ isActive }) => (
              <Card
                className={`${classes["card-class"]} ${
                  isActive ? classes.active : ""
                }`}>
                <li>
                  <MdLocalHotel size={12} color={"blue"} />
                  Hotels
                </li>
              </Card>
            )}
          </NavLink>

          <NavLink to={"/vacation-rentals"}>
            {({ isActive }) => (
              <Card
                className={`${classes["card-class"]} ${
                  isActive ? classes.active : ""
                }`}>
                <li>
                  <MdHouse size={12} color={"blue"} />
                  Vacation rentals
                </li>
              </Card>
            )}
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

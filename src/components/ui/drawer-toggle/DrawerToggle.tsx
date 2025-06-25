import classes from "./DrawerToggle.module.scss";

// const DrawerToggleButton = (props) => {
const DrawerToggleButton = () => {
  return (
    <button>
      {/* <button onClick={props.toggle}> */}
      <div className={classes["toggle-line"]} />
      <div className={classes["toggle-line"]} />
      <div className={classes["toggle-line"]} />
    </button>
  );
};

export default DrawerToggleButton;

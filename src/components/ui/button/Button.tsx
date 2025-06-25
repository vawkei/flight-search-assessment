import classes from "./Button.module.scss";
import type { ButtonProps } from "../../../interface/interface";



const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${classes.button}${props.className || ""}`}
      onClick={props.onClick}
      type={props.type || "button"}>

      {props.children}
      
    </button>
  );
};

export default Button;
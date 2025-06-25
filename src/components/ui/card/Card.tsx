import classes from "./Card.module.scss";
import type { CardProps } from "../../../interface/interface";

const Card = (props:CardProps) => {
    return ( 
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
     );
}
 

export default Card;
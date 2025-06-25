import classes from "./Search.module.scss";
import type { SearchProps } from "../../../interface/interface";
import { RxMagnifyingGlass } from "react-icons/rx";

const Search = (props: SearchProps) => {
  return (
    <div className={classes.search}>
      <RxMagnifyingGlass size={18} className={classes.icon} />
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="search for flights hotels and more"
      />
    </div>
  );
};

export default Search;

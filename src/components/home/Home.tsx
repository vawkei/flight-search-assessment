import classes from "./Home.module.scss";

const Home = () => {
    return ( 
        <div className={classes["home-container"]}>
            <h2 style={{textAlign:"center"}}>Welcome to The Flight Search Interface</h2>
        </div>
     );
}
 
export default Home;
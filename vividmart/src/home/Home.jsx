import { Box , makeStyles} from "@material-ui/core";

// components
import Banner from "../Banner";
import Boat from "../company/Boat";
import Woodland from "../company/Woodland";
import Stopper from "../company/Shoppersstop";
import Mcd from "../company/Mcd";
import Nike from "../company/Nike";
const useStyle= makeStyles({
    component:{
        padding: 20,
        background: '#E1E1E1',
        marginTop:68
    },
    
})
const Home =() => {
    const classes = useStyle();
    return(
        <div>
            <Box className={classes.component}>

            <Banner/>
        
            </Box>
            <div className={classes.cardname}>
            <Boat/>
            <Woodland/>
            <Stopper/>
            <Mcd/>
             <Nike/>
            </div>
        </div>
    )
}
export default Home;
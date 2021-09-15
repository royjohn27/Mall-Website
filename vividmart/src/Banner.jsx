import Carousel from 'react-material-ui-carousel';
 import { bannerData } from './constants/data';
import { makeStyles } from '@material-ui/core';



const useStyle=makeStyles({
    image:{
        width:'100%',
        height: 500

    }
})

const Banner = () =>{
    const classes = useStyle();
    return(
        <Carousel
        autoPlay={true}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        >
            {
                bannerData.map( image => (
         <img src={image} className={classes.image} alt={image}/>
                 ))
            }
        </Carousel>

    )
}
export default Banner;
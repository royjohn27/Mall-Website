import { productsm1 , productsm2 , productsm3} from "../constants/data"
import { makeStyles ,Box, Typography,Divider} from '@material-ui/core';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


   

const responsive = {
 
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};
const useStyle=makeStyles({
  pimage:{
    height:180
  },
  Carousel:{
    height:280,
    marginTop:5,
    backgroundColor:"#ede8df"
  },
  component:{
     marginTop:110,
    
  },
  type:{
    fontSize:30
  },
  text:{
fontSize:15,
marginTop:5
  }
})



const McdMain =()=>{
  const classes= useStyle()
    return(
<Box className={classes.component}>
<Typography className={classes.type}>New Launches</Typography>
<Divider/>
      <Carousel responsive={responsive}
      infinite={true}
      centerMode={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      
      
      className={classes.Carousel}>
          {
            productsm1.map(product =>(
              <Box textAlign="center">
              <img src ={product.url} className={classes.pimage} />
              <Typography  className={classes.text}style={{fontWeight:600,color:"#212121"}}>{product.title.shortTitle}</Typography>
              <Typography className={classes.text}style={{color:"green"}}>{product.discount}</Typography>
              <Typography className={classes.text}style={{color:"#212121",opacity:.6}}>{product.tagline}</Typography>
              </Box>

              ))

            }
      </Carousel>
      <Typography className={classes.type}>Trending</Typography>
<Divider/>
      <Carousel responsive={responsive}
      infinite={true}
      centerMode={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      
      
      className={classes.Carousel}>
          {
            productsm2.map(product =>(
              <Box textAlign="center">
              <img src ={product.url} className={classes.pimage} />
              <Typography  className={classes.text}style={{fontWeight:600,color:"#212121"}}>{product.title.shortTitle}</Typography>
              <Typography className={classes.text}style={{color:"green"}}>{product.discount}</Typography>
              <Typography className={classes.text}style={{color:"#212121",opacity:.6}}>{product.tagline}</Typography>
              </Box>

              ))

            }
      </Carousel>
      <Typography className={classes.type}>Deals</Typography>
<Divider/>
      <Carousel responsive={responsive}
      infinite={true}
      centerMode={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      
      
      className={classes.Carousel}>
          {
            productsm3.map(product =>(
              <Box textAlign="center">
              <img src ={product.url} className={classes.pimage} />
              <Typography  className={classes.text}style={{fontWeight:600,color:"#212121"}}>{product.title.shortTitle}</Typography>
              <Typography className={classes.text}style={{color:"green"}}>{product.discount}</Typography>
              <Typography className={classes.text}style={{color:"#212121",opacity:.6}}>{product.tagline}</Typography>
              </Box>

              ))

            }
      </Carousel>
      
      
      
            </Box>
            
            
    )
    
        }
        
export default McdMain

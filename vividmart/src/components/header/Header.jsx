import{AppBar, Toolbar , makeStyles } from '@material-ui/core';

import { Link } from 'react-router-dom';

// componets
import SearchBar from './SearchBar';
import HeaderButtton from './HeaderButton';

const useStyle = makeStyles({
 header:{
     background:'#5F33FF'

 },
container:{
   marginLeft:76,
   fontSize:28,
   fontFamily: 'Staatliches', 
    fontWeight: 400,
    textDecoration:'none',
    color:'#ffff'

     
 }
})
const Header = () =>{
    const classes = useStyle();
    return(
        <AppBar className={classes.header}>
            <Toolbar>
            
         <Link to= '/' className={ classes.container}>
              VIVID MALL
              </Link>
         
        
       
        <SearchBar/>
        <HeaderButtton/>     
            </Toolbar>
        </AppBar>
 
    )
      
}
export default Header;
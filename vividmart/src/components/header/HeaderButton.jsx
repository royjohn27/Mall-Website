import { useContext, useState } from "react";

import { Box , Button , makeStyles, Typography ,Badge} from "@material-ui/core";
import { ShoppingCart}from '@material-ui/icons';
import { Link } from "react-router-dom";
// component
import LoginDialog from "../login/Login";
import {LoginContext} from "../../context/ContextProvider";
import Profile from "./Profile";

const useStyle = makeStyles({
 login:{
      color:'#ffff',
      textTransform:'none',
      marginRight:40,
      fontSize:15,
     textDecoration:'none'
      

 },
 wrapper:{
     margin:'0 5% 0 auto',
     display:'flex',
     textDecoration:'none'
     
     
   
 },
 about:{
 marginRight:25,
 marginTop:5,
 textDecoration:'none',
 color:"#ffff"
 },
 cart:{
    marginRight:25,
    marginTop:5,
},
container:{
    display:'flex',
    marginTop:5,
    textDecoration:'none',
    color:"#ffff"
}

})

const HeaderButtton = () => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const{account, setAccount} =useContext(LoginContext)
    const openLoginDialog=()=>{
        setOpen(true);
    }


    return( 
        <Box className={classes.wrapper}>
            {
             account ? <Profile account={account} setAccount={setAccount}/>:
          <Link className={classes.login}>
          <Button varient ="contained" onClick={()=>openLoginDialog()} className={classes.login}> Login </Button>
            </Link>
            }
            <Link className={classes.about}><Typography className={classes.about}>
                About Us
            </Typography></Link>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={3} color="secondary">
            <ShoppingCart/>
</Badge>
           <Typography className={classes.cart} style={{marginLeft:10}}>
                Cart
            </Typography>
            </Link> 
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
        </Box>

    )
}
export default HeaderButtton;
import { useState } from "react";
import { Link } from 'react-router-dom';
import { authenticateSignup , authenticateLogin} from "../../service/api";
import { Box, Button, Dialog, DialogContent , makeStyles, TextField, Typography} from "@material-ui/core";
const useStyle=makeStyles({
    component:{
        height:'70vh',
        width:'50vh',
    backgroundColor:"#5F33FF"
    },
    login:{
        padding:"25px 35px",
        display:"flex",
        flexDirection:"column",
        "& > *":{
            marginTop:20
        }
    },
    text:{
        color:"#ffffff",
        fontSize: 12

    },
    loginbtn:{

    },
    requestbtn:{

    },
    createText:{
        color:"#ffffff",
        textAlign:"center"
    },
    lgtext:{
        color:"#ffffff",
        padding:"10px 10px"
    },
    input:{
        "& > *":{
            color:'#ffffff'
        }
    },
    error:{
        fontSize:10,
        color:"#ff6161",
marginTop:10,
fontWeight:600,
lineHeight:0
    }


})
const intialValue ={
    login:{
view:'login',
heading:"Login",
subheading:"Get accsess to your order"

    },
    signup:{
        view:'signup',
        heading:"SignUp",
        subheading:"sign Up with your Mobile number to get started"
    }
}
const signupIntialValues={
    firstname:'',
    lastname:'',
    email:'',
    username:'',
    password:'',
    phone:''
}
const loginIntialValues={
    username:'',
    password:'',

}
const Login =({open , setOpen, setAccount})=>{
    const classes = useStyle();
    
    const [ account, toggleAccount] = useState(intialValue.login);
    const[signup, setSignup]= useState(signupIntialValues);
    const [login, setLogin] = useState(loginIntialValues);
    const[error, setError] = useState(false);
    
    const handleClose=()=>{
        setOpen(false);
        toggleAccount(intialValue.login)
    }

    const toggleUserAccount =() =>{
        toggleAccount(intialValue.signup)
    }

    const signupUser = async ()=>{
       let response = await authenticateSignup(signup);
       if(!response) return;
       handleClose();
       setAccount(signup.username)
    }
    const loginUser = async ()=>{
        let response = await authenticateLogin(login);
        if(!response) {
           setError(true);
           return
        }
        handleClose();
        setAccount(login.username)
     }
 

    const onInputChange =(e)=>{
        setSignup({...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }
    const onValueChange=(e)=>{
        setLogin({...login, [e.target.name]: e.target.value });
        
    }
    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
            <Box> 
                
                <Typography style={{textAlign:"center", color:"#ffffff"}}> {account.heading}</Typography>
            <Typography style={{textAlign:"center"}} className={classes.lgtext}>{account.subheading}</Typography>
        
            </Box>
        {
            account.view ==='login'?
           <Box className={classes.login}>
            <TextField  onChange={(e)=> onValueChange(e)} className={classes.input} name="username"  label='Enter your Username'/>
            <TextField  onChange={(e)=> onValueChange(e)} className={classes.input} name="password" label="Enter Password" type="password"/>
         {error && <Typography className={classes.error}> Invalid username or password</Typography>}
         <Typography className={classes.text}>By continuing Login, you agree to Vivid mall's Terms of Use and Privacy Policy.</Typography>
         <Button variant="contained"  onClick={()=> loginUser()} className={classes.loginbtn}> Login</Button>
    <Typography className={classes.text} style={{textAlign:"center"}}>OR</Typography>
    <Button variant="contained" className={classes.requestbtn}>Request OTP</Button>
    <Link style={{textDecoration:"none"}} onClick={()=> toggleUserAccount()} className={classes.createText}>New to VIVID MAll? Create an account</Link>
            </Box>:
<Box className={classes.login}>
            <TextField  onChange={(e)=> onInputChange(e)} className={classes.input} name="firstname"  label='Enter First Name'/>
            <TextField onChange={(e)=> onInputChange(e)}className={classes.input} name="lastname" label="Enter Last Name"/>
             <TextField onChange={(e)=> onInputChange(e)}className={classes.input} name="email" label="Enter Email" type="email"/> 
            <TextField onChange={(e)=> onInputChange(e)}className={classes.input} name="username" label="Enter Username"/>
            <TextField onChange={(e)=> onInputChange(e)}className={classes.input} name="password" label="Enter Password" type="password"/>
            <TextField onChange={(e)=> onInputChange(e)}className={classes.input} name="phone" label="Enter Phone Number" type="number"/>
           <Button variant="contained" onClick={()=>signupUser()} className={classes.requestbtn}>Signup</Button>
    
            </Box>
}
            </DialogContent>
        </Dialog>
    )
}
export default Login;
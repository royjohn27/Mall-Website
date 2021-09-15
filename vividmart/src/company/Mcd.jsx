import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
// link
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
     marginTop:59,
      marginLeft:417,
      
     
    },
    media: {
        height: 197,
        marginTop: 10,
    },
    link:{
        paddingLeft:100,
        textDecoration:'none',
        color:'#ffff'
    },
    visit:{
        backgroundColor:"#3164b5",
        paddingLeft:20,
      
    },
    box:{
       marginTop:-15
    }
  });
  
  export default function Mcd() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea className={classes.box}>
          <CardMedia
            className={classes.media}
            image="../companyimg/McDonalds.jpg"
            title="McDonalds"
          />
         
        </CardActionArea>
        <CardActions className={classes.visit}>
          
        <Link to="/Mcd"
         className={classes.link} size="small" color="primary">
            Visit now
          </Link>
        </CardActions>
      </Card>

      
    );
  }
 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import img1 from '../Assets/SliderImages/na1.jpg';
import img4 from '../Assets/SliderImages/na2.jpeg';
import img2 from '../Assets/SliderImages/na3.jpg';
import img3 from '../Assets/SliderImages/na4.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    tagOne: {
       textTransform:'inherit',
       fontSize:'14px',
       letterSpacing:'letter-spacing: 0.02em'
    },
    tagTwo: {
     fontSize: '13.6',
     color:'#1c1d1d',
    marginTop:'5px'
    },
    viewAll: {
      cursor:'pointer',
      border:"1px solid #e8e8e1",
      padding: '8px 14px',
      backgroundPosition: '150% 45%',
      fontSize:'20px',
      minWidth:'90px',
      flex:'0 1 auto',
      marginTop:'15px'
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const NewArrivals = () => {
    const naArr = [img4, img4, img4, img4]
    const classes = useStyles();
    return (
     <>
         <h1>New Arrivals</h1>
          <h2 ><a className={classes.viewAll}>View All</a></h2>
         <Grid container spacing={0}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid> */}
          {
              naArr?.map((item:any)=>{
                  return (
           <Grid item xs={6} sm={3}>
           <Link to='/'><img style={{ maxWidth:"100%"}} src={item} /></Link>
           <div className={classes.tagOne}>Green Printed Muslin Suit Set</div>
           <div className={classes.tagTwo}>Rs. 3,999</div>
          {/* <Paper className={classes.paper}>xs=6 sm=3</Paper> */}
        </Grid>
                  )
              })
          }
        
        {/* <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
      </Grid>
         </>
    )
}


export default NewArrivals;
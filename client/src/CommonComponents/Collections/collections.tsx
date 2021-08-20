import React from 'react';
import img1 from '../Assets/SliderImages/coll1.jpeg';
import img2 from '../Assets/SliderImages/coll2.jpeg';
import img3 from '../Assets/SliderImages/coll3.jpeg';
import img4 from '../Assets/SliderImages/coll1.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    topContainer:{
      padding:'110px 0 0 0'
    },
    shopNow:{
        padding: '10px 0 0 58px'
    },
    tag: {
        color:'#1c1d1d',
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
const CollectionsList = () => {
    const naArr = [img1, img2, img3, img4]
    const classes = useStyles();
    return (
     <div className={classes.topContainer}>
       
         <Grid  container spacing={0}>
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
           <div ><img style={{height:'400px',maxWidth:'100%'}} src={item} /></div>
             <div className={classes.shopNow}><Link to='/' className={classes.tag}>SHOP NOW</Link></div>
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
         </div>
    )
}




export default CollectionsList;
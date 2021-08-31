import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SubmitIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
    root: {
      padding: '0 0 0 86px',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    para:{
     fontSize:'29px',
     color:'#1c1d1d',
    },
    button: {
        padding:'14px 21px',
        backgroundColor:'black',
        margin: theme.spacing(1),
      },
      container:{
          padding:'50px 0 0 0',
        textAlign:'center'
      }
  }));
  
  
const NewsLetterSection = () => {

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <p className={classes.para}>Join Our Mailing List</p>
            <div><p>10% off on joining our mailing list</p></div>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-search" label="Your id, please" type="text" variant="outlined" />
            <Button variant="contained" size="large" color="primary" className={classes.button}>
          {/* <SubmitIcon fontSize="large" /> */}
          SIGN UP
        </Button>
        </form>
        </div>
    )
}


export default NewsLetterSection;
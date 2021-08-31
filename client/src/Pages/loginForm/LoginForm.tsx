import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import img1 from '../../CommonComponents/Assets/login/googleIcone.png' 
import img2 from '../../CommonComponents/Assets/login/fbIcone.png'
import './loginForm.scss'

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 600,
        height: '100vh',
        // display: "center",
        textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
},


}));

const LoginForm = ({open, handleClose}: any) =>{
 

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
          <div style={modalStyle} className={classes.paper}>

              <div className = 'modalMainDiv'>

     <button className = 'googlebtn'>
         <span>
         <img src = {img1} className = 'googleIcone' />
     </span>
     <span>
         Sign in with Google
     </span>
  </button>
     <button className = 'fbBtn'>
         <span>
         <img src = {img2} className = 'fbIcone' />
     </span>
     <span>
         Sign in with Facebook
     </span>
  </button>
              </div>
              <p className = 'p1'> _____    or    ______</p>
      
    <div className = 'form'>
            <form>
                 <div className = 'input_field'>
                <label className = 'labelEmail'>Email Address or Mobile Number</label>
                <input className = 'Einput' type = 'text' placeholder = ''/>
                 </div>
                 <div className = 'input_field'>
                <label className = 'labelPassword'>Password</label>
                <input className = 'Einput' type = 'password' placeholder = ''/>
                 </div>

            </form>
            <div className = 'forgetPassword'>
                <p>FORGET PASSWORD</p>
            </div>
            <button className = 'btnLogin'>Login</button>
        </div>
        <p className = 'registerHere'>
        <span className = 'textLable'>
      New to Saba Creations?
    </span>
    <button className = 'registerBtn'>
     REGISTER
    </button>
            </p>
     
    </div>
        
      </Modal>
    </div>
  );
}


export default LoginForm
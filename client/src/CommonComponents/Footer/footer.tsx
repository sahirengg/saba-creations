import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  topContainer:{
    // padding:'110px 0 0 0'
  },
  // shopNow:{
  //     padding: '10px 0 0 58px'
  // },
  // tag: {
  //     color:'#1c1d1d',
  //     cursor:'pointer',
  //     border:"1px solid #e8e8e1",
  //     padding: '8px 14px',
  //     backgroundPosition: '150% 45%',
  //     fontSize:'20px',
  //     minWidth:'90px',
  //     flex:'0 1 auto',
  //     marginTop:'15px'
  //   },
    
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
}));
const FooterComponent = () => {
  const classes =  useStyles();
    return (
      <div className={classes.topContainer}>
<footer className="bg-dark text-center text-white">
  <div className="container p-4">
    <section className="mb-4">
    <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#55acee"}}
        href="#!"
        role="button"
        ><i className="fab fa-twitter"></i
      ></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>

    <section className="">
      <form action="">
        {/* <!--Grid row--> */}
        <div className="row d-flex justify-content-center">
          {/* <!--Grid column--> */}
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div className="col-md-5 col-12">
            {/* <!-- Email input --> */}
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example2" className="form-control" />
              <label className="form-label" >Email address</label>
            </div>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column-/-> */}
          <div className="col-auto">
            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
          {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}
      </form>
    </section>
    {/* <!-- Section: Form --> */}

    {/* <!-- Section: Text --> */}
    <section className="mb-4">
      <p>
      Young stylish modern defines Libas a fashion brand that tells the story of a new age Indian woman who is free spirited, independent and aware. Our constant endeavour is to provide fashionable, stylish, upbeat collection of ethnic and fusion wear carefully curated in line with fashion trends worldwide.
      </p>
    </section>
    {/* <!-- Section: Text --> */}

    {/* <!-- Section: Links --> */}
    <section className="">
      {/* <!--Grid row--> */}
      <div className="row">
        {/* <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column-->

        <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}
      </div>
      {/* <!--Grid row--> */}
    </section>
    {/* <!-- Section: Links --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copy/right --> */}
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">sabacreations.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
</div>
    )
}

export default FooterComponent;
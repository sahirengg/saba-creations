import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppContext} from '../../providers/app/appContext';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {CatListContext} from '../../providers/CatList/catListContext'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    background:'none',
    boxShadow:'none',
    color: theme.palette.text.secondary,
  },
}));

export default function CateroryComp () {

  const  {
    catList
  } = useContext(CatListContext)

  const { handleApi } = useContext(AppContext);
  const classes = useStyles();
    let [apiData, setApiData] = useState([]);

    console.log(catList, "cat list----------------------------->")
//   function FormRow() {
//     return (
//       <React.Fragment>
       
//       </React.Fragment>
//     );
//   }


//  const callApi = async () => {
//   alert('123')

//   await handleApi(
//     catListService,
//     (data:any)=>{
//       console.log(data,"sahir data--------------->")
//     }
//     )
//  }

//  useEffect(()=>{
//    callApiMockData();
//  },[])

    // let callApiMockData = () => {
    //      let dataArr: any = [{catName: "kurta", imgUrl:img1},{catName: "jeans", imgUrl:img1},{catName: "top", imgUrl:img1},{catName: "frocks", imgUrl:img1}];
    //     setApiData(dataArr);
    //  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={0}>
          {!!catList && catList.map((cat:any, index: number)=>{
            return (
              <Grid key={cat._id}  item sm={3} xs={3}>
          <Paper className={classes.paper}><img style={{borderRadius:"50%", maxWidth:"100%"}} src={cat.image} /></Paper>
          <p style={{textAlign:'center'}}>{cat.catName}</p>
        </Grid>
            )
          })}
        </Grid>
      
      </Grid>
    </div>
  );
}

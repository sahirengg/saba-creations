import React,{useState} from 'react'
import classes from './count.module.css'
const Counter = () =>{
    const [value, setValue] = useState<any>(1)
    return(
        <div className = {classes.count_btn}>
                        <button className={classes.qType} onClick = {() =>setValue(() => value <= 1 ? 1: value-1 )}>-</button>
                        <button className={classes.qView}>{value}</button>
                        <button className={classes.qType} onClick = {() =>setValue(value+1)}>+</button>  

        </div>

    )
}
export default Counter
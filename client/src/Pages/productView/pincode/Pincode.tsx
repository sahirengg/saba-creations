import e from 'cors'
import React, {useState} from 'react'
import classes from './pincode.module.css'

 const Pincode = () =>{
     const [term, setTerm] = useState('')

    const onInputChange = (e:any) =>{
       setTerm(e.target.value)
    }
    const onFormSubmit = (e:any) =>{
        e.preventDefault()
        console.log(term)
    }
    
    return(
         <div className = {classes. pincode}>
                            {/* <i class="fa fa-map-marker-alt fs-icon" aria-hidden="true"></i> */}
                            <span className = {classes.Availability} > Check Availability</span>
                            <form onSubmit = {onFormSubmit}>
                                <input className ={classes.input}
                                 type = 'text'
                                  placeholder = 'Enter your pincode'
                                   autoComplete = 'off'
                                   value = {term}
                                    onChange = {onInputChange} />
                                <button className = {classes.checkPinBtn} type ='submit' >Click</button>
                            </form>
                        </div>
    )
}
export default Pincode;
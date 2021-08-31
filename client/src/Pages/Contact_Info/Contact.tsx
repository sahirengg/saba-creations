import React from 'react'
import './contact.scss'


const ContactInfo = () =>{
return(
    <>
    <div className = 'mainContainer'>
        <div className = 'divEmail'>
    <h2 className = 'heading1'>Contact information</h2>
<div className = 'form'>
    <form>
        <div className = 'input_field'>
        {/* <label htmlFor = 'Email'>Email</label><br/> */}
        <input type="text" placeholder = 'Email' className = 'input' />
        </div>
        <div className = 'inputCheck'>
            <input className="input-checkbox"  type="checkbox" value="1" />
            <label htmlFor = 'checkout_buyer_accept'>Sign up for order updates, exclusive offers and news on WhatsApp and/or Email</label>
        </div>
    <div>
        <h2 className = 'heading2'>Shipping address</h2>

        <div className = 'input_field' >
        {/* <label htmlFor = 'FirstName'>Firstname</label><br/> */}
        <input type="text" placeholder = 'Firstname' className = 'input' style = {{width : '50%'}} />
         <input type="text" placeholder = 'Lastname' className = 'input' style = {{width : '50%' }} /><br/>
         </div>

         <div className = 'input_field'>
        {/* <label htmlFor = 'Lastname'>Lastname</label><br/> */}
       
</div>

<div className = 'input_field'>
        {/* <label htmlFor = 'Address'>Address</label><br/> */}
        <input type="text" placeholder = 'Address' className = 'input' /><br/>
</div>

<div className = 'input_field'>
        {/* <label htmlFor = 'Apartment, suite, etc. (optional)'>Apartment, suite, etc. (optional)</label><br/> */}
        <input type="text" placeholder = 'Apartment, suite, etc. (optional)' className = 'input' /><br/>
</div>

<div className = 'input_field'>
        {/* <label htmlFor = 'City'>City</label><br/> */}
        <input type="text" placeholder = 'City' className = 'input' /><br/>
</div>
<div className = 'input_field'>

        {/* <label htmlFor = 'Country/Region'>Country/Region</label><br/> */}
        <input type="text" placeholder = 'Country/Region' className = 'input' /><br/>
</div>

<div className = 'input_field'>
        {/* <label htmlFor = 'Region'>Region</label><br/> */}
        <input type="text" placeholder = 'Region' className = 'input' /><br/>
</div>

<div className = 'input_field'>
        {/* <label htmlFor = 'Postal code'>Postal code</label><br/> */}
        <input type="text" placeholder = 'Postal code' className = 'input' /><br/>
</div>

<div className = 'input_field'>
        {/* <label htmlFor = 'Phone number for order updates'>Phone number for order updates</label><br/> */}
        <input type="text" placeholder = 'Phone number for order updates'  className = 'input'/><br/>
</div>
        <input className="input-checkbox"  type="checkbox" value="1" />
        <label htmlFor = 'save_info'>Save this information for next time</label>
<div className = 'input_field'>
    <input type=" submit" value = 'Continue Shipping' className = 'btnForm' />
</div>
        
    </div>
    </form>
    </div>
    <div>
       {/* <button>Continue Shipping</button> */}
       <button className = 'btnCart'>Return to cart</button> 
    </div>
    </div>
    </div>
    </>
)
}

export default ContactInfo
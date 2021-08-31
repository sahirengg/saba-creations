import React from 'react'
import classes from './description.module.css'

const Description = () =>{
     const description = [
    { heading: 'Material', des: 'Viscose Rayon'},
    {heading: 'Base Design', des: 'Solid'},
    {heading: 'Color', des: 'Black'},
    {heading: 'Kurta Shape', des: 'Straight'},
    {heading: 'Prints Patterns ', des: ' Solid'},
    {heading: 'Neck Type', des: 'Mandarin Colla'},
    {heading: 'Sleeve', des: 'Daily'},
    {heading: 'Hemline', des: 'Straight'},
    {heading: 'Occasion ', des: 'Daily'},
    {heading: 'Fabric Purity', des: 'Synthetic'},
    {heading: 'Slit Detail', des: 'Side Slits'},
    {heading: 'Sleeve Type ', des: 'Regular Sleeves'},
    {heading: 'Length', des: 'Calf Length'},
    {heading: 'Waistband ', des: 'N/A'},
    {heading: 'Care Instruction', des: 'Gentle Hand Wash'}]
    
    return(
        <div className = {classes.description}>
                            <h4><b>Description</b></h4>
                            <p>Black Solid Rayon Kurta</p>
                            {description && description.map((item: any, index)=>{
                                return(
                            <ul>
                                <li key = {index} className = {classes.list}> <strong>{item.heading} :</strong> {item.des}</li>
                            </ul>
                                )
                            }
                            
                            )}
                            

                        </div>

    )
}
export default Description;
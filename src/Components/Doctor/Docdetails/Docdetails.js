import React from 'react'
import './Docdetails.css'
import { useParams } from 'react-router-dom'
import DocJson from '../Doctor2.json'

export default function Docdetails() {
    let value1=useParams();
    console.log("Useparam Value in Details :",value1);
    let value2=DocJson.Doctor2.find((a)=>a.d_name === value1.docdetailsName);
    console.log("Doctor Value in Json File :",value2);
    let value3=value2.dsub_cat.find((b)=>b.dsub_name === value1.docdetailstitle);
    console.log("DetailsPage Value In Subcategory :",value3);
  return (
    <div className='warper2'>
         <h1 className='p1'>Doctordetails In Details</h1>
        <div className='left2'>
            <img className='pd2' src={value3.dsub_img} />
        </div>
        <div className='right2'>
            <h3 className='p2'>{value3.dsub_name}</h3>
            <h3 className='p3'>Qulification :{value3.dsub_qulification}</h3>
            
        </div>
    </div>
  )
}

import React from 'react'
import './Shopingdetails.css'
import { useParams } from 'react-router-dom'
import ShopJson from '../Project.json'

export default function Shopingdetails() {
  let value1=useParams();
  console.log("Useparam Value in Details :",value1);
  let value2=ShopJson.Product.find((a)=>a.prod_name === value1.detailsName);
  console.log("Item Value in Json File :",value2);
  let value3=value2.sub_cat.find((b)=>b.s_name === value1.detailstitle);
  console.log("DetailsPage Value In Subcategory :",value3);
  return (
    <div className='warper'>
      <h1 className='p1'>Shopingdetails In Details</h1>
        <div className='left1'>
            <img className='pd' src={value3.s_img} />
        </div>
        <div className='right1'>
            <h3 className='p2'>{value3.s_name}</h3>
            <h3 className='p3'>Price :{value3.price}</h3>
            <h5 className='p4'>Description :{value3.desc}</h5>
        </div>
    </div>
  )
}

import React from 'react'
import Shoes from './../shoes.json'
import { Link } from 'react-router-dom';

export default function Product() {
    return (
        <div>
           <h1>Welcome to Product</h1> 
           <div className="container">
               {Object.keys(Shoes).map(keyName=>{
                   const shoe = Shoes[keyName];
                   return(<Link key={keyName} className="link" to={`/product/${keyName}`}>
                       <h4>{shoe.name}</h4>
                       <img src={shoe.img} alt="name" height={150}/>
                   </Link>)
               })}
           </div>
        </div>
    )
}

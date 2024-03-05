import React, { useState } from "react";
import "./FeaturedProducts.scss";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const FeaturedProducts = ({type}) => {

 
  const data=[
    {
      id:1,
      img:"/img/alex-haigh-fEt6Wd4t4j0-unsplash.jpg",
      img1:"/img/vlah-dumitru-SeeiNC9snZg-unsplash.jpg",
      title:"T1",
      isNew:true,
      oldPrice:19,
      price:12,
    },
    {
      id:2,
      img:"/img/bao-bao-GREEBEtyR9Y-unsplash.jpg",
      img1:"/img/vlah-dumitru-SeeiNC9snZg-unsplash.jpg",
      title:"T2",
      isNew:true,
      oldPrice:10,
      price:5,
    },
    {
      id:3,
      img:"/img/rock-staar-2XcbGfYShfk-unsplash.jpg",
      img1:"/img/vlah-dumitru-SeeiNC9snZg-unsplash.jpg",
      title:"T3",
      isNew:true,
      oldPrice:30,
      price:10,
    },
    {
      id:4,
      img:"/img/vlah-dumitru-SeeiNC9snZg-unsplash.jpg",
      img1:"/img/vlah-dumitru-SeeiNC9snZg-unsplash.jpg",
      title:"T4",
      isNew:false,
      oldPrice:40,
      price:20,
    },


  ]

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>

        <div className="bottom">
        {
        data.map((o,i)=>(


        <Card data={o} data1={i}/>
           
        )
        
        )
      }

      </div>



        </div>
      </div>
     

    </div>
  );
};

export default FeaturedProducts;

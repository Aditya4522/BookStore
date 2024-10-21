import React from 'react'

import list from '../../public/listing.json';


import Card from './Card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


export default function freebook() {
    const filterdata = list.filter((data)=>data.price===0)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
   
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 space-y-4 mt-4 my-3 '>
        <div>
        <h1 className='font-semibold  text-[20px] '>free books ourses</h1>
        <p className='font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Distinctio quas, consectetur
             ipsam illum sapiente nihil officiis hic doloremque numquam laborum!</p>

        </div>
        <div className='max-w-screen-2xl container mx-auto md:px-25  px-4  mt-4 mb-2' >
        <Slider {...settings}>
       {filterdata.map((data, idx)=>(
        <Card data={data} key={idx}/>
       ))}
      </Slider></div>
        
    </div>
    
    </>
  )
}

import React from 'react'
import Cardslider from './Cardslider.js';
// import './icon.jpg';
import icon from "../Icon/featured.jpg";
import icon2 from "../Icon/hero.png";
import { useEffect } from 'react';



const Myslider = () => {

  var element;
  useEffect(() => {
    element = document.querySelector('.product-container');
    console.log(element);
  }, []);

  // let element = document.querySelector('.product-container');
  // alert(box.innerHTML);    
  const btnpre = () => {
    let width = element.clientWidth;
    element.scrollLeft = element.scrollLeft - width;
    // console.log(width);
  }
  const btnnext = () => {
    let width = element.clientWidth;
    element.scrollLeft = element.scrollLeft + width;
    // console.log(width);
  }


  return (
    <>
      <div className='product-slider'>
        <button className='pre-btn' onClick={btnpre}><p>&lt;</p></button>
        <button className='next-btn' onClick={btnnext}><p>&gt;</p></button>
      


      <div className='product-container'>
        {/* <Cardslider cardno='1' />
        <Cardslider cardno='2' />
        <Cardslider cardno='3' />
        <Cardslider cardno='4' />
        <Cardslider cardno='5' />
        <Cardslider cardno='6' />
        <Cardslider cardno='7' />
        <Cardslider cardno='8' />
        <Cardslider cardno='9' />
        <Cardslider cardno='10' />
        <Cardslider cardno='11' />
        <Cardslider cardno='12' />
        <Cardslider cardno='13' /> */}
        <Cardslider icon={icon} />
        <Cardslider icon={icon2} />
        <Cardslider icon={icon} />
        <Cardslider icon={icon} />
        <Cardslider icon={icon} />
        <Cardslider icon={icon} />
        <Cardslider icon={icon} />
        <Cardslider icon={icon} />
        <Cardslider icon={icon} />
        <Cardslider icon={icon} />
      </div>
      </div>
    </>
  )
}

export default Myslider

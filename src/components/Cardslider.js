import React from 'react'
// import "./icon.jpg";

const Cardslider = (props) => {
  return (
    <>   
      {/* <div className='mycard'> mycard NO. {props.cardno} </div> */}
      <div className='mycard'> <img src={props.icon} alt="" /> </div>
    </>

  )
}


export default Cardslider

import React from 'react'

const SmCard = (props) => {
 
  return (
    <div>
       <div id='mm' style={{width:'11rem', height:"23rem"}} className="card border-0 me-3" >
  <img style={{borderRadius:"15px"}} src={props.pic} className="card-img-top" alt="..."/>
  <div className="card-body" style={{padding:"0"}}>
   <div className=' pt-1'>
   <i class="ri-star-fill"> {props.rating}</i> 
   <div className='fs-6'>{props.text}</div>
   <div className='fs-6'>
    <span className='fw-bold'>From &#x20B9;{props.cost}</span> /Person
   </div>
   </div>
  </div>
</div>
    </div>
  )
}

export default SmCard
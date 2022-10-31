import React, { useRef, useState } from 'react'
import SmCard from '../smCard/SmCard'

const SectionC = () => {

  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };


  const sectionData = [
    {
     pic:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-active_media/original/71f6c8fe-048e-4d71-b89e-bc083245b653.jpeg?im_w=320",
     rating:"(153) . United States",
     text:"Plan The Perfect New York Vacation",
     cost:"1,564",     
    },
    {
      pic:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-poster/original/313d9b5c-8cc2-4dea-a3cd-300ff18f62b3.jpeg?im_w=320",
      rating:"(19) . Spain",
      text:"Design Your trip to Barcelona eith Gemma",
      cost:"3,116",     
     },
     {
      pic:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-active_media/original/512e69be-ae89-45a9-8f49-530a99f96c4f.jpeg?im_w=320",
      rating:"(60) . Douth Korea",
      text:"Craft a custom trip to Korea with Jay",
      cost:"3,472",     
     },
     {
      pic:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-3010357-active_media/original/d91f9930-668f-4f62-ba65-d76e709431b0.jpeg?im_w=320",
      rating:"(8) . Mexico",
      text:"Live Tulum like a local",
      cost:"624",     
     },
     {
      pic:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2596268-active_media/original/7c87c5f0-28ab-47fb-84bd-4805bf8680a6.jpeg?im_w=320",
      rating:"(12) . United States",
      text:"Plan a trip to amazing Austin",
      cost:"2,058",     
     },
     {
      pic:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-3134396-active_media/original/e7e8be09-fde5-4aa3-9a90-c82168d954f8.jpg?im_w=320",
      rating:"(43) . Italy",
      text:"Create your Rome intinerary with Debora",
      cost:"984",     
     },
     {
      pic:"",
      rating:"",
      text:"",
      cost:3,     
     },
     {
      pic:"",
      rating:"",
      text:"",
      cost:3,     
     },
     {
      pic:"",
      rating:"",
      text:"",
      cost:3,     
     },
   ];
  return (
    <div className="container pt-5">
        <div className="row">
          <div className="col-9">
          <h3 className="pt-3 pb-3">Top Seller</h3>

          </div>
          <div className="col-3 align-self-center d-flex justify-content-end ">
          <button className="rounded-circle "
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 300, -50);
          }}
          disabled={arrowDisable}
        >
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <button className="rounded-circle"
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 300, 50);
          }}
        >
          <i className="ri-arrow-right-s-line"></i>
        </button>
          </div>
        </div>
       
    <div className='sectionc ' style={{display:"flex" , overflowX:"scroll" ,overflowY:"hidden"}}  ref={elementRef}>
        <SmCard pic={sectionData[0].pic} rating={sectionData[0].rating} text={sectionData[0].text} cost={sectionData[0].cost}></SmCard> 
        <SmCard pic={sectionData[1].pic} rating={sectionData[1].rating} text={sectionData[1].text} cost={sectionData[1].cost}></SmCard> 
        <SmCard pic={sectionData[2].pic} rating={sectionData[2].rating} text={sectionData[2].text} cost={sectionData[2].cost}></SmCard> 
        <SmCard pic={sectionData[3].pic} rating={sectionData[3].rating} text={sectionData[3].text} cost={sectionData[3].cost}></SmCard> 
        <SmCard pic={sectionData[4].pic} rating={sectionData[4].rating} text={sectionData[4].text} cost={sectionData[4].cost}></SmCard> 
        <SmCard pic={sectionData[5].pic} rating={sectionData[5].rating} text={sectionData[5].text} cost={sectionData[5].cost}></SmCard> 
        <SmCard pic={sectionData[6].pic} rating={sectionData[6].rating} text={sectionData[6].text} cost={sectionData[6].cost}></SmCard> 
        <SmCard pic={sectionData[0].pic} rating={sectionData[0].rating} text={sectionData[0].text} cost={sectionData[0].cost}></SmCard> 
        <SmCard pic={sectionData[1].pic} rating={sectionData[1].rating} text={sectionData[1].text} cost={sectionData[1].cost}></SmCard> 
        <SmCard pic={sectionData[2].pic} rating={sectionData[2].rating} text={sectionData[2].text} cost={sectionData[2].cost}></SmCard> 
        <SmCard pic={sectionData[3].pic} rating={sectionData[3].rating} text={sectionData[3].text} cost={sectionData[3].cost}></SmCard> 
        <SmCard pic={sectionData[4].pic} rating={sectionData[4].rating} text={sectionData[4].text} cost={sectionData[4].cost}></SmCard> 
        <SmCard pic={sectionData[5].pic} rating={sectionData[5].rating} text={sectionData[5].text} cost={sectionData[5].cost}></SmCard> 
        <SmCard pic={sectionData[6].pic} rating={sectionData[6].rating} text={sectionData[6].text} cost={sectionData[6].cost}></SmCard> 
      
    </div>
    </div>
  )
}

export default SectionC
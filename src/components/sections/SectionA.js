import "./SectionA.css";
import CardSectionA from "../card/CardSectionA";
import { useRef, useState } from "react";

const SectionA = () => {
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
      img: "https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=1200",
      btnTo:
        "https://www.airbnb.co.in/s/experiences?refinement_paths%5B%5D=%2Fexperiences%2Fsection%2FEXPERIENCES_TOP_BOOKED_ONLINE_GROUPING%3ATOP_BOOKED&search_type=section_navigation",

      cardTittle: "Most popular around the world",
    },
    {
      img: "https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1200",
      btnTo:
        "https://www.airbnb.co.in/s/experiences?refinement_paths%5B%5D=%2Fexperiences%2FKG%2FTag%3A8059&search_type=section_navigation",

      cardTittle: "The perfect pairing for your team event",
    },
    {
      img: "https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=1200",
      btnTo:
        "https://www.airbnb.co.in/s/experiences?refinement_paths%5B%5D=%2Fexperiences%2Fsection%2FEXPERIENCES_SELECTED_TAGS_GROUPING%3AFAMILIES&search_type=section_navigation",

      cardTittle: "Fun for the family",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10">
          <h1 className="pt-3 pb-3">New this week</h1>

          </div>
          <div className="col-2 align-self-center ">
          <button className="rounded-circle ms-5   me-2"
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 300, -50);
          }}
          disabled={arrowDisable}
        >
          <i class="ri-arrow-left-s-line"></i>
        </button>
        <button className="rounded-circle"
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 300, 50);
          }}
        >
          <i class="ri-arrow-right-s-line"></i>
        </button>
          </div>
        </div>
       
       

        <div className="scroll " ref={elementRef}>
          <CardSectionA
            img={sectionData[0].img}
            btnTo={sectionData[0].btnTo}
            cardTittle={sectionData[0].cardTittle}
          ></CardSectionA>
          <CardSectionA
            img={sectionData[1].img}
            btnTo={sectionData[1].btnTo}
            cardTittle={sectionData[1].cardTittle}
          ></CardSectionA>
          <CardSectionA
            img={sectionData[2].img}
            btnTo={sectionData[2].btnTo}
            cardTittle={sectionData[2].cardTittle}
          ></CardSectionA>
        </div>
      </div>
    </>
  );
};
export default SectionA;

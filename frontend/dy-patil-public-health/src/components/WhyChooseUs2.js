import React from "react";
import Slider from "react-slick";

function WhyChooseUs2() {
  const url = process.env.REACT_APP_URL || "#";
  const whyUs = ["NAAC A++ Accredited University", "QS International Trade Ranking (2023): #121-130 globally!", "UGC Recognized", "AICTE Approved", "Ranked Amongst Top 100 Universities in India by NIRF", "1st Rank in India by GHRDC", "Recognised as Category 1 University by MHRD"];

  const whyChooseUs_01 = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      }
    ],
  };

  return (
    <section
      className="why_dy_02"
      data-bgimg="images/dypatil/banners/bg_01.jpg"
    >
      <div className="container rounded-3 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-9 text-center">
            <h2 className="title_01 text-white text-center">
              Why Choose D Y Patil University?
            </h2>
          </div>
        </div>
        <Slider
          className="whyChooseUs_01 row placement_01 py-lg-2 justify-content-center text-center align-items-stretch"
          {...whyChooseUs_01}
        >
        {/* Map Function - START */}
        {
          whyUs.map((value,index)=>(
          <div key={index} className="company_01 p-2 d-flex align-items-stretch">
            <div className="bg-white p-2 d-flex flex-column justify-content-center">
              <img
                src={`${url}images/dypatil/awards/${index+1}.webp`}
                loading="lazy"
                className="px-3"
                alt={`${value}`}
              />
              <hr />
              <p>{value}</p>
            </div>
          </div>
          ))
        }
        {/* Map Function - END */}
        </Slider>
      </div>
    </section>
  );
}
export default WhyChooseUs2;

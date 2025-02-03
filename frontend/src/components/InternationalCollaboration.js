import React from "react";
import Slider from "react-slick";

function InternationalCollaboration() {
  const url = process.env.REACT_APP_URL || "#";

  const collaboration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const collaboration_01 = {
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
    <section>
      <div className="container bg-white rounded-3 pb-5 " id="">
        <div className="row  justify-content-center">
          <div className="col-lg-9 text-center">
            <img
              src={`${url}images/dypatil/heading/1.png`}
              height="30px"
              alt=""
            />
            <h2 className="title_01 text-center">
              International Collaboration
            </h2>
          </div>
        </div>
        <Slider
          className="row collaboration_01 ms-1 me-2 mx-lg-auto py-lg-2 justify-content-center text-center border"
          {...collaboration_01}
        >
          {collaboration.map((image, index) => (
            <div key={index} className=" company_01 border-end ">
              <img
                src={`${url}images/dypatil/placement/international/${image}.png`}
                loading="lazy"
                className="px-3"
                alt="International Collaboration"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
export default InternationalCollaboration;

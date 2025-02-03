import React from "react";
import Slider from "react-slick";

function Recruiters() {
  const url = process.env.REACT_APP_URL || "#";

  const placement_01 = {
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
      },
    ],
  };

  return (
    <section>
      <div className="container bg-white rounded-3 pt-5 " id="recruiters">
        <div className="row  justify-content-center">
          <div className="col-lg-9 text-center">
            <img
              src={`${url}images/dypatil/heading/1.png`}
              height="30px"
              alt=""
            />
            <h2 className="title_01 text-center">Our Recruiters</h2>
          </div>
        </div>
        <Slider
          className="row placement_01 ms-1 me-2 mx-lg-auto py-lg-2 justify-content-center text-center border"
          {...placement_01}
        >
          <div className=" company_01 border-end ">
            <img
              src={`${url}images/dypatil/placement/new/1.webp`}
              loading="lazy"
              className="px-3"
              alt="Placement Companies"
            />
          </div>
          <div className=" company_01 border-end ">
            <img
              src={`${url}images/dypatil/placement/new/2.webp`}
              loading="lazy"
              className="px-3"
              alt="Placement Companies"
            />
          </div>
          <div className=" company_01 border-end ">
            <img
              src={`${url}images/dypatil/placement/new/3.webp`}
              loading="lazy"
              className="px-3"
              alt="Placement Companies"
            />
          </div>
          <div className=" company_01 border-end ">
            <img
              src={`${url}images/dypatil/placement/new/4.webp`}
              loading="lazy"
              className="px-3"
              alt="Placement Companies"
            />
          </div>
          <div className=" company_01 border-end ">
            <img
              src={`${url}images/dypatil/placement/new/5.webp`}
              loading="lazy"
              className="px-3"
              alt="Placement Companies"
            />
          </div>
          <div className=" company_01 border-end ">
            <img
              src={`${url}images/dypatil/placement/new/6.webp`}
              loading="lazy"
              className="px-3"
              alt="Placement Companies"
            />
          </div>
          <div className=" company_01 border-end ">
            <img
              src={`${url}images/dypatil/placement/new/7.webp`}
              loading="lazy"
              className="px-3"
              alt="Placement Companies"
            />
          </div>
          <div className=" company_01 border-end ">
            <img
              src={`${url}images/dypatil/placement/new/8.webp`}
              loading="lazy"
              className="px-3"
              alt="Placement Companies"
            />
          </div>
          <div className=" company_01 border-end ">
            <img
              src={`${url}images/dypatil/placement/new/9.webp`}
              loading="lazy"
              className="px-3"
              alt="Placement Companies"
            />
          </div>
          <div className=" company_01 border-end ">
            <img
              src={`${url}images/dypatil/placement/new/10.webp`}
              loading="lazy"
              className="px-3"
              alt="Placement Companies"
            />
          </div>
          <div className=" company_01 border-end ">
            <img
              src={`${url}images/dypatil/placement/new/11.webp`}
              loading="lazy"
              className="px-3"
              alt="Placement Companies"
            />
          </div>
          <div className=" company_01 border-end ">
            <img
              src={`${url}images/dypatil/placement/new/12.webp`}
              loading="lazy"
              className="px-3"
              alt="Placement Companies"
            />
          </div>
          <div className=" company_01 border-end ">
            <img
              src={`${url}images/dypatil/placement/new/13.webp`}
              loading="lazy"
              className="px-3"
              alt="Placement Companies"
            />
          </div>
          <div className=" company_01 border-end ">
            <img
              src={`${url}images/dypatil/placement/new/14.webp`}
              loading="lazy"
              className="px-3"
              alt="Placement Companies"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Recruiters;

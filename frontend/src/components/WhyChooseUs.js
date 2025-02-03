import React from 'react';

function WhyChooseUs(){
    const url = process.env.REACT_APP_URL || "#";
    return(
        <section className="py-5 why_01" data-bgimg="images/dypatil/why/bg_01.jpg">
      <div className="container" id="why-choose-us">
        <div className="row  justify-content-center">
          <div className="col-lg-9 text-center">
            <h2 className="title_01 text-center text-white">Why D Y Patil School of Public Health? </h2>
            <p className="text-center text-white">We are committed to train competent and skilled public health
              professionals who will be leaders of tomorrow. A thoughtfully designed curriculum delivered through
              innovative pedagogy, the opportunities to collaborate and work with reputed organisations, and the space
              to engage in impactful research, all while learning alongside renowned leaders in the field makes this a
              unique school of Public Health. </p>
          </div>
        </div>
        <div className="row align-item-center">
          <div className="col-lg-5">
            <div className="border why_02 position-relative mb-3">
              <div className="px-lg-5 px-3 d-flex justify-content-between align-items-center py-3">
                <h6 className=" mb-0">Globally relevant curriculum </h6>
                <div className=" p-2 choose_us_sect position-relative">
                  <img src={`${url}images/dypatil/why/1.png`} className="filter" alt=""/>
                </div>
              </div>
            </div>
            <div className="border why_02 position-relative mb-3">
              <div className="px-lg-5 px-3 d-flex justify-content-between align-items-center py-3">
                <h6 className=" mb-0">Multi & Interdisciplinary in nature </h6>
                <div className=" p-2 choose_us_sect position-relative">
                  <img src={`${url}images/dypatil/why/2.png`} className="filter" alt=""/>
                </div>
              </div>
            </div>
            <div className="border why_02 position-relative mb-3">
              <div className="px-lg-5 px-3 d-flex justify-content-between align-items-center py-3">
                <h6 className=" mb-0">Technology enabled learning </h6>
                <div className=" p-2 choose_us_sect position-relative">
                  <img src={`${url}images/dypatil/why/3.png`} className="filter" alt=""/>
                </div>
              </div>
            </div>
            <div className="border why_02 position-relative mb-3">
              <div className="px-lg-5 px-3 d-flex justify-content-between align-items-center py-3">
                <h6 className=" mb-0">Field Exposure </h6>
                <div className=" p-2 choose_us_sect position-relative">
                  <img src={`${url}images/dypatil/why/4.png`} className="filter" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 text-center">
            {/* <!-- <img src={`${url}images/dypatil/why/01.png`} className="why_ph_img" alt=""/> --> */}
          </div>
          <div className="col-lg-5 pt-4 pt-lg-0">
            <div className="border why_02 position-relative mb-3">
              <div className="ps-lg-5 px-3 d-flex align-items-center py-3">
                <div className=" p-2 choose_us_sect position-relative">
                  <img src={`${url}images/dypatil/why/5.png`} className="filter" alt=""/>
                </div>
                <h6 className="ps-3 mb-0">Holistic learning experience </h6>
              </div>
            </div>
            <div className="border why_02 position-relative mb-3">
              <div className="ps-lg-5 px-3 d-flex align-items-center py-3">
                <div className=" p-2 choose_us_sect position-relative">
                  <img src={`${url}images/dypatil/why/6.png`} className="filter" alt=""/>
                </div>
                <h6 className="ps-3 mb-0">Subscription to online learning portals </h6>
              </div>
            </div>
            <div className="border why_02 position-relative mb-3">
              <div className="ps-lg-5 px-3 d-flex align-items-center py-3">
                <div className=" p-2 choose_us_sect position-relative">
                  <img src={`${url}images/dypatil/why/7.png`} className="filter" alt=""/>
                </div>
                <h6 className="ps-3 mb-0">Student driven activities </h6>
              </div>
            </div>
            <div className="border why_02 position-relative mb-3">
              <div className="ps-lg-5 px-3 d-flex align-items-center py-3">
                <div className=" p-2 choose_us_sect position-relative">
                  <img src={`${url}images/dypatil/why/8.png`} className="filter" alt=""/>
                </div>
                <h6 className="ps-3 mb-0">Collaborate and Work with Reputed Organisations</h6>
              </div>
            </div>
          </div>
        </div>\
      </div>
    </section>
    );
}
export default WhyChooseUs;
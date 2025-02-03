import React from 'react';

function JobProfile(){
    const url = process.env.REACT_APP_URL || "#";
    return(
        <section className="bg-white pt-lg-5 pt-3 d-none">
      <div className="container" id="job_profile">

        <div className="row d-flex align-items-stretch">
          <div className="col-lg-5 d-flex">
            <div className="job_profilebox bg-red shadow-lg p-4">
              <h2 className="title_01 mb-2 text-white">Job Profile</h2>
              <hr className="jobhr"/>
              <ul>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Epidemiologist</li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Research Officers</li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Technical Leads</li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Program Managers</li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Biostatistician</li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Scientific Advisors</li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Health Care Consultant </li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Environmental Health Scientist</li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Clinical Dietician, Nutritionist </li>
                <li><i className="bi bi-check-circle-fill pe-2 text-white"></i> Public Health Educator</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-7 d-flex">
            <div className="industrybox shadow-lg p-4">
              <h2 className="title_01 mb-1">Industry Scope</h2>
              <hr className="industryhr"/>
              <div className="row gy-4 industryimages gy-4">
                <div className="col-lg-4 col-4">
                  <img src={`${url}images/dypatil/industryscope/1.png`} className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src={`${url}images/dypatil/industryscope/2.png`} className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src={`${url}images/dypatil/industryscope/3.png`} className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src={`${url}images/dypatil/industryscope/4.png`} className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src={`${url}images/dypatil/industryscope/5.png`} className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src={`${url}images/dypatil/industryscope/6.png`} className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src={`${url}images/dypatil/industryscope/7.png`} className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src={`${url}images/dypatil/industryscope/8.png`} className=""/>
                </div>
                <div className="col-lg-4 col-4">
                  <img src={`${url}images/dypatil/industryscope/9.png`} className=""/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    );
}
export default JobProfile;
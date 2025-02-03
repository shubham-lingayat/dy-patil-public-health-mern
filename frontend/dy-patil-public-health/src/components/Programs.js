import React from "react";

const coursesData = {
  "Bachelor of Public Health (BPH)": {
    overview: "Bachelor of Public Health (BPH) is an undergraduate degree programme designed to address the growing demand for professionals who can understand, analyse and respond to complex public health challenges. This interdisciplinary program integrates principles from medicine, social sciences, policy and management to develop well-rounded graduates capable of making a positive impact on public health systems. A crucial component of the program is practical training and internships, where students gain real-world experience by working with public health agencies, NGOs, healthcare facilities and research institutions. Choice based electives is another highlight of the programme, allowing students to tailor their education based on their interests and career aspirations, making the program versatile and adaptable to changing needs. Students can opt for electives in the areas of epidemiology, health promotion, healthcare management, environmental health and more. Bachelor of Public Health is a three year degree program. Its having extended specialization & internship period, building professional skills both on academic as well as the industry standards.",
    eligibility: [
      " Prospective candidates are required to have successfully completed the 10+2 or an equivalent examination in any stream from a recognized board with a minimum aggregate of 55%.",
      "Note: The admission of Foreign Nationals / NRIs, however, shall be based on the prescribed academic qualification as evaluated by the Internal Admission Cell.",
    ],
    duartion: "4 Years",
  },
  "B.Sc. in Environment & Sustainability": {
    overview:"Understanding both scientific principles and relevant policy frameworks is essential if we are to address global environmental challenges including climate change and sustainable development. The program has a strong focus on practice and you will study environmental processes and their management by combining small group, classroom based learning with fieldwork, case studies, group discussion By the time you graduate, you will have an advanced understanding of environmental systems and processes and the policies and practices involved in their management. You will also have gained a wide range of practice based skills, which enhance your employability including the design and implementation of ecological surveys, conservation management, environmental appraisal and audit, environmental impact assessment, project. management and professional report writing. B.Sc. in Environmental & Sustainability is a four year degree program. Its having extended specialization & internship period, building professional skills both on academic as well as the industry standards",
    eligibility: [
      "An applicant for admission to the course must have completed a 10+2 or Pre-University examination from a recognized Institute or Board.",
      "Note: The admission of Foreign Nationals / NRIs, however, shall be based on the prescribed academic qualification as evaluated by the Internal Admission Cell.",
    ],
    duartion: "4 Years",
  },
  "Masters Of Public Health": {
    overview:
      "The DY Patil School of Public Health (DYPSPH) has been established with the vision of protecting and promoting population health through quality education, impactful research and meaningful community engagement. The Masters of Public Health (MPH) programme offered by the school is designed to train competent and skilled specialists who will aid in problem solving and critical thinking in the public health domain and effectively meet the public health needs of the country.",
    eligibility: [
      "The course is open to candidates with a Bachelor's / Master's / Doctoral degree from a recognised  university in India or abroad as detailed below:",
      "Bachelor's degree in health sciences / Professional degree in a health related field.",
      "Bachelor's degree (Non health Sciences) with at least 2 years of experience in a relevant health related field.",
      "Master's degree in a health related field Doctoral degree in a health profession or academic area related to public health (MD/MDS/PhD).",
    ],
    duartion: "2 Years",
  },
  "Master of Public Policy": {
    overview:
      "The complexities of modern governance demand well-trained policy professionals who can address pressing societal challenges. The Master of Public Policy (MPP) is a two year post graduate programme that aims to equip students with the skills and knowledge necessary to navigate policy landscapes and drive meaningful change. MPP addresses the growing need for policy experts capable of crafting effective solutions to diverse social, economic, health and environmental issues. It amalgamates insights from political science, economics, law, sociology, health and other fields to cultivate leaders who can design, analyse, and advocate for policies that shape societies positively. MPP is a Masters’ programme of 2 years duration delivered in 4 semesters with a total of 80 credits.",
    eligibility: [
      "First class Bachelor’s Degree in any stream (with a minimum of 60% marks or equivalent grade) from UGC recognized Universities.",
      "Note: The admission of foreign nationals / NRIs, however, shall be based on the prescribed academic qualification as evaluated by the Internal Admission Cell.",
    ],
    duartion: "2 Years",
  },
};

function Programs() {
  const url = process.env.REACT_APP_URL || "#";
  return (
    <section id="programs" className="programsSection py-3">
      <div className="container d-none d-lg-block">
        <div className="row">
          <div className="col-md-12 text-center">
            <img
              src={`${url}images/dypatil/heading/1.png`}
              height="30px"
              alt=""
            />
            <h2 className=" title_01 pro_01 ">Our Programs </h2>
          </div>
          <div className="col-md-12 ">
            {/* <!-- Nav pills --> */}
            <ul
              className="nav nav-pills nav-fill mt-3"
              id="programTabs"
              role="tablist"
            >
              {/* Map Function - START */}
              {Object.entries(coursesData).map(
                ([courseName, details], index) => (
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${index === 0 ? "active" : ""}`}
                      id={`tab-${index}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#tab-${index}`}
                      type="button"
                      role="tab"
                      aria-controls={`tab-${index}`}
                      aria-selected={`${index === 0 ? "true" : "false"}`}
                    >
                      {courseName}
                    </button>
                  </li>
                )
              )}
              {/* Map Function - END */}
            </ul>
          </div>
        </div>
        <div className="row mt-4 mb-lg-4">
          <div className="col-12">
            <div className="tab-content" id="programTabContent">
              {/* Map Function - START */}
              {Object.entries(coursesData).map(
                ([courseName, details], index) => (
                  <div
                    className={`tab-pane fade ${
                      index === 0 ? "show active" : ""
                    }`}
                    id={`tab-${index}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${index}-tab`}
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <div
                          className="programImg"
                          data-bgimg={`./images/dypatil/programs/${
                            index + 1
                          }.webp`}
                        ></div>
                      </div>
                      <div className="col-sm-6">
                        <div className="course-container">
                          <div
                            className="accordion"
                            id={`accordionProgramDesk${index}`}
                          >
                            {/* Inner Map Function - START */}
                            {Object.keys(details).map((key, i) => (
                              <div key={key} className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id={`accordian-${key}-${index}`}
                                >
                                  <button
                                    className={`accordion-button ${
                                      key === "overview" ? "" : "collapsed"
                                    }`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#accordian-collapse-${key}-${index}`}
                                    aria-expanded={
                                      key === "overview" ? "true" : "false"
                                    }
                                    aria-controls={`accordian-collapse-${key}-${index}`}
                                  >
                                    {key==="overview" ? `About ${courseName}` : key }
                                  </button>
                                </h2>
                                <div
                                  id={`accordian-collapse-${key}-${index}`}
                                  className={`accordion-collapse collapse ${
                                    key === "overview" ? "show" : ""
                                  } `}
                                  aria-labelledby={`accordian-${key}-${index}`}
                                  data-bs-parent={`#accordionProgramDesk${index}`}
                                >
                                  <div className="accordion-body">
                                    {/* Check if its contains an array for list  */}
                                    {Array.isArray(details[key]) ? (
                                      <ul>
                                        {details[key].map((item, j) => (
                                          <li key={j}>{item}</li>
                                        ))}
                                      </ul>
                                    ) : (
                                      <p>{details[key]}</p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                            {/* Inner Map Function - END */}
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn c_btn py-2 px-3"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Enquire Now
                        </a>
                      </div>
                    </div>
                  </div>
                )
              )}
              {/* Map Function - END */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Programs */}
      <div className="container d-lg-none">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title_01 text-center">
              Our Programs <span className="horizontalLine"></span>
            </h2>
          </div>
          <div className="col-md-12">
            <div className="course-container">
            
            <div
                            className="accordion"
                            id="accordionProgramMobile"
                          >
            {/* Map Function - START */}
              {Object.entries(coursesData).map(
                ([courseName, details], index) => (
                          <div key={courseName} className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id={`accordian-${courseName}-${index}`}
                                >
                                  <button
                                    className={`accordion-button ${
                                      index === 0 ? "" : "collapsed"
                                    }`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#accordian-collapse-${courseName}-${index}`}
                                    aria-expanded={
                                      index === 0 ? "true" : "false"
                                    }
                                    aria-controls={`accordian-collapse-${courseName}-${index}`}
                                  >
                                    {courseName}
                                  </button>
                                </h2>
                                <div
                                  id={`accordian-collapse-${courseName}-${index}`}
                                  className={`accordion-collapse collapse ${
                                    index === 0 ? "show" : ""
                                  } `}
                                  aria-labelledby={`accordian-${courseName}-${index}`}
                                  data-bs-parent={`#accordionProgramMobile${index}`}
                                >
                                  <div className="accordion-body">
                                    {/* Inner Map Function - START */}
                                    {Object.keys(details).map((key, i) => (
                                      <div key={key}>
                                      {key}:
                                            {/* Check if its contains an array for list */}
                                            {Array.isArray(details[key]) ? (
                                              <ul>
                                                {details[key].map((item, j) => (
                                                  <li key={j}>{item}</li>
                                                ))}
                                              </ul>
                                            ) : (
                                              <p>{details[key]}</p>
                                            )}
                                          </div>
                                    ))}
                                    {/* Inner Map Function - END */}
                                    <a
                                      href="#"
                                      className="btn c_btn py-2 px-3"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                    >
                                      Enquire Now
                                    </a>
                                  </div>
                                </div>
                              </div>
                  ))}
                  
                  </div>
            </div>
          </div>
                        
          </div>
        </div>
      
    </section>
  )};
  
export default Programs;

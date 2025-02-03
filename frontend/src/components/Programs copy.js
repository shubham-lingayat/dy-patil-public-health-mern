import React from "react";

const coursesData  = {
  "Bachelor of Public Health (BPH)":{
      "overview":"Bachelor of Public Health (BPH) is an undergraduate degree programme designed to address the growing demand for professionals who can understand, analyse and respond to complex public health challenges. This interdisciplinary program integrates principles from medicine, social sciences, policy and management to develop well-rounded graduates capable of making a positive impact on public health systems. A crucial component of the program is practical training and internships, where students gain real-world experience by working with public health agencies, NGOs, healthcare facilities and research institutions. Choice based electives is another highlight of the programme, allowing students to tailor their education based on their interests and career aspirations, making the program versatile and adaptable to changing needs. Students can opt for electives in the areas of epidemiology, health promotion, healthcare management, environmental health and more. Bachelor of Public Health is a three year degree program. Its having extended specialization & internship period, building professional skills both on academic as well as the industry standards.",
      "eligibility":[" Prospective candidates are required to have successfully completed the 10+2 or an equivalent examination in any stream from a recognized board with a minimum aggregate of 55%.", "Note: The admission of Foreign Nationals / NRIs, however, shall be based on the prescribed academic qualification as evaluated by the Internal Admission Cell."],
      "duartion":"4 Years"
  },
  "B.Sc. in Environment & Sustainability":{
      "overview":"Understanding both scientific principles and relevant policy frameworks is essential if we are to address global environmental challenges including climate change and sustainable development. The program has a strong focus on practice and you will study environmental processes and their management by combining small group, classroom based learning with fieldwork, case studies, group discussion By the time you graduate, you will have an advanced understanding of environmental systems and processes and the policies and practices involved in their management. You will also have gained a wide range of practice based skills, which enhance your employability including the design and implementation of ecological surveys, conservation management, environmental appraisal and audit, environmental impact assessment, project. management and professional report writing. B.Sc. in Environmental & Sustainability is a four year degree program. Its having extended specialization & internship period, building professional skills both on academic as well as the industry standards",
      "eligibility":["An applicant for admission to the course must have completed a 10+2 or Pre-University examination from a recognized Institute or Board.", "Note: The admission of Foreign Nationals / NRIs, however, shall be based on the prescribed academic qualification as evaluated by the Internal Admission Cell."],
      "duartion":"4 Years"
  },
  "Masters Of Public Health":{
      "overview":"The DY Patil School of Public Health (DYPSPH) has been established with the vision of protecting and promoting population health through quality education, impactful research and meaningful community engagement. The Masters of Public Health (MPH) programme offered by the school is designed to train competent and skilled specialists who will aid in problem solving and critical thinking in the public health domain and effectively meet the public health needs of the country.",
      "eligibility":["The course is open to candidates with a Bachelor's / Master's / Doctoral degree from a recognised  university in India or abroad as detailed below:", "Bachelor's degree in health sciences / Professional degree in a health related field.", "Bachelor's degree (Non health Sciences) with at least 2 years of experience in a relevant health related field.", "Master's degree in a health related field Doctoral degree in a health profession or academic area related to public health (MD/MDS/PhD)."],
      "duartion":"2 Years"
  },
  "Master of Public Policy":{
      "overview":"The complexities of modern governance demand well-trained policy professionals who can address pressing societal challenges. The Master of Public Policy (MPP) is a two year post graduate programme that aims to equip students with the skills and knowledge necessary to navigate policy landscapes and drive meaningful change. MPP addresses the growing need for policy experts capable of crafting effective solutions to diverse social, economic, health and environmental issues. It amalgamates insights from political science, economics, law, sociology, health and other fields to cultivate leaders who can design, analyse, and advocate for policies that shape societies positively. MPP is a Masters’ programme of 2 years duration delivered in 4 semesters with a total of 80 credits.",
      "eligibility":["First class Bachelor’s Degree in any stream (with a minimum of 60% marks or equivalent grade) from UGC recognized Universities.", "Note: The admission of foreign nationals / NRIs, however, shall be based on the prescribed academic qualification as evaluated by the Internal Admission Cell."],
      "duartion":"2 Years"
  }
}

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
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="tab-one-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-one"
                  type="button"
                  role="tab"
                  aria-controls="tab-one"
                  aria-selected="true"
                >
                  Bachelor of Public Health (BPH)
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tab-two-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-two"
                  type="button"
                  role="tab"
                  aria-controls="tab-two"
                  aria-selected="false"
                >
                  B.Sc. in Environment & Sustainability
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tab-three-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-three"
                  type="button"
                  role="tab"
                  aria-controls="tab-three"
                  aria-selected="false"
                >
                  Master of Public Health
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tab-four-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-four"
                  type="button"
                  role="tab"
                  aria-controls="tab-four"
                  aria-selected="false"
                >
                  Master of Public Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4 mb-lg-4">
          <div className="col-12">
            {/* <!-- Tab content --> */}
            <div className="tab-content" id="programTabContent">
              <div
                className="tab-pane fade show active"
                id="tab-one"
                role="tabpanel"
                aria-labelledby="tab-one-tab"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div
                      className="programImg"
                      data-bgimg="./images/dypatil/programs/1.webp"
                    ></div>
                  </div>
                  <div className="col-sm-6">
                    <div className="course-container">
                      {/* Accordian */}
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Accordion Item #1
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Accordion Item #2
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Accordion Item #3
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <a
                      href=""
                      className="btn c_btn py-2 px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tab-two"
                role="tabpanel"
                aria-labelledby="tab-two-tab"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div
                      className="programImg"
                      data-bgimg="./images/dypatil/programs/2.webp"
                    ></div>
                  </div>
                  <div className="col-sm-6">
                    <div className="course-container">
                      <div className="accordion active">
                        <div className="accordion-header">
                          About B.Sc. in Environment & Sustainability
                        </div>
                        <div className="accordion-content">
                          <p align="justify">
                            Understanding both scientific principles and
                            relevant policy frameworks is essential if we are to
                            address global environmental challenges including
                            climate change and sustainable development. The
                            program has a strong focus on practice and you will
                            study environmental processes and their management
                            by combining small group, classroom based learning
                            with fieldwork, case studies, group discussion By
                            the time you graduate, you will have an advanced
                            understanding of environmental systems and processes
                            and the policies and practices involved in their
                            management. You will also have gained a wide range
                            of practice based skills, which enhance your
                            employability including the design and
                            implementation of ecological surveys, conservation
                            management, environmental appraisal and audit,
                            environmental impact assessment, project. management
                            and professional report writing. B.Sc. in
                            Environmental & Sustainability is a four year degree
                            program. Its having extended specialization &
                            internship period, building professional skills both
                            on academic as well as the industry standards
                          </p>
                        </div>
                      </div>
                      <div className="accordion">
                        <div className="accordion-header">Eligibility</div>
                        <div className="accordion-content">
                          <ul>
                            <li>
                              An applicant for admission to the course must have
                              completed a 10+2 or Pre-University examination
                              from a recognized Institute or Board.{" "}
                            </li>
                            <li>
                              Note: The admission of Foreign Nationals / NRIs,
                              however, shall be based on the prescribed academic
                              qualification as evaluated by the Internal
                              Admission Cell.{" "}
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="accordion">
                        <div className="accordion-header">Duration</div>
                        <div className="accordion-content">
                          <ul>
                            <li>4 Years</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a
                      href=""
                      className="btn c_btn py-2 px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tab-three"
                role="tabpanel"
                aria-labelledby="tab-three-tab"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div
                      className="programImg"
                      data-bgimg="./images/dypatil/programs/3.webp"
                    ></div>
                  </div>
                  <div className="col-sm-6">
                    <div className="course-container">
                      <div className="accordion active">
                        <div className="accordion-header">
                          About Masters Of Public Health
                        </div>
                        <div className="accordion-content">
                          <p align="justify">
                            The DY Patil School of Public Health (DYPSPH) has
                            been established with the vision of protecting and
                            promoting population health through quality
                            education, impactful research and meaningful
                            community engagement. The Masters of Public Health
                            (MPH) programme offered by the school is designed to
                            train competent and skilled specialists who will aid
                            in problem solving and critical thinking in the
                            public health domain and effectively meet the public
                            health needs of the country.
                          </p>
                        </div>
                      </div>
                      <div className="accordion">
                        <div className="accordion-header">Eligibility</div>
                        <div className="accordion-content">
                          <ul>
                            <li>
                              The course is open to candidates with a Bachelor's
                              / Master's / Doctoral degree from a recognised
                              university in India or abroad as detailed below:{" "}
                            </li>
                            <li>
                              Bachelor's degree in health sciences /
                              Professional degree in a health related field
                            </li>
                            <li>
                              Bachelor's degree (Non health Sciences) with at
                              least 2 years of experience in a relevant health
                              related field.{" "}
                            </li>
                            <li>
                              Master's degree in a health related field Doctoral
                              degree in a health profession or academic area
                              related to public health (MD/MDS/PhD){" "}
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="accordion">
                        <div className="accordion-header">Duration</div>
                        <div className="accordion-content">
                          <ul>
                            <li> 2 Years</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a
                      href=""
                      className="btn c_btn py-2 px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tab-four"
                role="tabpanel"
                aria-labelledby="tab-four-tab"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div
                      className="programImg"
                      data-bgimg="./images/dypatil/programs/4.webp"
                    ></div>
                  </div>
                  <div className="col-sm-6">
                    <div className="course-container">
                      <div className="accordion active">
                        <div className="accordion-header">
                          About Master of Public Policy
                        </div>
                        <div className="accordion-content">
                          <p align="justify">
                            The complexities of modern governance demand
                            well-trained policy professionals who can address
                            pressing societal challenges. The Master of Public
                            Policy (MPP) is a two year post graduate programme
                            that aims to equip students with the skills and
                            knowledge necessary to navigate policy landscapes
                            and drive meaningful change. MPP addresses the
                            growing need for policy experts capable of crafting
                            effective solutions to diverse social, economic,
                            health and environmental issues. It amalgamates
                            insights from political science, economics, law,
                            sociology, health and other fields to cultivate
                            leaders who can design, analyse, and advocate for
                            policies that shape societies positively. MPP is a
                            Masters’ programme of 2 years duration delivered in
                            4 semesters with a total of 80 credits.
                          </p>
                        </div>
                      </div>
                      <div className="accordion">
                        <div className="accordion-header">Eligibility</div>
                        <div className="accordion-content">
                          <ul>
                            <li>
                              First class Bachelor’s Degree in any stream (with
                              a minimum of 60% marks or equivalent grade) from
                              UGC recognized Universities.
                            </li>
                            <li>
                              Note: The admission of foreign nationals / NRIs,
                              however, shall be based on the prescribed academic
                              qualification as evaluated by the Internal
                              Admission Cell.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="accordion">
                        <div className="accordion-header">Duration</div>
                        <div className="accordion-content">
                          <ul>
                            <li>2 Years</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a
                      href=""
                      className="btn c_btn py-2 px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-lg-none">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title_01 text-center">
              Our Programs <span className="horizontalLine"></span>
            </h2>
          </div>
          <div className="col-md-12">
            <div className="course-container">
              <div className="accordion active">
                <div className="accordion-header">
                  Bachelor of Public Health (BPH)
                </div>
                <div className="accordion-content">
                  <h6>Bachelor of Public Health (BPH)</h6>
                  <p align="justify">
                    {" "}
                    Bachelor of Public Health (BPH) is an undergraduate degree
                    programme designed to address the growing demand for
                    professionals who can understand, analyse and respond to
                    complex public health challenges. This interdisciplinary
                    program integrates principles from medicine, social
                    sciences, policy and management to develop well-rounded
                    graduates capable of making a positive impact on public
                    health systems. A crucial component of the program is
                    practical training and internships, where students gain
                    real-world experience by working with public health
                    agencies, NGOs, healthcare facilities and research
                    institutions. Choice based electives is another highlight of
                    the programme, allowing students to tailor their education
                    based on their interests and career aspirations, making the
                    program versatile and adaptable to changing needs. Students
                    can opt for electives in the areas of epidemiology, health
                    promotion, healthcare management, environmental health and
                    more. Bachelor of Public Health is a three year degree
                    program. Its having extended specialization & internship
                    period, building professional skills both on academic as
                    well as the industry standards.
                  </p>
                  <h6>Eligibility</h6>
                  <ul>
                    <li>
                      Prospective candidates are required to have successfully
                      completed the 10+2 or an equivalent examination in any
                      stream from a recognized board with a minimum aggregate of
                      55%.{" "}
                    </li>
                    <li>
                      Note: The admission of Foreign Nationals / NRIs, however,
                      shall be based on the prescribed academic qualification as
                      evaluated by the Internal Admission Cell.
                    </li>
                  </ul>
                  <h6>Duration</h6>
                  <p align="justify"> 4 Years</p>
                  <a
                    href=""
                    className="btn c_btn py-2 px-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>

              <div className="accordion">
                <div className="accordion-header">
                  B.Sc. in Environment & Sustainability
                </div>
                <div className="accordion-content">
                  <h6>B.Sc. in Environment & Sustainability</h6>
                  <p align="justify">
                    Understanding both scientific principles and relevant policy
                    frameworks is essential if we are to address global
                    environmental challenges including climate change and
                    sustainable development. The program has a strong focus on
                    practice and you will study environmental processes and
                    their management by combining small group, classroom based
                    learning with fieldwork, case studies, group discussion By
                    the time you graduate, you will have an advanced
                    understanding of environmental systems and processes and the
                    policies and practices involved in their management. You
                    will also have gained a wide range of practice based skills,
                    which enhance your employability including the design and
                    implementation of ecological surveys, conservation
                    management, environmental appraisal and audit, environmental
                    impact assessment, project. management and professional
                    report writing. B.Sc. in Environmental & Sustainability is a
                    four year degree program. Its having extended specialization
                    & internship period, building professional skills both on
                    academic as well as the industry standards
                  </p>
                  <h6>Eligibility</h6>
                  <ul>
                    <li>
                      An applicant for admission to the course must have
                      completed a 10+2 or Pre-University examination from a
                      recognized Institute or Board.{" "}
                    </li>
                    <li>
                      Note: The admission of Foreign Nationals / NRIs, however,
                      shall be based on the prescribed academic qualification as
                      evaluated by the Internal Admission Cell.{" "}
                    </li>
                  </ul>
                  <h6>Duration</h6>
                  <p align="justify">4 Years</p>
                  <a
                    href=""
                    className="btn c_btn py-2 px-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>

              <div className="accordion">
                <div className="accordion-header">Master of Public Health</div>
                <div className="accordion-content">
                  <h6>Master of Public Health</h6>
                  <p align="justify">
                    The DY Patil School of Public Health (DYPSPH) has been
                    established with the vision of protecting and promoting
                    population health through quality education, impactful
                    research and meaningful community engagement. The Masters of
                    Public Health (MPH) programme offered by the school is
                    designed to train competent and skilled specialists who will
                    aid in problem solving and critical thinking in the public
                    health domain and effectively meet the public health needs
                    of the country.
                  </p>
                  <h6>Eligibility</h6>
                  <ul>
                    <li>
                      The course is open to candidates with a Bachelor's /
                      Master's / Doctoral degree from a recognised university in
                      India or abroad as detailed below:{" "}
                    </li>
                    <li>
                      Bachelor's degree in health sciences / Professional degree
                      in a health related field
                    </li>
                    <li>
                      Bachelor's degree (Non health Sciences) with at least 2
                      years of experience in a relevant health related field.{" "}
                    </li>
                    <li>
                      Master's degree in a health related field Doctoral degree
                      in a health profession or academic area related to public
                      health (MD/MDS/PhD){" "}
                    </li>
                  </ul>
                  <h6>Duration</h6>
                  <p align="justify">2 Years</p>
                  <a
                    href=""
                    className="btn c_btn py-2 px-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>

              <div className="accordion">
                <div className="accordion-header">Master of Public Policy</div>
                <div className="accordion-content">
                  <h6>Master of Public Policy</h6>
                  <p align="justify">
                    The complexities of modern governance demand well-trained
                    policy professionals who can address pressing societal
                    challenges. The Master of Public Policy (MPP) is a two year
                    post graduate programme that aims to equip students with the
                    skills and knowledge necessary to navigate policy landscapes
                    and drive meaningful change. MPP addresses the growing need
                    for policy experts capable of crafting effective solutions
                    to diverse social, economic, health and environmental
                    issues. It amalgamates insights from political science,
                    economics, law, sociology, health and other fields to
                    cultivate leaders who can design, analyse, and advocate for
                    policies that shape societies positively. MPP is a Masters’
                    programme of 2 years duration delivered in 4 semesters with
                    a total of 80 credits.
                  </p>
                  <h6>Eligibility</h6>
                  <ul>
                    <li>
                      First class Bachelor’s Degree in any stream (with a
                      minimum of 60% marks or equivalent grade) from UGC
                      recognized Universities.{" "}
                    </li>
                    <li>
                      Note: The admission of foreign nationals / NRIs, however,
                      shall be based on the prescribed academic qualification as
                      evaluated by the Internal Admission Cell.
                    </li>
                  </ul>
                  <h6>Duration</h6>
                  <p align="justify"> 2 Years</p>
                  <a
                    href=""
                    className="btn c_btn py-2 px-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Programs;

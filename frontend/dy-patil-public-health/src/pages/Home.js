import React, { useEffect } from "react";
import Gallery from "../components/Gallery";
import Recruiters from "../components/Recruiters";
import Programs from "../components/Programs";
import WhyChooseUs from "../components/WhyChooseUs";
import JobProfile from "../components/JobProfile";
import AdvisoryMembers from "../components/AdvisoryMembers";
import InternationalCollaboration from "../components/InternationalCollaboration";
import WhyChooseUs2 from "../components/WhyChooseUs2";
import SuccessStories from "../components/SuccessStories";

function Home() {
  const url = process.env.REACT_APP_URL || "#";

  // For Background Image
  useEffect(() => {
    document.querySelectorAll("[data-bgimg]").forEach((element) => {
      const bgImage = element.getAttribute("data-bgimg");
      if (bgImage) {
        element.style.backgroundImage = `url(${bgImage})`;
      }
    });
  }, []);

  // Navbar JS - START ----------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Add or remove shadow from sticky navbar
      const navbar = document.querySelector(".sticky-top");
      if (navbar) {
        if (scrollTop > 300) {
          navbar.classList.add("shadow", "top_01");
        } else {
          navbar.classList.remove("shadow");
        }
      }

      // Show or hide back-to-top button
      const backToTop = document.querySelector(".back-to-top");
      if (backToTop) {
        if (scrollTop > 100) {
          backToTop.style.display = "block";
        } else {
          backToTop.style.display = "none";
        }
      }
    };

    // Scroll to top function
    const scrollToTop = (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Attach click event listener to back-to-top button
    const backToTopButton = document.querySelector(".back-to-top");
    if (backToTopButton) {
      backToTopButton.addEventListener("click", scrollToTop);
    }

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (backToTopButton) {
        backToTopButton.removeEventListener("click", scrollToTop);
      }
    };
  }, []);
  // Navbar JS - END ----------------------------------------------------------------------------------------------------------------

  return (
    <div>
      {/* header */}
      <div className="container-fluid h_nav sticky-top top_01 shadow">
        <div className="container">
          <nav className="navbar navbar-expand-lg  navbar-light">
            <a href={`${url}`} className="navbar-brand">
              <img
                src={`${url}images/dypatil/logo/3.webp`}
                className="hero_logo_01"
                loading="lazy"
                alt=""
              />
              <img
                src={`${url}images/dypatil/logo/naac.webp`}
                className="hero_logo_02"
                loading="lazy"
                alt=""
              />
            </a>
            <a
              href={`${url}`}
              className="btn c_btn fw-normal btn_font d-lg-none"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Enquire Now
            </a>
            <button
              type="button"
              className="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center align-items-center"
              id="navbarCollapse"
            >
              <div className="navbar-nav">
                {/* <!-- <a href="" className="nav-item nav-link active">Home </a> --> */}
                <a href="#programs" className="nav-item nav-link">
                  Programs
                </a>
                <a href="#why-choose-us" className="nav-item nav-link">
                  Why Choose Us{" "}
                </a>
                <a href="#recruiters" className="nav-item nav-link ">
                  Recruiters
                </a>
                <a href="#about-us" className="nav-item nav-link active">
                  About Us{" "}
                </a>
                <a href="#success-stories" className="nav-item nav-link ">
                  Success Stories
                </a>
                <a href="#campuslife" className="nav-item nav-link">
                  Life@ D Y Patil
                </a>
              </div>
            </div>
            <div className="d-lg-block d-none">
              <a
                href={`${url}`}
                className="btn c_btn py-2 px-3 cta-rt"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Enquire Now
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* Hero */}

      <section
        className="container-fluid position-relative pt_001 d-lg-block px-0 d-none hero_section text-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <div className="container ">
          <div className="row pe-lg-0">
            <div className="col-lg-8">
              <div className="position-relative">
                <img
                  src={`${url}images/dypatil/hero/1.png`}
                  className="w-100 rounded-3 border video_height"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4 pb-3 pb-lg-0">
              <div className="border rounded-3 text-center pt-3">
                <div className="about_logo d-none">
                  <img
                    src={`${url}images/dypatil/logo/3.webp`}
                    height="50"
                    loading="lazy"
                    alt=""
                  />
                  <img
                    src={`${url}images/dypatil/logo/3.webp`}
                    height="50"
                    loading="lazy"
                    alt=""
                  />
                  <img
                    src={`${url}images/dypatil/logo/naac.webp`}
                    height="15"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <h6 className=" mt-2 py-1">Admissions Open 2025</h6>
                <iframe
                  title="hero section"
                  aria-label="DY PATIL NAVI MUMBAI 2025 - Public Health"
                  frameBorder="0"
                  className="zoho_form"
                  src="https://forms.zohopublic.in/gladowlwebsolutionspvtltd/form/DYPATILNAVIMUMBAI2025PublicHealth/formperma/UJUsLQSjB90cQCfOhyAYojtaVxecxURtZvczgZZpFaM"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***************************************** */}
      <section
        className=" d-lg-none d-block position-relative hero_section"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <div className="container">
          <div className="row ">
            <div className="position-relative">
              <img
                src={`${url}images/dypatil/hero/1.png`}
                className="w-100 rounded-3 border video_height"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Programs />
      <WhyChooseUs />
      <Recruiters />
      {/* About Us */}
      <section className="bg-white pt-lg-5 pt-2 ">
        <div className="container" id="about-us">
          <div className="row justify-content-center justify-content-centers">
            <div className="col-lg-12  text-center ">
              <h2 className="title_01   mb-3">About School of Public Health</h2>
            </div>
            <p className="pt-lg-3  pe-lg-3" align="justify">
              The DYPU School of Public Health was established in the year 2021
              with the vision of protecting and promoting population health
              through quality education, impactful research, and meaningful
              community engagement. Nestled within the sprawling and picturesque
              campus, of D Y Patil deemed to be University in Navi Mumbai, this
              school is a symbol of excellence that imparts skills and
              competencies to its students to handle real-life challenges in
              public health. At DYPU School Of Public Health, students have the
              freedom to explore their intellectual curiosity in a collaborative
              community of peers and learn from the world’s leading public
              health faculty. They learn to bring bold ideas to fruition, while
              deepening analytical thinking and sharpening problem-solving
              skills.
            </p>

            <div className="col-lg-12 pb-3 pb-lg-0">
              <video
                id="myVideo"
                className="w-100 rounded-3 border video_height"
                width="320"
                height="240"
                controls
                autoPlay
                muted
                loop
              >
                <source
                  src={`${url}images/dypatil/about/1.mp4`}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>

      <JobProfile />
      <AdvisoryMembers />
      {/* Internship opportunity */}
      <section className="bg-white py-lg-4 pt_001 d-none">
        <div className="container" id="internship">
          <div className="row justify-content-center">
            <div className="col-lg-9  text-center pb-4 pb-lg-0">
              <h2 className="title_01   mb-2">Internship Opportunity</h2>

              <p className="pt-lg-3  pe-lg-3" align="center">
                The internship programs offered by D Y Patil School of Law are
                designed to bridge the gap between theoretical knowledge and
                practical application, allowing students to develop essential
                skills and gain exposure to the legal profession.
              </p>
            </div>
          </div>
          <div className="row inrernshipdiv p-4">
            <div className="col-lg-3">
              <div className="internship-box side-by-side internship-devider internmg">
                <img
                  src={`${url}images/dypatil/internship/1.png`}
                  height="70px"
                  alt=""
                />
                <h2>Law firms</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="internship-box side-by-side internship-devider internmg">
                <img
                  src={`${url}images/dypatil/internship/2.png`}
                  height="70px"
                  alt=""
                />
                <h2>Corporate legal departments</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="internship-box side-by-side internship-devider internmg">
                <img
                  src={`${url}images/dypatil/internship/3.png`}
                  height="70px"
                  alt=""
                />
                <h2>Non-profit organizations</h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="internship-box side-by-side internmg">
                <img
                  src={`${url}images/dypatil/internship/4.png`}
                  height="70px"
                  alt=""
                />
                <h2>Government agencies</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InternationalCollaboration />
      <WhyChooseUs2 />
      <SuccessStories />
      <Gallery />
      {/* CTA */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 advertise_01 text-center">
              <div className="">
                <h3 className="">
                  Drive impactful change through Public Health expertise and
                  real-world engagement with D Y Patil University.
                </h3>
                <p className="ctasize">Admissions Open 2025</p>
                <button
                  className="btn c_btn  py-lg-3 px-lg-5 px-4 px-2 fs-6 fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        {/* <!-- Copyright Start --> */}
        <div className="container-fluid copyright py-4 mb-4 mb-md-0">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="d-flex justify-content-center align-items-center py-3">
                  <img
                    src={`${url}images/dypatil/logo/4.webp`}
                    className="hero_logo_01"
                    loading="lazy"
                    alt=""
                  />
                  <div className="footerImgDivider"></div>
                  <img
                    src={`${url}images/dypatil/logo/naac-footer.webp`}
                    className="footer_logo_02"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="footerDivider"></div>
                <span className=" text-light">
                  © Copyright 2025 | D Y Patil University, Navi Mumbai. |
                  Designed and developed by
                  <img
                    src={`${url}images/dypatil/logo/gladowl_logo.webp`}
                    height="20"
                    width="auto"
                    loading="lazy"
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Back to Top --> */}
      <a
        href={`${url}`}
        className="btn btn-lg text-white btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
      <a
        href="#programs"
        className="btn c_btn  px-4 left_button bg-red"
      >
        Programs
      </a>
      <button
        type="button"
        className="btn c_btn px-4 right_button bg-red"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Apply Now
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog p-0">
          <div className="modal-content ">
            <div className="modal-header">
              <div className="about_logo pb-2">
                <img
                  src={`${url}images/dypatil/logo/3.webp`}
                  height="50"
                  loading="lazy"
                  alt=""
                />
                <img
                  src={`${url}images/dypatil/logo/naac.webp`}
                  height="15"
                  loading="lazy"
                  alt=""
                />
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <iframe
                title="1"
                aria-label="DY PATIL NAVI MUMBAI 2025 - Public Health"
                frameBorder="0"
                className="zoho_form"
                src="https://forms.zohopublic.in/gladowlwebsolutionspvtltd/form/DYPATILNAVIMUMBAI2025PublicHealth/formperma/UJUsLQSjB90cQCfOhyAYojtaVxecxURtZvczgZZpFaM"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

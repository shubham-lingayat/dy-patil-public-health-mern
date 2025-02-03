import React from "react";
import Slider from "react-slick";

function AdvisoryMembers() {
  const url = process.env.REACT_APP_URL || "#";

  const members = [
    ["DR. SUMA NAIR", "MEMBER SECRETARY", "dean, dypu school of public health"],
    ["DR. DEEPAK SAXENA", "MEMBER", "director, iiph gandhinagar"],
    [
      "PROF. DR. SANJAY ZODPEY",
      "CO-CHAIRPERSON",
      "president, public health foundation of india (phfi)",
    ],
    [
      "DR. H. VINOD BHAT",
      "CO-CHAIRPERSON",
      "vice chancellor, apollo university, chittoor",
    ],
    [
      "DR. NITIKA PANT PAI",
      "MEMBER",
      "associate professor,department of medicine, mcgill university, canada",
    ],
    [
      "Dr. Madhukar Pai",
      "Member",
      "Associate Director, McGill International TB Centre, McGill University, Canada",
    ],
    [
      "Dr. N. Sreekumaran Nair",
      "Member",
      "Professor & Head, Department of Biostatistics, Jipmer, Puducherry",
    ],
    [
      "Dr. B. Unnikrishnan",
      "Member",
      "Dean, Kasturba Medical College, Mangalore",
    ],
  ];

  const members_01 = {
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    margin: 20,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-4 py-lg-5 pt_001">
      <div className="container" id="team">
        <div className="row justify-content-lg-between">
          <div className="col-lg-12  text-center">
            <img
              src={`${url}images/dypatil/heading/1.png`}
              height="30px"
              alt=""
            />
            <h2 className="title_01 mb-3">Meet Our Expert Advisory Members</h2>
          </div>
        </div>
        <Slider className="members_01 row pt-lg-3 team bg-white" {...members_01}>
          {/* Map Function START */}
          {members.map((member, index) => (
            <div key={index} className="card d-grid">
              <img
                src={`${url}images/dypatil/team/${index+1}.webp`}
                className="team_img"
                alt={`${member[0]}`}
              />
              <div className="card-body text-center">
                <h5 className="card-title text-white ">{member[0]}</h5>
                <p className="card-text text-white fw-normal text-capitalize">
                  <b>{member[1]}</b> <br />
                  {member[2]}
                </p>
              </div>
            </div>
          ))}
          {/* Map Function END */}
        </Slider>
      </div>
    </section>
  );
}
export default AdvisoryMembers;

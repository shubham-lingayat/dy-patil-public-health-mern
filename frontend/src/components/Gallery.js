import React from "react";

function Gallery() {
  const url = process.env.REACT_APP_URL || "#";
  const gallery = [1, 2, 3, 4, 5, 6];

  return (
    <section className="bg-white pt-lg-1 pt-0">
      <div className="container" id="campuslife">
        <div className="col-md-12 text-center position-relative">
          <img
            src={`${url}images/dypatil/heading/1.png`}
            height="30px"
            alt=""
          />
          <h2 className=" fw-normal mb-4 text-center  display-5 title_02  d-none d-md-block">
            #CampusLife@
            <span className="text-red"> D Y Patil University</span>
          </h2>
          <h2 className="h5 fw-normal   d-md-none ">
            #CampusLife@
            <span className="text-red"> D Y Patil University </span>
          </h2>
        </div>

        <div className="row gy-4 galleryimages ">
          {/* Map Function Start */}
          {gallery.map((index) => (
            <div key={index} className="col-lg-4 col-6">
              <img
                src={`${url}/images/dypatil/gallery/${index}.webp`}
                className=""
                alt={`Gallery ${index}`}
              />
            </div>
          ))}
          {/* Map Function END */}
        </div>
      </div>
    </section>
  );
}

export default Gallery;

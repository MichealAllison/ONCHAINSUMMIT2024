import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="img/aboutimg.jpg"
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Onchain Summit: Pioneering the Future of Blockchain</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <a href="#features" className="btn btn-custom btn-lg page-scroll">
                Ticket
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Fragment } from "react";

import logo from "../../../src/assets/logo.png";

import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <Fragment>
      <div className="header_top">
        <nav className="navbar navbar-expand-lg">
          <div className="container wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
            <div className="col-sm-2">
              <a className="brand" href="Home.html">
                <img src={logo} className="img-responsive" alt="logo" />
              </a>
            </div>
            <div className="col-md-7">
              <button
                class="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-content"
              >
                <div class="hamburger-toggle">
                  <FaBars className="hamburger" />
                </div>
              </button>
              <div className="collapse navbar-collapse" id="navbar-content">
                <ul className="nav navbar-nav flex-row">
                  <li className="nav-item nav-link">
                    <a href="#home" className="nav-anchor">
                      Home
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#About_Us" className="nav-anchor">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#What_We_Do" className="nav-anchor">
                      What We Do
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#Open-Source" className="nav-anchor">
                      Open Source
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#projects" className="nav-anchor">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item nav-link">
                    <a href="#Testimonial" className="nav-anchor">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;

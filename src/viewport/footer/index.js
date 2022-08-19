import Linkedin from "../../../src/assets/linkedin.png";
import twitter from "../../../src/assets/twitter.png";
import discord from "../../../src/assets/discord.png";
import github from "../../../src/assets/github.png";
import footerLogo from "../../../src/assets/footer-logo.jpg";

const Footer = () => {
  return (
    <footer className="p-80 pb-0">
      <div className="container pb-5">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-5 overflow-hidden">
            <div id="footer-sidebar-first" className="company detail">
              <img src={footerLogo} alt="logo" className="img-fluid w-50 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms" />
              <p className="text-white mt-3 mb-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">Making a 3D space you are in complete control of should be easy. The web provides the right context and tool to create natural integrations to existing platforms, that works across all devices and performs as well as native apps.</p>
            </div>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 overflow-hidden">
            <h5 className="text-white mt-4 mt-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">Quick Links</h5>
            <ul className="list-unstyled text-white">
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms"><a href="about"> About Us</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms"><a href="about">Projects</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms"><a href="about">What We Do</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1400ms"><a href="about">Contact Us</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1600ms"><a href="about">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 overflow-hidden">
            <h5 className="text-white mt-4 mt-lg-0 mb-4 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">Subscribe Us</h5>
            <div className="subscribe-wrap mb-4">
              <form id="subscribe-blog" className="d-flex wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                <div id="subscribe-email">
                  <input
                    type="email"
                    name="email"
                    className="has-undefinedpx-font-size"
                    placeholder="Enter your email"
                    value=""
                    id="subscribe-field"
                  />
                </div>
                <div id="subscribe-submit">
                  <button type="submit" className="blue-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="follow">
              <img src={Linkedin} alt="linkedin" className="img-fluid wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms" />
              <img src={twitter} alt="twitter" className="img-fluid wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms" />
              <img src={discord} alt="discord" className="img-fluid wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms" />
              <img src={github} alt="github" className="img-fluid wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1400ms" />
            </div>
          </div>
        </div>

      </div>
      <div className="container-fluid blue-bg">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright text-center">
              <p>Copyright © 2022. Atlas Foundation. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

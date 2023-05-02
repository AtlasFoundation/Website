import Linkedin from "../../../src/assets/linkedin.png";
import twitter from "../../../src/assets/twitter.png";
import discord from "../../../src/assets/discord.png";
import github from "../../../src/assets/github.png";
import footerLogo from "../../../src/assets/atlasLogo.png";

const Footer = () => {
  return (
    <footer className="p-80 pb-0">
      <div className="container pb-5">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-5 overflow-hidden">
            <div id="footer-sidebar-first" className="company detail">
              <img src={footerLogo} alt="logo" className="img-fluid w-50 wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="250ms" />
              <p className="text-white mt-3 mb-0 wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="300ms">Open source specialists in 3D, AI/ML, AR/VR
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 overflow-hidden">
            <h5 className="text-white mt-4 mt-lg-0 wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="250ms">Quick Links</h5>
            <ul className="list-unstyled text-white">
              <li className="wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="200ms"><a href="#About_Us"> About Us</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="250ms"><a href="#projects">Projects</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="300ms"><a href="#Mission">Mission</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="400ms"><a href="Open-Source">Open Source</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="400ms"><a href="#Portfolio">Portfolio</a></li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 overflow-hidden">
            <h5 className="text-white mt-4 mt-lg-0 mb-4 wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="200ms">Subscribe for updates</h5>
            <div className="subscribe-wrap mb-4">
              <form id="subscribe-blog" className="d-flex wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="200ms">
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
                    I'm In
                  </button>
                </div>
              </form>
            </div>
            <div className="follow">
              <img src={Linkedin} alt="linkedin" className="img-fluid wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="250ms" /><a href="https://www.linkedin.com/company/atlas-mundi-foundation"></a>
              <img src={twitter} alt="twitter" className="img-fluid wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="300ms" /><a href="https://twitter.com/atlasavatars"></a>
              <img src={discord} alt="discord" className="img-fluid wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="350ms" /><a href="https://discord.gg/36qjr67naG"></a>
              <img src={github} alt="github" className="img-fluid wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="400ms" /><a href="https://github.com/AtlasFoundation"></a>
              <a href="https://www.netlify.com"> <img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="Deploys by Netlify" /> </a>
            </div>
          </div>
        </div>

      </div>
      <div className="container-fluid blue-bg">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright text-center">
              <p>Copyright © 2023. Atlas Mundi Foundation. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

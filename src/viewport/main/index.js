import Banner from "../../../src/assets/banner-imgcopy2.png";
import Work from "../../../src/assets/what-we-do-img01copy.webp";
import ProjectImg from "../../../src/assets/projects-img.png";
import video from "../../video/thenexus.mp4";
import video1 from "../../video/moon_club_pan_reel_dancefloor.mp4";
import { DigitalIcon } from "../../svgIcon/svg";
import { GeoIcon } from "../../svgIcon/svg";
import { UnityIcon } from "../../svgIcon/svg";
import { CyberIcon } from "../../svgIcon/svg";


const Main = () => {
  return (
    <div className="wrapper">
      <div className="banner" id="home">
        <div className="banner-img">
          <img src={Banner} alt="banner" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="text">
              <div className="col-xl-10 col-lg-10 col-md-12 wow pulse animated" data-wow-duration="300ms" data-wow-delay="250ms">
                <div className="text-wrap">
                  <h1 className="heading">
Open Source AI/ML in 3D:
<br/>
Measuring our past, 
<br/>
monitoring our present,
<br/>
and mapping our future
</h1>
                  <a className="btn block-btn common-btn" href="#About_Us">Learn More</a>
                </div>
                <div
                  className="col-xl-2 col-lg-2 wow fadeInLeft animated"
                  data-wow-duration="300ms"
                  data-wow-delay="250ms">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us p-80" id="About_Us">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="video-wrap wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="250ms">
                <video autoplay="true" loop="true" muted="muted" data-wf-ignore="true" data-object-fit="cover"  >
                  <source src={video} data-wf-ignore="true" />
                  <source src={video1} data-wf-ignore="true" />
                </video>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h1 className="author mb-2 mb-lg-4 wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="250ms">About Us</h1>
              <p className="pe-5 wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="250ms">
                Atlas Foundation is an open source web3 collective specializing in Artificial Intelligence, Machine Learning, Drone Mapping,  Augmented Reality, 3D Simulations, Virtual Worlds, Digital Twins, and Gaming. We are united by a passion to create a better world in our digital and physical communities. </p>
              <p className="pe-5 wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="250ms">
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="what-we-do text-center p-80" id="Mission">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-shadow text-white wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="250ms">Our Mission</h1>
              <p className=" tagline text-white wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="250ms">  Using artificial intelligence and machine learning we can not only monitor the present but map a better path forward to prepare for the future. We envision a future where technology serves to unite us.</p>
            </div>
            <div className="open-souce-wrap" data-wow-duration="300ms" data-wow-delay="250ms">
            <img src={Work} alt="banner" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="open-souce p-80" id="Open-Source">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-5">
            </div>
            <div className="col-lg-7 bg-white wow fadeInRight animated" data-wow-duration="300ms" data-wow-delay="250ms">
              <div className="open-souce-wrap">
                <h1 className="wow fadeInRight animated" data-wow-duration="300ms" data-wow-delay="250ms">Open Source</h1>
                <p className="wow fadeInRight animated" data-wow-duration="300ms" data-wow-delay="250ms">Atlas Foundation believes in open source programming and collective knowledge.
                <a href="https://github.com/AtlasFoundation" className="btn btn--block card__btn">Github</a>  </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects p-80 pb-0" id="projects">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <h1 className="wow text-white zoomIn animated" data-wow-duration="300ms" data-wow-delay="250ms">Atlas Foundation Projects</h1>
                </div>
              </div>
              <div className="row mt-60">
                <div className="col-md-6 wow zoomIn animated" data-wow-duration="600ms" data-wow-delay="250ms">
                  <div className="cards">
                    <div className="cards__item">
                      <div className="card text-center p-15">
                        <div className="card__image">
                          <DigitalIcon />
                        </div>
                        <div className="card__content">
                          <h4 className="card__title">Digital Beings</h4>
                          <p className="card__text">Your AI, anywhere. An easy way for AI/AGI researchers to connect their code to virtual worlds, with access to voice, video, chat. </p>
                          <button a href="https://github.com/AtlasFoundation/Digital-Beings" className="btn btn--block card__btn">Github</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow zoomIn animated" data-wow-duration="300ms" data-wow-delay="250ms">
                  <div className="cards">
                    <div className="cards__item">
                      <div className="card text-center p-15">
                        <div className="card__image">
                          <CyberIcon />
                        </div>
                        <div className="card__content">
                          <h4 className="card__title">Drone to Data </h4>
                          <p className="card__text">A platform for the use of AI and ML for better monitoring and mapping suitable for the challenges of climate change </p>
                          <button a href="https://opencollective.com/atlas-foundation/projects/themistocles" className="btn btn--block card__btn">Support</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow zoomIn animated" data-wow-duration="300ms" data-wow-delay="400ms">
                  <div className="cards">
                    <div className="cards__item">
                      <div className="card text-center p-15">
                        <div className="card__image">
                          <GeoIcon />
                        </div>
                        <div className="card__content">
                          <h4 className="card__title">AR & Geospatial Maps</h4>
                          <p className="card__text">Bridging the digital divide, GeoPose & OpenCV brings the 3D web to you. Explore your city in a new way with map tiles</p>
                          <a href="https://github.com/AtlasFoundation/AR-maps"  className="btn btn--block card__btn" >Github</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow zoomIn animated" data-wow-duration="300ms" data-wow-delay="400ms">
                  <div className="cards">
                    <div className="cards__item">
                      <div className="card text-center p-15">
                        <div className="card__image">
                          <UnityIcon />
                        </div>
                        <div className="card__content">
                          <h4 className="card__title">Atlas Avatars</h4>
                          <p className="card__text">Open Source 3D Character Creator for VR, AR, Games and Film. Create your own 3D character in minutes. </p>
                          <a href="https://github.com/AtlasFoundation/AvatarCreator" className="btn btn--block card__btn">Github</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="project-img">
                <img src={ProjectImg} alt="projectImg" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio p-80" id="Portfolio">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="400ms">Our Portfolio</h1>
            </div>
          </div>
          <div className="row mt-60 d-flex align-items-stretch">
            <div className="col-lg-3 col-md-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="400ms">
              <a href="https://www.characterconstructor.com/" target="blank" className="testimonal-wrap vector-ball">
                <div className="wrapper">
                  <h3>Character Constructor</h3>
                  <p className="mb-0">
                    Open Source 3D Avatars for VR, AR, Games and Film. Create your own 3D character in minutes.                                    </p>
                </div>
                <div className="desc-wrap d-flex align-items-center justify-content-between">
                  <a href="https://www.characterconstructor.com" target="blank" class="btn block-btn small-btn common-btn list-unstyled d-flex justify-content-center mb-0">View More</a>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="400ms">
              <a href="https://hyperfy.io/nexus" target="blank" className="testimonal-wrap pocket-godz">
                <div className="wrapper">
                  <h3>Nexus City</h3>
                  <p className="mb-0">
                    Nexus City is First in the Verse, an Open Source Creative Commons World in your browser                  
                    </p>
                </div>
                <div className="desc-wrap d-flex align-items-center justify-content-between">
                  <a href="https://hyperfy.io/nexus" target="blank" class="btn block-btn small-btn common-btn list-unstyled d-flex justify-content-center mb-0">View More</a>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="400ms">
              <a href="https://github.com/AtlasFoundation/Animated-Discussion" target="blank" className="testimonal-wrap bowling">
                <div className="wrapper">
                  <h3>Animated Discussion</h3>
                  <p className="mb-0">
                  Generative AI that listens and paints your conversations as you narrate them </p>
                  </div>
                <div className="desc-wrap d-flex align-items-center justify-content-between">
                  <a href="https://github.com/AtlasFoundation/Animated-Discussion" target="blank" class="btn block-btn small-btn common-btn list-unstyled d-flex justify-content-center mb-0">View More</a>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="400ms">
              <a href="https://easelwear.com/" target="blank" className="testimonal-wrap quaterback">
                <div className="wrapper">
                  <h3 className="mb-0">Intelligent Designer</h3>
                  <p className="mb-0">
                    AI Generated custom clothing made to order for truly unique style. Check out Intelligent Designer's Easel Wear brand.</p>
                </div>
                <div className="desc-wrap d-flex align-items-center justify-content-between">
                  <a href="https://easelwear.com/" target="blank" class="btn block-btn small-btn common-btn list-unstyled d-flex justify-content-center mb-0">View More</a>
                </div>
              </a>
            </div>
          </div>
          <div className="row text-center mt-4">
            <div className="col-sm-12 wow fadeInUp animated" data-wow-duration="300ms" data-wow-delay="400ms">
              <button class="btn block-btn common-btn" href="">View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

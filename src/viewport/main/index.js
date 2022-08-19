import Banner from "../../../src/assets/banner-img.png";
import Work from "../../../src/assets/what-we-do-img.png";
import ProjectImg from "../../../src/assets/projects-img.png";
import video from '../../video/Universal-Volumetric-Video-Web-Player-transcode.mp4';
import video1 from '../../video/Universal-Volumetric-Video-Web-Player-transcode.webm';
import { DigitalIcon } from "../../svgIcon/svg";
import { GeoIcon } from "../../svgIcon/svg";
import { UnityIcon } from "../../svgIcon/svg";
import { CyberIcon } from "../../svgIcon/svg";
import { FaQuoteLeft} from "react-icons/fa";


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
              <div className="col-xl-10 col-lg-10 col-md-12 wow pulse animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <div className="text-wrap">
                  <h1 className="heading">FREE, OPEN & INTEROPERABLE IMMERSIVE WEB TECHNOLOGY</h1>
                  <a className="btn block-btn common-btn" href="#About_Us">Learn More</a>
                </div>
                <div
                  className="col-xl-2 col-lg-2 wow fadeInLeft animated"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms">

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
              <div className="video-wrap wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                <video autoplay="true" loop="true" muted="muted" data-wf-ignore="true" data-object-fit="cover"  >
                  <source src={video} data-wf-ignore="true" />
                  <source src={video1} data-wf-ignore="true" />
                </video>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h1 className="author mb-2 mb-lg-4 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">About Us</h1>
              <p className="pe-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">
                Making a 3D space you are in complete control of should be easy. The web provides the right context and tool to create natural integrations to existing platforms, that works across all devices and performs as well as native apps.
              </p>
              <p className="pe-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                We're creating XR Engine to push the limit on what is possible on the web, in a way that's easy as starting a blog or video feed. Our eco
                system of libraries and projects enables developers to use a modular set of tools to gradually migrate into the immersive future.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="what-we-do text-center p-80" id="What_We_Do">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-shadow text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">What We Do</h1>
              <p className=" tagline text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">An end-to-end framework for the web, built on popular Javascript frameworks. Scalable multiplayer infrastructure with voice, video, expressive avatars a visual editor and portals between worlds. Build your own games and social experiences and link them together.</p>
            </div>
            <div className="col-md-12 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <img src={Work} alt="work" className="img-fluid w-90" />
            </div>
          </div>
        </div>
      </div>

      <div className="open-souce p-80" id="Open-Source">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-5">
            </div>
            <div className="col-lg-7 bg-white wow fadeInRight animated" data-wow-duration="1000ms" data-wow-delay="400ms">
              <div className="open-souce-wrap">
                <h1 className="wow fadeInRight animated" data-wow-duration="1000ms" data-wow-delay="600ms">OPEN SOURCE TECHNOLOGY</h1>
                <p className="wow fadeInRight animated" data-wow-duration="1000ms" data-wow-delay="600ms">Cryptosabers are interoperable with XREngine, Webaverse, Janus XR and Mozilla Hubs-- all open source platforms that anyone can use to launch their own worlds today. All specifications for Cryptosabers are open source and made available to everyone. Cryptosabers artwork is released under Creative Commons (CC0) so developers can remix and utilize them into their games and promotional materials.</p>
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
                  <h1 className="wow text-white zoomIn animated" data-wow-duration="1000ms" data-wow-delay="600ms">Atlas Foundation Projects</h1>
                </div>
              </div>
              <div className="row mt-60">
                <div className="col-md-6 wow zoomIn animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="cards">
                    <div className="cards__item">
                      <div className="card text-center p-15">
                        <div className="card__image">
                          <DigitalIcon />
                        </div>
                        <div className="card__content">
                          <h4 className="card__title">Digital Beings</h4>
                          <p className="card__text">Your AI, anywhere. An easy way for AI/AGI researchers to connect their code to virtual worlds, with access to voice, video, chat, player information and contextual scene data. Comes with examples for GPT-3, GPT-J, RASA and more. </p>
                          <button className="btn btn--block card__btn">Github</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow zoomIn animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="cards">
                    <div className="cards__item">
                      <div className="card text-center p-15">
                        <div className="card__image">
                          <CyberIcon />
                        </div>
                        <div className="card__content">
                          <h4 className="card__title">Universal Volumetric</h4>
                          <p className="card__text">A free, fast, cross-platform volumetric video codec for everyone. Optimized mesh compression combined with streaming MP4 texture sequences for playback of digital humans and other volumetric data in the web, Unity, Unreal and native platforms. </p>
                          <button className="btn btn--block card__btn">Github</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow zoomIn animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="cards">
                    <div className="cards__item">
                      <div className="card text-center p-15">
                        <div className="card__image">
                          <GeoIcon />
                        </div>
                        <div className="card__content">
                          <h4 className="card__title">AR & Geospatial Maps</h4>
                          <p className="card__text">Bridging the virtual with the physical, GeoPose & OpenCV brings the 3D web to your workspace, university and lounge room. Explore your city in a new way with procedurally generated map tiles using geojson data with mapbox and turf.js </p>
                          <button className="btn btn--block card__btn">Github</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow zoomIn animated" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="cards">
                    <div className="cards__item">
                      <div className="card text-center p-15">
                        <div className="card__image">
                          <UnityIcon />
                        </div>
                        <div className="card__content">
                          <h4 className="card__title">Unity XR Bridge</h4>
                          <p className="card__text">Bridging the virtual with the physical, GeoPose & OpenCV brings the 3D web to your workspace, university and lounge room. Explore your city in a new way with procedurally generated map tiles using geojson data with mapbox and turf.js </p>
                          <button className="btn btn--block card__btn">Github</button>
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

      <div className="testimonial p-80" id="Testimonial">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">Our Services</h1>
            </div>
          </div>
          <div className="row mt-60 d-flex align-items-stretch">
            <div className="col-lg-4 col-md-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="testimonal-wrap">
                <div className="mb-4">
                  <FaQuoteLeft className="quotes" />
                  <h5>Avatar Creator</h5>
                  <p className="mb-0">
                  An open, collaborative and evolving character creator project for the open metaverse.
                  </p>
                </div>
                <div className="desc-wrap d-flex align-items-center justify-content-between">
                  <div className="client-img d-flex align-items-center ">
                    <div className="client-desc">
                      <h6 className="mb-0">TypeScript</h6>
                      <p className=" mb-0">Forks: 5</p>
                    </div>
                  </div>
                  <a href="https://github.com/AtlasFoundation/AvatarCreator" class="btn block-btn small-btn common-btn list-unstyled d-flex justify-content-center mb-0">Github</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">
              <div className="testimonal-wrap">
                <div className="mb-4">
                  <FaQuoteLeft className="quotes" />
                  <h5>XR Engine</h5>
                  <p className="mb-0">
                       We are using this repository for research and development purposes toward an open, decentralized, agent-centric and spatially-aware Internet.
                  </p>
                </div>
                <div className="desc-wrap d-flex align-items-center justify-content-between">
                  <div className="client-img d-flex align-items-center ">
                    <div className="client-desc">
                      <h6 className="mb-0">TypeScript</h6>
                      <p className=" mb-0">Fork: 1</p>
                    </div>
                  </div>
                  <a href="https://github.com/AtlasFoundation/XREngine" class="btn block-btn small-btn common-btn list-unstyled d-flex justify-content-center mb-0">Github</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
              <div className="testimonal-wrap">
                <div className="mb-4">
                  <FaQuoteLeft className="quotes" />
                  <h5 className="mb-0">The Nexus</h5>
                  <p className="mb-0">
                  The city that comes to you. An open source, hackable, community-driven and CC0 experiment in open metaverse.
                  </p>
                </div>
                <div className="desc-wrap d-flex align-items-center justify-content-between">
                  <div className="client-img d-flex align-items-center ">
                    <div className="client-desc">
                      <h6 className="mb-0">TypeScript</h6>
                      <p className=" mb-0">Fork: 2</p>
                    </div>
                  </div>
                  <a href="https://github.com/AtlasFoundation/TheNexus" class="btn block-btn small-btn common-btn list-unstyled d-flex justify-content-center mb-0">Github</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center mt-4">
            <div className="col-sm-12 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="900ms">
              <button class="btn block-btn common-btn" href="">View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

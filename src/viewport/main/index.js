import Banner from "../../../src/assets/banner-img.png";
import Work from "../../../src/assets/what-we-do-img01.png";
import ProjectImg from "../../../src/assets/projects-img.png";
import video from '../../video/Universal-Volumetric-Video-Web-Player-transcode.mp4';
import video1 from '../../video/Universal-Volumetric-Video-Web-Player-transcode.webm';
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
                Atlas Foundation is an international web3 collective focused on cutting edge technologies. We are united by a passion to create a better world both in virtual spaces and in our real communities. </p>
              <p className="pe-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                We chose Atlas as our symbol because we are building the back bone technologies that enable new worlds in digital, virtual, and augmented reality. We envision a future where technology serves to unite us.
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
              <p className=" tagline text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">We are a diverse group of experts who pride ourselves on the quality of our work, and we strive to deliver experiences that enable users to embrace the essence of web3 technologies without the technical hurdles. We specialize in 3d design, Artificial Intelligence, NFT’s and verified assets, block chain and distributed ledgers, and browser based game design for the web.</p>
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
              <h1 className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">Our Portfolio</h1>
            </div>
          </div>
          <div className="row mt-60 d-flex align-items-stretch">
            <div className="col-lg-3 col-md-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <a href="https://store.steampowered.com/app/1245920/VectorBall/" target="blank" className="testimonal-wrap vector-ball">
                <div className="wrapper">
                  <h3>Vector Ball</h3>
                  <p className="mb-0">
                    VectorBall is a multiplayer VR game set in a vibrant Cyberspace.
                  </p>
                </div>
                <div className="desc-wrap d-flex align-items-center justify-content-between">
                  <a href="https://store.steampowered.com/app/1245920/VectorBall/" target="blank" class="btn block-btn small-btn common-btn list-unstyled d-flex justify-content-center mb-0">View More</a>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <a href="https://play.pocketgodz.xyz/" target="blank" className="testimonal-wrap pocket-godz">
                <div className="wrapper">
                  <h3>Pocket Godz</h3>
                  <p className="mb-0">
                    Block chain gaming platform utlizing crypto currency wallet.
                  </p>
                </div>
                <div className="desc-wrap d-flex align-items-center justify-content-between">
                  <a href="https://play.pocketgodz.xyz/" target="blank" class="btn block-btn small-btn common-btn list-unstyled d-flex justify-content-center mb-0">View More</a>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="700ms">
              <a href="https://apps.apple.com/in/app/bowling-champ-world-tour/id1136557536" target="blank" className="testimonal-wrap bowling">
                <div className="wrapper">
                  <h3>Bowling Champ</h3>
                  <p className="mb-0">
                    The world’s first motion controlled mobile bowling game.</p>
                </div>
                <div className="desc-wrap d-flex align-items-center justify-content-between">
                  <a href="https://apps.apple.com/in/app/bowling-champ-world-tour/id1136557536" target="blank" class="btn block-btn small-btn common-btn list-unstyled d-flex justify-content-center mb-0">View More</a>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
              <a href="https://play.google.com/store/apps/details?id=com.quarterback.Equilizer&hl=en_IN" target="blank" className="testimonal-wrap quaterback">
                <div className="wrapper">
                  <h3 className="mb-0">The Quarterback Equalizer</h3>
                  <p className="mb-0">
                    Mobile first sports game for android.</p>
                </div>
                <div className="desc-wrap d-flex align-items-center justify-content-between">
                  <a href="https://play.google.com/store/apps/details?id=com.quarterback.Equilizer&hl=en_IN" target="blank" class="btn block-btn small-btn common-btn list-unstyled d-flex justify-content-center mb-0">View More</a>
                </div>
              </a>
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

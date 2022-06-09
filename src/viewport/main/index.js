import Banner from "../../../src/assets/banner-img.png";
import Work from "../../../src/assets/what-we-do-img.png";
import ProjectImg from "../../../src/assets/projects-img.png";
import clientImg from "../../../src/assets/client-01.jpg";
import video from '../../video/Universal-Volumetric-Video-Web-Player-transcode.mp4';
import video1 from '../../video/Universal-Volumetric-Video-Web-Player-transcode.webm';
import { DigitalIcon } from "../../svgIcon/svg";
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";


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
                  <button className="btn block-btn common-btn" href="">Learn More</button>
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
              <div className="video-wrap wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                <video autoplay="true" loop="true" muted="muted" data-wf-ignore="true" data-object-fit="cover"  >
                  <source src={video} data-wf-ignore="true" />
                  <source src={video1} data-wf-ignore="true" />
                </video>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h1 className="author mb-2 mb-lg-4 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">About Us</h1>
              <p className="pe-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                Making a 3D space you're in complete control of should be easy. The web provides the right context and tool to create natural integrations to existing platforms, that works across all devices and performs as well as native apps.
              </p>
              <p className="pe-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms">
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
              <h1 className="text-shadow text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">What We Do</h1>
              <p className=" tagline text-white wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">An end-to-end framework for the web, built on popular Javascript frameworks. Scalable multiplayer infrastructure with voice, video, expressive avatars a visual editor and portals between worlds. Build your own games and social experiences and link them together.</p>
            </div>
            <div className="col-md-12 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
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
            <div className="col-lg-7 bg-white wow fadeInRight animated" data-wow-duration="1000ms" data-wow-delay="800ms">
              <div className="open-souce-wrap">
                <h1 className="wow fadeInRight animated" data-wow-duration="1000ms" data-wow-delay="1000ms">OPEN SOURCE TECHNOLOGY</h1>
                <p className="wow fadeInRight animated" data-wow-duration="1000ms" data-wow-delay="1200ms">Cryptosabers are interoperable with XREngine, Webaverse, Janus XR and Mozilla Hubs-- all open source platforms that anyone can use to launch their own worlds today. All specifications for Cryptosabers are open source and made available to everyone. Cryptosabers artwork is released under Creative Commons (CC0) so developers can remix and utilize them into their games and promotional materials.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects p-80 pb-0" id="Services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <h1 className="wow text-white zoomIn animated" data-wow-duration="1000ms" data-wow-delay="800ms">Atlas Foundation Projects</h1>
                </div>
              </div>
              <div className="row mt-60">
                <div className="col-md-6 wow zoomIn animated" data-wow-duration="1000ms" data-wow-delay="800ms">
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
                <div className="col-md-6 wow zoomIn animated" data-wow-duration="1000ms" data-wow-delay="800ms">
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
                <div className="col-md-6 wow zoomIn animated" data-wow-duration="1000ms" data-wow-delay="800ms">
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
                <div className="col-md-6 wow zoomIn animated" data-wow-duration="1000ms" data-wow-delay="800ms">
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
              <h1 className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">What Clients Say</h1>
            </div>
          </div>
          <div className="row mt-60 d-flex align-items-center">
          <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
              <div className="testimonal-wrap">
                <div className="d-flex justify-content-center mb-4">
                  <FaQuoteLeft className="quotes" />
                  <p className="px-xl-3 mb-0">
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                    tenetur.
                  </p>
                </div>
                <div className="desc-wrap d-flex align-items-center justify-content-between">
                  <div className="client-img d-flex align-items-center ">
                    <img src={clientImg} alt="client" className="rounded-circle img-fluid me-3" />

                    <div className="client-desc">
                      <h6 className="mb-0">Maria Smantha</h6>
                      <p className=" mb-0">Aug, 2021</p>
                    </div>
                  </div>
                  <ul className="rating list-unstyled d-flex justify-content-center mb-4">
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStarHalfAlt />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms">
              <div className="testimonal-wrap">
                <div className="d-flex justify-content-center mb-4">
                  <FaQuoteLeft className="quotes" />
                  <p className="px-xl-3 mb-0">
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                    tenetur.
                  </p>
                </div>
                <div className="desc-wrap d-flex align-items-center justify-content-between">
                  <div className="client-img d-flex align-items-center ">
                    <img src={clientImg} alt="client" className="rounded-circle img-fluid me-3" />

                    <div className="client-desc">
                      <h6 className="mb-0">Maria Smantha</h6>
                      <p className=" mb-0">Aug, 2021</p>
                    </div>
                  </div>
                  <ul className="rating list-unstyled d-flex justify-content-center mb-4">
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStarHalfAlt />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1400ms">
              <div className="testimonal-wrap">
                <div className="d-flex justify-content-center mb-4">
                  <FaQuoteLeft className="quotes" />
                  <p className="px-xl-3 mb-0">
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                    tenetur.
                  </p>
                </div>
                <div className="desc-wrap d-flex align-items-center justify-content-between">
                  <div className="client-img d-flex align-items-center ">
                    <img src={clientImg} alt="client" className="rounded-circle img-fluid me-3" />

                    <div className="client-desc">
                      <h6 className="mb-0">Maria Smantha</h6>
                      <p className=" mb-0">Aug, 2021</p>
                    </div>
                  </div>
                  <ul className="rating list-unstyled d-flex justify-content-center mb-4">
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStarHalfAlt />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

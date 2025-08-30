import { useEffect, useRef } from "react";
import Link from "next/link.js";
import Award from "../../../public/assets/imgs/about/award.png";
import HeroBannerImg from "../../../public/assets/imgs/about/HeroBannerImg.jpg";
import Image from "next/image.js";
import animationWordCome from "@/lib/utils/animationWordCome";

const AboutHero = () => {
  const wordAnim = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
  }, []);
  return (
    <>
      <section className="hero__about">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__about-content">
                <h1 className="hero-title animation__word_come" ref={wordAnim}>
                  Agence digitale & e-commerce 
                  full-service qui propulse votre entreprise vers de nouveaux sommets
                </h1>
                <div className="hero__about-info">
                  <div className="hero__about-btn">
                    <div className="btn_wrapper">
                      <Link
                        href="/service"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span>
                        Planifier <br/> un appel 
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="hero__about-text title-anim">
                    <p>
                      {
                        "Basés en Suisse, nous travaillons avec des PME et marques visionnaires qui veulent faire la différence. "
                      }
                    </p>
                  </div>
                  <div className="hero__about-award">
                    {/* <Image
                      priority
                      width={126}
                      height={82}
                      src={Award}
                      alt="Best Studio Award"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row hero__about-row">
            <div className="col-xxl-8">
              <div className="hero__about-image">
                <Image
                  priority
                  width={770}
                  style={{ height: "auto" }}
                  src={HeroBannerImg}
                  alt="About Hero"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-xxl-4">
              <div className="hero__about-video">
                <video loop muted autoPlay playsInline>
                  <source src="assets/video/Propulso-agency.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;

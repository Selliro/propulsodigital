import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
import About11 from "../../../public/assets/imgs/about/1/about_us_img_1.jpg";
import About12 from "../../../public/assets/imgs/about/1/about_us_img_2.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const DigitalAgencyAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="about__area">
        <div className="container line g-0 pt-140 pb-130">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="about__title-wrapper">
                <h3 className="sec-title title-anim">
                  Nous propulsons votre business avec des stratégies digitales sur-mesure
                </h3>
              </div>

              <div className="about__content-wrapper">
                <div className="about__img">
                  <div className="img-anim about__img_left">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={About11}
                      alt="About Image"
                      data-speed="0.3"
                    />
                  </div>

                  <div className="about__img-right">
                    <Image
                      priority
                      width={220}
                      style={{ height: "auto" }}
                      src={About12}
                      alt="About Image Right"
                      data-speed="0.5"
                    />
                    <div className="shape">
                      <div className="secondary" data-speed="0.9"></div>
                      <div className="primary"></div>
                    </div>
                  </div>
                </div>

                <div className="about__content text-anim">
                  <p>
                    Chez Propulso Digital, nous nous spécialisons dans l'accélération de la croissance des PME et marques innovantes grâce à des solutions e-commerce et marketing digital sur-mesure.
                    Notre mission est de permettre à des entreprises comme la vôtre de créer une présence digitale impactante, mettre en place des systèmes automatisés et développer leur notoriété.
                  </p>

                  <div className="cursor-btn btn_wrapper">
                    <Link
                      className="btn-item wc-btn-primary btn-hover"
                      href="/about"
                    >
                      <span></span> 1er RDV offert{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyAbout;

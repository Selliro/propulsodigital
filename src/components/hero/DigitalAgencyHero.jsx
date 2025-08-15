import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link.js";
import ArrowDownBig from "../../../public/assets/imgs/icon/arrow-down-big.png";
import Hero1bg from "../../../public/assets/imgs/hero/1/1-bg.png";
import Image from "next/image.js";

const DigitalAgencyHero = () => {
  const heroTitle = useRef();
  const heroSubTitle = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".experience", {
          y: 0,
          opacity: 1,
        });
        let split_hero__title = new SplitText(heroTitle.current, {
          type: "chars",
        });
        let split_hero__subtitle = new SplitText(heroSubTitle.current, {
          type: "chars words",
        });

        gsap.from(split_hero__title.chars, {
          duration: 1,
          x: 70,
          autoAlpha: 0,
          stagger: 0.1,
        });
        gsap.from(
          split_hero__subtitle.words,
          { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 },
          "-=1"
        );

        gsap.to(
          ".experience",
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "-=1.5"
        );
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="hero__area ">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__content animation__hero_one">
                <Link href="/service">
                  Stratégie, Design, Développement <br/> & Performance{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
                <div className="hero__title-wrapper">
                  <h3 className="hero__title" ref={heroTitle}>
                    Partenaire digital & e-commerce suisse
                    pour PME et marques visionnaires
                  </h3>
                  {/* <p className="hero__sub-title" ref={heroSubTitle}>
                    With every single one of our clients, we bring forth deep
                    passion for
                    <span>creative problem solving</span>
                    which is what we deliver.                    
                  </p> */}
                </div>
                <Image
                  priority
                  width={170}
                  style={{ height: "auto" }}
                  src={ArrowDownBig}
                  alt="Arrow Down Icon"
                />
                <div className="d-flex align-items-center gap-4 justify-content-end">                  
                  <div className="experience d-flex align-items-center position-relative gap-3">
                    <h2 className="title">10+</h2>
                    <p>Projets en cours</p>
                  </div>
                  <div className="experience d-flex align-items-center postion-relative gap-3">
                    <h2 className="title">6+</h2>
                    <p>Industries</p>
                  </div>
                  <div className="experience d-flex align-items-center postion-relative gap-3">
                    <h2 className="title">98%</h2>
                    <p>Satisfaction client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          style={{ width: "auto", height: "auto" }}
          src={Hero1bg}
          alt="image"
          className="hero1_bg"
        />
      </section>
    </>
  );
};

export default DigitalAgencyHero;

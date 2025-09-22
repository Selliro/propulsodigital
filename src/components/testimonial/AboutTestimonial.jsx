import { useState, useRef, useEffect } from 'react';
import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const AboutTestimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);
  
  // Testimonial data with corresponding video sources
  const testimonials = [
    {
      id: 1,
      title: "L’entrepreneuriat m’a appris que la croissance digitale commence par les personnes.",
      text: "Mon parcours a toujours été guidé par le contact humain. J’ai appris que, derrière chaque projet digital, il y a avant tout une relation de confiance à construire avec les clients. Convaincu que le digital et l’innovation sont l’avenir, je les utilise comme des leviers au service d’une chose essentielle : comprendre les besoins des entreprises et y répondre avec authenticité et impact.",
      author: "Théo Kuhn",
      role: "Co-fondateur, Propulso digital",
      videoSrc: "",
      imageSrc: "/assets/imgs/testimonial/1/about_testimonial_img1.jpg"
    },
    {
      id: 2,
      title: "Mon parcours m'a appris que la croissance digitale se joue dans les détails.",
      text: "De l’hôtellerie aux multinationales en passant par les startups, mon parcours m’a appris que l’exigence, la précision et la créativité sont essentielles pour transformer une vision en résultats. Cette rigueur, héritée d’un secteur où chaque détail compte, guide aujourd’hui ma manière d’accompagner nos clients.",
      author: "Elise Schorderet ",
      role: "Co-fondatrice, Propulso Digital",
      videoSrc: "",
      imageSrc: "/assets/imgs/testimonial/1/about_testimonial_img2.webp"
    }
  ];

  // Handle slide change
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  // Initialize navigation buttons
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      
      // Add event listeners to navigation buttons
      const prevButton = document.querySelector('.prev-button');
      const nextButton = document.querySelector('.next-button');
      
      if (prevButton) {
        prevButton.addEventListener('click', () => {
          swiperInstance.slidePrev();
        });
      }
      
      if (nextButton) {
        nextButton.addEventListener('click', () => {
          swiperInstance.slideNext();
        });
      }
    }
  }, []);

  return (
    <>
      <section className="testimonial__area-2">
        <div className="container g-0 line pb-140">
          <span className="line-3"></span>

          <div className="row g-0">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="testimonial__video">
                {/* Show image since videoSrc is empty */}
                <Image
                  priority
                  width={500}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                  src={testimonials[activeSlide].imageSrc}
                  alt={`${testimonials[activeSlide].author} thumbnail`}
                  className="w-100"
                />
              </div>
            </div>

            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="testimonial__slider-wrapper-2">
                <div className="testimonial__slider">
                  <Swiper
                    ref={swiperRef}
                    modules={[FreeMode, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    freeMode={false}
                    loop={true}
                    speed={1000}
                    onSlideChange={handleSlideChange}
                    onInit={(swiper) => setActiveSlide(swiper.activeIndex)}
                  >
                    {testimonials.map((testimonial) => (
                      <SwiperSlide key={testimonial.id}>
                        <div className="testimonial__slide">
                          <div className="testimonial__inner-2">
                            <h2 className="testimonial__title-2">
                              {testimonial.title}
                            </h2>
                            <p className="testimonial__text-2">
                              {testimonial.text}
                            </p>
                            <h3 className="testimonial__author">{testimonial.author}</h3>
                            <h4 className="testimonial__role">{testimonial.role}</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="testimonial__pagination">
                  <div style={{ cursor: "pointer" }} className="prev-button">
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                  <div style={{ cursor: "pointer" }} className="next-button">
                    <i className="fa-solid fa-arrow-right"></i>
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

export default AboutTestimonial;
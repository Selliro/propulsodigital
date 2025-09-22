import { useEffect, useRef } from "react";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceDetailsDevelopment = ({ service, images }) => {
  const charAnim = useRef();
  
  // Default images if none provided
  const defaultImages = [
    "/assets/imgs/thumb/dev-1.jpg",
    "/assets/imgs/thumb/dev-2.webp",
    "/assets/imgs/thumb/dev-3.jpg"
  ];
  
  const developmentImages = images || defaultImages;
  
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  
  return (
    <>
      <section className="development__area">
        <div className="container g-0 line pt-100 pb-100">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  {service?.development?.title || "Service Title"}
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  {service?.development?.description?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  )) || <p>Service description coming soon.</p>}
                </div>
                <ul>
                  {service?.development?.features?.map((feature, index) => (
                    <li key={index}>+ {feature}</li>
                  )) || <li>No features listed</li>}
                </ul>
              </div>
            </div>
            
            {/* Dynamic image rendering */}
            {developmentImages.map((image, index) => {
              // Define column classes based on index
              let colClass = "col-xxl-3 col-xl-3 col-lg-3 col-md-3";
              if (index === 1) {
                colClass = "col-xxl-6 col-xl-6 col-lg-6 col-md-6";
              }
              
              return (
                <div key={index} className={colClass}>
                  <div className="development__img">
                    <Image
                      priority
                      width={500}
                      height={300}
                      src={image}
                      alt={`Development Image ${index + 1}`}
                      data-speed={index === 1 ? "auto" : null}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsDevelopment;
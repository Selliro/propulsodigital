import animationCharCome from "@/lib/utils/animationCharCome";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const ProjectImage360 = ({ 
  title = "Project 360°", 
  images = [], 
  className = "",
  imageClassName = "",
  imageWidth = 600,
  imageHeight = 400
}) => {
  const charAnim = useRef();

  useEffect(() => {
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, [title]); // Re-run animation if title changes

  // Default images if none provided
  const defaultImages = [
    {
      src: "/assets/imgs/portfolio/1/3.jpg",
      alt: "Project Thumbnail 1"
    },
    {
      src: "/assets/imgs/portfolio/1/3.jpg", 
      alt: "Project Thumbnail 2"
    }
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  return (
    <section className={`pt-100 pb-100 ${className}`}>
      <div className="container line">
        <div className="col-xxl-12 col-xl-7 col-lg-6 col-md-6 mb-5">
          <div className="sec-title-wrapper">
            <h2 className="sec-title animation__char_come" ref={charAnim}>
              {title}
            </h2>
          </div>
        </div>
        <div className="row">
          {displayImages.map((image, index) => (
            <div key={index} className="col-xl-6 col-md-6">
              <Image
                priority={index === 0} // Only prioritize first image
                width={imageWidth}
                height={imageHeight}
                src={image.src}
                alt={image.alt}
                className={imageClassName}
                style={{ 
                  width: "100%", 
                  height: `${imageHeight}px`,
                  objectFit: "cover" 
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectImage360;
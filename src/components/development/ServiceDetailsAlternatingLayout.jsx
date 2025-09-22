import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceDetailsAlternatingLayout = ({ service }) => {
  const charAnim = useRef();
  
  // Use sections from service prop or default data
  const sections = service?.alternatingSections || [
    {
      id: 1,
      title: "Identité visuelle",
      content: "Logo, palette de couleurs, typographies, iconographie & motifs",
      imageUrl: "/assets/imgs/thumb/dev-1.jpg"
    },
    {
      id: 2,
      title: "Design print",
      content: "Flyers, brochures, présentations, pitch decks, roll-up, templates",
      imageUrl: "/assets/imgs/thumb/design-print.jpg"
    }
  ];

  useEffect(() => {
    // Initialize animations if needed
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, []);

  return (
    <>
      <section className="development__area">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 mb-5">
          <h2 className="sec-title animation__char_come text-center" ref={charAnim}>
            {" "}
            Nos services web
          </h2>
        </div>
        <div className="container g-0 line pb-100">
          <div className="line-3"></div>
          
          {sections.map((section, index) => (
            <div key={section.id} className="row align-items-center mb-140">
              {/* Odd sections: image on left, content on right */}
              {index % 2 === 0 ? (
                <>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 px-5">
                    <div className="development__img">
                      <Image
                        priority
                        width={600}
                        height={400}
                        src={section.imageUrl}
                        alt={section.title}
                        style={{ width: "100%", height: "100% !important" }}
                      />
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 px-5">
                    <div className="sec-title-wrapper">
                      <h2 className="sec-title animation__char_come fs-1" ref={index === 0 ? charAnim : null}>
                        {section.title}
                      </h2>
                    </div>
                    <div className="development__content mt-3 border-0">
                      <p>{section.content}</p>
                      {section.features && (
                        <ul className="feature-list">
                          {section.features.map((feature, i) => (
                            <li key={i} className="feature-item">                              
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                /* Even sections: content on left, image on right */
                <>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 px-5">
                    <div className="sec-title-wrapper">
                      <h2 className="sec-title fs-1" ref={index === 0 ? charAnim : null}>
                        {section.title}
                      </h2>
                    </div>
                    <div className="development__content mt-3 border-0">
                      <p>{section.content}</p>
                      {section.features && (
                        <ul className="feature-list">
                          {section.features.map((feature, i) => (
                            <li key={i} className="feature-item">                              
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 px-5">
                    <div className="development__img">
                      <Image
                        priority
                        width={600}
                        height={600}
                        src={section.imageUrl}
                        alt={section.title}
                        style={{ width: "100%", height: "100% !important" }}
                      />
                    </div>
                  </div>
                </>
              )}
              
              {/* Add divider between sections except after the last one */}
              {index < sections.length - 1 && (
                <div className="col-xxl-12">
                  <hr className="section-divider" style={{
                    border: 'none',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, #ddd, transparent)',
                    margin: '80px 0'
                  }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`                
        .feature-list {
          list-style: disc;
          padding-left: 2rem;
        }
        
        .feature-item { 
          list-style: disc;         
          margin: 12px 0; 
          font-size: 16px;
          color: #999999;
        }
        
        .feature-item i {
          color: #10c186;
          margin-right: 10px;
          font-size: 14px;
        }
        
        .development__img {          
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        
        .development__img:hover {
          transform: translateY(-5px);
        }
        
        .section-divider {
          border: none;
          height: 1px;
          background: linear-gradient(to right, transparent, #ddd, transparent);
          margin: 80px 0;
        }
        
        
      `}</style>
    </>
  );
};

export default ServiceDetailsAlternatingLayout;
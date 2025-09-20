import animationCharCome from "@/lib/utils/animationCharCome";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const ServiceElementV5 = ({ services, sectionTitle, sectionDescription }) => {
  const charAnim = useRef();
  
  // Default services if none provided
  const serviceItems = services || [
    {
      id: 1,
      title: "Newsletters",
      description: "Outils avancés pour gérer et exécuter des campagnes email efficaces",
      link: "#"
    },
    {
      id: 2,
      title: "Prise de RDV",
      description: "Intégration avec Calendly pour la planification automatique",
      link: "#"
    },
    {
      id: 3,
      title: "Tracking visiteurs",
      description: "Suivi comportement utilisateurs avec données précises et insights",
      link: "#"
    },
    {
      id: 4,
      title: "Paiements",
      description: "Intégration Stripe et PayPal pour des transactions fluides et sécurisées",
      link: "#"
    },
    {
      id: 5,
      title: "Réseaux sociaux",
      description: "Affichage automatique de vos derniers posts LinkedIn et Instagram",
      link: "#"
    },
    {
      id: 6,
      title: "Formulaires",
      description: "Formulaires automatisés pour une prise de contact et suivi fluide",
      link: "#"
    }
  ];

   // Default section title and description
   const title = sectionTitle || "Possibilités d'intégration";
   const description = sectionDescription || "";

  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  return (
    <div>
      <section className="portfolio__service service-v5 pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <h2 className="sec-title animation__char_come text-center" ref={charAnim}>
                {title}
              </h2>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="sec-text text-center">
                <p>
                  {description}
                </p>
              </div>
            </div>
          </div>
          
          <div className="portfolio__service-list">
            {/* Special layout for exactly 4 items */}
            {serviceItems.length === 4 ? (
              <div className="row">
                {/* First row with 2 items centered */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 offset-xxl-2 offset-xl-2 offset-lg-2 offset-md-2">
                  <div className="portfolio__service-item">
                    <Link href={serviceItems[0].link}>
                      <h3 className="ps-title">{serviceItems[0].title}</h3>
                      <p>{serviceItems[0].description}</p>
                      {serviceItems[0].features && (
                          <ul className="feature-list">
                            {serviceItems[0].features.map((feature, i) => (
                              <li key={i} className="feature-item">                              
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                  <div className="portfolio__service-item">
                    <Link href={serviceItems[1].link}>
                      <h3 className="ps-title">{serviceItems[1].title}</h3>
                      <p>{serviceItems[1].description}</p>
                      {serviceItems[1].features && (
                          <ul className="feature-list">
                            {serviceItems[1].features.map((feature, i) => (
                              <li key={i} className="feature-item">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}
                    </Link>
                  </div>
                </div>
                
                {/* Second row with 2 items centered */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 offset-xxl-2 offset-xl-2 offset-lg-2 offset-md-2">
                  <div className="portfolio__service-item h-100">
                    <Link href={serviceItems[2].link}>
                      <h3 className="ps-title">{serviceItems[2].title}</h3>
                      <p>{serviceItems[2].description}</p>
                      {serviceItems[2].features && (
                          <ul className="feature-list">
                            {serviceItems[2].features.map((feature, i) => (
                              <li key={i} className="feature-item">                              
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                  <div className="portfolio__service-item h-100">
                    <Link href={serviceItems[3].link}>
                      <h3 className="ps-title">{serviceItems[3].title}</h3>
                      <p>{serviceItems[3].description}</p>
                      {serviceItems[3].features && (
                          <ul className="feature-list">
                            {serviceItems[3].features.map((feature, i) => (
                              <li key={i} className="feature-item">                              
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              /* Default layout for other numbers of items */
              <div className="row">
                {serviceItems.map((service) => (
                  <div 
                    key={service.id} 
                    className={
                      serviceItems.length === 1 ? "col-xxl-12 col-xl-12 col-lg-12 col-md-12" :
                      serviceItems.length === 2 ? "col-xxl-6 col-xl-6 col-lg-6 col-md-6" :
                      serviceItems.length === 3 ? "col-xxl-4 col-xl-4 col-lg-4 col-md-4" :
                      "col-xxl-4 col-xl-4 col-lg-4 col-md-4" // For 5+ items
                    }
                  >
                    <div className="portfolio__service-item">
                      <Link href={service.link}>
                        <h3 className="ps-title">{service.title}</h3>
                        <p>{service.description}</p>
                        {service.features && (
                          <ul className="feature-list">
                            {service.features.map((feature, i) => (
                              <li key={i} className="feature-item">                              
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
               
      </section>
      
      <style jsx>{`
        .feature-list {
          list-style: disc;
          padding-left: 2rem;
        }
        
        .feature-item { 
          list-style: disc;
          margin: 6px 0; 
          font-size: 16px;
          color: #999999;
        }
        
        .feature-item i {
          color: #10c186;
          margin-right: 10px;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default ServiceElementV5;
import animationCharCome from "@/lib/utils/animationCharCome";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import LogoBlack from "../../../public/assets/imgs/brand/brand_img_2.png";
import Image from "next/image";

const ProjectDetails1 = ({ projectDetails = {} }) => {
  const charAnim = useRef();

  useEffect(() => {
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, []);

  return (
    <div>
      <section className="portfolio__service service-v5 pt-100 pb-100">
        <div className="container">
            <div className="portfolio__service-list">
                <div className="row">
                    {/* First column with logo and basic info */}
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="portfolio__service-item d-flex align-items-center h-100">
                          <Link href="#" className="w-100">
                            {projectDetails.logo && (
                              <Image
                                priority
                                width={190}
                                height={70}
                                src={projectDetails.logo}
                                alt="Brand logo"
                                className="mb-3"
                              />
                            )}
                            
                            {/* Left column data directly from projectDetails */}
                            <div className="row mb-2">
                              <div className="col-lg-3">
                                <p className="fw-semibold">Industrie</p>
                              </div>
                              <div className="col-lg-9">
                                <p>{projectDetails.industry || "Cosmétique"}</p>
                              </div>
                            </div>
                            
                            <div className="row mb-2">
                              <div className="col-lg-3">
                                <p className="fw-semibold">Audience</p>
                              </div>
                              <div className="col-lg-9">
                                <p>{projectDetails.audience || "B2C"}</p>
                              </div>
                            </div>
                            
                            <div className="row mb-2">
                              <div className="col-lg-3">
                                <p className="fw-semibold">Client</p>
                              </div>
                              <div className="col-lg-9">
                                <p>{projectDetails.client || "Client"}</p>
                              </div>
                            </div>
                            
                            <div className="row">
                              <div className="col-lg-3">
                                <p className="fw-semibold">Services</p>
                              </div>
                              <div className="col-lg-9">
                                <p>
                                  {Array.isArray(projectDetails.services) 
                                    ? projectDetails.services.join(", ") 
                                    : projectDetails.services || ""
                                  }
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                    </div>
                    
                    {/* Second column with challenges and solutions */}
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="portfolio__service-item d-flex align-items-center h-100">
                          <Link href="#">
                            {/* Right column data directly from projectDetails */}
                            <div className="row mb-5">
                              <div className="col-lg-3">
                                <p className="fw-semibold">Challenges</p>
                              </div>
                              <div className="col-lg-9">
                                <p>{projectDetails.challenges || "Lancement complet d'une marque de cosmétiques capillaires suisse avec stratégie digitale complète"}</p>
                              </div>
                            </div>
                            
                            <div className="row">
                              <div className="col-lg-3">
                                <p className="fw-semibold">Solutions</p>
                              </div>
                              <div className="col-lg-9">
                                <p>{projectDetails.solutions || "Écosystème e-commerce complet avec site optimisé et stratégie marketing multi-canal"}</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                    </div>
                </div>
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

export default ProjectDetails1;
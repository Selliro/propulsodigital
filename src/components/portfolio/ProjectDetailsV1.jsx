import animationCharCome from "@/lib/utils/animationCharCome";
import React, { useEffect, useRef } from "react";

const ProjectDetailsV1 = ({ 
  title = "",
  description = "",
  paragraphs = []
}) => {
  const charAnim = useRef();

  useEffect(() => {
    if (charAnim.current) {
      animationCharCome(charAnim.current);
    }
  }, [title]);

  // Handle both string description and paragraphs array
  let contentParagraphs = [];
  
  if (Array.isArray(paragraphs) && paragraphs.length > 0) {
    // Use paragraphs array if provided
    contentParagraphs = paragraphs;
  } else if (typeof description === 'string') {
    // Split string description into paragraphs
    contentParagraphs = description.split('\n\n').filter(p => p.trim() !== '');
  } else if (Array.isArray(description)) {
    // If description is accidentally an array, use it directly
    contentParagraphs = description;
  }

  return (
    <div>
      <section className="project_details_v1 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <h2 className="sec-title animation__char_come text-left mb-5" ref={charAnim}>
                {title}
              </h2>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="sec-text text-left">
                {contentParagraphs.length > 0 ? (
                  contentParagraphs.map((paragraph, index) => (
                    <p key={index} className={index > 0 ? "mt-3" : ""}>
                      {paragraph.trim()}
                    </p>
                  ))
                ) : (
                  <p>No content available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailsV1;
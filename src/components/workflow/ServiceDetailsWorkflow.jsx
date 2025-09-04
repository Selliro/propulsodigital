const ServiceDetailsWorkflow = ({ service }) => {
  const steps = service?.workflow?.steps || [];

  const getColumnClass = () => {
    switch(steps.length) {
      case 6:
        return "col-xxl-2 col-xl-2 col-lg-2 col-md-2";
      case 4:
        return "col-xxl-3 col-xl-3 col-lg-3 col-md-3";
      case 3:
        return "col-xxl-4 col-xl-4 col-lg-4 col-md-4";
      case 2:
        return "col-xxl-6 col-xl-6 col-lg-6 col-md-6";
      case 1:
        return "col-xxl-12 col-xl-12 col-lg-12 col-md-12";
      default:
        // Default to 3 columns if not 1-4 or 6
        return "col-xxl-4 col-xl-4 col-lg-4 col-md-4";
    }
  };
  
  const columnClass = getColumnClass();
  return (
    <>
      <section className="workflow__area-6">
        <div className="container g-0 line pb-100">
          <div className="line-3"></div>
          <div className="workflow__wrapper-6">
            <div className="row">
              {steps.map((step, index) => (
                <div key={index} className={columnClass}>
                  <div className="workflow__slide-6">
                    <h6 className="workflow__title-6">
                      {step.title}
                    </h6>
                    <p>{step.description}</p>
                    {step.features && (
                      <ul className="feature-list">
                        {step.features.map((feature, i) => (
                          <li key={i} className="feature-item">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>          
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsWorkflow;
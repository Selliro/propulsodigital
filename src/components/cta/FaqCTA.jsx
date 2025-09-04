import Link from "next/link";

const FaqCTA = () => {
  return (
    <>
      <section className="faq__btm">
        <div className="container line pb-130">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  Encore une question?
                </h2>
                <p className="sub-title-anim">
                  Notre équipe de professionnels serait ravie de vous conseiller. 
                </p>
                <div className="btn_wrapper">
                  <Link
                    href="/contact"
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span>Contactez-nous{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqCTA;

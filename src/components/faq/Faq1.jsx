import animationCharCome from "@/lib/utils/animationCharCome";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";

const Faq1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="faq__area-6">
        <div className="container g-0 line pt-130 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Nous répondons à toutes 
                  vos questions
                </h2>
                {/* <p className="">
                  Frequently asked question (FAQ) <br /> pages to find answars.
                </p> */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__list-6">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion"
                  id="accordionExample"
                >
                  <Accordion.Item eventKey="0" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingOne"
                    >
                      Qu'est-ce que Propulso Digital ?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        People know what an FAQ is, so make that your page
                        title. Don’t overcomplicate things by calling it “Good
                        to Know” or “More Info”. Sometimes people put the
                        frequently asked questions section on their Contact
                        page, but you can create your own page and put it right
                        in your website navigation menu or website footer so
                        it’s easy to find. Getting a straight, quick answer to
                        your question is a relief. So keep answers to a short
                        paragraph if you can, less than 100 words. Answer the
                        entire question in the FAQ without linking away to
                        another page
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingTwo"
                    >
                      Où êtes-vous situés ?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        People know what an FAQ is, so make that your page
                        title. Don’t overcomplicate things by calling it “Good
                        to Know” or “More Info”. Sometimes people put the
                        frequently asked questions section on their Contact
                        page, but you can create your own page and put it right
                        in your website navigation menu or website footer so
                        it’s easy to find. Getting a straight, quick answer to
                        your question is a relief. So keep answers to a short
                        paragraph if you can, less than 100 words. Answer the
                        entire question in the FAQ without linking away to
                        another page
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingThree"
                    >
                      Quels services proposez-vous ?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        People know what an FAQ is, so make that your page
                        title. Don’t overcomplicate things by calling it “Good
                        to Know” or “More Info”. Sometimes people put the
                        frequently asked questions section on their Contact
                        page, but you can create your own page and put it right
                        in your website navigation menu or website footer so
                        it’s easy to find. Getting a straight, quick answer to
                        your question is a relief. So keep answers to a short
                        paragraph if you can, less than 100 words. Answer the
                        entire question in the FAQ without linking away to
                        another page
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFour"
                    >
                      Qu'est-ce qu'un RDV découverte ?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        People know what an FAQ is, so make that your page
                        title. Don’t overcomplicate things by calling it “Good
                        to Know” or “More Info”. Sometimes people put the
                        frequently asked questions section on their Contact
                        page, but you can create your own page and put it right
                        in your website navigation menu or website footer so
                        it’s easy to find. Getting a straight, quick answer to
                        your question is a relief. So keep answers to a short
                        paragraph if you can, less than 100 words. Answer the
                        entire question in the FAQ without linking away to
                        another page
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFive"
                    >
                      Comment puis-je commencer à travailler avec Propulso Digital ?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        People know what an FAQ is, so make that your page
                        title. Don’t overcomplicate things by calling it “Good
                        to Know” or “More Info”. Sometimes people put the
                        frequently asked questions section on their Contact
                        page, but you can create your own page and put it right
                        in your website navigation menu or website footer so
                        it’s easy to find. Getting a straight, quick answer to
                        your question is a relief. So keep answers to a short
                        paragraph if you can, less than 100 words. Answer the
                        entire question in the FAQ without linking away to
                        another page
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq1;

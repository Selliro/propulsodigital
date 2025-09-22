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
                        Propulso Digital est votre partenaire digital & e-commerce suisse pour PME et marques visionnaires. 
                        Nous propulsons votre business avec des stratégies digitales sur-mesure pour maximiser votre croissance en ligne.
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
                        Notre équipe est basée en Suisse, à Genève. Nous nous déplaçons au besoin pour vous rencontrer.
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
                      Nous offrons une gamme complète de services incluant: <br/>
                        • Stratégie & Branding : Nous créons votre identité digitale et définissons la stratégie qui vous positionne comme leader sur votre marché avec impact et cohérence. <br/>
                        • Sites Internet & E-commerce : Nous développons des sites web performants et des boutiques en ligne optimisées qui convertissent vos visiteurs en clients fidèles.<br/>
                        • Email Marketing & Automatisation : Nous concevons des campagnes email ciblées et des funnels automatisés qui renforcent l'engagement et transforment vos contacts en clients récurrents.<br/>
                        • Référencement naturel (SEO) : Nous optimisons votre présence en ligne grâce à des techniques de référencement avancées qui positionnent votre entreprise en tête des résultats de recherche.<br/>
                        • Social Media Advertising (SMA) : Nous créons des campagnes publicitaires performantes sur Meta et Tiktok Ads qui génèrent des leads qualifiés et boostent vos conversions.
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
                        Un RDV découverte est une première rencontre entre votre entreprise et notre équipe. 
                        Lors de cet échange, nous discutons de vos besoins, objectifs et défis afin de mieux comprendre votre projet. 
                        Cela nous permet de vous conseiller, de proposer des solutions adaptées et de définir ensemble vos priorités. 
                        C'est l'occasion idéale pour poser vos questions et découvrir comment nous pouvons vous accompagner dans votre croissance.
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
                        Contactez-nous via notre formulaire en ligne pour planifier une consultation gratuite. 
                        Nous discuterons de vos besoins et objectifs pour élaborer une stratégie personnalisée pour votre entreprise.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFive"
                    >
                      Quelles sont les étapes après la consultation initiale ? 
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                      Après la consultation initiale, nous élaborons un plan d'action détaillé et un devis. 
                      Une fois approuvés, nous commençons la mise en œuvre de la stratégie en étroite collaboration avec votre équipe pour garantir des résultats optimaux.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="6" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFive"
                    >
                      Quelle est votre approche pour élaborer une stratégie marketing ?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        Notre approche repose sur "La méthode Propulso", un processus en 4 étapes éprouvées : <br/>
                        Étape 1 - Découverte : Analyse détaillée de votre entreprise, objectifs et audience cible <br/>
                        Étape 2 - Stratégie : Développement d'un plan d'action personnalisé et optimisé<br/>
                        Étape 3 - Développement : Mise en œuvre technique et créative des solutions <br/>
                        Étape 4 - Exécution : Déploiement, optimisation continue et mesure des performances<br/>
                        Cette méthode nous permet de créer des stratégies digitales sur-mesure qui maximisent votre retour sur investissement.                      
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="7" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFive"
                    >
                      Comment pouvez-vous aider mon entreprise à croître ? 
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        Nous propulsons votre business grâce à des stratégies digitales sur-mesure. En tant que partenaire digital & e-commerce suisse spécialisé pour les PME et marques visionnaires, nous :<br/>
                        1. Analysons votre situation actuelle lors de l'étape Découverte <br/>
                        2. Développons une stratégie claire alignée avec vos objectifs<br/>
                        3. Mettons en place des solutions digitales performantes (sites, e-commerce, automation) <br/>
                        4. Exécutons des campagnes créatives pour améliorer votre visibilité et attirer de nouveaux clients <br/>
                        5. Optimisons continuellement pour convertir les prospects en clients fidèles<br/>
                        Notre expertise couvre tous les aspects : de la stratégie à l'automatisation, en passant par le branding et la publicité.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="7" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFive"
                    >
                      Comment gérez-vous les budgets de marketing ?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        Nous travaillons en étroite collaboration avec nos clients pour définir des budgets réalistes et optimiser l'allocation des ressources. 
                        Nous surveillons et ajustons continuellement les campagnes pour garantir un retour sur investissement maximal.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="8" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFive"
                    >
                      Quels résultats puis-je attendre en travaillant avec Propulso Digital ?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        Avec un taux de satisfaction de 98% chez nos clients, vous pouvez vous attendre à : <br/>
                        • Une augmentation significative de la visibilité de votre marque <br/>
                        • Une amélioration de l'engagement de votre audience<br/>
                        • Une augmentation concrète de vos ventes et conversions <br/>
                        • Une optimisation de vos processus digitaux et automatisation <br/>
                        • Un retour sur investissement mesurable et durable <br/>
                        Nous mesurons notre succès par les résultats tangibles que nous obtenons pour nos clients. En tant que partenaire digital & e-commerce suisse, nous nous engageons à propulser votre business vers de nouveaux sommets.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="9" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFive"
                    >
                      Comment assurez-vous la communication avec vos clients ? 
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        Nous maintenons une communication ouverte et fréquente avec nos clients. 
                        Vous aurez un interlocuteur dédié pour répondre à vos questions et vous tenir informé des progrès. 
                        Nous organisons des réunions régulières et fournissons des rapports détaillés sur les performances des campagnes.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="10" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFive"
                    >
                      Avez-vous des témoignages de clients satisfaits ?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        Oui, nous avons de nombreux témoignages de clients satisfaits qui ont bénéficié de nos services. 
                        Vous pouvez consulter notre fiche Google.
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

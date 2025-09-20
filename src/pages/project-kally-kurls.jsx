import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceElementV5 from "@/components/service/ServiceElementV5";
import PortfolioDetails1 from "@/components/portfolio/PortfolioDetails1";
import ProjectDetails1 from "@/components/portfolio/ProjectDetails1";
import ProjectImage360 from "@/components/portfolio/ProjectImage360";
import ProjectDetailsV1 from "@/components/portfolio/ProjectDetailsV1";


const PortfolioDetailsDark = () => {
  // Complete project data structure
  const projectData = {
    title: "Croissance digitale accélérée : l'aventure Kally Kurls",
    shortDescription: "Transformation digitale complète pour une marque de cosmétiques capillaires",
    paragraphs: [
      "La collaboration entre Propulso et Kally Kurls visait à transformer la présence digitale de cette marque spécialisée dans les cosmétiques capillaires pour boucles naturelles. Célia avait sa vision et son identité de marque, mais avait besoin d'expertise pour développer ses ventes en ligne et sa visibilité digitale.",
      "Notre équipe a créé sa boutique e-commerce optimisée pour les conversions, développé une stratégie digitale complète adaptée au marché suisse, mis en place un système de newsletter avec séquences automatisées, et lancé des campagnes publicitaires Meta Ads ciblées sur les femmes aux cheveux bouclés sur le marché francophone en Europe.",
      "Le résultat a été la transformation réussie de Kally Kurls en une marque digitale performante, générant une croissance constante de sa clientèle et fidélisant ses customers grâce à une stratégie marketing efficace."
    ],
    images: [
      {
        "src": "/assets/imgs/portfolio/1/1.jpg",
        "alt": "Page d'accueil Kally Kurls"
      },
      {
        "src": "/assets/imgs/portfolio/1/2.jpg",
        "alt": "Page produit Kally Kurls"
      }      
    ],
    imageSectionTitle: "Project 360°",
    projectDetails: {
      "industry": "Cosmétique",
      "audience": "B2C",
      "client": "Kally Kurls",
      "services": ["Stratégie digitale", "E-commerce", "Email Marketing", "Publicité Meta"],
      "challenges": "Lancement complet d'une marque de cosmétiques capillaires suisse avec stratégie digitale complète",
      "solutions": "Écosystème e-commerce complet avec site optimisé et stratégie marketing multi-canal",
      "logo": "/assets/imgs/brand/brand_img_2.png" 
    }
  };

  return (
    <>
      <Head>
        <title>{projectData.title} | Portfolio</title>
        <meta name="description" content={projectData.shortDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer2" defaultMode="dark">
          <ProjectDetails1 projectDetails={projectData.projectDetails} />
          <ProjectImage360 
            title={projectData.imageSectionTitle}
            images={projectData.images}
          />
          <ProjectDetailsV1 
            title={projectData.title}
            paragraphs={projectData.paragraphs}
          />
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioDetailsDark;
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
    title: "Création d'un écosystème digital automatisé",
    shortDescription: "Transformation digitale complète pour une marque de cosmétiques capillaires",
    paragraphs: [
      "La collaboration entre Propulso et Charbon visait à aider cette marque de produits capillaires masculins à se positionner efficacement sur le marché francophone. Le fondateur avait développé ses formules professionnelles et son identité de marque, mais avait besoin d'expertise pour créer sa présence digitale et définir sa stratégie commerciale.",
      "Notre équipe a créé son site e-commerce avec une expérience utilisateur optimisée pour maximiser les conversions, développé sa stratégie marketing digitale avec analyse concurrentielle approfondie, défini ses personas cibles et messages clés différenciants, ainsi que mis en place son écosystème marketing incluant newsletter automatisée.",
      "Le résultat a été la transformation réussie de Charbon en une marque digitale structurée avec un positionnement unique 'qualité pro, enfin accessible', capable de rivaliser avec les marques établies du secteur."
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
    imageSectionTitle: "Système automatisé de vente de formation en ligne",
    projectDetails: {
      "industry": "Bien-être",
      "audience": "B2C",
      "client": "Kally Kurls",
      "services": ["Stratégie", "Site internet", "Emailing"],
      "challenges": "David, coach professionnel expérimenté, souhaitait lancer sa première formation en ligne mais avait besoin d'un système automatisé complet et d'une stratégie pour digitaliser son activité.",
      "solutions": "Mise en place d’une plateforme automatisée, développement de sa stratégie digitale de lancement, organisation de son shooting photo professionnel et automatisation de son système de newsletter pour maximiser ses conversions.",
      "logo": "/assets/imgs/brand/brand_img_1.png" 
    }
  };

  return (
    <>
      <Head>
        <title>{projectData.title} | Project</title>
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
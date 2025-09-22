import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import ServiceDetailsDevelopment from '@/components/development/ServiceDetailsDevelopment';
import ServiceDetailsWorkflow from '@/components/workflow/ServiceDetailsWorkflow';
import ServiceDetailsService from '@/components/service/ServiceDetailsService';
import ServiceElementV5 from "@/components/service/ServiceElementV5";
import ServiceDetailsAlternatingLayout from '@/components/development/ServiceDetailsAlternatingLayout';
// import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
// import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

// Sample service data
const serviceData = {
  'sites-internet': {
    title: 'Sites Internet',
    description: 'Professional strategy and branding services to elevate your business',
    development: {
      title: 'Sites Internet',
      description: [
        'Une présence web professionnelle est essentielle pour développer votre activité en ligne. Nous concevons et développons des sites internet qui visuellement attrayants, mais aussi performants et optimisés pour la conversion. Nos sites sont conçus pour répondre à vos objectifs spécifiques et transformer efficacement vos visiteurs en clients fidèles.',
        ''
      ],
      features: [
        'Création',
        'Refonte',
        'Migration',
        'Optimisation'        
      ]
    },
    workflow: {
      title: 'Notre Processus',
      steps: [
        {
          title: 'Mission, Vision, Valeurs',
          description: 'Clarifier les objectifs principaux et à long terme de votre entreprise pour une direction claire.'
        },
        {
          title: 'Identité de marque',
          description: "Évaluer et définir l'identité qui trouve un écho auprès de votre audience cible."
        },
        {
          title: 'Profil Client Idéal (PCI)',
          description: 'Définir et comprendre précisément vos clients idéaux pour un ciblage optimal.'
        },
        {
          title: 'Analyse concurrentielle',
          description: 'Comprendre vos concurrents et identifier votre proposition de valeur unique.'
        }
      ]
    },
    serviceSection: {
      title: "Votre marque mérite d'être vue",
      description: [
        "Quand créativité et stratégie ne font qu'un, votre marque se démarque et communique efficacement vos valeurs de manière cohérente sur tous les supports, créant une impression durable auprès de votre audience cible.",
        ""
      ]
    },
    alternatingSections: [
        {
            id: 1,
            title: "Création",
            content: "Site web sur-mesure adapté à vos objectifs",
            imageUrl: "/assets/imgs/thumb/mockup_kallykurls.webp",
            features: [
                "Personnalisé à vos objectifs",
                "Expérience utilisateur optimisée",
                "Design impactant et moderne",
                "Responsive et performant"
            ]
        },
        {
            id: 2,
            title: "Refonte",
            content: "Modernisation de votre site existant",
            imageUrl: "/assets/imgs/thumb/mockup_bienvenue.webp",
            features: [
                "Modernisation complète",
                "Amélioration du contenu",
                "Design et fonctionnalités",
                "Performances optimisées"
            ]
        },
        {
            id: 3,
            title: "Migration",
            content: "Transfert vers une nouvelle plateforme",
            imageUrl: "/assets/imgs/thumb/mockup_david.webp",
            features: [
                "Nouvelle plateforme moderne",
                "Interruption minimale",
                "Performances améliorées",
                "Sécurité renforcée"
            ]
        },
        {
            id: 4,
            title: "Optimisations",
            content: "Optimisation basée sur les données",
            imageUrl: "/assets/imgs/thumb/mockup_charbon.webp",
            features: [
                "Analyse comportement utilisateur",
                "Suivi des performances",
                "Taux de conversion"                
            ]
        }
    ]
  }
};

const SitesInternet = () => {
  // Get the specific service data for strategy-branding
  const currentService = serviceData['sites-internet'];

  return (
    <>
      <Head>
        <title>{currentService.title} | Our Services</title>
        <meta name="description" content={currentService.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer2" defaultMode="dark">
            <ServiceDetailsDevelopment service={currentService} 
                images={[
                    "/assets/imgs/thumb/sites-internet-dev-1.jpg",
                    "/assets/imgs/thumb/sites-internet-dev-2.jpg",
                    "/assets/imgs/thumb/sites-internet-dev-3.jpg"
                ]} 
            />            
            <ServiceDetailsAlternatingLayout service={currentService} />
            <ServiceElementV5 
                services={currentService.integrations}
                sectionTitle="Possibilités d'intégration"
                sectionDescription="Nous enrichissons votre site web avec des intégrations marketing avancées pour maximiser vos conversions et automatiser vos processus."
            />
            {/* <ServiceDetailsWorkflow service={currentService}/>
            <ServiceDetailsService service={currentService} /> */}
            {/* <ServiceDetailsFaq />
            <DigitalAgencyCTA /> */}
        </RootLayout>
      </main>
    </>
  );
};

export default SitesInternet;
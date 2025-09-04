import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import ServiceDetailsDevelopment from '@/components/development/ServiceDetailsDevelopment';
import ServiceDetailsWorkflow from '@/components/workflow/ServiceDetailsWorkflow';
import ServiceDetailsService from '@/components/service/ServiceDetailsService';
import ServiceDetailsAlternatingLayout from '@/components/development/ServiceDetailsAlternatingLayout';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

// Sample service data
const serviceData = {
  'strategy-branding': {
    title: 'Strategy & Branding',
    description: 'Professional strategy and branding services to elevate your business',
    development: {
      title: 'Stratégie & Branding',
      description: [
        'Une identité forte et une stratégie claire : les deux piliers pour vous démarquer et attirer plus de clients. Ensemble, nous définissons qui vous êtes, ce qui vous rend unique, et comment faire connaître votre entreprise pour générer plus de prospects et de ventes.',
        ''
      ],
      features: [
        'Identité visuelle',
        'Stratégie de marque',
        'Positionnement',
        'Guideline'        
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
          title: "Identité visuelle",
          content: "Logo, palette de couleurs, typographies, iconographie & motifs",
          imageUrl: "/assets/imgs/thumb/mockup_kally_kurls.jpg",
          features: [
            // "Personnalisé à vos objectifs",
            // "Expérience utilisateur optimisée",
            // "Design impactant et moderne",
            // "Responsive et performant"
          ]
      },
      {
          id: 2,
          title: "Design print",
          content: "Flyers, brochures, présentations, pitch decks, roll-up, templates",
          imageUrl: "/assets/imgs/thumb/mockup_sp_bally.jpg",
          features: [
            // "Modernisation complète",
            // "Amélioration du contenu",
            // "Design et fonctionnalités",
            // "Performances optimisées"
          ]
      }      
    ]
  }
};

const StrategyBranding = () => {
  // Get the specific service data for strategy-branding
  const currentService = serviceData['strategy-branding'];

  return (
    <>
      <Head>
        <title>{currentService.title} | Our Services</title>
        <meta name="description" content={currentService.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer2" defaultMode="dark">
          <ServiceDetailsDevelopment service={currentService} />
          <ServiceDetailsWorkflow service={currentService}/>
          <ServiceDetailsService service={currentService} />
          <ServiceDetailsAlternatingLayout service={currentService} />
          {/* <ServiceDetailsFaq />
          <DigitalAgencyCTA /> */}
        </RootLayout>
      </main>
    </>
  );
};

export default StrategyBranding;
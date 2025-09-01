import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import ServiceDetailsDevelopment from '@/components/development/ServiceDetailsDevelopment';
import ServiceDetailsWorkflow from '@/components/workflow/ServiceDetailsWorkflow';
import ServiceDetailsService from '@/components/service/ServiceDetailsService';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import DigitalAgencyCTA from '@/components/cta/DigitalAgencyCTA';

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
    }
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
          <ServiceDetailsDevelopment service={currentService} />
          <ServiceDetailsWorkflow service={currentService}/>
          <ServiceDetailsService service={currentService} />
          {/* <ServiceDetailsFaq />
          <DigitalAgencyCTA /> */}
        </RootLayout>
      </main>
    </>
  );
};

export default SitesInternet;
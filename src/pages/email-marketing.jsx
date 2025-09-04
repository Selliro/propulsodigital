import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import ServiceDetailsDevelopment from '@/components/development/ServiceDetailsDevelopment';
import ServiceDetailsWorkflow from '@/components/workflow/ServiceDetailsWorkflow';
import ServiceDetailsService from '@/components/service/ServiceDetailsService';
import ServiceElementV5 from "@/components/service/ServiceElementV5";
import ServiceDetailsAlternatingLayout from '@/components/development/ServiceDetailsAlternatingLayout';

const serviceData = {
    'email-marketing': {
        title: 'Email marketing',
        description: 'Stratégies email personnalisées pour engager votre audience et générer des revenus récurrents',
        development: {
            title: 'Email marketing',
            description: [
                'Nous créons des parcours client personnalisés et engageants, ainsi que des funnels optimisés pour la conversion. Nos solutions sont conçues pour répondre à vos objectifs spécifiques et transformer efficacement vos prospects en clients fidèles.',
                ''
            ],
            features: [
                'Campagnes email',
                'Automatisation',
                'Segmentation',
                'Analyse et optimisation'        
            ]
        },
        workflow: {
            title: "Notre processus d'optimisation email",
            steps: [
                {
                    title: 'Audit & Stratégie',
                    description: 'Analyse de votre base existante et définition des objectifs'
                },
                {
                    title: 'Segmentation',
                    description: "Création de segments ciblés pour une communication personnalisée"
                },
                {
                    title: 'Création de contenu',
                    description: "Design et rédaction d'emails engageants et convertissants"
                },
                {
                    title: 'Automatisation',
                    description: 'Mise en place des workflows et déclencheurs intelligents'
                },
                {
                    title: 'Test & Optimisation',
                    description: 'A/B testing et amélioration continue des performances'
                },
                {
                    title: 'Analyse & Reporting',
                    description: "Suivi des KPIs et recommandations d'optimisation"
                }
            ]
        },
        serviceSection: {
            title: "L'email marketing reste un canal très rentable",
            description: [
                "Avec un ROI moyen de 42 CHF pour 1 CHF investi, l'email marketing demeure l'outil digital le plus performant. Nous concevons des stratégies email personnalisées qui engagent votre audience et génèrent des revenus récurrents pour votre entreprise.",
                ""
            ],
            image: "/assets/imgs/thumb/email-marketing-banner.jpg",
            imageAlt: "Email marketing services" 
        },
        integrations: [
            {
                id: 1,
                title: "Campagnes email",
                description: "Newsletters et campagnes promotionnelles engageantes",
                link: "#",
                features: [
                    "Design responsive et attractif",
                    "Contenu personnalisé",
                    "Optimisation des taux d'ouverture",
                    "A/B testing des éléments"
                ]
            },
            {
                id: 2,
                title: "Automatisation",
                description: "Workflows intelligents qui réagissent au comportement client",
                link: "#",
                features: [
                    "Workflows intelligents",
                    "Triggers comportementaux",
                    "Séquences de nurturing",
                    "Parcours clients automatisés"
                ]
            },
            {
                id: 3,
                title: "Segmentation",
                description: "Ciblage précis pour maximiser la pertinence",
                link: "#",
                features: [
                    "Segments comportementaux",
                    "Profils démographiques",
                    "Historique d'achat",
                    "Engagement utilisateur"
                ]
            },
            {
                id: 4,
                title: "Analytics & Optimisation",
                description: "Mesure et amélioration continue des performances",
                link: "#",
                features: [
                    "Rapports détaillés",
                    "KPIs personnalisés",
                    "Recommandations d'amélioration",
                    "Suivi ROI en temps réel"
                ]
            }
        ]        
    }
};

const EmailMarketing = () => {
  // Get the specific service data for email-marketing
  const currentService = serviceData['email-marketing'];

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
                    "/assets/imgs/thumb/email-dev-1.jpg",
                    "/assets/imgs/thumb/email-dev-2.png",
                    "/assets/imgs/thumb/email-dev-3.jpg"
                ]} 
            />
            <ServiceDetailsService service={currentService} />
            <ServiceDetailsWorkflow service={currentService}/>            
            <ServiceElementV5 
                services={currentService.integrations}
                sectionTitle="Nos services email marketing"
                sectionDescription=""
            />
            {/* <ServiceDetailsAlternatingLayout service={currentService} /> */}
            {/* <ServiceDetailsFaq />
            <DigitalAgencyCTA /> */}
        </RootLayout>
      </main>
    </>
  );
};

export default EmailMarketing;
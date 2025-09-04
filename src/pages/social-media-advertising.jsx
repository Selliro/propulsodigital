import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import ServiceDetailsDevelopment from '@/components/development/ServiceDetailsDevelopment';
import ServiceDetailsWorkflow from '@/components/workflow/ServiceDetailsWorkflow';
import ServiceDetailsService from '@/components/service/ServiceDetailsService';
import ServiceElementV5 from "@/components/service/ServiceElementV5";
import ServiceDetailsAlternatingLayout from '@/components/development/ServiceDetailsAlternatingLayout';

const serviceData = {
    'social-media-advertising': {
        title: 'Social Media Advertising (SMA)',
        description: '',
        development: {
            title: 'Social Media Advertising (SMA)',
            description: [
                'Nous créons des campagnes publicitaires performantes sur Meta (Facebook & Instagram) et TikTok POUR GéNéRER des leads qualifiés et booster vos conversions.',
                ''
            ],
            features: [
                'Audience',
                'Créatives',
                'Targeting',
                'Campagnes'        
            ]
        },
        workflow: {
            title: "Notre processus SEO",
            steps: [
                {
                    title: 'Création Stratégie & Ciblage',
                    description: 'Définition de votre audience cible et stratégie publicitaire',
                    features: [
                        "Personas et audience insights",
                        "Stratégie de ciblage multi-plateforme",
                        "Budget allocation optimisée",
                        "Objectifs et KPIs définis"
                    ]
                },
                {
                    title: 'Création publicitaire',
                    description: "Design de visuels et rédaction de contenus qui convertissent",
                    features: [
                        "Visuels impactants et formats variés",
                        "Copywriting persuasif",
                        "Vidéos et statiques",
                        "A/B testing créatif"
                    ]
                },
                {
                    title: 'Gestion de campagnes',
                    description: "Setup, lancement et optimisation continue des campagnes",
                    features: [
                        "Configuration technique avancée",
                        "Tracking et pixels de conversion",
                        "Gestion budgétaire"                        
                    ]
                },
                {
                    title: 'Analytics & Reporting',
                    description: 'Mesure des performances et optimisation du ROI',
                    features: [
                        "Rapports de performance détaillés",
                        "Analyse des KPIS",
                        "Recommandations d'optimisation"                        
                    ]
                }
            ]
        },
        serviceSection: {
            title: "La publicité sur les réseaux votre accélérateur de croissance",
            description: [
                "Une stratégie publicitaire sociale bien orchestrée est essentielle pour accélérer votre croissance. Nous créons des campagnes ciblées et optimisées qui transforment votre budget publicitaire en revenus mesurables et clients fidèles.",
                ""
            ],
            image: "/assets/imgs/thumb/natural-referencing-banner.jpg",
            imageAlt: "Email marketing services" 
        },
        integrations: [
            {
                id: 1,
                title: "SEO Technique",
                description: "Optimisation de la structure et des performances de votre site",
                link: "#",
                features: [
                    "Audit technique complet",
                    "Optimisation vitesse de chargement",
                    "Structure URL et maillage interne",
                    "Mobile-first et Core Web Vitals"
                ]
            },
            {
                id: 2,
                title: "SEO DE CONTENU",
                description: "Création et optimisation de contenu pour vos mots-clés",
                link: "#",
                features: [
                    "Recherche de mots-clés stratégiques",
                    "Optimisation contenus existants",
                    "Création de contenu SEO-friendly",
                    "Balises title et méta descriptions"
                ]
            },
            {
                id: 3,
                title: "SEO Local",
                description: "Dominer les recherches locales dans votre région",
                link: "#",
                features: [
                    "Optimisation Google Business Profile",
                    "Citations locales et NAP",
                    "Avis clients et réputation",
                    "Géolocalisation et cartes"
                ]
            },
            {
                id: 4,
                title: "Suivi et Analytics",
                description: "Mesure et amélioration continue de vos performances",
                link: "#",
                features: [
                    "Monitoring positions et trafic",
                    "Rapports de performance détaillés",
                    "Analyse de la concurrence",
                    "Recommandations d'optimisation"
                ]
            }
        ]        
    }
};

const SocialMediaAdvertising = () => {

  const currentService = serviceData['social-media-advertising'];

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
                    "/assets/imgs/thumb/social-media-dev-1.png",
                    "/assets/imgs/thumb/natural-referencing-dev-2.webp",
                    "/assets/imgs/thumb/social-media-dev-3.png"
                ]} 
            />
            <ServiceDetailsService service={currentService} />
            <ServiceDetailsWorkflow service={currentService}/>            
            {/* <ServiceElementV5 
                services={currentService.integrations}
                sectionTitle="Notre processus SMA"
                sectionDescription=""
            /> */}
            {/* <ServiceDetailsAlternatingLayout service={currentService} /> */}
            {/* <ServiceDetailsFaq />
            <DigitalAgencyCTA /> */}
        </RootLayout>
      </main>
    </>
  );
};

export default SocialMediaAdvertising;
import Head from 'next/head';
import RootLayout from '@/components/common/layout/RootLayout';
import ServiceDetailsDevelopment from '@/components/development/ServiceDetailsDevelopment';
import ServiceDetailsWorkflow from '@/components/workflow/ServiceDetailsWorkflow';
import ServiceDetailsService from '@/components/service/ServiceDetailsService';
import ServiceElementV5 from "@/components/service/ServiceElementV5";
import ServiceDetailsAlternatingLayout from '@/components/development/ServiceDetailsAlternatingLayout';

const serviceData = {
    'natural-referencing': {
        title: 'Référencement naturel (SEO)',
        description: '',
        development: {
            title: 'Référencement naturel (SEO)',
            description: [
                'Nous optimisons votre présence en ligne grâce à des techniques de référencement  qui positionnent votre entreprise en tête des résultats de recherche.',
                ''
            ],
            features: [
                'SEO technique',
                'Création de contenu',
                'Analyse mots-clés',
                'Local SEO'        
            ]
        },
        workflow: {
            title: "Notre processus SEO",
            steps: [
                {
                    title: 'Audit SEO complet',
                    description: 'Analyse technique, contenu et concurrence pour identifier les opportunités'
                },
                {
                    title: 'Stratégie mots-clés',
                    description: "Recherche et sélection des mots-clés les plus rentables pour votre business"
                },
                {
                    title: 'Optimisation technique',
                    description: "Correction des problèmes techniques et amélioration des performances"
                },
                {
                    title: 'Optimisation contenus',
                    description: 'Amélioration et création de contenus optimisés pour vos mots-clés cibles'
                },
                {
                    title: 'Netlinking',
                    description: 'Développement de liens de qualité pour renforcer votre autorité'
                },
                {
                    title: 'Suivi et ajustements',
                    description: "Monitoring continu et optimisations basées sur les résultats"
                }
            ]
        },
        serviceSection: {
            title: "Le SEO, votre atout pour dominer Google",
            description: [
                "Une stratégie SEO efficace est essentielle pour développer votre visibilité en ligne. Nous optimisons votre site web et votre contenu pour attirer un trafic qualifié et convertir vos visiteurs en clients fidèles.",
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

const NaturalReferencing = () => {

  const currentService = serviceData['natural-referencing'];

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
                    "/assets/imgs/thumb/natural-referencing-dev-1.webp",
                    "/assets/imgs/thumb/natural-referencing-dev-2.webp",
                    "/assets/imgs/thumb/natural-referencing-dev-3.webp"
                ]} 
            />
            <ServiceDetailsService service={currentService} />
            <ServiceDetailsWorkflow service={currentService}/>            
            <ServiceElementV5 
                services={currentService.integrations}
                sectionTitle="Nos services SEO"
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

export default NaturalReferencing;
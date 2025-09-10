import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaAward, FaUsers, FaGraduationCap, FaRuler, FaHeart, FaChevronRight } from 'react-icons/fa';
import { motion, useAnimation, useInView } from 'framer-motion';
import type { TeamMember } from '../../types';

const teamMembers: TeamMember[] = [
    { 
        id: 1, 
        name: 'Abbé Noël-Aimé Ngwa Nguéma', 
        role: 'Fondateur Visionnaire', 
        imageUrl: 'https://www.libreville-accueil-bal.org/medias/images/20200210-093656.jpeg?fx=r_1200_800',
        bio: 'Fondateur de l\'école en 1996, l\'abbé Noël-Aimé a consacré sa vie à l\'éducation et à la formation professionnelle des jeunes gabonais.'
    },
    { 
        id: 2, 
        name: 'Mme Bernadette MPAGA TCHANDI', 
        role: 'Directrice', 
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
        bio: 'À la tête de l\'établissement depuis 10 ans, elle apporte son expertise en gestion et son amour pour le savoir-faire artisanal.'
    },
    { 
        id: 3, 
        name: 'M. ELLA MVE Thierry Clay', 
        role: 'Gestionnaire', 
        imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=400&auto=format&fit=crop',
        bio: 'Expert en gestion administrative et financière, il veille au bon fonctionnement quotidien de l\'institution.'
    },
    { 
        id: 4, 
        name: 'Mme KOUOTOU Henriette', 
        role: 'Enseignante Principale', 
        imageUrl: 'https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=400&auto=format&fit=crop',
        bio: 'Plus de 15 ans d\'expérience dans l\'enseignement des techniques de couture et de modélisme.'
    },
    { 
        id: 5, 
        name: 'M. MANDA', 
        role: 'Enseignant', 
        imageUrl: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=400&auto=format&fit=crop',
        bio: 'Spécialiste en création de vêtements sur mesure et techniques de patronage industriel.'
    },
];

const stats = [
    { id: 1, value: 25, suffix: '+', label: 'Années d\'expérience', icon: <FaAward className="w-8 h-8 text-brand-gold" /> },
    { id: 2, value: 500, suffix: '+', label: 'Étudiants diplômés', icon: <FaGraduationCap className="w-8 h-8 text-brand-gold" /> },
    { id: 3, value: 15, suffix: '+', label: 'Prix nationaux', icon: <FaAward className="w-8 h-8 text-brand-gold" /> },
    { id: 4, value: 95, suffix: '%', label: 'Taux d\'insertion', icon: <FaUsers className="w-8 h-8 text-brand-gold" /> },
];

const values = [
    {
        title: 'Excellence',
        description: 'Nous visons l\'excellence dans chaque création et formation que nous dispensons.',
        icon: <FaAward className="w-8 h-8 text-brand-gold" />
    },
    {
        title: 'Innovation',
        description: 'Nous encourageons la créativité et l\'innovation dans le design de mode africain.',
        icon: <FaRuler className="w-8 h-8 text-brand-gold" />
    },
    {
        title: 'Passion',
        description: 'Notre passion pour la mode se reflète dans notre engagement envers chaque étudiant.',
        icon: <FaHeart className="w-8 h-8 text-brand-gold" />
    },
    {
        title: 'Excellence',
        description: 'Nous visons l\'excellence dans chaque création et formation que nous dispensons.',
        icon: <FaGraduationCap className="w-8 h-8 text-brand-gold" />
    }
];

const history = [
    {
        year: '1996',
        title: 'Fondation',
        description: 'Création de l\'école par l\'abbé Noël-Aimé Ngwa Nguéma avec une vision de former les jeunes aux métiers de la mode.'
    },
    {
        year: '2005',
        title: 'Expansion',
        description: 'Lancement de nouveaux programmes et agrandissement des locaux pour accueillir plus d\'étudiants.'
    },
    {
        year: '2015',
        title: 'Reconnaissance',
        description: 'L\'école est reconnue comme centre d\'excellence en formation professionnelle par le Ministère de l\'Éducation.'
    },
    {
        year: '2023',
        title: 'Innovation',
        description: 'Introduction de nouvelles technologies et méthodes d\'enseignement pour rester à la pointe de l\'industrie de la mode.'
    }
];

const testimonials = [
    {
        id: 1,
        name: 'Marie-Louise M.',
        role: 'Diplômée 2020, Créatrice de mode',
        content: 'L\'école m\'a donné les compétences et la confiance nécessaires pour lancer ma propre marque. Je suis éternellement reconnaissante envers mes formateurs.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Jean K.',
        role: 'Styliste senior, Maison de Mode X',
        content: 'La formation pratique et l\'accompagnement personnalisé m\'ont permis de m\'épanouir professionnellement. Une référence dans le domaine de la mode en Afrique centrale.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop'
    }
];

const AnimatedCounter = ({ value, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const duration = 2; // seconds
    const step = Math.ceil(value / (60 * duration)); // 60fps * duration
    
    useEffect(() => {
        if (count < value) {
            const timer = setTimeout(() => setCount(prev => Math.min(prev + step, value)), 1000/60);
            return () => clearTimeout(timer);
        }
    }, [count, value, step]);
    
    return <span>{count}{suffix}</span>;
};

const AboutPage: React.FC = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    return (
        <div className="bg-brand-light">
            {/* Hero Section */}
            <header className="relative h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/30 z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1515377905703-c47850e0e0d8?q=80&w=2070&auto=format&fit=crop" 
                        alt="Atelier de couture" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-gold font-bold tracking-widest text-sm md:text-base mb-4 inline-block">ÉCOLE DE MODE DE NZENG AYONG</span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
                            L'Excellence en Mode Africaine
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10">
                            Depuis 1996, nous formons la prochaine génération de créateurs de mode inspirants et innovants en Afrique centrale.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link 
                                to="/formations" 
                                className="bg-brand-gold hover:bg-yellow-500 text-brand-dark font-bold py-4 px-8 text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 rounded"
                            >
                                Découvrir nos formations
                            </Link>
                            <Link 
                                to="/contact" 
                                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 text-lg uppercase tracking-wider transition-all duration-300 rounded"
                            >
                                Nous contacter
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
                    <div className="animate-bounce">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </header>

            {/* Notre Histoire */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <span className="text-brand-gold font-bold tracking-wider text-sm mb-4 inline-block">NOTRE HISTOIRE</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-burgundy mb-6">
                            Un héritage d'excellence depuis 1996
                        </h2>
                        <div className="h-1 w-20 bg-brand-gold mx-auto mb-8"></div>
                        <p className="text-lg text-gray-700">
                            Découvrez comment une vision audacieuse est devenue une référence dans la formation aux métiers de la mode en Afrique centrale.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 w-1 h-full bg-brand-gold/30 transform -translate-x-1/2"></div>
                        
                        {history.map((item, index) => (
                            <div key={index} className={`mb-16 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className="bg-white p-6 rounded-xl shadow-lg"
                                    >
                                        <div className="text-brand-burgundy font-bold text-2xl mb-2">{item.year}</div>
                                        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </motion.div>
                                </div>
                                <div className="w-1/2 flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full bg-brand-gold border-4 border-white shadow-md z-10"></div>
                                </div>
                                <div className="w-1/2"></div>
                            </div>
                        ))}
                    </div>

                    {/* Notre Vision */}
                    <div className="mt-32 grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=2070&auto=format&fit=crop" 
                                    alt="Étudiants en atelier" 
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-3/4 h-3/4 border-4 border-brand-gold rounded-2xl z-0 hidden lg:block"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <span className="text-brand-gold font-bold tracking-wider text-sm">NOTRE VISION</span>
                                <h2 className="text-4xl font-serif text-brand-burgundy mt-2 mb-6">Former les leaders de la mode de demain</h2>
                                <div className="h-1 w-20 bg-brand-gold mb-8"></div>
                            </div>
                            
                            <div className="space-y-6">
                                <p className="text-lg text-gray-700">
                                    Notre mission dépasse la simple transmission de compétences techniques. Nous façonnons des créateurs complets, porteurs d'une identité culturelle forte et d'une vision contemporaine de la mode africaine.
                                </p>
                                <p className="text-lg text-gray-700">
                                    À travers un enseignement alliant tradition et innovation, nous préparons nos étudiants à exceller sur la scène internationale tout en préservant les richesses de notre patrimoine textile.
                                </p>
                            </div>
                            
                            <div className="pt-4">
                                <Link 
                                    to="/valeurs" 
                                    className="inline-flex items-center text-brand-burgundy font-semibold hover:text-brand-gold transition-colors group"
                                >
                                    Découvrir nos valeurs
                                    <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Chiffres clés */}
            <section className="py-24 bg-brand-burgundy text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-brand-gold font-bold tracking-wider text-sm mb-4 inline-block">NOTRE IMPACT</span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">
                            Une école qui fait la différence
                        </h2>
                        <p className="text-xl text-brand-light/80 max-w-3xl mx-auto">
                            Des chiffres qui témoignent de notre engagement et de notre succès dans la formation aux métiers de la mode.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {stats.map((stat) => (
                            <motion.div 
                                key={stat.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: stat.id * 0.1 }}
                                className="text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10"
                            >
                                <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    {stat.icon}
                                </div>
                                <div className="text-5xl font-serif font-bold text-brand-gold mb-2">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-brand-light/90 uppercase text-sm font-medium tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Valeurs */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <span className="text-brand-gold font-bold tracking-wider text-sm mb-4 inline-block">NOS VALEURS</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-burgundy mb-6">
                            Les piliers de notre école
                        </h2>
                        <div className="h-1 w-20 bg-brand-gold mx-auto mb-8"></div>
                        <p className="text-lg text-gray-700">
                            Notre engagement se fonde sur des valeurs fortes qui guident chacune de nos actions et de nos formations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-brand-light p-8 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-brand-burgundy mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Témoignages */}
            <section className="py-24 bg-stone-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-brand-gold font-bold tracking-wider text-sm mb-4 inline-block">TÉMOIGNAGES</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-burgundy mb-6">
                            Ce que disent nos étudiants
                        </h2>
                        <div className="h-1 w-20 bg-brand-gold mx-auto mb-8"></div>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="relative">
                            <div className="overflow-hidden">
                                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                                    {testimonials.map((testimonial) => (
                                        <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                                                <FaQuoteLeft className="text-brand-gold text-4xl mb-8 opacity-20" />
                                                <p className="text-xl md:text-2xl text-gray-800 italic mb-8">"{testimonial.content}"</p>
                                                <div className="flex items-center">
                                                    <img 
                                                        src={testimonial.image} 
                                                        alt={testimonial.name} 
                                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                                    />
                                                    <div>
                                                        <h4 className="font-serif text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                                                        <p className="text-brand-burgundy">{testimonial.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="flex justify-center mt-12 space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTestimonial(index)}
                                        className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-brand-gold w-8' : 'bg-gray-300'}`}
                                        aria-label={`Aller au témoignage ${index + 1}`}
                                    ></button>
                                ))}
                            </div>

                            <button 
                                onClick={() => setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center text-brand-burgundy hover:bg-brand-gold hover:text-white transition-colors"
                                aria-label="Témoignage précédent"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button 
                                onClick={() => setActiveTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center text-brand-burgundy hover:bg-brand-gold hover:text-white transition-colors"
                                aria-label="Témoignage suivant"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notre équipe */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-brand-gold font-bold tracking-wider text-sm mb-4 inline-block">NOTRE ÉQUIPE</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-burgundy mb-6">
                            Rencontrez nos experts
                        </h2>
                        <div className="h-1 w-20 bg-brand-gold mx-auto mb-8"></div>
                        <p className="text-lg text-gray-700">
                            Une équipe passionnée et expérimentée, dédiée à votre réussite dans le monde de la mode.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <img 
                                        src={member.imageUrl} 
                                        alt={member.name} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div>
                                            <h3 className="text-2xl font-serif text-white font-bold">{member.name}</h3>
                                            <p className="text-brand-gold font-medium">{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-6">{member.bio}</p>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-brand-burgundy hover:text-brand-gold transition-colors" aria-label={`Profil LinkedIn de ${member.name}`}>
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 overflow-hidden bg-brand-burgundy text-white">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483181957632-8bda974cbc91?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-burgundy to-brand-burgundy/90"></div>
                </div>
                
                <div className="relative z-10">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Prêt à façonner l'avenir de la mode ?</h2>
                            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-brand-light/90">
                                Rejoignez une communauté dynamique de créateurs passionnés et donnez vie à vos idées les plus audacieuses.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link 
                                    to="/admissions" 
                                    className="bg-brand-gold hover:bg-yellow-500 text-brand-dark font-bold py-5 px-10 text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 rounded-lg inline-flex items-center justify-center"
                                >
                                    <span>Postuler maintenant</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                                <Link 
                                    to="/contact" 
                                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-5 px-10 text-lg uppercase tracking-wider transition-all duration-300 rounded-lg inline-flex items-center justify-center"
                                >
                                    <span>Nous contacter</span>
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </Link>
                            </div>
                            <p className="mt-8 text-brand-light/70">
                                Prochaine rentrée : <span className="font-semibold text-white">Septembre 2024</span> • Places limitées
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
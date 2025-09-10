
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaCalendarAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

// Données pour les témoignages
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
  },
  {
    id: 3,
    name: 'Amina D.',
    role: 'Modéliste, Créatrice de Bijoux',
    content: 'L\'approche pédagogique unique de l\'école m\'a permis de développer ma créativité tout en acquérant des compétences techniques solides.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
  }
];

// Données pour les événements à venir
const upcomingEvents = [
  {
    id: 1,
    title: 'Portes Ouvertes 2024',
    date: '15 Octobre 2024',
    location: 'École de Mode de Nzeng Ayong',
    description: 'Venez découvrir nos formations et rencontrer notre équipe pédagogique lors de notre journée portes ouvertes.',
    image: 'https://images.unsplash.com/photo-1511578314323-379af7d5d225?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Défilé des Diplômés',
    date: '30 Novembre 2024',
    location: 'Palais des Congrès de Libreville',
    description: 'Assistez au défilé des collections des étudiants de dernière année, un événement incontournable de la mode gabonaise.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop'
  }
];

// Données pour la galerie
const galleryImages = [
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485462537746-965f33f7b6bb?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2070&auto=format&fit=crop'
];

const HomePage: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  // Animation au défilement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation automatique des témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Animation au chargement
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    });
  }, [controls]);

  return (
    <div className="bg-brand-light">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-brand-burgundy">
              École de Mode
            </Link>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-brand-burgundy hover:text-brand-gold font-medium transition-colors">Accueil</Link>
              <Link to="/formations" className="text-brand-burgundy hover:text-brand-gold font-medium transition-colors">Formations</Link>
              <Link to="/a-propos" className="text-brand-burgundy hover:text-brand-gold font-medium transition-colors">À propos</Link>
              <Link to="/admissions" className="text-brand-burgundy hover:text-brand-gold font-medium transition-colors">Admissions</Link>
              <Link to="/contact" className="bg-brand-gold hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full transition-colors">
                Contactez-nous
              </Link>
            </div>
            
            {/* Bouton Menu Mobile */}
            <button 
              className="md:hidden text-brand-burgundy focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Menu Mobile */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <Link to="/" className="block py-2 text-brand-burgundy hover:text-brand-gold">Accueil</Link>
              <Link to="/formations" className="block py-2 text-brand-burgundy hover:text-brand-gold">Formations</Link>
              <Link to="/a-propos" className="block py-2 text-brand-burgundy hover:text-brand-gold">À propos</Link>
              <Link to="/admissions" className="block py-2 text-brand-burgundy hover:text-brand-gold">Admissions</Link>
              <Link to="/contact" className="inline-block mt-2 bg-brand-gold hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full transition-colors">
                Contactez-nous
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section avec vidéo de fond */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
            poster="https://scontent.flbv4-1.fna.fbcdn.net/v/t1.6435-9/101553186_1541928992680928_6054030422625484800_n.jpg"
          >
            <source src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e4205f705d670cc&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <motion.div 
          className="relative z-10 h-full flex items-center justify-center text-center px-4 pt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <div className="max-w-5xl">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              L'Excellence de la <span className="text-brand-gold">Mode Africaine</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Formez-vous aux métiers de la mode dans un cadre d'exception. 
              Un enseignement d'excellence pour des carrières éblouissantes.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link 
                to="/formations" 
                className="bg-brand-gold hover:bg-yellow-500 text-brand-dark font-bold py-4 px-8 text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 rounded-lg"
              >
                Découvrir nos formations
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 text-lg uppercase tracking-wider transition-all duration-300 rounded-lg"
              >
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
          <motion.div 
            className="animate-bounce cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-brand-burgundy text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-serif font-bold text-brand-gold mb-2">25+</div>
              <p className="uppercase text-sm tracking-wider">Années d'expérience</p>
            </motion.div>
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-serif font-bold text-brand-gold mb-2">500+</div>
              <p className="uppercase text-sm tracking-wider">Étudiants diplômés</p>
            </motion.div>
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-serif font-bold text-brand-gold mb-2">15+</div>
              <p className="uppercase text-sm tracking-wider">Prix nationaux</p>
            </motion.div>
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-serif font-bold text-brand-gold mb-2">95%</div>
              <p className="uppercase text-sm tracking-wider">Taux d'insertion</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://www.libreville-accueil-bal.org/medias/images/20200210-93101.jpeg" 
                  alt="Atelier de couture" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-3/4 h-3/4 border-4 border-brand-gold rounded-2xl z-0 hidden lg:block"></div>
            </m.div>
            
            <motion.div 
              className="max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-brand-gold font-bold tracking-wider text-sm mb-4 inline-block">À PROPOS DE NOUS</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-burgundy mb-6 leading-tight">
                Plus qu'une école, une <span className="text-brand-gold">passion</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Fondée en 1996, l'École de Mode de Nzeng Ayong s'est imposée comme une référence dans la formation aux métiers de la mode au Gabon. Notre mission va au-delà de l'enseignement technique : nous façonnons des créateurs complets, porteurs d'une identité culturelle forte et d'une vision contemporaine.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start">
                  <div className="bg-brand-gold/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Pédagogie Innovante</h3>
                    <p className="text-gray-600">Méthodes d'apprentissage pratiques et théoriques équilibrées</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-gold/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Réseau International</h3>
                    <p className="text-gray-600">Partenariats avec des écoles et entreprises de mode en Afrique et en Europe</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/a-propos" 
                className="inline-flex items-center text-brand-burgundy font-bold hover:text-brand-gold transition-colors duration-300 group"
              >
                Découvrir notre histoire
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
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
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === index ? 'bg-brand-gold w-8' : 'bg-gray-300'}`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button 
                onClick={() => setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center text-brand-burgundy hover:bg-brand-gold hover:text-white transition-colors"
                aria-label="Témoignage précédent"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setActiveTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center text-brand-burgundy hover:bg-brand-gold hover:text-white transition-colors"
                aria-label="Témoignage suivant"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="py-24 bg-gradient-to-b from-stone-100 to-stone-200">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold font-bold tracking-wider text-sm mb-4 inline-block">NOS FORMATIONS</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-burgundy mb-6">
              Un enseignement d'excellence
            </h2>
            <p className="text-lg text-gray-700">
              Découvrez nos programmes complets conçus pour former les créateurs de mode de demain, alliant savoir-faire traditionnel et innovations contemporaines.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1445205170230-0410b452fa52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Stylisme" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-serif text-white font-bold mb-2">Stylisme Moderne</h3>
                  <span className="inline-block bg-brand-gold text-white text-sm font-bold px-3 py-1 rounded-full">3 ans</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Développez votre univers créatif et apprenez à concevoir des collections innovantes qui reflètent votre identité artistique.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Création de collections</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Design de mode</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Illustration de mode</span>
                  </li>
                </ul>
                <Link 
                  to="/formations#stylisme" 
                  className="inline-flex items-center text-brand-burgundy font-bold hover:text-brand-gold transition-colors duration-300 group"
                >
                  En savoir plus
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1579389083135-1a2fb307f4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Modélisme" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-serif text-white font-bold mb-2">Modélisme de Mode</h3>
                  <span className="inline-block bg-brand-gold text-white text-sm font-bold px-3 py-1 rounded-full">3 ans</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Maîtrisez les techniques de coupe et de patronage pour transformer vos idées en vêtements exceptionnels.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Techniques de patronage</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Moulage sur mannequin</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Techniques de coupe</span>
                  </li>
                </ul>
                <Link 
                  to="/formations#modelisme" 
                  className="inline-flex items-center text-brand-burgundy font-bold hover:text-brand-gold transition-colors duration-300"
                >
                  En savoir plus
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-white p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-serif mb-3">Couture</h3>
              <p className="text-gray-600 mb-4">Acquérez les techniques de haute couture pour des finitions impeccables.</p>
              <img src="https://scontent.flbv4-1.fna.fbcdn.net/v/t1.6435-9/102776080_1541929012680926_2589055351735189504_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFBL-UyGsU023e3zLhVjIZdrzbWF3T1DvSvNtYXdPUO9KNU29k5lEzD6PHqbKX9MHyZod-1Ka-1rEBJzxzieWyD&_nc_ohc=chRZLD9pKcgQ7kNvwHC_inC&_nc_oc=AdmhwXjFVy0VW3-2njk2b5d7ECc9W2VlXNd06giBSvWEF7NS7WNQP-CqEM3qwXqyR7M&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=wUz2TJp6pN5FqyYwyiAt6g&oh=00_AfUp-tsx4Qd6leU0zwRbX_mGoPK6iN6RdXVcEyVcZ7-EJA&oe=68DD13B2" alt="Couture" className="w-full h-48 object-cover mb-4"/>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Spotlight */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-brand-burgundy mb-12">Nos Talents à l'Honneur</h2>
          <div className="grid md:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
            <div className="text-center">
              <img src="https://scontent.flbv4-1.fna.fbcdn.net/v/t39.30808-6/480443297_122216965214199892_7077548424574888409_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEA8M1NHDgHzcH4pG8H_cDGbRNkcEHhhG1tE2RwQeGEbTmXDr9Bn2H_A-bNghSLAw3frMqfqf7M2jo1FNT2s91S&_nc_ohc=O-B_n4DEX70Q7kNvwGlRcBW&_nc_oc=AdkAi-VlCzFDIcBvD7WowexC_EoWmp0D-6wgiOdI_PJ18Vl5Esk7uixn8B1BCFC92iI&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=TyNmGLzGzUEtAoWF9FjUMw&oh=00_AfU6BarsTeeBpoq-QHH-nVINi6gVFpbQvXX00KNe1VDDpg&oe=68BB8974" alt="Création de NGOLA RIABA Juniorra" className="rounded-lg shadow-xl mx-auto mb-4 w-full h-auto object-cover aspect-[4/5]"/>
              <h3 className="text-2xl font-serif">NGOLA RIABA Juniorra</h3>
              <p className="text-gray-600">Promotion 2024</p>
            </div>
            <div className="text-center">
               <img src="https://images.unsplash.com/photo-1617056421427-951fae563032?q=80&w=800&auto=format&fit=crop" alt="Création de RAIVAUD PAULE MAROUSSIA" className="rounded-lg shadow-xl mx-auto mb-4 w-full h-auto object-cover aspect-[4/5]"/>
              <h3 className="text-2xl font-serif">RAIVAUD PAULE MAROUSSIA</h3>
              <p className="text-gray-600">Promotion 2024</p>
            </div>
            <div className="text-center">
               <img src="https://scontent.flbv4-1.fna.fbcdn.net/v/t39.30808-6/513115297_1037753695145373_7708002165157078228_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFef8vuhU3JNJ0V2FblCT1h7Ws1re4Fi7vtazWt7gWLuyQP55Y23eSct8NQiFisuAL_ddxS3k5BmmPMO_AMZcpH&_nc_ohc=nYVAEYIMd9QQ7kNvwGPTpQo&_nc_oc=Adl9D6SQHBvFRaeH2-bW3Wv4ynWMwF83VEz_DvoMJXY_Nt2XI16Ci-c_zKjiNgQobVs&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=2BhR_PzBDA7XK_Zs1VFN2Q&oh=00_AfW7rxOdyj1hE1CcWspCg9Xm19BhqFhnEYI98_cExFq7lg&oe=68BB88DC" alt="Création de LLOYD JÉRÉMIE DIOP NDINGA" className="rounded-lg shadow-xl mx-auto mb-4 w-full h-auto object-cover aspect-[4/5]"/>
              <h3 className="text-2xl font-serif">LLOYD JÉRÉMIE DIOP NDINGA</h3>
              <p className="text-gray-600">Promotion 2025</p>
            </div>
          </div>
          <Link to="/nos-talents" className="mt-12 inline-block bg-brand-dark text-white font-bold py-3 px-8 uppercase tracking-wider hover:bg-brand-burgundy transition-colors duration-300">
            Découvrir tous nos talents
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-burgundy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-6">Prêt à Lancer Votre Carrière ?</h2>
          <p className="text-lg mb-8">Les inscriptions pour la prochaine rentrée sont ouvertes.</p>
          <Link to="/admissions" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 uppercase tracking-wider hover:bg-yellow-300 transition-colors duration-300">
            Postuler Maintenant
          </Link>
        </div>
      </section>
    </div>
  );
};

      {/* Galerie */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index}
                className="relative group overflow-hidden rounded-lg aspect-square"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={image} 
                  alt={`Galerie ${index + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <span className="font-medium">Voir plus</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/galerie" 
              className="inline-flex items-center bg-brand-burgundy hover:bg-brand-burgundy/90 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Voir toute la galerie
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Événements à venir */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-brand-gold font-bold tracking-wider text-sm mb-4 inline-block">ÉVÉNEMENTS À VENIR</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-burgundy mb-6">
              Nos prochains rendez-vous
            </h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              Découvrez les événements à ne pas manquer à l'École de Mode de Nzeng Ayong.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-serif text-white font-bold">{event.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaCalendarAlt className="text-brand-gold mr-2" />
                    <span>{event.date}</span>
                    <FaMapMarkerAlt className="text-brand-gold ml-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  <Link 
                    to="/evenements" 
                    className="inline-flex items-center text-brand-burgundy font-bold hover:text-brand-gold transition-colors duration-300"
                  >
                    En savoir plus
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Inscription */}
      <section className="py-24 bg-brand-burgundy text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Prêt à commencer votre aventure dans la mode ?</h2>
            <p className="text-xl text-brand-light/90 mb-10 max-w-2xl mx-auto">
              Rejoignez notre école et donnez vie à vos idées créatives avec l'aide de nos experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/admissions" 
                className="bg-brand-gold hover:bg-yellow-500 text-brand-dark font-bold py-4 px-8 text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 rounded-lg"
              >
                Postuler maintenant
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 text-lg uppercase tracking-wider transition-all duration-300 rounded-lg"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">École de Mode</h3>
              <p className="text-gray-400 mb-6">
                Formez-vous aux métiers de la mode dans un cadre d'exception. Un enseignement d'excellence pour des carrières éblouissantes.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Liens rapides</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
                <li><Link to="/a-propos" className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
                <li><Link to="/formations" className="text-gray-400 hover:text-white transition-colors">Formations</Link></li>
                <li><Link to="/admissions" className="text-gray-400 hover:text-white transition-colors">Admissions</Link></li>
                <li><Link to="/actualites" className="text-gray-400 hover:text-white transition-colors">Actualités</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Nos formations</h4>
              <ul className="space-y-3">
                <li><Link to="/formations#stylisme" className="text-gray-400 hover:text-white transition-colors">Stylisme Moderne</Link></li>
                <li><Link to="/formations#modelisme" className="text-gray-400 hover:text-white transition-colors">Modélisme de Mode</Link></li>
                <li><Link to="/formations#couture" className="text-gray-400 hover:text-white transition-colors">Couture Créative</Link></li>
                <li><Link to="/formations#stylisme" className="text-gray-400 hover:text-white transition-colors">Stylisme Moderne</Link></li>
                <li><Link to="/formations#modelisme" className="text-gray-400 hover:text-white transition-colors">Modélisme de Mode</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Contactez-nous</h4>
              <address className="not-italic text-gray-400 space-y-3">
                <p>Nzeng Ayong, Libreville</p>
                <p>Gabon</p>
                <p>Email: contact@ecolemode-ga.com</p>
                <p>Tél: +241 XX XX XX XX</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} École de Mode de Nzeng Ayong. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;


import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaBriefcase, FaGraduationCap, FaUsers, FaTrophy, FaSearch, FaLinkedin, FaInstagram, FaTwitter, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Student {
  id: number;
  name: string;
  imageUrl: string;
  alt: string;
  role?: string;
  company?: string;
  testimonial?: string;
}

interface Promotion {
  year: string;
  description: string;
  students: Student[];
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Données des promotions
const promotion2025: Promotion = {
  year: 'Promotion 2025',
  description: "Actuellement en 3ème année, ces talents prometteurs préparent leurs collections de fin de cycle. Découvrez les visages qui marqueront la mode de demain.",
  students: [
    { 
      id: 1, 
      name: 'LLOYD JÉRÉMIE DIOP NDINGA', 
      imageUrl: 'https://scontent.flbv4-1.fna.fbcdn.net/v/t39.30808-6/513115297_1037753695145373_7708002165157078228_n.jpg', 
      alt: 'Création de LLOYD JÉRÉMIE DIOP NDINGA',
      role: 'Styliste Modéliste',
      company: 'En formation',
      testimonial: 'Notre école m\'a appris à concrétiser ma vision créative avec professionnalisme.'
    },
    { 
      id: 2, 
      name: 'LEMBE STINGA Cyrielle', 
      imageUrl: 'https://images.unsplash.com/photo-1581338834647-b0fb40702de3', 
      alt: 'Création de LEMBE STINGA Cyrielle',
      role: 'Designer Textile',
      company: 'En formation',
      testimonial: 'L\'approche pratique de l\'enseignement m\'a permis de développer mon style unique.'
    },
    { 
      id: 3, 
      name: 'NYAMBHAT MENDOME XENIA RIOPELLE', 
      imageUrl: 'https://images.unsplash.com/photo-1551803091-e2ab652293df', 
      alt: 'Création de NYAMBHAT MENDOME XENIA RIOPELLE',
      role: 'Styliste',
      company: 'En formation',
      testimonial: 'Une expérience transformatrice qui a façonné ma vision de la mode contemporaine.'
    }
  ]
};

const promotion2024: Promotion = {
  year: 'Promotion 2024',
  description: "Félicitations à nos diplômés de 2024 ! Ils ont brillamment présenté leurs collections lors du défilé de fin d'année, marquant le début de leur carrière professionnelle.",
  students: [
    { 
      id: 1, 
      name: 'NGOLA RIABA Juniorra', 
      imageUrl: 'https://scontent.flbv4-1.fna.fbcdn.net/v/t39.30808-6/480443297_122216965214199892_7077548424574888409_n.jpg', 
      alt: 'Création de NGOLA RIABA Juniorra',
      role: 'Directrice Artistique',
      company: 'Maison de Couture Africaine',
      testimonial: 'Les compétences acquises ici m\'ont ouvert les portes de l\'industrie de la mode internationale.'
    },
    { 
      id: 2, 
      name: 'RAIVAUD PAULE MAROUSSIA', 
      imageUrl: 'https://images.unsplash.com/photo-1617056421427-951fae563032', 
      alt: 'Création de RAIVAUD PAULE MAROUSSIA',
      role: 'Designer Mode',
      company: 'Studio de Création',
      testimonial: 'Une formation complète qui allie créativité et professionnalisme.'
    },
    { 
      id: 3, 
      name: 'BOUANGA OBIANG GISÈLE CORRIANE', 
      imageUrl: 'https://images.unsplash.com/photo-1558556403-16a78226a066', 
      alt: 'Création de BOUANGA OBIANG GISÈLE CORRIANE',
      role: 'Styliste Modéliste',
      company: 'Atelier de Création',
      testimonial: 'Notre école m\'a donné les clés pour réussir dans ce secteur exigeant.'
    },
    { 
      id: 4, 
      name: 'SEDIEU NGONGANG CÉLESTE', 
      imageUrl: 'https://images.unsplash.com/photo-1534653299134-46a13c36b8e8', 
      alt: 'Création de SEDIEU NGONGANG CÉLESTE',
      role: 'Designer Textile',
      company: 'Maison de Mode',
      testimonial: 'Une expérience enrichissante qui a dépassé toutes mes attentes.'
    },
    { 
      id: 5, 
      name: 'BOUANGA KOUMBA ODETTE LISIANE', 
      imageUrl: 'https://images.unsplash.com/photo-1550993433-8c2875332375', 
      alt: 'Création de BOUANGA KOUMBA ODETTE LISIANE',
      role: 'Styliste',
      company: 'Agence de Mode',
      testimonial: 'La qualité de l\'enseignement et l\'accompagnement sont exceptionnels.'
    },
    { 
      id: 6, 
      name: 'MESIMOBOUSTE jusla vanel', 
      imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338', 
      alt: 'Création de MESIMOBOUSTE jusla vanel',
      role: 'Directrice Artistique',
      company: 'Studio de Création',
      testimonial: 'Une formation qui allie parfaitement théorie et pratique.'
    }
  ]
};

const promotions = [promotion2025, promotion2024];

// Statistiques
const alumniStats = [
  { 
    value: '95%', 
    label: 'Taux d\'insertion professionnelle', 
    icon: <FaBriefcase className="w-8 h-8 mb-4 text-brand-gold mx-auto" />,
    description: 'Nos diplômés trouvent un emploi dans les 6 mois suivant leur formation',
    color: 'from-blue-500 to-blue-600'
  },
  { 
    value: '30+', 
    label: 'Pays représentés', 
    icon: <FaGraduationCap className="w-8 h-8 mb-4 text-brand-gold mx-auto" />,
    description: 'Une communauté internationale de créateurs de mode',
    color: 'from-purple-500 to-purple-600'
  },
  { 
    value: '85%', 
    label: 'Créateurs indépendants', 
    icon: <FaUsers className="w-8 h-8 mb-4 text-brand-gold mx-auto" />,
    description: 'Nos diplômés qui lancent leur propre marque ou entreprise',
    color: 'from-green-500 to-green-600'
  },
  { 
    value: '50+', 
    label: 'Prix remportés', 
    icon: <FaTrophy className="w-8 h-8 mb-4 text-brand-gold mx-auto" />,
    description: 'Récompenses nationales et internationales décernées à nos diplômés',
    color: 'from-yellow-500 to-yellow-600'
  }
];

const AlumniPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPromotion, setSelectedPromotion] = useState<string | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filtrer les étudiants en fonction de la recherche
  const filteredPromotions = promotions.map(promotion => ({
    ...promotion,
    students: promotion.students.filter(student => 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (student.role && student.role.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(promotion => promotion.students.length > 0);

  // Ouvrir la modale d'un étudiant
  const openStudentModal = (student: Student) => {
    setSelectedStudent(student);
    document.body.style.overflow = 'hidden';
  };

  // Fermer la modale
  const closeModal = () => {
    setSelectedStudent(null);
    document.body.style.overflow = 'auto';
  };

  // Navigation entre les images
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % 3);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + 3) % 3);
  };

  // Fermer la modale avec la touche Échap
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <motion.header 
        className="relative bg-brand-dark text-white py-28 md:py-36 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-brand-burgundy/80">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }}></div>
          </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <span className="inline-block bg-brand-gold/20 text-brand-gold text-sm font-semibold px-4 py-1 rounded-full mb-6 border border-brand-gold/30">
              RÉSEAU DES ANCIENS
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-gold/80">
              Nos Talents à l'Honneur
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto text-gray-200 mb-10">
              Découvrez les parcours inspirants de nos diplômés qui façonnent l'avenir de la mode en Afrique et dans le monde.
            </p>
            
            {/* Barre de recherche */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un ancien élève..."
                  className="w-full px-6 py-4 pl-14 pr-12 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-300" />
                {searchTerm && (
                  <button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white"
                    onClick={() => setSearchTerm('')}
                  >
                    ×
                  </button>
                )}
              </div>
              
              {/* Filtres de promotion */}
              <div className="flex flex-wrap justify-center mt-6 gap-2">
                <button 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!selectedPromotion ? 'bg-brand-gold text-brand-dark' : 'bg-white/10 text-white hover:bg-white/20'}`}
                  onClick={() => setSelectedPromotion(null)}
                >
                  Toutes les promotions
                </button>
                {promotions.map(promotion => (
                  <button
                    key={promotion.year}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedPromotion === promotion.year ? 'bg-brand-gold text-brand-dark' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    onClick={() => setSelectedPromotion(promotion.year === selectedPromotion ? null : promotion.year)}
                  >
                    {promotion.year}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Vague décorative */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-24 text-white transform translate-y-1">
            <path d="M0 60L60 50C120 40 240 20 360 20C480 20 600 40 720 60C840 80 960 100 1080 100C1200 100 1320 80 1380 70L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z" fill="currentColor"/>
          </svg>
        </div>
      </motion.header>

      {/* Statistiques */}
      <motion.section 
        className="py-20 bg-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
          },
          hidden: { opacity: 0 }
        }}
      >
        {/* Arrière-plan décoratif */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6bS0zMCAzMHYtNEg0djRoLTJ2Mmg0djRoMnYtNGg0di0ySDZ6bTAtMzBWMGgydjRINHYyaC00VjBoNHoiLz48L2c+PC9nPjwvc3ZnPg==')] transform rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-burgundy mb-4">Notre Impact en Chiffres</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une communauté grandissante de talents qui marquent l'industrie de la mode par leur créativité et leur excellence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumniStats.map((stat, index) => (
              <motion.div 
                key={index}
                className="group relative p-8 rounded-2xl overflow-hidden text-center bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  backgroundImage: `linear-gradient(135deg, ${stat.color.split(' ')[0].replace('from-', '')}, ${stat.color.split(' ')[1].replace('to-', '')})`
                }}></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(stat.icon, { className: 'w-8 h-8' })}
                  </div>
                  <div className="text-4xl font-serif font-bold text-brand-burgundy mb-2 group-hover:text-white transition-colors duration-300">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-600 mb-6">Rejoignez notre réseau d'anciens élèves et bénéficiez d'un réseau professionnel puissant</p>
            <button className="inline-flex items-center bg-brand-burgundy hover:bg-brand-burgundy/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Rejoindre le réseau
              <FaArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Galerie des Promotions */}
      <main>
        <AnimatePresence mode="wait">
          {(selectedPromotion ? promotions.filter(p => p.year === selectedPromotion) : filteredPromotions).map((promotion, index) => (
            <motion.section 
              key={promotion.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`py-20 relative ${index % 2 === 0 ? 'bg-white' : 'bg-brand-light'}`}
            >
              {/* Effet de vague entre les sections */}
              {index > 0 && (
                <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
                  <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-24 text-white">
                    <path d="M0 40L60 33.3333C120 26.6667 240 13.3333 360 13.3333C480 13.3333 600 26.6667 720 40C840 53.3333 960 66.6667 1080 66.6667C1200 66.6667 1320 53.3333 1380 46.6667L1440 40V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V40Z" fill="currentColor"/>
                  </svg>
                </div>
              )}
              
              <div className="container mx-auto px-6 relative">
                <motion.div 
                  className="text-center max-w-4xl mx-auto mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="inline-block bg-brand-burgundy/10 text-brand-burgundy text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-brand-burgundy/20">
                    {promotion.year}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-6">
                    {promotion.year === 'Promotion 2025' ? 'Nos Futurs Talents' : 'Nos Diplômés'}
                  </h2>
                  <p className="text-lg text-gray-700">{promotion.description}</p>
                </motion.div>
                
                {promotion.students.length > 0 ? (
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {promotion.students.map((student, idx) => (
                      <motion.div 
                        key={student.id}
                        variants={fadeInUp}
                        className="group rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                      >
                        <div className="relative overflow-hidden h-80">
                          <img 
                            src={student.imageUrl} 
                            alt={student.alt} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                            <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                              <p className="text-sm font-medium text-brand-gold mb-1">{student.role}</p>
                              <p className="text-white font-medium mb-4">{student.company}</p>
                              <div className="flex space-x-3">
                                <button 
                                  className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full text-white hover:bg-brand-gold hover:text-white transition-colors"
                                  aria-label="LinkedIn"
                                >
                                  <FaLinkedin className="w-4 h-4" />
                                </button>
                                <button 
                                  className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full text-white hover:bg-brand-gold hover:text-white transition-colors"
                                  aria-label="Instagram"
                                >
                                  <FaInstagram className="w-4 h-4" />
                                </button>
                                <button 
                                  className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full text-white hover:bg-brand-gold hover:text-white transition-colors"
                                  aria-label="Twitter"
                                >
                                  <FaTwitter className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">{student.name}</h3>
                          {student.testimonial && (
                            <div className="mt-4 pt-4 border-t border-gray-100">
                              <div className="relative">
                                <FaQuoteLeft className="text-brand-gold/30 text-4xl absolute -top-1 left-0 -ml-1" />
                                <p className="text-gray-600 italic pl-8 relative">
                                  {student.testimonial}
                                </p>
                              </div>
                              <button 
                                onClick={() => openStudentModal(student)}
                                className="mt-4 text-sm font-medium text-brand-burgundy hover:text-brand-gold flex items-center transition-colors"
                              >
                                Voir le portfolio
                                <FaArrowRight className="ml-2 text-xs" />
                              </button>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <div className="text-center py-16 bg-white/50 rounded-2xl">
                    <div className="text-6xl mb-4">😕</div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun résultat trouvé</h3>
                    <p className="text-gray-500 mb-6">Aucun élève ne correspond à votre recherche.</p>
                    <button 
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedPromotion(null);
                      }}
                      className="px-6 py-2 bg-brand-burgundy text-white rounded-full hover:bg-brand-burgundy/90 transition-colors"
                    >
                      Réinitialiser les filtres
                    </button>
                  </div>
                )}
              </div>
              
              {/* Bouton de retour en haut */}
              {index > 0 && (
                <div className="text-center mt-16">
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center text-brand-burgundy hover:text-brand-gold transition-colors"
                  >
                    <FaArrowLeft className="mr-2" />
                    Retour en haut
                  </button>
                </div>
              )}
            </motion.section>
          ))}
        </AnimatePresence>
            </div>
          </section>
        ))}
      </main>

      {/* Témoignages */}
      <section className="py-20 bg-brand-burgundy text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">Ils témoignent</h2>
            <p className="text-xl text-gray-200">Découvrez ce que nos anciens élèves disent de leur expérience</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotion2024.students.slice(0, 3).map((student, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-colors">
                <FaQuoteLeft className="text-brand-gold text-3xl mb-6" />
                <p className="text-lg italic mb-6">"{student.testimonial}"</p>
                <div className="flex items-center">
                  <img 
                    src={student.imageUrl} 
                    alt={student.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold">{student.name}</h4>
                    <p className="text-sm text-gray-300">{student.role}, {student.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-xl">
            <h2 className="text-4xl font-serif font-bold text-brand-dark mb-6">Rejoignez Notre Réseau d'Anciens</h2>
            <p className="text-xl text-gray-700 mb-8">
              Restez connecté avec votre école et vos anciens camarades. Bénéficiez d'un réseau professionnel fort et d'opportunités exclusives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-brand-gold hover:bg-yellow-600 text-brand-dark font-bold py-3 px-8 rounded-full transition-colors">
                S'inscrire au réseau
              </button>
              <button className="bg-transparent border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy/10 font-bold py-3 px-8 rounded-full transition-colors">
                Contacter un diplômé
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

      {/* Modale de l'étudiant */}
      <AnimatePresence>
        {selectedStudent && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              {/* En-tête de la modale */}
              <div className="sticky top-0 bg-white z-10 p-6 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900">{selectedStudent.name}</h3>
                  <p className="text-brand-gold font-medium">{selectedStudent.role}</p>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Fermer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Contenu de la modale */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="relative rounded-xl overflow-hidden shadow-lg mb-6">
                      <img 
                        src={selectedStudent.imageUrl} 
                        alt={selectedStudent.alt} 
                        className="w-full h-64 md:h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    
                    <div className="bg-brand-light/50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Informations</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-brand-gold mr-2">•</span>
                          <span className="text-gray-700">
                            <span className="font-medium">Poste:</span> {selectedStudent.role || 'Non spécifié'}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-brand-gold mr-2">•</span>
                          <span className="text-gray-700">
                            <span className="font-medium">Entreprise:</span> {selectedStudent.company || 'Non spécifié'}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-brand-gold mr-2">•</span>
                          <span className="text-gray-700">
                            <span className="font-medium">Promotion:</span> {selectedPromotion || 'Non spécifiée'}
                          </span>
                        </li>
                      </ul>
                      
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h5 className="font-medium text-gray-900 mb-3">Réseaux sociaux</h5>
                        <div className="flex space-x-3">
                          <a 
                            href="#" 
                            className="w-10 h-10 flex items-center justify-center bg-brand-burgundy/10 text-brand-burgundy rounded-full hover:bg-brand-burgundy hover:text-white transition-colors"
                            aria-label="LinkedIn"
                          >
                            <FaLinkedin className="w-4 h-4" />
                          </a>
                          <a 
                            href="#" 
                            className="w-10 h-10 flex items-center justify-center bg-brand-burgundy/10 text-brand-burgundy rounded-full hover:bg-brand-burgundy hover:text-white transition-colors"
                            aria-label="Instagram"
                          >
                            <FaInstagram className="w-4 h-4" />
                          </a>
                          <a 
                            href="#" 
                            className="w-10 h-10 flex items-center justify-center bg-brand-burgundy/10 text-brand-burgundy rounded-full hover:bg-brand-burgundy hover:text-white transition-colors"
                            aria-label="Portfolio"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-serif font-semibold text-gray-900 mb-4">À propos</h4>
                    <div className="prose max-w-none text-gray-700 mb-8">
                      <p className="mb-4">
                        {selectedStudent.testimonial || 'Aucune description disponible pour le moment.'}
                      </p>
                      <p className="mb-4">
                        Diplômé(e) de l'École de Mode de Nzeng Ayong, {selectedStudent.name.split(' ')[0]} a su développer une expertise reconnue dans le domaine de la mode à travers des projets innovants et une approche créative unique.
                      </p>
                      <p>
                        Son travail se caractérise par une attention particulière aux détails, une passion pour les matières et les couleurs, ainsi qu'une vision contemporaine de la mode africaine.
                      </p>
                    </div>
                    
                    <div className="bg-brand-light/30 rounded-xl p-6 mb-8">
                      <h5 className="font-semibold text-gray-900 mb-4">Réalisations</h5>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((item) => (
                          <div 
                            key={item}
                            className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer relative group"
                            onClick={() => setCurrentImageIndex(item - 1)}
                          >
                            <img 
                              src={selectedStudent.imageUrl} 
                              alt={`Travail de ${selectedStudent.name}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-sm font-medium rounded-full">Mode Africaine</span>
                      <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-sm font-medium rounded-full">Création de vêtements</span>
                      <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-sm font-medium rounded-full">Design Textile</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pied de page de la modale */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center">
                <button 
                  onClick={closeModal}
                  className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Fermer
                </button>
                <a 
                  href="#" 
                  className="px-6 py-2 bg-brand-gold text-white rounded-full hover:bg-yellow-500 transition-colors flex items-center"
                >
                  Contacter {selectedStudent.name.split(' ')[0]}
                  <FaArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Pied de page */}
      <footer className="bg-brand-dark text-white pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">École de Mode</h3>
              <p className="text-gray-400 mb-6">
                Formons ensemble la nouvelle génération de créateurs de mode africains, porteurs d'innovation et d'excellence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Liens rapides</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Formations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Événements</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Ressources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog Mode</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Galerie</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Témoignages</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partenariats</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Presse</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contactez-nous</h4>
              <address className="not-italic text-gray-400 space-y-3">
                <p>1234 Avenue de la Mode<br />Libreville, Gabon</p>
                <p>Email: contact@ecolemode-ga.com</p>
                <p>Tél: +241 XX XX XX XX</p>
              </address>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} École de Mode de Nzeng Ayong. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlumniPage;

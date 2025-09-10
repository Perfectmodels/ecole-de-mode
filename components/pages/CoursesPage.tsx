import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../../types';

const courses: Course[] = [
  { 
    id: 1, 
    title: 'Stylisme & Modélisme', 
    description: 'Développez votre identité créative, de la recherche d\'inspiration à la création d\'une collection complète.', 
    duration: '3 ans', 
    admission: 'Niveau classe de 3ème', 
    imageUrl: 'https://images.unsplash.com/photo-1445205170230-0410b452fa52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Création de collections complètes',
      'Techniques de dessin et d\'illustration',
      'Travail des matières et des volumes',
      'Défilé de fin d\'année'
    ]
  },
  { 
    id: 2, 
    title: 'Couture Qualifiée', 
    description: 'Apprenez les techniques de coupe à plat et de moulage pour transformer un dessin en vêtement.', 
    duration: '2 ans', 
    admission: 'Niveau classe de 4ème', 
    imageUrl: 'https://images.unsplash.com/photo-1579389083135-1a2fb307f4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Techniques de coupe et d\'assemblage',
      'Moulage sur mannequin',
      'Travail des finitions',
      'Utilisation des machines professionnelles'
    ]
  },
  { 
    id: 3, 
    title: 'Formation Initiale en Couture', 
    description: 'Maîtrisez les bases de la couture et les finitions pour une qualité irréprochable.', 
    duration: '1 an', 
    admission: 'Ouvert à tous niveaux', 
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Bases de la couture à la main',
      'Utilisation de la machine à coudre',
      'Techniques de base de patronage',
      'Confection de vêtements simples'
    ]
  },
  { 
    id: 4, 
    title: 'Confection Industrielle', 
    description: 'Spécialisez-vous dans les processus de production en série pour l\'industrie de la mode.', 
    duration: '2 ans', 
    admission: 'Niveau classe de 4ème', 
    imageUrl: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Gestion de la chaîne de production',
      'Contrôle qualité',
      'Optimisation des processus',
      'Utilisation de machines industrielles'
    ]
  },
  { 
    id: 5, 
    title: 'Mannequinat & Maintien', 
    description: 'Développez votre présence sur scène en partenariat avec des agences reconnues comme Perfect Models Management.', 
    duration: '6 mois', 
    admission: 'Sur sélection', 
    imageUrl: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Posture et défilé',
      'Expression corporelle',
      'Prise de vue photo',
      'Développement du book'
    ]
  },
  { 
    id: 6, 
    title: 'Chef d\'Atelier', 
    description: 'Devenez le pilier d\'un atelier de production en apprenant la gestion, la planification et le contrôle qualité.', 
    duration: '3 ans', 
    admission: 'Expérience requise', 
    imageUrl: 'https://images.unsplash.com/photo-1581655353404-6aa031f6e6b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Gestion d\'équipe',
      'Planification de production',
      'Contrôle qualité avancé',
      'Gestion des coûts et délais'
    ]
  },
];

const CourseCard: React.FC<{ course: Course & { highlights?: string[] } }> = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={course.imageUrl} 
          alt={course.title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} 
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <h3 className="text-2xl font-serif text-white font-bold mb-2">{course.title}</h3>
          <p className="text-brand-gold font-medium">{course.duration}</p>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-700 mb-6">{course.description}</p>
        
        <div className="mb-6">
          <h4 className="font-bold text-brand-burgundy mb-3">Points forts :</h4>
          <ul className="space-y-2">
            {course.highlights?.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-brand-gold mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4"><span className="font-semibold">Admission :</span> {course.admission}</p>
          <Link 
            to="/contact" 
            className="block w-full bg-brand-burgundy hover:bg-brand-dark text-white text-center font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Demande d'information
          </Link>
        </div>
      </div>
    </div>
  );
};

const CoursesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tous');

  const filteredCourses = activeTab === 'tous' 
    ? courses 
    : courses.filter(course => 
        (activeTab === 'longue' && course.duration.includes('an')) ||
        (activeTab === 'courte' && !course.duration.includes('an'))
      );

  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <header className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Atelier de couture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-burgundy/70 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">Nos Formations</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Des programmes d'excellence pour façonner votre avenir dans la mode
          </p>
        </div>
      </header>

      {/* Filtres */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 py-6">
            <button 
              onClick={() => setActiveTab('tous')}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeTab === 'tous' 
                  ? 'bg-brand-burgundy text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Toutes les formations
            </button>
            <button 
              onClick={() => setActiveTab('longue')}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeTab === 'longue' 
                  ? 'bg-brand-burgundy text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Formations longues
            </button>
            <button 
              onClick={() => setActiveTab('courte')}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeTab === 'courte' 
                  ? 'bg-brand-burgundy text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Formations courtes
            </button>
          </div>
        </div>
      </div>

      {/* Liste des formations */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-burgundy text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Prêt à démarrer votre formation ?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Rejoignez notre école et bénéficiez d'un accompagnement personnalisé pour réussir dans le monde de la mode.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/admissions" 
                className="bg-brand-gold hover:bg-yellow-500 text-brand-dark font-bold py-4 px-8 text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 rounded"
              >
                S'inscrire maintenant
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 text-lg uppercase tracking-wider transition-all duration-300 rounded"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-brand-gold font-bold tracking-wider mb-4 block">TÉMOIGNAGES</span>
            <h2 className="text-4xl font-serif text-brand-burgundy mb-6">Ce que disent nos étudiants</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: 'Aïcha M.',
                role: 'Ancienne étudiante en Stylisme',
                content: 'L\'école m\'a offert une formation complète qui m\'a permis de lancer ma propre marque de vêtements éthiques.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
              },
              {
                id: 2,
                name: 'Marc K.',
                role: 'Diplômé en Modélisme',
                content: 'Les formateurs sont à l\'écoute et les ateliers sont parfaitement équipés. Une expérience enrichissante !',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
              },
              {
                id: 3,
                name: 'Sophie T.',
                role: 'Étudiante en Couture',
                content: 'Je recommande vivement cette école pour son professionnalisme et son ambiance conviviale.',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
              }
            ].map(testimonial => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-brand-gold text-5xl mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-brand-burgundy">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
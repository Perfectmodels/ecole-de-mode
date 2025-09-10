
import React, { useState } from 'react';
import { FaCheck, FaCalendarAlt, FaFileAlt, FaUserTie, FaGraduationCap, FaChevronDown, FaChevronUp, FaQuoteLeft } from 'react-icons/fa';

const AdmissionsPage: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        course: '',
        portfolio: null as File | null,
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, portfolio: e.target.files![0] }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        setIsSubmitted(true);
    };

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const admissionProcess = [
        { 
            step: 1, 
            title: 'Dépôt de candidature', 
            description: 'Remplissez le formulaire en ligne et téléchargez les documents requis.',
            icon: <FaFileAlt className="w-6 h-6 text-brand-gold" />
        },
        { 
            step: 2, 
            title: 'Examen du dossier', 
            description: 'Notre équipe pédagogique examine attentivement chaque candidature.',
            icon: <FaUserTie className="w-6 h-6 text-brand-gold" />
        },
        { 
            step: 3, 
            title: 'Entretien', 
            description: 'Les candidats présélectionnés sont convoqués pour un entretien.',
            icon: <FaGraduationCap className="w-6 h-6 text-brand-gold" />
        },
        { 
            step: 4, 
            title: 'Décision', 
            description: 'Réponse sous 15 jours après l\'entretien.',
            icon: <FaCheck className="w-6 h-6 text-brand-gold" />
        }
    ];

    const requirements = [
        'Être titulaire au minimum d\'un baccalauréat',
        'Lettre de motivation détaillée',
        'CV à jour',
        'Portfolio (pour certaines formations)',
        'Entretien de motivation'
    ];

    const importantDates = [
        { date: '15 septembre 2024', event: 'Ouverture des inscriptions' },
        { date: '15 janvier 2025', event: 'Date limite de dépôt des dossiers' },
        { date: 'Février 2025', event: 'Entretiens des candidats présélectionnés' },
        { date: 'Mars 2025', event: 'Annonce des résultats' },
        { date: 'Septembre 2025', event: 'Rentrée scolaire' }
    ];

    const faqs = [
        {
            question: 'Quels sont les prérequis pour postuler ?',
            answer: 'Les candidats doivent être titulaires au minimum d\'un baccalauréat et démontrer un intérêt marqué pour la mode et la création.'
        },
        {
            question: 'Puis-je postuler à plusieurs formations ?',
            answer: 'Oui, vous pouvez postuler à plusieurs formations, mais vous devrez remplir un dossier de candidature pour chacune d\'entre elles.'
        },
        {
            question: 'Quand vais-je recevoir une réponse ?',
            answer: 'Les candidats reçoivent une réponse sous 15 jours après leur entretien.'
        },
        {
            question: 'Y a-t-il des bourses disponibles ?',
            answer: 'Oui, des bourses sont disponibles sur critères sociaux et d\'excellence. Contactez-nous pour plus d\'informations.'
        }
    ];

    const testimonials = [
        {
            name: 'Aïssatou D.',
            role: 'Étudiante en 2ème année',
            quote: 'Le processus d\'admission était clair et l\'équipe très à l\'écoute. Aujourd\'hui, je m\'épanouis pleinement dans ma formation.'
        },
        {
            name: 'Thomas K.',
            role: 'Diplômé 2023',
            quote: 'L\'accompagnement personnalisé dès l\'admission m\'a permis de trouver ma voie dans le design de mode masculin.'
        }
    ];

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-brand-light to-white">
                <div className="text-center max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaCheck className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-4xl font-serif text-brand-burgundy mb-4">Candidature envoyée !</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Nous avons bien reçu votre dossier de candidature. Notre équipe l'examinera avec attention et vous contactera dans les plus brefs délais.
                    </p>
                    <button 
                        onClick={() => setIsSubmitted(false)} 
                        className="bg-brand-gold hover:bg-yellow-600 text-brand-dark font-bold py-3 px-8 rounded-full transition-colors duration-300"
                    >
                        Retour aux admissions
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <header className="relative bg-brand-dark text-white py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521747116042-5a810fda9664')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-burgundy/90 to-brand-dark/90"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Admissions 2025</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                        Rejoignez la prochaine génération de créateurs de mode et façonnez l'avenir de la mode africaine.
                    </p>
                    <a 
                        href="#formulaire" 
                        className="inline-block bg-brand-gold hover:bg-yellow-600 text-brand-dark font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
                    >
                        Postuler maintenant
                    </a>
                </div>
            </header>

            {/* Processus d'admission */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-serif text-brand-dark mb-6">Notre Processus d'Admission</h2>
                        <p className="text-lg text-gray-700">
                            Notre processus de sélection rigoureux garantit que chaque étudiant partage notre passion pour l'excellence et l'innovation dans la mode.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {admissionProcess.map((step) => (
                            <div key={step.step} className="bg-brand-light p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-serif font-semibold mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                                <div className="mt-4 text-sm font-medium text-brand-burgundy">Étape {step.step}/4</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Conditions d'admission */}
            <section className="py-20 bg-brand-light">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-serif text-brand-dark mb-8">Conditions d'Admission</h2>
                            <ul className="space-y-4">
                                {requirements.map((requirement, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaCheck className="text-brand-gold mt-1 mr-3 flex-shrink-0" />
                                        <span>{requirement}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-brand-gold">
                                <h3 className="font-serif text-xl text-brand-burgundy mb-2">Frais de scolarité</h3>
                                <p className="text-gray-700">
                                    Les frais de scolarité varient selon la formation. Contactez-nous pour plus d'informations sur les modalités de paiement et les possibilités de financement.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-serif text-brand-dark mb-6">Calendrier des admissions</h3>
                            <div className="space-y-4">
                                {importantDates.map((item, index) => (
                                    <div key={index} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                                        <div className="bg-brand-burgundy text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                                            <FaCalendarAlt />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-brand-dark">{item.event}</h4>
                                            <p className="text-brand-burgundy font-medium">{item.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Témoignages */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-serif text-brand-dark mb-6">Ils nous ont rejoints</h2>
                        <p className="text-lg text-gray-700">
                            Découvrez ce que nos étudiants actuels et anciens élèves disent de leur expérience à l'École de Mode de Nzeng Ayong.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-brand-light p-8 rounded-xl">
                                <FaQuoteLeft className="text-brand-gold text-3xl mb-6 opacity-20" />
                                <p className="text-lg italic text-gray-700 mb-6">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-brand-burgundy flex items-center justify-center text-white font-bold text-xl mr-4">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-brand-dark">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-brand-light">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-serif text-brand-dark mb-6">Questions Fréquentes</h2>
                        <p className="text-lg text-gray-700">
                            Vous avez des questions sur les admissions ? Consultez notre FAQ ou contactez-nous directement.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex justify-between items-center text-left py-4 font-medium text-brand-dark hover:text-brand-burgundy focus:outline-none"
                                >
                                    <span className="text-lg">{faq.question}</span>
                                    {activeFaq === index ? (
                                        <FaChevronUp className="text-brand-gold" />
                                    ) : (
                                        <FaChevronDown className="text-brand-gold" />
                                    )}
                                </button>
                                {activeFaq === index && (
                                    <div className="mt-2 text-gray-600 pb-4">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formulaire de candidature */}
            <section id="formulaire" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2 bg-brand-burgundy text-white p-12">
                                <h2 className="text-3xl font-serif font-bold mb-6">Prêt à nous rejoindre ?</h2>
                                <p className="mb-8 text-brand-light">
                                    Complétez le formulaire de candidature en ligne pour démarrer votre parcours dans la mode.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-brand-gold/20 rounded-full p-3 mr-4">
                                            <FaFileAlt className="text-brand-gold" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Documents requis</h4>
                                            <p className="text-sm text-brand-light">CV, lettre de motivation, portfolio (si applicable)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-brand-gold/20 rounded-full p-3 mr-4">
                                            <FaCalendarAlt className="text-brand-gold" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Date limite</h4>
                                            <p className="text-sm text-brand-light">15 janvier 2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 p-8 md:p-12">
                                <h3 className="text-2xl font-serif text-brand-dark mb-8">Formulaire de candidature</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                                            <input 
                                                type="text" 
                                                name="firstName" 
                                                required 
                                                onChange={handleChange} 
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                                            <input 
                                                type="text" 
                                                name="lastName" 
                                                required 
                                                onChange={handleChange} 
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            required 
                                            onChange={handleChange} 
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                                        <input 
                                            type="tel" 
                                            name="phone" 
                                            required 
                                            onChange={handleChange} 
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Formation souhaitée</label>
                                        <select 
                                            name="course" 
                                            required 
                                            onChange={handleChange} 
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold bg-white"
                                        >
                                            <option value="">Sélectionnez une formation</option>
                                            <option value="stylisme">Stylisme & Design de Mode</option>
                                            <option value="modelisme">Modélisme & Patronage</option>
                                            <option value="couture">Couture & Finitions</option>
                                            <option value="accessoires">Design d'Accessoires</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Dossier de candidature (PDF, max 5MB)
                                        </label>
                                        <div className="mt-1 flex items-center">
                                            <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-brand-dark rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-50">
                                                <FaFileAlt className="w-8 h-8 text-brand-gold mb-2" />
                                                <span className="text-sm text-gray-600">
                                                    {formData.portfolio ? formData.portfolio.name : 'Glissez-déposez votre fichier ou cliquez pour sélectionner'}
                                                </span>
                                                <input 
                                                    type="file" 
                                                    name="portfolio" 
                                                    onChange={handleFileChange} 
                                                    accept=".pdf" 
                                                    className="hidden"
                                                    required
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Pourquoi souhaitez-vous intégrer notre école ? (optionnel)
                                        </label>
                                        <textarea 
                                            name="message" 
                                            rows={4} 
                                            onChange={handleChange} 
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
                                            placeholder="Décrivez votre parcours, vos motivations et vos aspirations..."
                                        ></textarea>
                                    </div>
                                    
                                    <div className="pt-4">
                                        <button 
                                            type="submit" 
                                            className="w-full bg-brand-dark hover:bg-brand-burgundy text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 flex items-center justify-center"
                                        >
                                            <span>Envoyer ma candidature</span>
                                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                    
                                    <p className="text-xs text-gray-500 text-center">
                                        En soumettant ce formulaire, vous acceptez notre politique de confidentialité et nos conditions d'utilisation.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdmissionsPage;

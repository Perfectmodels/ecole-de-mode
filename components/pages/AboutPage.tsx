
import React from 'react';
import type { TeamMember } from '../../types';

const teamMembers: TeamMember[] = [
    // FIX: Changed id from number to string to match TeamMember type
    { id: '1', name: 'Abbé Noël-Aimé Ngwa Nguéma', role: 'Fondateur Visionnaire', imageUrl: 'https://www.libreville-accueil-bal.org/medias/images/20200210-093656.jpeg?fx=r_1200_800' },
    // FIX: Changed id from number to string to match TeamMember type
    { id: '2', name: 'Mme Bernadette MPAGA TCHANDI', role: 'Directrice', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
    // FIX: Changed id from number to string to match TeamMember type
    { id: '3', name: 'M. ELLA MVE Thierry Clay', role: 'Gestionnaire', imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=400&auto=format&fit=crop' },
    // FIX: Changed id from number to string to match TeamMember type
    { id: '4', name: 'Mme KOUOTOU Henriette', role: 'Enseignante Principale', imageUrl: 'https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=400&auto=format&fit=crop' },
    // FIX: Changed id from number to string to match TeamMember type
    { id: '5', name: 'M. MANDA', role: 'Enseignant', imageUrl: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=400&auto=format&fit=crop' },
];

const AboutPage: React.FC = () => {
    return (
        <div className="bg-brand-light">
            <header className="bg-brand-dark text-white py-20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-serif font-bold">Notre Histoire</h1>
                    <p className="text-lg mt-4">Au cœur de la mode gabonaise depuis 1996.</p>
                </div>
            </header>

            <section className="py-20">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-serif text-brand-burgundy mb-6">Notre Mission, Nos Valeurs</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Fondée en 1996 par l'abbé Noël-Aimé Ngwa Nguéma, l'Ecole de Mode de Nzeng Ayong a avant tout une vocation sociale : aider les personnes démunies à se former aux métiers de la couture et à accéder à un emploi durable.
                        </p>
                        <p className="text-lg text-gray-700">
                            Nous célébrons l'héritage culturel gabonais tout en prônant l'excellence, la créativité et l'innovation. Chaque étudiant est encouragé à développer son propre style pour devenir un acteur de la mode de demain.
                        </p>
                    </div>
                    <div>
                        <img src="https://www.libreville-accueil-bal.org/medias/images/20200210-093656.jpeg?fx=r_1200_800" alt="Atelier de couture" className="rounded-lg shadow-2xl w-full h-auto object-cover"/>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-stone-200">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif text-center text-brand-burgundy mb-12">L'Équipe Pédagogique</h2>
                    <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
                        {teamMembers.map(member => (
                            <div key={member.id} className="text-center group w-48">
                                <img src={member.imageUrl} alt={member.name} className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300"/>
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-brand-burgundy">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
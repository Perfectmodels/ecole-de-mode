import React from 'react';
import type { Event } from '../../types';

const upcomingEvents: Event[] = [
    // FIX: Changed id from number to string to match Event type
    { id: '1', title: 'Défilé de Fin de Cycle - Promotion Axel IBABA', date: '20 Juin 2025', description: 'Les étudiants de la promotion Axel IBABA présentent leurs collections de fin de cycle. Un événement exceptionnel à la paroisse Cœur Immaculé de Nzeng.', imageUrl: 'https://picsum.photos/600/400?image=1060' },
    // FIX: Changed id from number to string to match Event type
    { id: '2', title: 'Portes Ouvertes de l\'École', date: '5 Septembre 2024', description: 'Visitez nos ateliers, rencontrez nos professeurs et découvrez les travaux de nos étudiants. Inscriptions sur place possibles.', imageUrl: 'https://www.libreville-accueil-bal.org/medias/images/20200210-093656.jpeg?fx=r_1200_800' },
];

const pastEvents: Event[] = [
    // FIX: Changed id from number to string to match Event type
    { id: '3', title: 'Défilé de Fin d\'Année 2024', date: '21 Juin 2024', description: 'Présentation des créations des apprenants lors du grand défilé annuel de l\'école, un moment fort célébrant la fin de l\'année académique.', imageUrl: 'https://picsum.photos/600/400?image=823' },
    // FIX: Changed id from number to string to match Event type
    { id: '4', title: 'Conférence : La Mode Gabonaise à l\'International', date: '20 Mars 2024', description: 'Avec la participation de designers renommés pour discuter des opportunités et défis du marché mondial.', imageUrl: 'https://picsum.photos/600/400?image=124' },
    // FIX: Changed id from number to string to match Event type
    { id: '5', title: 'Solidarité COVID-19', date: 'Avril 2020', description: 'En partenariat avec la Fondation Sylvia Bongo Ondimba (FSBO), nos ateliers ont produit 5 000 masques certifiés pour soutenir l\'effort national.', imageUrl: 'https://scontent.flbv4-1.fna.fbcdn.net/v/t1.6435-9/102776080_1541929012680926_2589055351735189504_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFBL-UyGsU023e3zLhVjIZdrzbWF3T1DvSvNtYXdPUO9KNU29k5lEzD6PHqbKX9MHyZod-1Ka-1rEBJzxzieWyD&_nc_ohc=chRZLD9pKcgQ7kNvwHC_inC&_nc_oc=AdmhwXjFVy0VW3-2njk2b5d7ECc9W2VlXNd06giBSvWEF7NS7WNQP-CqEM3qwXqyR7M&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=wUz2TJp6pN5FqyYwyiAt6g&oh=00_AfUp-tsx4Qd6leU0zwRbX_mGoPK6iN6RdXVcEyVcZ7-EJA&oe=68DD13B2' },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row mb-8">
        <img src={event.imageUrl} alt={event.title} className="w-full md:w-1/3 h-64 md:h-auto object-cover" />
        <div className="p-6 flex flex-col justify-center">
            <p className="text-brand-burgundy font-bold mb-2">{event.date}</p>
            <h3 className="text-2xl font-serif mb-3">{event.title}</h3>
            <p className="text-gray-700">{event.description}</p>
        </div>
    </div>
);

const EventsPage: React.FC = () => {
    return (
        <div>
            <header className="bg-brand-dark text-white py-20 text-center">
                <h1 className="text-5xl font-serif font-bold">Événements</h1>
                <p className="text-lg mt-4">Le calendrier de la créativité.</p>
            </header>

            <section className="py-20 bg-stone-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif text-brand-burgundy mb-12">À Venir</h2>
                    {upcomingEvents.map(event => <EventCard key={event.id} event={event} />)}
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif text-gray-600 mb-12">Événements Passés</h2>
                    {pastEvents.map(event => <EventCard key={event.id} event={event} />)}
                </div>
            </section>
        </div>
    );
};

export default EventsPage;
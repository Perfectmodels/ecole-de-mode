

import React, { useState, useMemo } from 'react';
import type { GalleryImage, Event } from '../../types';

const allImages: GalleryImage[] = [
  // FIX: Changed id from number to string to match GalleryImage type
  { id: '1', imageUrl: 'https://scontent.flbv4-1.fna.fbcdn.net/v/t1.6435-9/101553186_1541928992680928_6054030422625484800_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF7fX_vU6rjck0uctxsCCowWi1iq7bV2jRaLWKrttXaNHNDzdV1ig16KoJ51SOeNzw8jsiYDXGoLpjOjbtCJfMG&_nc_ohc=Y4VWa20PhiwQ7kNvwFgzk1S&_nc_oc=AdmSLDPFsStKxt_4yhIpcJl-zDuSMfOFVzA9zwDw2PXKznKJgiLw2yNSb8sI81ph1pM&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=1kpz8OFf30E2bZwRs28q9A&oh=00_AfU-KeQQL2n9_o3s16uMX_By2HwnnLRDXp6d2W2q743WXw&oe=68DD0E9E', title: 'Ajustement sur mannequin', category: 'atelier' },
  // FIX: Changed id from number to string to match GalleryImage type
  { id: '2', imageUrl: 'https://www.libreville-accueil-bal.org/medias/images/20200210-93101.jpeg?fx=r_1200_800', title: 'Postes de couture alignés', category: 'atelier' },
  // FIX: Changed id from number to string to match GalleryImage type
  { id: '3', imageUrl: 'https://www.libreville-accueil-bal.org/medias/images/20200210-093656.jpeg?fx=r_1200_800', title: 'Vue d\'ensemble de l\'atelier', category: 'atelier' },
  // FIX: Changed id from number to string to match GalleryImage type
  { id: '4', imageUrl: 'https://scontent.flbv4-1.fna.fbcdn.net/v/t1.6435-9/102776080_1541929012680926_2589055351735189504_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFBL-UyGsU023e3zLhVjIZdrzbWF3T1DvSvNtYXdPUO9KNU29k5lEzD6PHqbKX9MHyZod-1Ka-1rEBJzxzieWyD&_nc_ohc=chRZLD9pKcgQ7kNvwHC_inC&_nc_oc=AdmhwXjFVy0VW3-2njk2b5d7ECc9W2VlXNd06giBSvWEF7NS7WNQP-CqEM3qwXqyR7M&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=wUz2TJp6pN5FqyYwyiAt6g&oh=00_AfUp-tsx4Qd6leU0zwRbX_mGoPK6iN6RdXVcEyVcZ7-EJA&oe=68DD13B2', title: 'Étudiante concentrée', category: 'création' },
  // FIX: Changed id from number to string to match GalleryImage type
  { id: '5', imageUrl: 'https://scontent.flbv4-1.fna.fbcdn.net/v/t1.6435-9/102416219_1541929059347588_5541633393919262720_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHVXvmH2JjFfrq83iTMKrKkaGqCsT_yBsNoaoKxP_IGw8HncxAh_ns66QcoF_Xx18lNawYD2dzBeo3rGRH5_BOE&_nc_ohc=HRz6Vj1psngQ7kNvwEhOH_v&_nc_oc=Adlxktfwi5RTuSDVWhrBrysQXzr5kbqHwHjZXvWT7kbpEdzl_7q3NFGiiQGyROyX_lA&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=NwCwH5BMUbLaTA4oiyytdw&oh=00_AfW-s9Fbvp3HoRr9O0xScbaWBFw9hxfVMZu74ogtB7OB5Q&oe=68DD215B', title: 'Travail à la machine', category: 'atelier' },
  // FIX: Changed id from number to string to match GalleryImage type
  { id: '6', imageUrl: 'https://picsum.photos/600/800?image=1060', title: 'Backstage Moment', category: 'défilé' },
  // FIX: Changed id from number to string to match GalleryImage type
  { id: '7', imageUrl: 'https://picsum.photos/600/800?image=659', title: 'Accessoires en Wax', category: 'création' },
];

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

type Category = 'tous' | 'défilé' | 'atelier' | 'création';
const categories: { key: Category; name: string }[] = [
    { key: 'tous', name: 'Tous' },
    { key: 'défilé', name: 'Défilés' },
    { key: 'atelier', name: 'Ateliers' },
    { key: 'création', name: 'Créations' },
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


const GalleryPage: React.FC = () => {
    const [filter, setFilter] = useState<Category>('tous');

    const filteredImages = useMemo(() => {
        if (filter === 'tous') return allImages;
        return allImages.filter(img => img.category === filter);
    }, [filter]);

    return (
        <div>
            <header className="bg-brand-burgundy text-white py-20 text-center">
                <h1 className="text-5xl font-serif font-bold">Galerie & Événements</h1>
                <p className="text-lg mt-4">L'univers créatif et les moments forts de nos étudiants.</p>
            </header>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif text-center text-brand-dark mb-12">Nos Créations</h2>
                    <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                        {categories.map(cat => (
                             <button 
                                key={cat.key}
                                onClick={() => setFilter(cat.key)}
                                className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${filter === cat.key ? 'bg-brand-dark text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                        {filteredImages.map(img => (
                            <div key={img.id} className="mb-4 break-inside-avoid relative group overflow-hidden">
                                <img src={img.imageUrl} alt={img.title} className="w-full h-auto rounded-lg shadow-md transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-end p-4">
                                    <h3 className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">{img.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-16 bg-stone-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif text-center text-brand-burgundy mb-12">Nos Vidéos</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="w-full aspect-video">
                            <iframe 
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/VHn-COwN7ng" 
                                title="Ecole de mode de nzeng ayong de Libreville .mp4" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen>
                            </iframe>
                        </div>
                         <div className="w-full aspect-video">
                             <iframe
                                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F972109616321542%2F&show_text=false&width=560"
                                className="w-full h-full"
                                style={{border:'none', overflow:'hidden'}}
                                scrolling="no" 
                                frameBorder="0" 
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>

             <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif text-center text-brand-burgundy mb-12">Événements à Venir</h2>
                    {upcomingEvents.map(event => <EventCard key={event.id} event={event} />)}
                </div>
            </section>

            <section className="py-20 bg-stone-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif text-center text-gray-600 mb-12">Événements Passés</h2>
                    {pastEvents.map(event => <EventCard key={event.id} event={event} />)}
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;
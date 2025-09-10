import React from 'react';
import type { Course } from '../../types';

const courses: Course[] = [
  { id: 1, title: 'Stylisme & Modélisme', description: 'Développez votre identité créative, de la recherche d\'inspiration à la création d\'une collection complète.', duration: '3 ans', admission: 'Niveau classe de 3ème', imageUrl: 'https://scontent.flbv4-1.fna.fbcdn.net/v/t1.6435-9/101553186_1541928992680928_6054030422625484800_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF7fX_vU6rjck0uctxsCCowWi1iq7bV2jRaLWKrttXaNHNDzdV1ig16KoJ51SOeNzw8jsiYDXGoLpjOjbtCJfMG&_nc_ohc=Y4VWa20PhiwQ7kNvwFgzk1S&_nc_oc=AdmSLDPFsStKxt_4yhIpcJl-zDuSMfOFVzA9zwDw2PXKznKJgiLw2yNSb8sI81ph1pM&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=1kpz8OFf30E2bZwRs28q9A&oh=00_AfU-KeQQL2n9_o3s16uMX_By2HwnnLRDXp6d2W2q743WXw&oe=68DD0E9E' },
  { id: 2, title: 'Couture Qualifiée', description: 'Apprenez les techniques de coupe à plat et de moulage pour transformer un dessin en vêtement.', duration: '2 ans', admission: 'Niveau classe de 4ème', imageUrl: 'https://scontent.flbv4-1.fna.fbcdn.net/v/t1.6435-9/102776080_1541929012680926_2589055351735189504_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFBL-UyGsU023e3zLhVjIZdrzbWF3T1DvSvNtYXdPUO9KNU29k5lEzD6PHqbKX9MHyZod-1Ka-1rEBJzxzieWyD&_nc_ohc=chRZLD9pKcgQ7kNvwHC_inC&_nc_oc=AdmhwXjFVy0VW3-2njk2b5d7ECc9W2VlXNd06giBSvWEF7NS7WNQP-CqEM3qwXqyR7M&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=wUz2TJp6pN5FqyYwyiAt6g&oh=00_AfUp-tsx4Qd6leU0zwRbX_mGoPK6iN6RdXVcEyVcZ7-EJA&oe=68DD13B2' },
  { id: 3, title: 'Formation Initiale en Couture', description: 'Maîtrisez les bases de la couture et les finitions pour une qualité irréprochable.', duration: '1 an', admission: 'Ouvert à tous niveaux', imageUrl: 'https://www.libreville-accueil-bal.org/medias/images/20200210-93101.jpeg?fx=r_1200_800' },
  { id: 4, title: 'Confection Industrielle', description: 'Spécialisez-vous dans les processus de production en série pour l\'industrie de la mode.', duration: '2 ans', admission: 'Niveau classe de 4ème', imageUrl: 'https://www.libreville-accueil-bal.org/medias/images/20200210-093656.jpeg?fx=r_1200_800' },
  { id: 5, title: 'Mannequinat & Maintien', description: 'Développez votre présence sur scène en partenariat avec des agences reconnues comme Perfect Models Management.', duration: 'Formation courte', admission: 'Sur sélection', imageUrl: 'https://picsum.photos/600/400?image=838' },
  { id: 6, title: 'Chef d\'Atelier', description: 'Devenez le pilier d\'un atelier de production en apprenant la gestion, la planification et le contrôle qualité.', duration: '3 ans', admission: 'Expérience requise', imageUrl: 'https://scontent.flbv4-1.fna.fbcdn.net/v/t1.6435-9/102416219_1541929059347588_5541633393919262720_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHVXvmH2JjFfrq83iTMKrKkaGqCsT_yBsNoaoKxP_IGw8HncxAh_ns66QcoF_Xx18lNawYD2dzBeo3rGRH5_BOE&_nc_ohc=HRz6Vj1psngQ7kNvwEhOH_v&_nc_oc=Adlxktfwi5RTuSDVWhrBrysQXzr5kbqHwHjZXvWT7kbpEdzl_7q3NFGiiQGyROyX_lA&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=NwCwH5BMUbLaTA4oiyytdw&oh=00_AfW-s9Fbvp3HoRr9O0xScbaWBFw9hxfVMZu74ogtB7OB5Q&oe=68DD215B' },
];

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
        <img src={course.imageUrl} alt={course.title} className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-serif text-brand-burgundy mb-3">{course.title}</h3>
            <p className="text-gray-700 flex-grow">{course.description}</p>
            <div className="mt-4 pt-4 border-t border-gray-200">
                <p><strong>Durée :</strong> {course.duration}</p>
                <p><strong>Admission :</strong> {course.admission}</p>
            </div>
            <button className="mt-6 bg-brand-dark text-white w-full py-3 font-bold uppercase tracking-wider hover:bg-brand-burgundy transition-colors duration-300">
                Demande d'info
            </button>
        </div>
    </div>
);


const CoursesPage: React.FC = () => {
  return (
    <div>
        <header className="bg-brand-dark text-white py-20 text-center" style={{backgroundImage: "url('https://scontent.flbv4-1.fna.fbcdn.net/v/t1.6435-9/102776080_1541929012680926_2589055351735189504_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFBL-UyGsU023e3zLhVjIZdrzbWF3T1DvSvNtYXdPUO9KNU29k5lEzD6PHqbKX9MHyZod-1Ka-1rEBJzxzieWyD&_nc_ohc=chRZLD9pKcgQ7kNvwHC_inC&_nc_oc=AdmhwXjFVy0VW3-2njk2b5d7ECc9W2VlXNd06giBSvWEF7NS7WNQP-CqEM3qwXqyR7M&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=wUz2TJp6pN5FqyYwyiAt6g&oh=00_AfUp-tsx4Qd6leU0zwRbX_mGoPK6iN6RdXVcEyVcZ7-EJA&oe=68DD13B2')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="bg-black bg-opacity-60 py-10">
                <h1 className="text-5xl font-serif font-bold">Nos Formations</h1>
                <p className="text-lg mt-4">Façonnez votre avenir dans la mode.</p>
            </div>
        </header>

        <section className="py-20 bg-stone-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map(course => <CourseCard key={course.id} course={course} />)}
                </div>
            </div>
        </section>
    </div>
  );
};

export default CoursesPage;
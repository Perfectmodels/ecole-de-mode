
import React from 'react';

interface Student {
  id: number;
  name: string;
  imageUrl: string;
  alt: string;
}

interface Promotion {
  year: string;
  description: string;
  students: Student[];
}

const promotion2025: Promotion = {
  year: 'Promotion 2025',
  description: "Actuellement en 3ème année, ces talents prometteurs préparent leurs collections de fin de cycle. Découvrez les visages qui marqueront la mode de demain.",
  students: [
    { id: 1, name: 'LLOYD JÉRÉMIE DIOP NDINGA', imageUrl: 'https://scontent.flbv4-1.fna.fbcdn.net/v/t39.30808-6/513115297_1037753695145373_7708002165157078228_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFef8vuhU3JNJ0V2FblCT1h7Ws1re4Fi7vtazWt7gWLuyQP55Y23eSct8NQiFisuAL_ddxS3k5BmmPMO_AMZcpH&_nc_ohc=nYVAEYIMd9QQ7kNvwGPTpQo&_nc_oc=Adl9D6SQHBvFRaeH2-bW3Wv4ynWMwF83VEz_DvoMJXY_Nt2XI16Ci-c_zKjiNgQobVs&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=2BhR_PzBDA7XK_Zs1VFN2Q&oh=00_AfW7rxOdyj1hE1CcWspCg9Xm19BhqFhnEYI98_cExFq7lg&oe=68BB88DC', alt: 'Création de LLOYD JÉRÉMIE DIOP NDINGA' },
    { id: 2, name: 'LEMBE STINGA Cyrielle', imageUrl: 'https://images.unsplash.com/photo-1581338834647-b0fb40702de3?q=80&w=800&auto=format&fit=crop', alt: 'Création de LEMBE STINGA Cyrielle' },
    { id: 3, name: 'NYAMBHAT MENDOME XENIA RIOPELLLE', imageUrl: 'https://images.unsplash.com/photo-1551803091-e2ab652293df?q=80&w=800&auto=format&fit=crop', alt: 'Création de NYAMBHAT MENDOME XENIA RIOPELLLE' }
  ]
};

const promotion2024: Promotion = {
  year: 'Promotion 2024',
  description: "Félicitations à nos diplômés de 2024 ! Ils ont brillamment présenté leurs collections lors du défilé de fin d'année, marquant le début de leur carrière professionnelle.",
  students: [
    { id: 1, name: 'NGOLA RIABA Juniorra', imageUrl: 'https://scontent.flbv4-1.fna.fbcdn.net/v/t39.30808-6/480443297_122216965214199892_7077548424574888409_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEA8M1NHDgHzcH4pG8H_cDGbRNkcEHhhG1tE2RwQeGEbTmXDr9Bn2H_A-bNghSLAw3frMqfqf7M2jo1FNT2s91S&_nc_ohc=O-B_n4DEX70Q7kNvwGlRcBW&_nc_oc=AdkAi-VlCzFDIcBvD7WowexC_EoWmp0D-6wgiOdI_PJ18Vl5Esk7uixn8B1BCFC92iI&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=TyNmGLzGzUEtAoWF9FjUMw&oh=00_AfU6BarsTeeBpoq-QHH-nVINi6gVFpbQvXX00KNe1VDDpg&oe=68BB8974', alt: 'Création de NGOLA RIABA Juniorra' },
    { id: 2, name: 'RAIVAUD PAULE MAROUSSIA', imageUrl: 'https://images.unsplash.com/photo-1617056421427-951fae563032?q=80&w=800&auto=format&fit=crop', alt: 'Création de RAIVAUD PAULE MAROUSSIA' },
    { id: 3, name: 'BOUANGA OBIANG GISÈLE CORRIANE', imageUrl: 'https://images.unsplash.com/photo-1558556403-16a78226a066?q=80&w=800&auto=format&fit=crop', alt: 'Création de BOUANGA OBIANG GISÈLE CORRIANE' },
    { id: 4, name: 'SEDIEU NGONGANG CÉLESTE', imageUrl: 'https://images.unsplash.com/photo-1534653299134-46a13c36b8e8?q=80&w=800&auto=format&fit=crop', alt: 'Création de SEDIEU NGONGANG CÉLESTE' },
    { id: 5, name: 'BOUANGA KOUMBA ODETTE LISIANE', imageUrl: 'https://images.unsplash.com/photo-1550993433-8c2875332375?q=80&w=800&auto=format&fit=crop', alt: 'Création de BOUANGA KOUMBA ODETTE LISIANE' },
    { id: 6, name: 'MESIMOBOUSTE jusla vanel', imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop', alt: 'Création de MESIMOBOUSTE jusla vanel' }
  ]
};

const promotions = [promotion2025, promotion2024];

const AlumniPage: React.FC = () => {
    return (
        <div className="bg-brand-light">
            <header className="bg-brand-dark text-white py-20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-serif font-bold">Nos Talents</h1>
                    <p className="text-lg mt-4">La fierté de notre école, les créateurs de demain.</p>
                </div>
            </header>

            <main>
                {promotions.map((promotion, index) => (
                    <section key={promotion.year} className={`py-20 ${index % 2 === 0 ? 'bg-brand-light' : 'bg-stone-200'}`}>
                        <div className="container mx-auto px-6">
                            <div className="text-center max-w-3xl mx-auto">
                                <h2 className="text-4xl font-serif text-brand-burgundy mb-4">{promotion.year}</h2>
                                <p className="text-lg text-gray-700 mb-12">{promotion.description}</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                {promotion.students.map(student => (
                                    <div key={student.id} className="group rounded-lg shadow-lg text-center bg-white overflow-hidden">
                                        <div className="overflow-hidden">
                                            <img 
                                                src={student.imageUrl} 
                                                alt={student.alt} 
                                                className="w-full h-auto object-cover aspect-[4/5] group-hover:scale-110 transition-transform duration-500" 
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-xl font-serif text-brand-dark">{student.name}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
};

export default AlumniPage;

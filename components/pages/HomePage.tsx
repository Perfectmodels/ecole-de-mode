
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section 
        className="h-[70vh] bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: "url('https://scontent.flbv4-1.fna.fbcdn.net/v/t1.6435-9/101553186_1541928992680928_6054030422625484800_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF7fX_vU6rjck0uctxsCCowWi1iq7bV2jRaLWKrttXaNHNDzdV1ig16KoJ51SOeNzw8jsiYDXGoLpjOjbtCJfMG&_nc_ohc=Y4VWa20PhiwQ7kNvwFgzk1S&_nc_oc=AdmSLDPFsStKxt_4yhIpcJl-zDuSMfOFVzA9zwDw2PXKznKJgiLw2yNSb8sI81ph1pM&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=1kpz8OFf30E2bZwRs28q9A&oh=00_AfU-KeQQL2n9_o3s16uMX_By2HwnnLRDXp6d2W2q743WXw&oe=68DD0E9E')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center z-10 p-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg">L'Élégance a une Adresse</h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">Découvrez l'art de la mode à l'École de Nzeng Ayong.</p>
          <Link to="/formations" className="bg-brand-gold text-brand-dark font-bold py-3 px-8 uppercase tracking-wider hover:bg-yellow-300 transition-colors duration-300">
            Nos Formations
          </Link>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-brand-burgundy mb-4">Notre Vocation</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
            Depuis 1996, nous aidons des personnes démunies à se former aux métiers de la couture pour leur offrir un avenir. Notre mission est de révéler les talents créatifs du Gabon, enracinés dans leur culture et ouverts sur le monde.
          </p>
          <Link to="/a-propos" className="text-brand-burgundy font-bold hover:underline">
            En savoir plus sur nous &rarr;
          </Link>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-stone-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center text-brand-burgundy mb-12">Formations d'Excellence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-serif mb-3">Stylisme</h3>
              <p className="text-gray-600 mb-4">Développez votre vision créative et apprenez à concevoir des collections uniques.</p>
              <img src="https://scontent.flbv4-1.fna.fbcdn.net/v/t1.6435-9/101553186_1541928992680928_6054030422625484800_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF7fX_vU6rjck0uctxsCCowWi1iq7bV2jRaLWKrttXaNHNDzdV1ig16KoJ51SOeNzw8jsiYDXGoLpjOjbtCJfMG&_nc_ohc=Y4VWa20PhiwQ7kNvwFgzk1S&_nc_oc=AdmSLDPFsStKxt_4yhIpcJl-zDuSMfOFVzA9zwDw2PXKznKJgiLw2yNSb8sI81ph1pM&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=1kpz8OFf30E2bZwRs28q9A&oh=00_AfU-KeQQL2n9_o3s16uMX_By2HwnnLRDXp6d2W2q743WXw&oe=68DD0E9E" alt="Stylisme" className="w-full h-48 object-cover mb-4"/>
            </div>
            <div className="bg-white p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-serif mb-3">Modélisme</h3>
              <p className="text-gray-600 mb-4">Maîtrisez l'art de la coupe et du patronage pour donner vie à vos créations.</p>
              <img src="https://www.libreville-accueil-bal.org/medias/images/20200210-93101.jpeg?fx=r_1200_800" alt="Modélisme" className="w-full h-48 object-cover mb-4"/>
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

export default HomePage;

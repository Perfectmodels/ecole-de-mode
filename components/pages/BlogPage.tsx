

import React from 'react';
import type { BlogPost } from '../../types';

const blogPosts: BlogPost[] = [
    // FIX: Changed id from number to string to match BlogPost type
    { id: '1', title: 'Lumière sur le Défilé de Fin d\'Année 2024', date: '25 Juin 2024', author: 'Admin', excerpt: 'Revivez les moments forts du défilé annuel, où nos étudiants ont une fois de plus démontré l\'étendue de leur talent et de leur créativité.', imageUrl: 'https://picsum.photos/600/400?image=1011' },
    // FIX: Changed id from number to string to match BlogPost type
    { id: '2', title: 'Notre Mission : La Couture comme Levier d\'Insertion Sociale', date: '10 Mars 2024', author: 'Admin', excerpt: 'Depuis 1996, la vision de notre fondateur, l\'abbé Noël-Aimé Ngwa Nguéma, est d\'une mode qui change des vies. Découvrez l\'impact social de notre école.', imageUrl: 'https://picsum.photos/600/400?image=564' },
    // FIX: Changed id from number to string to match BlogPost type
    { id: '3', title: 'Solidarité & Savoir-faire : L\'école produit 5 000 masques pour la FSBO', date: '25 Avril 2020', author: 'Admin', excerpt: 'Pendant la pandémie, notre école a démontré son engagement social en produisant des masques certifiés, alliant compétence technique et aide à la communauté.', imageUrl: 'https://picsum.photos/600/400?image=450' },
];

const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
        <div className="overflow-hidden">
          <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm text-gray-500 mb-2">{post.date} - par {post.author}</p>
            <h3 className="text-xl font-serif text-brand-burgundy mb-3 flex-grow">{post.title}</h3>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <a href="#" className="text-brand-dark font-bold hover:underline self-start">Lire la suite &rarr;</a>
        </div>
    </div>
);

const BlogPage: React.FC = () => {
    return (
        <div>
            <header className="bg-brand-dark text-white py-20 text-center">
                <h1 className="text-5xl font-serif font-bold">Actualités</h1>
                <p className="text-lg mt-4">Les dernières nouvelles de l'école et de l'industrie.</p>
            </header>

            <section className="py-20 bg-stone-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map(post => <PostCard key={post.id} post={post} />)}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
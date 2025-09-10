import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-serif text-brand-dark">Tableau de Bord</h1>
            <p className="mt-2 text-gray-600">Bienvenue dans le panneau d'administration de l'École de Mode de Nzeng Ayong.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DashboardCard 
                    title="Paramètres du Site" 
                    description="Gérer les informations de contact, les réseaux sociaux et autres paramètres globaux." 
                    link="/admin/settings" 
                />
                <DashboardCard 
                    title="Formations" 
                    description="Ajouter, modifier ou supprimer les formations proposées par l'école." 
                    link="/admin/courses" 
                />
                <DashboardCard 
                    title="Classroom" 
                    description="Gérer les chapitres de chaque formation." 
                    link="/admin/classroom" 
                />
                {/* Add more cards as you implement more sections */}
            </div>
        </div>
    );
};

interface CardProps {
    title: string;
    description: string;
    link: string;
}

const DashboardCard: React.FC<CardProps> = ({ title, description, link }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h2 className="text-xl font-serif text-brand-burgundy">{title}</h2>
        <p className="mt-2 text-gray-600 h-16">{description}</p>
        <Link to={link} className="mt-4 inline-block text-white bg-brand-dark hover:bg-brand-burgundy font-semibold py-2 px-4 rounded transition-colors">
            Gérer &rarr;
        </Link>
    </div>
);

export default DashboardPage;
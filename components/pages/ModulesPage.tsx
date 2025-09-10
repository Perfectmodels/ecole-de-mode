import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../../firebase';
// FIX: Refactored Firebase v9 imports to v8 syntax.
// import { ref, onValue } from 'firebase/database';
import type { TrainingModule, Chapter } from '../../types';

const ModulesPage: React.FC = () => {
    const { moduleId } = useParams<{ moduleId?: string }>();
    const [modules, setModules] = useState<TrainingModule[]>([]);
    const [loading, setLoading] = useState(true);

     useEffect(() => {
        // FIX: Refactored Firebase database listener from v9 to v8 syntax and added cleanup.
        const modulesRef = db.ref('modules');
        const listener = modulesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            const modulesList: TrainingModule[] = data ? Object.keys(data).map(key => ({ ...data[key], id: key })) : [];
            setModules(modulesList);
            setLoading(false);
        });
        
        return () => {
            modulesRef.off('value', listener);
        };
    }, []);

    if (loading) {
        return (
             <div className="flex justify-center items-center h-screen">
                <p className="text-center text-lg">Chargement des modules...</p>
            </div>
        )
    }

    if (moduleId) {
        const module = modules.find(m => m.id === moduleId);
        if (module) {
            return <ModuleDetail module={module} />;
        }
        return <p className="text-center py-20">Module non trouvé.</p>;
    }

    return <ModuleList modules={modules} />;
};

const ModuleList: React.FC<{ modules: TrainingModule[] }> = ({ modules }) => {
    return (
        <div>
            <header className="bg-brand-dark text-white py-20 text-center">
                <h1 className="text-5xl font-serif font-bold">Modules de Formation</h1>
                <p className="text-lg mt-4">Approfondissez vos connaissances avec nos cours détaillés.</p>
            </header>
            <section className="py-20 bg-stone-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {modules.map(module => (
                            <Link to={`/modules-de-formation/${module.id}`} key={module.id} className="block bg-white rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                                <div className="p-6">
                                    <h3 className="text-2xl font-serif text-brand-burgundy mb-3">{module.title}</h3>
                                    <p className="text-gray-700">{module.description}</p>
                                    <span className="inline-block mt-4 text-brand-dark font-bold group-hover:underline">
                                        Voir les {module.chapters?.length || 0} chapitres &rarr;
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const ModuleDetail: React.FC<{ module: TrainingModule }> = ({ module }) => {
    const [activeChapter, setActiveChapter] = useState<Chapter | null>((module.chapters && module.chapters[0]) || null);

    return (
        <div className="bg-brand-light">
             <header className="bg-brand-burgundy text-white py-20">
                <div className="container mx-auto px-6">
                    <Link to="/modules-de-formation" className="text-sm hover:underline">&larr; Retour à tous les modules</Link>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2">{module.title}</h1>
                    <p className="text-lg mt-4 max-w-3xl">{module.description}</p>
                </div>
            </header>
            <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
                <aside className="w-full md:w-1/3 lg:w-1/4">
                    <h2 className="text-2xl font-serif text-brand-dark mb-4">Chapitres</h2>
                    <ul className="space-y-1">
                        {module.chapters && module.chapters.map((chapter, index) => (
                            <li key={chapter.id || index}>
                                <button 
                                    onClick={() => setActiveChapter(chapter)}
                                    className={`w-full text-left p-3 rounded-md transition-colors ${activeChapter?.id === chapter.id ? 'bg-brand-dark text-white' : 'hover:bg-stone-200'}`}
                                >
                                    {chapter.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>
                <main className="w-full md:w-2/3 lg:w-3/4 bg-white p-8 rounded-lg shadow-md">
                    {activeChapter ? (
                        <div>
                            <h2 className="text-3xl font-serif text-brand-burgundy mb-4">{activeChapter.title}</h2>
                            {activeChapter.videoUrl && (
                                <div className="aspect-video mb-6">
                                    <iframe
                                        className="w-full h-full rounded-md"
                                        src={activeChapter.videoUrl}
                                        title={activeChapter.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            )}
                            <div className="prose max-w-none text-gray-800">
                                {(activeChapter.content || '').split('\n').map((p, i) => <p key={i}>{p}</p>)}
                            </div>
                        </div>
                    ) : (
                        <p>Sélectionnez un chapitre pour commencer.</p>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ModulesPage;
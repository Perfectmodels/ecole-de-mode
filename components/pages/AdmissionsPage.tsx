
import React, { useState } from 'react';

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

    if (isSubmitted) {
        return (
            <div className="text-center py-40 bg-stone-100">
                <h2 className="text-4xl font-serif text-brand-burgundy mb-4">Merci !</h2>
                <p className="text-lg text-gray-700">Votre dossier a bien été soumis. Nous vous contacterons prochainement.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-8 bg-brand-gold text-brand-dark font-bold py-2 px-6 uppercase tracking-wider hover:bg-yellow-300 transition-colors duration-300">
                    Nouvelle Candidature
                </button>
            </div>
        );
    }

    return (
        <div>
            <header className="bg-brand-burgundy text-white py-20 text-center">
                <h1 className="text-5xl font-serif font-bold">Admissions</h1>
                <p className="text-lg mt-4">Rejoignez la nouvelle génération de créateurs.</p>
            </header>

            <section className="py-20 bg-stone-100">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-serif text-brand-dark mb-6">Processus de Candidature</h2>
                        <ol className="list-decimal list-inside space-y-4 text-gray-700">
                            <li>Remplissez le formulaire de candidature en ligne.</li>
                            <li>Joignez votre dossier (CV, lettre de motivation, portfolio si requis).</li>
                            <li>Notre équipe examinera votre candidature.</li>
                            <li>Les candidats sélectionnés seront contactés pour un entretien.</li>
                        </ol>
                        <p className="mt-6 text-sm text-gray-600">Pour toute question, n'hésitez pas à nous contacter à <a href="mailto:admissions@ena-mode.ga" className="text-brand-burgundy underline">admissions@ena-mode.ga</a>.</p>
                    </div>
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" name="firstName" placeholder="Prénom" required onChange={handleChange} className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-gold focus:border-brand-gold"/>
                                <input type="text" name="lastName" placeholder="Nom" required onChange={handleChange} className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-gold focus:border-brand-gold"/>
                            </div>
                            <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-gold focus:border-brand-gold"/>
                            <input type="tel" name="phone" placeholder="Téléphone" required onChange={handleChange} className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-gold focus:border-brand-gold"/>
                            <select name="course" required onChange={handleChange} className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-gold focus:border-brand-gold bg-white">
                                <option value="">Choisir une formation...</option>
                                <option value="stylisme">Stylisme & Design de Mode</option>
                                <option value="modelisme">Modélisme & Patronage</option>
                                <option value="couture">Couture & Finitions</option>
                                <option value="accessoires">Design d'Accessoires</option>
                            </select>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Dépôt de dossier (PDF, max 5MB)</label>
                                <input type="file" name="portfolio" onChange={handleFileChange} accept=".pdf" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-burgundy file:text-white hover:file:bg-brand-gold"/>
                            </div>
                            <textarea name="message" rows={4} placeholder="Votre message (optionnel)" onChange={handleChange} className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-gold focus:border-brand-gold"></textarea>
                            <button type="submit" className="w-full bg-brand-dark text-white font-bold py-3 px-8 uppercase tracking-wider hover:bg-brand-burgundy transition-colors duration-300">
                                Soumettre ma candidature
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdmissionsPage;

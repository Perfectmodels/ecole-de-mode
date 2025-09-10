import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
// FIX: Refactored Firebase v9 imports to v8 syntax.
// import { ref, onValue } from 'firebase/database';
import type { SiteSettings } from '../../types';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [settings, setSettings] = useState<SiteSettings>({
        contact: { address: '', phone: '', whatsapp: '', email: '' },
        social: { facebook: '#', instagram: '#', tiktok: '#' }
    });

     useEffect(() => {
        // FIX: Refactored Firebase database listener from v9 to v8 syntax and added cleanup.
        const settingsRef = db.ref('settings');
        const listener = settingsRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setSettings(data);
            }
        });
        return () => {
            settingsRef.off('value', listener);
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Contact Form Submitted:', formData);
        setIsSubmitted(true);
        // Here you would typically send the data to a server
    };

    return (
        <div>
            <header className="bg-brand-dark text-white py-20 text-center">
                <h1 className="text-5xl font-serif font-bold">Contactez-nous</h1>
                <p className="text-lg mt-4">Nous sommes à votre écoute.</p>
            </header>

            <section className="py-20 bg-stone-100">
                <div className="container mx-auto px-6">
                    <div className="bg-white p-8 shadow-lg rounded-lg grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                             {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <h2 className="text-3xl font-serif text-brand-burgundy mb-4">Merci !</h2>
                                    <p className="text-lg text-gray-700 mb-6">Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.</p>
                                    <button onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }} className="bg-brand-dark text-white font-bold py-2 px-6 uppercase tracking-wider hover:bg-brand-burgundy transition-colors duration-300">
                                        Envoyer un autre message
                                    </button>
                                </div>
                            ) : (
                                <>
                                <h2 className="text-3xl font-serif text-brand-dark mb-6">Envoyer un message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <input type="text" name="name" placeholder="Votre nom" required value={formData.name} onChange={handleChange} className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-gold focus:border-brand-gold"/>
                                    <input type="email" name="email" placeholder="Votre email" required value={formData.email} onChange={handleChange} className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-gold focus:border-brand-gold"/>
                                    <input type="text" name="subject" placeholder="Sujet" required value={formData.subject} onChange={handleChange} className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-gold focus:border-brand-gold"/>
                                    <textarea name="message" rows={5} placeholder="Votre message" required value={formData.message} onChange={handleChange} className="p-3 border border-gray-300 rounded-md w-full focus:ring-brand-gold focus:border-brand-gold"></textarea>
                                    <button type="submit" className="w-full bg-brand-dark text-white font-bold py-3 px-8 uppercase tracking-wider hover:bg-brand-burgundy transition-colors duration-300">
                                        Envoyer
                                    </button>
                                </form>
                                </>
                             )}
                        </div>

                        {/* Contact Info & Map */}
                        <div>
                            <h2 className="text-3xl font-serif text-brand-dark mb-6">Nos Coordonnées</h2>
                            <div className="space-y-4 text-lg text-gray-700">
                                <p><strong>Adresse :</strong> {settings.contact.address}</p>
                                <p><strong>Téléphone :</strong> {settings.contact.phone}</p>
                                <p><strong>WhatsApp :</strong> {settings.contact.whatsapp}</p>
                                <p><strong>Email :</strong> <a href={`mailto:${settings.contact.email}`} className="text-brand-burgundy hover:underline">{settings.contact.email}</a></p>
                            </div>
                            <h3 className="text-2xl font-serif text-brand-dark mt-8 mb-4">Réseaux Sociaux</h3>
                            <div className="flex space-x-4">
                               <a href={settings.social.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:text-brand-burgundy">Instagram</a>
                               <a href={settings.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:text-brand-burgundy">TikTok</a>
                               <a href={settings.social.facebook} target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:text-brand-burgundy">Facebook</a>
                            </div>
                             <h3 className="text-2xl font-serif text-brand-dark mt-8 mb-4">Partenaire</h3>
                            <p className="text-lg text-gray-700">Perfect Models Management</p>
                            <div className="mt-8">
                                <img src="https://www.libreville-accueil-bal.org/medias/images/20200210-093656.jpeg?fx=r_1200_800" alt="Atelier de l'école" className="w-full h-64 object-cover rounded-lg shadow-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
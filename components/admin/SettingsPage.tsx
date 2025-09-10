import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
// FIX: Refactored Firebase v9 imports to v8 syntax.
// import { ref, onValue, update } from 'firebase/database';
import type { SiteSettings } from '../../types';

const SettingsPage: React.FC = () => {
    const [settings, setSettings] = useState<SiteSettings | null>(null);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        // FIX: Refactored Firebase database listener from v9 to v8 syntax and added cleanup.
        const settingsRef = db.ref('settings');
        const listener = settingsRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setSettings(data);
            } else {
                setSettings({
                    contact: { address: '', phone: '', whatsapp: '', email: '' },
                    social: { facebook: '', instagram: '', tiktok: '' }
                });
            }
        });
        return () => {
            settingsRef.off('value', listener);
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, section: keyof SiteSettings, field: keyof SiteSettings['contact'] | keyof SiteSettings['social']) => {
        if (!settings) return;
        const { value } = e.target;
        setSettings(prev => ({
            ...prev!,
            [section]: {
                ...prev![section],
                [field]: value
            }
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!settings) return;
        // FIX: Refactored Firebase update operation from v9 to v8 syntax.
        db.ref('settings').update(settings)
            .then(() => {
                setFeedback('Paramètres mis à jour avec succès !');
                setTimeout(() => setFeedback(''), 3000);
            })
            .catch(error => {
                setFeedback(`Erreur: ${error.message}`);
                 setTimeout(() => setFeedback(''), 5000);
            });
    };

    if (!settings) {
        return <h1 className="text-3xl font-serif text-brand-dark">Chargement des paramètres...</h1>;
    }

    return (
        <div>
            <h1 className="text-3xl font-serif text-brand-dark">Paramètres du Site</h1>
            <form onSubmit={handleSubmit} className="mt-6 bg-white p-8 rounded-lg shadow-md">
                {/* Contact Info */}
                <div className="mb-8">
                    <h2 className="text-2xl font-serif text-brand-burgundy mb-4">Informations de Contact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="Adresse" value={settings.contact.address} onChange={e => handleChange(e, 'contact', 'address')} />
                        <InputField label="Téléphone" value={settings.contact.phone} onChange={e => handleChange(e, 'contact', 'phone')} />
                        <InputField label="WhatsApp" value={settings.contact.whatsapp} onChange={e => handleChange(e, 'contact', 'whatsapp')} />
                        <InputField label="Email" type="email" value={settings.contact.email} onChange={e => handleChange(e, 'contact', 'email')} />
                    </div>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-2xl font-serif text-brand-burgundy mb-4">Réseaux Sociaux</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="Lien Facebook" value={settings.social.facebook} onChange={e => handleChange(e, 'social', 'facebook')} />
                        <InputField label="Lien Instagram" value={settings.social.instagram} onChange={e => handleChange(e, 'social', 'instagram')} />
                        <InputField label="Lien TikTok" value={settings.social.tiktok} onChange={e => handleChange(e, 'social', 'tiktok')} />
                    </div>
                </div>
                
                <div className="mt-8">
                    <button type="submit" className="px-6 py-2 bg-brand-dark text-white font-bold rounded-md hover:bg-brand-burgundy transition-colors">
                        Enregistrer les modifications
                    </button>
                    {feedback && <p className="inline-block ml-4 text-green-600">{feedback}</p>}
                </div>
            </form>
        </div>
    );
};

const InputField: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string }> = ({ label, value, onChange, type = 'text' }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-burgundy focus:border-brand-burgundy"
        />
    </div>
);

export default SettingsPage;
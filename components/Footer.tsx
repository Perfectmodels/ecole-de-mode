import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
// FIX: Refactored Firebase v9 imports to v8 syntax.
// import { ref, onValue } from 'firebase/database';
import type { SiteSettings } from '../types';

const Footer: React.FC = () => {
    const logoUrl = 'https://scontent.flbv4-1.fna.fbcdn.net/v/t39.30808-6/284489863_103459222388793_5383421878124120700_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFTD-WFpfgyGCqilNxp9n7WGqqxuRDEoKYaqrG5EMSgpqq7cbFKiK7myD1fxbQt2bbIX2faYNbbiBo891yah5DH&_nc_ohc=pgiYDuzDMhgQ7kNvwGAkKY1&_nc_oc=AdntxJqsag6z0oJt85XPXRBP3cMwyrgOq2wQUze35nqNZyjYyb99d5SmNz7pMqy5Z58&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=u7LzfT4gNYfmh7Qxh_aSUA&oh=00_AfVPjxJCvKAJV8tW1SCXlfKA404b-lVpYgOyAcQqj9eP9w&oe=68BB8120';
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

  return (
    <footer className="bg-brand-dark text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logoUrl} alt="Logo École de Mode" className="h-20 w-auto mb-4 bg-white p-1 rounded-md" />
            <h3 className="text-xl font-serif font-bold text-brand-gold mb-4">Ecole de Mode de Nzeng Ayong</h3>
            <p className="text-sm text-gray-300">Fondée en 1996, notre école forme la prochaine génération de créateurs à Nzeng Ayong avec une mission sociale.</p>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/a-propos" className="hover:text-brand-gold">À propos</Link></li>
              <li><Link to="/formations" className="hover:text-brand-gold">Formations</Link></li>
              <li><Link to="/nos-talents" className="hover:text-brand-gold">Nos Talents</Link></li>
              <li><Link to="/admissions" className="hover:text-brand-gold">Admissions</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📍 {settings.contact.address}</li>
              <li>📞 {settings.contact.phone}</li>
              <li>📧 {settings.contact.email}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href={settings.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold">FB</a>
              <a href={settings.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold">IG</a>
              <a href={settings.social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold">TT</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ecole de Mode de Nzeng Ayong. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
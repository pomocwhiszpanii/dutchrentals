import React from 'react';
import { Mail, Shield, Heart, Zap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brand-dark mb-10 text-center">{t('about.title')}</h1>
        
        <div className="prose prose-lg text-gray-500 mx-auto">
          <p className="lead text-xl text-brand-600 font-medium mb-12 leading-relaxed text-center">
            {t('about.intro')}
          </p>

          <div className="grid gap-8 mb-12">
             <div className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
                <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-3">
                  <div className="p-2 bg-white rounded-xl shadow-sm"><Heart className="w-5 h-5 text-accent-500" /></div>
                  {t('about.mission')}
                </h3>
                <p className="leading-relaxed">
                  {t('about.mission_text')}
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/50">
                <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-3">
                  <div className="p-2 bg-brand-50 rounded-xl"><Shield className="w-5 h-5 text-brand-600" /></div>
                  {t('about.quality')}
                </h3>
                <p className="leading-relaxed">
                  {t('about.quality_text')}
                </p>
             </div>

             <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/50">
                <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-3">
                  <div className="p-2 bg-brand-50 rounded-xl"><Zap className="w-5 h-5 text-brand-600" /></div>
                  {t('about.process')}
                </h3>
                <p className="leading-relaxed mb-4">
                  {t('about.process_text_1')}
                </p>
                <p className="leading-relaxed text-sm text-gray-400 italic">
                  {t('about.process_text_2')}
                </p>
             </div>
          </div>

          <div className="flex items-center justify-center mt-16 p-10 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100">
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-2">{t('about.contact_btn')}</h4>
              <a 
                href="mailto:info@dutch-rentals.nl" 
                className="inline-flex items-center text-brand-600 font-bold hover:underline text-lg mt-2 bg-white px-6 py-3 rounded-xl shadow-sm border border-brand-100 hover:shadow-md transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                info@dutch-rentals.nl
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
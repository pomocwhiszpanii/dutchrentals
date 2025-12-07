import React from 'react';
import { Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import { MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Properties: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-brand-50/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-brand-dark sm:text-5xl mb-4">{t('prop.title')}</h1>
          <p className="text-xl text-gray-500">
            {t('prop.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((prop) => (
            <div key={prop.id} className="group bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-all hover:shadow-2xl hover:shadow-brand-100/50 hover:-translate-y-1">
              <div className="h-64 w-full relative overflow-hidden">
                <img 
                  src={prop.images[0]} 
                  alt={prop.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wide">
                  {t('prop.new')}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{prop.title}</h3>
                
                <div className="flex items-center text-gray-500 mb-5 text-sm">
                  <MapPin className="w-4 h-4 mr-1 text-brand-400" />
                  <span>{prop.address}, {prop.city}</span>
                </div>
                
                <div className="flex items-baseline mb-5">
                  <span className="text-2xl font-bold text-brand-600">€{prop.price}</span>
                  <span className="text-gray-400 text-sm ml-1">{t('prop.per_month')}</span>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                   {prop.description.replace(/\*\*/g, '')}
                </p>

                <div className="mt-auto">
                  <Link 
                    to={`/woning/${prop.id}`}
                    className="w-full flex items-center justify-center px-4 py-4 border border-brand-100 bg-brand-50/50 text-sm font-bold rounded-2xl text-brand-700 hover:bg-brand-600 hover:text-white transition-all group"
                  >
                    {t('prop.btn.details')} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
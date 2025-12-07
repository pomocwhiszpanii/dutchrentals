import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, UserCheck, ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-100 rounded-full blur-3xl opacity-50"></div>
           <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-accent-100 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto py-20 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="lg:w-2/3 lg:pr-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-wider mb-6 border border-brand-100">
              <Star className="w-3 h-3 fill-brand-600" /> Premium Housing
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-brand-dark sm:text-7xl mb-8 leading-tight">
              {t('home.hero.title')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">{t('home.hero.title.highlight')}</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-10">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/aanbod"
                className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-2xl shadow-xl shadow-brand-200 text-white bg-brand-600 hover:bg-brand-700 transition-all transform hover:-translate-y-1"
              >
                {t('home.hero.cta.properties')}
              </Link>
              <Link
                to="/over-ons"
                className="flex items-center justify-center px-8 py-4 border-2 border-brand-100 text-base font-bold rounded-2xl text-brand-700 bg-white hover:bg-brand-50 transition-all"
              >
                {t('home.hero.cta.how')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 font-bold tracking-wide uppercase text-xs mb-3">{t('home.promise')}</h2>
            <p className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
              {t('home.revolution')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-xl shadow-brand-100/20 hover:shadow-2xl hover:shadow-brand-100/40 transition-shadow duration-300">
              <div className="h-16 w-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('home.feat.select.title')}</h3>
              <p className="text-gray-500 leading-relaxed">
                {t('home.feat.select.desc')}
              </p>
            </div>

            <div className="flex flex-col p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-xl shadow-brand-100/20 hover:shadow-2xl hover:shadow-brand-100/40 transition-shadow duration-300">
              <div className="h-16 w-16 rounded-2xl bg-accent-50 flex items-center justify-center text-accent-500 mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('home.feat.system.title')}</h3>
              <p className="text-gray-500 leading-relaxed">
                {t('home.feat.system.desc')}
              </p>
            </div>

            <div className="flex flex-col p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-xl shadow-brand-100/20 hover:shadow-2xl hover:shadow-brand-100/40 transition-shadow duration-300">
              <div className="h-16 w-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-6">
                <UserCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('home.feat.quality.title')}</h3>
              <p className="text-gray-500 leading-relaxed">
                {t('home.feat.quality.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-300 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>
          
          <div className="py-20 px-8 md:px-16 lg:flex lg:items-center lg:justify-between relative z-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-3">
                {t('home.cta.title')}
              </h2>
              <p className="text-brand-100 text-lg">
                {t('home.cta.subtitle')}
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
              <Link
                to="/aanbod"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-2xl text-brand-600 bg-white hover:bg-brand-50 transition-all shadow-lg"
              >
                {t('home.cta.btn')} <ArrowRight className="ml-2 w-5 h-5"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
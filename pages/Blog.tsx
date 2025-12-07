import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const { t } = useLanguage();

  const posts = [
    {
      id: 1,
      title: "Huren in 2024: De veranderende regelgeving",
      excerpt: "De Wet Betaalbare Huur heeft grote invloed op de vrije sector. Wat betekent dit voor jou als huurder en wat zijn je rechten?",
      date: "14 Nov 2024",
      author: "Juridisch Team",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Waarom wij kiezen voor een selectieproces",
      excerpt: "Transparantie is key. Lees waarom ons AI-ondersteunde model eerlijker is dan traditionele 'wie het eerst komt' systemen.",
      date: "02 Nov 2024",
      author: "Redactie Dutch Rentals",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Tips voor een succesvolle bezichtiging",
      excerpt: "Je bent geselecteerd voor de top 14. Gefeliciteerd! Maar hoe zorg je ervoor dat de verhuurder uiteindelijk voor jou kiest?",
      date: "20 Okt 2024",
      author: "Makelaardij",
      image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-brand-50/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-brand-dark sm:text-5xl mb-4">{t('blog.title')}</h1>
          <p className="text-xl text-gray-500">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex items-center text-xs text-gray-400 mb-4 gap-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 leading-tight">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="text-brand-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  {t('blog.read_more')} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
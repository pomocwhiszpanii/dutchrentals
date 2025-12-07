import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import SelectionWizard from '../components/SelectionWizard';
import { MapPin, Maximize, Home, Check, ArrowLeft, Sparkles, AlertCircle, ChevronRight, ChevronLeft, X, ZoomIn, Clock, ShieldCheck, Key, FileText, Building2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const [showWizard, setShowWizard] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Timer state (9h 52m 03s = 35523 seconds)
  const [timeLeft, setTimeLeft] = useState(35523);
  
  // Lightbox state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const property = PROPERTIES.find(p => p.id === id);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}u ${m}m ${s}s`;
  };

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-brand-dark">{t('prop.not_found')}</h2>
          <Link to="/aanbod" className="text-brand-600 hover:underline font-medium">{t('prop.back')}</Link>
        </div>
      </div>
    );
  }

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  // Simple Markdown parser for bold text
  const parseDescription = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-brand-dark block mt-4 mb-2">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="bg-brand-50/30 min-h-screen pb-12">
      
      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button 
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
          >
            <X className="w-8 h-8" />
          </button>
          
          {property.images.length > 1 && (
            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}
          
          <img 
            src={property.images[currentImageIndex]} 
            alt={`Fullscreen ${currentImageIndex}`} 
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl select-none"
            onContextMenu={(e) => e.preventDefault()}
          />
          
          {property.images.length > 1 && (
            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium bg-black/40 px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {property.images.length}
          </div>
        </div>
      )}

      {/* Image Gallery Header */}
      <div className="h-[50vh] md:h-[60vh] relative group bg-gray-900 select-none overflow-hidden">
        <img 
          src={property.images[currentImageIndex]} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-zoom-in"
          onContextMenu={(e) => e.preventDefault()}
          onClick={() => openLightbox(currentImageIndex)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Navigation Arrows for main view */}
        {property.images.length > 1 && (
          <>
            <button 
              onClick={prevImage} 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <Link to="/aanbod" className="absolute top-6 left-6 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-colors z-10">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        
        {/* Top CTA Button Overlay - Centered on mobile, absolute right on desktop header area */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-8 md:right-8 z-20 w-max">
             <button 
                onClick={() => setShowWizard(true)}
                className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-2xl shadow-xl shadow-black/20 font-bold transition-all transform hover:scale-105 backdrop-blur-sm border border-white/20"
             >
                <Sparkles className="w-4 h-4 fill-white" />
                {t('detail.btn.check_top')}
             </button>
        </div>

        {/* Thumbnail Dots */}
        <div className="absolute bottom-32 left-0 right-0 flex justify-center gap-2 pointer-events-none">
            {property.images.map((_, idx) => (
                <div 
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all shadow-sm ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                />
            ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white pointer-events-none">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 shadow-black/50 drop-shadow-lg">{property.title}</h1>
            <div className="flex items-center text-lg md:text-xl opacity-90 drop-shadow-md">
              <MapPin className="w-5 h-5 mr-2" />
              {property.address}, {property.city}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-brand-100/20 border border-gray-100 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-brand-dark mb-4">{t('detail.desc')}</h2>
              <div className="text-gray-600 leading-relaxed text-lg">
                {parseDescription(property.description)}
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-brand-100/20 border border-gray-100 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">{t('detail.specs')}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="flex items-start">
                  <div className="p-3 bg-brand-50 rounded-2xl mr-4">
                    <Maximize className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-400 font-medium uppercase tracking-wide">{t('detail.sqm')}</span>
                    <span className="font-bold text-lg text-brand-dark">{property.specs.sqm} m²</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-brand-50 rounded-2xl mr-4">
                     <Home className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-400 font-medium uppercase tracking-wide">{t('detail.rooms')}</span>
                    <span className="font-bold text-lg text-brand-dark">{property.specs.rooms}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-brand-50 rounded-2xl mr-4">
                    <Check className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-400 font-medium uppercase tracking-wide">{t('detail.interior')}</span>
                    <span className="font-bold text-lg text-brand-dark">{property.specs.furnished ? t('detail.furnished') : t('detail.unfurnished')}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {property.images.map((img, idx) => (
                    <div 
                        key={idx} 
                        className={`group relative cursor-pointer rounded-2xl overflow-hidden h-24 shadow-sm border border-gray-100 ${idx === currentImageIndex ? 'ring-2 ring-brand-500' : ''}`}
                        onClick={() => openLightbox(idx)}
                    >
                        <img 
                            src={img} 
                            alt={`Detail ${idx}`} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6" />
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Urgency Timer */}
              <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-[2.5rem] shadow-xl shadow-accent-200/50 p-6 border border-white/20 text-white overflow-hidden relative">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 animate-pulse" />
                    <span className="font-bold text-sm uppercase tracking-wide">{t('detail.timer.hurry')}</span>
                  </div>
                  <div className="text-4xl font-black font-mono tracking-wider tabular-nums">
                    {formatTime(timeLeft)}
                  </div>
              </div>

              <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-brand-100/50 p-8 border border-gray-100">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-brand-dark">€{property.price}</span>
                  <span className="text-lg text-gray-500 font-medium ml-2">{t('prop.per_month')}</span>
                </div>
                <p className="text-sm text-gray-400 mb-8">{t('detail.costs_excl')}</p>

                {/* Main Action Area */}
                <div className="space-y-4 mb-8">
                  <div className="bg-brand-50/50 p-6 rounded-3xl border border-brand-50 space-y-4">
                    {/* Status */}
                    <div className="flex justify-between items-center text-sm pb-3 border-b border-brand-100/50">
                      <span className="text-gray-600">{t('detail.procedure')}:</span>
                      <span className="font-bold text-green-600 flex items-center gap-1.5 bg-white px-2 py-1 rounded-full shadow-sm text-xs">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        {t('detail.check_active')}
                      </span>
                    </div>

                    {/* Detailed Specs List */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                         <div className="p-1.5 bg-white rounded-lg shadow-sm text-brand-500 mt-0.5"><ShieldCheck className="w-3.5 h-3.5" /></div>
                         <div>
                            <p className="text-xs text-gray-500 font-medium uppercase">{t('detail.income_req')}</p>
                            <p className="text-sm font-bold text-gray-800">~ €{Math.round(property.price * 2.5)} p/m</p>
                         </div>
                      </div>

                       <div className="flex items-start gap-3">
                         <div className="p-1.5 bg-white rounded-lg shadow-sm text-brand-500 mt-0.5"><Building2 className="w-3.5 h-3.5" /></div>
                         <div>
                            <p className="text-xs text-gray-500 font-medium uppercase">{t('detail.deposit')}</p>
                            <p className="text-sm font-bold text-gray-800">{t('detail.deposit.1x')}</p>
                         </div>
                      </div>

                      <div className="flex items-start gap-3">
                         <div className="p-1.5 bg-white rounded-lg shadow-sm text-brand-500 mt-0.5"><FileText className="w-3.5 h-3.5" /></div>
                         <div>
                            <p className="text-xs text-gray-500 font-medium uppercase">{t('detail.contract')}</p>
                            <p className="text-sm font-bold text-gray-800">{t('detail.contract.12m')}</p>
                         </div>
                      </div>

                      <div className="flex items-start gap-3">
                         <div className="p-1.5 bg-white rounded-lg shadow-sm text-brand-500 mt-0.5"><Key className="w-3.5 h-3.5" /></div>
                         <div>
                            <p className="text-xs text-gray-500 font-medium uppercase">{t('detail.handover')}</p>
                            <p className="text-sm font-bold text-gray-800">{t('detail.handover.time')}</p>
                         </div>
                      </div>

                       <div className="flex items-start gap-3">
                         <div className="p-1.5 bg-white rounded-lg shadow-sm text-brand-500 mt-0.5"><Building2 className="w-3.5 h-3.5" /></div>
                         <div>
                            <p className="text-xs text-gray-500 font-medium uppercase">{t('detail.registration')}</p>
                            <p className="text-sm font-bold text-gray-800">{t('detail.registration.yes')}</p>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setShowWizard(true)}
                  className="w-full py-5 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-2xl shadow-lg shadow-accent-200 transition-all transform hover:-translate-y-1 text-lg flex justify-center items-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  {t('detail.btn.start')}
                </button>
                
                <p className="text-xs text-center mt-4 text-gray-400 flex items-center justify-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {t('detail.disclaimer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showWizard && (
        <SelectionWizard property={property} onClose={() => setShowWizard(false)} />
      )}
    </div>
  );
};

export default PropertyDetail;
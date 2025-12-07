import React, { useState, useCallback, useMemo } from 'react';
import { FormData, SelectionStep, Property } from '../types';
import { PAYMENT_LINK } from '../constants';
import { Loader2, CheckCircle, AlertTriangle, CreditCard, Sparkles, Calendar, ArrowRight, UserPlus, Mail, User } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface SelectionWizardProps {
  property: Property;
  onClose: () => void;
}

const SelectionWizard: React.FC<SelectionWizardProps> = ({ property, onClose }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState<SelectionStep>(SelectionStep.FORM);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    income: 0,
    currentZip: '',
    livingSituation: 'single',
    isStudent: false,
    hasGuarantor: false,
    hasPets: false
  });
  const [position, setPosition] = useState<number | null>(null);

  // Calculate dates: 8, 9, 10 days from now
  const viewingDates = useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 8; i <= 10; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
      dates.push(futureDate.toLocaleDateString('nl-NL', { 
        weekday: 'short', 
        day: 'numeric', 
        month: 'long' 
      }));
    }
    return dates;
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const addGuarantor = () => {
    setFormData(prev => ({ ...prev, hasGuarantor: true }));
  };

  const calculatePosition = useCallback(() => {
    setStep(SelectionStep.ANALYZING);
    
    // Simulate system processing time
    setTimeout(() => {
      // Logic: Random position between 2 and 5 (inclusive)
      const randomPos = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      setPosition(randomPos);
      setStep(SelectionStep.RESULT);
    }, 2500);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculatePosition();
  };

  const isIncomeSufficient = formData.hasGuarantor || (Number(formData.income) >= property.price * 2.5);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/70 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>

        {step === SelectionStep.FORM && (
          <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-brand-50 rounded-2xl">
                <Sparkles className="w-6 h-6 text-brand-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{t('wiz.title')}</h2>
            </div>
            <p className="text-gray-600 mb-8 ml-1">{t('wiz.subtitle')}</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('wiz.name')}</label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full p-4 pl-12 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all focus:bg-white"
                      placeholder="J. Janssen"
                    />
                  </div>
                </div>
                 <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('wiz.email')}</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 pl-12 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all focus:bg-white"
                      placeholder="naam@voorbeeld.nl"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('wiz.income')}</label>
                  <div className="relative">
                    <span className="absolute left-4 top-4 text-gray-400">€</span>
                    <input
                      required
                      type="number"
                      name="income"
                      value={formData.income || ''}
                      onChange={handleInputChange}
                      className="w-full p-4 pl-10 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all focus:bg-white"
                      placeholder="0.00"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2 ml-1">{t('wiz.income_hint')}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('wiz.zip')}</label>
                  <input
                    required
                    type="text"
                    name="currentZip"
                    value={formData.currentZip}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all focus:bg-white"
                    placeholder="1234 AB"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('wiz.living')}</label>
                <div className="relative">
                  <select
                    name="livingSituation"
                    value={formData.livingSituation}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer hover:bg-gray-100 focus:bg-white"
                  >
                    <option value="single">{t('wiz.single')}</option>
                    <option value="couple">{t('wiz.couple')}</option>
                    <option value="family">{t('wiz.family')}</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-4 pt-2">
                <label className="flex items-center p-3 rounded-2xl hover:bg-brand-50/50 cursor-pointer transition-colors border border-transparent hover:border-brand-100">
                  <input
                    type="checkbox"
                    name="isStudent"
                    checked={formData.isStudent}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
                  />
                  <span className="text-gray-700 ml-3 font-medium">{t('wiz.student')}</span>
                </label>

                {formData.isStudent && (
                  <label className="flex items-center p-3 rounded-2xl hover:bg-brand-50/50 cursor-pointer transition-colors border border-transparent hover:border-brand-100 pl-8">
                    <input
                      type="checkbox"
                      name="hasGuarantor"
                      checked={formData.hasGuarantor}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
                    />
                    <span className="text-gray-700 ml-3 font-medium">{t('wiz.guarantor')}</span>
                  </label>
                )}

                <label className="flex items-center p-3 rounded-2xl hover:bg-brand-50/50 cursor-pointer transition-colors border border-transparent hover:border-brand-100">
                  <input
                    type="checkbox"
                    name="hasPets"
                    checked={formData.hasPets}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
                  />
                  <span className="text-gray-700 ml-3 font-medium">{t('wiz.pets')}</span>
                </label>
              </div>

              {!isIncomeSufficient && Number(formData.income) > 0 && (
                 <div className="bg-amber-50 border border-amber-100 p-5 rounded-2xl text-sm text-amber-900 shadow-sm">
                   <p className="flex items-center gap-2 font-bold mb-2"><AlertTriangle className="w-5 h-5 text-amber-600"/> {t('wiz.warning')}</p>
                   <p className="mb-4 leading-relaxed opacity-90">{t('wiz.warning_text')}</p>
                   
                   {!formData.hasGuarantor && (
                     <button
                        type="button"
                        onClick={addGuarantor}
                        className="bg-white border border-amber-200 text-amber-800 px-4 py-2 rounded-xl text-xs font-bold shadow-sm hover:shadow-md hover:bg-amber-50 transition-all flex items-center gap-2"
                     >
                       <UserPlus className="w-4 h-4" />
                       {t('wiz.add_guarantor_btn')}
                     </button>
                   )}
                 </div>
              )}

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-2xl shadow-lg shadow-brand-200 hover:shadow-brand-300 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  {t('wiz.btn.analyze')}
                </button>
              </div>
            </form>
          </div>
        )}

        {step === SelectionStep.ANALYZING && (
          <div className="p-12 flex flex-col items-center justify-center text-center h-[600px]">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-brand-200 rounded-full animate-ping opacity-25"></div>
              <Loader2 className="w-20 h-20 text-brand-600 animate-spin relative z-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('wiz.analyzing')}</h3>
            <p className="text-gray-500 max-w-sm animate-pulse">{t('wiz.comparing')}</p>
          </div>
        )}

        {step === SelectionStep.RESULT && position && (
          <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
            {/* Success Header */}
            <div className="p-10 pb-6 text-center bg-gradient-to-b from-green-50 to-white">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6 shadow-sm ring-4 ring-green-50">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('wiz.congrats')}</h2>
              
              <div className="bg-white p-6 rounded-3xl shadow-lg shadow-green-100/50 border border-green-100 my-6 max-w-sm mx-auto">
                <p className="text-gray-600 mb-3 text-sm">
                  {t('wiz.result.text')}
                </p>
                <div className="flex items-baseline justify-center gap-2">
                   <span className="text-4xl font-extrabold text-brand-600">#{position}</span>
                   <span className="text-gray-400 text-sm font-medium">/ 14</span>
                </div>
              </div>
            </div>

            {/* Dates & Payment */}
            <div className="px-8 md:px-12 pb-12 bg-white flex-grow">
              
              {/* Dates */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-800 mb-1 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-500" />
                  {t('wiz.dates.title')}
                </h4>
                <p className="text-xs text-gray-400 mb-3 ml-6">{t('wiz.dates.subtitle')}</p>
                <div className="grid grid-cols-3 gap-3">
                  {viewingDates.map((date, idx) => (
                    <div key={idx} className="bg-brand-50/50 border border-brand-100 rounded-xl p-3 text-center">
                      <div className="text-xs font-bold text-brand-700">{date}</div>
                      <div className="text-xs text-brand-500 font-medium mt-1">11:30</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Next Accordion/List */}
              <div className="mb-8 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-brand-dark">{t('wiz.next.title')}</h3>
                <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-brand-200 flex items-center justify-center text-xs font-bold text-brand-600">1</span>
                    <span>{t('wiz.next.p1')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-brand-200 flex items-center justify-center text-xs font-bold text-brand-600">2</span>
                    <span>{t('wiz.next.p2')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-brand-200 flex items-center justify-center text-xs font-bold text-brand-600">3</span>
                    <span>{t('wiz.next.p3')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-brand-200 flex items-center justify-center text-xs font-bold text-brand-600">4</span>
                    <span>{t('wiz.next.p4')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-brand-200 flex items-center justify-center text-xs font-bold text-brand-600">5</span>
                    <span>{t('wiz.next.p5')}</span>
                  </li>
                </ul>
              </div>

              {/* Sticky Payment Section */}
              <div className="sticky bottom-0 bg-white pt-4 pb-2 border-t border-gray-100">
                <h3 className="font-bold text-md mb-2 flex items-center gap-2 text-gray-900">
                  <CreditCard className="w-5 h-5 text-accent-500"/>
                  {t('wiz.step2')}
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  {t('wiz.pay.text')}
                </p>
                
                <a 
                  href={PAYMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-2xl shadow-lg shadow-accent-100 transition-all transform hover:-translate-y-1 mb-2 group"
                >
                  {t('wiz.pay.btn')} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-[10px] text-center text-gray-400 uppercase tracking-wide">
                  {t('wiz.pay.secure')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectionWizard;
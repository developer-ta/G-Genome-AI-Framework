
import React from 'react';
import { Icon } from '../components/Icons';

const ContactPage: React.FC = () => {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-brand-orange to-brand-cyan bg-clip-text text-transparent">
                Entrons en contact
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-medium-text">
              Une question, une proposition de projet, ou simplement envie de discuter ? N'hésitez pas à remplir le formulaire ci-dessous ou à me retrouver sur les réseaux sociaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Form Section */}
            <div className="md:col-span-2 bg-white dark:bg-dark-card border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-2xl shadow-slate-300/60 dark:shadow-black/50 backdrop-blur-md">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-600 dark:text-medium-text mb-2">Nom</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="[VOTRE NOM]"
                      className="w-full bg-slate-100 dark:bg-dark-bg/50 border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-800 dark:text-light-text placeholder:text-slate-400 dark:placeholder:text-medium-text/50 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-600 dark:text-medium-text mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="votre.email@example.com"
                      className="w-full bg-slate-100 dark:bg-dark-bg/50 border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-800 dark:text-light-text placeholder:text-slate-400 dark:placeholder:text-medium-text/50 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-all"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-bold text-slate-600 dark:text-medium-text mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={6}
                    placeholder="Bonjour, je vous contacte au sujet de..."
                    className="w-full bg-slate-100 dark:bg-dark-bg/50 border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-800 dark:text-light-text placeholder:text-slate-400 dark:placeholder:text-medium-text/50 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-all resize-none"
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit"
                    className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-brand-orange to-[#ff8c00] text-white font-bold tracking-wide uppercase text-sm dark:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:dark:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:scale-105 transform transition-all duration-300"
                  >
                    Envoyer le Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info / Socials */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-dark-card border border-slate-200 dark:border-white/10 rounded-2xl p-6 text-center shadow-lg">
                  <div className="p-4 bg-brand-cyan/10 rounded-xl inline-block mb-4 border border-brand-cyan/20">
                    <Icon name="logo" className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">[VOTRE NOM]</h3>
                  <p className="text-sm text-slate-600 dark:text-medium-text">Architecte Bio-Tech</p>
                  <p className="text-xs text-brand-cyan mt-1">Disponible pour des projets</p>
              </div>
              <div className="bg-white dark:bg-dark-card border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Autres canaux</h3>
                <div className="space-y-4">
                   <a href="#" className="flex items-center gap-3 group">
                       <Icon name="linkedin" className="w-6 h-6 text-slate-500 dark:text-medium-text group-hover:text-[#0E76A8] transition-colors" />
                       <span className="text-slate-600 dark:text-medium-text group-hover:text-slate-900 dark:group-hover:text-white transition-colors">LinkedIn</span>
                   </a>
                   <a href="#" className="flex items-center gap-3 group">
                       <Icon name="github" className="w-6 h-6 text-slate-500 dark:text-medium-text group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                       <span className="text-slate-600 dark:text-medium-text group-hover:text-slate-900 dark:group-hover:text-white transition-colors">GitHub</span>
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

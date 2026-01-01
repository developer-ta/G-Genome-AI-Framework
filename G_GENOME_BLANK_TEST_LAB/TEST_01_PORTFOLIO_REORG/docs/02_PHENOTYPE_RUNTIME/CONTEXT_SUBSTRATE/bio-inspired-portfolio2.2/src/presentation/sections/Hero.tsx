
import React from 'react';
import { View } from '../../domain/models';

interface HeroProps {
    onViewChange: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onViewChange }) => {
  return (
    <section className="pt-8 pb-8 md:pt-16 md:pb-12 relative flex flex-col items-center justify-center text-center overflow-hidden" id="hero">
      
      {/* Background Noise Texture (Dark Mode Only) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07] hidden dark:block" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Background Decorative Elements (Dark Mode Only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden dark:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 backdrop-blur-md shadow-lg shadow-slate-300/30 dark:shadow-black/20">
            <span className="text-brand-cyan text-xs font-bold tracking-[0.2em] uppercase">
                Portfolio 2025
            </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
          <span className="block text-slate-900 dark:text-white dark:drop-shadow-xl">Architecte de solutions</span>
          <span className="block bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-cyan bg-clip-text text-transparent pb-2">
            Bio-Inspirées & Web
          </span>
        </h1>
        
        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-gray-400 font-light leading-relaxed">
          Passionné par l'intersection entre la <span className="text-slate-800 dark:text-white font-semibold">biologie</span> et l'<span className="text-slate-800 dark:text-white font-semibold">informatique</span>. <br className="hidden md:block"/>Je conçois des systèmes intelligents et des interfaces web performantes pour visualiser la complexité.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
          <button 
            onClick={() => onViewChange(View.PROJETS)}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-orange to-[#ff8c00] text-white font-bold tracking-wide uppercase text-sm dark:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:dark:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:scale-105 transform transition-all duration-300"
          >
            Voir mes travaux
          </button>
          
          <button 
            onClick={() => onViewChange(View.CONTACT)}
            className="px-8 py-4 rounded-full bg-slate-200/50 dark:bg-white/5 backdrop-blur-md border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-bold tracking-wide uppercase text-sm hover:bg-slate-200 dark:hover:bg-white/10 hover:border-brand-cyan/50 hover:text-brand-cyan transform transition-all duration-300 shadow-lg"
          >
            Me contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

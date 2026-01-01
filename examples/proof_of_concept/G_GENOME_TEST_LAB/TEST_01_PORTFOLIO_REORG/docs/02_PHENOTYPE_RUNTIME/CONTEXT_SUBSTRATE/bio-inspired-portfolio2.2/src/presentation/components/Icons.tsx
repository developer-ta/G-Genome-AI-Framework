
import React from 'react';

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  // Les tailles sont gérées par le viewBox et le className (w-6 h-6 généralement)
  // Les couleurs officielles sont hardcodées dans le fill des SVGs pour respecter l'identité visuelle (Python, C#, Git...)
  
  switch (name) {
    case 'logo':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 6C12 6 15 8 15 12C15 16 12 18 12 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 6C12 6 9 8 9 12C9 16 12 18 12 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <path d="M15 12H19M5 12H9M12 15V19M12 5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'menu':
        return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        );
    case 'close':
        return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        );
    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.881 0-2.6.51-.51 1.258-.656 1.895-.436V8.29c-.637.22-1.385.074-1.895-.436-.516-.516-.658-1.258-.438-1.9L7.65 3.295 2.625 8.318c-.604.604-.604 1.582 0 2.188l10.48 10.478c.604.604 1.582.604 2.188 0l8.256-8.256c.601-.601.601-1.582-.003-2.187z"></path>
        </svg>
      );
    case 'react':
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'python':
      // Logo officiel : Deux serpents, un Bleu (#3776AB) et un Jaune (#FFD43B)
      return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path fill="#3776AB" d="M14.25.75l-.16.18V4.5h-1.58l-.19-.19H6.18l-.18.19v2.53l.18.18h3.35v.94H4.31L1.5 10.96v6.28l2.81 2.81h4.97l.19-.18v-3.57h1.58l.19.19h6.14l.18-.19v-2.53l-.18-.18h-3.35v-.94h5.24l2.81-2.81V3.56L19.22.75h-4.97zm-5.72 2.2c.44 0 .79.36.79.79 0 .44-.36.79-.79.79-.44 0-.79-.36-.79-.79 0-.44.35-.79.79-.79z"/>
           <path fill="#FFD43B" d="M19.69 8.75v6.28l-2.81 2.81h-4.97l-.19.18v3.57h-1.58l-.19-.19h-6.14l-.18.19v2.53l.18.18h3.35v.94h-5.24l-2.81-2.81v-7.41l2.81-2.81h4.97l.19.18v3.57h1.58l.19-.19h6.14l.18.19v2.53l-.18.18h3.35v.94h-5.24l-2.81-2.81v-6.28zm-5.72 10.07c-.44 0-.79-.36-.79-.79 0-.44.36-.79.79-.79.44 0 .79.36.79.79 0 .44-.35-.79-.79-.79z"/>
        </svg>
      );
    case 'csharp':
      // Logo officiel : Hexagone violet (#512BD4) avec lettre C blanche
      return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#512BD4" d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2z"/>
          <path fill="#FFFFFF" d="M16 8.5h-1v-1h-1.5v1H12v1.5h1.5v1H12v1.5h1.5v1h-1.5v1.5h1.5v1h1v-1h1.5v-1.5H16v-1h1v-1.5h-1v-1h1.5v-1.5H16v-1zm-4.5 9c-3 0-4.5-2-4.5-5.5s1.5-5.5 4.5-5.5c1.5 0 2.5.5 3 1l-1 1.5c-.5-.5-1-.5-2-.5-1.5 0-2.5 1.5-2.5 3.5S10 15 11.5 15c1 0 1.5 0 2-.5l1 1.5c-.5.5-1.5 1.5-3 1.5z"/>
        </svg>
      );
    case 'ai':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2a10 10 0 0 0-7.07 17.07l.76-1.48A8.34 8.34 0 0 1 12 3.66a8.34 8.34 0 0 1 6.31 13.93l.76 1.48A10 10 0 0 0 12 2zm1 3.67a1.67 1.67 0 1 0 0 3.33 1.67 1.67 0 0 0 0-3.33zm-4 1.33a1.67 1.67 0 1 0 0 3.33 1.67 1.67 0 0 0 0-3.33zm2 3a1.67 1.67 0 1 0 0 3.33 1.67 1.67 0 0 0 0-3.33zm4-1.33a1.67 1.67 0 1 0 0 3.33 1.67 1.67 0 0 0 0-3.33zm-8 4a1.67 1.67 0 1 0 0 3.33 1.67 1.67 0 0 0 0-3.33zm4 1.33a1.67 1.67 0 1 0 0 3.33 1.67 1.67 0 0 0 0-3.33zm4-1.33a1.67 1.67 0 1 0 0 3.33 1.67 1.67 0 0 0 0-3.33zM12 18.33a1.67 1.67 0 1 0 0 3.33 1.67 1.67 0 0 0 0-3.33z"/>
        </svg>
      );
    case 'deeplearning':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="2.5" />
            <circle cx="6" cy="18" r="2.5" />
            <circle cx="18" cy="6" r="2.5" />
            <circle cx="18" cy="18" r="2.5" />
            <circle cx="12" cy="12" r="2.5" />
            <path d="M8.2 7.8l2.1 2.5M13.7 13.7l2.1 2.5M8.2 16.2l2.1-2.5M13.7 10.3l2.1-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'docker':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13,7h-2.5V4.5c0-0.28-0.22-0.5-0.5-0.5h-2c-0.28,0-0.5,0.22-0.5,0.5V7H5c-0.28,0-0.5,0.22-0.5,0.5v2c0,0.28,0.22,0.5,0.5,0.5h2.5 v2.5c0,0.28,0.22,0.5,0.5,0.5h2c0.28,0,0.5-0.22,0.5-0.5V10H13c0.28,0,0.5-0.22,0.5-0.5v-2C13.5,7.22,13.28,7,13,7z" opacity=".3"/>
            <path d="M22.42,12.39c-0.5-0.21-3.32-1.35-3.32-1.35c-0.27-0.12-0.57-0.1-0.81,0.06c-0.42,0.27-1.12,0.68-1.42,0.85 L16.8,11.5c0.68-0.28,1.75-0.78,1.75-0.78c0.28-0.11,0.41-0.44,0.3-0.72c-0.11-0.28-0.43-0.4-0.71-0.29l-2.09,0.9l-0.54-0.22 c0.67-1.07,1.82-1.84,3.15-2.01c0.16-0.02,0.29-0.13,0.33-0.29c0.05-0.16-0.02-0.33-0.16-0.43c-2.45-1.72-5.75-1.39-7.85,0.7 c-0.65,0.65-1.1,1.44-1.32,2.3c-0.36-0.14-0.72-0.28-1.07-0.43c-0.01-0.21-0.04-0.43-0.08-0.64C8.42,9.39,8.23,9.22,8.01,9.22H6.42 V7.63c0-0.22-0.17-0.4-0.39-0.4h-2c-0.22,0-0.4,0.18-0.4,0.4v1.59H2.03c-0.22,0-0.39,0.17-0.39,0.39v2c0,0.22,0.18,0.4,0.4,0.4h1.59 v2.46c-1.4,0.74-2.18,2.33-1.84,3.9c0.32,1.47,1.52,2.6,3,2.83c2.09,0.33,4-1.04,4.42-3.03l5.07,2c0.2,0.08,0.43,0.01,0.56-0.17 c0.13-0.18,0.1-0.42-0.06-0.56c-0.34-0.31-0.95-0.91-1.28-1.26c0.5-0.22,0.98-0.49,1.42-0.8c0.19,0.31,0.45,0.57,0.77,0.77 c0.37,0.23,0.8,0.35,1.22,0.35c0.67,0,1.31-0.28,1.76-0.78C23.09,16.03,23.19,13.79,22.42,12.39z"/>
        </svg>
      );
    case 'settings':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'chevron-down':
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      );
    case 'neuro':
       return (
         <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path d="M4.5 12.75l6 6 9-13.5M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(15 12 12)"></path>
           <path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
           <circle cx="12" cy="12" fill="currentColor" r="2.5"></circle>
           <path d="M12 9.5V4M12 14.5V20M9.5 12H4M14.5 12H20M7 7l-2-2M17 7l2-2M7 17l-2 2M17 17l2 2"></path>
         </svg>
       );
    case 'user':
        return (
            <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    case 'ui':
        return (
            <svg className={className} fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.12a2.25 2.25 0 002.15 2.88h12.15a2.25 2.25 0 002.15-2.88l-2.412-7.744A2.25 2.25 0 0015.088 3.75H13.5M9 3.75L12 9l3-5.25M9 3.75v.75m3-3v.75m3-3v.75m-6 3.75h3.75m-3.75 0L9 16.5m3-3.75l-1.5 6.75m-1.5-6.75L9 16.5m6 3.75h.75m-1.5-1.5h.75m-1.5-1.5h.75m-1.5-1.5h.75m-1.5-1.5h.75M9 16.5h.75m-1.5-1.5h.75m-1.5-1.5h.75m-1.5-1.5h.75m-1.5-1.5h.75m-1.5-1.5h.75m-1.5-1.5h.75m-1.5-1.5h.75" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    case 'vision':
        return (
             <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.036 12.322a1.012 1.012 0 010-.639l4.43-4.44a1.012 1.012 0 011.428 0l4.44 4.43a1.012 1.012 0 010 .639l-4.44 4.43a1.012 1.012 0 01-1.428 0l-4.43-4.44z" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12.75 9l4.43 4.44a1.012 1.012 0 010 .639l-4.43 4.44a1.012 1.012 0 01-1.428 0l-4.44-4.43a1.012 1.012 0 010-.639l4.44-4.43a1.012 1.012 0 011.428 0z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    case 'chart':
        return (
            <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    case 'stars':
        return (
             <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.502L16.5 21.75l-.398-1.248a3.375 3.375 0 00-2.455-2.456L12.75 18l1.248-.398a3.375 3.375 0 002.455-2.456L16.5 14.25l.398 1.248a3.375 3.375 0 002.456 2.456l1.248.398-1.248.398a3.375 3.375 0 00-2.456 2.456z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    case 'network':
        return (
             <svg className={className} fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5M19.5 8.25h-1.5m-15 3.75H3m18 0h-1.5m-15 3.75H3m18 0h-1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 9a3 3 0 100 6 3 3 0 000-6z" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 9a3 3 0 100 6 3 3 0 000-6zM12 12l-.394-.394a3 3 0 00-4.242 0l-1.415 1.414M12 12l.394-.394a3 3 0 014.242 0l1.415 1.414" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    case 'git-merge':
        return (
            <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
                <circle cx="6" cy="6" r="2"></circle>
                <circle cx="18" cy="18" r="2"></circle>
                <path d="M18 6a3 3 0 00-3-3H9a3 3 0 00-3 3v0" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    case 'terminal':
        return (
            <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        );
    case 'linkedin':
        return (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
        );
    case 'github':
        return (
            <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
        );
    case 'moon':
        return (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
        );
    case 'sun':
        return (
             <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
        );
    default:
      return null;
  }
};

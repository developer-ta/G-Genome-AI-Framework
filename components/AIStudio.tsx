import React, { useState, useRef } from 'react';
import { generateEditedImage } from '../services/geminiService';
import { Card } from './Card';
import { Upload, Wand2, Loader2, Image as ImageIcon, Download } from 'lucide-react';

export const AIStudio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setGeneratedImage(null); // Reset generated image when new one is uploaded
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) return;

    setIsLoading(true);
    setError(null);

    try {
      // Extract base64 data and mime type
      const [mimeTypePrefix, base64Data] = selectedImage.split(';base64,');
      const mimeType = mimeTypePrefix.split(':')[1];

      const result = await generateEditedImage(base64Data, mimeType, prompt);
      
      if (result) {
        setGeneratedImage(result);
      } else {
        setError("L'IA n'a pas renvoyé d'image. Veuillez réessayer.");
      }
    } catch (err) {
      setError("Une erreur s'est produite lors de la génération. Vérifiez votre clé API.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 pb-20 max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Studio IA (Nano Banana)</h2>
        <p className="text-slate-500">Transformez vos photos de rénovation avec Gemini 2.5 Flash Image.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <Card title="Image Originale" className="h-full">
            <div className="flex flex-col h-full">
              <div 
                className={`border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center min-h-[300px] bg-slate-50 relative overflow-hidden transition-all ${!selectedImage ? 'hover:bg-slate-100 hover:border-blue-300 cursor-pointer' : ''}`}
                onClick={() => !selectedImage && fileInputRef.current?.click()}
              >
                {selectedImage ? (
                  <>
                    <img src={selectedImage} alt="Original" className="w-full h-full object-cover absolute inset-0" />
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(null);
                        setGeneratedImage(null);
                        if (fileInputRef.current) fileInputRef.current.value = '';
                      }}
                      className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-red-50 text-slate-600 hover:text-red-500 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                  </>
                ) : (
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-8 h-8 text-blue-500" />
                    </div>
                    <p className="text-slate-700 font-medium mb-1">Cliquez pour uploader</p>
                    <p className="text-slate-400 text-sm">JPG, PNG jusqu'à 5MB</p>
                  </div>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleImageUpload}
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Instruction (Prompt)</label>
                <div className="relative">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ex: Ajoutez une isolation extérieure en bois, rendez le ciel bleu, ajoutez des panneaux solaires..."
                    className="w-full p-4 pr-12 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none resize-none h-32 text-slate-700"
                  />
                  <div className="absolute bottom-3 right-3 text-slate-400">
                    <Wand2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={!selectedImage || !prompt || isLoading}
                className={`mt-6 w-full py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all shadow-md ${
                  !selectedImage || !prompt || isLoading
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:scale-[1.02]'
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Génération en cours...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5" />
                    Générer avec IA
                  </>
                )}
              </button>
              
              {error && (
                <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                  {error}
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Output Section */}
        <div className="h-full">
           <Card title="Résultat" className="h-full flex flex-col">
              <div className="flex-1 min-h-[400px] bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center relative overflow-hidden">
                {generatedImage ? (
                  <>
                    <img src={generatedImage} alt="Generated" className="w-full h-full object-contain" />
                    <div className="absolute bottom-4 right-4 flex gap-2">
                       <a 
                        href={generatedImage} 
                        download="renov-ai-result.png"
                        className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors backdrop-blur-sm"
                        title="Télécharger"
                       >
                         <Download className="w-5 h-5" />
                       </a>
                    </div>
                  </>
                ) : (
                   <div className="text-center text-slate-400 max-w-xs px-6">
                      {isLoading ? (
                        <div className="flex flex-col items-center gap-4">
                          <div className="relative">
                            <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-500 rounded-full animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Wand2 className="w-6 h-6 text-blue-500 animate-pulse" />
                            </div>
                          </div>
                          <p className="font-medium text-slate-500 animate-pulse">L'IA réimagine votre espace...</p>
                        </div>
                      ) : (
                        <>
                          <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p>Le résultat généré par Gemini apparaîtra ici.</p>
                        </>
                      )}
                   </div>
                )}
              </div>
              
              {generatedImage && (
                <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100 text-green-800 text-sm">
                  <span className="font-semibold">Succès !</span> L'image a été modifiée selon vos instructions. Vous pouvez télécharger le résultat ou essayer une nouvelle commande.
                </div>
              )}
           </Card>
        </div>
      </div>
    </div>
  );
};
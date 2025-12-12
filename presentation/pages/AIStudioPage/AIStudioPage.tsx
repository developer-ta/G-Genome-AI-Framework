import React from 'react';
import { useAIStudioController } from '../../hooks/useAIStudioController';
import { Card } from '../../components/Card/Card';
import { Upload, Wand2, Loader2, Image as ImageIcon, Download, X } from 'lucide-react';
import './AIStudioPage.css';

export const AIStudioPage: React.FC = () => {
  const {
    selectedImage,
    generatedImage,
    prompt,
    setPrompt,
    isLoading,
    error,
    fileInputRef,
    handleImageUpload,
    handleGenerate,
    triggerFileUpload,
    clearSelectedImage,
  } = useAIStudioController();

  return (
    <div className="aistudio-page-container">
      <div className="aistudio-header">
        <h2 className="aistudio-title">Studio IA (Nano Banana)</h2>
        <p className="aistudio-subtitle">Transformez vos photos de rénovation avec Gemini 2.5 Flash Image.</p>
      </div>

      <div className="aistudio-grid">
        {/* Input Section */}
        <div className="aistudio-input-section">
          <Card title="Image Originale">
            <div className="aistudio-card-content">
              <div 
                className={`image-uploader ${!selectedImage ? 'upload-active' : ''}`}
                onClick={() => !selectedImage && triggerFileUpload()}
              >
                {selectedImage ? (
                  <>
                    <img src={selectedImage} alt="Original" className="uploaded-image" />
                    <button 
                      onClick={clearSelectedImage}
                      className="clear-image-btn"
                      aria-label="Remove image"
                    >
                      <X size={20} />
                    </button>
                  </>
                ) : (
                  <div className="upload-prompt">
                    <div className="upload-icon-wrapper">
                      <Upload className="upload-icon" />
                    </div>
                    <p className="upload-prompt-title">Cliquez pour uploader</p>
                    <p className="upload-prompt-subtitle">JPG, PNG jusqu'à 5MB</p>
                  </div>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="file-input-hidden" 
                  accept="image/*" 
                  onChange={handleImageUpload}
                />
              </div>

              <div className="prompt-section">
                <label className="prompt-label">Instruction (Prompt)</label>
                <div className="prompt-textarea-wrapper">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ex: Ajoutez une isolation extérieure en bois, rendez le ciel bleu, ajoutez des panneaux solaires..."
                    className="prompt-textarea"
                  />
                  <div className="prompt-icon-wrapper">
                    <Wand2 className="prompt-icon" />
                  </div>
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={!selectedImage || !prompt || isLoading}
                className="generate-btn"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="spinner-icon" />
                    Génération en cours...
                  </>
                ) : (
                  <>
                    <Wand2 size={20} />
                    Générer avec IA
                  </>
                )}
              </button>
              
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Output Section */}
        <div className="aistudio-output-section">
           <Card title="Résultat">
              <div className="result-image-container">
                {generatedImage ? (
                  <>
                    <img src={generatedImage} alt="Generated" className="generated-image" />
                    <div className="result-actions">
                       <a 
                        href={generatedImage} 
                        download="renov-ai-result.png"
                        className="download-btn"
                        title="Télécharger"
                       >
                         <Download size={20} />
                       </a>
                    </div>
                  </>
                ) : (
                   <div className="result-placeholder">
                      {isLoading ? (
                        <div className="loading-indicator">
                          <div className="loading-spinner-wrapper">
                            <div className="loading-spinner"></div>
                            <div className="loading-spinner-icon">
                              <Wand2 size={24} />
                            </div>
                          </div>
                          <p className="loading-text">L'IA réimagine votre espace...</p>
                        </div>
                      ) : (
                        <>
                          <ImageIcon className="placeholder-icon" />
                          <p>Le résultat généré par Gemini apparaîtra ici.</p>
                        </>
                      )}
                   </div>
                )}
              </div>
              
              {generatedImage && (
                <div className="success-message">
                  <strong>Succès !</strong> L'image a été modifiée. Vous pouvez la télécharger ou essayer une nouvelle commande.
                </div>
              )}
           </Card>
        </div>
      </div>
    </div>
  );
};

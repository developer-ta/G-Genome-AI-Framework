import React, { useState, useRef } from 'react';
import { generateEditedImage } from '../../infrastructure/api/geminiService';

export const useAIStudioController = () => {
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

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };
  
  const clearSelectedImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage(null);
    setGeneratedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return {
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
    clearSelectedImage
  };
};
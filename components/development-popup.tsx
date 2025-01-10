import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface DevelopmentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DevelopmentPopup: React.FC<DevelopmentPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-xl relative"
      >
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X size={24} />
        </button>
        
        <div className="text-center">
          <div className="mb-4">
            <span className="text-4xl">🚧</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Under Development
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            TAP is currently under development and will be available for use soon.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Meanwhile, we&apos;d love to hear your thoughts! Please share your views in our survey section.
          </p>
          <button
            onClick={() => {
              onClose();
              document.getElementById('survey')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Take Survey
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DevelopmentPopup;
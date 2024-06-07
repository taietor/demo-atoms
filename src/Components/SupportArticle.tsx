import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface SupportArticleProps {
  title: string;
  author: string;
  showArrowIcon?: boolean;
}

const SupportArticle: React.FC<SupportArticleProps> = ({ title, author, showArrowIcon }) => {
  return (
    <div className="relative bg-[#F4F1DE] rounded-lg overflow-hidden p-12 flex sm:flex-row flex-col justify-between items-center">
      <div className="text-left font-anybody">
        <h3 className="font-bold text-xl sm:text-5xl mb-2">{title}</h3>
      </div>
      <div className="text-right flex items-center font-anybody">
        <p className="text-lg mr-2">{author}</p>
        {showArrowIcon && (
          <div className="rounded-full w-10 h-10 bg-white flex items-center justify-center cursor-pointer">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportArticle;
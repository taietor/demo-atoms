import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AudioWaveform from './AudioWaveform';
import SupportArticle from './SupportArticle';

interface ArticleProps {
  title: string;
  author: string;
  date?: string;
  imageUrl?: string;
  publisherImage?: string;
  className?: string;
  titleSize?: string;
  category?: string;
  showArrowIcon?: boolean;
  audioWaveform?: React.ReactNode;
}


const Article: React.FC<ArticleProps> = ({ title, author, date, imageUrl, publisherImage, className, titleSize, category, showArrowIcon,audioWaveform }) => {
    return ( 
        <div className={`relative bg-white rounded-lg overflow-hidden ${className}`}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
            style={{ transition: 'filter 0.3s ease-in-out' }}
            onMouseOver={(e) => { e.currentTarget.style.filter = 'brightness(90%)'; }}
            onMouseOut={(e) => { e.currentTarget.style.filter = 'brightness(100%)'; }}
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="text-white p-4 w-full font-anybody">
            {audioWaveform}
            <button className="bg-blue-500 text-white px-2 py-1 rounded mt-10 rounded-md border border-black shadow-button text-xs sm:text-sm md:text-base lg:text-lg">
              {category}
            </button>
            <h3 className="font-bold mb-2 text-base sm:text-sm md:text-base lg:text-4xl"> {/* Utilizzo text-2xl per desktop */}
              {title}
            </h3>
            <div className="flex items-center mt-2">
              <img src={publisherImage} alt="Publisher" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full mr-2" />
              <div>
                <p className="text-xs sm:text-sm md:text-base lg:text-1xl font-semibold">{author}</p> {/* Utilizzo text-2xl per desktop */}
                <p className="text-xs sm:text-sm md:text-base lg:text-1xl text-gray-300">{date}</p> {/* Utilizzo text-2xl per desktop */}
              </div>
            </div>
            {showArrowIcon && (
              <div className="flex mt-4">
                <div className="rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
  );
};

const Articles: React.FC = () => {
    const supportArticle = {
        title: 'Il tuo supporto è fondamentale',
        author: 'Dai il tuo contributo',
        showArrowIcon: true,
      };
  const articles = [
    {
      title: 'Roccella Jonica, la Lampedusa che l\'Italia ignora',
      author: 'Alessandro Puglia',
      date: '20 Giugno 2022',
      imageUrl: '/img/img1.jpg',
      publisherImage: '/img/img1aut.jpg',
      className: 'lg:h-[600px] h-64 md:h-80', // Dimensioni responsive per img1
      titleSize: "50px",
      category: 'Migranti',
    },
    {
      title: 'Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura',
      author: 'Ugo Lombi',
      date: '14 Luglio 2022',
      imageUrl: '/img/img2.jpg',
      publisherImage: '/img/img2aut.png',
      className: 'lg:h-[840px] h-48 md:h-64', // Dimensioni responsive per img2
      titleSize: "32px",
      category: 'Allarmi',
      showArrowIcon: true,
    },
    {
      title: 'Gli startupper? Li trovi al bistrot.Così il DumBo incuba relazioni',
      author: 'Diletta Grella',
      date: '14 Luglio 2022',
      imageUrl: '/img/img3.jpg',
      publisherImage: '/img/img3aut.jpg',
      className: 'lg:h-[415px] h-48 md:h-64 lg:w-full', // Dimensioni responsive per img3
      titleSize: "22px",
      category: 'Esperimenti',
      showArrowIcon: true,
      audioWaveform: <AudioWaveform />,
    },
    {
      title: 'Nelle città italiane tutti in piazza per e con Kiev',
      author: 'Anna Spena',
      date: '14 Luglio 2022',
      imageUrl: '/img/img4.png',
      publisherImage: '/img/img4aut.jpg',
      className: 'lg:h-[415px] h-48 md:h-64 lg:w-full', // Dimensioni responsive per img4
      titleSize: "22px",
      category: 'Ucraina',
      showArrowIcon: true,
    },
    {
        title: '“Qui Odessa”, fotografie, progetti e solidarietà',
        author: 'Di Redazione',
        date: '13 Luglio 2022 ',
        imageUrl: '/img/img5.jpg',
        publisherImage: '/img/img5aut.png',
        className: 'lg:h-[415px] h-48 md:h-64 lg:w-full', // Dimensioni responsive per img4
        titleSize: "22px",
        category: 'Progetto Arca',
        showArrowIcon: true,
      },
      {
        title: 'Storie fra ragazzi permeate di violenza. A Napoli 12enne sfregiata da 17enne',
        author: 'Di Luca Cereda',
        date: '13 Luglio 2022  ',
        imageUrl: '/img/img6.jpg',
        publisherImage: '/img/img6aut.jpg',
        className: 'lg:h-[415px] h-48 md:h-64 lg:w-full', // Dimensioni responsive per img4
        titleSize: "22px",
        category: 'Adolescenti',
        showArrowIcon: true,
      },
      {
        title: '“Co-agitiamo”, Tiggiano una cooperativa di comunità contro lo spopolamento',
        author: 'Di Emiliano Moccia',
        date: '12 Luglio 2022   ',
        imageUrl: '/img/img7.jpg',
        publisherImage: '/img/img7aut.jpg',
        className: 'lg:h-[415px] h-48 md:h-64 lg:w-full', // Dimensioni responsive per img4
        titleSize: "22px",
        category: 'Economia Civile',
        showArrowIcon: true,
      },
      {
        title: 'Troppi abusi nello sport minorile, il governo interviene',
        author: 'Di Diletta Grella',
        date: '7 Luglio 2022    ',
        imageUrl: '/img/img8.jpg',
        publisherImage: '/img/img8aut.jpg',
        className: 'lg:h-[415px] h-48 md:h-64 lg:w-full', // Dimensioni responsive per img4
        titleSize: "22px",
        category: 'Sport',
        showArrowIcon: true,
        audioWaveform: <AudioWaveform />,
      },
      {
        title: 'Donne e nuove generazioni: con loro riparte l’Italia',
        author: 'Di Anna Spena',
        date: '7 Luglio 2022    ',
        imageUrl: '/img/img9.jpg',
        publisherImage: '/img/img9aut.jpg',
        className: 'lg:h-[415px] h-48 md:h-64 lg:w-full', // Dimensioni responsive per img4
        titleSize: "22px",
        category: 'Società',
        showArrowIcon: true,
      },
  ];

  return (
    <div className="grid grid-cols-1 gap-1 font-anybody md:grid-cols-2 lg:grid-cols-4">
    <div className="col-span-1 lg:col-span-4">
      <Article {...articles[0]} />
    </div>
    <div className="col-span-1 md:col-span-1 lg:col-span-2">
      <Article {...articles[1]} />
    </div>
    <div className="col-span-1 md:col-span-1 lg:col-span-2 grid grid-rows-2 gap-1">
      <Article {...articles[2]} />
      <Article {...articles[3]} />
    </div>
    <div className="col-span-1 lg:col-span-4">
      <SupportArticle {...supportArticle} />
    </div>
    <div className="col-span-1 lg:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-1">
      <Article {...articles[4]} />
      <Article {...articles[5]} />
      <Article {...articles[6]} />
    </div>
    <div className="col-span-1 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-1">
      <Article {...articles[7]} />
      <Article {...articles[8]} />
    </div>
  </div>
  );
};

export default Articles;

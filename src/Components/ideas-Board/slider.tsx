'use client';

import { useState } from 'react';
import { baseSlider_Data } from '@/Data/baseSlider';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

type SliderItem = {
  image: string;
  alt?: string; // alt is optional
};

const Base_Slider: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderData: SliderItem[] = baseSlider_Data;

  const openLightbox = (idx: number) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };
  const closeLightbox = () => setIsOpen(false);

  const showPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex + sliderData.length - 1) % sliderData.length);
  };
  const showNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  return (
    <>
      {/* Thumbnail grid */}
      <div className="p-5 md:p-10">
        <div className="grid grid-cols-3 gap-2">
          {sliderData.map((item, idx) => (
            <div key={idx} className="cursor-pointer">
              <img
                src={item.image}
                alt={item.alt ?? `Slide ${idx + 1}`}
                className="w-full h-auto object-cover"
                onClick={() => openLightbox(idx)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl p-2"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <IoMdClose />
          </button>

          <button
            className="absolute left-4 text-white text-4xl p-2"
            onClick={showPrev}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>

          <img
            src={sliderData[currentIndex].image}
            alt={sliderData[currentIndex].alt ?? `Slide ${currentIndex + 1}`}
            className="max-h-[70vh] max-w-[50rem] w-full"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 text-white text-4xl p-2"
            onClick={showNext}
          >
            <MdOutlineKeyboardArrowRight />
          </button>

          <div className="absolute bottom-4 right-4 text-white text-sm">
            {currentIndex + 1} / {sliderData.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Base_Slider;

'use client';
import { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { HomeSlider_Data } from '@/Data/homeSlider';

// Define the shape of your data
// baseSlider.ts

export type baseSlider_data = {
  image: string;
  alt?: string; // <-- Add this line
};

const Slider: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const sliderData: SliderItem[] = HomeSlider_Data;

  const openLightbox = (idx: number): void => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  const closeLightbox = (): void => setIsOpen(false);

  const showPrev = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + sliderData.length - 1) % sliderData.length);
  };

  const showNext = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  return (
    <>
      {/* Thumbnail grid */}
      <div className="p-5 md:p-10">
        <div className="grid grid-cols-3 gap-2">
          {baseSlider_Data.map((item, idx) => (
            <div key={idx} className="cursor-pointer">
              <img
                src={item.image}
                alt={item.alt || `Slide ${idx + 1}`}
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
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl p-2"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
          >
            <IoMdClose />
          </button>

          {/* Prev arrow */}
          <button
            className="absolute left-4 text-white text-4xl p-2"
            onClick={showPrev}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>

          {/* Current image */}
          <img
            src={baseSlider_Data[currentIndex].image}
            alt={baseSlider_Data[currentIndex].alt || `Slide ${currentIndex + 1}`}
            className="max-h-[70vh] max-w-[50rem] w-full"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next arrow */}
          <button
            className="absolute right-4 text-white text-4xl p-2"
            onClick={showNext}
          >
            <MdOutlineKeyboardArrowRight />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 right-4 text-white text-sm">
            {currentIndex + 1} / {baseSlider_Data.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Base_Slider;

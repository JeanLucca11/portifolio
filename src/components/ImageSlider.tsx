import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button variant="outline" size="icon" onClick={prevSlide} className="bg-white/80">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={nextSlide} className="bg-white/80">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-primary" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
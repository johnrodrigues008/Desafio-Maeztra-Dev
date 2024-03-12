import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Fullbanner.css";

import iconPrev from "../../assets/icons/icon-prev.webp";
import iconNext from "../../assets/icons/icon-next.webp";

import BannerCarouselDesk from "../../assets/image/banner-header-desktop.webp";
import BannerCarouselMobile from "../../assets/image/banner-header-mobile.webp";

const Fullbanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const slides = [
    {
      imageUrl: isMobile ? BannerCarouselMobile : BannerCarouselDesk,
      title: "Promoções de Outono",
      description:
        "Confiras os melhores looks para combinar com você nesse Outono",
      buttonText: "Conferir",
    },
    {
      imageUrl: isMobile ? BannerCarouselMobile : BannerCarouselDesk,
      title: "Promoções de Outono",
      description:
        "Confiras os melhores looks para combinar com você nesse Outono",
      buttonText: "Conferir",
    },
    {
      imageUrl: isMobile ? BannerCarouselMobile : BannerCarouselDesk,
      title: "Promoções de Outono",
      description:
        "Confiras os melhores looks para combinar com você nesse Outono",
      buttonText: "Conferir",
    },
    {
      imageUrl: isMobile ? BannerCarouselMobile : BannerCarouselDesk,
      title: "Promoções de Outono",
      description:
        "Confiras os melhores looks para combinar com você nesse Outono",
      buttonText: "Conferir",
    },
    {
      imageUrl: isMobile ? BannerCarouselMobile : BannerCarouselDesk,
      title: "Promoções de Outono",
      description:
        "Confiras os melhores looks para combinar com você nesse Outono",
      buttonText: "Conferir",
    },
  ];

  const nextSlide = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => {
        setTransitioning(false);
      }, 1000);
    }
  };

  const prevSlide = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => {
        setTransitioning(false);
      }, 1000);
    }
  };

  const goToSlide = (index: number) => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => {
        setTransitioning(false);
      }, 1000);
    }
  };

  return (
    <section className="FullBanner relative">
      <div style={{ minHeight: "280px" }} className="fullbanner w-full">
        <img
          className={`w-full ${
            transitioning
              ? "transition-opacity duration-1000 ease-in-out opacity-0"
              : ""
          }`}
          src={slides[currentSlide].imageUrl}
          alt={`Carousel Slide ${currentSlide + 1}`}
          onLoad={() => setTransitioning(false)}
        />
      </div>
      <div className="absolute inset-0 flex justify-center flex-col  px-[63px] sm:px-[83px] lg:ml-[7%]">
        <h2 className="-text--color-5-500 Montserrat-Bold text-[30px] max-w-[220px] sm:max-w-[250px] sm:text-[35px] lg:max-w-[471px] lg:text-[40px]">
          {slides[currentSlide].title}
        </h2>
        <p className="-text--color-5-500 Montserrat-Regular mt-[24px] max-w-[239px] sm:max-w-[335px] sm:text-[18px] lg:text-[20px] lg:max-w-[467px] lg:my-[40px]">
          {slides[currentSlide].description}
        </p>
        <button
          className={`-bg--color-1-500 -text--color-5-500 Montserrat-Bold text-[14px] w-[76px] h-[28px] mt-[16px] lg:text-[16px] lg:rounded-[10px] lg:w-[128px] lg:h-[48px] ${
            transitioning
              ? "transition-opacity duration-1000 ease-in-out opacity-0"
              : ""
          }`}
        >
          {slides[currentSlide].buttonText}
        </button>
      </div>

      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
        {slides.map((_slide, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full focus:outline-none border -border--color-1-500 ${
              currentSlide === index ? "-bg--color-1-500" : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 px-4 py-2 rounded-full text-white"
        onClick={prevSlide}
      >
        <img
          className="w-[19px]"
          src={iconPrev}
          alt="Icone de prev para voltar para o banner anterior."
        />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 px-4 py-2 rounded-full text-white"
        onClick={nextSlide}
      >
        <img
          className="w-[19px]"
          src={iconNext}
          alt="Icone de next para seguir para o proximo banner."
        />
      </button>
    </section>
  );
};

export default Fullbanner;

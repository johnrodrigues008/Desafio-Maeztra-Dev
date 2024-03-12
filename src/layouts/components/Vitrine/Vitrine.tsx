import React, { useEffect, useState, useRef } from "react";
import "./Vitrini.css";

import iconPrev from "../../assets/icons/icon-prev.webp";
import iconNext from "../../assets/icons/icon-next.webp";

import BannerFauzSuede from "../../assets/image/vitrine-Faux-Suede-red.webp";
import BannerFauzRose from "../../assets/image/ruched-rose-print-mini-skirt-red.webp";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  colors: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Faux Suede Mini Skirt",
    price: 500.0,
    description:
      "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
    image: BannerFauzSuede,
    colors: ["#deab71f4", "#995c17", "#6497D3", "#3C3B79"],
  },
  {
    id: 2,
    name: "Ruched Rose Print Mini Skirt",
    price: 320.0,
    description:
      "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
    image: BannerFauzRose,
    colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"],
  },
  {
    id: 3,
    name: "Faux Suede Mini Skirt",
    price: 500.0,
    description:
      "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
    image: BannerFauzSuede,
    colors: ["#DEsC71", "#D37164", "#6497D3", "#3C3B79"],
  },
  {
    id: 4,
    name: "Ruched Rose Print Mini Skirt",
    price: 320.0,
    description:
      "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
    image: BannerFauzRose,
    colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"],
  },
  {
    id: 5,
    name: "Faux Suede Mini Skirt",
    price: 500.0,
    description:
      "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
    image: BannerFauzSuede,
    colors: ["#DEAf71", "#DEAC71", "#6497D3", "#3C3B79"],
  },
  {
    id: 5,
    name: "Faux Suede Mini Skirt",
    price: 500.0,
    description:
      "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
    image: BannerFauzSuede,
    colors: ["#DEAf71", "#DEAC71", "#6497D3", "#3C3B79"],
  },
  {
    id: 5,
    name: "Faux Suede Mini Skirt",
    price: 500.0,
    description:
      "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
    image: BannerFauzSuede,
    colors: ["#DEAf71", "#DEAC71", "#6497D3", "#3C3B79"],
  },
  {
    id: 5,
    name: "Faux Suede Mini Skirt",
    price: 500.0,
    description:
      "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
    image: BannerFauzSuede,
    colors: ["#DEAf71", "#DEAC71", "#6497D3", "#3C3B79"],
  },
];

const Vitrine: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setData(products);
  }, []);

  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current)
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current)
      carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <section className="w-full h-[100vh] mt-[80px] flex  items-center justify-center">
      <div className="h-full container relative flex flex-col justify-center">
        <div>
          <h2 className="Titillium-Bold text-[32px] text-center mb-[24px]">
            As Mais Pedidas
          </h2>
        </div>
        <div
          className="carousel h-full px-[38px] overflow-hidden"
          ref={carousel}
        >
          {data.map((item) => {
            const { id, name, price, description, image } = item;
            return (
              <div className="item overflow-hidden" key={id}>
                <div className="image">
                  <img src={image} alt={name} />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                  <span className="description">{description}</span>
                  <span className="price">U$ {price}</span>
                </div>
              </div>
            );
          })}
          <div className="mt-auto mb-auto">
            <button
              className="absolute left-5 top-1/2 transform -translate-y-1/2"
              onClick={handleLeftClick}
            >
              <img className="w-[20px]" src={iconPrev} alt="Scroll Left" />
            </button>
            <button
              className="absolute right-5 top-1/2 transform -translate-y-1/2"
              onClick={handleRightClick}
            >
              <img className="w-[20px]" src={iconNext} alt="Scroll Right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vitrine;

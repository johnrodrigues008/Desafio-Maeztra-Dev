import React, { useEffect, useState, useRef } from "react";
import "./Vitrini.css";

import iconPrev from "../../assets/icons/icon-prev.webp";
import iconNext from "../../assets/icons/icon-next.webp";

import BannerFauzSuede from "../../assets/image/vitrine-Faux-Suede-red.webp";
import BannerFauzRose from "../../assets/image/ruched-rose-print-mini-skirt-red.webp";

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
];

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  colors: string[];
}

const Vitrine: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [selectedColors, setSelectedColors] = useState<{
    [key: number]: string | null;
  }>({});
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

  const handleColorClick = (productId: number, color: string) => {
    setSelectedColors((prevSelectedColors) => ({
      ...prevSelectedColors,
      [productId]: color,
    }));
  };

  if (!data || !data.length) return null;

  return (
    <section className="w-full mt-[80px] flex  items-center justify-center">
      <div className="h-full container relative flex flex-col justify-center">
        <div>
          <h2 className="Titillium-Bold text-[32px] text-center mb-[24px]">
            As Mais Pedidas
          </h2>
        </div>
        <div className="carousel px-[38px] overflow-hidden" ref={carousel}>
          {data.map((item) => {
            const { id, name, price, description, image, colors } = item;
            const selectedColor = selectedColors[id] || null;
            return (
              <div className="item overflow-hidden" key={id}>
                <div className="image">
                  <img src={image} alt={name} />
                </div>

                <div className="flex flex-col px-[20px]">
                  <div className="flex mt-[8px]">
                    {colors.map((color) => (
                      <button
                        key={color}
                        className={`w-6 h-6 mr-2 rounded-[4px] mt-[8px] ${
                          selectedColor === color
                            ? "border-2 border-gray-600"
                            : ""
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorClick(id, color)}
                        aria-label={`Cor ${color}`}
                      ></button>
                    ))}
                  </div>
                  <span className="Titillium-Bold -text--color-2-900 text-[20px] mb-[8px]">
                    R$ {price}
                  </span>
                  <span className="Titillium-Regular text-[16px] mb-[8px]">
                    {name}
                  </span>
                  <span className="text-gray-600 text-[12px] mb-[8px]">
                    {description}
                  </span>
                  <button
                    role="Adicionar ao carrinho"
                    className="-bg--color-1-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            );
          })}
          <div className="mt-auto mb-auto">
            <button
              className="absolute left-5 top-1/2 transform -translate-y-1/2"
              onClick={handleLeftClick}
              aria-label="Rolar para a esquerda"
            >
              <img className="w-[20px]" src={iconPrev} alt="Scroll Left" />
            </button>
            <button
              className="absolute right-5 top-1/2 transform -translate-y-1/2"
              onClick={handleRightClick}
              aria-label="Rolar para a direita"
            >
              <img className="w-[20px]" src={iconNext} alt="Scroll Right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vitrine;

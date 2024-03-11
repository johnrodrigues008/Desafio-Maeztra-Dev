import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  colors: string[];
}

import BannerFauzSuede from "../../assets/image/Faux-Suede-Mini-Skirt.webp";
import BannerFauzRose from "../../assets/image/ruched-rose-print-mini-skirt.webp";



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

const Vitrine = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <section className="vitrine mt-[80px]">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl mb-8 Titillium-Bold">As Mais Pedidas</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[16px]">
          {products.map((product) => (
            <div key={product.id} className="w-[100%]  pb-[16px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full mb-[8px]"
              />

              <div className="m-[27px] mb-0 mt-0 text-start">
                <div className="h-[210px]">
                  <div className="flex mb-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`w-6 h-6 mr-2 rounded-[4px] ${
                          selectedColor === color
                            ? "border-2 border-gray-600"
                            : ""
                        }`}
                        style={{ backgroundColor: color.toLowerCase() }}
                        onClick={() => handleColorClick(color)}
                      ></button>
                    ))}
                  </div>

                  <p className="Titillium-Bold -text--color-2-900 text-[20px] mb-2">
                    ${product.price}
                  </p>
                  <h3 className="Titillium-Regular text-[16px] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-2 text-[12px]">
                    {product.description}
                  </p>
                </div>

                <button className="-bg--color-1-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vitrine;

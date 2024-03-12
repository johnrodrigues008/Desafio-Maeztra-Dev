import "./Brands.css";

import BannerComma from "../../assets/image/banner-coma-red.webp";
import BannerMelissa from "../../assets/image/banner-melissa-red.webp";
import BannerForever from "../../assets/image/banner-forever-21-red.webp";
import BannerZara from "../../assets/image/banner-zara-red.webp";
import BannerAnnTaylor from "../../assets/image/banner-ann-taylor-red.webp";

const Brands: React.FC = () => {
  

  return (
    <div className="why relative h-[109px] z-10 lg:mt-[80px] lg:w-full lg:flex lg:items-center lg:justify-center">
      <div className="lg:container">
        <h2 className="w-full text-center  Titillium-Bold text-[32px] mt-[40px] lg:mt-0 lg:text-[32px] -text--color-2-400">
          Marcas Parceiras
        </h2>
        <div className="brandsbar mt-[16px] ml-[20px]">
          <div className="brandsbar-card flex justify-start items-center rounded-[4px]">
            <img
              className="w-full"
              src={BannerComma}
              alt="Icone do planeta simbolizando os produtos importados"
              loading="lazy"
            />
          </div>

          <div className="brandsbar-card flex justify-start items-center rounded-[4px]">
            <img
              className="w-full"
              src={BannerMelissa}
              alt="Icone de uma empresa simbolizando o estoque no brasil"
              loading="lazy"
            />
          </div>

          <div className="brandsbar-card flex justify-start items-center rounded-[4px]">
            <img
              className="w-full"
              src={BannerForever}
              alt="Icone de uma caixa com um circulo do infinio em volta simbolizando as trocas rápidas e com garantia."
              loading="lazy"
            />
          </div>

          <div className="brandsbar-card flex justify-start items-center rounded-[4px]">
            <img
              className="ww-full"
              src={BannerZara}
              alt="Icone de uma etiqueta simbolizando os descontos"
              loading="lazy"
            />
          </div>

          <div className="brandsbar-card flex justify-start items-center rounded-[4px]">
            <img
              className="w-full"
              src={BannerAnnTaylor}
              alt="Icone de um caminhão para simbolizar o frete gratis apartir de R$: 499,00"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default Brands;

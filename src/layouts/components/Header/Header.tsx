import { useState } from "react";
import "./Header.css";

// Importação dos componentes
import iconDrawer from "../../assets/icons/icon-drawer.webp";
import iconSearch from "../../assets/icons/icon-search.webp";
import iconUser from "../../assets/icons/icon-user.webp";
import iconHeart from "../../assets/icons/icon-heart.webp";
import iconShopping from "../../assets/icons/icon-shopping.webp";
import iconDress from "../../assets/icons/icon-dress.webp";

import logo from "../../assets/image/logo.webp";

const Header = () => {
  const [selectedLink, setSelectedLink] = useState<string>("novidades");

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  return (
    <header>
      <div className="w-full h-[24px] text-[10px] -bg--color-2-400 flex justify-center items-center">
        <div className="container text-center">
          <p className="m-0 p-0 text-white">
            Acompanhe as melhores promoções disponíveis aqui na Maeztra.
          </p>
        </div>
      </div>

      <nav className="w-full h-[88px] flex flex-row justify-center shadow-custom">
        <div className="container flex justify-between items-center px-[20px]">
          <div className="flex justify-center items-center">
            <button className="mr-[15px] lg:hidden">
              <img
                className="w-[32px] h-[32px] lg:hidden"
                src={iconDrawer}
                alt="Icone para abertura do menu"
              />
            </button>
            <a href="#">
              <img
                className="w-[110px] h-[11px]"
                src={logo}
                alt="Logo escrito MAEZTRA"
              />
            </a>
          </div>

          <div className="w-[20%] flex lg:max-w-[591px] justify-end items-center lg:w-[40%]">
            <input
              className="hidden lg:block lg:w-full lg:h-[40px] lg:rounded-[10px] lg:pl-[27px] lg:-text--color-2-400 lg:-bg--color-4-500 relative"
              type="text"
              aria-label="Digite sua pesquisa"
              placeholder="O Que Você Busca?"
            />

            <button aria-label="Buscar" className="absolute">
              <p className="hidden lg:ml-[8px] lg:-bg--color-1-500 lg:w-[119px] lg:h-[40px] lg:flex lg:justify-center lg:items-center lg:text-white lg:rounded-[8px]">
                Buscar
              </p>
              <img
                className="w-[32px] h-[32px] lg:hidden"
                src={iconSearch}
                alt="Icone de pesquisa"
              />
            </button>
          </div>

          <div className="flex justify-center items-center">
            <button className="hidden lg:flex mr-[39px]">
              <img
                className="w-[32px] h-[32px] lg:w-[14px] lg:h-[16px]"
                src={iconUser}
                alt="Icone de um usuário em formato de uma pessoa"
              />
              <p className="hidden lg:block ml-[8px]">Minha Conta</p>
            </button>

            <button className="hidden lg:flex lg:items-center lg:justify-center mr-[39px]">
              <img
                className="w-[18.28px] h-[16px] mr-[8px]"
                src={iconHeart}
                alt="Icone de favorito em formato de coração"
              />
              <p>Minha Conta</p>
            </button>

            <button className="lg:flex lg:border-[1px] lg:border-[#faa500] lg:rounded-[8px] lg:p-[12px]">
              <img
                className="w-[32px] h-[32px] lg:w-[22px] lg:h-[22px]"
                src={iconShopping}
                alt="Icone de uma sacola para acessara s compras"
              />
              <p className="hidden lg:block ml-[8px]">Meu Carrinho</p>
            </button>
          </div>
        </div>
      </nav>

      <div className="hidden lg:w-full lg:h-[48px] lg:flex lg:justify-center lg:items-center">
        <ul className="flex">
          <li className="w-[146px] flex justify-center items-center ">
            <a
              href="#"
              className={`link ${
                selectedLink === "novidades"
                  ? "selected -text--color-1-500 Titillium-Bold"
                  : ""
              } flex`}
              onClick={() => handleLinkClick("novidades")}
            >
              {selectedLink === "novidades" ? <IconSelected /> : <NoSelected />}
              Novidades
            </a>
          </li>
          <li className="w-[146px] flex justify-center items-center">
            <a
              href="#"
              className={`link ${
                selectedLink === "vestido"
                  ? "selected -text--color-1-500 Titillium-Bold"
                  : ""
              } flex`}
              onClick={() => handleLinkClick("vestido")}
            >
              {selectedLink === "vestido" ? <IconSelected /> : <NoSelected />}
              Vestidos
            </a>
          </li>
          <li className="w-[146px] flex justify-center items-center">
            <a
              href="#"
              className={`link ${
                selectedLink === "roupas"
                  ? "selected -text--color-1-500 Titillium-Bold"
                  : ""
              } flex`}
              onClick={() => handleLinkClick("roupas")}
            >
              {selectedLink === "roupas" ? <IconSelected /> : <NoSelected />}
              Roupas
            </a>
          </li>
          <li className="w-[146px] flex justify-center items-center">
            <a
              href="#"
              className={`link ${
                selectedLink === "sapatos"
                  ? "selected -text--color-1-500 Titillium-Bold"
                  : ""
              } flex`}
              onClick={() => handleLinkClick("sapatos")}
            >
              {selectedLink === "sapatos" ? <IconSelected /> : <NoSelected />}
              Sapatos
            </a>
          </li>
          <li className="w-[146px] flex justify-center items-center">
            <a
              href="#"
              className={`link ${
                selectedLink === "lingerie"
                  ? "selected -text--color-1-500 Titillium-Bold"
                  : ""
              } flex`}
              onClick={() => handleLinkClick("lingerie")}
            >
              {selectedLink === "lingerie" ? <IconSelected /> : <NoSelected />}
              Lingerie
            </a>
          </li>
          <li className="w-[146px] flex justify-center items-center">
            <a
              href="#"
              className={`link ${
                selectedLink === "acessorios"
                  ? "selected -text--color-1-500 Titillium-Bold"
                  : ""
              } flex`}
              onClick={() => handleLinkClick("acessorios")}
            >
              {selectedLink === "acessorios" ? (
                <IconSelected />
              ) : (
                <NoSelected />
              )}
              Acessórios
            </a>
          </li>
          <li className="w-[146px] flex justify-center items-center">
            <a
              href="#"
              className={`link ${
                selectedLink === "outlet"
                  ? "selected -text--color-1-500 Titillium-Bold"
                  : ""
              } flex`}
              onClick={() => handleLinkClick("outlet")}
            >
              {selectedLink === "outlet" ? <IconSelected /> : <NoSelected />}
              OUTLET
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

const IconSelected: React.FC = () => {
  return (
    <img
      className="mr-[8px] w-[16px] h-[16px]"
      src={iconDress}
      alt="Icone de um vestido significando que o item está selecionado"
    />
  );
};

const NoSelected: React.FC = () => {
  return (
    <img
      className="hidden"
      src={iconDress}
      alt="Icone de um vestido significando que o item está selecionado"
    />
  );
};

export default Header;

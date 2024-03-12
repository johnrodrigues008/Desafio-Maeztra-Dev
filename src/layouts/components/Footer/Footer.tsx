import { useState } from "react";
import "./Footer.css";

import IconFacebook from "../../assets/icons/icon-facebook.webp";
import IconLinkedin from "../../assets/icons/icon-linkedin.webp";
import IconInstagram from "../../assets/icons/icon-instagram.webp";
import IconYoutube from "../../assets/icons/icon-youtube.webp";
import IconVisa from "../../assets/icons/icon-visa.webp";
import IconMastecard from "../../assets/icons/icon-mastecard.webp";

import IconVtex from "../../assets/icons/iconVtexEco.svg";
import IconMaeztra from "../../assets/icons/iconMaeztra.svg";

const Footer: React.FC = () => {
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);

  const toggleInfoDropdown = () => {
    setInfoDropdownOpen(!infoDropdownOpen);
  };

  const toggleAccountDropdown = () => {
    setAccountDropdownOpen(!accountDropdownOpen);
  };

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!locationDropdownOpen);
  };

  return (
    <footer className="footer w-full flex justify-center items-center flex-col ">
      <div className="container flex justify-center items-center">
        <div className="w-full px-[20px] lg:max-w-[937px] lg:flex lg:justify-between lg:mt-[41px]">
          <div className="mt-[16px]">
            <div className="flex justify-between" onClick={toggleInfoDropdown}>
              <p className="Titillium-Bold text-[16px] -text--color-2-900">
                Informações
              </p>

              <p className="Titillium-Bold text-[16px] -text--color-2-900 lg:hidden">
                {infoDropdownOpen ? "-" : "+"}
              </p>
            </div>

            <ul
              className={`dropdown ${
                infoDropdownOpen ? "footerDropOpen" : ""
              } hidden mb-[64px] -text--color-2-900 lg:flex lg:flex-col`}
            >
              <li className="list-none mt-[24px]">
                <a className="text-[12px] Titillium-Regular mr-[22px]" href="#">
                  Quem Somos
                </a>
              </li>
              <li className="list-none mt-[24px]">
                <a className="text-[12px] Titillium-Regular mr-[22px]" href="#">
                  Prazo de Envio
                </a>
              </li>
              <li className="list-none mt-[24px]">
                <a className="text-[12px] Titillium-Regular mr-[22px]" href="#">
                  Trocas e Devoluções
                </a>
              </li>
              <li className="list-none mt-[24px]">
                <a className="text-[12px] Titillium-Regular mr-[22px]" href="#">
                  Promoções e Cupons
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-[16px]">
            <div
              onClick={toggleAccountDropdown}
              className=" lg:mb-0 -text--color-2-900 flex justify-between"
            >
              <p className="Titillium-Bold text-[16px] -text--color-2-900">
                Minha Conta
              </p>

              <p className="Titillium-Bold text-[16px] -text--color-2-900 lg:hidden">
                {accountDropdownOpen ? "-" : "+"}
              </p>
            </div>

            <ul
              className={`dropdown ${
                accountDropdownOpen ? "footerDropOpen" : ""
              } hidden mb-[64px] lg:flex lg:flex-col `}
            >
              <li className="mt-[24px]">
                <a className="text-[12px] Titillium-Regular mr-[22px]" href="#">
                  Minha Conta
                </a>
              </li>
              <li className="mt-[24px]">
                <a className="text-[12px] Titillium-Regular mr-[22px]" href="#">
                  Meus Pedidos
                </a>
              </li>
              <li className="mt-[24px]">
                <a className="text-[12px] Titillium-Regular mr-[22px]" href="#">
                  Cadastre-se
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-[16px] mb-[56px]">
            <ul
              className="flex justify-between"
              onClick={toggleLocationDropdown}
            >
              <li className="Titillium-Bold text-[16px] -text--color-2-900 list-none">
                Onde nos Encontrar
              </li>
              <li className="Titillium-Bold text-[16px] -text--color-2-900 list-none lg:hidden">
                {locationDropdownOpen ? "-" : "+"}
              </li>
            </ul>

            <ul
              className={`dropdown ${
                locationDropdownOpen ? "footerDropOpen" : ""
              } hidden mb-[64px] -text--color-2-900 lg:flex lg:flex-col`}
            >
              <li className="mt-[24px] list-none">
                <a className="text-[12px] Titillium-Regular" href="#">
                  Lojas
                </a>
              </li>
              <li className="mt-[24px] list-none">
                <a className="text-[12px] Titillium-Regular " href="#">
                  Endereço
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="w-full flex justify-center items-center flex-row -bg--color-2-400 
      bg  lg:flex"
      >
        <div className="container flex flex-col justify-center items-center lg:justify-between pt-[24px] lg: lg:flex lg:flex-row lg:[85px] lg:items-center">
          <div className="pb-[32px] flex items-center lg:items-center lg:p-0">
            <a className="text-[12px] Titillium-Regular mr-[22px]" href="#">
              <img
                className="w-[32px]"
                src={IconFacebook}
                alt="Icone do facebook"
              />
            </a>
            <a className="text-[12px] Titillium-Regular mr-[22px]" href="#">
              <img
                className="w-[32px]"
                src={IconLinkedin}
                alt="Icone do Linkedin"
              />
            </a>
            <a className="text-[12px] Titillium-Regular mr-[22px]" href="#">
              <img
                className="w-[32px]"
                src={IconInstagram}
                alt="Icone do instagram"
              />
            </a>
            <a className="text-[12px] Titillium-Regular mr-[22px]" href="#">
              <img
                className="w-[32px]"
                src={IconYoutube}
                alt="Icone do Youtube"
              />
            </a>
          </div>

          <div className="pb-[32px] links-payment flex justify-cen mt-[24px] items-center lg:mt-0 lg:p-0">
            <a className="text-[12px] Titillium-Regular mr-[22px]" href="#">
              <img
                className="w-[32px]"
                src={IconVisa}
                alt="Icone de pagamento visa"
              />
            </a>
            <a className="text-[12px] Titillium-Regular mr-[22px]" href="#">
              <img
                className="w-[32px]"
                src={IconMastecard}
                alt="Icone de pagamento mastecard"
              />
            </a>
            <a className="text-[12px] Titillium-Regular mr-[22px]" href="#">
              <img
                className="w-[32px]"
                src={IconVisa}
                alt="Icone simbolizando pagamento com visa"
              />
            </a>
            <a className="text-[12px] Titillium-Regular mr-[22px]" href="#">
              <img
                className="w-[32px]"
                src={IconMastecard}
                alt="Icone simbolizando o pagamento com mastecard"
              />
            </a>
          </div>

          <div className="pb-[32px] flex items-center -text--color-5-500 lg:mt-0 lg:p-0">
            <div className="links-compan-card">
              <p>Powered by</p>
              <img className="w-[80px]" src={IconVtex} alt="Icone da vtex" />
            </div>
            <div className="links-compan-card ml-[22px]">
              <p>Developed by</p>
              <img
                className="w-[150px]"
                src={IconMaeztra}
                alt="Icone da maeztra"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

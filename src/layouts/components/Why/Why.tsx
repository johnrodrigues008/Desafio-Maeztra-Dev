import { useEffect, useRef, useState } from "react";
import './Why.css';

// Importação dos icones
import iconWorld from "../../assets/icons/icon-world.webp";
import iconHouse from "../../assets/icons/icon-house.webp";
import iconTroca from "../../assets/icons/icon-troca.webp";
import iconEtiqueta from "../../assets/icons/icon-etiqueta.webp";
import iconFrete from "../../assets/icons/icon-frete.webp";

const Why = () => {
  const tipbarRef = useRef<HTMLDivElement>(null);

  const isMouseDownRef = useRef(false);
  const mouseDownXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    const tipbar = tipbarRef.current;

    if (!tipbar) return;

    const handleMouseDown = (event: MouseEvent) => {
      isMouseDownRef.current = true;
      mouseDownXRef.current = event.clientX;
      scrollLeftRef.current = tipbar.scrollLeft;
    };

    const handleMouseUp = () => {
      isMouseDownRef.current = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isMouseDownRef.current) return;
      const deltaX = event.clientX - mouseDownXRef.current;
      tipbar.scrollLeft = scrollLeftRef.current - deltaX;
    };

    tipbar.addEventListener("mousedown", handleMouseDown);
    tipbar.addEventListener("mouseup", handleMouseUp);
    tipbar.addEventListener("mousemove", handleMouseMove);

    return () => {
      tipbar.removeEventListener("mousedown", handleMouseDown);
      tipbar.removeEventListener("mouseup", handleMouseUp);
      tipbar.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  type BlockState = {
    active: boolean;
  };

  const [blockState, setBlockState] = useState<BlockState>({ active: false });

  const toggleBlockClass = () => {
    setBlockState({ active: !blockState.active });
  };

  return (
    <div className="why relative h-[109px] z-10">
      <h2 className="w-full text-center mt-[24px] Titillium-Bold text-[16px] -text--color-2-400">
        Por que comprar na Maeztra?
      </h2>
      <div
        className={`tipbar mt-[16px] ${
          blockState.active ? "" : "tipbar-selected"
        }`}
        onMouseDown={toggleBlockClass}
        onMouseUp={toggleBlockClass}
        ref={tipbarRef}
      >
        <div className="tipbar-card -bg--color-4-500 w-[298px] h-[64px] flex justify-start pl-[27px] items-center rounded-[4px]">
          <img
            className="w-[32px] h-[32px]"
            src={iconWorld}
            alt="Icone do planeta simbolizando os produtos importados"
          />
          <div className="ml-[21px]">
            <h3 className="Titillium-Bold">Produtos importados</h3>
            <p className="lg:text-[12px]">Produto de Alta Qualidade</p>
          </div>
        </div>

        <div className="tipbar-card -bg--color-4-500 w-[298px] h-[64px] flex justify-start pl-[27px] items-center rounded-[4px]">
          <img
            className="w-[32px] h-[32px]"
            src={iconHouse}
            alt="Icone de uma empresa simbolizando o estoque no brasil"
          />
          <div className="ml-[21px]">
            <h3 className="Titillium-Bold">Estoque no Brazil</h3>
            <p className="lg:text-[12px]">Produtos mais perto de você!</p>
          </div>
        </div>

        <div className="tipbar-card -bg--color-4-500 w-[298px] h-[64px] flex justify-start pl-[27px] items-center rounded-[4px]">
          <img
            className="w-[32px] h-[32px]"
            src={iconTroca}
            alt="Icone de uma caixa com um circulo do infinio em volta simbolizando as trocas rápidas e com garantia."
          />
          <div className="ml-[21px]">
            <h3 className="Titillium-Bold">Trocas Garantidas</h3>
            <p className="lg:text-[12px]">
              Trocas em até 48 horas, vejas as regras
            </p>
          </div>
        </div>

        <div className="tipbar-card -bg--color-4-500 w-[298px] h-[64px] flex justify-start pl-[27px] items-center rounded-[4px]">
          <img
            className="w-[32px] h-[32px]"
            src={iconEtiqueta}
            alt="Icone de uma etiqueta simbolizando os descontos"
          />
          <div className="ml-[21px]">
            <h3 className="Titillium-Bold">Ganhe 5% off</h3>
            <p className="lg:text-[12px]">Pagando à vista no Cartão</p>
          </div>
        </div>

        <div className="tipbar-card -bg--color-4-500 w-[298px] h-[64px] flex justify-start pl-[27px] items-center rounded-[4px]">
          <img
            className="w-[32px] h-[32px]"
            src={iconFrete}
            alt="Icone de um caminhão para simbolizar o frete gratis apartir de R$: 499,00"
          />
          <div className="ml-[21px]">
            <h3 className="Titillium-Bold">Frete Grátis</h3>
            <p className="lg:text-[12px]">Em compras acima de R$ 499,00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;

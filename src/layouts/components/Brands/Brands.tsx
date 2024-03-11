import "./Brands.css";

// Importação dos banners
import BannerComma from "../../assets/image/banner-coma_.webp";
import BannerMelissa from "../../assets/image/banner-melissa.webp";
import BannerForever from "../../assets/image/banner-forever-21.webp";
import BannerZara from "../../assets/image/banner-zara.webp";
import BannerAnnTaylor from "../../assets/image/banner-ann-taylor.webp";

const Brands: React.FC = () => {
  return (
    <div
      className="brands flex justify-center
    flex-col items-center"
    >
      <h2 className="w-full text-center mt-[32px] Titillium-Bold text-[32px] -text--color-2-400">
        Marcas Parceiras
      </h2>

      <div className="brandbar mt-[16px] container">
        {/* item1 */}
        <div className="mr-[15px]">
          <img className="w-[100%]" src={BannerComma} alt="Banner da marca Comma" />
        </div>

        {/* item 2 */}
        <div className="mr-[15px]">
          <img className="w-[100%]" src={BannerMelissa} alt="Banner da marca Melissa" />
        </div>

        {/* item 3 */}
        <div className="mr-[15px]">
          <img className="w-[100%]" src={BannerForever} alt="Banner da marca Forever 21" />
        </div>

        {/* item 4 */}
        <div className="mr-[15px]">
          <img className="w-[100%]" src={BannerZara} alt="Banner da marca Zara" />
        </div>

        {/* item 5 */}
        <div className="">
          <img className="w-[100%]" src={BannerAnnTaylor} alt="Banner da marca Ann Taylor" />
        </div>
      </div>
    </div>
  );
};

export default Brands;

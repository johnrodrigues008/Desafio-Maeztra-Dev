import bnNewCollectionDesktop from "../../assets/image/banner-new-collection-desktop.webp";
import bnNewCollectionMobiel from "../../assets/image/banner-new-collection-mobile-red.webp";

const Collection: React.FC = () => {
  return (
    <article className="collection flex justify-center items-center">
      <div className="container px-[20px] mt-[30px] flex justify-center flex-col lg:flex-row lg:p-0 lg:jus lg:items-center">
        <div>
          <h2 className="Titillium-Bold text-[24px] w-full">Lorem ipsum </h2>
          <p className="mt-[16px] mr-[30px] Titillium-Regular text-[14px] lg:max-w-[420px] lg:mr-[64px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
            dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris
            integer. Nibh sagittis in lobortis sed cursus condimentum velit
            pharetra. Amet luctus ut vulputate scelerisque placerat consequat.
            Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique.
            Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue
            eget convallis volutpat aliquet. Sed sed pellentesque porttitor
            phasellus donec condimentum sit sapien.
          </p>
        </div>
        <picture>
          <source media="(min-width: 1024px)" srcSet={bnNewCollectionDesktop} />
          <img
            className="mt-[24px] w-full rounded-[4px] max-w-[730px]"
            src={bnNewCollectionMobiel}
            alt="banner com referênciando a nova coleção"
            loading="lazy"
          />
        </picture>
      </div>
    </article>
  );
};

export default Collection;

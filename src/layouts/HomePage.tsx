import Fullbanner from "./components/Fullbanner/Fullbanner";
import Header from "./components/Header/Header";
import Why from "./components/Why/Why";
import Brands from "./components/Brands/Brands";
import Vitrine from "./components/Vitrine/Vitrine";
import Collection from "./components/Collection/Collection";
import Newsletter from "./components/Newsletter/Newsletter";

const HomePage = () => {
  return (
    <>
      <Header />
      <Fullbanner />
      <Why />
      <Brands />
      <Vitrine />
      <Collection />
      <Newsletter />
    </>
  );
};

export default HomePage;

import React from "react";

import Header from "./components/Header/Header";
import Fullbanner from "./components/Fullbanner/Fullbanner";

const Why = React.lazy(() => import("./components/Why/Why"));
const Brands = React.lazy(() => import("./components/Brands/Brands"));
const Vitrine = React.lazy(() => import("./components/Vitrine/Vitrine"));
const Collection = React.lazy(() => import("./components/Collection/Collection"));
const Newsletter = React.lazy(() => import("./components/Newsletter/Newsletter"));


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

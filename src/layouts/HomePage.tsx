import React, { useState, useEffect, Suspense } from "react";
import Header from "./components/Header/Header";
import Fullbanner from "./components/Fullbanner/Fullbanner";

const Why = React.lazy(() => import("./components/Why/Why"));
const Brands = React.lazy(() => import("./components/Brands/Brands"));
const Vitrine = React.lazy(() => import("./components/Vitrine/Vitrine"));
const Collection = React.lazy(() => import("./components/Collection/Collection"));
const Newsletter = React.lazy(() => import("./components/Newsletter/Newsletter"));

const HomePage = () => {
  const [componentsLoaded, setComponentsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComponentsLoaded(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <Fullbanner />
      <Why />

      {componentsLoaded && (
        <Suspense fallback={<div>Carregando...</div>}>
          <Brands />
          <Vitrine />
          <Collection />
          <Newsletter />
        </Suspense>
      )}
    </>
  );
};

export default HomePage;
